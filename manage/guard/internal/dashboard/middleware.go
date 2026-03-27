package dashboard

import (
	"net/http"
	"net/url"
	"strings"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	"go.uber.org/zap"
)

// AuthMiddleware ensures the user is authenticated via OIDC session.
// If not, redirects to /login.
func AuthMiddleware(oidc *OIDCHandler, next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		session, err := oidc.GetSession(r)
		if err != nil {
			loginURL := "/login?rd=" + url.QueryEscape(r.URL.RequestURI())
			http.Redirect(w, r, loginURL, http.StatusFound)
			return
		}
		// Store session in request context
		ctx := withSession(r.Context(), session)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// DashboardAuthzMiddleware checks SpiceDB permission for the dashboard itself.
// Wraps AuthMiddleware: authenticate first, then check kube_service:auth/guard-dashboard access.
func DashboardAuthzMiddleware(oidc *OIDCHandler, spice *spicedb.Client, logger *zap.Logger, next http.Handler) http.Handler {
	return AuthMiddleware(oidc, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		session := sessionFromContext(r.Context())
		if session == nil {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		result, err := spice.CheckPermission(r.Context(),
			spicedb.ObjectRef("kube_service", "auth/guard-dashboard"),
			"view",
			spicedb.SubjectRef("user", session.Username),
		)
		if err != nil {
			logger.Error("SpiceDB dashboard authz check failed",
				zap.String("user", session.Username),
				zap.Error(err),
			)
			http.Error(w, "Authorization check failed", http.StatusInternalServerError)
			return
		}

		if result != v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION {
			logger.Warn("dashboard access denied",
				zap.String("user", session.Username),
			)
			http.Error(w, "Forbidden: no access to guard dashboard", http.StatusForbidden)
			return
		}

		next.ServeHTTP(w, r)
	}))
}

// SpiceDBAuthzMiddleware checks SpiceDB permission for a specific dashboard resource.
func SpiceDBAuthzMiddleware(spice *spicedb.Client, spicedbResource, permission string, logger *zap.Logger, next http.Handler) http.Handler {
	parts := strings.SplitN(spicedbResource, ":", 2)
	if len(parts) != 2 {
		logger.Fatal("invalid spicedbResource format", zap.String("resource", spicedbResource))
	}
	resourceType := parts[0]
	resourceID := parts[1]

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		session := sessionFromContext(r.Context())
		if session == nil {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		result, err := spice.CheckPermission(r.Context(),
			spicedb.ObjectRef(resourceType, resourceID),
			permission,
			spicedb.SubjectRef("user", session.Username),
		)
		if err != nil {
			logger.Error("SpiceDB check failed",
				zap.String("user", session.Username),
				zap.String("resource", spicedbResource),
				zap.Error(err),
			)
			http.Error(w, "Authorization check failed", http.StatusInternalServerError)
			return
		}

		if result != v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION {
			logger.Warn("dashboard access denied",
				zap.String("user", session.Username),
				zap.String("resource", spicedbResource),
			)
			http.Error(w, "Forbidden", http.StatusForbidden)
			return
		}

		next.ServeHTTP(w, r)
	})
}
