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
