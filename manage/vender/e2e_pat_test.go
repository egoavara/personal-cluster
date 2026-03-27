//go:build e2e

package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net"
	"net/http"
	"testing"
	"time"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
	"github.com/authzed/authzed-go/v1"
	"github.com/authzed/grpcutil"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	"github.com/egoavara/personal-cluster/manage/vender/internal/adapter"
	"github.com/egoavara/personal-cluster/manage/vender/internal/config"
	"github.com/egoavara/personal-cluster/manage/vender/internal/dashboard"
	"github.com/egoavara/personal-cluster/manage/vender/internal/pat"
	"github.com/egoavara/personal-cluster/manage/vender/internal/store"
)

// startTestDashboardWithPAT starts a test dashboard server with PAT issuer enabled.
func startTestDashboardWithPAT(t *testing.T, templates []config.Template) (baseURL string, cancel context.CancelFunc) {
	t.Helper()

	ctx, cancelFn := context.WithCancel(context.Background())

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Seed templates into DB so dashboard can read them
	for _, tmpl := range templates {
		dt := store.DBTemplate{
			ID:          tmpl.ID,
			Name:        tmpl.Name,
			Description: tmpl.Description,
			Service:     tmpl.Service,
			TTL:         tmpl.TTL,
			Params:      tmpl.Params,
		}
		_ = credStore.CreateTemplate(ctx, &dt)
	}

	l, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		t.Fatalf("listen: %v", err)
	}
	port := l.Addr().(*net.TCPAddr).Port
	l.Close()

	cfg := &config.Config{
		ListenAddr: fmt.Sprintf(":%d", port),
		SpiceDB: config.SpiceDBConfig{
			Endpoint:     spicedbAddr,
			PresharedKey: spicedbKey,
		},
		Zitadel: config.ZitadelConfig{
			APIEndpoint: fmt.Sprintf("http://%s", zitadelAddr),
			PAT:         zitadelPAT,
			ProjectID:   zitadelProjectID,
		},
		PAT: config.PATConfig{
			MaxPerUser: 10,
			MaxTTL:     8760 * time.Hour,
		},
		Templates: templates,
	}

	patIssuer := pat.NewIssuer(cfg.Zitadel.APIEndpoint, cfg.Zitadel.PAT)
	patIssuer.SetHostHeader("auth.egoavara.net")

	logger, _ := zap.NewDevelopment()

	go func() {
		if err := dashboard.Run(ctx, cfg, nil, credStore, patIssuer, logger); err != nil && ctx.Err() == nil {
			t.Errorf("dashboard.Run error: %v", err)
		}
	}()

	base := fmt.Sprintf("http://localhost:%d", port)
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

// startTestDashboardWithPATAndAdapters is like startTestDashboardWithPAT but also accepts adapters.
func startTestDashboardWithPATAndAdapters(t *testing.T, templates []testTemplate, adapters map[string]adapter.Adapter) (baseURL string, cancel context.CancelFunc) {
	t.Helper()

	ctx, cancelFn := context.WithCancel(context.Background())

	credStore, err := store.New(pgDSN)
	if err != nil {
		t.Fatalf("store.New: %v", err)
	}
	if err := credStore.Migrate(ctx); err != nil {
		t.Fatalf("store.Migrate: %v", err)
	}

	// Seed templates into DB and build config templates
	var cfgTemplates []config.Template
	for _, tmpl := range templates {
		dt := store.DBTemplate{
			ID:      tmpl.ID,
			Name:    tmpl.Name,
			Service: tmpl.Service,
			TTL:     tmpl.TTL,
			Params:  tmpl.Params,
		}
		_ = credStore.CreateTemplate(ctx, &dt)
		cfgTemplates = append(cfgTemplates, config.Template{
			ID:      tmpl.ID,
			Name:    tmpl.Name,
			Service: tmpl.Service,
			TTL:     tmpl.TTL,
			Params:  tmpl.Params,
		})
	}

	l, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		t.Fatalf("listen: %v", err)
	}
	port := l.Addr().(*net.TCPAddr).Port
	l.Close()

	cfg := &config.Config{
		ListenAddr: fmt.Sprintf(":%d", port),
		SpiceDB: config.SpiceDBConfig{
			Endpoint:     spicedbAddr,
			PresharedKey: spicedbKey,
		},
		Zitadel: config.ZitadelConfig{
			APIEndpoint: fmt.Sprintf("http://%s", zitadelAddr),
			PAT:         zitadelPAT,
			ProjectID:   zitadelProjectID,
		},
		PAT: config.PATConfig{
			MaxPerUser: 10,
			MaxTTL:     8760 * time.Hour,
		},
		Templates: cfgTemplates,
	}

	patIssuer := pat.NewIssuer(cfg.Zitadel.APIEndpoint, cfg.Zitadel.PAT)
	patIssuer.SetHostHeader("auth.egoavara.net")

	logger, _ := zap.NewDevelopment()

	go func() {
		if err := dashboard.Run(ctx, cfg, adapters, credStore, patIssuer, logger); err != nil && ctx.Err() == nil {
			t.Errorf("dashboard.Run error: %v", err)
		}
	}()

	base := fmt.Sprintf("http://localhost:%d", port)
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

