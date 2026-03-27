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

// Migrate creates the credentials and templates tables if not exists and ensures proper permissions.
func (s *Store) Migrate(ctx context.Context) error {
	// Ensure current user has USAGE + CREATE on public schema.
	s.db.ExecContext(ctx, `GRANT USAGE, CREATE ON SCHEMA public TO CURRENT_USER`)

	var currentUser string
	s.db.QueryRowContext(ctx, `SELECT current_user`).Scan(&currentUser)

	// --- vender_credentials ---
	_, err := s.db.ExecContext(ctx, `
		CREATE TABLE IF NOT EXISTS vender_credentials (
			id TEXT PRIMARY KEY,
			service TEXT NOT NULL,
			template TEXT NOT NULL,
			username TEXT NOT NULL,
			issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
			expires_at TIMESTAMPTZ NOT NULL,
			details JSONB NOT NULL DEFAULT '{}',
			revoked BOOLEAN NOT NULL DEFAULT FALSE,
			revoked_at TIMESTAMPTZ
		)
	`)
	if err != nil {
		return fmt.Errorf("migrate credentials: %w", err)
	}

	// Add revoked_at column if missing (existing installations)
	s.db.ExecContext(ctx, `ALTER TABLE vender_credentials ADD COLUMN IF NOT EXISTS revoked_at TIMESTAMPTZ`)

	s.takeOwnership(ctx, currentUser, "vender_credentials")

	_, err = s.db.ExecContext(ctx, `
		CREATE INDEX IF NOT EXISTS idx_vender_credentials_username ON vender_credentials(username) WHERE NOT revoked
	`)
	if err != nil {
		return fmt.Errorf("migrate credentials index: %w", err)
	}

	// --- vender_templates ---
	_, err = s.db.ExecContext(ctx, `
		CREATE TABLE IF NOT EXISTS vender_templates (
			id TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			description TEXT NOT NULL DEFAULT '',
			service TEXT NOT NULL,
			ttl BIGINT NOT NULL,
			params JSONB NOT NULL DEFAULT '{}'
		)
	`)
	if err != nil {
		return fmt.Errorf("migrate templates: %w", err)
	}

	s.takeOwnership(ctx, currentUser, "vender_templates")
	return nil
}

