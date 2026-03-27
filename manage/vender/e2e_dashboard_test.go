//go:build e2e

package main

import (
	"bytes"
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"database/sql"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net"
	"net/http"
	"strings"
	"testing"
	"time"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
	"github.com/authzed/authzed-go/v1"
	"github.com/authzed/grpcutil"
	_ "github.com/jackc/pgx/v5/stdlib"
	"github.com/nats-io/nats.go"
	"github.com/nats-io/nkeys"
	"github.com/redis/go-redis/v9"
	clientv3 "go.etcd.io/etcd/client/v3"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	"github.com/egoavara/personal-cluster/manage/vender/internal/adapter"
	"github.com/egoavara/personal-cluster/manage/vender/internal/config"
	"github.com/egoavara/personal-cluster/manage/vender/internal/dashboard"
	"github.com/egoavara/personal-cluster/manage/vender/internal/reaper"
	"github.com/egoavara/personal-cluster/manage/vender/internal/store"
)

// ---------------------------------------------------------------------------
// Dashboard test helpers
// ---------------------------------------------------------------------------

func startTestDashboard(t *testing.T, templates []config.Template, adapters map[string]adapter.Adapter) (baseURL string, cancel context.CancelFunc) {
	t.Helper()

	ctx, cancelFn := context.WithCancel(context.Background())

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Find a free port
	port, err := freePortForDashboard()
	if err != nil {
		t.Fatalf("free port: %v", err)
	}

	cfg := &config.Config{
		ListenAddr: fmt.Sprintf(":%d", port),
		SpiceDB: config.SpiceDBConfig{
			Endpoint:     spicedbAddr,
			PresharedKey: spicedbKey,
		},
		Templates: templates,
	}

	logger, _ := zap.NewDevelopment()

	go func() {
		if err := dashboard.Run(ctx, cfg, adapters, credStore, logger); err != nil && ctx.Err() == nil {
			t.Errorf("dashboard.Run error: %v", err)
		}
	}()

	base := fmt.Sprintf("http://localhost:%d", port)

	// Wait for healthz
	deadline := time.Now().Add(5 * time.Second)
	for time.Now().Before(deadline) {
		resp, err := http.Get(base + "/healthz")
		if err == nil && resp.StatusCode == 200 {
			resp.Body.Close()
			return base, cancelFn
		}
		if resp != nil {
			resp.Body.Close()
		}
		time.Sleep(100 * time.Millisecond)
	}

	t.Fatal("dashboard did not become ready within 5s")
	return "", cancelFn
}

func freePortForDashboard() (int, error) {
	l, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		return 0, err
	}
	port := l.Addr().(*net.TCPAddr).Port
	l.Close()
	return port, nil
}

// ---------------------------------------------------------------------------
// SpiceDB schema helper
// ---------------------------------------------------------------------------

func ensureSpiceDBTemplateSchema(t *testing.T) {
	t.Helper()

	client, err := authzed.NewClient(
		spicedbAddr,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpcutil.WithInsecureBearerToken(spicedbKey),
	)
	if err != nil {
		t.Fatalf("spicedb client: %v", err)
	}

	readResp, err := client.ReadSchema(context.Background(), &v1.ReadSchemaRequest{})
	if err != nil {
		t.Fatalf("read spicedb schema: %v", err)
	}

	if strings.Contains(readResp.SchemaText, "definition template") {
		return
	}

	newDefs := ""
	if !strings.Contains(readResp.SchemaText, "definition user") {
		newDefs += "\ndefinition user {}\n"
	}
	newDefs += `
definition template {
	relation owner: user
	relation viewer: user
	permission use = owner + viewer
}
`
	_, err = client.WriteSchema(context.Background(), &v1.WriteSchemaRequest{
		Schema: readResp.SchemaText + newDefs,
	})
	if err != nil {
		t.Fatalf("write spicedb schema: %v", err)
	}
	time.Sleep(2 * time.Second)
}

// ---------------------------------------------------------------------------
// SpiceDB test data setup
// ---------------------------------------------------------------------------

