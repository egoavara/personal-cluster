package dashboard

import (
	"html/template"
	"net/http"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	"go.uber.org/zap"
)

// PolicyHandler provides HTTP handlers for SpiceDB relationship CRUD.
type PolicyHandler struct {
	spice     *spicedb.Client
	templates *template.Template
	logger    *zap.Logger
}

// NewPolicyHandler creates a policy management handler.
func NewPolicyHandler(spice *spicedb.Client, templates *template.Template, logger *zap.Logger) *PolicyHandler {
	return &PolicyHandler{
		spice:     spice,
		templates: templates,
		logger:    logger,
	}
}

// HandleList shows all relationships with optional filtering.
func (h *PolicyHandler) HandleList(w http.ResponseWriter, r *http.Request) {
	resourceType := r.URL.Query().Get("type")
	if resourceType == "" {
		resourceType = "service"
	}

	// Read relationships from SpiceDB
	ctx := r.Context()
	stream, err := h.spice.Permissions().ReadRelationships(ctx, &v1.ReadRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType: resourceType,
		},
		Consistency: &v1.Consistency{
			Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true},
		},
	})
	if err != nil {
		h.logger.Error("failed to read relationships", zap.Error(err))
		http.Error(w, "Failed to load policies", http.StatusInternalServerError)
		return
	}

	type relItem struct {
		ResourceType string
		ResourceID   string
		Relation     string
		SubjectType  string
		SubjectID    string
		HasCaveat    bool
		CaveatName   string
	}

	var items []relItem
	for {
		resp, err := stream.Recv()
		if err != nil {
			break
		}
		rel := resp.Relationship
		item := relItem{
			ResourceType: rel.Resource.ObjectType,
			ResourceID:   rel.Resource.ObjectId,
			Relation:     rel.Relation,
			SubjectType:  rel.Subject.Object.ObjectType,
			SubjectID:    rel.Subject.Object.ObjectId,
		}
		if rel.OptionalCaveat != nil {
			item.HasCaveat = true
			item.CaveatName = rel.OptionalCaveat.CaveatName
		}
		items = append(items, item)
	}

	data := map[string]interface{}{
		"Session":      sessionFromContext(r.Context()),
		"ResourceType": resourceType,
		"Items":        items,
	}

	if err := h.templates.ExecuteTemplate(w, "policy_list", data); err != nil {
		h.logger.Error("template error", zap.Error(err))
	}
}

// HandleCreate shows the relationship creation form (GET) or creates a relationship (POST).
func (h *PolicyHandler) HandleCreate(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		data := map[string]interface{}{
			"Session": sessionFromContext(r.Context()),
		}
		if err := h.templates.ExecuteTemplate(w, "policy_create", data); err != nil {
			h.logger.Error("template error", zap.Error(err))
		}
		return
	}

	// POST: create relationship
	if err := r.ParseForm(); err != nil {
		http.Error(w, "Invalid form", http.StatusBadRequest)
		return
	}

	resourceType := r.FormValue("resource_type")
	resourceID := r.FormValue("resource_id")
	relation := r.FormValue("relation")
	subjectType := r.FormValue("subject_type")
	subjectID := r.FormValue("subject_id")

	update := spicedb.Touch(resourceType, resourceID, relation, subjectType, subjectID)

	if err := h.spice.WriteRelationships(r.Context(), []*v1.RelationshipUpdate{update}); err != nil {
		h.logger.Error("failed to create relationship", zap.Error(err))
		http.Error(w, "Failed to create policy", http.StatusInternalServerError)
		return
	}

	http.Redirect(w, r, "/policy/?type="+resourceType, http.StatusFound)
}

// HandleDelete deletes a specific relationship.
func (h *PolicyHandler) HandleDelete(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if err := r.ParseForm(); err != nil {
		http.Error(w, "Invalid form", http.StatusBadRequest)
		return
	}

	resourceType := r.FormValue("resource_type")
	resourceID := r.FormValue("resource_id")
	relation := r.FormValue("relation")
	subjectType := r.FormValue("subject_type")
	subjectID := r.FormValue("subject_id")

	update := spicedb.Delete(resourceType, resourceID, relation, subjectType, subjectID)
	if err := h.spice.WriteRelationships(r.Context(), []*v1.RelationshipUpdate{update}); err != nil {
		h.logger.Error("failed to delete relationship", zap.Error(err))
		http.Error(w, "Failed to delete policy", http.StatusInternalServerError)
		return
	}

	http.Redirect(w, r, "/policy/?type="+resourceType, http.StatusFound)
}

// HandleCheck performs a live permission check (GET shows form, POST checks).
func (h *PolicyHandler) HandleCheck(w http.ResponseWriter, r *http.Request) {
	data := map[string]interface{}{
		"Session": sessionFromContext(r.Context()),
	}

	if r.Method == http.MethodPost {
		if err := r.ParseForm(); err != nil {
			http.Error(w, "Invalid form", http.StatusBadRequest)
			return
		}

		resourceType := r.FormValue("resource_type")
		resourceID := r.FormValue("resource_id")
		permission := r.FormValue("permission")
		subjectType := r.FormValue("subject_type")
		subjectID := r.FormValue("subject_id")
		clientIP := r.FormValue("client_ip")
		if clientIP == "" {
			clientIP = extractDashboardClientIP(r)
		}

		caveatCtx, _ := spicedb.BuildCaveatContext(clientIP)
		result, err := h.spice.CheckPermission(r.Context(),
			spicedb.ObjectRef(resourceType, resourceID),
			permission,
			spicedb.SubjectRef(subjectType, subjectID),
			&v1.ContextualizedCaveat{Context: caveatCtx},
		)

		resultStr := "ERROR"
		if err == nil {
			switch result {
			case v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION:
				resultStr = "ALLOWED"
			case v1.CheckPermissionResponse_PERMISSIONSHIP_NO_PERMISSION:
				resultStr = "DENIED"
			case v1.CheckPermissionResponse_PERMISSIONSHIP_CONDITIONAL_PERMISSION:
				resultStr = "CONDITIONAL (missing context)"
			}
		} else {
			resultStr = "ERROR: " + err.Error()
		}

		data["Result"] = resultStr
		data["Query"] = map[string]string{
			"resource_type": resourceType,
			"resource_id":   resourceID,
			"permission":    permission,
			"subject_type":  subjectType,
			"subject_id":    subjectID,
			"client_ip":     clientIP,
		}
	}

	if err := h.templates.ExecuteTemplate(w, "check", data); err != nil {
		h.logger.Error("template error", zap.Error(err))
	}
}
