package dashboard

import (
	"context"
	"embed"
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"regexp"
	"strings"
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

	// Pages
	mux.HandleFunc("/", srv.handleHome)

	// User APIs
	mux.HandleFunc("/api/templates", srv.handleAPITemplates)
	mux.HandleFunc("/api/credentials", srv.handleCredentials)
	mux.HandleFunc("/api/credentials/issue", srv.handleIssue)
	mux.HandleFunc("/api/credentials/revoke", srv.handleRevoke)

	// Admin APIs
	mux.HandleFunc("/api/admin/templates", srv.handleAdminTemplates)
	mux.HandleFunc("/api/admin/templates/", srv.handleAdminTemplateByID)
	mux.HandleFunc("/api/permissions", srv.handlePermissions)
	mux.HandleFunc("/api/permissions/", srv.handlePermissionByID)
	mux.HandleFunc("/api/credentials/history", srv.handleHistory)

	// Legacy routes (backward compat)
	mux.HandleFunc("/templates", srv.handleAPITemplates)
	mux.HandleFunc("/credentials", srv.handleCredentials)
	mux.HandleFunc("/credentials/issue", srv.handleIssue)
	mux.HandleFunc("/credentials/revoke", srv.handleRevoke)

	// Health
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

// jsonError writes a JSON error response.
func jsonError(w http.ResponseWriter, msg string, code int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	json.NewEncoder(w).Encode(map[string]string{"error": msg})
}

// requireAuth returns username or writes error. Returns "" if unauthorized.
func requireAuth(w http.ResponseWriter, r *http.Request) string {
	u := getUsername(r)
	if u == "" {
		jsonError(w, "unauthorized", http.StatusUnauthorized)
	}
	return u
}

// getTemplatesForUser returns templates from DB filtered by SpiceDB permissions.
func (s *Server) getTemplatesForUser(ctx context.Context, username string) ([]store.DBTemplate, error) {
	all, err := s.store.ListTemplates(ctx)
	if err != nil {
		return nil, err
	}

	ids := make([]string, len(all))
	for i, t := range all {
		ids[i] = t.ID
	}

	permitted, err := s.spice.ListPermittedTemplates(ctx, username, ids)
	if err != nil {
		return nil, err
	}

	permSet := make(map[string]bool, len(permitted))
	for _, id := range permitted {
		permSet[id] = true
	}

	var result []store.DBTemplate
	for _, t := range all {
		if permSet[t.ID] {
			result = append(result, t)
		}
	}
	return result, nil
}

// --- Pages ---

func (s *Server) handleHome(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" && r.URL.Path != "/admin" {
		http.NotFound(w, r)
		return
	}

	username := getUsername(r)
	if username == "" {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	isAdmin, _ := s.spice.CheckAdmin(r.Context(), username)

	data := map[string]any{
		"Username": username,
		"IsAdmin":  isAdmin,
	}

	if err := s.tmpl.ExecuteTemplate(w, "home.html", data); err != nil {
		s.logger.Error("render home", zap.Error(err))
	}
}

// --- User APIs ---

func (s *Server) handleAPITemplates(w http.ResponseWriter, r *http.Request) {
	username := requireAuth(w, r)
	if username == "" {
		return
	}

	templates, err := s.getTemplatesForUser(r.Context(), username)
	if err != nil {
		s.logger.Error("get templates for user", zap.Error(err))
		jsonError(w, "internal", http.StatusInternalServerError)
		return
	}
	if templates == nil {
		templates = []store.DBTemplate{}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(templates)
}

func (s *Server) handleCredentials(w http.ResponseWriter, r *http.Request) {
	username := requireAuth(w, r)
	if username == "" {
		return
	}

	creds, err := s.store.ListByUser(r.Context(), username)
	if err != nil {
		s.logger.Error("list credentials", zap.Error(err))
		jsonError(w, "internal", http.StatusInternalServerError)
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

	username := requireAuth(w, r)
	if username == "" {
		return
	}

	var req struct {
		TemplateID string `json:"templateId"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		jsonError(w, "invalid request", http.StatusBadRequest)
		return
	}

	// Find template from DB
	tmpl, err := s.store.GetTemplate(r.Context(), req.TemplateID)
	if err != nil {
		jsonError(w, "template not found", http.StatusNotFound)
		return
	}

	// Check SpiceDB permission
	ok, err := s.spice.CheckTemplatePermission(r.Context(), tmpl.ID, username)
	if err != nil {
		s.logger.Error("check template permission", zap.Error(err))
		jsonError(w, "internal", http.StatusInternalServerError)
		return
	}
	if !ok {
		jsonError(w, "forbidden", http.StatusForbidden)
		return
	}

	// Find adapter
	a, exists := s.adapters[tmpl.Service]
	if !exists {
		jsonError(w, "service adapter not available", http.StatusServiceUnavailable)
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
		jsonError(w, "failed to issue credential", http.StatusInternalServerError)
		return
	}

	cred.Template = tmpl.ID
	cred.Service = tmpl.Service

	// Persist to store (without secrets)
	storeCred := *cred
	storeCred.Secrets = nil
	if err := s.store.Save(r.Context(), &storeCred); err != nil {
		s.logger.Error("save credential to store", zap.Error(err))
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(cred)
}

func (s *Server) handleRevoke(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	username := requireAuth(w, r)
	if username == "" {
		return
	}

	var req struct {
		CredentialID string `json:"credentialId"`
		Service      string `json:"service"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		jsonError(w, "invalid request", http.StatusBadRequest)
		return
	}

	a, exists := s.adapters[req.Service]
	if !exists {
		jsonError(w, "service adapter not available", http.StatusServiceUnavailable)
		return
	}

	if err := a.Revoke(r.Context(), &adapter.Credential{ID: req.CredentialID, Username: username}); err != nil {
		s.logger.Error("revoke credential from service", zap.Error(err))
		jsonError(w, "failed to revoke", http.StatusInternalServerError)
		return
	}

	if err := s.store.MarkRevoked(r.Context(), req.CredentialID, username); err != nil {
		s.logger.Warn("mark revoked in store failed", zap.Error(err))
	}

	w.WriteHeader(http.StatusNoContent)
}

// --- Admin APIs ---

// requireAdmin checks SpiceDB admin permission and returns username.
func (s *Server) requireAdmin(w http.ResponseWriter, r *http.Request) string {
	username := requireAuth(w, r)
	if username == "" {
		return ""
	}
	isAdmin, _ := s.spice.CheckAdmin(r.Context(), username)
	if !isAdmin {
		jsonError(w, "forbidden", http.StatusForbidden)
		return ""
	}
	return username
}

var validTemplateID = regexp.MustCompile(`^[a-z0-9][a-z0-9\-]{0,62}$`)

func (s *Server) handleAdminTemplates(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		// List all templates (admin sees all, no SpiceDB filter)
		if s.requireAdmin(w, r) == "" {
			return
		}
		templates, err := s.store.ListTemplates(r.Context())
		if err != nil {
			s.logger.Error("list templates", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}
		if templates == nil {
			templates = []store.DBTemplate{}
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(templates)

	case http.MethodPost:
		// Create template
		if s.requireAdmin(w, r) == "" {
			return
		}
		var t store.DBTemplate
		if err := json.NewDecoder(r.Body).Decode(&t); err != nil {
			jsonError(w, "invalid request", http.StatusBadRequest)
			return
		}
		if !validTemplateID.MatchString(t.ID) {
			jsonError(w, "invalid template id (lowercase alphanumeric and hyphens only)", http.StatusBadRequest)
			return
		}
		if t.Name == "" || t.Service == "" || t.TTL <= 0 {
			jsonError(w, "name, service, and ttl are required", http.StatusBadRequest)
			return
		}
		if t.Params == nil {
			t.Params = map[string]string{}
		}
		if err := s.store.CreateTemplate(r.Context(), &t); err != nil {
			if strings.Contains(err.Error(), "duplicate key") {
				jsonError(w, "template id already exists", http.StatusConflict)
				return
			}
			s.logger.Error("create template", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(t)

	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
	}
}

func (s *Server) handleAdminTemplateByID(w http.ResponseWriter, r *http.Request) {
	if s.requireAdmin(w, r) == "" {
		return
	}

	// Extract ID from /api/admin/templates/{id}
	id := strings.TrimPrefix(r.URL.Path, "/api/admin/templates/")
	if id == "" {
		jsonError(w, "template id required", http.StatusBadRequest)
		return
	}

	switch r.Method {
	case http.MethodPut:
		var t store.DBTemplate
		if err := json.NewDecoder(r.Body).Decode(&t); err != nil {
			jsonError(w, "invalid request", http.StatusBadRequest)
			return
		}
		t.ID = id
		if t.Name == "" || t.Service == "" || t.TTL <= 0 {
			jsonError(w, "name, service, and ttl are required", http.StatusBadRequest)
			return
		}
		if t.Params == nil {
			t.Params = map[string]string{}
		}
		if err := s.store.UpdateTemplate(r.Context(), &t); err != nil {
			if strings.Contains(err.Error(), "not found") {
				jsonError(w, "template not found", http.StatusNotFound)
				return
			}
			s.logger.Error("update template", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(t)

	case http.MethodDelete:
		if err := s.store.DeleteTemplate(r.Context(), id); err != nil {
			if strings.Contains(err.Error(), "not found") {
				jsonError(w, "template not found", http.StatusNotFound)
				return
			}
			s.logger.Error("delete template", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusNoContent)

	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
	}
}

func (s *Server) handlePermissions(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		if s.requireAdmin(w, r) == "" {
			return
		}
		rels, err := s.spice.ListRelationships(r.Context())
		if err != nil {
			s.logger.Error("list relationships", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}
		if rels == nil {
			rels = []spicedbpkg.Relationship{}
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(rels)

	case http.MethodPost:
		if s.requireAdmin(w, r) == "" {
			return
		}
		var req struct {
			TemplateID string `json:"templateId"`
			UserID     string `json:"userId"`
		}
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			jsonError(w, "invalid request", http.StatusBadRequest)
			return
		}
		if req.TemplateID == "" || req.UserID == "" {
			jsonError(w, "templateId and userId are required", http.StatusBadRequest)
			return
		}
		if err := s.spice.WriteRelationship(r.Context(), req.TemplateID, req.UserID, "user"); err != nil {
			s.logger.Error("write relationship", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusCreated)

	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
	}
}

func (s *Server) handlePermissionByID(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if s.requireAdmin(w, r) == "" {
		return
	}

	// /api/permissions/{templateId}/{userId}
	path := strings.TrimPrefix(r.URL.Path, "/api/permissions/")
	parts := strings.SplitN(path, "/", 2)
	if len(parts) != 2 || parts[0] == "" || parts[1] == "" {
		jsonError(w, "path must be /api/permissions/{templateId}/{userId}", http.StatusBadRequest)
		return
	}

	if err := s.spice.DeleteRelationship(r.Context(), parts[0], parts[1], "user"); err != nil {
		s.logger.Error("delete relationship", zap.Error(err))
		jsonError(w, "internal", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func (s *Server) handleHistory(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if s.requireAdmin(w, r) == "" {
		return
	}

	history, err := s.store.ListHistory(r.Context(), 200)
	if err != nil {
		s.logger.Error("list history", zap.Error(err))
		jsonError(w, "internal", http.StatusInternalServerError)
		return
	}
	if history == nil {
		history = []store.CredentialHistory{}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(history)
}
