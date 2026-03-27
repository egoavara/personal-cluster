package adapter

import (
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/google/uuid"
)

type QdrantAdapter struct {
	signingKey []byte
}

func NewQdrantAdapter(signingKey string) *QdrantAdapter {
	return &QdrantAdapter{
		signingKey: []byte(signingKey),
	}
}

func (a *QdrantAdapter) ServiceName() string { return "qdrant" }

func (a *QdrantAdapter) Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error) {
	tokenID := fmt.Sprintf("vend_%s_%s", sanitize(user), uuid.New().String()[:8])
	expiresAt := time.Now().Add(ttl)

	collection := params["collection"]
	access := params["access"]
	if access == "" {
		access = "r"
	}

	header := map[string]string{"alg": "HS256", "typ": "JWT"}
	claims := map[string]any{
		"sub": tokenID,
		"exp": expiresAt.Unix(),
		"iat": time.Now().Unix(),
	}
	if collection != "" {
		claims["access"] = []map[string]any{
			{"collection": collection, "access": access},
		}
	}

	token, err := a.signJWT(header, claims)
	if err != nil {
		return nil, err
	}

	return &Credential{
		ID:        tokenID,
		Username:  user,
		IssuedAt:  time.Now(),
		ExpiresAt: expiresAt,
		Details: map[string]string{
			"host":       "qdrant.persistence.svc.cluster.local",
			"port":       "6333",
			"collection": collection,
			"access":     access,
		},
		Secrets: map[string]string{
			"apiKey": token,
		},
	}, nil
}

func (a *QdrantAdapter) Revoke(ctx context.Context, cred *Credential) error {
	return nil
}

func (a *QdrantAdapter) signJWT(header map[string]string, claims map[string]any) (string, error) {
	hJSON, _ := json.Marshal(header)
	cJSON, _ := json.Marshal(claims)

	h := base64.RawURLEncoding.EncodeToString(hJSON)
	c := base64.RawURLEncoding.EncodeToString(cJSON)
	input := h + "." + c

	mac := hmac.New(sha256.New, a.signingKey)
	mac.Write([]byte(input))
	sig := base64.RawURLEncoding.EncodeToString(mac.Sum(nil))

	return strings.Join([]string{h, c, sig}, "."), nil
}
