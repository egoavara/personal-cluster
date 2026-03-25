package ratelimit

import (
	"context"
	"time"

	"github.com/dgraph-io/ristretto/v2"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/metric"
	"go.opentelemetry.io/otel/trace"
	"go.uber.org/zap"

	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	valkeyPkg "github.com/egoavara/personal-cluster/manage/guard/internal/valkey"
)

type LimiterConfig struct {
	SlowStartDuration time.Duration
	L1MaxItems        int64
	L1TTL             time.Duration
	L2TTL             time.Duration
}

type Limiter struct {
	evaluator *Evaluator
	resolver  *Resolver
	counter   *Counter
	slowStart *SlowStart
	valkey    *valkeyPkg.Client
	logger    *zap.Logger
	tracer    trace.Tracer
	decisions metric.Int64Counter

	// UserRPM cache: (userID, domain) → CachedUserRPM, version-based invalidation
	userL1    *ristretto.Cache[string, *valkeyPkg.CachedUserRPM]
	userL1TTL time.Duration
	userL2TTL time.Duration
}

func NewLimiter(v *valkeyPkg.Client, s *spicedb.Client, cfg LimiterConfig, logger *zap.Logger) (*Limiter, error) {
	resolver, err := NewResolver(v, cfg.L1TTL, logger)
	if err != nil {
		return nil, err
	}

	userL1, err := ristretto.NewCache(&ristretto.Config[string, *valkeyPkg.CachedUserRPM]{
		NumCounters: cfg.L1MaxItems * 10,
		MaxCost:     cfg.L1MaxItems,
		BufferItems: 64,
	})
	if err != nil {
		return nil, err
	}

	meter := otel.Meter("guard")
	decisions, _ := meter.Int64Counter("guard.ratelimit.decisions",
		metric.WithDescription("Rate limit decisions"))

	return &Limiter{
		evaluator: NewEvaluator(v, s, logger),
		resolver:  resolver,
		counter:   NewCounter(v),
		slowStart: NewSlowStart(cfg.SlowStartDuration),
		valkey:    v,
		logger:    logger,
		tracer:    otel.Tracer("guard/ratelimit"),
		decisions: decisions,
		userL1:    userL1,
		userL1TTL: cfg.L1TTL,
		userL2TTL: cfg.L2TTL,
	}, nil
}

// Check evaluates rate limiting for a request.
// Uses UserRPM cache (L1+L2) with version-based invalidation.
func (l *Limiter) Check(ctx context.Context, userID, domain string) (*valkeyPkg.Decision, error) {
	ctx, span := l.tracer.Start(ctx, "ratelimit.Check")
	defer span.End()

	currentVersion := l.evaluator.Version()
	cacheKey := userID + ":" + domain

	// Try UserRPM cache
	cached := l.getUserRPM(ctx, cacheKey, currentVersion)
	if cached == nil {
		// Cache miss or version stale — evaluate from scratch
		var err error
		cached, err = l.evaluateAndCache(ctx, userID, domain, cacheKey, currentVersion)
		if err != nil {
			l.logger.Error("evaluation failed", zap.Error(err))
			return &valkeyPkg.Decision{Allowed: true}, nil // Fail open
		}
	}

	span.SetAttributes(
		attribute.String("ratelimit.result_type", cached.ResultType),
		attribute.String("ratelimit.tier", cached.TierName),
		attribute.Int64("ratelimit.rpm", cached.RPM),
	)

	switch cached.ResultType {
	case "deny":
		l.decisions.Add(ctx, 1, metric.WithAttributes(
			attribute.String("decision", "deny"),
			attribute.String("domain", domain),
		))
		l.logger.Info("ratelimit",
			zap.String("user", userID),
			zap.String("domain", domain),
			zap.String("decision", "deny"),
			zap.String("tier", "deny"),
		)
		return &valkeyPkg.Decision{Allowed: false, Tier: "deny"}, nil

	case "unlimit":
		l.decisions.Add(ctx, 1, metric.WithAttributes(
			attribute.String("decision", "unlimit"),
			attribute.String("domain", domain),
		))
		l.logger.Info("ratelimit",
			zap.String("user", userID),
			zap.String("domain", domain),
			zap.String("decision", "unlimit"),
			zap.String("tier", "unlimited"),
		)
		return &valkeyPkg.Decision{Allowed: true, Remaining: -1, Tier: "unlimited"}, nil

	case "apply_tier":
		multiplier := l.slowStart.Multiplier()
		allowed, remaining, resetAt, err := l.counter.Check(ctx, userID, cached.RPM, multiplier)
		if err != nil {
			l.logger.Error("counter check failed", zap.Error(err))
			return &valkeyPkg.Decision{Allowed: true}, nil // Fail open
		}

		decision := "allow"
		if !allowed {
			decision = "rate_limited"
		}
		l.decisions.Add(ctx, 1, metric.WithAttributes(
			attribute.String("decision", decision),
			attribute.String("tier", cached.TierName),
			attribute.String("domain", domain),
		))
		l.logger.Info("ratelimit",
			zap.String("user", userID),
			zap.String("domain", domain),
			zap.String("decision", decision),
			zap.String("tier", cached.TierName),
			zap.Int64("rpm", cached.RPM),
			zap.Int64("remaining", remaining),
		)

		return &valkeyPkg.Decision{
			Allowed:   allowed,
			Remaining: remaining,
			ResetAt:   resetAt,
			Tier:      cached.TierName,
			RPM:       cached.RPM,
		}, nil
	}

	return &valkeyPkg.Decision{Allowed: true}, nil
}

