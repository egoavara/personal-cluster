package spicedb

import (
	"strings"
	"testing"
)

func TestSchema_ContainsCaveat(t *testing.T) {
	if !strings.Contains(Schema, "caveat full_policy(") {
		t.Error("Schema missing caveat full_policy")
	}
}

func TestSchema_ContainsDefinitions(t *testing.T) {
	for _, d := range []string{"definition user", "definition group", "definition organization", "definition app"} {
		if !strings.Contains(Schema, d) {
			t.Errorf("Schema missing %q", d)
		}
	}
}

func TestSchema_NoK8sDefinitions(t *testing.T) {
	for _, d := range []string{"definition namespace", "definition pod", "definition deployment", "definition service", "definition replicaset"} {
		if strings.Contains(Schema, d) {
			t.Errorf("Schema should not contain K8s definition %q", d)
		}
	}
}

func TestSchema_GroupHierarchy(t *testing.T) {
	groupSection := extractDefinition(Schema, "definition group")
	if groupSection == "" {
		t.Fatal("could not extract group definition")
	}
	if !strings.Contains(groupSection, "relation parent: group") {
		t.Error("group missing parent relation for hierarchy")
	}
	if !strings.Contains(groupSection, "permission is_member") {
		t.Error("group missing is_member permission")
	}
}

func TestSchema_AppDefinition(t *testing.T) {
	appSection := extractDefinition(Schema, "definition app")
	if appSection == "" {
		t.Fatal("could not extract app definition")
	}
	for _, s := range []string{"relation org:", "relation admin:", "relation viewer:", "relation blocked:", "permission is_blocked", "permission manage", "permission view"} {
		if !strings.Contains(appSection, s) {
			t.Errorf("app missing %q", s)
		}
	}
}

func TestSchema_OrganizationDefinition(t *testing.T) {
	orgSection := extractDefinition(Schema, "definition organization")
	if orgSection == "" {
		t.Fatal("could not extract organization definition")
	}
	for _, s := range []string{"relation admin:", "relation member:", "permission manage", "permission is_member"} {
		if !strings.Contains(orgSection, s) {
			t.Errorf("organization missing %q", s)
		}
	}
}

func extractDefinition(schema, defStart string) string {
	idx := strings.Index(schema, defStart)
	if idx == -1 {
		return ""
	}
	rest := schema[idx:]
	nextDef := strings.Index(rest[1:], "\ndefinition ")
	if nextDef == -1 {
		return rest
	}
	return rest[:nextDef+1]
}
