package ratelimit

import (
	"time"
)

type SlowStart struct {
	startedAt time.Time
	rampUp    time.Duration
}

func NewSlowStart(rampUp time.Duration) *SlowStart {
	return &SlowStart{
		startedAt: time.Now(),
		rampUp:    rampUp,
	}
}

func (s *SlowStart) Multiplier() float64 {
	if s.rampUp <= 0 {
		return 1.0
	}
	elapsed := time.Since(s.startedAt)
	if elapsed >= s.rampUp {
		return 1.0
	}
	return elapsed.Seconds() / s.rampUp.Seconds()
}
