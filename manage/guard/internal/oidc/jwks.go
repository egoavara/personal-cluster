package oidc

import (
	"context"
	"crypto"
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rsa"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"math/big"
	"net/http"
	"strings"
	"sync"
	"time"
)

// JWKSValidator validates JWTs using OIDC provider's public keys.
type JWKSValidator struct {
	jwksURI   string
	issuerURL string
	client    *http.Client

	mu       sync.RWMutex
	keys     map[string]crypto.PublicKey
	fetchedAt time.Time
	ttl       time.Duration
}

type jwksResponse struct {
	Keys []jwk `json:"keys"`
}

type jwk struct {
	KID string `json:"kid"`
	KTY string `json:"kty"`
	ALG string `json:"alg"`
	Use string `json:"use"`
	N   string `json:"n"`
	E   string `json:"e"`
	Crv string `json:"crv"`
	X   string `json:"x"`
	Y   string `json:"y"`
}

// BearerClaims holds claims extracted from a validated Bearer JWT.
type BearerClaims struct {
	Subject  string `json:"sub"`
	Username string `json:"preferred_username"`
	Email    string `json:"email"`
	Issuer   string `json:"iss"`
	Audience any `json:"aud"`
	ExpiresAt float64 `json:"exp"`
	IssuedAt  float64 `json:"iat"`
}

// NewJWKSValidator creates a JWKS validator from OIDC discovery endpoints.
func NewJWKSValidator(jwksURI, issuerURL string) *JWKSValidator {
	return &JWKSValidator{
		jwksURI:   jwksURI,
		issuerURL: issuerURL,
		client:    InsecureHTTPClient(),
		keys:      make(map[string]crypto.PublicKey),
		ttl:       10 * time.Minute,
	}
}

// ValidateBearer parses and validates a Bearer JWT token string.
// Returns claims if the token is valid.
func (v *JWKSValidator) ValidateBearer(ctx context.Context, tokenStr string) (*BearerClaims, error) {
	parts := strings.Split(tokenStr, ".")
	if len(parts) != 3 {
		return nil, fmt.Errorf("invalid JWT format")
	}

	// Parse header to get kid
	headerJSON, err := base64URLDecode(parts[0])
	if err != nil {
		return nil, fmt.Errorf("decode JWT header: %w", err)
	}
	var header struct {
		ALG string `json:"alg"`
		KID string `json:"kid"`
	}
	if err := json.Unmarshal(headerJSON, &header); err != nil {
		return nil, fmt.Errorf("parse JWT header: %w", err)
	}

	// Get public key
	key, err := v.getKey(ctx, header.KID)
	if err != nil {
		return nil, fmt.Errorf("get signing key: %w", err)
	}

	// Verify signature
	signingInput := parts[0] + "." + parts[1]
	signature, err := base64URLDecode(parts[2])
	if err != nil {
		return nil, fmt.Errorf("decode signature: %w", err)
	}

	if err := verifySignature(header.ALG, key, []byte(signingInput), signature); err != nil {
		return nil, fmt.Errorf("invalid signature: %w", err)
	}

	// Parse claims
	claimsJSON, err := base64URLDecode(parts[1])
	if err != nil {
		return nil, fmt.Errorf("decode claims: %w", err)
	}
	var claims BearerClaims
	if err := json.Unmarshal(claimsJSON, &claims); err != nil {
		return nil, fmt.Errorf("parse claims: %w", err)
	}

	// Validate standard claims
	now := float64(time.Now().Unix())
	if claims.ExpiresAt > 0 && now > claims.ExpiresAt {
		return nil, fmt.Errorf("token expired")
	}
	if claims.Issuer != v.issuerURL {
		return nil, fmt.Errorf("issuer mismatch: got %q, want %q", claims.Issuer, v.issuerURL)
	}

	return &claims, nil
}

// EffectiveUsername returns the best username from claims, preferring preferred_username.
func (c *BearerClaims) EffectiveUsername() string {
	if c.Username != "" {
		return c.Username
	}
	return c.Subject
}

func (v *JWKSValidator) getKey(ctx context.Context, kid string) (crypto.PublicKey, error) {
	v.mu.RLock()
	key, ok := v.keys[kid]
	expired := time.Since(v.fetchedAt) > v.ttl
	v.mu.RUnlock()

	if ok && !expired {
		return key, nil
	}

	// Refresh JWKS
	if err := v.fetchJWKS(ctx); err != nil {
		return nil, err
	}

	v.mu.RLock()
	key, ok = v.keys[kid]
	v.mu.RUnlock()
	if !ok {
		return nil, fmt.Errorf("key %q not found in JWKS", kid)
	}
	return key, nil
}

