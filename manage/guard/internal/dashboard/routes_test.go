package dashboard

import (
	"os"
	"path/filepath"
	"testing"
)

func TestLoadRoutes(t *testing.T) {
	content := `dashboards:
  - name: grafana
    path: /d/grafana
    upstream: http://grafana.telemetry.svc.cluster.local:80
    stripPrefix: true
    spicedbResource: kube_service:telemetry/grafana

  - name: crdb-ui
    path: /d/crdb
    upstream: http://cockroachdb-public.auth.svc.cluster.local:8080
    stripPrefix: true
    spicedbResource: kube_service:auth/cockroachdb

  - name: kanidm
    path: /d/kanidm
    upstream: https://kanidm.auth.svc.cluster.local:8443
    stripPrefix: true
    spicedbResource: kube_service:auth/kanidm
    insecureSkipVerify: true
`
	tmpDir := t.TempDir()
	path := filepath.Join(tmpDir, "routes.yaml")
	if err := os.WriteFile(path, []byte(content), 0644); err != nil {
		t.Fatalf("failed to write test file: %v", err)
	}

	routes, err := LoadRoutes(path)
	if err != nil {
		t.Fatalf("LoadRoutes error: %v", err)
	}

	if len(routes.Dashboards) != 3 {
		t.Fatalf("expected 3 dashboards, got %d", len(routes.Dashboards))
	}

	// Grafana
	g := routes.Dashboards[0]
	if g.Name != "grafana" {
		t.Errorf("dashboard[0].Name = %q, want %q", g.Name, "grafana")
	}
	if g.Path != "/d/grafana" {
		t.Errorf("dashboard[0].Path = %q, want %q", g.Path, "/d/grafana")
	}
	if g.Upstream != "http://grafana.telemetry.svc.cluster.local:80" {
		t.Errorf("dashboard[0].Upstream = %q", g.Upstream)
	}
	if !g.StripPrefix {
		t.Error("dashboard[0].StripPrefix should be true")
	}
	if g.SpiceDBResource != "kube_service:telemetry/grafana" {
		t.Errorf("dashboard[0].SpiceDBResource = %q", g.SpiceDBResource)
	}
	if g.InsecureSkipVerify {
		t.Error("dashboard[0].InsecureSkipVerify should be false")
	}

	// Kanidm (insecureSkipVerify: true)
	k := routes.Dashboards[2]
	if k.Name != "kanidm" {
		t.Errorf("dashboard[2].Name = %q, want %q", k.Name, "kanidm")
	}
	if !k.InsecureSkipVerify {
		t.Error("dashboard[2].InsecureSkipVerify should be true")
	}
}

func TestLoadRoutes_EmptyFile(t *testing.T) {
	tmpDir := t.TempDir()
	path := filepath.Join(tmpDir, "routes.yaml")
	if err := os.WriteFile(path, []byte("dashboards: []\n"), 0644); err != nil {
		t.Fatalf("failed to write test file: %v", err)
	}

	routes, err := LoadRoutes(path)
	if err != nil {
		t.Fatalf("LoadRoutes error: %v", err)
	}
	if len(routes.Dashboards) != 0 {
		t.Errorf("expected 0 dashboards, got %d", len(routes.Dashboards))
	}
}

func TestLoadRoutes_FileNotFound(t *testing.T) {
	_, err := LoadRoutes("/nonexistent/path/routes.yaml")
	if err == nil {
		t.Error("expected error for nonexistent file")
	}
}

func TestLoadRoutes_InvalidYAML(t *testing.T) {
	tmpDir := t.TempDir()
	path := filepath.Join(tmpDir, "routes.yaml")
	if err := os.WriteFile(path, []byte("{{invalid yaml"), 0644); err != nil {
		t.Fatalf("failed to write test file: %v", err)
	}

	_, err := LoadRoutes(path)
	if err == nil {
		t.Error("expected error for invalid YAML")
	}
}
