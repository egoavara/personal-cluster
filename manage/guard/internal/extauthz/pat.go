package extauthz

import (
	"context"
	"strings"
	"time"

	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	"github.com/jellydator/ttlcache/v3"
	"go.uber.org/zap"
)

// PATResolver detects PAT machine users by prefix and resolves their owner
// from SpiceDB, with a TTL cache to avoid repeated lookups.
type PATResolver struct {
	prefix string
	spice  *spicedb.Client
	cache  *ttlcache.Cache[string, string] // machineUsername → owner
	logger *zap.Logger
}

// NewPATResolver creates a resolver that recognizes machine usernames with the
// given prefix (e.g. "vdpat_") and resolves their owner via SpiceDB.
func NewPATResolver(prefix string, spice *spicedb.Client, cacheTTL time.Duration, logger *zap.Logger) *PATResolver {
	cache := ttlcache.New[string, string](
		ttlcache.WithTTL[string, string](cacheTTL),
		ttlcache.WithCapacity[string, string](10000),
	)
	go cache.Start()

	return &PATResolver{
		prefix: prefix,
		spice:  spice,
		cache:  cache,
		logger: logger.Named("pat-resolver"),
	}
}

// Stop stops the background cache eviction goroutine.
func (p *PATResolver) Stop() {
	p.cache.Stop()
}

// IsPAT returns true if the username looks like a PAT machine user.
func (p *PATResolver) IsPAT(username string) bool {
	return strings.HasPrefix(username, p.prefix)
}

// ResolveOwner returns the owner of a PAT machine user.
// Returns (owner, true) on success, or ("", false) if not found.
func (p *PATResolver) ResolveOwner(ctx context.Context, machineUsername string) (string, bool) {
	// Check cache first
	if item := p.cache.Get(machineUsername); item != nil {
		return item.Value(), true
	}

	// The SpiceDB pat ID uses the machine username as the identifier.
	// We look up pat:<machineUsername>#owner → user:<owner>.
	owner, found, err := p.spice.ReadPATOwner(ctx, machineUsername)
	if err != nil {
		p.logger.Error("resolve PAT owner from SpiceDB",
			zap.String("machineUsername", machineUsername),
			zap.Error(err),
		)
		return "", false
	}
	if !found {
		p.logger.Debug("PAT owner not found in SpiceDB",
			zap.String("machineUsername", machineUsername),
		)
		return "", false
	}

	// Cache the result
	p.cache.Set(machineUsername, owner, ttlcache.DefaultTTL)

	p.logger.Debug("resolved PAT owner",
		zap.String("machineUsername", machineUsername),
		zap.String("owner", owner),
	)
	return owner, true
}