func (v *JWKSValidator) fetchJWKS(ctx context.Context) error {
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, v.jwksURI, nil)
	if err != nil {
		return err
	}
	resp, err := v.client.Do(req)
	if err != nil {
		return fmt.Errorf("fetch JWKS: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("JWKS endpoint returned %d", resp.StatusCode)
	}

	var jwksResp jwksResponse
	if err := json.NewDecoder(resp.Body).Decode(&jwksResp); err != nil {
		return fmt.Errorf("decode JWKS: %w", err)
	}

	keys := make(map[string]crypto.PublicKey)
	for _, k := range jwksResp.Keys {
		if k.Use != "" && k.Use != "sig" {
			continue
		}
		pub, err := parseJWK(k)
		if err != nil {
			continue // skip unparseable keys
		}
		keys[k.KID] = pub
	}

	v.mu.Lock()
	v.keys = keys
	v.fetchedAt = time.Now()
	v.mu.Unlock()

	return nil
}

func parseJWK(k jwk) (crypto.PublicKey, error) {
	switch k.KTY {
	case "RSA":
		nBytes, err := base64URLDecode(k.N)
		if err != nil {
			return nil, err
		}
		eBytes, err := base64URLDecode(k.E)
		if err != nil {
			return nil, err
		}
		n := new(big.Int).SetBytes(nBytes)
		e := 0
		for _, b := range eBytes {
			e = e<<8 + int(b)
		}
		return &rsa.PublicKey{N: n, E: e}, nil

	case "EC":
		var curve elliptic.Curve
		switch k.Crv {
		case "P-256":
			curve = elliptic.P256()
		case "P-384":
			curve = elliptic.P384()
		case "P-521":
			curve = elliptic.P521()
		default:
			return nil, fmt.Errorf("unsupported curve: %s", k.Crv)
		}
		xBytes, err := base64URLDecode(k.X)
		if err != nil {
			return nil, err
		}
		yBytes, err := base64URLDecode(k.Y)
		if err != nil {
			return nil, err
		}
		return &ecdsa.PublicKey{
			Curve: curve,
			X:     new(big.Int).SetBytes(xBytes),
			Y:     new(big.Int).SetBytes(yBytes),
		}, nil

	default:
		return nil, fmt.Errorf("unsupported key type: %s", k.KTY)
	}
}

func verifySignature(alg string, key crypto.PublicKey, signingInput, signature []byte) error {
	switch alg {
	case "RS256":
		return verifyRSA(crypto.SHA256, key, signingInput, signature)
	case "RS384":
		return verifyRSA(crypto.SHA384, key, signingInput, signature)
	case "RS512":
		return verifyRSA(crypto.SHA512, key, signingInput, signature)
	case "ES256":
		return verifyECDSA(crypto.SHA256, key, signingInput, signature)
	case "ES384":
		return verifyECDSA(crypto.SHA384, key, signingInput, signature)
	case "ES512":
		return verifyECDSA(crypto.SHA512, key, signingInput, signature)
	default:
		return fmt.Errorf("unsupported algorithm: %s", alg)
	}
}

func verifyRSA(hash crypto.Hash, key crypto.PublicKey, signingInput, signature []byte) error {
	rsaKey, ok := key.(*rsa.PublicKey)
	if !ok {
		return fmt.Errorf("key is not RSA")
	}
	h := hash.New()
	h.Write(signingInput)
	return rsa.VerifyPKCS1v15(rsaKey, hash, h.Sum(nil), signature)
}

func verifyECDSA(hash crypto.Hash, key crypto.PublicKey, signingInput, signature []byte) error {
	ecKey, ok := key.(*ecdsa.PublicKey)
	if !ok {
		return fmt.Errorf("key is not ECDSA")
	}
	h := hash.New()
	h.Write(signingInput)
	if !ecdsa.VerifyASN1(ecKey, h.Sum(nil), signature) {
		return fmt.Errorf("ECDSA signature verification failed")
	}
	return nil
}

func base64URLDecode(s string) ([]byte, error) {
	// Add padding if necessary
	if m := len(s) % 4; m != 0 {
		s += strings.Repeat("=", 4-m)
	}
	return base64.URLEncoding.DecodeString(s)
}
