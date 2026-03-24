package dashboard

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestAuthMiddleware_RedirectsWhenNoSession(t *testing.T) {
	h := newTestOIDCHandler(t)

	inner := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		t.Error("inner handler should not be called when no session")
	})

	handler := AuthMiddleware(h, inner)

	rr := httptest.NewRecorder()
	req := httptest.NewRequest("GET", "/policy/", nil)
	handler.ServeHTTP(rr, req)

	if rr.Code != http.StatusFound {
		t.Errorf("status = %d, want %d (redirect)", rr.Code, http.StatusFound)
	}
	location := rr.Header().Get("Location")
	if location != "/login" {
		t.Errorf("Location = %q, want %q", location, "/login")
	}
}

func TestAuthMiddleware_PassesWithValidSession(t *testing.T) {
	h := newTestOIDCHandler(t)

	called := false
	inner := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		called = true
		session := sessionFromContext(r.Context())
		if session == nil {
			t.Error("expected session in context")
			return
		}
		if session.Username != "testuser" {
			t.Errorf("Username = %q, want %q", session.Username, "testuser")
		}
		w.WriteHeader(http.StatusOK)
	})

	handler := AuthMiddleware(h, inner)

	// Create a valid session cookie
	session := SessionData{
		Username:  "testuser",
		Email:     "test@example.com",
		ExpiresAt: 9999999999, // far future
	}
	cookie, _ := h.encodeSession(session)

	rr := httptest.NewRecorder()
	req := httptest.NewRequest("GET", "/policy/", nil)
	req.AddCookie(&http.Cookie{Name: sessionCookieName, Value: cookie})
	handler.ServeHTTP(rr, req)

	if !called {
		t.Error("inner handler was not called")
	}
	if rr.Code != http.StatusOK {
		t.Errorf("status = %d, want %d", rr.Code, http.StatusOK)
	}
}

func TestAuthMiddleware_RedirectsWithExpiredSession(t *testing.T) {
	h := newTestOIDCHandler(t)

	inner := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		t.Error("inner handler should not be called for expired session")
	})

	handler := AuthMiddleware(h, inner)

	session := SessionData{
		Username:  "testuser",
		ExpiresAt: 1000000000, // 2001 — expired
	}
	cookie, _ := h.encodeSession(session)

	rr := httptest.NewRecorder()
	req := httptest.NewRequest("GET", "/", nil)
	req.AddCookie(&http.Cookie{Name: sessionCookieName, Value: cookie})
	handler.ServeHTTP(rr, req)

	if rr.Code != http.StatusFound {
		t.Errorf("status = %d, want %d (redirect for expired)", rr.Code, http.StatusFound)
	}
}
