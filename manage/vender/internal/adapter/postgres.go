package adapter

import (
	"context"
	"database/sql"
	"fmt"
	"regexp"
	"strings"
	"time"

	"github.com/google/uuid"
	_ "github.com/jackc/pgx/v5/stdlib"
)

var allowedGrants = map[string]bool{
	"SELECT": true, "INSERT": true, "UPDATE": true, "DELETE": true,
	"TRUNCATE": true, "REFERENCES": true, "TRIGGER": true, "ALL": true,
}

type PostgresAdapter struct {
	db *sql.DB
}

func NewPostgresAdapter(dsn string) (*PostgresAdapter, error) {
	db, err := sql.Open("pgx", dsn)
	if err != nil {
		return nil, fmt.Errorf("connect to postgres: %w", err)
	}
	db.SetMaxOpenConns(5)
	return &PostgresAdapter{db: db}, nil
}

func (a *PostgresAdapter) ServiceName() string { return "postgres" }

func (a *PostgresAdapter) Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error) {
	roleName := fmt.Sprintf("vend_%s_%s", sanitize(user), uuid.New().String()[:8])
	password := uuid.New().String()
	expiresAt := time.Now().Add(ttl)

	// Validate grants against allowlist to prevent injection
	grants := params["grants"]
	if grants == "" {
		grants = "SELECT"
	}
	if err := validateGrants(grants); err != nil {
		return nil, err
	}

	dbName := params["database"]
	if dbName == "" {
		dbName = "app"
	}
	schema := params["schema"]
	if schema == "" {
		schema = "public"
	}

	// Validate identifiers
	if !isValidIdentifier(dbName) || !isValidIdentifier(schema) {
		return nil, fmt.Errorf("invalid identifier: database=%q schema=%q", dbName, schema)
	}

	// Use ALTER ROLE ... PASSWORD to set password safely (no string interpolation)
	// CREATE ROLE does not support $1 placeholders, so we use sanitized roleName only
	_, err := a.db.ExecContext(ctx, fmt.Sprintf(
		"CREATE ROLE %s LOGIN VALID UNTIL %s",
		quoteIdent(roleName), quoteLiteral(expiresAt.Format(time.RFC3339)),
	))
	if err != nil {
		return nil, fmt.Errorf("create role: %w", err)
	}

	// Set password via parameterized query through ALTER ROLE
	// PostgreSQL doesn't support $1 for DDL, but we can use the format: PASSWORD 'literal'
	// The password is a UUID (safe characters only: hex + hyphens), but we still quote it properly
	_, err = a.db.ExecContext(ctx, fmt.Sprintf(
		"ALTER ROLE %s PASSWORD %s",
		quoteIdent(roleName), quoteLiteral(password),
	))
	if err != nil {
		// Cleanup: drop the role we just created
		_, _ = a.db.ExecContext(ctx, fmt.Sprintf("DROP ROLE IF EXISTS %s", quoteIdent(roleName)))
		return nil, fmt.Errorf("set password: %w", err)
	}

	// Apply grants — rollback role on any failure
	cleanup := func() {
		_, _ = a.db.ExecContext(ctx, fmt.Sprintf("DROP ROLE IF EXISTS %s", quoteIdent(roleName)))
	}

	_, err = a.db.ExecContext(ctx, fmt.Sprintf(
		"GRANT CONNECT ON DATABASE %s TO %s",
		quoteIdent(dbName), quoteIdent(roleName),
	))
	if err != nil {
		cleanup()
		return nil, fmt.Errorf("grant connect: %w", err)
	}

	// Schema-level grants: USAGE (always) + CREATE (if schemaCreate=true)
	schemaGrant := "USAGE"
	if params["schemaCreate"] == "true" {
		schemaGrant = "USAGE, CREATE"
	}
	_, err = a.db.ExecContext(ctx, fmt.Sprintf(
		"GRANT %s ON SCHEMA %s TO %s",
		schemaGrant, quoteIdent(schema), quoteIdent(roleName),
	))
	if err != nil {
		cleanup()
		return nil, fmt.Errorf("grant schema: %w", err)
	}

	_, err = a.db.ExecContext(ctx, fmt.Sprintf(
		"GRANT %s ON ALL TABLES IN SCHEMA %s TO %s",
		grants, quoteIdent(schema), quoteIdent(roleName),
	))
	if err != nil {
		cleanup()
		return nil, fmt.Errorf("grant tables: %w", err)
	}

	return &Credential{
		ID:        roleName,
		Username:  user,
		IssuedAt:  time.Now(),
		ExpiresAt: expiresAt,
		Details: map[string]string{
			"host":     "pg-persistence-rw.persistence.svc.cluster.local",
			"port":     "5432",
			"role":     roleName,
			"database": dbName,
			"grants":   grants,
		},
		Secrets: map[string]string{
			"password": password,
		},
	}, nil
}

func (a *PostgresAdapter) Revoke(ctx context.Context, cred *Credential) error {
	roleName := cred.ID
	if !isValidIdentifier(roleName) {
		return fmt.Errorf("invalid role name: %q", roleName)
	}
	// NOLOGIN first — prevents reconnection race between terminate and DROP
	_, _ = a.db.ExecContext(ctx, fmt.Sprintf("ALTER ROLE %s NOLOGIN", quoteIdent(roleName)))
	// Terminate all active sessions for this role
	_, _ = a.db.ExecContext(ctx,
		"SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE usename = $1", roleName)
	// Revoke privileges and drop role
	_, _ = a.db.ExecContext(ctx, fmt.Sprintf("REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM %s", quoteIdent(roleName)))
	_, _ = a.db.ExecContext(ctx, fmt.Sprintf("REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM %s", quoteIdent(roleName)))
	_, _ = a.db.ExecContext(ctx, fmt.Sprintf("REVOKE ALL ON SCHEMA public FROM %s", quoteIdent(roleName)))
	_, _ = a.db.ExecContext(ctx, fmt.Sprintf("REVOKE ALL ON DATABASE app FROM %s", quoteIdent(roleName)))
	_, err := a.db.ExecContext(ctx, fmt.Sprintf("DROP ROLE IF EXISTS %s", quoteIdent(roleName)))
	return err
}

// validateGrants checks that each grant token is in the allowlist.
func validateGrants(grants string) error {
	for _, g := range strings.Split(grants, ",") {
		g = strings.TrimSpace(strings.ToUpper(g))
		if !allowedGrants[g] {
			return fmt.Errorf("invalid grant type: %q", g)
		}
	}
	return nil
}

var identifierRe = regexp.MustCompile(`^[a-zA-Z_][a-zA-Z0-9_]*$`)

func isValidIdentifier(s string) bool {
	return identifierRe.MatchString(s)
}

func sanitize(s string) string {
	return strings.Map(func(r rune) rune {
		if (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') || r == '_' {
			return r
		}
		return '_'
	}, strings.ToLower(s))
}

func quoteIdent(s string) string {
	return `"` + strings.ReplaceAll(s, `"`, `""`) + `"`
}

// quoteLiteral safely quotes a string literal for PostgreSQL.
// Escapes single quotes by doubling them and wraps in single quotes.
func quoteLiteral(s string) string {
	return `'` + strings.ReplaceAll(s, `'`, `''`) + `'`
}
