package adapter

import (
	"context"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/nats-io/jwt/v2"
	"github.com/nats-io/nats.go"
	"github.com/nats-io/nkeys"
)

// NATSAdapter issues per-user NATS credentials using the Account JWT system.
// Each user gets a unique NKey + User JWT with TTL.
// Revocation is done by updating the account's revocation list.
type NATSAdapter struct {
	url            string
	operatorKP     nkeys.KeyPair // Operator signing key (for re-signing account JWT with revocations)
	accountKP      nkeys.KeyPair // Account signing key (for signing user JWTs)
	accountPubKey  string
	sysUserJWT     string // System account user JWT (for $SYS access)
	sysUserSeed    []byte // System account user NKey seed
}

func NewNATSAdapter(url string, accountSeed, operatorSeed, sysUserJWT string, sysUserSeed []byte) (*NATSAdapter, error) {
	accountKP, err := nkeys.FromSeed([]byte(accountSeed))
	if err != nil {
		return nil, fmt.Errorf("parse account seed: %w", err)
	}
	accountPub, _ := accountKP.PublicKey()

	operatorKP, err := nkeys.FromSeed([]byte(operatorSeed))
	if err != nil {
		return nil, fmt.Errorf("parse operator seed: %w", err)
	}

	return &NATSAdapter{
		url:           url,
		operatorKP:    operatorKP,
		accountKP:     accountKP,
		accountPubKey: accountPub,
		sysUserJWT:    sysUserJWT,
		sysUserSeed:   sysUserSeed,
	}, nil
}

func (a *NATSAdapter) ServiceName() string { return "nats" }

func (a *NATSAdapter) Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error) {
	credID := fmt.Sprintf("vend_%s_%s", sanitize(user), uuid.New().String()[:8])

	// 1. Generate user NKey keypair
	userKP, err := nkeys.CreateUser()
	if err != nil {
		return nil, fmt.Errorf("create user nkey: %w", err)
	}
	userPub, _ := userKP.PublicKey()
	userSeed, _ := userKP.Seed()

	// 2. Create User JWT (signed by account key, with exp)
	claims := jwt.NewUserClaims(userPub)
	claims.Name = credID
	claims.IssuerAccount = a.accountPubKey
	claims.Expires = time.Now().Add(ttl).Unix()

	// Apply subject permissions from params
	if pubAllow := params["pub.allow"]; pubAllow != "" {
		claims.Pub.Allow.Add(pubAllow)
	}
	if subAllow := params["sub.allow"]; subAllow != "" {
		claims.Sub.Allow.Add(subAllow)
	}

	userJWT, err := claims.Encode(a.accountKP)
	if err != nil {
		return nil, fmt.Errorf("encode user jwt: %w", err)
	}

	return &Credential{
		ID:        credID,
		Username:  user,
		IssuedAt:  time.Now(),
		ExpiresAt: time.Now().Add(ttl),
		Details: map[string]string{
			"url":     a.url,
			"nkeyPub": userPub,
		},
		Secrets: map[string]string{
			"nkeySeed": string(userSeed),
			"userJWT":  userJWT,
		},
	}, nil
}

func (a *NATSAdapter) Revoke(ctx context.Context, cred *Credential) error {
	userPub := cred.Details["nkeyPub"]
	if userPub == "" {
		return nil // Legacy credential without NKey — no-op
	}

	// Connect to NATS with system account credentials to push account updates
	sysJWT := a.sysUserJWT
	sysSeed := a.sysUserSeed
	nc, err := nats.Connect(a.url,
		nats.UserJWT(func() (string, error) { return sysJWT, nil },
			func(nonce []byte) ([]byte, error) {
				kp, err := nkeys.FromSeed(sysSeed)
				if err != nil {
					return nil, err
				}
				return kp.Sign(nonce)
			}),
	)
	if err != nil {
		return fmt.Errorf("connect to NATS (sys account): %w", err)
	}
	defer nc.Close()

	// Build updated account claims with revocation (no LOOKUP needed for MEMORY resolver)
	accountClaims := jwt.NewAccountClaims(a.accountPubKey)
	accountClaims.Name = "vender"
	accountClaims.Limits.Conn = -1
	accountClaims.Limits.Subs = -1
	accountClaims.Limits.Data = -1
	accountClaims.Limits.Payload = -1
	accountClaims.Revoke(userPub)

	// Sign with operator key
	updatedJWT, err := accountClaims.Encode(a.operatorKP)
	if err != nil {
		return fmt.Errorf("encode updated account jwt: %w", err)
	}

	// Push to NATS server — this updates the MEMORY resolver in-place
	updateResp, err := nc.Request(
		"$SYS.REQ.CLAIMS.UPDATE",
		[]byte(updatedJWT),
		5*time.Second,
	)
	if err != nil {
		return fmt.Errorf("push account update: %w", err)
	}

	// Check for error response
	if updateResp != nil && len(updateResp.Data) > 0 {
		respStr := string(updateResp.Data)
		if len(respStr) > 0 && respStr[0] == '{' {
			return fmt.Errorf("account update rejected: %s", respStr)
		}
	}

	return nil
}
