package dashboard

import "context"

type contextKey string

const sessionKey contextKey = "session"

func withSession(ctx context.Context, s *SessionData) context.Context {
	return context.WithValue(ctx, sessionKey, s)
}

func sessionFromContext(ctx context.Context) *SessionData {
	s, _ := ctx.Value(sessionKey).(*SessionData)
	return s
}
