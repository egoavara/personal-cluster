package adapter

import (
	"context"
	"time"
)

// Credential represents an issued credential for a persistence service.
type Credential struct {
	ID        string            `json:"id"`
	Service   string            `json:"service"`
	Template  string            `json:"template"`
	Username  string            `json:"username"`
	IssuedAt  time.Time         `json:"issuedAt"`
	ExpiresAt time.Time         `json:"expiresAt"`
	// Details contains non-sensitive metadata (host, port, role name, etc.)
	// Stored in the credential store for listing/revocation.
	Details map[string]string `json:"details"`
	// Secrets contains sensitive data (passwords, API keys, tokens).
	// Returned to the user once at issuance, NEVER stored in the credential store.
	Secrets map[string]string `json:"secrets,omitempty"`
}

// Adapter issues and revokes native credentials for a persistence service.
type Adapter interface {
	// Issue creates a new credential for the given user with the specified parameters.
	Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error)

	// Revoke removes a previously issued credential.
	Revoke(ctx context.Context, cred *Credential) error

	// ServiceName returns the adapter's service name (e.g., "postgres", "valkey").
	ServiceName() string
}
