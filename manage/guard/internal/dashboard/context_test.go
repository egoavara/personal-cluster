package dashboard

import (
	"context"
	"testing"
)

func TestSessionContext(t *testing.T) {
	session := &SessionData{
		Username: "alice",
		Email:    "alice@example.com",
		Groups:   []string{"admin"},
	}

	ctx := withSession(context.Background(), session)
	got := sessionFromContext(ctx)

	if got == nil {
		t.Fatal("expected session from context, got nil")
	}
	if got.Username != "alice" {
		t.Errorf("Username = %q, want %q", got.Username, "alice")
	}
	if got.Email != "alice@example.com" {
		t.Errorf("Email = %q, want %q", got.Email, "alice@example.com")
	}
}

func TestSessionContext_Missing(t *testing.T) {
	got := sessionFromContext(context.Background())
	if got != nil {
		t.Errorf("expected nil from empty context, got %+v", got)
	}
}

func TestSessionContext_WrongType(t *testing.T) {
	ctx := context.WithValue(context.Background(), sessionKey, "not-a-session")
	got := sessionFromContext(ctx)
	if got != nil {
		t.Errorf("expected nil for wrong type, got %+v", got)
	}
}
