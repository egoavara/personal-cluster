package valkey

import "time"

type Tier struct {
	Name string `json:"name"`
	RPM  int64  `json:"rpm"` // -1 = unlimited
}

type ResolvedTier struct {
	TierName string `json:"tier_name"`
	RPM      int64  `json:"rpm"`
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
	Domain   string         `json:"domain,omitempty"`
}

type IdentityMatch struct {
	User        string `json:"user,omitempty"`
	GroupMember string `json:"group_member,omitempty"`
	Any         bool   `json:"any,omitempty"`
}

type RuleAction struct {
	Type  string `json:"type"`            // "apply_tier", "unlimit", "deny", "goto"
	Tier  string `json:"tier,omitempty"`   // for apply_tier with specific tier
	Table string `json:"table,omitempty"`  // for goto
}

type Decision struct {
	Allowed   bool
	Remaining int64
	ResetAt   time.Time
	Tier      string
	RPM       int64
}
