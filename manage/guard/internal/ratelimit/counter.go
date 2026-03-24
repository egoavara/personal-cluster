package ratelimit

import (
	"context"
	"time"

	"github.com/egoavara/personal-cluster/manage/guard/internal/valkey"
)

type Counter struct {
	client *valkey.Client
	window time.Duration
}

func NewCounter(client *valkey.Client) *Counter {
	return &Counter{
		client: client,
		window: time.Minute, // Fixed 1-minute window for RPM
	}
}

// Check performs a sliding window counter check.
// Returns (allowed, remaining, resetAt, error).
func (c *Counter) Check(ctx context.Context, userID string, rpm int64, multiplier float64) (bool, int64, time.Time, error) {
	if rpm < 0 {
		// Unlimited
		return true, -1, time.Time{}, nil
	}

	effectiveRPM := int64(float64(rpm) * multiplier)
	if effectiveRPM <= 0 {
		effectiveRPM = 1 // Allow at least 1 RPM during slow start
	}

	now := time.Now()
	currWindowStart := now.Truncate(c.window).Unix()
	prevWindowStart := now.Truncate(c.window).Add(-c.window).Unix()

	// Get previous window count
	prev, err := c.client.GetCounter(ctx, userID, prevWindowStart)
	if err != nil {
		return false, 0, time.Time{}, err
	}

	// Increment current window
	curr, err := c.client.IncrCounter(ctx, userID, currWindowStart, c.window)
	if err != nil {
		return false, 0, time.Time{}, err
	}

	// Sliding window calculation
	elapsed := float64(now.Sub(now.Truncate(c.window))) / float64(c.window)
	estimated := float64(prev)*(1-elapsed) + float64(curr)

	remaining := int64(float64(effectiveRPM) - estimated)
	if remaining < 0 {
		remaining = 0
	}

	resetAt := now.Truncate(c.window).Add(c.window)

	return estimated <= float64(effectiveRPM), remaining, resetAt, nil
}
