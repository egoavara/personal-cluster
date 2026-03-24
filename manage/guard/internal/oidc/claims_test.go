package oidc

import (
	"encoding/base64"
	"encoding/json"
	"testing"

	"golang.org/x/oauth2"
)

func fakeTokenWithClaims(claims map[string]interface{}) *oauth2.Token {
	claimsJSON, _ := json.Marshal(claims)
	payload := base64.RawURLEncoding.EncodeToString(claimsJSON)
	header := base64.RawURLEncoding.EncodeToString([]byte(`{"alg":"RS256"}`))
	fakeJWT := header + "." + payload + ".fake-signature"

	token := &oauth2.Token{}
	return token.WithExtra(map[string]interface{}{
		"id_token": fakeJWT,
	})
}

func TestParseIDTokenClaims(t *testing.T) {
	token := fakeTokenWithClaims(map[string]interface{}{
		"sub":                "user-123",
		"preferred_username": "alice",
		"email":              "alice@example.com",
		"groups":             []interface{}{"admin", "users"},
	})

	parsed, err := ParseIDTokenClaims(token)
	if err != nil {
		t.Fatalf("ParseIDTokenClaims error: %v", err)
	}

	if parsed.Username() != "alice" {
		t.Errorf("Username = %q, want %q", parsed.Username(), "alice")
	}
	if parsed.Email() != "alice@example.com" {
		t.Errorf("Email = %q, want %q", parsed.Email(), "alice@example.com")
	}
	groups := parsed.Groups()
	if len(groups) != 2 || groups[0] != "admin" || groups[1] != "users" {
		t.Errorf("Groups = %v, want [admin users]", groups)
	}
}

func TestParseIDTokenClaims_FallbackUsername(t *testing.T) {
	token := fakeTokenWithClaims(map[string]interface{}{
		"sub": "user-123",
	})

	parsed, err := ParseIDTokenClaims(token)
	if err != nil {
		t.Fatalf("error: %v", err)
	}
	if parsed.Username() != "user-123" {
		t.Errorf("Username = %q, want %q (fallback to sub)", parsed.Username(), "user-123")
	}
}

func TestParseIDTokenClaims_NoGroups(t *testing.T) {
	token := fakeTokenWithClaims(map[string]interface{}{
		"sub": "user-123",
	})

	parsed, _ := ParseIDTokenClaims(token)
	groups := parsed.Groups()
	if groups != nil {
		t.Errorf("groups should be nil when not present, got %v", groups)
	}
}

func TestParseIDTokenClaims_MissingIDToken(t *testing.T) {
	token := &oauth2.Token{}
	_, err := ParseIDTokenClaims(token)
	if err == nil {
		t.Error("expected error for missing id_token")
	}
}

func TestGenerateState_Randomness(t *testing.T) {
	s1 := GenerateState()
	s2 := GenerateState()
	if s1 == s2 {
		t.Error("GenerateState should produce different values")
	}
	if len(s1) == 0 {
		t.Error("GenerateState should not be empty")
	}
}
