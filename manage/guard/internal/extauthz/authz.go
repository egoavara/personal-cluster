package extauthz

import (
	"context"
	"fmt"
	"strings"
	"time"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
	"github.com/egoavara/personal-cluster/manage/guard/internal/config"
	guardotel "github.com/egoavara/personal-cluster/manage/guard/internal/otel"
	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	"github.com/jellydator/ttlcache/v3"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/metric"
	"go.opentelemetry.io/otel/trace"
	"go.uber.org/zap"
)

type cacheEntry struct {
	allowed   bool
	createdAt time.Time
}

// Authorizer checks permissions against SpiceDB with local caching.
// TTI: Get() auto-touches item TTL on hit (idle timeout).
// TTL: absolute max lifetime checked manually on Get.
type Authorizer struct {
	spice           *spicedb.Client
	cache           *ttlcache.Cache[string, cacheEntry]
	ttl             time.Duration
	logger          *zap.Logger
	tracer          trace.Tracer
	decisions       metric.Int64Counter
	hostResourceMap map[string]string
}

// NewAuthorizer creates a new SpiceDB authorizer with TTL+TTI cache.
// TTI = cache item TTL (auto-reset on access). TTL = absolute max lifetime.
func NewAuthorizer(spice *spicedb.Client, cacheCfg config.CacheConfig, hostResourceMap map[string]string, logger *zap.Logger) *Authorizer {
	// ttlcache TTL acts as TTI: Get() resets the timer on each access.
	cache := ttlcache.New[string, cacheEntry](
		ttlcache.WithTTL[string, cacheEntry](cacheCfg.TTI),
		ttlcache.WithCapacity[string, cacheEntry](uint64(cacheCfg.MaxItems)),
	)
	go cache.Start()

	logger.Info("authz cache initialized",
		zap.Duration("ttl", cacheCfg.TTL),
		zap.Duration("tti", cacheCfg.TTI),
		zap.Int("maxItems", cacheCfg.MaxItems),
	)

	meter := guardotel.Meter()
	decisions, _ := meter.Int64Counter("guard.authz.decisions",
		metric.WithDescription("Number of authorization decisions"),
	)

	return &Authorizer{
		spice:           spice,
		cache:           cache,
		ttl:             cacheCfg.TTL,
		logger:          logger,
		tracer:          otel.Tracer("guard"),
		decisions:       decisions,
		hostResourceMap: hostResourceMap,
	}
}

// Stop stops the cache background goroutine.
func (a *Authorizer) Stop() {
	a.cache.Stop()
}

// CheckAccess verifies that the user has "view" permission on the kube_service
// resource mapped from the request host. Results are cached with TTL+TTI.
func (a *Authorizer) CheckAccess(ctx context.Context, host, username string) (bool, error) {
	ctx, span := a.tracer.Start(ctx, "authz.CheckAccess",
		trace.WithAttributes(
			attribute.String("authz.user", username),
			attribute.String("authz.host", host),
		),
	)
	defer span.End()

	resourceID := a.hostToResourceID(host)
	if resourceID == "" {
		span.SetStatus(codes.Error, "cannot map host to resource")
		return false, fmt.Errorf("cannot map host %q to resource", host)
	}
	span.SetAttributes(attribute.String("authz.resource", "kube_service:"+resourceID))

	// Cache key: user + resource
	cacheKey := username + ":kube_service:" + resourceID

	// Check cache (Get auto-touches = TTI reset)
	if item := a.cache.Get(cacheKey); item != nil {
		entry := item.Value()
		// TTL: absolute max lifetime
		if time.Since(entry.createdAt) < a.ttl {
			span.SetAttributes(attribute.Bool("authz.cache_hit", true))
			a.recordDecision(ctx, entry.allowed, resourceID)
			return entry.allowed, nil
		}
		// TTL expired — delete stale entry
		a.cache.Delete(cacheKey)
	}
	span.SetAttributes(attribute.Bool("authz.cache_hit", false))

	// Cache miss — query SpiceDB
	result, err := a.spice.CheckPermission(ctx,
		spicedb.ObjectRef("kube_service", resourceID),
		"view",
		spicedb.SubjectRef("user", username),
	)
	if err != nil {
		span.SetStatus(codes.Error, "spicedb check")
		span.RecordError(err)
		a.logger.Error("SpiceDB check failed",
			zap.String("user", username),
			zap.String("host", host),
			zap.String("resource", "kube_service:"+resourceID),
			zap.Error(err),
		)
		return false, fmt.Errorf("spicedb check: %w", err)
	}

	allowed := result == v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION

	// Cache the result
	a.cache.Set(cacheKey, cacheEntry{allowed: allowed, createdAt: time.Now()}, ttlcache.DefaultTTL)

	a.recordDecision(ctx, allowed, resourceID)
	span.SetAttributes(attribute.Bool("authz.allowed", allowed))

	if !allowed {
		a.logger.Warn("access denied",
			zap.String("user", username),
			zap.String("host", host),
			zap.String("resource", "kube_service:"+resourceID),
		)
	}

	return allowed, nil
}

func (a *Authorizer) recordDecision(ctx context.Context, allowed bool, resource string) {
	decision := "denied"
	if allowed {
		decision = "allowed"
	}
	a.decisions.Add(ctx, 1,
		metric.WithAttributes(
			attribute.String("decision", decision),
			attribute.String("resource", resource),
		),
	)
}

// hostToResourceID looks up the resource ID from the host-to-resource map.
func (a *Authorizer) hostToResourceID(host string) string {
	// Strip port if present
	if idx := strings.LastIndex(host, ":"); idx != -1 {
		host = host[:idx]
	}
	return a.hostResourceMap[host]
}
