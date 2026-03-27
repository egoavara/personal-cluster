package adapter

import (
	"context"
	"fmt"
	"time"

	"github.com/google/uuid"
	clientv3 "go.etcd.io/etcd/client/v3"
)

type EtcdAdapter struct {
	client *clientv3.Client
}

func NewEtcdAdapter(endpoints []string, rootPassword string) (*EtcdAdapter, error) {
	client, err := clientv3.New(clientv3.Config{
		Endpoints:   endpoints,
		DialTimeout: 5 * time.Second,
		Username:    "root",
		Password:    rootPassword,
	})
	if err != nil {
		return nil, fmt.Errorf("connect to etcd: %w", err)
	}
	return &EtcdAdapter{client: client}, nil
}

func (a *EtcdAdapter) ServiceName() string { return "etcd" }

func (a *EtcdAdapter) Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error) {
	userName := fmt.Sprintf("vend_%s_%s", sanitize(user), uuid.New().String()[:8])
	password := uuid.New().String()

	keyPrefix := params["keyPrefix"]
	if keyPrefix == "" {
		keyPrefix = "/"
	}
	permission := params["permission"]
	if permission == "" {
		permission = "readOnly"
	}

	roleName := userName + "_role"
	if _, err := a.client.RoleAdd(ctx, roleName); err != nil {
		return nil, fmt.Errorf("role add: %w", err)
	}

	var permType clientv3.PermissionType
	switch permission {
	case "readWrite":
		permType = clientv3.PermissionType(clientv3.PermReadWrite)
	default:
		permType = clientv3.PermissionType(clientv3.PermRead)
	}

	rangeEnd := clientv3.GetPrefixRangeEnd(keyPrefix)
	if _, err := a.client.RoleGrantPermission(ctx, roleName, keyPrefix, rangeEnd, permType); err != nil {
		return nil, fmt.Errorf("role grant: %w", err)
	}

	if _, err := a.client.UserAdd(ctx, userName, password); err != nil {
		return nil, fmt.Errorf("user add: %w", err)
	}
	if _, err := a.client.UserGrantRole(ctx, userName, roleName); err != nil {
		return nil, fmt.Errorf("user grant role: %w", err)
	}

	return &Credential{
		ID:        userName,
		Username:  user,
		IssuedAt:  time.Now(),
		ExpiresAt: time.Now().Add(ttl),
		Details: map[string]string{
			"endpoints":  fmt.Sprintf("%v", a.client.Endpoints()),
			"etcdUser":   userName,
			"role":       roleName,
			"keyPrefix":  keyPrefix,
			"permission": permission,
		},
		Secrets: map[string]string{
			"password": password,
		},
	}, nil
}

func (a *EtcdAdapter) Revoke(ctx context.Context, cred *Credential) error {
	roleName := cred.ID + "_role"
	_, _ = a.client.UserRevokeRole(ctx, cred.ID, roleName)
	_, _ = a.client.UserDelete(ctx, cred.ID)
	_, err := a.client.RoleDelete(ctx, roleName)
	return err
}
