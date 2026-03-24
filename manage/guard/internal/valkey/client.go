package valkey

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/redis/go-redis/v9"
	"go.uber.org/zap"
)

type Config struct {
	SentinelAddrs []string
	MasterName    string
	Password      string
}

type Client struct {
	rdb    *redis.Client
	logger *zap.Logger
}

func NewClient(cfg Config, logger *zap.Logger) (*Client, error) {
	rdb := redis.NewFailoverClient(&redis.FailoverOptions{
		SentinelAddrs: cfg.SentinelAddrs,
		MasterName:    cfg.MasterName,
		Password:      cfg.Password,
		DB:            0,
	})
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := rdb.Ping(ctx).Err(); err != nil {
		return nil, fmt.Errorf("valkey ping failed: %w", err)
	}
	return &Client{rdb: rdb, logger: logger}, nil
}

func (c *Client) Close() error {
	return c.rdb.Close()
}

// --- Tier operations ---

func (c *Client) GetTier(ctx context.Context, name string) (*Tier, error) {
	val, err := c.rdb.Get(ctx, "tier:"+name).Result()
	if err != nil {
		return nil, err
	}
	var t Tier
	if err := json.Unmarshal([]byte(val), &t); err != nil {
		return nil, err
	}
	t.Name = name
	return &t, nil
}

func (c *Client) SetTier(ctx context.Context, t *Tier) error {
	data, err := json.Marshal(t)
	if err != nil {
		return err
	}
	return c.rdb.Set(ctx, "tier:"+t.Name, data, 0).Err()
}

func (c *Client) ListTiers(ctx context.Context) ([]*Tier, error) {
	return scanAndUnmarshal[Tier](ctx, c.rdb, "tier:*", func(key string) string {
		return key[len("tier:"):]
	})
}

func (c *Client) DeleteTier(ctx context.Context, name string) error {
	return c.rdb.Del(ctx, "tier:"+name).Err()
}

// --- Role-Tier mapping ---

func (c *Client) GetRoleTier(ctx context.Context, permission string) (string, error) {
	return c.rdb.Get(ctx, "role-tier:"+permission).Result()
}

func (c *Client) SetRoleTier(ctx context.Context, permission, tierName string) error {
	return c.rdb.Set(ctx, "role-tier:"+permission, tierName, 0).Err()
}

func (c *Client) ListRoleTiers(ctx context.Context) (map[string]string, error) {
	keys, err := scanKeys(ctx, c.rdb, "role-tier:*")
	if err != nil {
		return nil, err
	}
	result := make(map[string]string, len(keys))
	for _, key := range keys {
		val, err := c.rdb.Get(ctx, key).Result()
		if err != nil {
			continue
		}
		result[key[len("role-tier:"):]] = val
	}
	return result, nil
}

func (c *Client) DeleteRoleTier(ctx context.Context, permission string) error {
	return c.rdb.Del(ctx, "role-tier:"+permission).Err()
}

// --- User override ---

func (c *Client) GetUserOverride(ctx context.Context, userID string) (string, error) {
	return c.rdb.Get(ctx, "override:user:"+userID).Result()
}

func (c *Client) SetUserOverride(ctx context.Context, userID, tierName string) error {
	return c.rdb.Set(ctx, "override:user:"+userID, tierName, 0).Err()
}

func (c *Client) ListUserOverrides(ctx context.Context) (map[string]string, error) {
	keys, err := scanKeys(ctx, c.rdb, "override:user:*")
	if err != nil {
		return nil, err
	}
	result := make(map[string]string, len(keys))
	for _, key := range keys {
		val, err := c.rdb.Get(ctx, key).Result()
		if err != nil {
			continue
		}
		result[key[len("override:user:"):]] = val
	}
	return result, nil
}

func (c *Client) DeleteUserOverride(ctx context.Context, userID string) error {
	return c.rdb.Del(ctx, "override:user:"+userID).Err()
}

// --- Table ---