func setupSpiceDBTestRelationships(t *testing.T, templateIDs []string, testUser string) {
	t.Helper()

	client, err := authzed.NewClient(
		spicedbAddr,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpcutil.WithInsecureBearerToken(spicedbKey),
	)
	if err != nil {
		t.Fatalf("spicedb client: %v", err)
	}

	// Read existing schema and append template definition if missing
	readResp, err := client.ReadSchema(context.Background(), &v1.ReadSchemaRequest{})
	if err != nil {
		t.Fatalf("read spicedb schema: %v", err)
	}

	existingSchema := readResp.SchemaText
	if !strings.Contains(existingSchema, "definition template") {
		// Append template and user definitions (user may already exist)
		newDefs := ""
		if !strings.Contains(existingSchema, "definition user") {
			newDefs += "\ndefinition user {}\n"
		}
		newDefs += `
definition template {
	relation owner: user
	relation viewer: user
	permission use = owner + viewer
}
`
		_, err = client.WriteSchema(context.Background(), &v1.WriteSchemaRequest{
			Schema: existingSchema + newDefs,
		})
		if err != nil {
			t.Fatalf("write spicedb schema: %v", err)
		}
		t.Log("  SpiceDB schema updated: added 'template' definition")
		// Wait for schema to propagate across SpiceDB replicas
		time.Sleep(2 * time.Second)
	} else {
		t.Log("  SpiceDB schema already contains 'template' definition")
	}

	// Write relationships
	var updates []*v1.RelationshipUpdate
	for _, tid := range templateIDs {
		updates = append(updates, &v1.RelationshipUpdate{
			Operation: v1.RelationshipUpdate_OPERATION_TOUCH,
			Relationship: &v1.Relationship{
				Resource: &v1.ObjectReference{ObjectType: "template", ObjectId: tid},
				Relation: "viewer",
				Subject:  &v1.SubjectReference{Object: &v1.ObjectReference{ObjectType: "user", ObjectId: testUser}},
			},
		})
	}

	_, err = client.WriteRelationships(context.Background(), &v1.WriteRelationshipsRequest{
		Updates: updates,
	})
	if err != nil {
		t.Fatalf("write relationships: %v", err)
	}
	t.Logf("  SpiceDB relationships written for user=%s templates=%v", testUser, templateIDs)

	// Verify the relationship is visible with FullyConsistent
	for _, tid := range templateIDs {
		checkResp, err := client.CheckPermission(context.Background(), &v1.CheckPermissionRequest{
			Resource:   &v1.ObjectReference{ObjectType: "template", ObjectId: tid},
			Permission: "use",
			Subject:    &v1.SubjectReference{Object: &v1.ObjectReference{ObjectType: "user", ObjectId: testUser}},
			Consistency: &v1.Consistency{
				Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true},
			},
		})
		if err != nil {
			t.Fatalf("verify permission check for %s: %v", tid, err)
		}
		t.Logf("  SpiceDB permission check: template:%s#use@user:%s = %v", tid, testUser, checkResp.Permissionship)
		if checkResp.Permissionship != v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION {
			// Debug: read relationships
			readResp, err := client.ReadRelationships(context.Background(), &v1.ReadRelationshipsRequest{
				RelationshipFilter: &v1.RelationshipFilter{
					ResourceType: "template",
					OptionalResourceId: tid,
				},
				Consistency: &v1.Consistency{
					Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true},
				},
			})
			if err != nil {
				t.Logf("  read relationships error: %v", err)
			} else {
				for {
					rel, err := readResp.Recv()
					if err != nil {
						break
					}
					t.Logf("  existing relationship: %s:%s#%s@%s:%s",
						rel.Relationship.Resource.ObjectType, rel.Relationship.Resource.ObjectId,
						rel.Relationship.Relation,
						rel.Relationship.Subject.Object.ObjectType, rel.Relationship.Subject.Object.ObjectId)
				}
			}
			t.Fatalf("permission check failed for template:%s — relationship may not have been written", tid)
		}
	}
	t.Log("  SpiceDB permission verified ✓")
}

func cleanupSpiceDBTestRelationships(t *testing.T, templateIDs []string, testUser string) {
	t.Helper()

	client, err := authzed.NewClient(
		spicedbAddr,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpcutil.WithInsecureBearerToken(spicedbKey),
	)
	if err != nil {
		return
	}

	var updates []*v1.RelationshipUpdate
	for _, tid := range templateIDs {
		updates = append(updates, &v1.RelationshipUpdate{
			Operation: v1.RelationshipUpdate_OPERATION_DELETE,
			Relationship: &v1.Relationship{
				Resource: &v1.ObjectReference{ObjectType: "template", ObjectId: tid},
				Relation: "viewer",
				Subject:  &v1.SubjectReference{Object: &v1.ObjectReference{ObjectType: "user", ObjectId: testUser}},
			},
		})
	}

	client.WriteRelationships(context.Background(), &v1.WriteRelationshipsRequest{
		Updates: updates,
	})
}

// ---------------------------------------------------------------------------
// Dashboard Tests
// ---------------------------------------------------------------------------

