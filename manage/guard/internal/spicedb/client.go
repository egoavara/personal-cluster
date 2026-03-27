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
		return nil, fmt.Errorf("failed to create spicedb client: %w", err)
	}
	return &Client{client: client}, nil
}

func (c *Client) Permissions() v1.PermissionsServiceClient {
	return c.client.PermissionsServiceClient
}

func (c *Client) Schema() v1.SchemaServiceClient {
	return c.client.SchemaServiceClient
}

func (c *Client) CheckPermission(ctx context.Context, resource *v1.ObjectReference, permission string, subject *v1.SubjectReference) (v1.CheckPermissionResponse_Permissionship, error) {
	req := &v1.CheckPermissionRequest{
		Resource:   resource,
		Permission: permission,
		Subject:    subject,
	}
	resp, err := c.client.CheckPermission(ctx, req)
	if err != nil {
		return v1.CheckPermissionResponse_PERMISSIONSHIP_UNSPECIFIED, err
	}
	return resp.Permissionship, nil
}

// ReadSchema returns the current SpiceDB schema text.
func (c *Client) ReadSchema(ctx context.Context) (string, error) {
	resp, err := c.client.ReadSchema(ctx, &v1.ReadSchemaRequest{})
	if err != nil {
		return "", fmt.Errorf("read schema: %w", err)
	}
	return resp.SchemaText, nil
}

// CountRelationships reads all relationships of a given type and returns the count.
func (c *Client) CountRelationships(ctx context.Context, resourceType string) (int, error) {
	stream, err := c.client.ReadRelationships(ctx, &v1.ReadRelationshipsRequest{
		RelationshipFilter: &v1.RelationshipFilter{ResourceType: resourceType},
		Consistency:        &v1.Consistency{Requirement: &v1.Consistency_FullyConsistent{FullyConsistent: true}},
	})
	if err != nil {
		return 0, err
	}
	count := 0
	for {
		_, err := stream.Recv()
		if err != nil {
			break
		}
		count++
	}
	return count, nil
}

func ObjectRef(objectType, objectID string) *v1.ObjectReference {
	return &v1.ObjectReference{
		ObjectType: objectType,
		ObjectId:   objectID,
	}
}

func SubjectRef(objectType, objectID string) *v1.SubjectReference {
	return &v1.SubjectReference{
		Object: ObjectRef(objectType, objectID),
	}
}
