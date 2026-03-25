package valkey

import "time"

type Tier struct {
	Name string `json:"name"`
	RPM  int64  `json:"rpm"` // -1 = unlimited
}

type Table struct {
	Name  string `json:"name"`
	Rules []Rule `json:"rules"`
}

type Rule struct {
	Name   string     `json:"name"`
	Match  RuleMatch  `json:"match"`
	Action RuleAction `json:"action"`
}

type RuleMatch struct {
	Identity *IdentityMatch `json:"identity,omitempty"`
	SpiceDB  *SpiceDBMatch  `json:"spicedb,omitempty"`
	Domain   string         `json:"domain,omitempty"`
}

type IdentityMatch struct {
	User        string `json:"user,omitempty"`
	GroupMember string `json:"group_member,omitempty"` // shorthand for spicedb group#is_member
	Any         bool   `json:"any,omitempty"`
}

// SpiceDBMatch is a generic SpiceDB permission check.
// Subject is always user:<requestUserID> from the request context.
type SpiceDBMatch struct {
	ResourceType string `json:"resource_type"`
	ResourceID   string `json:"resource_id"`
	Permission   string `json:"permission"`
}

type RuleAction struct {
	Type  string `json:"type"`           // "apply_tier", "unlimit", "deny", "goto"
	Tier  string `json:"tier,omitempty"` // for apply_tier with specific tier
	Table string `json:"table,omitempty"` // for goto
}

type Decision struct {
	Allowed   bool
	Remaining int64
	ResetAt   time.Time
	Tier      string
	RPM       int64
}

// CachedUserRPM is the cached result of table evaluation + tier resolution for a user+domain.
type CachedUserRPM struct {
	ResultType   string `json:"result_type"`   // "deny", "unlimit", "apply_tier"
	TierName     string `json:"tier_name"`
	RPM          int64  `json:"rpm"`
	TableVersion uint64 `json:"table_version"`
}
