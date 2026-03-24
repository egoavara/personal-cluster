package extauthz

import (
	"context"

	oidcpkg "github.com/egoavara/personal-cluster/manage/guard/internal/oidc"
	"go.uber.org/zap"
	"golang.org/x/oauth2"
)

// OIDCProvider handles OIDC authentication flow with discovery.
type OIDCProvider struct {
	oauth2Config       *oauth2.Config
	endSessionEndpoint string
	logger             *zap.Logger
}

// NewOIDCProvider creates a new OIDC provider using discovery.
func NewOIDCProvider(ctx context.Context, issuerURL, clientID, clientSecret, redirectURL string, logger *zap.Logger) (*OIDCProvider, error) {
	httpClient := oidcpkg.InsecureHTTPClient()

	endpoints, err := oidcpkg.Discover(ctx, httpClient, issuerURL)
	if err != nil {
		return nil, err
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
		Scopes:       []string{"openid", "profile", "email"},
	}

	return &OIDCProvider{
		oauth2Config:       oauth2Cfg,
		endSessionEndpoint: endpoints.EndSessionEndpoint,
		logger:             logger,
	}, nil
}

// AuthCodeURL generates the OIDC authorization URL with the given state.
// If prompt is non-empty, it is passed as the OIDC "prompt" parameter
// (e.g. "login" to force re-authentication even if an IdP session exists).
func (p *OIDCProvider) AuthCodeURL(state string, prompt string) string {
	opts := []oauth2.AuthCodeOption{}
	if prompt != "" {
		opts = append(opts, oauth2.SetAuthURLParam("prompt", prompt))
	}
	return p.oauth2Config.AuthCodeURL(state, opts...)
}

// Exchange trades an authorization code for tokens.
func (p *OIDCProvider) Exchange(ctx context.Context, code string) (*oauth2.Token, error) {
	httpClient := oidcpkg.InsecureHTTPClient()
	ctx = context.WithValue(ctx, oauth2.HTTPClient, httpClient)
	return p.oauth2Config.Exchange(ctx, code)
}
