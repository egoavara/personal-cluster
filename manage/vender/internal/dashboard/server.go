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
	"github.com/egoavara/personal-cluster/manage/vender/internal/pat"
	spicedbpkg "github.com/egoavara/personal-cluster/manage/vender/internal/spicedb"
	"github.com/egoavara/personal-cluster/manage/vender/internal/store"
	"github.com/google/uuid"
	"go.uber.org/zap"
)

//go:embed templates/*.html
var templateFS embed.FS

type Server struct {
	cfg       *config.Config
	spice     *spicedbpkg.Client
	adapters  map[string]adapter.Adapter
	store     *store.Store
	patIssuer *pat.Issuer
	tmpl      *template.Template
	logger    *zap.Logger
}

func Run(ctx context.Context, cfg *config.Config, adapters map[string]adapter.Adapter, credStore *store.Store, patIssuer *pat.Issuer, logger *zap.Logger) error {
	spice, err := spicedbpkg.NewClient(cfg.SpiceDB.Endpoint, cfg.SpiceDB.PresharedKey)
	if err != nil {
		return fmt.Errorf("create spicedb client: %w", err)
	}

	tmpl, err := template.New("").ParseFS(templateFS, "templates/*.html")
	if err != nil {
		return fmt.Errorf("parse templates: %w", err)
	}

	srv := &Server{
		cfg:       cfg,
		spice:     spice,
		adapters:  adapters,
		store:     credStore,
		patIssuer: patIssuer,
		tmpl:      tmpl,
		logger:    logger,
	}

	mux := http.NewServeMux()

	// Pages
	mux.HandleFunc("/", srv.handleHome)

	// User APIs
	mux.HandleFunc("/api/templates", srv.handleAPITemplates)
	mux.HandleFunc("/api/credentials", srv.handleCredentials)
	mux.HandleFunc("/api/credentials/issue", srv.handleIssue)
	mux.HandleFunc("/api/credentials/revoke", srv.handleRevoke)
	mux.HandleFunc("/api/pats", srv.handlePATs)
	mux.HandleFunc("/api/pats/revoke", srv.handlePATRevoke)

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
	mux.HandleFunc("/pats", srv.handlePATs)
	mux.HandleFunc("/pats/revoke", srv.handlePATRevoke)

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

const patPrefix = "vdpat_"

// getPATOwner returns the PAT owner username if the request came from a PAT.
// Guard always sets X-Auth-Request-Pat-Owner (empty for non-PAT requests) to
// prevent header injection. As defense-in-depth, Vender also validates that
// the owner header is non-empty only when the username has the PAT prefix.
func getPATOwner(r *http.Request) string {
	owner := r.Header.Get("X-Auth-Request-Pat-Owner")
	if owner == "" {
		return ""
	}
	// Defense-in-depth: if Pat-Owner is set, username MUST have PAT prefix.
	// This blocks injection even if Envoy misconfiguration lets client headers through.
	username := r.Header.Get("X-Auth-Request-User")
	if !strings.HasPrefix(username, patPrefix) {
		return ""
	}
	return owner
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

// checkPATTemplateAccess performs the dual check for PAT template access:
// 1. pat_filter: the PAT is filtered to this template
// 2. owner's use: the owner still has use permission
// The machineUsername is used to look up the PAT ID for the SpiceDB pat_filter check.
func (s *Server) checkPATTemplateAccess(ctx context.Context, templateID, machineUsername, owner string) (bool, error) {
	// SpiceDB uses machineUsername as pat object ID (same as Guard)
	// Check 1: PAT is filtered to this template
	filtered, err := s.spice.CheckPATTemplateFilter(ctx, templateID, machineUsername)
	if err != nil {
		return false, err
	}
	if !filtered {
		return false, nil
	}

	// Check 2: Owner still has use permission
	ownerAllowed, err := s.spice.CheckTemplatePermission(ctx, templateID, owner)
	if err != nil {
		return false, err
	}
	return ownerAllowed, nil
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

	patOwner := getPATOwner(r)

	if patOwner != "" {
		// PAT request: intersect pat_filter with owner's use permission
		all, err := s.store.ListTemplates(r.Context())
		if err != nil {
			s.logger.Error("list templates for PAT", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}

		var result []store.DBTemplate
		for _, t := range all {
			allowed, err := s.checkPATTemplateAccess(r.Context(), t.ID, username, patOwner)
			if err != nil {
				s.logger.Error("check pat template access", zap.Error(err))
				continue
			}
			if allowed {
				result = append(result, t)
			}
		}
		if result == nil {
			result = []store.DBTemplate{}
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(result)
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

	// Check SpiceDB permission — dual check for PAT requests
	patOwner := getPATOwner(r)
	if patOwner != "" {
		// PAT request: check both pat_filter and owner's use permission
		allowed, err := s.checkPATTemplateAccess(r.Context(), tmpl.ID, username, patOwner)
		if err != nil {
			s.logger.Error("check pat template access", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}
		if !allowed {
			jsonError(w, "forbidden", http.StatusForbidden)
			return
		}
		// Use owner as the credential requester so the credential is tracked under the owner
		username = patOwner
	} else {
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

// --- PAT APIs ---

func (s *Server) handlePATs(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		s.handlePATList(w, r)
	case http.MethodPost:
		s.handlePATCreate(w, r)
	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
	}
}

func (s *Server) handlePATList(w http.ResponseWriter, r *http.Request) {
	username := requireAuth(w, r)
	if username == "" {
		return
	}

	pats, err := s.store.ListPATsByOwner(r.Context(), username)
	if err != nil {
		s.logger.Error("list pats", zap.Error(err))
		jsonError(w, "internal", http.StatusInternalServerError)
		return
	}
	if pats == nil {
		pats = []*store.PAT{}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(pats)
}

func (s *Server) handlePATCreate(w http.ResponseWriter, r *http.Request) {
	username := requireAuth(w, r)
	if username == "" {
		return
	}

	// PAT creation requires direct user auth (not PAT-over-PAT)
	if getPATOwner(r) != "" {
		jsonError(w, "cannot create PAT using another PAT", http.StatusForbidden)
		return
	}

	if s.patIssuer == nil {
		jsonError(w, "PAT feature not configured", http.StatusServiceUnavailable)
		return
	}

	var req struct {
		Name        string   `json:"name"`
		TemplateIDs []string `json:"templateIds"`
		ExpiresIn   string   `json:"expiresIn"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		jsonError(w, "invalid request", http.StatusBadRequest)
		return
	}

	if req.Name == "" || len(req.TemplateIDs) == 0 || req.ExpiresIn == "" {
		jsonError(w, "name, templateIds, and expiresIn are required", http.StatusBadRequest)
		return
	}

	ttl, err := time.ParseDuration(req.ExpiresIn)
	if err != nil || ttl <= 0 {
		jsonError(w, "invalid expiresIn duration", http.StatusBadRequest)
		return
	}
	if ttl > s.cfg.PAT.MaxTTL {
		jsonError(w, fmt.Sprintf("expiresIn exceeds maximum of %s", s.cfg.PAT.MaxTTL), http.StatusBadRequest)
		return
	}

	// Check PAT limit
	count, err := s.store.CountActivePATsByOwner(r.Context(), username)
	if err != nil {
		s.logger.Error("count pats", zap.Error(err))
		jsonError(w, "internal", http.StatusInternalServerError)
		return
	}
	if count >= s.cfg.PAT.MaxPerUser {
		jsonError(w, fmt.Sprintf("maximum %d active PATs reached", s.cfg.PAT.MaxPerUser), http.StatusConflict)
		return
	}

	// Validate: user can only select templates they have access to
	// Get all template IDs from DB to validate the requested IDs exist
	allTemplates, err := s.store.ListTemplates(r.Context())
	if err != nil {
		s.logger.Error("list templates for PAT validation", zap.Error(err))
		jsonError(w, "internal", http.StatusInternalServerError)
		return
	}
	templateSet := make(map[string]bool, len(allTemplates))
	for _, t := range allTemplates {
		templateSet[t.ID] = true
	}

	for _, tid := range req.TemplateIDs {
		if !templateSet[tid] {
			jsonError(w, fmt.Sprintf("template %s not found", tid), http.StatusBadRequest)
			return
		}
		ok, err := s.spice.CheckTemplatePermission(r.Context(), tid, username)
		if err != nil {
			s.logger.Error("check template permission for PAT", zap.Error(err))
			jsonError(w, "internal", http.StatusInternalServerError)
			return
		}
		if !ok {
			jsonError(w, fmt.Sprintf("no permission on template %s", tid), http.StatusForbidden)
			return
		}
	}

	// Issue Zitadel machine user + PAT
	result, err := s.patIssuer.Issue(r.Context(), username, ttl)
	if err != nil {
		s.logger.Error("issue pat", zap.String("user", username), zap.Error(err))
		jsonError(w, "failed to create PAT", http.StatusInternalServerError)
		return
	}

	patID := uuid.New().String()
	// SpiceDB uses machineUsername as the pat object ID so Guard can resolve
	// the owner directly from the JWKS-authenticated preferred_username.
	spicedbPATID := result.MachineUsername

	// Write SpiceDB relationships
	if err := s.spice.WritePATOwner(r.Context(), spicedbPATID, username); err != nil {
		s.logger.Error("write pat owner to spicedb", zap.Error(err))
		s.patIssuer.DeleteUser(r.Context(), result.ZitadelUserID)
		jsonError(w, "failed to configure PAT permissions", http.StatusInternalServerError)
		return
	}

	for _, tid := range req.TemplateIDs {
		if err := s.spice.WritePATTemplateFilter(r.Context(), tid, spicedbPATID); err != nil {
			s.logger.Error("write pat template filter to spicedb", zap.Error(err))
			s.spice.DeletePATRelationships(r.Context(), spicedbPATID)
			s.patIssuer.DeleteUser(r.Context(), result.ZitadelUserID)
			jsonError(w, "failed to configure PAT permissions", http.StatusInternalServerError)
			return
		}
	}

	// Save to DB
	now := time.Now()
	p := &store.PAT{
		ID:              patID,
		Name:            req.Name,
		ZitadelUserID:   result.ZitadelUserID,
		ZitadelPATID:    result.ZitadelPATID,
		MachineUsername: result.MachineUsername,
		Owner:           username,
		TemplateIDs:     req.TemplateIDs,
		CreatedAt:       now,
		ExpiresAt:       now.Add(ttl),
	}
	if err := s.store.CreatePAT(r.Context(), p); err != nil {
		s.logger.Error("save pat to store", zap.Error(err))
		s.spice.DeletePATRelationships(r.Context(), spicedbPATID)
		s.patIssuer.DeleteUser(r.Context(), result.ZitadelUserID)
		jsonError(w, "failed to save PAT", http.StatusInternalServerError)
		return
	}

	s.logger.Info("PAT created",
		zap.String("patId", patID),
		zap.String("owner", username),
		zap.Strings("templates", req.TemplateIDs),
	)

	// Response with token (one-time)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]any{
		"id":              patID,
		"name":            req.Name,
		"machineUsername": result.MachineUsername,
		"templateIds":     req.TemplateIDs,
		"createdAt":       now,
		"expiresAt":       now.Add(ttl),
		"token":           result.Token,
	})
}

func (s *Server) handlePATRevoke(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	username := requireAuth(w, r)
	if username == "" {
		return
	}

	var req struct {
		PATID string `json:"patId"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		jsonError(w, "invalid request", http.StatusBadRequest)
		return
	}

	// Revoke in DB and get Zitadel user ID + machine username
	zitadelUserID, machineUsername, err := s.store.RevokePAT(r.Context(), req.PATID, username)
	if err != nil {
		s.logger.Error("revoke pat", zap.Error(err))
		jsonError(w, "PAT not found or already revoked", http.StatusNotFound)
		return
	}

	// Delete SpiceDB relationships (using machineUsername as SpiceDB pat ID)
	if err := s.spice.DeletePATRelationships(r.Context(), machineUsername); err != nil {
		s.logger.Error("delete pat spicedb relationships", zap.Error(err))
	}

	// Delete Zitadel machine user
	if s.patIssuer != nil {
		if err := s.patIssuer.DeleteUser(r.Context(), zitadelUserID); err != nil {
			s.logger.Error("delete zitadel machine user", zap.Error(err))
		}
	}

	s.logger.Info("PAT revoked", zap.String("patId", req.PATID), zap.String("owner", username))
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