// getUserRPM checks L1 then L2 cache. Returns nil if miss or version mismatch.
func (l *Limiter) getUserRPM(ctx context.Context, cacheKey string, currentVersion uint64) *valkeyPkg.CachedUserRPM {
	// L1
	if cached, ok := l.userL1.Get(cacheKey); ok {
		if cached.TableVersion == currentVersion {
			return cached
		}
		// Version mismatch — stale
		l.userL1.Del(cacheKey)
	}

	// L2
	parts := splitCacheKey(cacheKey)
	if len(parts) != 2 {
		return nil
	}
	cached, err := l.valkey.GetUserRPM(ctx, parts[0], parts[1])
	if err != nil {
		return nil
	}
	if cached.TableVersion != currentVersion {
		return nil // Version mismatch
	}

	// Promote to L1
	l.userL1.SetWithTTL(cacheKey, cached, 1, l.userL1TTL)
	return cached
}

// evaluateAndCache runs the full evaluation pipeline and caches the result.
func (l *Limiter) evaluateAndCache(ctx context.Context, userID, domain, cacheKey string, currentVersion uint64) (*valkeyPkg.CachedUserRPM, error) {
	result, err := l.evaluator.Evaluate(ctx, userID, domain)
	if err != nil {
		return nil, err
	}

	cached := &valkeyPkg.CachedUserRPM{
		ResultType:   result.Type,
		TableVersion: currentVersion,
	}

	if result.Type == "apply_tier" {
		tierName := result.TierName
		if tierName == "" {
			tierName = "default"
		}
		rpm, err := l.resolver.Resolve(ctx, tierName)
		if err != nil {
			return nil, err
		}
		cached.TierName = tierName
		cached.RPM = rpm
	}

	// Store in L1 + L2
	l.userL1.SetWithTTL(cacheKey, cached, 1, l.userL1TTL)
	_ = l.valkey.SetUserRPM(ctx, userID, domain, cached, l.userL2TTL)

	return cached, nil
}

// splitCacheKey splits "userID:domain" back into parts.
func splitCacheKey(key string) []string {
	for i := 0; i < len(key); i++ {
		if key[i] == ':' {
			return []string{key[:i], key[i+1:]}
		}
	}
	return nil
}

func (l *Limiter) Evaluator() *Evaluator {
	return l.evaluator
}

func (l *Limiter) Resolver() *Resolver {
	return l.resolver
}

func (l *Limiter) SlowStart() *SlowStart {
	return l.slowStart
}

func (l *Limiter) Close() {
	l.evaluator.Close()
	l.resolver.Close()
	l.userL1.Close()
}
