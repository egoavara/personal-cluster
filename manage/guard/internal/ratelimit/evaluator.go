package ratelimit

import (
	"context"
	"fmt"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
	"github.com/gobwas/glob"
	"go.uber.org/zap"

	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	valkeyPkg "github.com/egoavara/personal-cluster/manage/guard/internal/valkey"
)

const maxChainDepth = 10

type EvalResult struct {
	Type     string // "apply_tier", "unlimit", "deny"
	TierName string // for apply_tier
}

type Evaluator struct {
	valkey *valkeyPkg.Client
	spice  *spicedb.Client
	logger *zap.Logger
}

func NewEvaluator(v *valkeyPkg.Client, s *spicedb.Client, logger *zap.Logger) *Evaluator {
	return &Evaluator{
		valkey: v,
		spice:  s,
		logger: logger,
	}
}

func (e *Evaluator) Evaluate(ctx context.Context, userID, domain string) (*EvalResult, error) {
	return e.evaluateTable(ctx, "root", userID, domain, 0)
}

func (e *Evaluator) evaluateTable(ctx context.Context, tableName, userID, domain string, depth int) (*EvalResult, error) {
	if depth >= maxChainDepth {
		return nil, fmt.Errorf("max chain depth %d exceeded", maxChainDepth)
	}

	table, err := e.valkey.GetTable(ctx, tableName)
	if err != nil {
		return nil, fmt.Errorf("table %q not found: %w", tableName, err)
	}

	for _, rule := range table.Rules {
		matched, err := e.matchRule(ctx, &rule, userID, domain)
		if err != nil {
			e.logger.Warn("rule match error, skipping",
				zap.String("rule", rule.Name), zap.Error(err))
			continue
		}
		if !matched {
			continue
		}

		switch rule.Action.Type {
		case "unlimit":
			return &EvalResult{Type: "unlimit"}, nil
		case "deny":
			return &EvalResult{Type: "deny"}, nil
		case "apply_tier":
			return &EvalResult{Type: "apply_tier", TierName: rule.Action.Tier}, nil
		case "goto":
			return e.evaluateTable(ctx, rule.Action.Table, userID, domain, depth+1)
		default:
			e.logger.Warn("unknown action type", zap.String("type", rule.Action.Type))
		}
	}

	// No rule matched - default apply_tier
	return &EvalResult{Type: "apply_tier"}, nil
}

func (e *Evaluator) matchRule(ctx context.Context, rule *valkeyPkg.Rule, userID, domain string) (bool, error) {
	// Match identity (if specified)
	if rule.Match.Identity != nil {
		matched, err := e.matchIdentity(ctx, rule.Match.Identity, userID)
		if err != nil {
			return false, err
		}
		if !matched {
			return false, nil
		}
	}

	// Match domain (if specified)
	if rule.Match.Domain != "" {
		g, err := glob.Compile(rule.Match.Domain)
		if err != nil {
			return false, fmt.Errorf("invalid domain glob %q: %w", rule.Match.Domain, err)
		}
		if !g.Match(domain) {
			return false, nil
		}
	}

	return true, nil
}

func (e *Evaluator) matchIdentity(ctx context.Context, identity *valkeyPkg.IdentityMatch, userID string) (bool, error) {
	if identity.Any {
		return true, nil
	}
	if identity.User != "" {
		return identity.User == userID, nil
	}
	if identity.GroupMember != "" {
		// Check SpiceDB: group:<groupName>#is_member@user:<userID>
		result, err := e.spice.CheckPermission(ctx,
			spicedb.ObjectRef("group", identity.GroupMember),
			"is_member",
			spicedb.SubjectRef("user", userID),
		)
		if err != nil {
			return false, err
		}
		return result == v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION, nil
	}
	return false, nil
}
