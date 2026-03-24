package spicedb

import (
	"context"
	"fmt"

	v1 "github.com/authzed/authzed-go/proto/authzed/api/v1"
)

const Schema = `
caveat full_policy(client_ip ipaddress, allowed_cidrs list<string>, current_time timestamp, start_hour int, end_hour int, allowed_days list<int>) {
	allowed_cidrs.exists(cidr, client_ip.in_cidr(cidr))
	&& int(current_time.getHours()) >= start_hour && int(current_time.getHours()) < end_hour
	&& int(current_time.getDayOfWeek()) in allowed_days
}

definition user {}

definition group {
	relation member: user | group#member
	relation parent: group

	permission is_member = member + parent->is_member
}

definition organization {
	relation admin: user | group#member
	relation member: user | group#member

	permission manage = admin
	permission is_member = member + admin
}

definition app {
	relation org: organization
	relation admin: user | group#member
	relation viewer: user with full_policy | group#member with full_policy
	relation blocked: user | group#member

	permission is_blocked = blocked
	permission manage = admin + org->manage
	permission view = viewer + manage
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