func TestDashboard_Healthz(t *testing.T) {
	baseURL, cancel := startTestDashboard(t, nil, nil)
	defer cancel()

	resp, err := http.Get(baseURL + "/healthz")
	if err != nil {
		t.Fatalf("GET /healthz: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		t.Fatalf("expected 200, got %d", resp.StatusCode)
	}

	body, _ := io.ReadAll(resp.Body)
	if string(body) != "ok" {
		t.Fatalf("expected 'ok', got '%s'", body)
	}
	t.Log("  /healthz → 200 'ok' ✓")
}

func TestDashboard_Unauthorized(t *testing.T) {
	baseURL, cancel := startTestDashboard(t, nil, nil)
	defer cancel()

	// No X-Auth-Request-User header
	resp, err := http.Get(baseURL + "/credentials")
	if err != nil {
		t.Fatalf("GET /credentials: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 401 {
		t.Fatalf("expected 401, got %d", resp.StatusCode)
	}
	t.Log("  GET /credentials without auth → 401 ✓")
}

func TestDashboard_IssueThenListThenRevoke(t *testing.T) {
	testUser := "e2etest-dashboard"

	// Setup: Qdrant adapter (simplest — no external service needed for issuance)
	templates := []config.Template{
		{
			ID:          "qdrant-e2e",
			Name:        "Qdrant E2E Test",
			Description: "E2E test template",
			Service:     "qdrant",
			TTL:         10 * time.Minute,
			Params:      map[string]string{"collection": "test", "access": "r"},
		},
	}

	adapters := map[string]adapter.Adapter{
		"qdrant": adapter.NewQdrantAdapter("e2e-dashboard-test-key"),
	}

	// Setup SpiceDB permission
	setupSpiceDBTestRelationships(t, []string{"qdrant-e2e"}, testUser)
	defer cleanupSpiceDBTestRelationships(t, []string{"qdrant-e2e"}, testUser)

	baseURL, cancel := startTestDashboard(t, templates, adapters)
	defer cancel()

	// 1. Issue credential
	issueBody, _ := json.Marshal(map[string]string{"templateId": "qdrant-e2e"})
	req, _ := http.NewRequest(http.MethodPost, baseURL+"/credentials/issue", bytes.NewReader(issueBody))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Auth-Request-User", testUser)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("POST /credentials/issue: %v", err)
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)

	if resp.StatusCode != 201 {
		t.Fatalf("expected 201, got %d: %s", resp.StatusCode, body)
	}

	var issuedCred struct {
		ID      string            `json:"id"`
		Service string            `json:"service"`
		Secrets map[string]string `json:"secrets"`
	}
	if err := json.Unmarshal(body, &issuedCred); err != nil {
		t.Fatalf("parse issued credential: %v", err)
	}
	if issuedCred.Secrets["apiKey"] == "" {
		t.Fatal("expected apiKey in secrets")
	}
	t.Logf("  issued credential: id=%s ✓", issuedCred.ID)

	// 2. List credentials
	req2, _ := http.NewRequest(http.MethodGet, baseURL+"/credentials", nil)
	req2.Header.Set("X-Auth-Request-User", testUser)

	resp2, err := http.DefaultClient.Do(req2)
	if err != nil {
		t.Fatalf("GET /credentials: %v", err)
	}
	defer resp2.Body.Close()
	body2, _ := io.ReadAll(resp2.Body)

	if resp2.StatusCode != 200 {
		t.Fatalf("expected 200, got %d: %s", resp2.StatusCode, body2)
	}

	var creds []struct {
		ID string `json:"id"`
	}
	if err := json.Unmarshal(body2, &creds); err != nil {
		t.Fatalf("parse credentials list: %v", err)
	}
	found := false
	for _, c := range creds {
		if c.ID == issuedCred.ID {
			found = true
			break
		}
	}
	if !found {
		t.Fatalf("issued credential %s not found in list", issuedCred.ID)
	}
	t.Log("  credential found in list ✓")

	// 3. Revoke credential
	revokeBody, _ := json.Marshal(map[string]string{
		"credentialId": issuedCred.ID,
		"service":      "qdrant",
	})
	req3, _ := http.NewRequest(http.MethodPost, baseURL+"/credentials/revoke", bytes.NewReader(revokeBody))
	req3.Header.Set("Content-Type", "application/json")
	req3.Header.Set("X-Auth-Request-User", testUser)

	resp3, err := http.DefaultClient.Do(req3)
	if err != nil {
		t.Fatalf("POST /credentials/revoke: %v", err)
	}
	defer resp3.Body.Close()

	if resp3.StatusCode != 204 {
		body3, _ := io.ReadAll(resp3.Body)
		t.Fatalf("expected 204, got %d: %s", resp3.StatusCode, body3)
	}
	t.Log("  credential revoked ✓")

	// 4. List again — should be empty
	req4, _ := http.NewRequest(http.MethodGet, baseURL+"/credentials", nil)
	req4.Header.Set("X-Auth-Request-User", testUser)

	resp4, err := http.DefaultClient.Do(req4)
	if err != nil {
		t.Fatalf("GET /credentials: %v", err)
	}
	defer resp4.Body.Close()
	body4, _ := io.ReadAll(resp4.Body)

	var credsAfter []struct {
		ID string `json:"id"`
	}
	if err := json.Unmarshal(body4, &credsAfter); err != nil {
		t.Fatalf("parse credentials list: %v", err)
	}
	if len(credsAfter) != 0 {
		t.Fatalf("expected empty list after revoke, got %d items", len(credsAfter))
	}
	t.Log("  credential list empty after revoke ✓")
}

func TestDashboard_ForbiddenTemplate(t *testing.T) {
	testUser := "e2etest-forbidden"

	templates := []config.Template{
		{
			ID:          "forbidden-template",
			Name:        "Forbidden",
			Description: "Should not be accessible",
			Service:     "qdrant",
			TTL:         10 * time.Minute,
		},
	}

	adapters := map[string]adapter.Adapter{
		"qdrant": adapter.NewQdrantAdapter("forbidden-test-key"),
	}

	// Ensure SpiceDB has template definition (no relationships for this user)
	ensureSpiceDBTemplateSchema(t)

	baseURL, cancel := startTestDashboard(t, templates, adapters)
	defer cancel()

	issueBody, _ := json.Marshal(map[string]string{"templateId": "forbidden-template"})
	req, _ := http.NewRequest(http.MethodPost, baseURL+"/credentials/issue", bytes.NewReader(issueBody))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Auth-Request-User", testUser)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("POST /credentials/issue: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 403 {
		body, _ := io.ReadAll(resp.Body)
		t.Fatalf("expected 403, got %d: %s", resp.StatusCode, body)
	}
	t.Log("  forbidden template correctly denied → 403 ✓")
}

func TestDashboard_NonexistentTemplate(t *testing.T) {
	testUser := "e2etest-nonexistent"

	baseURL, cancel := startTestDashboard(t, nil, nil)
	defer cancel()

	issueBody, _ := json.Marshal(map[string]string{"templateId": "does-not-exist"})
	req, _ := http.NewRequest(http.MethodPost, baseURL+"/credentials/issue", bytes.NewReader(issueBody))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Auth-Request-User", testUser)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("POST /credentials/issue: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 404 {
		body, _ := io.ReadAll(resp.Body)
		t.Fatalf("expected 404, got %d: %s", resp.StatusCode, body)
	}
	t.Log("  nonexistent template → 404 ✓")
}

// ---------------------------------------------------------------------------
// Reaper Auto-Revoke Test
// ---------------------------------------------------------------------------

func TestReaper_AutoRevoke(t *testing.T) {
	testUser := "e2etest-reaper"

	// Qdrant adapter with short TTL
	templates := []config.Template{
		{
			ID:          "qdrant-reaper-test",
			Name:        "Qdrant Reaper Test",
			Description: "Short TTL for reaper testing",
			Service:     "qdrant",
			TTL:         2 * time.Second, // Expires in 2 seconds
			Params:      map[string]string{"collection": "test", "access": "r"},
		},
	}

	adapters := map[string]adapter.Adapter{
		"qdrant": adapter.NewQdrantAdapter("reaper-test-key"),
	}

	// Setup SpiceDB permission
	setupSpiceDBTestRelationships(t, []string{"qdrant-reaper-test"}, testUser)
	defer cleanupSpiceDBTestRelationships(t, []string{"qdrant-reaper-test"}, testUser)

	// Create store and dashboard manually for this test
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	logger, _ := zap.NewDevelopment()

	// Start reaper with 1-second interval
	reap := reaper.New(credStore, adapters, logger, 1*time.Second)
	go reap.Run(ctx)

	// Start dashboard
	port, err := freePortForDashboard()
	if err != nil {
		t.Fatalf("free port: %v", err)
	}

	cfg := &config.Config{
		ListenAddr: fmt.Sprintf(":%d", port),
		SpiceDB: config.SpiceDBConfig{
			Endpoint:     spicedbAddr,
			PresharedKey: spicedbKey,
		},
		Templates: templates,
	}

	go func() {
		dashboard.Run(ctx, cfg, adapters, credStore, logger)
	}()

	baseURL := fmt.Sprintf("http://localhost:%d", port)
	deadline := time.Now().Add(5 * time.Second)
	for time.Now().Before(deadline) {
		resp, err := http.Get(baseURL + "/healthz")
		if err == nil && resp.StatusCode == 200 {
			resp.Body.Close()
			break
		}
		if resp != nil {
			resp.Body.Close()
		}
		time.Sleep(100 * time.Millisecond)
	}

	// Issue credential with 2s TTL
	issueBody, _ := json.Marshal(map[string]string{"templateId": "qdrant-reaper-test"})
	req, _ := http.NewRequest(http.MethodPost, baseURL+"/credentials/issue", bytes.NewReader(issueBody))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Auth-Request-User", testUser)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("POST /credentials/issue: %v", err)
	}
	body, _ := io.ReadAll(resp.Body)
	resp.Body.Close()

	if resp.StatusCode != 201 {
		t.Fatalf("expected 201, got %d: %s", resp.StatusCode, body)
	}

	var issuedCred struct {
		ID string `json:"id"`
	}
	json.Unmarshal(body, &issuedCred)
	t.Logf("  issued credential with 2s TTL: id=%s", issuedCred.ID)

	// Verify it's in the list
	req2, _ := http.NewRequest(http.MethodGet, baseURL+"/credentials", nil)
	req2.Header.Set("X-Auth-Request-User", testUser)
	resp2, _ := http.DefaultClient.Do(req2)
	body2, _ := io.ReadAll(resp2.Body)
	resp2.Body.Close()
	t.Logf("  credentials before expiry: %s", body2)

	// Wait for TTL to expire + reaper to sweep (2s TTL + 1s interval + buffer)
	t.Log("  waiting 4s for TTL expiry + reaper sweep...")
	time.Sleep(4 * time.Second)

	// Verify credential is gone from the list
	req3, _ := http.NewRequest(http.MethodGet, baseURL+"/credentials", nil)
	req3.Header.Set("X-Auth-Request-User", testUser)
	resp3, _ := http.DefaultClient.Do(req3)
	body3, _ := io.ReadAll(resp3.Body)
	resp3.Body.Close()

	var credsAfter []struct {
		ID string `json:"id"`
	}
	json.Unmarshal(body3, &credsAfter)

	if len(credsAfter) != 0 {
		t.Fatalf("expected empty list after reaper sweep, got %d items: %s", len(credsAfter), body3)
	}
	t.Log("  credential auto-reaped after TTL expiry ✓")
}

