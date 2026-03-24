package ratelimit

import (
	"context"
	"time"

	"github.com/dgraph-io/ristretto/v2"
	"go.uber.org/zap"

	valkeyPkg "github.com/egoavara/personal-cluster/manage/guard/internal/valkey"
)

type ResolverConfig struct {
	L1MaxItems int64
	L1TTL      time.Duration
	L2TTL      time.Duration
}

type Resolver struct {
	valkey *valkeyPkg.Client
	l1     *ristretto.Cache[string, *valkeyPkg.ResolvedTier]
	l1TTL  time.Duration
	l2TTL  time.Duration
	logger *zap.Logger
}

func NewResolver(v *valkeyPkg.Client, cfg ResolverConfig, logger *zap.Logger) (*Resolver, error) {
	l1, err := ristretto.NewCache(&ristretto.Config[string, *valkeyPkg.ResolvedTier]{
		NumCounters: cfg.L1MaxItems * 10,
		MaxCost:     cfg.L1MaxItems,
		BufferItems: 64,
	})
	if err != nil {
		return nil, err
	}
	return &Resolver{
		valkey: v,
		l1:     l1,
		l1TTL:  cfg.L1TTL,
		l2TTL:  cfg.L2TTL,
		logger: logger,
	}, nil
}

// Resolve determines the effective rate limit tier for a user+domain combination.
// The permission parameter is the highest SpiceDB permission the user has ("manage" or "view").
func (r *Resolver) Resolve(ctx context.Context, userID, domain, permission string) (*valkeyPkg.ResolvedTier, error) {
	cacheKey := userID + ":" + domain

	// L1 hit
	if tier, ok := r.l1.Get(cacheKey); ok {
		return tier, nil
	}

	// L2 hit
	if tier, err := r.valkey.GetResolved(ctx, userID, domain); err == nil {
		r.l1.SetWithTTL(cacheKey, tier, 1, r.l1TTL)
		return tier, nil
	}

	// L3: Full resolution
	tier, err := r.resolveFromSource(ctx, userID, permission)
	if err != nil {
		return nil, err
	}

	// Store in L2 and L1
	_ = r.valkey.SetResolved(ctx, userID, domain, tier, r.l2TTL)
	r.l1.SetWithTTL(cacheKey, tier, 1, r.l1TTL)
	return tier, nil
}

// ResolveByName resolves a specific named tier (for apply_tier with explicit tier name).
func (r *Resolver) ResolveByName(ctx context.Context, tierName string) (*valkeyPkg.ResolvedTier, error) {
	tier, err := r.valkey.GetTier(ctx, tierName)
	if err != nil {
		return nil, err
	}
	return &valkeyPkg.ResolvedTier{TierName: tier.Name, RPM: tier.RPM}, nil
}

func (r *Resolver) resolveFromSource(ctx context.Context, userID, permission string) (*valkeyPkg.ResolvedTier, error) {
	// 1. Check user override (highest priority)
	if tierName, err := r.valkey.GetUserOverride(ctx, userID); err == nil {
		if tier, err := r.valkey.GetTier(ctx, tierName); err == nil {
			return &valkeyPkg.ResolvedTier{TierName: tier.Name, RPM: tier.RPM}, nil
		}
		r.logger.Warn("user override references unknown tier",
			zap.String("user", userID), zap.String("tier", tierName))
	}

	// 2. Role-tier mapping based on permission
	if permission != "" {
		if tierName, err := r.valkey.GetRoleTier(ctx, permission); err == nil {
			if tier, err := r.valkey.GetTier(ctx, tierName); err == nil {
				return &valkeyPkg.ResolvedTier{TierName: tier.Name, RPM: tier.RPM}, nil
			}
		}
	}

	// 3. Default tier
	if tier, err := r.valkey.GetTier(ctx, "default"); err == nil {
		return &valkeyPkg.ResolvedTier{TierName: tier.Name, RPM: tier.RPM}, nil
	}

	// 4. Hardcoded fallback (safety net)
	r.logger.Warn("no default tier configured, using hardcoded fallback")
	return &valkeyPkg.ResolvedTier{TierName: "default", RPM: 60}, nil
}

func (r *Resolver) InvalidateAll() {
	r.l1.Clear()
	ctx := context.Background()
	if err := r.valkey.DeleteAllResolved(ctx); err != nil {
		r.logger.Error("failed to invalidate L2 cache", zap.Error(err))
	}
}

func (r *Resolver) InvalidateUser(userID string) {
	r.l1.Clear()
	ctx := context.Background()
	if err := r.valkey.DeleteResolvedByUser(ctx, userID); err != nil {
		r.logger.Error("failed to invalidate user L2 cache", zap.Error(err))
	}
}

func (r *Resolver) Close() {
	r.l1.Close()
}
