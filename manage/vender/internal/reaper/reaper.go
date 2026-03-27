package reaper

import (
	"context"
	"time"

	"github.com/egoavara/personal-cluster/manage/vender/internal/adapter"
	"github.com/egoavara/personal-cluster/manage/vender/internal/pat"
	"github.com/egoavara/personal-cluster/manage/vender/internal/store"
	"go.uber.org/zap"
)

// Reaper periodically revokes expired credentials and PATs from backend services.
type Reaper struct {
	store     *store.Store
	adapters  map[string]adapter.Adapter
	patIssuer *pat.Issuer
	logger    *zap.Logger
	interval  time.Duration
}

func New(s *store.Store, adapters map[string]adapter.Adapter, patIssuer *pat.Issuer, logger *zap.Logger, interval time.Duration) *Reaper {
	return &Reaper{
		store:     s,
		adapters:  adapters,
		patIssuer: patIssuer,
		logger:    logger.Named("reaper"),
		interval:  interval,
	}
}

// Run blocks until ctx is cancelled, periodically revoking expired credentials.
func (r *Reaper) Run(ctx context.Context) {
	ticker := time.NewTicker(r.interval)
	defer ticker.Stop()

	// Run once immediately on start
	r.sweep(ctx)

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			r.sweep(ctx)
		}
	}
}

func (r *Reaper) sweep(ctx context.Context) {
	r.sweepCredentials(ctx)
	r.sweepPATs(ctx)
}

func (r *Reaper) sweepCredentials(ctx context.Context) {
	expired, err := r.store.ListExpired(ctx)
	if err != nil {
		r.logger.Error("list expired credentials", zap.Error(err))
		return
	}
	if len(expired) == 0 {
		return
	}

	r.logger.Info("sweeping expired credentials", zap.Int("count", len(expired)))

	for _, cred := range expired {
		a, exists := r.adapters[cred.Service]
		if !exists {
			r.logger.Warn("no adapter for expired credential",
				zap.String("id", cred.ID),
				zap.String("service", cred.Service),
			)
			// Mark revoked anyway — we can't revoke from a service we don't have an adapter for
			if err := r.store.MarkRevokedByID(ctx, cred.ID); err != nil {
				r.logger.Error("mark revoked (no adapter)", zap.String("id", cred.ID), zap.Error(err))
			}
			continue
		}

		if err := a.Revoke(ctx, cred); err != nil {
			r.logger.Error("revoke expired credential",
				zap.String("id", cred.ID),
				zap.String("service", cred.Service),
				zap.String("user", cred.Username),
				zap.Error(err),
			)
			// Don't mark revoked — retry on next sweep
			continue
		}

		if err := r.store.MarkRevokedByID(ctx, cred.ID); err != nil {
			r.logger.Error("mark revoked after successful revoke",
				zap.String("id", cred.ID),
				zap.Error(err),
			)
			continue
		}

		r.logger.Info("reaped expired credential",
			zap.String("id", cred.ID),
			zap.String("service", cred.Service),
			zap.String("user", cred.Username),
		)
	}
}

func (r *Reaper) sweepPATs(ctx context.Context) {
	expired, err := r.store.ListExpiredPATs(ctx)
	if err != nil {
		r.logger.Error("list expired PATs", zap.Error(err))
		return
	}
	if len(expired) == 0 {
		return
	}

	r.logger.Info("sweeping expired PATs", zap.Int("count", len(expired)))

	for _, p := range expired {
		// Delete Zitadel machine user
		if r.patIssuer != nil {
			if err := r.patIssuer.DeleteUser(ctx, p.ZitadelUserID); err != nil {
				r.logger.Error("delete expired pat zitadel user",
					zap.String("patId", p.ID),
					zap.Error(err),
				)
				continue // retry on next sweep
			}
		}

		// Mark revoked in DB
		if err := r.store.MarkPATRevokedByID(ctx, p.ID); err != nil {
			r.logger.Error("mark pat revoked",
				zap.String("patId", p.ID),
				zap.Error(err),
			)
			continue
		}

		r.logger.Info("reaped expired PAT",
			zap.String("patId", p.ID),
			zap.String("owner", p.Owner),
		)
	}
}
