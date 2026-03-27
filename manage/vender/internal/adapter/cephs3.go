package adapter

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/google/uuid"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/client-go/dynamic"
	"k8s.io/client-go/rest"
)

var cephObjectStoreUserGVR = schema.GroupVersionResource{
	Group:    "ceph.rook.io",
	Version:  "v1",
	Resource: "cephobjectstoreusers",
}

type CephS3Adapter struct {
	dynClient  dynamic.Interface
	rookNS     string // rook-ceph
	storeName  string // object-store
	vendNS     string // persistence (where secrets are created)
}

// NewCephS3Adapter creates a CephS3 adapter. If cfg is nil, falls back to in-cluster config.
func NewCephS3Adapter(rookNS, storeName, vendNS string, cfg *rest.Config) (*CephS3Adapter, error) {
	if cfg == nil {
		var err error
		cfg, err = rest.InClusterConfig()
		if err != nil {
			return nil, fmt.Errorf("in-cluster config: %w", err)
		}
	}
	dynClient, err := dynamic.NewForConfig(cfg)
	if err != nil {
		return nil, fmt.Errorf("dynamic client: %w", err)
	}
	return &CephS3Adapter{
		dynClient: dynClient,
		rookNS:    rookNS,
		storeName: storeName,
		vendNS:    vendNS,
	}, nil
}

func (a *CephS3Adapter) ServiceName() string { return "ceph-s3" }

func (a *CephS3Adapter) Issue(ctx context.Context, user string, params map[string]string, ttl time.Duration) (*Credential, error) {
	// K8s resource names must be RFC 1123: lowercase alphanumeric + '-' only
	uid := fmt.Sprintf("vend-%s-%s", sanitizeK8s(user), uuid.New().String()[:8])

	// Create CephObjectStoreUser CRD — Rook automatically creates a K8s Secret
	// with access key and secret key in the rook-ceph namespace.
	obj := &unstructured.Unstructured{
		Object: map[string]any{
			"apiVersion": "ceph.rook.io/v1",
			"kind":       "CephObjectStoreUser",
			"metadata": map[string]any{
				"name":      uid,
				"namespace": a.rookNS,
				"labels": map[string]any{
					"vender.egoavara.net/managed": "true",
					"vender.egoavara.net/user":    sanitize(user),
				},
			},
			"spec": map[string]any{
				"store":       a.storeName,
				"displayName": fmt.Sprintf("vend_%s", user),
			},
		},
	}

	_, err := a.dynClient.Resource(cephObjectStoreUserGVR).Namespace(a.rookNS).Create(ctx, obj, metav1.CreateOptions{})
	if err != nil {
		return nil, fmt.Errorf("create CephObjectStoreUser: %w", err)
	}

	// Rook creates Secret: rook-ceph-object-user-<store>-<user> in rook-ceph NS
	secretName := fmt.Sprintf("rook-ceph-object-user-%s-%s", a.storeName, uid)

	return &Credential{
		ID:        uid,
		Username:  user,
		IssuedAt:  time.Now(),
		ExpiresAt: time.Now().Add(ttl),
		Details: map[string]string{
			"userId":     uid,
			"secretName": secretName,
			"secretNS":   a.rookNS,
			"endpoint":   fmt.Sprintf("http://rook-ceph-rgw-%s.%s.svc.cluster.local", a.storeName, a.rookNS),
			"note":       fmt.Sprintf("Access key and secret key are in Secret/%s in %s namespace. Rook creates this automatically.", secretName, a.rookNS),
		},
	}, nil
}

func (a *CephS3Adapter) Revoke(ctx context.Context, cred *Credential) error {
	err := a.dynClient.Resource(cephObjectStoreUserGVR).Namespace(a.rookNS).Delete(ctx, cred.ID, metav1.DeleteOptions{})
	if err != nil {
		return fmt.Errorf("delete CephObjectStoreUser: %w", err)
	}
	return nil
}

// sanitizeK8s converts a string to a valid K8s resource name (RFC 1123 subdomain).
func sanitizeK8s(s string) string {
	return strings.Map(func(r rune) rune {
		if (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') || r == '-' {
			return r
		}
		return '-'
	}, strings.ToLower(s))
}

