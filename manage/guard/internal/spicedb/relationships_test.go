package spicedb

import (
	"testing"
	"time"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
)

func TestTouch(t *testing.T) {
	update := Touch("app", "grafana", "viewer", "user", "alice")

	if update.Operation != v1.RelationshipUpdate_OPERATION_TOUCH {
		t.Errorf("Touch operation = %v, want OPERATION_TOUCH", update.Operation)
	}
	rel := update.Relationship
	if rel.Resource.ObjectType != "app" || rel.Resource.ObjectId != "grafana" {
		t.Errorf("resource = %s:%s, want app:grafana", rel.Resource.ObjectType, rel.Resource.ObjectId)
	}
	if rel.Relation != "viewer" {
		t.Errorf("relation = %q, want %q", rel.Relation, "viewer")
	}
	if rel.Subject.Object.ObjectType != "user" || rel.Subject.Object.ObjectId != "alice" {
		t.Errorf("subject = %s:%s, want user:alice", rel.Subject.Object.ObjectType, rel.Subject.Object.ObjectId)
	}
}

func TestDelete(t *testing.T) {
	update := Delete("app", "grafana", "blocked", "user", "bob")

	if update.Operation != v1.RelationshipUpdate_OPERATION_DELETE {
		t.Errorf("Delete operation = %v, want OPERATION_DELETE", update.Operation)
	}
}

func TestObjectRef(t *testing.T) {
	ref := ObjectRef("app", "grafana")
	if ref.ObjectType != "app" || ref.ObjectId != "grafana" {
		t.Errorf("ObjectRef = %s:%s, want app:grafana", ref.ObjectType, ref.ObjectId)
	}
}

func TestSubjectRef(t *testing.T) {
	ref := SubjectRef("user", "alice")
	if ref.Object.ObjectType != "user" || ref.Object.ObjectId != "alice" {
		t.Errorf("SubjectRef = %s:%s, want user:alice", ref.Object.ObjectType, ref.Object.ObjectId)
	}
}

func TestBuildCaveatContext(t *testing.T) {
	before := time.Now().UTC().Truncate(time.Second)
	ctx, err := BuildCaveatContext("10.0.1.5")
	if err != nil {
		t.Fatalf("BuildCaveatContext error: %v", err)
	}
	after := time.Now().UTC().Add(time.Second).Truncate(time.Second)

	ip := ctx.Fields["client_ip"]
	if ip.GetStringValue() != "10.0.1.5" {
		t.Errorf("client_ip = %q, want %q", ip.GetStringValue(), "10.0.1.5")
	}

	ts := ctx.Fields["current_time"]
	parsedTime, err := time.Parse(time.RFC3339, ts.GetStringValue())
	if err != nil {
		t.Fatalf("failed to parse current_time: %v", err)
	}
	if parsedTime.Before(before) || parsedTime.After(after) {
		t.Errorf("current_time %v not in expected range", parsedTime)
	}
}
