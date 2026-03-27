package adapter

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/google/uuid"
)

// ManticoreAdapter creates Zitadel machine users with PATs for Manticore access.
// Manticore has no native auth; guard ext-authz validates the Bearer token.
// PATs are returned immediately in the Zitadel API response — no projection delay.
type ManticoreAdapter struct {
	zitadelAPI string
	pat        string
	projectID  string
	hostHeader string // optional Host header override (for port-forwarded Zitadel)
	client     *http.Client
}

func NewManticoreAdapter(zitadelAPI, pat, projectID string) *ManticoreAdapter {
	return &ManticoreAdapter{
		zitadelAPI: zitadelAPI,
		pat:        pat,
		projectID:  projectID,
		client:     &http.Client{Timeout: 10 * time.Second},
	}
}

// SetHostHeader sets an optional Host header for requests (needed when Zitadel
// is accessed via port-forward and requires a specific domain for instance routing).
func (a *ManticoreAdapter) SetHostHeader(host string) {
	a.hostHeader = host
}

func (a *ManticoreAdapter) ServiceName() string { return "manticore" }

func (a *ManticoreAdapter) setCommonHeaders(req *http.Request) {
	req.Header.Set("Authorization", "Bearer "+a.pat)
	req.Header.Set("Content-Type", "application/json")
	if a.hostHeader != "" {
		req.Host = a.hostHeader
	}
}

func (a *ManticoreAdapter) Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error) {
	userName := fmt.Sprintf("vend_%s_%s", sanitize(user), uuid.New().String()[:8])

	// 1. Create machine user
	userID, err := a.createMachineUser(ctx, userName)
	if err != nil {
		return nil, fmt.Errorf("create machine user: %w", err)
	}

	// 2. Create PAT — returned immediately in the response, no projection delay
	token, patID, err := a.createPAT(ctx, userID, ttl)
	if err != nil {
		// Cleanup: delete the machine user we just created
		a.deleteUser(ctx, userID)
		return nil, fmt.Errorf("create PAT: %w", err)
	}

	return &Credential{
		ID:        userID,
		Username:  user,
		IssuedAt:  time.Now(),
		ExpiresAt: time.Now().Add(ttl),
		Details: map[string]string{
			"machineUser": userName,
			"userId":      userID,
			"patId":       patID,
			"note":        "Use this token as Bearer token for Manticore HTTP API",
		},
		Secrets: map[string]string{
			"token": token,
		},
	}, nil
}

func (a *ManticoreAdapter) Revoke(ctx context.Context, cred *Credential) error {
	return a.deleteUser(ctx, cred.ID)
}

func (a *ManticoreAdapter) deleteUser(ctx context.Context, userID string) error {
	url := fmt.Sprintf("%s/management/v1/users/%s", a.zitadelAPI, userID)
	req, err := http.NewRequestWithContext(ctx, http.MethodDelete, url, nil)
	if err != nil {
		return err
	}
	a.setCommonHeaders(req)

	resp, err := a.client.Do(req)
	if err != nil {
		return fmt.Errorf("delete machine user: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusNotFound {
		body, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("delete user: status %d, body: %s", resp.StatusCode, body)
	}
	return nil
}

func (a *ManticoreAdapter) createMachineUser(ctx context.Context, name string) (string, error) {
	body := map[string]any{
		"userName":        name,
		"name":            name,
		"description":     "Vended machine user for Manticore access",
		"accessTokenType": "ACCESS_TOKEN_TYPE_JWT",
	}
	data, _ := json.Marshal(body)

	url := fmt.Sprintf("%s/management/v1/users/machine", a.zitadelAPI)
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewReader(data))
	if err != nil {
		return "", err
	}
	a.setCommonHeaders(req)

	resp, err := a.client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	respBody, _ := io.ReadAll(resp.Body)
	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("status %d: %s", resp.StatusCode, respBody)
	}

	var result struct {
		UserID string `json:"userId"`
	}
	if err := json.Unmarshal(respBody, &result); err != nil {
		return "", fmt.Errorf("parse response: %w", err)
	}
	return result.UserID, nil
}

// createPAT creates a Personal Access Token for the machine user.
// The token is returned immediately in the response — no eventual consistency delay.
func (a *ManticoreAdapter) createPAT(ctx context.Context, userID string, ttl time.Duration) (token string, patID string, err error) {
	body := map[string]any{
		"expirationDate": time.Now().Add(ttl).UTC().Format(time.RFC3339),
	}
	data, _ := json.Marshal(body)

	url := fmt.Sprintf("%s/management/v1/users/%s/pats", a.zitadelAPI, userID)
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewReader(data))
	if err != nil {
		return "", "", err
	}
	a.setCommonHeaders(req)

	resp, err := a.client.Do(req)
	if err != nil {
		return "", "", err
	}
	defer resp.Body.Close()

	respBody, _ := io.ReadAll(resp.Body)
	if resp.StatusCode != http.StatusOK {
		return "", "", fmt.Errorf("status %d: %s", resp.StatusCode, respBody)
	}

	var result struct {
		TokenID string `json:"tokenId"`
		Token   string `json:"token"`
	}
	if err := json.Unmarshal(respBody, &result); err != nil {
		return "", "", fmt.Errorf("parse response: %w", err)
	}
	return result.Token, result.TokenID, nil
}
