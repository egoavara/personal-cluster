package dashboard

import (
	"crypto/tls"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"go.uber.org/zap"
)

// NewRelayHandler creates a reverse proxy handler for a dashboard upstream.
func NewRelayHandler(route DashboardRoute, logger *zap.Logger) (http.Handler, error) {
	target, err := url.Parse(route.Upstream)
	if err != nil {
		return nil, err
	}

	proxy := httputil.NewSingleHostReverseProxy(target)
	proxy.FlushInterval = -1

	transport := &http.Transport{}
	if route.InsecureSkipVerify {
		transport.TLSClientConfig = &tls.Config{InsecureSkipVerify: true}
	}
	proxy.Transport = transport

	// Customize director to handle path stripping
	originalDirector := proxy.Director
	proxy.Director = func(r *http.Request) {
		originalDirector(r)
		if route.StripPrefix {
			r.URL.Path = strings.TrimPrefix(r.URL.Path, route.Path)
			if r.URL.Path == "" {
				r.URL.Path = "/"
			}
			r.URL.RawPath = strings.TrimPrefix(r.URL.RawPath, route.Path)
		}
		r.Host = target.Host
	}

	proxy.ErrorHandler = func(w http.ResponseWriter, r *http.Request, err error) {
		logger.Error("relay proxy error",
			zap.String("dashboard", route.Name),
			zap.String("upstream", route.Upstream),
			zap.Error(err),
		)
		http.Error(w, "Bad Gateway", http.StatusBadGateway)
	}

	return proxy, nil
}
