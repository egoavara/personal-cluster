package adapter

import (
	"context"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
)

type ValkeyAdapter struct {
	client *redis.Client
}

func NewValkeyAdapter(addr, password string) *ValkeyAdapter {
	return &ValkeyAdapter{
		client: redis.NewClient(&redis.Options{
			Addr:     addr,
			Password: password,
		}),
	}
}

func (a *ValkeyAdapter) ServiceName() string { return "valkey" }

func (a *ValkeyAdapter) Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error) {
	aclUser := fmt.Sprintf("vend_%s_%s", sanitize(user), uuid.New().String()[:8])
	password := uuid.New().String()

	commands := params["commands"]
	if commands == "" {
		commands = "+@read"
	}
	keys := params["keys"]
	if keys == "" {
		keys = "~*"
	}

	// ACL SETUSER requires separate arguments, not a single string.
	// Format: ACL SETUSER <username> on ><password> <commands...> <keys...>
	args := []any{"ACL", "SETUSER", aclUser, "on", ">" + password}
	for _, cmd := range splitArgs(commands) {
		args = append(args, cmd)
	}
	for _, key := range splitArgs(keys) {
		args = append(args, key)
	}

	if err := a.client.Do(ctx, args...).Err(); err != nil {
		return nil, fmt.Errorf("acl setuser: %w", err)
	}

	return &Credential{
		ID:        aclUser,
		Username:  user,
		IssuedAt:  time.Now(),
		ExpiresAt: time.Now().Add(ttl),
		Details: map[string]string{
			"host":     "valkey-node-0.valkey-headless.persistence.svc.cluster.local",
			"port":     "6379",
			"aclUser":  aclUser,
			"commands": commands,
			"keys":     keys,
		},
		Secrets: map[string]string{
			"password": password,
		},
	}, nil
}

func (a *ValkeyAdapter) Revoke(ctx context.Context, cred *Credential) error {
	return a.client.Do(ctx, "ACL", "DELUSER", cred.ID).Err()
}

// splitArgs splits space-separated arguments, respecting that each token is a separate arg.
func splitArgs(s string) []string {
	var result []string
	for _, part := range splitBySpace(s) {
		if part != "" {
			result = append(result, part)
		}
	}
	return result
}

func splitBySpace(s string) []string {
	var parts []string
	current := ""
	for _, r := range s {
		if r == ' ' {
			if current != "" {
				parts = append(parts, current)
				current = ""
			}
		} else {
			current += string(r)
		}
	}
	if current != "" {
		parts = append(parts, current)
	}
	return parts
}
