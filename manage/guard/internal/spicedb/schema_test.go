package spicedb

import (
	"strings"
	"testing"
)

func TestSchema_ContainsDefinitions(t *testing.T) {
	for _, d := range []string{"definition user", "definition group", "definition kube_service"} {
		if !strings.Contains(Schema, d) {
			t.Errorf("Schema missing %q", d)
		}
	}
}

func TestSchema_NoCaveat(t *testing.T) {
	if strings.Contains(Schema, "caveat") {
		t.Error("Schema should not contain caveat")
	}
}

func TestSchema_NoOrganization(t *testing.T) {
	if strings.Contains(Schema, "definition organization") {
		t.Error("Schema should not contain organization definition")
	}
}

func TestSchema_NoApp(t *testing.T) {
	if strings.Contains(Schema, "definition app") {
		t.Error("Schema should not contain app definition")
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

func TestSchema_KubeServiceDefinition(t *testing.T) {
	section := extractDefinition(Schema, "definition kube_service")
	if section == "" {
		t.Fatal("could not extract kube_service definition")
	}
	for _, s := range []string{"relation admin:", "relation viewer:", "relation blocked:", "permission is_blocked", "permission manage", "permission view"} {
		if !strings.Contains(section, s) {
			t.Errorf("kube_service missing %q", s)
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
