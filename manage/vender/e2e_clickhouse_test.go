//go:build e2e

package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"testing"
	"time"

	"github.com/ClickHouse/clickhouse-go/v2"

	"github.com/egoavara/personal-cluster/manage/vender/internal/adapter"
)

// ---------------------------------------------------------------------------
// ClickHouse Adapter — Issue / Revoke
// ---------------------------------------------------------------------------

func TestClickHouseAdapter_IssueRevoke(t *testing.T) {
	if clickhousePassword == "" {
		t.Skip("ClickHouse credentials not available")
	}

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	dsn := fmt.Sprintf("clickhouse://default:%s@%s/default", clickhousePassword, clickhouseAddr)
	ch, err := adapter.NewClickHouseAdapter(dsn)
	if err != nil {
		t.Fatalf("new clickhouse adapter: %v", err)
	}

	// Issue credential with SELECT grant
	cred, err := ch.Issue(ctx, "e2etest", map[string]string{
		"grants":   "SELECT",
		"database": "default",
	}, 10*time.Minute)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}

	t.Logf("Issued ClickHouse credential: user=%s password=%s",
		cred.Details["user"], cred.Secrets["password"])

	// Verify: connect with vended credentials and run SELECT
	vendedConn, err := clickhouse.Open(&clickhouse.Options{
		Addr: []string{clickhouseAddr},
		Auth: clickhouse.Auth{
			Database: "default",
			Username: cred.Details["user"],
			Password: cred.Secrets["password"],
		},
	})
	if err != nil {
		t.Fatalf("connect with vended creds: %v", err)
	}
	defer vendedConn.Close()

	if err := vendedConn.Ping(ctx); err != nil {
		t.Fatalf("ping with vended creds: %v", err)
	}

	var result uint8
	err = vendedConn.QueryRow(ctx, "SELECT 1").Scan(&result)
	if err != nil {
		t.Fatalf("SELECT 1 failed: %v", err)
	}
	if result != 1 {
		t.Fatalf("expected 1, got %d", result)
	}
	t.Log("SELECT 1 succeeded with vended credentials")

	// Verify: CREATE TABLE should fail (only SELECT granted)
	err = vendedConn.Exec(ctx, "CREATE TABLE IF NOT EXISTS _e2e_should_fail (x UInt8) ENGINE = Memory")
	if err == nil {
		// Cleanup just in case
		vendedConn.Exec(ctx, "DROP TABLE IF EXISTS _e2e_should_fail")
		t.Fatal("CREATE TABLE should have been denied for SELECT-only user")
	}
	t.Log("CREATE TABLE correctly denied for SELECT-only user")

	// Revoke
	if err := ch.Revoke(ctx, cred); err != nil {
		t.Fatalf("revoke: %v", err)
	}

	// Verify: connection should fail after revoke
	revokedConn, err := clickhouse.Open(&clickhouse.Options{
		Addr: []string{clickhouseAddr},
		Auth: clickhouse.Auth{
			Database: "default",
			Username: cred.Details["user"],
			Password: cred.Secrets["password"],
		},
	})
	if err == nil {
		err = revokedConn.Ping(ctx)
		revokedConn.Close()
	}
	if err == nil {
		t.Fatal("connection should fail after revoke")
	}
	t.Log("Connection correctly denied after revoke")
}

// ---------------------------------------------------------------------------
// ClickHouse Adapter — Manager grants (DDL + DML)
// ---------------------------------------------------------------------------

func TestClickHouseAdapter_ManagerGrants(t *testing.T) {
	if clickhousePassword == "" {
		t.Skip("ClickHouse credentials not available")
	}

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	dsn := fmt.Sprintf("clickhouse://default:%s@%s/default", clickhousePassword, clickhouseAddr)
	ch, err := adapter.NewClickHouseAdapter(dsn)
	if err != nil {
		t.Fatalf("new clickhouse adapter: %v", err)
	}

	// Issue with manager-level grants
	cred, err := ch.Issue(ctx, "e2emanager", map[string]string{
		"grants":   "CREATE,ALTER,DROP,SELECT,INSERT,TRUNCATE",
		"database": "default",
	}, 10*time.Minute)
	if err != nil {
		t.Fatalf("issue: %v", err)
	}
	defer ch.Revoke(ctx, cred)

	vendedConn, err := clickhouse.Open(&clickhouse.Options{
		Addr: []string{clickhouseAddr},
		Auth: clickhouse.Auth{
			Database: "default",
			Username: cred.Details["user"],
			Password: cred.Secrets["password"],
		},
	})
	if err != nil {
		t.Fatalf("connect: %v", err)
	}
	defer vendedConn.Close()

	// CREATE TABLE
	err = vendedConn.Exec(ctx, "CREATE TABLE IF NOT EXISTS _e2e_mgr_test (id UInt64, name String) ENGINE = Memory")
	if err != nil {
		t.Fatalf("CREATE TABLE: %v", err)
	}
	t.Log("CREATE TABLE succeeded")

	// INSERT
	err = vendedConn.Exec(ctx, "INSERT INTO _e2e_mgr_test (id, name) VALUES (1, 'test')")
	if err != nil {
		t.Fatalf("INSERT: %v", err)
	}
	t.Log("INSERT succeeded")

	// SELECT
	var name string
	err = vendedConn.QueryRow(ctx, "SELECT name FROM _e2e_mgr_test WHERE id = 1").Scan(&name)
	if err != nil {
		t.Fatalf("SELECT: %v", err)
	}
	if name != "test" {
		t.Fatalf("expected 'test', got %q", name)
	}
	t.Log("SELECT verified")

	// TRUNCATE
	err = vendedConn.Exec(ctx, "TRUNCATE TABLE _e2e_mgr_test")
	if err != nil {
		t.Fatalf("TRUNCATE: %v", err)
	}
	t.Log("TRUNCATE succeeded")

	// DROP TABLE
	err = vendedConn.Exec(ctx, "DROP TABLE _e2e_mgr_test")
	if err != nil {
		t.Fatalf("DROP TABLE: %v", err)
	}
	t.Log("DROP TABLE succeeded — full manager grants verified")
}