// TestPAT_CreateListRevoke tests the full PAT lifecycle.
func TestPAT_CreateListRevoke(t *testing.T) {
	if zitadelPAT == "" {
		t.Skip("Zitadel PAT not available")
	}

	testUser := "e2e-pat-test"
	templates := []config.Template{
		{ID: "pat-test-pg", Name: "PAT Test PG", Service: "postgres", TTL: 1 * time.Hour},
		{ID: "pat-test-valkey", Name: "PAT Test Valkey", Service: "valkey", TTL: 1 * time.Hour},
	}

	// Setup SpiceDB schema and relationships
	ensureSpiceDBTemplateSchema(t)
	setupSpiceDBTestRelationships(t, []string{"pat-test-pg", "pat-test-valkey"}, testUser)

	base, cancel := startTestDashboardWithPAT(t, templates)
	defer cancel()

	// 1. Create PAT with a subset of templates (only pat-test-pg)
	createBody, _ := json.Marshal(map[string]any{
		"name":        "test-pat-1",
		"templateIds": []string{"pat-test-pg"},
		"expiresIn":   "24h",
	})
	req, _ := http.NewRequest("POST", base+"/api/pats", bytes.NewReader(createBody))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Auth-Request-User", testUser)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("create PAT request: %v", err)
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)

	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("create PAT: expected 201, got %d: %s", resp.StatusCode, body)
	}

	var createResp struct {
		ID              string   `json:"id"`
		Name            string   `json:"name"`
		MachineUsername string   `json:"machineUsername"`
		TemplateIDs     []string `json:"templateIds"`
		Token           string   `json:"token"`
	}
	if err := json.Unmarshal(body, &createResp); err != nil {
		t.Fatalf("parse create response: %v", err)
	}

	if createResp.Token == "" {
		t.Fatal("token should not be empty")
	}
	if createResp.MachineUsername == "" {
		t.Fatal("machineUsername should not be empty")
	}
	t.Logf("PAT created: id=%s machine=%s", createResp.ID, createResp.MachineUsername)

	// 2. List PATs
	req2, _ := http.NewRequest("GET", base+"/api/pats", nil)
	req2.Header.Set("X-Auth-Request-User", testUser)
	resp2, err := http.DefaultClient.Do(req2)
	if err != nil {
		t.Fatalf("list PATs: %v", err)
	}
	defer resp2.Body.Close()
	body2, _ := io.ReadAll(resp2.Body)

	if resp2.StatusCode != http.StatusOK {
		t.Fatalf("list PATs: expected 200, got %d: %s", resp2.StatusCode, body2)
	}

	var pats []map[string]any
	json.Unmarshal(body2, &pats)
	found := false
	for _, p := range pats {
		if p["id"] == createResp.ID {
			found = true
			break
		}
	}
	if !found {
		t.Fatalf("created PAT not found in list")
	}
	t.Logf("PAT found in list (%d total)", len(pats))

	// 3. Verify SpiceDB relationships were written
	spiceClient, err := authzed.NewClient(
		spicedbAddr,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpcutil.WithInsecureBearerToken(spicedbKey),
	)
	if err != nil {
		t.Fatalf("spicedb client: %v", err)
	}

	// Check owner relationship: pat:<machineUsername>#owner@user:<testUser>
	ownerStream, err := spiceClient.ReadRelationships(context.Background(), &v1.ReadRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType:       "pat",
			OptionalResourceId: createResp.MachineUsername,
			OptionalRelation:   "owner",
		},
		Consistency: &v1.Consistency{Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true}},
	})
	if err != nil {
		t.Fatalf("read pat owner: %v", err)
	}
	ownerRel, err := ownerStream.Recv()
	if err != nil {
		t.Fatalf("no owner relationship found for pat:%s", createResp.MachineUsername)
	}
	if ownerRel.Relationship.Subject.Object.ObjectId != testUser {
		t.Fatalf("owner mismatch: expected %s, got %s", testUser, ownerRel.Relationship.Subject.Object.ObjectId)
	}
	t.Logf("SpiceDB owner relationship verified: pat:%s#owner@user:%s", createResp.MachineUsername, testUser)

	// Check pat_filter relationship: template:pat-test-pg#pat_filter@pat:<machineUsername>
	filterStream, err := spiceClient.ReadRelationships(context.Background(), &v1.ReadRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType:       "template",
			OptionalResourceId: "pat-test-pg",
			OptionalRelation:   "pat_filter",
		},
		Consistency: &v1.Consistency{Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true}},
	})
	if err != nil {
		t.Fatalf("read pat_filter: %v", err)
	}
	filterRel, err := filterStream.Recv()
	if err != nil {
		t.Fatalf("no pat_filter relationship found for template:pat-test-pg")
	}
	if filterRel.Relationship.Subject.Object.ObjectId != createResp.MachineUsername {
		t.Fatalf("pat_filter subject mismatch: expected %s, got %s",
			createResp.MachineUsername, filterRel.Relationship.Subject.Object.ObjectId)
	}
	t.Log("SpiceDB pat_filter relationship verified for pat-test-pg")

	// 4. Revoke PAT
	revokeBody, _ := json.Marshal(map[string]string{"patId": createResp.ID})
	req3, _ := http.NewRequest("POST", base+"/api/pats/revoke", bytes.NewReader(revokeBody))
	req3.Header.Set("Content-Type", "application/json")
	req3.Header.Set("X-Auth-Request-User", testUser)
	resp3, err := http.DefaultClient.Do(req3)
	if err != nil {
		t.Fatalf("revoke PAT: %v", err)
	}
	resp3.Body.Close()
	if resp3.StatusCode != http.StatusNoContent {
		t.Fatalf("revoke PAT: expected 204, got %d", resp3.StatusCode)
	}
	t.Log("PAT revoked successfully")

	// 5. Verify PAT is gone from list
	req4, _ := http.NewRequest("GET", base+"/api/pats", nil)
	req4.Header.Set("X-Auth-Request-User", testUser)
	resp4, _ := http.DefaultClient.Do(req4)
	body4, _ := io.ReadAll(resp4.Body)
	resp4.Body.Close()
	var pats2 []map[string]any
	json.Unmarshal(body4, &pats2)
	for _, p := range pats2 {
		if p["id"] == createResp.ID {
			t.Fatal("revoked PAT should not appear in list")
		}
	}
	t.Log("Revoked PAT no longer in list")

	// 6. Verify SpiceDB relationships were cleaned up
	ownerStream2, _ := spiceClient.ReadRelationships(context.Background(), &v1.ReadRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType:       "pat",
			OptionalResourceId: createResp.MachineUsername,
			OptionalRelation:   "owner",
		},
		Consistency: &v1.Consistency{Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true}},
	})
	_, err = ownerStream2.Recv()
	if err == nil {
		t.Fatal("SpiceDB owner relationship should be deleted after revoke")
	}
	t.Log("SpiceDB relationships cleaned up after revoke")
}

