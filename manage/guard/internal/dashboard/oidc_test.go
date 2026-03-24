package dashboard

import (
	"testing"
	"time"
)

func newTestOIDCHandler(t *testing.T) *OIDCHandler {
	t.Helper()
	// Create handler directly without OIDC discovery (which requires a live server)
	return &OIDCHandler{
		sessionKey: []byte("test-session-secret-32-chars-min"),
		secure:     false,
	}
}

func TestSessionEncodeDecode(t *testing.T) {
	h := newTestOIDCHandler(t)

	session := SessionData{
		Username:  "alice",
		Email:     "alice@example.com",
		Groups:    []string{"admin", "users"},
		ExpiresAt: time.Now().Add(1 * time.Hour).Unix(),
	}

	encoded, err := h.encodeSession(session)
	if err != nil {
		t.Fatalf("encodeSession error: %v", err)
	}

	decoded, err := h.decodeSession(encoded)
	if err != nil {
		t.Fatalf("decodeSession error: %v", err)
	}

	if decoded.Username != session.Username {
		t.Errorf("Username = %q, want %q", decoded.Username, session.Username)
	}
	if decoded.Email != session.Email {
		t.Errorf("Email = %q, want %q", decoded.Email, session.Email)
	}
	if len(decoded.Groups) != 2 || decoded.Groups[0] != "admin" || decoded.Groups[1] != "users" {
		t.Errorf("Groups = %v, want [admin users]", decoded.Groups)
	}
}

func TestSessionDecode_ExpiredSession(t *testing.T) {
	h := newTestOIDCHandler(t)

	session := SessionData{
		Username:  "alice",
		ExpiresAt: time.Now().Add(-1 * time.Hour).Unix(),
	}

	encoded, err := h.encodeSession(session)
	if err != nil {
		t.Fatalf("encodeSession error: %v", err)
	}

	_, err = h.decodeSession(encoded)
	if err == nil {
		t.Error("expected error for expired session, got nil")
	}
}

func TestSessionDecode_InvalidSignature(t *testing.T) {
	h := newTestOIDCHandler(t)

	session := SessionData{
		Username:  "alice",
		ExpiresAt: time.Now().Add(1 * time.Hour).Unix(),
	}

	encoded, _ := h.encodeSession(session)
	tampered := encoded + "tampered"
	_, err := h.decodeSession(tampered)
	if err == nil {
		t.Error("expected error for tampered session, got nil")
	}
}

func TestSessionDecode_InvalidFormat(t *testing.T) {
	h := newTestOIDCHandler(t)

	_, err := h.decodeSession("no-dot-separator")
	if err == nil {
		t.Error("expected error for invalid format, got nil")
	}
}

func TestSessionDecode_DifferentKey(t *testing.T) {
	h1 := &OIDCHandler{sessionKey: []byte("key-one-secret-1234567890123456")}
	h2 := &OIDCHandler{sessionKey: []byte("key-two-secret-1234567890123456")}

	session := SessionData{
		Username:  "alice",
		ExpiresAt: time.Now().Add(1 * time.Hour).Unix(),
	}

	encoded, _ := h1.encodeSession(session)
	_, err := h2.decodeSession(encoded)
	if err == nil {
		t.Error("expected error when decoding with different key")
	}
}
