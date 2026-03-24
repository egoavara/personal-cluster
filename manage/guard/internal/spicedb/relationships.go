package spicedb

import (
	"context"
	"fmt"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
)

func (c *Client) WriteRelationships(ctx context.Context, updates []*v1.RelationshipUpdate) error {
	_, err := c.client.WriteRelationships(ctx, &v1.WriteRelationshipsRequest{
		Updates: updates,
	})
	if err != nil {
		return fmt.Errorf("failed to write relationships: %w", err)
	}
	return nil
}

func (c *Client) DeleteRelationships(ctx context.Context, filter *v1.RelationshipFilter) error {
	_, err := c.client.DeleteRelationships(ctx, &v1.DeleteRelationshipsRequest{
		RelationshipFilter: filter,
	})
	if err != nil {
		return fmt.Errorf("failed to delete relationships: %w", err)
	}
	return nil
}

func Touch(resourceType, resourceID, relation, subjectType, subjectID string) *v1.RelationshipUpdate {
	return &v1.RelationshipUpdate{
		Operation: v1.RelationshipUpdate_OPERATION_TOUCH,
		Relationship: &v1.Relationship{
			Resource: ObjectRef(resourceType, resourceID),
			Relation: relation,
			Subject:  SubjectRef(subjectType, subjectID),
		},
	}
}

func Delete(resourceType, resourceID, relation, subjectType, subjectID string) *v1.RelationshipUpdate {
	return &v1.RelationshipUpdate{
		Operation: v1.RelationshipUpdate_OPERATION_DELETE,
		Relationship: &v1.Relationship{
			Resource: ObjectRef(resourceType, resourceID),
			Relation: relation,
			Subject:  SubjectRef(subjectType, subjectID),
		},
	}
}

func ResourceFilter(resourceType, resourceID string) *v1.RelationshipFilter {
	return &v1.RelationshipFilter{
		ResourceType:       resourceType,
		OptionalResourceId: resourceID,
	}
}

func ResourceRelationFilter(resourceType, resourceID, relation string) *v1.RelationshipFilter {
	return &v1.RelationshipFilter{
		ResourceType:       resourceType,
		OptionalResourceId: resourceID,
		OptionalRelation:   relation,
	}
}
