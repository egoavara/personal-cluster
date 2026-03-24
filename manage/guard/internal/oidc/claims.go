package oidc

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"strings"

	"golang.org/x/oauth2"
)

// UserClaims provides typed access to OIDC JWT claims.
type UserClaims struct {
	raw map[string]interface{}
}

// RawIDToken extracts the raw id_token string from an oauth2.Token.
func RawIDToken(token *oauth2.Token) string {
	s, _ := token.Extra("id_token").(string)
	return s
}

// ParseIDTokenClaims extracts claims from an ID token without cryptographic verification.
// The token has already been validated by the IdP during the code exchange.
func ParseIDTokenClaims(token *oauth2.Token) (*UserClaims, error) {
	idTokenRaw, ok := token.Extra("id_token").(string)
	if !ok {
		return nil, fmt.Errorf("missing id_token in token response")
	}

	parts := strings.Split(idTokenRaw, ".")
	if len(parts) != 3 {
		return nil, fmt.Errorf("invalid JWT format")
	}

	// Decode payload with padding
	payload := parts[1]
	if m := len(payload) % 4; m != 0 {
		payload += strings.Repeat("=", 4-m)
	}
	data, err := base64.URLEncoding.DecodeString(payload)
	if err != nil {
		return nil, fmt.Errorf("decode JWT payload: %w", err)
	}

	var raw map[string]interface{}
	if err := json.Unmarshal(data, &raw); err != nil {
		return nil, fmt.Errorf("unmarshal JWT claims: %w", err)
	}

	return &UserClaims{raw: raw}, nil
}

// Username returns preferred_username, falling back to name, then sub.
func (c *UserClaims) Username() string {
	for _, key := range []string{"preferred_username", "name", "sub"} {
		if v, ok := c.raw[key].(string); ok && v != "" {
			return v
		}
	}
	return "unknown"
}

// Email returns the email claim.
func (c *UserClaims) Email() string {
	if v, ok := c.raw["email"].(string); ok {
		return v
	}
	return ""
}

// Groups returns the groups claim as a string slice.
func (c *UserClaims) Groups() []string {
	raw, ok := c.raw["groups"]
	if !ok {
		return nil
	}
	arr, ok := raw.([]interface{})
	if !ok {
		return nil
	}
	groups := make([]string, 0, len(arr))
	for _, v := range arr {
		if s, ok := v.(string); ok {
			groups = append(groups, s)
		}
	}
	return groups
}
