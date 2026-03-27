//go:build e2e

package main

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"testing"
	"time"

	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
)

// ---------------------------------------------------------------------------
// Global test state — populated in TestMain
// ---------------------------------------------------------------------------

var (
	// Port-forwarded local addresses
	pgAddr         string // localhost:<port>
	valkeyAddr     string
	natsAddr       string
	etcdAddr       string
	qdrantAddr     string
	clickhouseAddr string
	spicedbAddr    string
	zitadelAddr    string

	// Credentials from cluster secrets
	pgDSN              string
	valkeyPassword     string
	etcdRootPassword   string
	clickhousePassword string
	spicedbKey         string
	zitadelPAT         string
	zitadelProjectID   string

	// NATS JWT auth
	natsAccountSeed  string
	natsOperatorSeed string
	natsSysUserJWT   string
	natsSysUserSeed  string

	// K8s config for CephS3 adapter
	kubeRestConfig *rest.Config

	// Port forward cleanup
	portForwards []*portForward
)

func TestMain(m *testing.M) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)
	defer cancel()

	// 1. Read secrets from cluster
	if err := readClusterSecrets(); err != nil {
		fmt.Fprintf(os.Stderr, "failed to read cluster secrets: %v\n", err)
		os.Exit(1)
	}

	// 2. Start port-forwards
	// Use deploy/ for stateful services to ensure sticky connection
	// (svc/ round-robins across pods, causing consistency issues with SpiceDB)
	forwards := []struct {
		namespace  string
		resource   string
		remotePort int
		addrOut    *string
	}{
		{"persistence", "svc/pg-persistence-rw", 5432, &pgAddr},
		{"persistence", "svc/valkey", 6379, &valkeyAddr},
		{"persistence", "svc/nats", 4222, &natsAddr},
		{"persistence", "svc/etcd", 2379, &etcdAddr},
		{"persistence", "svc/qdrant", 6333, &qdrantAddr},
		{"persistence", "svc/clickhouse-clickhouse", 9000, &clickhouseAddr},
		{"auth", "deploy/spicedb", 50051, &spicedbAddr},
		{"auth", "deploy/zitadel", 8080, &zitadelAddr},
	}

	for _, f := range forwards {
		pf, err := startPortForward(ctx, f.namespace, f.resource, f.remotePort)
		if err != nil {
			fmt.Fprintf(os.Stderr, "port-forward %s/%s:%d failed: %v\n", f.namespace, f.resource, f.remotePort, err)
			cleanupPortForwards()
			os.Exit(1)
		}
		portForwards = append(portForwards, pf)
		*f.addrOut = fmt.Sprintf("localhost:%d", pf.localPort)
	}

	// Build DSN with port-forwarded PG address
	// Use the user that was found (vender if managed role exists, otherwise app)
	pgDSN = fmt.Sprintf("postgresql://%s:%s@%s/app?sslmode=disable", pgUser, pgPassword(), pgAddr)

	fmt.Printf("=== E2E port-forwards ready ===\n")
	fmt.Printf("  PG:      %s\n", pgAddr)
	fmt.Printf("  Valkey:  %s\n", valkeyAddr)
	fmt.Printf("  NATS:    %s\n", natsAddr)
	fmt.Printf("  etcd:    %s\n", etcdAddr)
	fmt.Printf("  Qdrant:  %s\n", qdrantAddr)
	fmt.Printf("  ClickH:  %s\n", clickhouseAddr)
	fmt.Printf("  SpiceDB: %s\n", spicedbAddr)
	fmt.Printf("  Zitadel: %s\n", zitadelAddr)

	// 3. Run tests
	code := m.Run()

	// 4. Cleanup
	cleanupPortForwards()
	os.Exit(code)
}

// ---------------------------------------------------------------------------
// Secret reader — uses kubectl to read K8s secrets
// ---------------------------------------------------------------------------

var (
	pgPass string
	pgUser string
	pgHasCreaterole bool
)

func pgPassword() string { return pgPass }

