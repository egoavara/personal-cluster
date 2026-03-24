package extauthz

import (
	"embed"
	"html/template"
	"net/http"
)

//go:embed pages/*.html
var pagesFS embed.FS

var (
	forbiddenTmpl = template.Must(template.ParseFS(pagesFS, "pages/forbidden.html"))
	errorTmpl     = template.Must(template.ParseFS(pagesFS, "pages/error.html"))
)

type forbiddenData struct {
	Host       string
	User       string
	Resource   string
	SignOutURL string
	RetryURL   string
}

type errorData struct {
	RetryURL string
}

func renderForbidden(w http.ResponseWriter, host, user, resource, signOutURL, retryURL string) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.WriteHeader(http.StatusForbidden)
	_ = forbiddenTmpl.Execute(w, forbiddenData{
		Host:       host,
		User:       user,
		Resource:   resource,
		SignOutURL: signOutURL,
		RetryURL:   retryURL,
	})
}

func renderError(w http.ResponseWriter, retryURL string) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.WriteHeader(http.StatusServiceUnavailable)
	_ = errorTmpl.Execute(w, errorData{RetryURL: retryURL})
}
