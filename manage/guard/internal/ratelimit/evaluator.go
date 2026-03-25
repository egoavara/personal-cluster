package ratelimit

import (
	"context"
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"sync"
	"sync/atomic"
	"time"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
	"github.com/gobwas/glob"
	"go.uber.org/zap"

	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	valkeyPkg "github.com/egoavara/personal-cluster/manage/guard/internal/valkey"
)

const (
	maxChainDepth     = 10
	tableSyncInterval = 10 * time.Second
)

// defaultRootTable is auto-created when no "root" table exists in Valkey.
var defaultRootTable = &valkeyPkg.Table{
	Name: "root",
	Rules: []valkeyPkg.Rule{
		{
			Name:   "default-all",
			Match:  valkeyPkg.RuleMatch{Identity: &valkeyPkg.IdentityMatch{Any: true}},
			Action: valkeyPkg.RuleAction{Type: "apply_tier"},
		},
	},
}

type EvalResult struct {
	Type     string // "apply_tier", "unlimit", "deny"
	TierName string // for apply_tier
}

// cachedTable holds a table's data alongside pre-compiled glob matchers.
type cachedTable struct {
	table *valkeyPkg.Table
	hash  [sha256.Size]byte
	globs map[string]glob.Glob // domain pattern -> compiled glob
}

type Evaluator struct {
	valkey *valkeyPkg.Client
	spice  *spicedb.Client
	logger *zap.Logger

	mu      sync.RWMutex
	tables  map[string]*cachedTable
	version atomic.Uint64 // incremented on every table change

	stopSync chan struct{}
}

func NewEvaluator(v *valkeyPkg.Client, s *spicedb.Client, logger *zap.Logger) *Evaluator {
	e := &Evaluator{
		valkey:   v,
		spice:    s,
		logger:   logger,
		tables:   make(map[string]*cachedTable),
		stopSync: make(chan struct{}),
	}
	e.version.Store(1) // start at 1 so 0 is always "uninitialized"
	e.syncTables()
	go e.syncLoop()
	return e
}

// Version returns the current table version. Incremented on every detected change.
func (e *Evaluator) Version() uint64 {
	return e.version.Load()
}

func (e *Evaluator) Close() {
	close(e.stopSync)
}

func (e *Evaluator) syncLoop() {
	ticker := time.NewTicker(tableSyncInterval)
	defer ticker.Stop()
	for {
		select {
		case <-ticker.C:
			e.syncTables()
		case <-e.stopSync:
			return
		}
	}
}

func (e *Evaluator) syncTables() {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	tables, err := e.valkey.ListTables(ctx)
	if err != nil {
		e.logger.Debug("failed to sync tables from valkey", zap.Error(err))
		return
	}

	hasRoot := false
	for _, t := range tables {
		if t.Name == "root" {
			hasRoot = true
			break
		}
	}
	if !hasRoot {
		e.ensureDefaults(ctx)
		tables = append(tables, defaultRootTable)
	}

	e.mu.Lock()
	defer e.mu.Unlock()

	changed := false
	seen := make(map[string]bool, len(tables))

	for _, t := range tables {
		seen[t.Name] = true
		hash := hashTable(t)

		if existing, ok := e.tables[t.Name]; ok && existing.hash == hash {
			continue
		}

		ct := &cachedTable{
			table: t,
			hash:  hash,
			globs: compileGlobs(t, e.logger),
		}
		e.tables[t.Name] = ct
		changed = true
		e.logger.Info("table synced", zap.String("table", t.Name), zap.Int("rules", len(t.Rules)))
	}

	for name := range e.tables {
		if !seen[name] {
			delete(e.tables, name)
			changed = true
			e.logger.Info("table removed from cache", zap.String("table", name))
		}
	}

	if changed {
		e.version.Add(1)
		e.logger.Info("table version bumped", zap.Uint64("version", e.version.Load()))
	}
}

func (e *Evaluator) ensureDefaults(ctx context.Context) {
	if err := e.valkey.SetTable(ctx, defaultRootTable); err != nil {
		e.logger.Warn("failed to create default root table", zap.Error(err))
	} else {
		e.logger.Info("created default root table")
	}

	if _, err := e.valkey.GetTier(ctx, "default"); err != nil {
		defaultTier := &valkeyPkg.Tier{Name: "default", RPM: 100}
		if err := e.valkey.SetTier(ctx, defaultTier); err != nil {
			e.logger.Warn("failed to create default tier", zap.Error(err))
		} else {
			e.logger.Info("created default tier", zap.Int64("rpm", 100))
		}
	}
}

func hashTable(t *valkeyPkg.Table) [sha256.Size]byte {
	data, _ := json.Marshal(t)
	return sha256.Sum256(data)
}

func compileGlobs(t *valkeyPkg.Table, logger *zap.Logger) map[string]glob.Glob {
	globs := make(map[string]glob.Glob)
	for _, rule := range t.Rules {
		if rule.Match.Domain == "" {
			continue
		}
		if _, ok := globs[rule.Match.Domain]; ok {
			continue
		}
		g, err := glob.Compile(rule.Match.Domain)
		if err != nil {
			logger.Warn("invalid domain glob, skipping",
				zap.String("pattern", rule.Match.Domain), zap.Error(err))
			continue
		}
		globs[rule.Match.Domain] = g
	}
	return globs
}

func (e *Evaluator) Evaluate(ctx context.Context, userID, domain string) (*EvalResult, error) {
	return e.evaluateTable(ctx, "root", userID, domain, 0)
}

func (e *Evaluator) evaluateTable(ctx context.Context, tableName, userID, domain string, depth int) (*EvalResult, error) {
	if depth >= maxChainDepth {
		return nil, fmt.Errorf("max chain depth %d exceeded", maxChainDepth)
	}

	e.mu.RLock()
	ct, ok := e.tables[tableName]
	e.mu.RUnlock()

	if !ok {
		return nil, fmt.Errorf("table %q not found in local cache", tableName)
	}

	for _, rule := range ct.table.Rules {
		matched, err := e.matchRule(ctx, ct, &rule, userID, domain)
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

	return &EvalResult{Type: "apply_tier"}, nil
}

func (e *Evaluator) matchRule(ctx context.Context, ct *cachedTable, rule *valkeyPkg.Rule, userID, domain string) (bool, error) {
	// All conditions are AND — every specified field must match.

	if rule.Match.Identity != nil {
		matched, err := e.matchIdentity(ctx, rule.Match.Identity, userID)
		if err != nil {
			return false, err
		}
		if !matched {
			return false, nil
		}
	}

	if rule.Match.SpiceDB != nil {
		matched, err := e.matchSpiceDB(ctx, rule.Match.SpiceDB, userID)
		if err != nil {
			return false, err
		}
		if !matched {
			return false, nil
		}
	}

	if rule.Match.Domain != "" {
		g, ok := ct.globs[rule.Match.Domain]
		if !ok {
			return false, fmt.Errorf("glob not compiled for pattern %q", rule.Match.Domain)
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

func (e *Evaluator) matchSpiceDB(ctx context.Context, match *valkeyPkg.SpiceDBMatch, userID string) (bool, error) {
	result, err := e.spice.CheckPermission(ctx,
		spicedb.ObjectRef(match.ResourceType, match.ResourceID),
		match.Permission,
		spicedb.SubjectRef("user", userID),
	)
	if err != nil {
		return false, err
	}
	return result == v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION, nil
}