func (c *Client) GetTable(ctx context.Context, name string) (*Table, error) {
	val, err := c.rdb.Get(ctx, "table:"+name).Result()
	if err != nil {
		return nil, err
	}
	var t Table
	if err := json.Unmarshal([]byte(val), &t); err != nil {
		return nil, err
	}
	return &t, nil
}

func (c *Client) SetTable(ctx context.Context, t *Table) error {
	data, err := json.Marshal(t)
	if err != nil {
		return err
	}
	return c.rdb.Set(ctx, "table:"+t.Name, data, 0).Err()
}

func (c *Client) ListTables(ctx context.Context) ([]*Table, error) {
	return scanAndUnmarshal[Table](ctx, c.rdb, "table:*", func(key string) string {
		return key[len("table:"):]
	})
}

func (c *Client) DeleteTable(ctx context.Context, name string) error {
	return c.rdb.Del(ctx, "table:"+name).Err()
}

// --- Resolved tier cache ---

func (c *Client) GetResolved(ctx context.Context, userID, domain string) (*ResolvedTier, error) {
	val, err := c.rdb.Get(ctx, "resolved:"+userID+":"+domain).Result()
	if err != nil {
		return nil, err
	}
	var r ResolvedTier
	if err := json.Unmarshal([]byte(val), &r); err != nil {
		return nil, err
	}
	return &r, nil
}

func (c *Client) SetResolved(ctx context.Context, userID, domain string, r *ResolvedTier, ttl time.Duration) error {
	data, err := json.Marshal(r)
	if err != nil {
		return err
	}
	return c.rdb.Set(ctx, "resolved:"+userID+":"+domain, data, ttl).Err()
}

func (c *Client) DeleteResolvedByUser(ctx context.Context, userID string) error {
	return deleteByPattern(ctx, c.rdb, "resolved:"+userID+":*")
}

func (c *Client) DeleteAllResolved(ctx context.Context) error {
	return deleteByPattern(ctx, c.rdb, "resolved:*")
}

// --- Counter ---

func (c *Client) IncrCounter(ctx context.Context, userID string, windowStart int64, windowDur time.Duration) (int64, error) {
	key := fmt.Sprintf("counter:%s:%d", userID, windowStart)
	pipe := c.rdb.Pipeline()
	incr := pipe.Incr(ctx, key)
	pipe.Expire(ctx, key, windowDur*2) // Keep for 2 windows for sliding window calc
	if _, err := pipe.Exec(ctx); err != nil {
		return 0, err
	}
	return incr.Val(), nil
}

func (c *Client) GetCounter(ctx context.Context, userID string, windowStart int64) (int64, error) {
	key := fmt.Sprintf("counter:%s:%d", userID, windowStart)
	val, err := c.rdb.Get(ctx, key).Int64()
	if err == redis.Nil {
		return 0, nil
	}
	return val, err
}

// --- Helpers ---

func scanKeys(ctx context.Context, rdb *redis.Client, pattern string) ([]string, error) {
	var keys []string
	iter := rdb.Scan(ctx, 0, pattern, 100).Iterator()
	for iter.Next(ctx) {
		keys = append(keys, iter.Val())
	}
	return keys, iter.Err()
}

func scanAndUnmarshal[T any](ctx context.Context, rdb *redis.Client, pattern string, _ func(string) string) ([]*T, error) {
	keys, err := scanKeys(ctx, rdb, pattern)
	if err != nil {
		return nil, err
	}
	var results []*T
	for _, key := range keys {
		val, err := rdb.Get(ctx, key).Result()
		if err != nil {
			continue
		}
		var item T
		if err := json.Unmarshal([]byte(val), &item); err != nil {
			continue
		}
		results = append(results, &item)
	}
	return results, nil
}

func deleteByPattern(ctx context.Context, rdb *redis.Client, pattern string) error {
	keys, err := scanKeys(ctx, rdb, pattern)
	if err != nil {
		return err
	}
	if len(keys) == 0 {
		return nil
	}
	return rdb.Del(ctx, keys...).Err()
}
