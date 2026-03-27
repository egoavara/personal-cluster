package spicedb

import (
	"context"
	"fmt"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
	"github.com/authzed/authzed-go/v1"
	"github.com/authzed/grpcutil"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type Client struct {
	client *authzed.Client
}

func NewClient(endpoint, presharedKey string) (*Client, error) {
	client, err := authzed.NewClient(
		endpoint,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpcutil.WithInsecureBearerToken(presharedKey),
	)
	if err != nil {
		return nil, fmt.Errorf("connect to spicedb: %w", err)
	}
	return &Client{client: client}, nil
}

// CheckTemplatePermission checks if a user can use a template.
func (c *Client) CheckTemplatePermission(ctx context.Context, templateID, username string) (bool, error) {
	resp, err := c.client.CheckPermission(ctx, &v1.CheckPermissionRequest{
		Resource:   &v1.ObjectReference{ObjectType: "template", ObjectId: templateID},
		Permission: "use",
		Subject:    &v1.SubjectReference{Object: &v1.ObjectReference{ObjectType: "user", ObjectId: username}},
		Consistency: &v1.Consistency{
			Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true},
		},
	})
	if err != nil {
		return false, fmt.Errorf("check template permission: %w", err)
	}
	return resp.Permissionship == v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION, nil
}

// ListPermittedTemplates returns template IDs the user can use from the given candidates.
func (c *Client) ListPermittedTemplates(ctx context.Context, username string, templateIDs []string) ([]string, error) {
	var permitted []string
	for _, tid := range templateIDs {
		ok, err := c.CheckTemplatePermission(ctx, tid, username)
		if err != nil {
			return nil, err
		}
		if ok {
			permitted = append(permitted, tid)
		}
	}
	return permitted, nil
}

// Relationship represents a SpiceDB relationship (user ↔ template).
type Relationship struct {
	TemplateID string `json:"templateId"`
	UserID     string `json:"userId"`
	Relation   string `json:"relation"`
}

// WriteRelationship creates a relationship between a user and a template.
func (c *Client) WriteRelationship(ctx context.Context, templateID, userID, relation string) error {
	if relation == "" {
		relation = "user"
	}
	_, err := c.client.WriteRelationships(ctx, &v1.WriteRelationshipsRequest{
		Updates: []*v1.RelationshipUpdate{
			{
				Operation: v1.RelationshipUpdate_OPERATION_TOUCH,
				Relationship: &v1.Relationship{
					Resource: &v1.ObjectReference{ObjectType: "template", ObjectId: templateID},
					Relation: relation,
					Subject:  &v1.SubjectReference{Object: &v1.ObjectReference{ObjectType: "user", ObjectId: userID}},
				},
			},
		},
	})
	if err != nil {
		return fmt.Errorf("write relationship: %w", err)
	}
	return nil
}

// DeleteRelationship removes a relationship between a user and a template.
func (c *Client) DeleteRelationship(ctx context.Context, templateID, userID, relation string) error {
	if relation == "" {
		relation = "user"
	}
	_, err := c.client.WriteRelationships(ctx, &v1.WriteRelationshipsRequest{
		Updates: []*v1.RelationshipUpdate{
			{
				Operation: v1.RelationshipUpdate_OPERATION_DELETE,
				Relationship: &v1.Relationship{
					Resource: &v1.ObjectReference{ObjectType: "template", ObjectId: templateID},
					Relation: relation,
					Subject:  &v1.SubjectReference{Object: &v1.ObjectReference{ObjectType: "user", ObjectId: userID}},
				},
			},
		},
	})
	if err != nil {
		return fmt.Errorf("delete relationship: %w", err)
	}
	return nil
}

// ListRelationships returns all relationships for templates.
func (c *Client) ListRelationships(ctx context.Context) ([]Relationship, error) {
	stream, err := c.client.ReadRelationships(ctx, &v1.ReadRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType: "template",
		},
		Consistency: &v1.Consistency{
			Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true},
		},
	})
	if err != nil {
		return nil, fmt.Errorf("read relationships: %w", err)
	}

	var result []Relationship
	for {
		resp, err := stream.Recv()
		if err != nil {
			break
		}
		rel := resp.GetRelationship()
		if rel == nil {
			continue
		}
		result = append(result, Relationship{
			TemplateID: rel.GetResource().GetObjectId(),
			UserID:     rel.GetSubject().GetObject().GetObjectId(),
			Relation:   rel.GetRelation(),
		})
	}
	return result, nil
}

// WritePATOwner creates a pat:<patID>#owner@user:<owner> relationship.
func (c *Client) WritePATOwner(ctx context.Context, patID, owner string) error {
	_, err := c.client.WriteRelationships(ctx, &v1.WriteRelationshipsRequest{
		Updates: []*v1.RelationshipUpdate{
			{
				Operation:    v1.RelationshipUpdate_OPERATION_TOUCH,
				Relationship: rel("pat", patID, "owner", "user", owner),
			},
		},
	})
	if err != nil {
		return fmt.Errorf("write pat owner: %w", err)
	}
	return nil
}

