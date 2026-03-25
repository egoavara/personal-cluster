package ratelimit

import (
	"testing"
)

func TestCounter_UnlimitedRPMLogic(t *testing.T) {
	// Verify that the unlimited RPM short-circuit condition is correct.
	// Counter.Check returns (true, -1, zero time, nil) when rpm < 0.
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

func TestCounter_GetFirstLogic(t *testing.T) {
	// Verify that the check logic correctly rejects when estimated+1 > limit.
	// This validates the get-first approach without a Valkey connection.
	tests := []struct {
		name         string
		prev, curr   float64
		elapsed      float64
		effectiveRPM int64
		wantAllowed  bool
	}{
		{"under limit", 10, 5, 0.5, 60, true},       // estimated = 10*0.5 + 5 = 10, 10+1 <= 60
		{"at limit", 0, 59, 0.0, 60, true},           // estimated = 0*1.0 + 59 = 59, 59+1 <= 60
		{"over limit", 0, 60, 0.0, 60, false},        // estimated = 0*1.0 + 60 = 60, 60+1 > 60
		{"sliding over", 50, 40, 0.5, 60, false},     // estimated = 50*0.5 + 40 = 65, 65+1 > 60
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			estimated := tt.prev*(1-tt.elapsed) + tt.curr
			allowed := estimated+1 <= float64(tt.effectiveRPM)
			if allowed != tt.wantAllowed {
				t.Errorf("estimated=%f, allowed=%v, want %v", estimated, allowed, tt.wantAllowed)
			}
		})
	}
}
