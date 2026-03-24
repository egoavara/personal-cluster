package dashboard

import (
	"net/http"
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
			http.Redirect(w, r, "/login", http.StatusFound)
			return
		}
		// Store session in request context
		ctx := withSession(r.Context(), session)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// DashboardAuthzMiddleware checks SpiceDB permission for the dashboard itself.
// Wraps AuthMiddleware: authenticate first, then check dashboard:guard access.
func DashboardAuthzMiddleware(oidc *OIDCHandler, spice *spicedb.Client, logger *zap.Logger, next http.Handler) http.Handler {
	return AuthMiddleware(oidc, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		session := sessionFromContext(r.Context())
		if session == nil {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		result, err := spice.CheckPermission(r.Context(),
			spicedb.ObjectRef("app", "guard"),
			"view",
			spicedb.SubjectRef("user", session.Username),
			nil,
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

		clientIP := extractDashboardClientIP(r)
		caveatCtx, err := spicedb.BuildCaveatContext(clientIP)
		if err != nil {
			logger.Error("failed to build caveat context", zap.Error(err))
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		result, err := spice.CheckPermission(r.Context(),
			spicedb.ObjectRef(resourceType, resourceID),
			permission,
			spicedb.SubjectRef("user", session.Username),
			&v1.ContextualizedCaveat{Context: caveatCtx},
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
				zap.String("client_ip", clientIP),
			)
			http.Error(w, "Forbidden", http.StatusForbidden)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func extractDashboardClientIP(r *http.Request) string {
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		parts := strings.SplitN(xff, ",", 2)
		return strings.TrimSpace(parts[0])
	}
	if xri := r.Header.Get("X-Real-IP"); xri != "" {
		return xri
	}
	addr := r.RemoteAddr
	if idx := strings.LastIndex(addr, ":"); idx != -1 {
		if bracketIdx := strings.LastIndex(addr, "]"); bracketIdx != -1 && bracketIdx < idx {
			return addr[1:bracketIdx]
		}
		return addr[:idx]
	}
	return addr
}
