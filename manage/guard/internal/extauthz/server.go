package extauthz

import (
	"context"
	"fmt"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/egoavara/personal-cluster/manage/guard/internal/config"
	oidcpkg "github.com/egoavara/personal-cluster/manage/guard/internal/oidc"
	"github.com/egoavara/personal-cluster/manage/guard/internal/ratelimit"
	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	valkeyPkg "github.com/egoavara/personal-cluster/manage/guard/internal/valkey"
	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
	"go.uber.org/zap"
)

type Server struct {
	cfg        config.ExtAuthzConfig
	sessions   *SessionManager
	oidc       *OIDCProvider
	authz      *Authorizer
	limiter    *ratelimit.Limiter
	httpServer *http.Server
	logger     *zap.Logger
}

func Run(ctx context.Context, spiceDBCfg config.SpiceDBConfig, cfg config.ExtAuthzConfig, valkeyCfg config.ValkeyConfig, rateLimitCfg config.RateLimitConfig, logger *zap.Logger) error {
	spiceClient, err := spicedb.NewClient(spiceDBCfg.Endpoint, spiceDBCfg.PresharedKey)
	if err != nil {
		return fmt.Errorf("create spicedb client: %w", err)
	}

	callbackURL := cfg.ExternalURL + "/callback"

	oidc, err := NewOIDCProvider(ctx, cfg.OIDC.IssuerURL, cfg.OIDC.ClientID, cfg.OIDC.ClientSecret, callbackURL, logger)
	if err != nil {
		return fmt.Errorf("create OIDC provider: %w", err)
	}

	srv := &Server{
		cfg:      cfg,
		sessions: NewSessionManager(cfg.Session.Secret, cfg.Cookie.Name, cfg.Cookie.Domain, cfg.IsSecure()),
		oidc:     oidc,
		authz:    NewAuthorizer(spiceClient, spiceDBCfg.Cache, cfg.HostResourceMap, logger),
		logger:   logger,
	}

	// Initialize rate limiter if enabled
	if rateLimitCfg.Enabled {
		valkeyClient, err := valkeyPkg.NewClient(valkeyPkg.Config{
			SentinelAddrs: valkeyCfg.SentinelAddrs,
			MasterName:    valkeyCfg.MasterName,
			Password:      valkeyCfg.Password,
		}, logger)
		if err != nil {
			return fmt.Errorf("create valkey client: %w", err)
		}
		defer valkeyClient.Close()

		limiter, err := ratelimit.NewLimiter(valkeyClient, spiceClient, ratelimit.LimiterConfig{
			SlowStartDuration: rateLimitCfg.SlowStartDuration,
			L1MaxItems:        rateLimitCfg.L1MaxItems,
			L1TTL:             rateLimitCfg.L1TTL,
			L2TTL:             rateLimitCfg.L2TTL,
		}, logger)
		if err != nil {
			return fmt.Errorf("create rate limiter: %w", err)
		}
		defer limiter.Close()

		srv.limiter = limiter
		logger.Info("rate limiter enabled",
			zap.Duration("slowStart", rateLimitCfg.SlowStartDuration),
		)
	}

	mux := http.NewServeMux()

	// Login flow routes — browser hits guard.egoavara.net directly
	mux.HandleFunc("/login", srv.handleLogin)
	mux.HandleFunc("/callback", srv.handleCallback)
	mux.HandleFunc("/sign_out", srv.handleSignOut)
	mux.HandleFunc("/signed_out", srv.handleSignedOut)
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})

	// Everything else: ext_authz check endpoint (called by Envoy)
	mux.HandleFunc("/", srv.handleCheck)

	srv.httpServer = &http.Server{
		Addr:         cfg.ListenAddr,
		Handler:      otelhttp.NewHandler(mux, "ext-authz"),
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	errCh := make(chan error, 1)
	go func() {
		logger.Info("ext-authz server listening", zap.String("addr", cfg.ListenAddr))
		errCh <- srv.httpServer.ListenAndServe()
	}()

	select {
	case <-ctx.Done():
		logger.Info("shutting down ext-authz server")
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		return srv.httpServer.Shutdown(shutdownCtx)
	case err := <-errCh:
		return err
	}
}