// ---------------------------------------------------------------------------
// PAT → ClickHouse credential issue → actual login
// ---------------------------------------------------------------------------

func TestPAT_ClickHouse_IssueAndLogin(t *testing.T) {
	if zitadelPAT == "" {
		t.Skip("Zitadel PAT not available")
	}
	if clickhousePassword == "" {
		t.Skip("ClickHouse credentials not available")
	}

	testUser := "e2e-pat-ch"
	templateID := "pat-ch-viewer"

	// Setup: register ClickHouse adapter
	dsn := fmt.Sprintf("clickhouse://default:%s@%s/default", clickhousePassword, clickhouseAddr)
	chAdapter, err := adapter.NewClickHouseAdapter(dsn)
	if err != nil {
		t.Fatalf("new clickhouse adapter: %v", err)
	}
	adapters := map[string]adapter.Adapter{"clickhouse": chAdapter}

	// Setup: SpiceDB schema + relationships
	ensureSpiceDBTemplateSchema(t)
	setupSpiceDBTestRelationships(t, []string{templateID}, testUser)

	// Start dashboard with PAT + ClickHouse adapter
	base, cancel := startTestDashboardWithPATAndAdapters(t,
		[]testTemplate{{ID: templateID, Name: "PAT CH Viewer", Service: "clickhouse", TTL: 1 * time.Hour,
			Params: map[string]string{"grants": "SELECT", "database": "default"}}},
		adapters,
	)
	defer cancel()

	// 1. Create PAT for ClickHouse template
	createBody, _ := json.Marshal(map[string]any{
		"name":        "ch-viewer-pat",
		"templateIds": []string{templateID},
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

	var patResp struct {
		MachineUsername string `json:"machineUsername"`
		Token           string `json:"token"`
	}
	json.Unmarshal(body, &patResp)
	t.Logf("PAT created: machine=%s", patResp.MachineUsername)

	// 2. Use PAT to issue ClickHouse credential
	// Simulate Guard headers: X-Auth-Request-User = machineUsername, X-Auth-Request-Pat-Owner = testUser
	issueBody, _ := json.Marshal(map[string]string{"templateId": templateID})
	req2, _ := http.NewRequest("POST", base+"/api/credentials/issue", bytes.NewReader(issueBody))
	req2.Header.Set("Content-Type", "application/json")
	req2.Header.Set("X-Auth-Request-User", patResp.MachineUsername)
	req2.Header.Set("X-Auth-Request-Pat-Owner", testUser)
	resp2, err := http.DefaultClient.Do(req2)
	if err != nil {
		t.Fatalf("issue credential via PAT: %v", err)
	}
	body2, _ := io.ReadAll(resp2.Body)
	resp2.Body.Close()
	if resp2.StatusCode != http.StatusCreated {
		t.Fatalf("issue credential: expected 201, got %d: %s", resp2.StatusCode, body2)
	}

	var credResp struct {
		ID      string            `json:"id"`
		Details map[string]string `json:"details"`
		Secrets map[string]string `json:"secrets"`
	}
	json.Unmarshal(body2, &credResp)
	t.Logf("ClickHouse credential issued via PAT: user=%s host=%s",
		credResp.Details["user"], credResp.Details["host"])

	// 3. Actually log in to ClickHouse with the vended credentials
	vendedConn, err := clickhouse.Open(&clickhouse.Options{
		Addr: []string{clickhouseAddr},
		Auth: clickhouse.Auth{
			Database: credResp.Details["database"],
			Username: credResp.Details["user"],
			Password: credResp.Secrets["password"],
		},
	})
	if err != nil {
		t.Fatalf("connect to ClickHouse with PAT-vended creds: %v", err)
	}
	defer vendedConn.Close()

	ctx := context.Background()
	if err := vendedConn.Ping(ctx); err != nil {
		t.Fatalf("ping ClickHouse: %v", err)
	}

	var result2 uint8
	err = vendedConn.QueryRow(ctx, "SELECT 42").Scan(&result2)
	if err != nil {
		t.Fatalf("SELECT 42: %v", err)
	}
	if result2 != 42 {
		t.Fatalf("expected 42, got %d", result2)
	}
	t.Log("ClickHouse login with PAT-issued credential: SELECT 42 = 42 ✓")

	// 4. Verify SELECT-only restriction
	err = vendedConn.Exec(ctx, "CREATE TABLE IF NOT EXISTS _e2e_pat_ch_fail (x UInt8) ENGINE = Memory")
	if err == nil {
		vendedConn.Exec(ctx, "DROP TABLE IF EXISTS _e2e_pat_ch_fail")
		t.Fatal("CREATE TABLE should be denied for SELECT-only credential")
	}
	t.Log("CREATE TABLE correctly denied for PAT-issued SELECT-only credential ✓")
}

// testTemplate is a helper for test template seeding.
type testTemplate struct {
	ID          string
	Name        string
	Service     string
	TTL         time.Duration
	Params      map[string]string
}
