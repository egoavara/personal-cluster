package dashboard

import (
	"context"
	"embed"
	"fmt"
	"html/template"
	"net/http"
	"time"

	"github.com/egoavara/personal-cluster/manage/guard/internal/config"
	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
	"go.uber.org/zap"
)

//go:embed templates/*.html templates/policy/*.html
var templateFS embed.FS

// Templates holds per-page template sets to avoid "content" block name collisions.
type Templates struct {
	pages map[string]*template.Template
}

// parsePageTemplate parses layout.html together with a single page template.
func parsePageTemplate(page string) (*template.Template, error) {
	return template.New("").ParseFS(templateFS, "templates/layout.html", page)
}

func loadTemplates() (*Templates, error) {
	pages := map[string]string{
		"home":          "templates/home.html",
		"check":         "templates/check.html",
		"schema":        "templates/schema.html",
		"login":         "templates/login.html",
		"policy_list":   "templates/policy/list.html",
		"policy_create": "templates/policy/create.html",
	}

	ts := &Templates{pages: make(map[string]*template.Template, len(pages))}
	for name, path := range pages {
		t, err := parsePageTemplate(path)
		if err != nil {
			return nil, fmt.Errorf("failed to parse template %s: %w", name, err)
		}
		ts.pages[name] = t
	}
	return ts, nil
}

func (ts *Templates) Render(w http.ResponseWriter, name string, data interface{}) error {
	t, ok := ts.pages[name]
	if !ok {
		return fmt.Errorf("template %q not found", name)
	}
	return t.ExecuteTemplate(w, name, data)
}

type Server struct {
	httpServer *http.Server
	logger     *zap.Logger
}

func NewServer(spice *spicedb.Client, cfg config.DashboardConfig, logger *zap.Logger) (*Server, error) {
	// Load templates (each page parsed separately with layout)
	tmpl, err := loadTemplates()
	if err != nil {
		return nil, fmt.Errorf("failed to load templates: %w", err)
	}

	// Load dashboard routes
	routes, err := LoadRoutes(cfg.RoutesFile)
	if err != nil {
		logger.Warn("failed to load dashboard routes, relay disabled", zap.Error(err))
		routes = &RoutesConfig{}
	}

	// OIDC handler
	redirectURL := cfg.ExternalURL + "/callback"
	oidc, err := NewOIDCHandler(cfg.OIDC.IssuerURL, cfg.OIDC.ClientID, cfg.OIDC.ClientSecret, redirectURL, cfg.Session.Secret, cfg.Cookie.Domain, cfg.ExternalURL, cfg.IsSecure(), logger)
	if err != nil {
		return nil, fmt.Errorf("failed to create OIDC handler: %w", err)
	}

	// Policy handler
	policyHandler := NewPolicyHandler(spice, tmpl, logger)

	// Build router
	mux := http.NewServeMux()

	// Public routes (no auth)
	mux.HandleFunc("/login", oidc.HandleLogin)
	mux.HandleFunc("/callback", oidc.HandleCallback)
	mux.HandleFunc("/logout", oidc.HandleLogout)
	mux.HandleFunc("/sign_out", oidc.HandleLogout)
	mux.HandleFunc("/signed_out", oidc.HandleSignedOut)
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	// Authenticated routes
	authMux := http.NewServeMux()

	// Home
	authMux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		session := sessionFromContext(r.Context())
		stats := fetchOverviewStats(r.Context(), spice, logger)
		data := map[string]interface{}{
			"Session":    session,
			"Dashboards": routes.Dashboards,
			"Stats":      stats,
		}
		if err := tmpl.Render(w, "home", data); err != nil {
			logger.Error("template error", zap.Error(err))
		}
	})

	// Schema viewer
	authMux.HandleFunc("/schema", func(w http.ResponseWriter, r *http.Request) {
		schema, err := spice.ReadSchema(r.Context())
		if err != nil {
			logger.Error("failed to read schema", zap.Error(err))
			schema = "Error loading schema: " + err.Error()
		}
		data := map[string]interface{}{
			"Session": sessionFromContext(r.Context()),
			"Schema":  schema,
		}
		if err := tmpl.Render(w, "schema", data); err != nil {
			logger.Error("template error", zap.Error(err))
		}
	})

	// Policy management
	authMux.HandleFunc("/policy/", policyHandler.HandleList)
	authMux.HandleFunc("/policy/create", policyHandler.HandleCreate)
	authMux.HandleFunc("/policy/delete", policyHandler.HandleDelete)
	authMux.HandleFunc("/check", policyHandler.HandleCheck)

	// Dashboard relay routes
	for _, route := range routes.Dashboards {
		relay, err := NewRelayHandler(route, logger)
		if err != nil {
			logger.Error("failed to create relay handler", zap.String("dashboard", route.Name), zap.Error(err))
			continue
		}
		// Wrap relay with SpiceDB authz middleware
		handler := SpiceDBAuthzMiddleware(spice, route.SpiceDBResource, "view", logger, relay)
		authMux.Handle(route.Path+"/", handler)
	}

	// Wrap authenticated routes with auth + SpiceDB authz middleware
	// Requires dashboard:guard view permission in SpiceDB
	mux.Handle("/", DashboardAuthzMiddleware(oidc, spice, logger, authMux))

	srv := &http.Server{
		Addr:         cfg.ListenAddr,
		Handler:      otelhttp.NewHandler(mux, "dashboard"),
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	return &Server{httpServer: srv, logger: logger}, nil
}

func (s *Server) Run(ctx context.Context) error {
	errCh := make(chan error, 1)
	go func() {
		s.logger.Info("dashboard server starting", zap.String("addr", s.httpServer.Addr))
		errCh <- s.httpServer.ListenAndServe()
	}()

	select {
	case <-ctx.Done():
		s.logger.Info("shutting down dashboard server")
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		return s.httpServer.Shutdown(shutdownCtx)
	case err := <-errCh:
		return err
	}
}
