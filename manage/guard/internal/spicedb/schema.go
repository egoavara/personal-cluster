package spicedb

import (
	"context"
	"fmt"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
)

const Schema = `
definition user {}

definition group {
	relation member: user | group#member
	relation parent: group

	permission is_member = member + parent->is_member
}

definition kube_service {
	relation admin: user | group#member
	relation viewer: user | group#member
	relation blocked: user | group#member

	permission is_blocked = blocked
	permission manage = admin
	permission view = viewer + manage - is_blocked
}
`

func (c *Client) WriteSchema(ctx context.Context) error {
	_, err := c.client.WriteSchema(ctx, &v1.WriteSchemaRequest{
		Schema: Schema,
	})
	if err != nil {
		return fmt.Errorf("failed to write schema: %w", err)
	}
	return nil
}
