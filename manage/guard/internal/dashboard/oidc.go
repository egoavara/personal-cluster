package dashboard

import (
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"

	oidcpkg "github.com/egoavara/personal-cluster/manage/guard/internal/oidc"
	"go.uber.org/zap"
	"golang.org/x/oauth2"
)

const (
	sessionCookieName = "guard-session"
	sessionMaxAge     = 8 * 60 * 60 // 8 hours
)

// SessionData holds the user's session information.
type SessionData struct {
	Username  string   `json:"username"`
	Email     string   `json:"email"`
	Groups    []string `json:"groups"`
	ExpiresAt int64    `json:"exp"`
}

// OIDCHandler manages OIDC authentication flow.
type OIDCHandler struct {
	oauth2Config *oauth2.Config
	sessionKey   []byte
	secure       bool
	httpClient   *http.Client
	logger       *zap.Logger
}

// NewOIDCHandler creates a new OIDC authentication handler using discovery.
func NewOIDCHandler(issuerURL, clientID, clientSecret, redirectURL, sessionSecret string, secure bool, logger *zap.Logger) (*OIDCHandler, error) {
	httpClient := oidcpkg.InsecureHTTPClient()

	endpoints, err := oidcpkg.Discover(context.Background(), httpClient, issuerURL)
	if err != nil {
		return nil, fmt.Errorf("OIDC discovery failed: %w", err)
	}

	logger.Info("OIDC discovery completed",
		zap.String("auth_endpoint", endpoints.AuthorizationEndpoint),
		zap.String("token_endpoint", endpoints.TokenEndpoint),
	)

	oauth2Cfg := &oauth2.Config{
		ClientID:     clientID,
		ClientSecret: clientSecret,
		RedirectURL:  redirectURL,
		Endpoint:     endpoints.ToOAuth2Endpoint(),
		Scopes:       []string{"openid", "profile", "email", "groups"},
	}

	return &OIDCHandler{
		oauth2Config: oauth2Cfg,
		sessionKey:   []byte(sessionSecret),
		secure:       secure,
		httpClient:   httpClient,
		logger:       logger,
	}, nil
}

// HandleLogin redirects the user to the OIDC provider.
func (h *OIDCHandler) HandleLogin(w http.ResponseWriter, r *http.Request) {
	state := oidcpkg.GenerateState()
	http.SetCookie(w, &http.Cookie{
		Name:     "oauth-state",
		Value:    state,
		Path:     "/",
		MaxAge:   300,
		Secure:   h.secure,
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	})
	http.Redirect(w, r, h.oauth2Config.AuthCodeURL(state), http.StatusFound)
}

// HandleCallback processes the OIDC callback.
func (h *OIDCHandler) HandleCallback(w http.ResponseWriter, r *http.Request) {
	// Verify state
	stateCookie, err := r.Cookie("oauth-state")
	if err != nil || stateCookie.Value != r.URL.Query().Get("state") {
		http.Error(w, "Invalid state", http.StatusBadRequest)
		return
	}

	code := r.URL.Query().Get("code")
	if code == "" {
		http.Error(w, "Missing code", http.StatusBadRequest)
		return
	}

	// Exchange code for token
	ctx := context.WithValue(r.Context(), oauth2.HTTPClient, h.httpClient)
	token, err := h.oauth2Config.Exchange(ctx, code)
	if err != nil {
		h.logger.Error("token exchange failed", zap.Error(err))
		http.Error(w, "Authentication failed", http.StatusInternalServerError)
		return
	}

	// Extract claims from ID token using shared package
	claims, err := oidcpkg.ParseIDTokenClaims(token)
	if err != nil {
		h.logger.Error("failed to parse ID token", zap.Error(err))
		http.Error(w, "Failed to parse token", http.StatusInternalServerError)
		return
	}

	session := SessionData{
		Username:  claims.Username(),
		Email:     claims.Email(),
		Groups:    claims.Groups(),
		ExpiresAt: time.Now().Add(sessionMaxAge * time.Second).Unix(),
	}

	sessionCookie, err := h.encodeSession(session)
	if err != nil {
		http.Error(w, "Failed to create session", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     sessionCookieName,
		Value:    sessionCookie,
		Path:     "/",
		MaxAge:   sessionMaxAge,
		Secure:   h.secure,
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	})

	http.Redirect(w, r, "/", http.StatusFound)
}

// HandleLogout clears the session.
func (h *OIDCHandler) HandleLogout(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{
		Name:   sessionCookieName,
		Value:  "",
		Path:   "/",
		MaxAge: -1,
	})
	http.Redirect(w, r, "/login", http.StatusFound)
}

// GetSession extracts the session from the request cookie.
func (h *OIDCHandler) GetSession(r *http.Request) (*SessionData, error) {
	cookie, err := r.Cookie(sessionCookieName)
	if err != nil {
		return nil, fmt.Errorf("no session cookie")
	}
	return h.decodeSession(cookie.Value)
}

func (h *OIDCHandler) encodeSession(s SessionData) (string, error) {
	data, err := json.Marshal(s)
	if err != nil {
		return "", err
	}
	payload := base64.RawURLEncoding.EncodeToString(data)
	sig := h.sign(payload)
	return payload + "." + sig, nil
}

func (h *OIDCHandler) decodeSession(value string) (*SessionData, error) {
	parts := strings.SplitN(value, ".", 2)
	if len(parts) != 2 {
		return nil, fmt.Errorf("invalid session format")
	}
	expectedSig := h.sign(parts[0])
	if !hmac.Equal([]byte(parts[1]), []byte(expectedSig)) {
		return nil, fmt.Errorf("invalid session signature")
	}
	data, err := base64.RawURLEncoding.DecodeString(parts[0])
	if err != nil {
		return nil, err
	}
	var s SessionData
	if err := json.Unmarshal(data, &s); err != nil {
		return nil, err
	}
	if time.Now().Unix() > s.ExpiresAt {
		return nil, fmt.Errorf("session expired")
	}
	return &s, nil
}

func (h *OIDCHandler) sign(payload string) string {
	mac := hmac.New(sha256.New, h.sessionKey)
	mac.Write([]byte(payload))
	return base64.RawURLEncoding.EncodeToString(mac.Sum(nil))
}
