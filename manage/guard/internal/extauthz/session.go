package extauthz

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"
)

const sessionMaxAge = 8 * 60 * 60 // 8 hours in seconds

// SessionData holds the authenticated user's session information.
type SessionData struct {
	Username  string   `json:"username"`
	Email     string   `json:"email"`
	Groups    []string `json:"groups"`
	IDToken   string   `json:"id_token,omitempty"`
	ExpiresAt int64    `json:"exp"`
}

// SessionManager handles HMAC-signed cookie sessions.
type SessionManager struct {
	key          []byte
	cookieName   string
	cookieDomain string
	secure       bool
}

// NewSessionManager creates a new session manager with the given HMAC key.
func NewSessionManager(secret, cookieName, cookieDomain string, secure bool) *SessionManager {
	return &SessionManager{
		key:          []byte(secret),
		cookieName:   cookieName,
		cookieDomain: cookieDomain,
		secure:       secure,
	}
}

// SetSession encodes session data into an HMAC-signed cookie and sets it on the response.
func (m *SessionManager) SetSession(w http.ResponseWriter, s SessionData) error {
	encoded, err := m.encode(s)
	if err != nil {
		return fmt.Errorf("encode session: %w", err)
	}
	http.SetCookie(w, &http.Cookie{
		Name:     m.cookieName,
		Value:    encoded,
		Path:     "/",
		Domain:   m.cookieDomain,
		MaxAge:   sessionMaxAge,
		Secure:   m.secure,
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	})
	return nil
}

// GetSession extracts and validates the session from the request cookie.
func (m *SessionManager) GetSession(r *http.Request) (*SessionData, error) {
	cookie, err := r.Cookie(m.cookieName)
	if err != nil {
		return nil, fmt.Errorf("no session cookie: %w", err)
	}
	return m.decode(cookie.Value)
}

// ClearSession sets an expired cookie to remove the session.
func (m *SessionManager) ClearSession(w http.ResponseWriter) {
	http.SetCookie(w, &http.Cookie{
		Name:     m.cookieName,
		Value:    "",
		Path:     "/",
		Domain:   m.cookieDomain,
		MaxAge:   -1,
		Secure:   m.secure,
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	})
}

func (m *SessionManager) encode(s SessionData) (string, error) {
	data, err := json.Marshal(s)
	if err != nil {
		return "", err
	}
	payload := base64.RawURLEncoding.EncodeToString(data)
	sig := m.sign(payload)
	return payload + "." + sig, nil
}

func (m *SessionManager) decode(value string) (*SessionData, error) {
	parts := strings.SplitN(value, ".", 2)
	if len(parts) != 2 {
		return nil, fmt.Errorf("invalid session format")
	}
	expectedSig := m.sign(parts[0])
	if !hmac.Equal([]byte(parts[1]), []byte(expectedSig)) {
		return nil, fmt.Errorf("invalid session signature")
	}
	data, err := base64.RawURLEncoding.DecodeString(parts[0])
	if err != nil {
		return nil, fmt.Errorf("decode payload: %w", err)
	}
	var s SessionData
	if err := json.Unmarshal(data, &s); err != nil {
		return nil, fmt.Errorf("unmarshal session: %w", err)
	}
	if time.Now().Unix() > s.ExpiresAt {
		return nil, fmt.Errorf("session expired")
	}
	return &s, nil
}

func (m *SessionManager) sign(payload string) string {
	mac := hmac.New(sha256.New, m.key)
	mac.Write([]byte(payload))
	return base64.RawURLEncoding.EncodeToString(mac.Sum(nil))
}