// handleCheck implements the Envoy ext_authz check protocol.
func (s *Server) handleCheck(w http.ResponseWriter, r *http.Request) {
	// Intercept /_guard/* paths — virtual endpoints on any protected app
	// Envoy ext-authz HTTP mode forwards the original path as r.URL.Path
	uri := r.URL.Path
	if fwd := r.Header.Get("X-Forwarded-Uri"); fwd != "" {
		uri = fwd
	}
	if strings.HasPrefix(uri, "/_guard/") {
		s.handleGuardAction(w, r, uri)
		return
	}

	session, err := s.sessions.GetSession(r)
	if err != nil {
		s.logger.Debug("no valid session, redirecting to login", zap.Error(err))
		s.redirectToLogin(w, r)
		return
	}

	host := r.Header.Get("X-Forwarded-Host")
	if host == "" {
		host = r.Host
	}


	allowed, err := s.authz.CheckAccess(r.Context(), host, session.Username)
	if err != nil {
		s.logger.Error("authorization check error",
			zap.String("user", session.Username),
			zap.String("host", host),
			zap.Error(err),
		)
		renderError(w, buildOriginalURL(r))
		return
	}

	if !allowed {
		signOutURL := fmt.Sprintf("%s/sign_out?rd=%s", s.cfg.ExternalURL, url.QueryEscape(buildOriginalURL(r)))
		renderForbidden(w, host, session.Username, "kube_service:"+s.authz.hostToResourceID(host), signOutURL, buildOriginalURL(r))
		return
	}

	// Rate limit check (after authz, fail-open)
	if s.limiter != nil {
		decision, err := s.limiter.Check(r.Context(), session.Username, host, "view")
		if err != nil {
			s.logger.Error("rate limit check error", zap.Error(err))
			// Fail open — allow the request
		} else if !decision.Allowed {
			w.Header().Set("X-RateLimit-Limit", strconv.FormatInt(decision.RPM, 10))
			w.Header().Set("X-RateLimit-Remaining", "0")
			w.Header().Set("Retry-After", strconv.FormatInt(int64(time.Until(decision.ResetAt).Seconds())+1, 10))
			http.Error(w, "Rate limit exceeded", http.StatusTooManyRequests)
			return
		} else if decision.Remaining >= 0 {
			w.Header().Set("X-RateLimit-Limit", strconv.FormatInt(decision.RPM, 10))
			w.Header().Set("X-RateLimit-Remaining", strconv.FormatInt(decision.Remaining, 10))
		}
	}

	w.Header().Set("X-Auth-Request-User", session.Username)
	w.Header().Set("X-Auth-Request-Email", session.Email)
	w.WriteHeader(http.StatusOK)
}

// handleGuardAction handles /_guard/* virtual paths on protected apps.
// These paths are intercepted by ext-authz before reaching the backend.
//
// Supported actions:
//
//	/_guard/sign_out  — redirect to guard sign_out, then back to this app
//	/_guard/userinfo  — show current session info as JSON
func (s *Server) handleGuardAction(w http.ResponseWriter, r *http.Request, uri string) {
	host := r.Header.Get("X-Forwarded-Host")
	if host == "" {
		host = r.Host
	}
	proto := r.Header.Get("X-Forwarded-Proto")
	if proto == "" {
		proto = "https"
	}
	appRoot := fmt.Sprintf("%s://%s/", proto, host)

	action := strings.TrimPrefix(uri, "/_guard/")
	// Strip query string from action
	if idx := strings.Index(action, "?"); idx != -1 {
		action = action[:idx]
	}

	switch action {
	case "sign_out":
		signOutURL := fmt.Sprintf("%s/sign_out?rd=%s", s.cfg.ExternalURL, url.QueryEscape(appRoot))
		http.Redirect(w, r, signOutURL, http.StatusFound)

	case "userinfo":
		session, err := s.sessions.GetSession(r)
		if err != nil {
			http.Error(w, `{"error":"not authenticated"}`, http.StatusUnauthorized)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, `{"username":%q,"email":%q,"groups":%q}`,
			session.Username, session.Email, strings.Join(session.Groups, ","))

	default:
		http.Error(w, "unknown guard action", http.StatusNotFound)
	}
}

// handleLogin starts the OIDC authorization flow.
func (s *Server) handleLogin(w http.ResponseWriter, r *http.Request) {
	rd := r.URL.Query().Get("rd")
	if rd != "" {
		http.SetCookie(w, &http.Cookie{
			Name:     "guard-rd",
			Value:    rd,
			Path:     "/",
			Domain:   s.cfg.Cookie.Domain,
			MaxAge:   300,
			Secure:   true,
			HttpOnly: true,
			SameSite: http.SameSiteLaxMode,
		})
	}

	state := oidcpkg.GenerateState()
	http.SetCookie(w, &http.Cookie{
		Name:     "guard-state",
		Value:    state,
		Path:     "/",
		Domain:   s.cfg.Cookie.Domain,
		MaxAge:   300,
		Secure:   true,
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	})

	http.Redirect(w, r, s.oidc.AuthCodeURL(state, "login"), http.StatusFound)
}

