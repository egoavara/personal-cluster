package dashboard

import (
	"context"

	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	"go.uber.org/zap"
)

// OverviewStats holds dashboard overview statistics.
type OverviewStats struct {
	ServicePolicyCount int
	GroupPolicyCount   int
	TotalPolicyCount   int
}

// fetchOverviewStats queries SpiceDB for relationship counts by type.
func fetchOverviewStats(ctx context.Context, spice *spicedb.Client, logger *zap.Logger) *OverviewStats {
	stats := &OverviewStats{}

	svcCount, err := spice.CountRelationships(ctx, "kube_service")
	if err != nil {
		logger.Warn("failed to count kube_service relationships", zap.Error(err))
	} else {
		stats.ServicePolicyCount = svcCount
	}

	grpCount, err := spice.CountRelationships(ctx, "group")
	if err != nil {
		logger.Warn("failed to count group relationships", zap.Error(err))
	} else {
		stats.GroupPolicyCount = grpCount
	}

	stats.TotalPolicyCount = stats.ServicePolicyCount + stats.GroupPolicyCount

	return stats
}
