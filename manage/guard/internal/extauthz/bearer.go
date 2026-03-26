package extauthz

import (
	"context"
	"net/http"
	"strings"

	oidcpkg "github.com/egoavara/personal-cluster/manage/guard/internal/oidc"
	"go.uber.org/zap"
)

// newJWKSValidator creates a JWKS validator from OIDC discovery.
func newJWKSValidator(ctx context.Context, issuerURL string, logger *zap.Logger) (*oidcpkg.JWKSValidator, error) {
	httpClient := oidcpkg.InsecureHTTPClient()
	endpoints, err := oidcpkg.Discover(ctx, httpClient, issuerURL)
	if err != nil {
		return nil, err
	}
	if endpoints.JWKSURI == "" {
		return nil, nil
	}
	logger.Info("JWKS validator initialized", zap.String("jwks_uri", endpoints.JWKSURI))
	return oidcpkg.NewJWKSValidator(endpoints.JWKSURI, issuerURL), nil
}

// tryBearerAuth attempts to authenticate using Authorization: Bearer <jwt>.
// Returns (username, email, true) on success, or ("", "", false) on failure.
func (s *Server) tryBearerAuth(r *http.Request) (string, string, bool) {
	if s.jwks == nil {
		return "", "", false
	}

	auth := r.Header.Get("Authorization")
	if auth == "" {
		return "", "", false
	}

	const prefix = "Bearer "
	if !strings.HasPrefix(auth, prefix) {
		return "", "", false
	}
	tokenStr := strings.TrimPrefix(auth, prefix)

	claims, err := s.jwks.ValidateBearer(r.Context(), tokenStr)
	if err != nil {
		s.logger.Debug("bearer token validation failed", zap.Error(err))
		return "", "", false
	}

	s.logger.Debug("bearer token authenticated",
		zap.String("sub", claims.Subject),
		zap.String("username", claims.EffectiveUsername()),
	)

	return claims.EffectiveUsername(), claims.Email, true
}

// isBearerRequest checks if the request came with a Bearer Authorization header,
// indicating a programmatic API client (not a browser).
func isBearerRequest(r *http.Request) bool {
	return strings.HasPrefix(r.Header.Get("Authorization"), "Bearer ")
}
