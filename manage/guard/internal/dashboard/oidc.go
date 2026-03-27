package dashboard

import (
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
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
// Fields are compatible with ext-authz session format.
type SessionData struct {
	Username  string   `json:"username"`
	Email     string   `json:"email"`
	Groups    []string `json:"groups"`
	IDToken   string   `json:"id_token,omitempty"`
	ExpiresAt int64    `json:"exp"`
}

// OIDCHandler manages OIDC authentication flow.
type OIDCHandler struct {
	oauth2Config       *oauth2.Config
	endSessionEndpoint string
	clientID           string
	externalURL        string
	sessionKey         []byte
	cookieDomain       string
	secure             bool
	httpClient         *http.Client
	logger             *zap.Logger
}

// NewOIDCHandler creates a new OIDC authentication handler using discovery.
func NewOIDCHandler(issuerURL, clientID, clientSecret, redirectURL, sessionSecret, cookieDomain, externalURL string, secure bool, logger *zap.Logger) (*OIDCHandler, error) {
	httpClient := oidcpkg.InsecureHTTPClient()

	endpoints, err := oidcpkg.Discover(context.Background(), httpClient, issuerURL)
	if err != nil {
		return nil, fmt.Errorf("OIDC discovery failed: %w", err)
	}

	logger.Info("OIDC discovery completed",
		zap.String("auth_endpoint", endpoints.AuthorizationEndpoint),
		zap.String("token_endpoint", endpoints.TokenEndpoint),
		zap.String("end_session_endpoint", endpoints.EndSessionEndpoint),
	)

	oauth2Cfg := &oauth2.Config{
		ClientID:     clientID,
		ClientSecret: clientSecret,
		RedirectURL:  redirectURL,
		Endpoint:     endpoints.ToOAuth2Endpoint(),
		Scopes:       []string{"openid", "profile", "email", "groups"},
	}

	return &OIDCHandler{
		oauth2Config:       oauth2Cfg,
		endSessionEndpoint: endpoints.EndSessionEndpoint,
		clientID:           clientID,
		externalURL:        externalURL,
		sessionKey:         []byte(sessionSecret),
		cookieDomain:       cookieDomain,
		secure:             secure,
		httpClient:         httpClient,
		logger:             logger,
	}, nil
}

// HandleLogin redirects the user to the OIDC provider.
// Supports ?rd=<url> parameter for post-login redirect (used by ext-authz).
func (h *OIDCHandler) HandleLogin(w http.ResponseWriter, r *http.Request) {
	// Store redirect destination in cookie
	if rd := r.URL.Query().Get("rd"); rd != "" {
		http.SetCookie(w, &http.Cookie{
			Name:     "guard-rd",
			Value:    rd,
			Path:     "/",
			Domain:   h.cookieDomain,
			MaxAge:   300,
			Secure:   h.secure,
			HttpOnly: true,
			SameSite: http.SameSiteLaxMode,
		})
	}

	state := oidcpkg.GenerateState()
	http.SetCookie(w, &http.Cookie{
		Name:     "guard-state",
		Value:    state,
		Path:     "/",
		Domain:   h.cookieDomain,
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
	stateCookie, err := r.Cookie("guard-state")
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

	// Extract claims from ID token
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
		IDToken:   oidcpkg.RawIDToken(token),
		ExpiresAt: time.Now().Add(sessionMaxAge * time.Second).Unix(),
	}

	sessionValue, err := h.encodeSession(session)
	if err != nil {
		http.Error(w, "Failed to create session", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     sessionCookieName,
		Value:    sessionValue,
		Path:     "/",
		Domain:   h.cookieDomain,
		MaxAge:   sessionMaxAge,
		Secure:   h.secure,
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	})

	h.logger.Info("user authenticated",
		zap.String("username", session.Username),
		zap.String("email", session.Email),
	)

	// Clear state cookie
	http.SetCookie(w, &http.Cookie{
		Name:   "guard-state",
		Value:  "",
		Path:   "/",
		Domain: h.cookieDomain,
		MaxAge: -1,
	})

	// Redirect to original URL or dashboard home
	redirectTo := "/"
	if rdCookie, err := r.Cookie("guard-rd"); err == nil && rdCookie.Value != "" {
		redirectTo = rdCookie.Value
		http.SetCookie(w, &http.Cookie{
			Name:   "guard-rd",
			Value:  "",
			Path:   "/",
			Domain: h.cookieDomain,
			MaxAge: -1,
		})
	}

	http.Redirect(w, r, redirectTo, http.StatusFound)
}

// HandleLogout clears the session and redirects to Zitadel end_session.
func (h *OIDCHandler) HandleLogout(w http.ResponseWriter, r *http.Request) {
	// Read session before clearing — need id_token for end_session
	session, _ := h.GetSession(r)

	// Clear session cookie
	http.SetCookie(w, &http.Cookie{
		Name:   sessionCookieName,
		Value:  "",
		Path:   "/",
		Domain: h.cookieDomain,
		MaxAge: -1,
	})

	rd := r.URL.Query().Get("rd")
	if rd == "" {
		rd = "/"
	}

	if h.endSessionEndpoint != "" {
		// Store rd in cookie — post_logout_redirect_uri must match exactly
		http.SetCookie(w, &http.Cookie{
			Name:     "guard-logout-rd",
			Value:    rd,
			Path:     "/",
			Domain:   h.cookieDomain,
			MaxAge:   300,
			Secure:   h.secure,
			HttpOnly: true,
			SameSite: http.SameSiteLaxMode,
		})

		postLogout := h.externalURL + "/signed_out"
		logoutURL := h.endSessionEndpoint +
			"?client_id=" + url.QueryEscape(h.clientID) +
			"&post_logout_redirect_uri=" + url.QueryEscape(postLogout)

		if session != nil && session.IDToken != "" {
			logoutURL += "&id_token_hint=" + url.QueryEscape(session.IDToken)
		}

		http.Redirect(w, r, logoutURL, http.StatusFound)
		return
	}

	http.Redirect(w, r, rd, http.StatusFound)
}

// HandleSignedOut is the post-logout landing from Zitadel.
func (h *OIDCHandler) HandleSignedOut(w http.ResponseWriter, r *http.Request) {
	rd := "/"
	if c, err := r.Cookie("guard-logout-rd"); err == nil && c.Value != "" {
		rd = c.Value
	}

	http.SetCookie(w, &http.Cookie{
		Name:   "guard-logout-rd",
		Value:  "",
		Path:   "/",
		Domain: h.cookieDomain,
		MaxAge: -1,
	})

	http.Redirect(w, r, rd, http.StatusFound)
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