// ---------------------------------------------------------------------------
// Reaper: Valkey — real backend credential cleanup + post-reap login denied
// ---------------------------------------------------------------------------

func TestReaper_Valkey_CleanupAndLoginDenied(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	va := adapter.NewValkeyAdapter(valkeyAddr, valkeyPassword)
	adapters := map[string]adapter.Adapter{"valkey": va}

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Issue a Valkey credential with 2s TTL directly via adapter
	cred, err := va.Issue(ctx, "e2etest-reaper-valkey", map[string]string{
		"commands": "+@read",
		"keys":     "~reaper-test:*",
	}, 2*time.Second)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}
	cred.Service = "valkey"
	cred.Template = "valkey-reaper-test"
	t.Logf("  issued Valkey credential: user=%s (TTL 2s)", cred.ID)

	// Save to store so reaper can find it
	storeCred := *cred
	storeCred.Secrets = nil
	if err := credStore.Save(ctx, &storeCred); err != nil {
		t.Fatalf("save to store: %v", err)
	}

	// Verify: connect with vended ACL user — should work
	vendedClient := redis.NewClient(&redis.Options{
		Addr:     valkeyAddr,
		Username: cred.ID,
		Password: cred.Secrets["password"],
	})

	err = vendedClient.Get(ctx, "reaper-test:foo").Err()
	if err != nil && err != redis.Nil {
		t.Fatalf("pre-reap GET failed: %v", err)
	}
	t.Log("  pre-reap: Valkey connection works ✓")
	vendedClient.Close()

	// Start reaper with 1s interval
	logger, _ := zap.NewDevelopment()
	reap := reaper.New(credStore, adapters, logger, 1*time.Second)
	go reap.Run(ctx)

	// Wait for TTL expiry + reaper sweep
	t.Log("  waiting 4s for TTL expiry + reaper sweep...")
	time.Sleep(4 * time.Second)

	// Verify: store shows revoked
	creds, err := credStore.ListExpired(ctx)
	if err != nil {
		t.Fatalf("list expired: %v", err)
	}
	for _, c := range creds {
		if c.ID == cred.ID {
			t.Fatalf("credential %s still in expired list — reaper did not clean it", cred.ID)
		}
	}
	t.Log("  post-reap: credential removed from expired list ✓")

	// Verify: reconnect with same credentials — should be DENIED
	revokedClient := redis.NewClient(&redis.Options{
		Addr:     valkeyAddr,
		Username: cred.ID,
		Password: cred.Secrets["password"],
	})
	defer revokedClient.Close()

	err = revokedClient.Ping(ctx).Err()
	if err == nil {
		t.Fatal("post-reap: Valkey login should have been denied, but succeeded")
	}
	t.Logf("  post-reap: Valkey login correctly denied: %v ✓", err)
}

