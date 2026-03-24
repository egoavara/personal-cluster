package ratelimit

import (
	"context"
	"time"

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
	logger    *zap.Logger
	tracer    trace.Tracer
	decisions metric.Int64Counter
}

func NewLimiter(v *valkeyPkg.Client, s *spicedb.Client, cfg LimiterConfig, logger *zap.Logger) (*Limiter, error) {
	resolver, err := NewResolver(v, ResolverConfig{
		L1MaxItems: cfg.L1MaxItems,
		L1TTL:      cfg.L1TTL,
		L2TTL:      cfg.L2TTL,
	}, logger)
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
		logger:    logger,
		tracer:    otel.Tracer("guard/ratelimit"),
		decisions: decisions,
	}, nil
}

// Check evaluates rate limiting for a request.
// The permission parameter is the highest SpiceDB permission the user has ("manage" or "view").
func (l *Limiter) Check(ctx context.Context, userID, domain, permission string) (*valkeyPkg.Decision, error) {
	ctx, span := l.tracer.Start(ctx, "ratelimit.Check")
	defer span.End()

	// 1. Evaluate table chain
	result, err := l.evaluator.Evaluate(ctx, userID, domain)
	if err != nil {
		l.logger.Error("table evaluation failed", zap.Error(err))
		// Fail open - allow the request
		return &valkeyPkg.Decision{Allowed: true}, nil
	}

	span.SetAttributes(attribute.String("ratelimit.eval_result", result.Type))

	switch result.Type {
	case "deny":
		l.decisions.Add(ctx, 1, metric.WithAttributes(attribute.String("decision", "deny")))
		return &valkeyPkg.Decision{Allowed: false, Tier: "deny"}, nil

	case "unlimit":
		l.decisions.Add(ctx, 1, metric.WithAttributes(attribute.String("decision", "unlimit")))
		return &valkeyPkg.Decision{Allowed: true, Remaining: -1, Tier: "unlimited"}, nil

	case "apply_tier":
		var resolved *valkeyPkg.ResolvedTier
		if result.TierName != "" {
			// Specific tier forced by rule
			resolved, err = l.resolver.ResolveByName(ctx, result.TierName)
		} else {
			// Default resolution chain
			resolved, err = l.resolver.Resolve(ctx, userID, domain, permission)
		}
		if err != nil {
			l.logger.Error("tier resolution failed", zap.Error(err))
			return &valkeyPkg.Decision{Allowed: true}, nil // Fail open
		}

		span.SetAttributes(
			attribute.String("ratelimit.tier", resolved.TierName),
			attribute.Int64("ratelimit.rpm", resolved.RPM),
		)

		// Apply slow start multiplier
		multiplier := l.slowStart.Multiplier()

		// Check counter
		allowed, remaining, resetAt, err := l.counter.Check(ctx, userID, resolved.RPM, multiplier)
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
			attribute.String("tier", resolved.TierName),
		))

		return &valkeyPkg.Decision{
			Allowed:   allowed,
			Remaining: remaining,
			ResetAt:   resetAt,
			Tier:      resolved.TierName,
			RPM:       resolved.RPM,
		}, nil
	}

	return &valkeyPkg.Decision{Allowed: true}, nil
}

func (l *Limiter) Resolver() *Resolver {
	return l.resolver
}

func (l *Limiter) SlowStart() *SlowStart {
	return l.slowStart
}

func (l *Limiter) Close() {
	l.resolver.Close()
}
