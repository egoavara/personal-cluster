package pat

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

// Issuer creates and revokes Zitadel machine users for PAT authentication.
type Issuer struct {
	zitadelAPI string
	pat        string // Vender's service PAT for Zitadel API
	client     *http.Client
	hostHeader string
}

// IssueResult contains the Zitadel machine user and PAT details.
type IssueResult struct {
	ZitadelUserID   string
	ZitadelPATID    string
	MachineUsername string
	Token           string
}

func NewIssuer(zitadelAPI, pat string) *Issuer {
	return &Issuer{
		zitadelAPI: zitadelAPI,
		pat:        pat,
		client:     &http.Client{Timeout: 10 * time.Second},
	}
}

// SetHostHeader sets an optional Host header for Zitadel requests
// (needed when Zitadel is accessed via port-forward).
func (i *Issuer) SetHostHeader(host string) {
	i.hostHeader = host
}

// Issue creates a Zitadel machine user with a PAT for the given owner.
func (i *Issuer) Issue(ctx context.Context, owner string, ttl time.Duration) (*IssueResult, error) {
	machineUsername := fmt.Sprintf("vdpat_%s_%s", sanitize(owner), uuid.New().String()[:8])

	userID, err := i.createMachineUser(ctx, machineUsername, owner)
	if err != nil {
		return nil, fmt.Errorf("create machine user: %w", err)
	}

	token, patID, err := i.createPAT(ctx, userID, ttl)
	if err != nil {
		i.DeleteUser(ctx, userID)
		return nil, fmt.Errorf("create PAT: %w", err)
	}

	return &IssueResult{
		ZitadelUserID:   userID,
		ZitadelPATID:    patID,
		MachineUsername: machineUsername,
		Token:           token,
	}, nil
}

// DeleteUser removes a Zitadel machine user.
func (i *Issuer) DeleteUser(ctx context.Context, userID string) error {
	url := fmt.Sprintf("%s/management/v1/users/%s", i.zitadelAPI, userID)
	req, err := http.NewRequestWithContext(ctx, http.MethodDelete, url, nil)
	if err != nil {
		return err
	}
	i.setHeaders(req)

	resp, err := i.client.Do(req)
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

func (i *Issuer) createMachineUser(ctx context.Context, name, owner string) (string, error) {
	body := map[string]any{
		"userName":        name,
		"name":            fmt.Sprintf("PAT for %s", owner),
		"description":     fmt.Sprintf("Vender PAT machine user owned by %s", owner),
		"accessTokenType": "ACCESS_TOKEN_TYPE_JWT",
	}
	data, _ := json.Marshal(body)

	url := fmt.Sprintf("%s/management/v1/users/machine", i.zitadelAPI)
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewReader(data))
	if err != nil {
		return "", err
	}
	i.setHeaders(req)

	resp, err := i.client.Do(req)
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

func (i *Issuer) createPAT(ctx context.Context, userID string, ttl time.Duration) (token string, patID string, err error) {
	body := map[string]any{
		"expirationDate": time.Now().Add(ttl).UTC().Format(time.RFC3339),
	}
	data, _ := json.Marshal(body)

	url := fmt.Sprintf("%s/management/v1/users/%s/pats", i.zitadelAPI, userID)
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewReader(data))
	if err != nil {
		return "", "", err
	}
	i.setHeaders(req)

	resp, err := i.client.Do(req)
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

func (i *Issuer) setHeaders(req *http.Request) {
	req.Header.Set("Authorization", "Bearer "+i.pat)
	req.Header.Set("Content-Type", "application/json")
	if i.hostHeader != "" {
		req.Host = i.hostHeader
	}
}

func sanitize(s string) string {
	var b []byte
	for _, c := range []byte(s) {
		if (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c == '-' {
			b = append(b, c)
		}
	}
	if len(b) > 20 {
		b = b[:20]
	}
	return string(b)
}