// handleCallback processes the OIDC callback after the user authenticates.
func (s *Server) handleCallback(w http.ResponseWriter, r *http.Request) {
	stateCookie, err := r.Cookie("guard-state")
	if err != nil || stateCookie.Value != r.URL.Query().Get("state") {
		s.logger.Warn("OIDC callback: invalid state")
		http.Error(w, "Invalid state", http.StatusBadRequest)
		return
	}

	code := r.URL.Query().Get("code")
	if code == "" {
		http.Error(w, "Missing authorization code", http.StatusBadRequest)
		return
	}

	token, err := s.oidc.Exchange(r.Context(), code)
	if err != nil {
		s.logger.Error("OIDC token exchange failed", zap.Error(err))
		http.Error(w, "Authentication failed", http.StatusInternalServerError)
		return
	}

	claims, err := oidcpkg.ParseIDTokenClaims(token)
	if err != nil {
		s.logger.Error("failed to extract ID token claims", zap.Error(err))
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

	if err := s.sessions.SetSession(w, session); err != nil {
		s.logger.Error("failed to set session cookie", zap.Error(err))
		http.Error(w, "Failed to create session", http.StatusInternalServerError)
		return
	}

	s.logger.Info("user authenticated",
		zap.String("username", session.Username),
		zap.String("email", session.Email),
		zap.Strings("groups", session.Groups),
	)

	// Clear state cookie
	http.SetCookie(w, &http.Cookie{
		Name:   "guard-state",
		Value:  "",
		Path:   "/",
		Domain: s.cfg.Cookie.Domain,
		MaxAge: -1,
	})

	// Redirect to original URL or root
	redirectTo := "/"
	if rdCookie, err := r.Cookie("guard-rd"); err == nil && rdCookie.Value != "" {
		redirectTo = rdCookie.Value
		http.SetCookie(w, &http.Cookie{
			Name:   "guard-rd",
			Value:  "",
			Path:   "/",
			Domain: s.cfg.Cookie.Domain,
			MaxAge: -1,
		})
	}

	http.Redirect(w, r, redirectTo, http.StatusFound)
}

// handleSignOut clears the guard session cookie and redirects to Zitadel end_session
// to terminate the IdP session. The final redirect destination is stored in a cookie
// so that post_logout_redirect_uri stays exactly as registered (no query params).
func (s *Server) handleSignOut(w http.ResponseWriter, r *http.Request) {
	// Read session before clearing — need id_token for end_session
	session, _ := s.sessions.GetSession(r)
	s.sessions.ClearSession(w)

	rd := r.URL.Query().Get("rd")
	if rd == "" {
		rd = "/"
	}

	if s.oidc.endSessionEndpoint != "" {
		// Store rd in cookie — post_logout_redirect_uri must match exactly
		http.SetCookie(w, &http.Cookie{
			Name:     "guard-logout-rd",
			Value:    rd,
			Path:     "/",
			Domain:   s.cfg.Cookie.Domain,
			MaxAge:   300,
			Secure:   s.cfg.IsSecure(),
			HttpOnly: true,
			SameSite: http.SameSiteLaxMode,
		})

		postLogout := s.cfg.ExternalURL + "/signed_out"
		logoutURL := s.oidc.endSessionEndpoint +
			"?client_id=" + url.QueryEscape(s.cfg.OIDC.ClientID) +
			"&post_logout_redirect_uri=" + url.QueryEscape(postLogout)

		// id_token_hint allows Zitadel to skip the logout confirmation UI
		if session != nil && session.IDToken != "" {
			logoutURL += "&id_token_hint=" + url.QueryEscape(session.IDToken)
		}

		http.Redirect(w, r, logoutURL, http.StatusFound)
		return
	}

	http.Redirect(w, r, rd, http.StatusFound)
}

// handleSignedOut is the post-logout landing from Zitadel. Reads the original
// redirect destination from cookie and sends the user there.
func (s *Server) handleSignedOut(w http.ResponseWriter, r *http.Request) {
	rd := "/"
	if c, err := r.Cookie("guard-logout-rd"); err == nil && c.Value != "" {
		rd = c.Value
	}

	// Clear the cookie
	http.SetCookie(w, &http.Cookie{
		Name:   "guard-logout-rd",
		Value:  "",
		Path:   "/",
		Domain: s.cfg.Cookie.Domain,
		MaxAge: -1,
	})

	http.Redirect(w, r, rd, http.StatusFound)
}

// redirectToLogin sends a 302 redirect to guard.egoavara.net/login.
func (s *Server) redirectToLogin(w http.ResponseWriter, r *http.Request) {
	originalURL := buildOriginalURL(r)
	loginURL := fmt.Sprintf("%s/login?rd=%s", s.cfg.ExternalURL, url.QueryEscape(originalURL))

	http.Redirect(w, r, loginURL, http.StatusFound)
}

func buildOriginalURL(r *http.Request) string {
	proto := r.Header.Get("X-Forwarded-Proto")
	if proto == "" {
		proto = "https"
	}
	host := r.Header.Get("X-Forwarded-Host")
	if host == "" {
		host = r.Host
	}
	uri := r.Header.Get("X-Forwarded-Uri")
	if uri == "" {
		uri = r.URL.RequestURI()
	}
	return fmt.Sprintf("%s://%s%s", proto, host, uri)
}

