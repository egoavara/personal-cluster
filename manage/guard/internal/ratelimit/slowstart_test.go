package ratelimit

import (
	"testing"
	"time"
)

func TestSlowStart_Multiplier(t *testing.T) {
	t.Run("zero duration returns 1.0", func(t *testing.T) {
		ss := NewSlowStart(0)
		if m := ss.Multiplier(); m != 1.0 {
			t.Errorf("Multiplier() = %f, want 1.0", m)
		}
	})

	t.Run("after ramp up returns 1.0", func(t *testing.T) {
		ss := &SlowStart{
			startedAt: time.Now().Add(-2 * time.Minute),
			rampUp:    time.Minute,
		}
		if m := ss.Multiplier(); m != 1.0 {
			t.Errorf("Multiplier() = %f, want 1.0", m)
		}
	})

	t.Run("during ramp up returns fraction", func(t *testing.T) {
		ss := &SlowStart{
			startedAt: time.Now().Add(-30 * time.Second),
			rampUp:    time.Minute,
		}
		m := ss.Multiplier()
		if m < 0.4 || m > 0.6 {
			t.Errorf("Multiplier() = %f, want ~0.5", m)
		}
	})
}