func readClusterSecrets() error {
	// pg-persistence-vender (managed role) — may not exist yet, fallback to pg-persistence-app
	pass, err := kubectlGetSecret("persistence", "pg-persistence-vender", "password")
	if err != nil {
		fmt.Printf("  pg-persistence-vender secret not found, trying pg-persistence-app\n")
		pass, err = kubectlGetSecret("persistence", "pg-persistence-app", "password")
		if err != nil {
			return fmt.Errorf("pg password: %w", err)
		}
		pgPass = pass
		pgUser = "app"
		pgHasCreaterole = false
		fmt.Printf("  PG user: app (CREATEROLE not available)\n")
	} else {
		pgPass = pass
		pgUser = "vender"
		pgHasCreaterole = true
		fmt.Printf("  PG user: vender (CREATEROLE available)\n")
	}

	valkeyPassword, err = kubectlGetSecret("persistence", "valkey", "valkey-password")
	if err != nil {
		return fmt.Errorf("valkey password: %w", err)
	}

	etcdRootPassword, err = kubectlGetSecret("persistence", "etcd", "etcd-root-password")
	if err != nil {
		return fmt.Errorf("etcd root password: %w", err)
	}

	clickhousePassword, _ = kubectlGetSecret("persistence", "clickhouse-credentials", "password")

	spicedbKey, err = kubectlGetSecret("auth", "spicedb-preshared-key", "SPICEDB_GRPC_PRESHARED_KEY")
	if err != nil {
		return fmt.Errorf("spicedb key: %w", err)
	}

	zitadelPAT, err = kubectlGetSecret("auth", "iam-admin-pat", "pat")
	if err != nil {
		return fmt.Errorf("zitadel pat: %w", err)
	}
	zitadelPAT = strings.TrimSpace(zitadelPAT)

	// NATS JWT auth secrets
	natsAccountSeed, _ = kubectlGetSecret("persistence", "nats-jwt-token", "account-seed")
	natsOperatorSeed, _ = kubectlGetSecret("persistence", "nats-jwt-token", "operator-seed")
	natsSysUserJWT, _ = kubectlGetSecret("persistence", "nats-jwt-token", "sys-user-jwt")
	natsSysUserSeed, _ = kubectlGetSecret("persistence", "nats-jwt-token", "sys-user-seed")

	zitadelProjectID = os.Getenv("ZITADEL_PROJECT_ID")
	// Try reading from vender-auth-secrets if env not set
	if zitadelProjectID == "" {
		zitadelProjectID, _ = kubectlGetSecret("persistence", "vender-auth-secrets", "zitadel-project-id")
	}

	// Load kubeconfig for CephS3 adapter (local testing)
	kubeconfig := os.Getenv("KUBECONFIG")
	if kubeconfig == "" {
		home, _ := os.UserHomeDir()
		kubeconfig = filepath.Join(home, ".kube", "config")
	}
	kubeRestConfig, _ = clientcmd.BuildConfigFromFlags("", kubeconfig)

	return nil
}

func kubectlGetSecret(namespace, name, key string) (string, error) {
	out, err := exec.Command("kubectl", "get", "secret", "-n", namespace, name,
		"-o", fmt.Sprintf("jsonpath={.data.%s}", key)).CombinedOutput()
	if err != nil {
		return "", fmt.Errorf("kubectl get secret %s/%s: %s: %w", namespace, name, string(out), err)
	}
	decoded, err := base64.StdEncoding.DecodeString(strings.TrimSpace(string(out)))
	if err != nil {
		return "", fmt.Errorf("base64 decode %s/%s[%s]: %w", namespace, name, key, err)
	}
	return string(decoded), nil
}

// kubectlGetSecretJSON reads a secret and returns all data keys decoded.
func kubectlGetSecretJSON(namespace, name string) (map[string]string, error) {
	out, err := exec.Command("kubectl", "get", "secret", "-n", namespace, name,
		"-o", "jsonpath={.data}").CombinedOutput()
	if err != nil {
		return nil, fmt.Errorf("kubectl get secret %s/%s: %s: %w", namespace, name, string(out), err)
	}
	var raw map[string]string
	if err := json.Unmarshal(out, &raw); err != nil {
		return nil, err
	}
	result := make(map[string]string, len(raw))
	for k, v := range raw {
		decoded, err := base64.StdEncoding.DecodeString(v)
		if err != nil {
			return nil, err
		}
		result[k] = string(decoded)
	}
	return result, nil
}

// ---------------------------------------------------------------------------
// Port-forward manager
// ---------------------------------------------------------------------------

type portForward struct {
	localPort int
	cmd       *exec.Cmd
	cancel    context.CancelFunc
}

func startPortForward(ctx context.Context, namespace, resource string, remotePort int) (*portForward, error) {
	localPort, err := freePort()
	if err != nil {
		return nil, fmt.Errorf("find free port: %w", err)
	}

	pfCtx, pfCancel := context.WithCancel(ctx)
	cmd := exec.CommandContext(pfCtx, "kubectl", "port-forward",
		"-n", namespace, resource,
		fmt.Sprintf("%d:%d", localPort, remotePort))

	// Use a temp file for stdout to avoid pipe cleanup issues on Windows
	outFile, err := os.CreateTemp("", "pf-*.log")
	if err != nil {
		pfCancel()
		return nil, err
	}
	cmd.Stdout = outFile
	cmd.Stderr = outFile

	if err := cmd.Start(); err != nil {
		outFile.Close()
		os.Remove(outFile.Name())
		pfCancel()
		return nil, err
	}

	// Poll the file for "Forwarding from" message
	deadline := time.Now().Add(15 * time.Second)
	buf := make([]byte, 512)
	for time.Now().Before(deadline) {
		outFile.Seek(0, 0)
		n, _ := outFile.Read(buf)
		if n > 0 && strings.Contains(string(buf[:n]), "Forwarding from") {
			outFile.Close()
			os.Remove(outFile.Name())
			return &portForward{localPort: localPort, cmd: cmd, cancel: pfCancel}, nil
		}
		time.Sleep(200 * time.Millisecond)
	}

	outFile.Seek(0, 0)
	n, _ := outFile.Read(buf)
	outFile.Close()
	os.Remove(outFile.Name())
	pfCancel()
	return nil, fmt.Errorf("port-forward timeout for %s/%s:%d (output: %s)", namespace, resource, remotePort, string(buf[:n]))
}

func (pf *portForward) close() {
	if pf.cmd.Process != nil {
		_ = pf.cmd.Process.Kill()
	}
	pf.cancel()
}

func cleanupPortForwards() {
	for _, pf := range portForwards {
		pf.close()
	}
	portForwards = nil
}

func freePort() (int, error) {
	l, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		return 0, err
	}
	port := l.Addr().(*net.TCPAddr).Port
	l.Close()
	return port, nil
}
