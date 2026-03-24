package config

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/spf13/viper"
)

func resetViper() {
	viper.Reset()
}

func writeConfigFile(t *testing.T, content string) string {
	t.Helper()
	dir := t.TempDir()
	path := filepath.Join(dir, "config.yaml")
	if err := os.WriteFile(path, []byte(content), 0644); err != nil {
		t.Fatal(err)
	}
	return path
}

func TestInit_Defaults(t *testing.T) {
	resetViper()

	if err := Init(nil); err != nil {
		t.Fatalf("Init error: %v", err)
	}
	cfg, err := Load()
	if err != nil {
		t.Fatalf("Load error: %v", err)
	}
	if cfg.SpiceDB.Endpoint != "spicedb.auth.svc.cluster.local:50051" {
		t.Errorf("SpiceDB.Endpoint = %q, want default", cfg.SpiceDB.Endpoint)
	}
	if cfg.ExtAuthz.ListenAddr != ":4180" {
		t.Errorf("ExtAuthz.ListenAddr = %q", cfg.ExtAuthz.ListenAddr)
	}
	if cfg.Dashboard.ListenAddr != ":8080" {
		t.Errorf("Dashboard.ListenAddr = %q", cfg.Dashboard.ListenAddr)
	}
}

func TestInit_FileOverride(t *testing.T) {
	resetViper()

	path := writeConfigFile(t, `
spicedb:
  endpoint: "custom:50051"
  presharedKey: "test-key"
`)
	if err := Init([]string{path}); err != nil {
		t.Fatalf("Init error: %v", err)
	}
	cfg, err := Load()
	if err != nil {
		t.Fatalf("Load error: %v", err)
	}
	if cfg.SpiceDB.Endpoint != "custom:50051" {
		t.Errorf("SpiceDB.Endpoint = %q", cfg.SpiceDB.Endpoint)
	}
	if cfg.SpiceDB.PresharedKey != "test-key" {
		t.Errorf("SpiceDB.PresharedKey = %q", cfg.SpiceDB.PresharedKey)
	}
}

func TestInit_Overlay(t *testing.T) {
	resetViper()

	base := writeConfigFile(t, `
spicedb:
  endpoint: "base:50051"
extAuthz:
  listenAddr: ":4180"
  oidc:
    clientID: "base-client"
`)
	overlay := writeConfigFile(t, `
spicedb:
  presharedKey: "overlay-key"
extAuthz:
  oidc:
    clientSecret: "overlay-secret"
`)
	if err := Init([]string{base, overlay}); err != nil {
		t.Fatalf("Init error: %v", err)
	}
	cfg, err := Load()
	if err != nil {
		t.Fatalf("Load error: %v", err)
	}
	if cfg.SpiceDB.Endpoint != "base:50051" {
		t.Errorf("SpiceDB.Endpoint = %q, want base value", cfg.SpiceDB.Endpoint)
	}
	if cfg.ExtAuthz.OIDC.ClientID != "base-client" {
		t.Errorf("ExtAuthz.OIDC.ClientID = %q", cfg.ExtAuthz.OIDC.ClientID)
	}
	if cfg.SpiceDB.PresharedKey != "overlay-key" {
		t.Errorf("SpiceDB.PresharedKey = %q", cfg.SpiceDB.PresharedKey)
	}
	if cfg.ExtAuthz.OIDC.ClientSecret != "overlay-secret" {
		t.Errorf("ExtAuthz.OIDC.ClientSecret = %q", cfg.ExtAuthz.OIDC.ClientSecret)
	}
}

func TestInit_LegacyEnvVar(t *testing.T) {
	resetViper()

	t.Setenv("SPICEDB_PRESHARED_KEY", "env-key")
	t.Setenv("SPICEDB_ENDPOINT", "env:50051")

	if err := Init(nil); err != nil {
		t.Fatalf("Init error: %v", err)
	}
	cfg, err := Load()
	if err != nil {
		t.Fatalf("Load error: %v", err)
	}
	if cfg.SpiceDB.Endpoint != "env:50051" {
		t.Errorf("SpiceDB.Endpoint = %q", cfg.SpiceDB.Endpoint)
	}
	if cfg.SpiceDB.PresharedKey != "env-key" {
		t.Errorf("SpiceDB.PresharedKey = %q", cfg.SpiceDB.PresharedKey)
	}
}

func TestValidateSpiceDB(t *testing.T) {
	cfg := &Config{}
	if err := cfg.ValidateSpiceDB(); err == nil {
		t.Error("expected error when PresharedKey is empty")
	}
	cfg.SpiceDB.PresharedKey = "key"
	if err := cfg.ValidateSpiceDB(); err != nil {
		t.Errorf("unexpected error: %v", err)
	}
}

func TestValidateExtAuthz(t *testing.T) {
	cfg := &Config{SpiceDB: SpiceDBConfig{PresharedKey: "key"}}
	if err := cfg.ValidateExtAuthz(); err == nil {
		t.Error("expected error when clientSecret is empty")
	}
	cfg.ExtAuthz.OIDC.ClientSecret = "secret"
	if err := cfg.ValidateExtAuthz(); err == nil {
		t.Error("expected error when session.secret is empty")
	}
	cfg.ExtAuthz.Session.Secret = "session"
	if err := cfg.ValidateExtAuthz(); err != nil {
		t.Errorf("unexpected error: %v", err)
	}
}

func TestIsSecure(t *testing.T) {
	ea := &ExtAuthzConfig{ExternalURL: "https://guard.egoavara.net"}
	if !ea.IsSecure() {
		t.Error("should be secure for https")
	}
	ea.ExternalURL = "http://localhost:4180"
	if ea.IsSecure() {
		t.Error("should not be secure for http")
	}
}
