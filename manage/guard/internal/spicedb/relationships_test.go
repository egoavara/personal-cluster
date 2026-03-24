package spicedb

import (
	"testing"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
)

func TestTouch(t *testing.T) {
	update := Touch("kube_service", "telemetry/grafana", "viewer", "user", "alice")

	if update.Operation != v1.RelationshipUpdate_OPERATION_TOUCH {
		t.Errorf("Touch operation = %v, want OPERATION_TOUCH", update.Operation)
	}
	rel := update.Relationship
	if rel.Resource.ObjectType != "kube_service" || rel.Resource.ObjectId != "telemetry/grafana" {
		t.Errorf("resource = %s:%s, want kube_service:telemetry/grafana", rel.Resource.ObjectType, rel.Resource.ObjectId)
	}
	if rel.Relation != "viewer" {
		t.Errorf("relation = %q, want %q", rel.Relation, "viewer")
	}
	if rel.Subject.Object.ObjectType != "user" || rel.Subject.Object.ObjectId != "alice" {
		t.Errorf("subject = %s:%s, want user:alice", rel.Subject.Object.ObjectType, rel.Subject.Object.ObjectId)
	}
}

func TestDelete(t *testing.T) {
	update := Delete("kube_service", "telemetry/grafana", "blocked", "user", "bob")

	if update.Operation != v1.RelationshipUpdate_OPERATION_DELETE {
		t.Errorf("Delete operation = %v, want OPERATION_DELETE", update.Operation)
	}
}

func TestObjectRef(t *testing.T) {
	ref := ObjectRef("kube_service", "telemetry/grafana")
	if ref.ObjectType != "kube_service" || ref.ObjectId != "telemetry/grafana" {
		t.Errorf("ObjectRef = %s:%s, want kube_service:telemetry/grafana", ref.ObjectType, ref.ObjectId)
	}
}

func TestSubjectRef(t *testing.T) {
	ref := SubjectRef("user", "alice")
	if ref.Object.ObjectType != "user" || ref.Object.ObjectId != "alice" {
		t.Errorf("SubjectRef = %s:%s, want user:alice", ref.Object.ObjectType, ref.Object.ObjectId)
	}
}
