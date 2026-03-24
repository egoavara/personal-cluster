package oidc

import (
	"crypto/rand"
	"encoding/base64"
)

// GenerateState creates a cryptographically random state parameter for CSRF protection.
func GenerateState() string {
	b := make([]byte, 16)
	_, _ = rand.Read(b)
	return base64.RawURLEncoding.EncodeToString(b)
}
