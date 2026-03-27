package dashboard

import (
	"context"
	"embed"
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"time"

	"github.com/egoavara/personal-cluster/manage/vender/internal/adapter"
	"github.com/egoavara/personal-cluster/manage/vender/internal/config"
	spicedbpkg "github.com/egoavara/personal-cluster/manage/vender/internal/spicedb"
	"github.com/egoavara/personal-cluster/manage/vender/internal/store"
	"go.uber.org/zap"
)

//go:embed templates/*.html
var templateFS embed.FS

type Server struct {
	cfg      *config.Config
	spice    *spicedbpkg.Client
	adapters map[string]adapter.Adapter
	store    *store.Store
	tmpl     *template.Template
	logger   *zap.Logger
}

func Run(ctx context.Context, cfg *config.Config, adapters map[string]adapter.Adapter, credStore *store.Store, logger *zap.Logger) error {
	spice, err := spicedbpkg.NewClient(cfg.SpiceDB.Endpoint, cfg.SpiceDB.PresharedKey)
	if err != nil {
		return fmt.Errorf("create spicedb client: %w", err)
	}

	tmpl, err := template.New("").ParseFS(templateFS, "templates/*.html")
	if err != nil {
		return fmt.Errorf("parse templates: %w", err)
	}

	srv := &Server{
		cfg:      cfg,
		spice:    spice,
		adapters: adapters,
		store:    credStore,
		tmpl:     tmpl,
		logger:   logger,
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/", srv.handleHome)
	mux.HandleFunc("/templates", srv.handleTemplates)
	mux.HandleFunc("/credentials", srv.handleCredentials)
	mux.HandleFunc("/credentials/issue", srv.handleIssue)
	mux.HandleFunc("/credentials/revoke", srv.handleRevoke)
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})

	httpServer := &http.Server{
		Addr:         cfg.ListenAddr,
		Handler:      mux,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	errCh := make(chan error, 1)
	go func() {
		logger.Info("vender server listening", zap.String("addr", cfg.ListenAddr))
		errCh <- httpServer.ListenAndServe()
	}()

	select {
	case <-ctx.Done():
		logger.Info("shutting down vender server")
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		return httpServer.Shutdown(shutdownCtx)
	case err := <-errCh:
		return err
	}
}

// getUsername extracts the authenticated username from the X-Auth-Request-User
// header set by guard ext-authz.
func getUsername(r *http.Request) string {
	return r.Header.Get("X-Auth-Request-User")
}