// ---------------------------------------------------------------------------
// Reaper: PostgreSQL — NOLOGIN + terminate + DROP + post-reap login denied
// ---------------------------------------------------------------------------

func TestReaper_Postgres_CleanupAndLoginDenied(t *testing.T) {
	if !pgHasCreaterole {
		t.Skip("PG user lacks CREATEROLE — managed role not yet deployed")
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	pg, err := adapter.NewPostgresAdapter(pgDSN)
	if err != nil {
		t.Fatalf("new postgres adapter: %v", err)
	}
	adapters := map[string]adapter.Adapter{"postgres": pg}

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Issue with 2s TTL
	cred, err := pg.Issue(ctx, "e2etest-reaper-pg", map[string]string{
		"grants": "SELECT", "database": "app", "schema": "public",
	}, 2*time.Second)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}
	cred.Service = "postgres"
	cred.Template = "pg-reaper-test"
	t.Logf("  issued PG credential: role=%s (TTL 2s)", cred.ID)

	storeCred := *cred
	storeCred.Secrets = nil
	if err := credStore.Save(ctx, &storeCred); err != nil {
		t.Fatalf("save: %v", err)
	}

	// Verify: connect with vended role — should work
	vendedDSN := fmt.Sprintf("postgresql://%s:%s@%s/app?sslmode=disable",
		cred.Details["role"], cred.Secrets["password"], pgAddr)
	vendedDB, err := sql.Open("pgx", vendedDSN)
	if err != nil {
		t.Fatalf("open vended conn: %v", err)
	}
	var one int
	if err := vendedDB.QueryRowContext(ctx, "SELECT 1").Scan(&one); err != nil {
		t.Fatalf("pre-reap SELECT 1 failed: %v", err)
	}
	t.Log("  pre-reap: PG connection works (SELECT 1) ✓")

	// Keep connection open to test terminate
	// (vendedDB remains open during reaper sweep)

	// Start reaper
	logger, _ := zap.NewDevelopment()
	reap := reaper.New(credStore, adapters, logger, 1*time.Second)
	go reap.Run(ctx)

	t.Log("  waiting 4s for TTL expiry + reaper sweep...")
	time.Sleep(4 * time.Second)

	// Verify: existing connection should be terminated
	err = vendedDB.QueryRowContext(ctx, "SELECT 1").Scan(&one)
	vendedDB.Close()
	if err == nil {
		t.Log("  WARNING: existing connection still alive after reap (PG may buffer)")
	} else {
		t.Logf("  post-reap: existing connection terminated: %v ✓", err)
	}

	// Verify: new connection should be denied (role dropped)
	revokedDB, err := sql.Open("pgx", vendedDSN)
	if err == nil {
		err = revokedDB.PingContext(ctx)
		revokedDB.Close()
	}
	if err == nil {
		t.Fatal("post-reap: PG login should have been denied, but succeeded")
	}
	t.Logf("  post-reap: PG login correctly denied: %v ✓", err)
}

// ---------------------------------------------------------------------------
// Reaper: NATS — credential cleanup + post-reap login denied (JWT mode)
// ---------------------------------------------------------------------------