// TestPAT_TemplateFilterEnforcement tests that PAT can only access filtered templates.
func TestPAT_TemplateFilterEnforcement(t *testing.T) {
	if zitadelPAT == "" {
		t.Skip("Zitadel PAT not available")
	}

	testUser := "e2e-pat-filter"
	templates := []config.Template{
		{ID: "filter-pg", Name: "Filter PG", Service: "postgres", TTL: 1 * time.Hour},
		{ID: "filter-valkey", Name: "Filter Valkey", Service: "valkey", TTL: 1 * time.Hour},
	}

	ensureSpiceDBTemplateSchema(t)
	setupSpiceDBTestRelationships(t, []string{"filter-pg", "filter-valkey"}, testUser)

	base, cancel := startTestDashboardWithPAT(t, templates)
	defer cancel()

	// Create PAT with only "filter-pg" (not filter-valkey)
	createBody, _ := json.Marshal(map[string]any{
		"name":        "filter-test",
		"templateIds": []string{"filter-pg"},
		"expiresIn":   "1h",
	})
	req, _ := http.NewRequest("POST", base+"/api/pats", bytes.NewReader(createBody))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Auth-Request-User", testUser)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("create PAT: %v", err)
	}
	body, _ := io.ReadAll(resp.Body)
	resp.Body.Close()
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("create PAT: expected 201, got %d: %s", resp.StatusCode, body)
	}

	var createResp struct {
		MachineUsername string `json:"machineUsername"`
	}
	json.Unmarshal(body, &createResp)
	t.Logf("PAT created with filter [filter-pg]: machine=%s", createResp.MachineUsername)

	// Simulate PAT request to templates endpoint
	// Guard would set these headers after JWKS validation
	req2, _ := http.NewRequest("GET", base+"/api/templates", nil)
	req2.Header.Set("X-Auth-Request-User", createResp.MachineUsername)
	req2.Header.Set("X-Auth-Request-Pat-Owner", testUser)
	resp2, _ := http.DefaultClient.Do(req2)
	body2, _ := io.ReadAll(resp2.Body)
	resp2.Body.Close()

	var visibleTemplates []map[string]any
	json.Unmarshal(body2, &visibleTemplates)
	t.Logf("PAT visible templates response (status=%d): %s", resp2.StatusCode, string(body2))

	// PAT should only see "filter-pg", not "filter-valkey"
	// DB templates use lowercase field names in JSON (id, name, service, etc.)
	for _, tmpl := range visibleTemplates {
		id, _ := tmpl["id"].(string)
		if id == "filter-valkey" {
			t.Fatal("PAT should NOT see filter-valkey (not in its filter)")
		}
	}

	foundPG := false
	for _, tmpl := range visibleTemplates {
		id, _ := tmpl["id"].(string)
		if id == "filter-pg" {
			foundPG = true
		}
	}
	if !foundPG {
		t.Fatal("PAT should see filter-pg (in its filter)")
	}
	t.Logf("Template filter enforced: PAT sees %d template(s)", len(visibleTemplates))
}

