package store

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/egoavara/personal-cluster/manage/vender/internal/adapter"
	_ "github.com/jackc/pgx/v5/stdlib"
)

// Store persists issued credentials for listing and revocation.
type Store struct {
	db *sql.DB
}

func New(dsn string) (*Store, error) {
	db, err := sql.Open("pgx", dsn)
	if err != nil {
		return nil, fmt.Errorf("connect to store db: %w", err)
	}
	db.SetMaxOpenConns(5)
	return &Store{db: db}, nil
}

// Migrate creates the credentials table if not exists and ensures proper permissions.
func (s *Store) Migrate(ctx context.Context) error {
	// Ensure current user has USAGE + CREATE on public schema.
	// This is a no-op if already granted, and harmless if the user is the schema owner.
	// Requires a superuser or schema owner to have granted these privileges;
	// if this fails, we proceed anyway — the CREATE TABLE below will surface the real error.
	s.db.ExecContext(ctx, `GRANT USAGE, CREATE ON SCHEMA public TO CURRENT_USER`)

	_, err := s.db.ExecContext(ctx, `
		CREATE TABLE IF NOT EXISTS vender_credentials (
			id TEXT PRIMARY KEY,
			service TEXT NOT NULL,
			template TEXT NOT NULL,
			username TEXT NOT NULL,
			issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
			expires_at TIMESTAMPTZ NOT NULL,
			details JSONB NOT NULL DEFAULT '{}',
			revoked BOOLEAN NOT NULL DEFAULT FALSE
		)
	`)
	if err != nil {
		return fmt.Errorf("migrate: %w", err)
	}

	// If the table was created by a different user, take ownership.
	// DDL (ALTER TABLE OWNER TO) does not support $1 placeholders, so we use quoteIdent.
	// currentUser comes from PG's internal current_user function (not external input).
	var currentUser, tableOwner string
	s.db.QueryRowContext(ctx, `SELECT current_user`).Scan(&currentUser)
	s.db.QueryRowContext(ctx,
		`SELECT tableowner FROM pg_tables WHERE tablename = $1 AND schemaname = $2`,
		"vender_credentials", "public",
	).Scan(&tableOwner)
	if currentUser != "" && tableOwner != "" && tableOwner != currentUser {
		s.db.ExecContext(ctx, fmt.Sprintf(
			`ALTER TABLE vender_credentials OWNER TO %s`, quoteIdent(currentUser),
		))
	}

	_, err = s.db.ExecContext(ctx, `
		CREATE INDEX IF NOT EXISTS idx_vender_credentials_username ON vender_credentials(username) WHERE NOT revoked
	`)
	return err
}

func quoteIdent(s string) string {
	return `"` + strings.ReplaceAll(s, `"`, `""`) + `"`
}


// Save persists an issued credential.
func (s *Store) Save(ctx context.Context, cred *adapter.Credential) error {
	detailsJSON, err := json.Marshal(cred.Details)
	if err != nil {
		return fmt.Errorf("marshal details: %w", err)
	}
	_, err = s.db.ExecContext(ctx,
		`INSERT INTO vender_credentials (id, service, template, username, issued_at, expires_at, details)
		 VALUES ($1, $2, $3, $4, $5, $6, $7)`,
		cred.ID, cred.Service, cred.Template, cred.Username,
		cred.IssuedAt, cred.ExpiresAt, detailsJSON,
	)
	return err
}

// ListByUser returns all active (non-revoked, non-expired) credentials for a user.
func (s *Store) ListByUser(ctx context.Context, username string) ([]*adapter.Credential, error) {
	rows, err := s.db.QueryContext(ctx,
		`SELECT id, service, template, username, issued_at, expires_at, details
		 FROM vender_credentials
		 WHERE username = $1 AND NOT revoked AND expires_at > $2
		 ORDER BY issued_at DESC`,
		username, time.Now(),
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var creds []*adapter.Credential
	for rows.Next() {
		var c adapter.Credential
		var detailsJSON []byte
		if err := rows.Scan(&c.ID, &c.Service, &c.Template, &c.Username, &c.IssuedAt, &c.ExpiresAt, &detailsJSON); err != nil {
			return nil, err
		}
		_ = json.Unmarshal(detailsJSON, &c.Details)
		creds = append(creds, &c)
	}
	return creds, rows.Err()
}

// MarkRevoked marks a credential as revoked in the store.
func (s *Store) MarkRevoked(ctx context.Context, credID, username string) error {
	result, err := s.db.ExecContext(ctx,
		`UPDATE vender_credentials SET revoked = TRUE WHERE id = $1 AND username = $2 AND NOT revoked`,
		credID, username,
	)
	if err != nil {
		return err
	}
	n, _ := result.RowsAffected()
	if n == 0 {
		return fmt.Errorf("credential not found or already revoked")
	}
	return nil
}

// ListExpired returns credentials that have expired but not yet revoked.
func (s *Store) ListExpired(ctx context.Context) ([]*adapter.Credential, error) {
	rows, err := s.db.QueryContext(ctx,
		`SELECT id, service, template, username, issued_at, expires_at, details
		 FROM vender_credentials
		 WHERE NOT revoked AND expires_at <= $1
		 ORDER BY expires_at ASC`,
		time.Now(),
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var creds []*adapter.Credential
	for rows.Next() {
		var c adapter.Credential
		var detailsJSON []byte
		if err := rows.Scan(&c.ID, &c.Service, &c.Template, &c.Username, &c.IssuedAt, &c.ExpiresAt, &detailsJSON); err != nil {
			return nil, err
		}
		_ = json.Unmarshal(detailsJSON, &c.Details)
		creds = append(creds, &c)
	}
	return creds, rows.Err()
}

// MarkRevokedByID marks a credential as revoked without requiring username.
func (s *Store) MarkRevokedByID(ctx context.Context, credID string) error {
	_, err := s.db.ExecContext(ctx,
		`UPDATE vender_credentials SET revoked = TRUE WHERE id = $1 AND NOT revoked`,
		credID,
	)
	return err
}

// GetByID retrieves a credential by ID for the given user.
func (s *Store) GetByID(ctx context.Context, credID, username string) (*adapter.Credential, error) {
	var c adapter.Credential
	var detailsJSON []byte
	err := s.db.QueryRowContext(ctx,
		`SELECT id, service, template, username, issued_at, expires_at, details
		 FROM vender_credentials
		 WHERE id = $1 AND username = $2`,
		credID, username,
	).Scan(&c.ID, &c.Service, &c.Template, &c.Username, &c.IssuedAt, &c.ExpiresAt, &detailsJSON)
	if err != nil {
		return nil, err
	}
	_ = json.Unmarshal(detailsJSON, &c.Details)
	return &c, nil
}
