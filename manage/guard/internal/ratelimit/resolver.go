package ratelimit

import (
	"context"
	"time"

	"github.com/dgraph-io/ristretto/v2"
	"go.uber.org/zap"

	valkeyPkg "github.com/egoavara/personal-cluster/manage/guard/internal/valkey"
)

// Resolver is a simple tier name → RPM lookup with L1 cache.
// Tiers are few and rarely change, so L1-only is sufficient.
type Resolver struct {
	valkey *valkeyPkg.Client
	l1     *ristretto.Cache[string, int64] // tierName -> RPM
	l1TTL  time.Duration
	logger *zap.Logger
}

func NewResolver(v *valkeyPkg.Client, l1TTL time.Duration, logger *zap.Logger) (*Resolver, error) {
	l1, err := ristretto.NewCache(&ristretto.Config[string, int64]{
		NumCounters: 1000, // tiers are few
		MaxCost:     100,
		BufferItems: 64,
	})
	if err != nil {
		return nil, err
	}
	return &Resolver{
		valkey: v,
		l1:     l1,
		l1TTL:  l1TTL,
		logger: logger,
	}, nil
}

// Resolve looks up the RPM for a tier by name.
func (r *Resolver) Resolve(ctx context.Context, tierName string) (int64, error) {
	if rpm, ok := r.l1.Get(tierName); ok {
		return rpm, nil
	}

	tier, err := r.valkey.GetTier(ctx, tierName)
	if err != nil {
		if tierName != "default" {
			r.logger.Warn("tier not found, falling back to default", zap.String("tier", tierName))
			return r.Resolve(ctx, "default")
		}
		r.logger.Warn("no default tier configured, using hardcoded fallback")
		return 100, nil
	}

	r.l1.SetWithTTL(tierName, tier.RPM, 1, r.l1TTL)
	return tier.RPM, nil
}

func (r *Resolver) Invalidate(tierName string) {
	r.l1.Del(tierName)
}

func (r *Resolver) InvalidateAll() {
	r.l1.Clear()
}

func (r *Resolver) Close() {
	r.l1.Close()
}
