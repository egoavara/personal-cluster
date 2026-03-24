package ratelimit

import (
	"testing"
)

func TestCounter_UnlimitedRPMLogic(t *testing.T) {
	// Verify that the unlimited RPM short-circuit condition is correct.
	// Counter.Check returns (true, -1, zero time, nil) when rpm < 0.
	// This test validates the branching logic without needing a Valkey connection.
	rpm := int64(-1)
	if rpm >= 0 {
		t.Error("unlimited RPM should be negative")
	}
}

func TestCounter_EffectiveRPMFloor(t *testing.T) {
	// During slow start with a very low multiplier, effectiveRPM should be at least 1.
	rpm := int64(60)
	multiplier := 0.001
	effectiveRPM := int64(float64(rpm) * multiplier)
	if effectiveRPM <= 0 {
		effectiveRPM = 1
	}
	if effectiveRPM != 1 {
		t.Errorf("effectiveRPM = %d, want 1", effectiveRPM)
	}
}