func (s *Server) handleHome(w http.ResponseWriter, r *http.Request) {
	username := getUsername(r)
	if username == "" {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	// Get all template IDs
	templateIDs := make([]string, len(s.cfg.Templates))
	for i, t := range s.cfg.Templates {
		templateIDs[i] = t.ID
	}

	// Filter by SpiceDB permissions
	permitted, err := s.spice.ListPermittedTemplates(r.Context(), username, templateIDs)
	if err != nil {
		s.logger.Error("list permitted templates", zap.Error(err))
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	permittedSet := make(map[string]bool)
	for _, id := range permitted {
		permittedSet[id] = true
	}

	var visibleTemplates []config.Template
	for _, t := range s.cfg.Templates {
		if permittedSet[t.ID] {
			visibleTemplates = append(visibleTemplates, t)
		}
	}

	data := map[string]any{
		"Username":  username,
		"Templates": visibleTemplates,
	}

	if err := s.tmpl.ExecuteTemplate(w, "home.html", data); err != nil {
		s.logger.Error("render home", zap.Error(err))
	}
}

func (s *Server) handleTemplates(w http.ResponseWriter, r *http.Request) {
	username := getUsername(r)
	if username == "" {
		http.Error(w, `{"error":"unauthorized"}`, http.StatusUnauthorized)
		return
	}

	templateIDs := make([]string, len(s.cfg.Templates))
	for i, t := range s.cfg.Templates {
		templateIDs[i] = t.ID
	}

	permitted, err := s.spice.ListPermittedTemplates(r.Context(), username, templateIDs)
	if err != nil {
		http.Error(w, `{"error":"internal"}`, http.StatusInternalServerError)
		return
	}

	permittedSet := make(map[string]bool)
	for _, id := range permitted {
		permittedSet[id] = true
	}

	var result []config.Template
	for _, t := range s.cfg.Templates {
		if permittedSet[t.ID] {
			result = append(result, t)
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(result)
}

func (s *Server) handleCredentials(w http.ResponseWriter, r *http.Request) {
	username := getUsername(r)
	if username == "" {
		http.Error(w, `{"error":"unauthorized"}`, http.StatusUnauthorized)
		return
	}

	creds, err := s.store.ListByUser(r.Context(), username)
	if err != nil {
		s.logger.Error("list credentials", zap.Error(err))
		http.Error(w, `{"error":"internal"}`, http.StatusInternalServerError)
		return
	}
	if creds == nil {
		creds = []*adapter.Credential{}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(creds)
}

func (s *Server) handleIssue(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	username := getUsername(r)
	if username == "" {
		http.Error(w, `{"error":"unauthorized"}`, http.StatusUnauthorized)
		return
	}

	var req struct {
		TemplateID string `json:"templateId"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, `{"error":"invalid request"}`, http.StatusBadRequest)
		return
	}

	// Find template
	var tmpl *config.Template
	for _, t := range s.cfg.Templates {
		if t.ID == req.TemplateID {
			tmpl = &t
			break
		}
	}
	if tmpl == nil {
		http.Error(w, `{"error":"template not found"}`, http.StatusNotFound)
		return
	}

	// Check SpiceDB permission
	ok, err := s.spice.CheckTemplatePermission(r.Context(), tmpl.ID, username)
	if err != nil {
		s.logger.Error("check template permission", zap.Error(err))
		http.Error(w, `{"error":"internal"}`, http.StatusInternalServerError)
		return
	}
	if !ok {
		http.Error(w, `{"error":"forbidden"}`, http.StatusForbidden)
		return
	}

	// Find adapter
	a, exists := s.adapters[tmpl.Service]
	if !exists {
		http.Error(w, `{"error":"service adapter not available"}`, http.StatusServiceUnavailable)
		return
	}

	// Issue credential
	cred, err := a.Issue(r.Context(), username, tmpl.Params, tmpl.TTL)
	if err != nil {
		s.logger.Error("issue credential",
			zap.String("template", tmpl.ID),
			zap.String("user", username),
			zap.Error(err),
		)
		http.Error(w, `{"error":"failed to issue credential"}`, http.StatusInternalServerError)
		return
	}

	cred.Template = tmpl.ID
	cred.Service = tmpl.Service

	// Persist to store (without secrets — secrets are one-time display only)
	storeCred := *cred
	storeCred.Secrets = nil
	if err := s.store.Save(r.Context(), &storeCred); err != nil {
		s.logger.Error("save credential to store", zap.Error(err))
	}

	// Return full credential including secrets (one-time)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(cred)
}

func (s *Server) handleRevoke(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	username := getUsername(r)
	if username == "" {
		http.Error(w, `{"error":"unauthorized"}`, http.StatusUnauthorized)
		return
	}

	var req struct {
		CredentialID string `json:"credentialId"`
		Service      string `json:"service"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, `{"error":"invalid request"}`, http.StatusBadRequest)
		return
	}

	a, exists := s.adapters[req.Service]
	if !exists {
		http.Error(w, `{"error":"service adapter not available"}`, http.StatusServiceUnavailable)
		return
	}

	if err := a.Revoke(r.Context(), &adapter.Credential{ID: req.CredentialID, Username: username}); err != nil {
		s.logger.Error("revoke credential from service", zap.Error(err))
		http.Error(w, `{"error":"failed to revoke"}`, http.StatusInternalServerError)
		return
	}

	if err := s.store.MarkRevoked(r.Context(), req.CredentialID, username); err != nil {
		s.logger.Warn("mark revoked in store failed (credential already removed from service)", zap.Error(err))
	}

	w.WriteHeader(http.StatusNoContent)
}