// takeOwnership changes table owner to currentUser if different.
func (s *Store) takeOwnership(ctx context.Context, currentUser, tableName string) {
	if currentUser == "" {
		return
	}
	var tableOwner string
	s.db.QueryRowContext(ctx,
		`SELECT tableowner FROM pg_tables WHERE tablename = $1 AND schemaname = $2`,
		tableName, "public",
	).Scan(&tableOwner)
	if tableOwner != "" && tableOwner != currentUser {
		s.db.ExecContext(ctx, fmt.Sprintf(
			`ALTER TABLE %s OWNER TO %s`, quoteIdent(tableName), quoteIdent(currentUser),
		))
	}
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
		`UPDATE vender_credentials SET revoked = TRUE, revoked_at = NOW() WHERE id = $1 AND username = $2 AND NOT revoked`,
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
		`UPDATE vender_credentials SET revoked = TRUE, revoked_at = NOW() WHERE id = $1 AND NOT revoked`,
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

// CredentialHistory represents a credential record with revocation info.
type CredentialHistory struct {
	ID        string            `json:"id"`
	Service   string            `json:"service"`
	Template  string            `json:"template"`
	Username  string            `json:"username"`
	IssuedAt  time.Time         `json:"issuedAt"`
	ExpiresAt time.Time         `json:"expiresAt"`
	Details   map[string]string `json:"details"`
	Revoked   bool              `json:"revoked"`
	RevokedAt *time.Time        `json:"revokedAt,omitempty"`
}

// ListHistory returns all credentials (including revoked) ordered by issued_at desc.
func (s *Store) ListHistory(ctx context.Context, limit int) ([]CredentialHistory, error) {
	if limit <= 0 {
		limit = 100
	}
	rows, err := s.db.QueryContext(ctx,
		`SELECT id, service, template, username, issued_at, expires_at, details, revoked, revoked_at
		 FROM vender_credentials
		 ORDER BY issued_at DESC
		 LIMIT $1`,
		limit,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var result []CredentialHistory
	for rows.Next() {
		var h CredentialHistory
		var detailsJSON []byte
		if err := rows.Scan(&h.ID, &h.Service, &h.Template, &h.Username, &h.IssuedAt, &h.ExpiresAt, &detailsJSON, &h.Revoked, &h.RevokedAt); err != nil {
			return nil, err
		}
		_ = json.Unmarshal(detailsJSON, &h.Details)
		result = append(result, h)
	}
	return result, rows.Err()
}

// --- Template CRUD ---

// DBTemplate represents a template stored in the database.
type DBTemplate struct {
	ID          string            `json:"id"`
	Name        string            `json:"name"`
	Description string            `json:"description"`
	Service     string            `json:"service"`
	TTL         time.Duration     `json:"ttl"`
	Params      map[string]string `json:"params"`
}

// ListTemplates returns all templates from the database.
func (s *Store) ListTemplates(ctx context.Context) ([]DBTemplate, error) {
	rows, err := s.db.QueryContext(ctx,
		`SELECT id, name, description, service, ttl, params FROM vender_templates ORDER BY id`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var result []DBTemplate
	for rows.Next() {
		var t DBTemplate
		var ttlNanos int64
		var paramsJSON []byte
		if err := rows.Scan(&t.ID, &t.Name, &t.Description, &t.Service, &ttlNanos, &paramsJSON); err != nil {
			return nil, err
		}
		t.TTL = time.Duration(ttlNanos)
		_ = json.Unmarshal(paramsJSON, &t.Params)
		if t.Params == nil {
			t.Params = map[string]string{}
		}
		result = append(result, t)
	}
	return result, rows.Err()
}

// GetTemplate returns a single template by ID.
func (s *Store) GetTemplate(ctx context.Context, id string) (*DBTemplate, error) {
	var t DBTemplate
	var ttlNanos int64
	var paramsJSON []byte
	err := s.db.QueryRowContext(ctx,
		`SELECT id, name, description, service, ttl, params FROM vender_templates WHERE id = $1`, id,
	).Scan(&t.ID, &t.Name, &t.Description, &t.Service, &ttlNanos, &paramsJSON)
	if err != nil {
		return nil, err
	}
	t.TTL = time.Duration(ttlNanos)
	_ = json.Unmarshal(paramsJSON, &t.Params)
	if t.Params == nil {
		t.Params = map[string]string{}
	}
	return &t, nil
}

// CreateTemplate inserts a new template.
func (s *Store) CreateTemplate(ctx context.Context, t *DBTemplate) error {
	paramsJSON, err := json.Marshal(t.Params)
	if err != nil {
		return fmt.Errorf("marshal params: %w", err)
	}
	_, err = s.db.ExecContext(ctx,
		`INSERT INTO vender_templates (id, name, description, service, ttl, params) VALUES ($1, $2, $3, $4, $5, $6)`,
		t.ID, t.Name, t.Description, t.Service, int64(t.TTL), paramsJSON,
	)
	return err
}

// UpdateTemplate updates an existing template.
func (s *Store) UpdateTemplate(ctx context.Context, t *DBTemplate) error {
	paramsJSON, err := json.Marshal(t.Params)
	if err != nil {
		return fmt.Errorf("marshal params: %w", err)
	}
	result, err := s.db.ExecContext(ctx,
		`UPDATE vender_templates SET name = $2, description = $3, service = $4, ttl = $5, params = $6 WHERE id = $1`,
		t.ID, t.Name, t.Description, t.Service, int64(t.TTL), paramsJSON,
	)
	if err != nil {
		return err
	}
	n, _ := result.RowsAffected()
	if n == 0 {
		return fmt.Errorf("template not found: %s", t.ID)
	}
	return nil
}

// DeleteTemplate removes a template by ID.
func (s *Store) DeleteTemplate(ctx context.Context, id string) error {
	result, err := s.db.ExecContext(ctx,
		`DELETE FROM vender_templates WHERE id = $1`, id,
	)
	if err != nil {
		return err
	}
	n, _ := result.RowsAffected()
	if n == 0 {
		return fmt.Errorf("template not found: %s", id)
	}
	return nil
}

// SeedTemplatesFromConfig inserts config templates into DB if the table is empty.
// This handles the migration from static config to dynamic DB templates.
func (s *Store) SeedTemplatesFromConfig(ctx context.Context, templates []DBTemplate) error {
	var count int
	if err := s.db.QueryRowContext(ctx, `SELECT COUNT(*) FROM vender_templates`).Scan(&count); err != nil {
		return err
	}
	if count > 0 {
		return nil // already has templates, skip seeding
	}
	for _, t := range templates {
		if err := s.CreateTemplate(ctx, &t); err != nil {
			return fmt.Errorf("seed template %s: %w", t.ID, err)
		}
	}
	return nil
}
