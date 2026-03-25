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
// Get-first: reads current count, only increments if within the limit.
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
	resetAt := now.Truncate(c.window).Add(c.window)

	// Get previous window count
	prev, err := c.client.GetCounter(ctx, userID, prevWindowStart)
	if err != nil {
		return false, 0, time.Time{}, err
	}

	// Get current window count (read-only)
	curr, err := c.client.GetCounter(ctx, userID, currWindowStart)
	if err != nil {
		return false, 0, time.Time{}, err
	}

	// Sliding window estimation
	elapsed := float64(now.Sub(now.Truncate(c.window))) / float64(c.window)
	estimated := float64(prev)*(1-elapsed) + float64(curr)

	// Check if adding this request would exceed the limit
	if estimated+1 > float64(effectiveRPM) {
		// Over limit — do NOT increment
		return false, 0, resetAt, nil
	}

	// Within limit — increment counter
	newCurr, err := c.client.IncrCounter(ctx, userID, currWindowStart, c.window)
	if err != nil {
		return false, 0, time.Time{}, err
	}

	// Recalculate with actual incremented value
	estimated = float64(prev)*(1-elapsed) + float64(newCurr)
	remaining := int64(float64(effectiveRPM) - estimated)
	if remaining < 0 {
		remaining = 0
	}

	return true, remaining, resetAt, nil
}
