package adapter

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/ClickHouse/clickhouse-go/v2"
	"github.com/google/uuid"
)

// ClickHouseAdapter creates and revokes ClickHouse SQL users.
// ClickHouse supports CREATE USER with password, GRANT, and DROP USER.
type ClickHouseAdapter struct {
	conn    clickhouse.Conn
	host    string
	port    string
	cluster string // ON CLUSTER name for replicated user management
}

func NewClickHouseAdapter(dsn string) (*ClickHouseAdapter, error) {
	opts, err := clickhouse.ParseDSN(dsn)
	if err != nil {
		return nil, fmt.Errorf("parse clickhouse dsn: %w", err)
	}
	conn, err := clickhouse.Open(opts)
	if err != nil {
		return nil, fmt.Errorf("connect to clickhouse: %w", err)
	}
	if err := conn.Ping(context.Background()); err != nil {
		return nil, fmt.Errorf("ping clickhouse: %w", err)
	}

	// Extract host:port for credential details
	host := "clickhouse-clickhouse.persistence.svc.cluster.local"
	port := "9000"
	if len(opts.Addr) > 0 {
		parts := strings.Split(opts.Addr[0], ":")
		host = parts[0]
		if len(parts) > 1 {
			port = parts[1]
		}
	}

	// Auto-detect cluster name
	var cluster string
	row := conn.QueryRow(context.Background(),
		"SELECT cluster FROM system.clusters WHERE cluster NOT IN ('default','all-clusters','all-replicated','all-sharded') LIMIT 1")
	_ = row.Scan(&cluster)

	return &ClickHouseAdapter{conn: conn, host: host, port: port, cluster: cluster}, nil
}

func (a *ClickHouseAdapter) ServiceName() string { return "clickhouse" }

// allowedCHGrants are valid ClickHouse privilege names for GRANT.
var allowedCHGrants = map[string]bool{
	"SELECT": true, "INSERT": true, "ALTER": true, "CREATE": true,
	"DROP": true, "TRUNCATE": true, "SHOW": true, "ALL": true,
}

func (a *ClickHouseAdapter) Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error) {
	roleName := fmt.Sprintf("vend_%s_%s", sanitize(user), uuid.New().String()[:8])
	password := uuid.New().String()

	grants := params["grants"]
	if grants == "" {
		grants = "SELECT"
	}
	for _, g := range strings.Split(grants, ",") {
		g = strings.TrimSpace(strings.ToUpper(g))
		if !allowedCHGrants[g] {
			return nil, fmt.Errorf("invalid grant type: %q", g)
		}
	}

	database := params["database"]
	if database == "" {
		database = "default"
	}
	if !isValidIdentifier(database) {
		return nil, fmt.Errorf("invalid database identifier: %q", database)
	}

	// ON CLUSTER clause (empty string if no cluster)
	onCluster := ""
	if a.cluster != "" {
		onCluster = fmt.Sprintf(" ON CLUSTER %s", quoteLiteralCH(a.cluster))
	}

	// CREATE USER with password
	err := a.conn.Exec(ctx, fmt.Sprintf(
		"CREATE USER %s%s IDENTIFIED BY %s",
		quoteIdentCH(roleName), onCluster, quoteLiteralCH(password),
	))
	if err != nil {
		return nil, fmt.Errorf("create user: %w", err)
	}

	// GRANT privileges
	err = a.conn.Exec(ctx, fmt.Sprintf(
		"GRANT%s %s ON %s.* TO %s",
		onCluster, grants, quoteIdentCH(database), quoteIdentCH(roleName),
	))
	if err != nil {
		_ = a.conn.Exec(ctx, fmt.Sprintf("DROP USER IF EXISTS %s%s", quoteIdentCH(roleName), onCluster))
		return nil, fmt.Errorf("grant: %w", err)
	}

	return &Credential{
		ID:        roleName,
		Username:  user,
		IssuedAt:  time.Now(),
		ExpiresAt: time.Now().Add(ttl),
		Details: map[string]string{
			"host":     a.host,
			"port":     a.port,
			"user":     roleName,
			"database": database,
			"grants":   grants,
		},
		Secrets: map[string]string{
			"password": password,
		},
	}, nil
}

func (a *ClickHouseAdapter) Revoke(ctx context.Context, cred *Credential) error {
	roleName := cred.ID
	if !isValidIdentifier(roleName) {
		return fmt.Errorf("invalid user name: %q", roleName)
	}
	onCluster := ""
	if a.cluster != "" {
		onCluster = fmt.Sprintf(" ON CLUSTER %s", quoteLiteralCH(a.cluster))
	}
	_ = a.conn.Exec(ctx, fmt.Sprintf("REVOKE%s ALL ON *.* FROM %s", onCluster, quoteIdentCH(roleName)))
	return a.conn.Exec(ctx, fmt.Sprintf("DROP USER IF EXISTS %s%s", quoteIdentCH(roleName), onCluster))
}

// quoteIdentCH quotes a ClickHouse identifier with backticks.
func quoteIdentCH(s string) string {
	return "`" + strings.ReplaceAll(s, "`", "``") + "`"
}

// quoteLiteralCH quotes a ClickHouse string literal.
func quoteLiteralCH(s string) string {
	return "'" + strings.ReplaceAll(s, "'", "\\'") + "'"
}