// WritePATTemplateFilter creates a template:<templateID>#pat_filter@pat:<patID> relationship.
func (c *Client) WritePATTemplateFilter(ctx context.Context, templateID, patID string) error {
	_, err := c.client.WriteRelationships(ctx, &v1.WriteRelationshipsRequest{
		Updates: []*v1.RelationshipUpdate{
			{
				Operation:    v1.RelationshipUpdate_OPERATION_TOUCH,
				Relationship: rel("template", templateID, "pat_filter", "pat", patID),
			},
		},
	})
	if err != nil {
		return fmt.Errorf("write pat template filter: %w", err)
	}
	return nil
}

// DeletePATRelationships removes all SpiceDB relationships for a PAT:
// - pat:<patID>#owner
// - template:*#pat_filter@pat:<patID>
func (c *Client) DeletePATRelationships(ctx context.Context, patID string) error {
	// Delete the owner relationship
	_, err := c.client.DeleteRelationships(ctx, &v1.DeleteRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType:       "pat",
			OptionalResourceId: patID,
			OptionalRelation:   "owner",
		},
	})
	if err != nil {
		return fmt.Errorf("delete pat owner: %w", err)
	}

	// Delete all pat_filter relationships pointing to this PAT
	_, err = c.client.DeleteRelationships(ctx, &v1.DeleteRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType:     "template",
			OptionalRelation: "pat_filter",
			OptionalSubjectFilter: &v1.SubjectFilter{
				SubjectType:       "pat",
				OptionalSubjectId: patID,
			},
		},
	})
	if err != nil {
		return fmt.Errorf("delete pat template filters: %w", err)
	}
	return nil
}

// CheckPATTemplateFilter checks if a PAT has pat_filter on a template.
func (c *Client) CheckPATTemplateFilter(ctx context.Context, templateID, patID string) (bool, error) {
	stream, err := c.client.ReadRelationships(ctx, &v1.ReadRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType:       "template",
			OptionalResourceId: templateID,
			OptionalRelation:   "pat_filter",
			OptionalSubjectFilter: &v1.SubjectFilter{
				SubjectType:       "pat",
				OptionalSubjectId: patID,
			},
		},
		Consistency: &v1.Consistency{Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true}},
	})
	if err != nil {
		return false, fmt.Errorf("check pat template filter: %w", err)
	}
	_, err = stream.Recv()
	return err == nil, nil
}

// ResolvePATOwner reads the owner of a PAT from SpiceDB.
func (c *Client) ResolvePATOwner(ctx context.Context, patID string) (string, bool, error) {
	stream, err := c.client.ReadRelationships(ctx, &v1.ReadRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{
			ResourceType:       "pat",
			OptionalResourceId: patID,
			OptionalRelation:   "owner",
		},
		Consistency: &v1.Consistency{Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true}},
	})
	if err != nil {
		return "", false, fmt.Errorf("resolve pat owner: %w", err)
	}
	r, err := stream.Recv()
	if err != nil {
		return "", false, nil
	}
	return r.Relationship.Subject.Object.ObjectId, true, nil
}

// ListPATFilteredTemplates returns template IDs from candidates that a PAT is filtered to.
func (c *Client) ListPATFilteredTemplates(ctx context.Context, patID string, candidateIDs []string) ([]string, error) {
	var filtered []string
	for _, tid := range candidateIDs {
		ok, err := c.CheckPATTemplateFilter(ctx, tid, patID)
		if err != nil {
			return nil, err
		}
		if ok {
			filtered = append(filtered, tid)
		}
	}
	return filtered, nil
}

func rel(resType, resID, relation, subType, subID string) *v1.Relationship {
	return &v1.Relationship{
		Resource: &v1.ObjectReference{ObjectType: resType, ObjectId: resID},
		Relation: relation,
		Subject:  &v1.SubjectReference{Object: &v1.ObjectReference{ObjectType: subType, ObjectId: subID}},
	}
}

// CheckAdmin checks if a user is an admin (organization:default#admin@user:<username>).
func (c *Client) CheckAdmin(ctx context.Context, username string) (bool, error) {
	resp, err := c.client.CheckPermission(ctx, &v1.CheckPermissionRequest{
		Resource:   &v1.ObjectReference{ObjectType: "organization", ObjectId: "default"},
		Permission: "admin",
		Subject:    &v1.SubjectReference{Object: &v1.ObjectReference{ObjectType: "user", ObjectId: username}},
		Consistency: &v1.Consistency{
			Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true},
		},
	})
	if err != nil {
		return false, nil // permission check failure = not admin
	}
	return resp.Permissionship == v1.CheckPermissionResponse_PERMISSIONSHIP_HAS_PERMISSION, nil
}