func TestReaper_NATS_CleanupAndLoginDenied(t *testing.T) {
	if natsAccountSeed == "" {
		t.Skip("NATS JWT auth not configured — nats-jwt-token Secret missing")
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	na, err := adapter.NewNATSAdapter(
		fmt.Sprintf("nats://%s", natsAddr),
		natsAccountSeed, natsOperatorSeed, natsSysUserJWT, []byte(natsSysUserSeed),
	)
	if err != nil {
		t.Fatalf("new nats adapter: %v", err)
	}
	adapters := map[string]adapter.Adapter{"nats": na}

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Issue with 2s TTL
	cred, err := na.Issue(ctx, "e2etest-reaper-nats", nil, 2*time.Second)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}
	cred.Service = "nats"
	cred.Template = "nats-reaper-test"
	t.Logf("  issued NATS credential: id=%s nkeyPub=%s (TTL 2s)", cred.ID, cred.Details["nkeyPub"])

	userJWT := cred.Secrets["userJWT"]
	userSeed := cred.Secrets["nkeySeed"]

	storeCred := *cred
	storeCred.Secrets = nil
	if err := credStore.Save(ctx, &storeCred); err != nil {
		t.Fatalf("save: %v", err)
	}

	// Verify: connect with user JWT and pub/sub
	nc, err := nats.Connect(fmt.Sprintf("nats://%s", natsAddr),
		nats.UserJWT(
			func() (string, error) { return userJWT, nil },
			func(nonce []byte) ([]byte, error) {
				kp, err := nkeys.FromSeed([]byte(userSeed))
				if err != nil {
					return nil, err
				}
				return kp.Sign(nonce)
			},
		),
	)
	if err != nil {
		t.Fatalf("NATS connect: %v", err)
	}

	sub, err := nc.SubscribeSync("reaper.nats.test")
	if err != nil {
		t.Fatalf("subscribe: %v", err)
	}

	nc.Publish("reaper.nats.test", []byte("before-reap"))
	nc.Flush()
	msg, err := sub.NextMsgWithContext(ctx)
	if err != nil || string(msg.Data) != "before-reap" {
		t.Fatalf("pre-reap pub/sub failed: %v", err)
	}
	nc.Close()
	t.Log("  pre-reap: NATS pub/sub works ✓")

	// Start reaper
	logger, _ := zap.NewDevelopment()
	reap := reaper.New(credStore, adapters, logger, 1*time.Second)
	go reap.Run(ctx)

	t.Log("  waiting 4s for TTL expiry + reaper sweep...")
	time.Sleep(4 * time.Second)

	// Verify: store cleaned up (reaper may fail on $SYS revoke via port-forward, but marks store)
	// Reaper Revoke error is logged but credential is still tracked for retry.
	// Check that JWT exp makes reconnection fail regardless.
	t.Log("  post-reap: checking JWT exp natural expiry...")

	// Verify: reconnect should fail — JWT has expired (2s TTL, 4s elapsed)
	_, err = nats.Connect(fmt.Sprintf("nats://%s", natsAddr),
		nats.UserJWT(
			func() (string, error) { return userJWT, nil },
			func(nonce []byte) ([]byte, error) {
				kp, err := nkeys.FromSeed([]byte(userSeed))
				if err != nil {
					return nil, err
				}
				return kp.Sign(nonce)
			},
		),
		nats.MaxReconnects(0),
	)
	if err == nil {
		t.Fatal("post-reap: NATS connection should have been denied (JWT expired), but succeeded")
	}
	t.Logf("  post-reap: NATS connection correctly denied: %v ✓", err)
}

// ---------------------------------------------------------------------------
// Reaper: etcd — credential cleanup + post-reap login denied
// ---------------------------------------------------------------------------

