package oidc

import (
	"context"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"

	"golang.org/x/oauth2"
)

// Endpoints holds the OIDC endpoints discovered from the issuer.
type Endpoints struct {
	AuthorizationEndpoint string `json:"authorization_endpoint"`
	TokenEndpoint         string `json:"token_endpoint"`
	UserinfoEndpoint      string `json:"userinfo_endpoint"`
	EndSessionEndpoint    string `json:"end_session_endpoint"`
}

// InsecureHTTPClient returns an HTTP client that skips TLS verification.
// Used for in-cluster communication with self-signed certs.
func InsecureHTTPClient() *http.Client {
	return &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
		},
		Timeout: 10 * time.Second,
	}
}

// Discover fetches the OIDC discovery document from the issuer URL.
func Discover(ctx context.Context, client *http.Client, issuerURL string) (*Endpoints, error) {
	url := strings.TrimRight(issuerURL, "/") + "/.well-known/openid-configuration"
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}

	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("GET %s: %w", url, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("GET %s: status %d", url, resp.StatusCode)
	}

	var endpoints Endpoints
	if err := json.NewDecoder(resp.Body).Decode(&endpoints); err != nil {
		return nil, fmt.Errorf("decode discovery: %w", err)
	}

	if endpoints.AuthorizationEndpoint == "" || endpoints.TokenEndpoint == "" {
		return nil, fmt.Errorf("discovery document missing required endpoints")
	}

	return &endpoints, nil
}

// ToOAuth2Endpoint converts OIDC endpoints to an oauth2.Endpoint.
func (e *Endpoints) ToOAuth2Endpoint() oauth2.Endpoint {
	return oauth2.Endpoint{
		AuthURL:  e.AuthorizationEndpoint,
		TokenURL: e.TokenEndpoint,
	}
}