// TestPAT_OwnerPermissionCascade tests that revoking owner's template permission
// causes PAT to lose access.
func TestPAT_OwnerPermissionCascade(t *testing.T) {
	if zitadelPAT == "" {
		t.Skip("Zitadel PAT not available")
	}

	testUser := "e2e-pat-cascade"
	templates := []config.Template{
		{ID: "cascade-pg", Name: "Cascade PG", Service: "postgres", TTL: 1 * time.Hour},
	}

	ensureSpiceDBTemplateSchema(t)
	setupSpiceDBTestRelationships(t, []string{"cascade-pg"}, testUser)

	base, cancel := startTestDashboardWithPAT(t, templates)
	defer cancel()

	// Create PAT
	createBody, _ := json.Marshal(map[string]any{
		"name":        "cascade-test",
		"templateIds": []string{"cascade-pg"},
		"expiresIn":   "1h",
	})
	req, _ := http.NewRequest("POST", base+"/api/pats", bytes.NewReader(createBody))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Auth-Request-User", testUser)
	resp, _ := http.DefaultClient.Do(req)
	body, _ := io.ReadAll(resp.Body)
	resp.Body.Close()
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("create PAT: expected 201, got %d: %s", resp.StatusCode, body)
	}

	var createResp struct {
		MachineUsername string `json:"machineUsername"`
	}
	json.Unmarshal(body, &createResp)

	// Verify PAT can see template
	req2, _ := http.NewRequest("GET", base+"/api/templates", nil)
	req2.Header.Set("X-Auth-Request-User", createResp.MachineUsername)
	req2.Header.Set("X-Auth-Request-Pat-Owner", testUser)
	resp2, _ := http.DefaultClient.Do(req2)
	body2, _ := io.ReadAll(resp2.Body)
	resp2.Body.Close()

	var before []map[string]any
	json.Unmarshal(body2, &before)
	if len(before) == 0 {
		t.Fatal("PAT should see cascade-pg before owner permission removal")
	}
	t.Log("PAT can access template before owner permission removal")

	// Remove owner's permission from SpiceDB
	spiceClient, _ := authzed.NewClient(
		spicedbAddr,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpcutil.WithInsecureBearerToken(spicedbKey),
	)
	_, err := spiceClient.DeleteRelationships(context.Background(), &v1.DeleteRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType:       "template",
			OptionalResourceId: "cascade-pg",
			OptionalRelation:   "viewer",
			OptionalSubjectFilter: &v1.SubjectFilter{
				SubjectType:       "user",
				OptionalSubjectId: testUser,
			},
		},
	})
	if err != nil {
		t.Fatalf("delete owner permission: %v", err)
	}
	t.Log("Owner's template permission removed from SpiceDB")

	// Verify PAT can NO LONGER see template
	req3, _ := http.NewRequest("GET", base+"/api/templates", nil)
	req3.Header.Set("X-Auth-Request-User", createResp.MachineUsername)
	req3.Header.Set("X-Auth-Request-Pat-Owner", testUser)
	resp3, _ := http.DefaultClient.Do(req3)
	body3, _ := io.ReadAll(resp3.Body)
	resp3.Body.Close()

	var after []map[string]any
	json.Unmarshal(body3, &after)
	if len(after) != 0 {
		t.Fatalf("PAT should NOT see cascade-pg after owner permission removal, but sees %d templates", len(after))
	}
	t.Log("Owner permission cascade verified: PAT lost access after owner permission removal")
}