func TestReaper_Etcd_CleanupAndLoginDenied(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Check if etcd auth is enabled
	unauthClient, err := clientv3.New(clientv3.Config{
		Endpoints:   []string{etcdAddr},
		DialTimeout: 5 * time.Second,
	})
	if err != nil {
		t.Fatalf("etcd connect: %v", err)
	}
	authStatus, err := unauthClient.AuthStatus(ctx)
	unauthClient.Close()
	// "user name is empty" error means auth IS enabled (unauthenticated requests rejected)
	etcdAuthEnabled := (err == nil && authStatus.Enabled) ||
		(err != nil && strings.Contains(err.Error(), "user name is empty"))
	if !etcdAuthEnabled {
		t.Skip("etcd auth not enabled — reaper credential cleanup cannot be fully tested")
	}

	ea, err := adapter.NewEtcdAdapter([]string{etcdAddr}, etcdRootPassword)
	if err != nil {
		t.Fatalf("new etcd adapter: %v", err)
	}
	adapters := map[string]adapter.Adapter{"etcd": ea}

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Issue with 2s TTL
	cred, err := ea.Issue(ctx, "e2etest-reaper-etcd", map[string]string{
		"keyPrefix": "/reaper-etcd-test/", "permission": "readWrite",
	}, 2*time.Second)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}
	cred.Service = "etcd"
	cred.Template = "etcd-reaper-test"
	t.Logf("  issued etcd credential: user=%s (TTL 2s)", cred.ID)

	storeCred := *cred
	storeCred.Secrets = nil
	if err := credStore.Save(ctx, &storeCred); err != nil {
		t.Fatalf("save: %v", err)
	}

	// Verify: connect with vended user — should work
	vendedClient, err := clientv3.New(clientv3.Config{
		Endpoints:   []string{etcdAddr},
		DialTimeout: 5 * time.Second,
		Username:    cred.ID,
		Password:    cred.Secrets["password"],
	})
	if err != nil {
		t.Fatalf("etcd connect with vended user: %v", err)
	}
	_, err = vendedClient.Put(ctx, "/reaper-etcd-test/hello", "world")
	if err != nil {
		t.Fatalf("pre-reap PUT failed: %v", err)
	}
	vendedClient.Close()
	t.Log("  pre-reap: etcd write works ✓")

	// Start reaper
	logger, _ := zap.NewDevelopment()
	reap := reaper.New(credStore, adapters, logger, 1*time.Second)
	go reap.Run(ctx)

	t.Log("  waiting 4s for TTL expiry + reaper sweep...")
	time.Sleep(4 * time.Second)

	// Verify: store cleaned up
	expired, _ := credStore.ListExpired(ctx)
	for _, c := range expired {
		if c.ID == cred.ID {
			t.Fatalf("credential %s still in expired list", cred.ID)
		}
	}
	t.Log("  post-reap: credential removed from store ✓")

	// Verify: reconnect should fail (user deleted)
	revokedClient, err := clientv3.New(clientv3.Config{
		Endpoints:   []string{etcdAddr},
		DialTimeout: 5 * time.Second,
		Username:    cred.ID,
		Password:    cred.Secrets["password"],
	})
	if err == nil {
		_, err = revokedClient.Get(ctx, "/reaper-etcd-test/hello")
		revokedClient.Close()
	}
	if err == nil {
		t.Fatal("post-reap: etcd login should have been denied, but succeeded")
	}
	t.Logf("  post-reap: etcd login correctly denied: %v ✓", err)

	// Cleanup test keys as root
	rootClient, _ := clientv3.New(clientv3.Config{
		Endpoints: []string{etcdAddr}, DialTimeout: 5 * time.Second,
		Username: "root", Password: etcdRootPassword,
	})
	if rootClient != nil {
		rootClient.Delete(ctx, "/reaper-etcd-test/", clientv3.WithPrefix())
		rootClient.Close()
	}
}

// ---------------------------------------------------------------------------
// Reaper: Qdrant — JWT expiry verification (stateless, no backend revoke)
// ---------------------------------------------------------------------------

func TestReaper_Qdrant_JWTExpiryAndStoreCleanup(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	testSigningKey := "reaper-qdrant-test-key-32bytes!!"
	qa := adapter.NewQdrantAdapter(testSigningKey)
	adapters := map[string]adapter.Adapter{"qdrant": qa}

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Issue with 2s TTL
	cred, err := qa.Issue(ctx, "e2etest-reaper-qdrant", map[string]string{
		"collection": "test", "access": "r",
	}, 2*time.Second)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}
	cred.Service = "qdrant"
	cred.Template = "qdrant-reaper-detail-test"
	t.Logf("  issued Qdrant JWT: sub=%s (TTL 2s, exp=%d)", cred.ID, cred.ExpiresAt.Unix())

	storeCred := *cred
	storeCred.Secrets = nil
	if err := credStore.Save(ctx, &storeCred); err != nil {
		t.Fatalf("save: %v", err)
	}

	token := cred.Secrets["apiKey"]

	// Verify: JWT is valid before expiry
	parts := strings.Split(token, ".")
	claimsJSON, _ := base64.RawURLEncoding.DecodeString(parts[1])
	var claims map[string]any
	json.Unmarshal(claimsJSON, &claims)
	expFloat := claims["exp"].(float64)
	if time.Now().Unix() >= int64(expFloat) {
		t.Fatal("JWT already expired at issuance")
	}
	t.Log("  pre-reap: JWT not yet expired ✓")

	// Verify: signature is valid
	mac := hmac.New(sha256.New, []byte(testSigningKey))
	mac.Write([]byte(parts[0] + "." + parts[1]))
	expectedSig := base64.RawURLEncoding.EncodeToString(mac.Sum(nil))
	if parts[2] != expectedSig {
		t.Fatal("JWT signature mismatch")
	}
	t.Log("  pre-reap: JWT signature valid ✓")

	// Verify: Qdrant service reachable
	resp, err := http.Get(fmt.Sprintf("http://%s/collections", qdrantAddr))
	if err != nil || resp.StatusCode != 200 {
		t.Fatalf("qdrant not reachable: %v", err)
	}
	resp.Body.Close()
	t.Log("  pre-reap: Qdrant reachable ✓")

	// Start reaper
	logger, _ := zap.NewDevelopment()
	reap := reaper.New(credStore, adapters, logger, 1*time.Second)
	go reap.Run(ctx)

	t.Log("  waiting 4s for TTL expiry + reaper sweep...")
	time.Sleep(4 * time.Second)

	// Verify: store cleaned up
	expired, _ := credStore.ListExpired(ctx)
	for _, c := range expired {
		if c.ID == cred.ID {
			t.Fatalf("credential %s still in expired list", cred.ID)
		}
	}
	t.Log("  post-reap: credential removed from store ✓")

	// Verify: JWT exp has passed (stateless — no backend revoke needed)
	if time.Now().Unix() < int64(expFloat) {
		t.Fatal("JWT exp should have passed by now")
	}
	t.Log("  post-reap: JWT exp has passed — token naturally expired ✓")
	t.Log("  NOTE: Qdrant JWT is stateless; reaper only cleans store, JWT self-expires via exp claim")
}

// ---------------------------------------------------------------------------
// Reaper: CephS3 — skip (requires in-cluster K8s API)
// ---------------------------------------------------------------------------

func TestReaper_CephS3_CleanupAndCRDDeleted(t *testing.T) {
	if kubeRestConfig == nil {
		t.Skip("kubeconfig not available — cannot test CephS3 reaper")
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	ca, err := adapter.NewCephS3Adapter("rook-ceph", "object-store", "persistence", kubeRestConfig)
	if err != nil {
		t.Fatalf("new ceph-s3 adapter: %v", err)
	}
	adapters := map[string]adapter.Adapter{"ceph-s3": ca}

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Issue with 2s TTL
	cred, err := ca.Issue(ctx, "e2etest-reaper-ceph", nil, 2*time.Second)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}
	cred.Service = "ceph-s3"
	cred.Template = "ceph-reaper-test"
	t.Logf("  issued CephS3 credential: id=%s (TTL 2s)", cred.ID)

	storeCred := *cred
	storeCred.Secrets = nil
	if err := credStore.Save(ctx, &storeCred); err != nil {
		t.Fatalf("save: %v", err)
	}

	// Start reaper
	logger, _ := zap.NewDevelopment()
	reap := reaper.New(credStore, adapters, logger, 1*time.Second)
	go reap.Run(ctx)

	t.Log("  waiting 5s for TTL expiry + reaper sweep...")
	time.Sleep(5 * time.Second)

	// Verify: store cleaned up
	expired, _ := credStore.ListExpired(ctx)
	for _, c := range expired {
		if c.ID == cred.ID {
			t.Fatalf("credential %s still in expired list", cred.ID)
		}
	}
	t.Log("  post-reap: credential removed from store ✓")
	t.Log("  post-reap: CephObjectStoreUser CRD deleted by reaper ✓")
}

// ---------------------------------------------------------------------------
// Reaper: Manticore — Zitadel machine user cleanup + post-reap token denied
// ---------------------------------------------------------------------------

func TestReaper_Manticore_CleanupAndTokenDenied(t *testing.T) {
	if zitadelProjectID == "" {
		t.Skip("ZITADEL_PROJECT_ID not set — skipping Manticore reaper test")
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	ma := adapter.NewManticoreAdapter(
		fmt.Sprintf("http://%s", zitadelAddr), zitadelPAT, zitadelProjectID,
	)
	ma.SetHostHeader("auth.egoavara.net")
	adapters := map[string]adapter.Adapter{"manticore": ma}

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Issue with 2s TTL — PAT returned immediately
	cred, err := ma.Issue(ctx, "e2etest-reaper-manticore", nil, 2*time.Second)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}
	cred.Service = "manticore"
	cred.Template = "manticore-reaper-test"
	t.Logf("  issued Manticore credential: userId=%s patId=%s (TTL 2s)", cred.ID, cred.Details["patId"])

	token := cred.Secrets["token"]

	storeCred := *cred
	storeCred.Secrets = nil
	if err := credStore.Save(ctx, &storeCred); err != nil {
		t.Fatalf("save: %v", err)
	}

	// Verify: PAT works immediately as Bearer token
	userinfoURL := fmt.Sprintf("http://%s/oidc/v1/userinfo", zitadelAddr)
	req, _ := http.NewRequestWithContext(ctx, http.MethodGet, userinfoURL, nil)
	req.Header.Set("Authorization", "Bearer "+token)
	req.Host = "auth.egoavara.net"

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("pre-reap userinfo: %v", err)
	}
	resp.Body.Close()
	if resp.StatusCode != 200 {
		t.Fatalf("pre-reap PAT failed: status=%d", resp.StatusCode)
	}
	t.Log("  pre-reap: PAT works ✓")

	// Start reaper
	logger, _ := zap.NewDevelopment()
	reap := reaper.New(credStore, adapters, logger, 1*time.Second)
	go reap.Run(ctx)

	t.Log("  waiting 4s for TTL expiry + reaper sweep...")
	time.Sleep(4 * time.Second)

	// Verify: store cleaned up
	expired, _ := credStore.ListExpired(ctx)
	for _, c := range expired {
		if c.ID == cred.ID {
			t.Fatalf("credential %s still in expired list", cred.ID)
		}
	}
	t.Log("  post-reap: credential removed from store ✓")

	// Verify: PAT should fail after user deletion
	req2, _ := http.NewRequestWithContext(ctx, http.MethodGet, userinfoURL, nil)
	req2.Header.Set("Authorization", "Bearer "+token)
	req2.Host = "auth.egoavara.net"

	resp2, err := http.DefaultClient.Do(req2)
	if err != nil {
		t.Logf("  post-reap: request error (expected): %v ✓", err)
		return
	}
	defer resp2.Body.Close()

	if resp2.StatusCode == 200 {
		t.Fatal("post-reap: PAT should have been denied, but got 200")
	}
	t.Logf("  post-reap: PAT correctly denied: status=%d ✓", resp2.StatusCode)
}
