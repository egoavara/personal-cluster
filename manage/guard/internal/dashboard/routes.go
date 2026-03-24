package dashboard

import (
	"fmt"
	"os"

	"gopkg.in/yaml.v3"
)

// DashboardRoute represents a single dashboard relay target.
type DashboardRoute struct {
	Name               string `yaml:"name"`
	Path               string `yaml:"path"`
	Upstream           string `yaml:"upstream"`
	StripPrefix        bool   `yaml:"stripPrefix"`
	SpiceDBResource    string `yaml:"spicedbResource"`
	InsecureSkipVerify bool   `yaml:"insecureSkipVerify"`
}

// RoutesConfig is the top-level structure of the routes ConfigMap.
type RoutesConfig struct {
	Dashboards []DashboardRoute `yaml:"dashboards"`
}

// LoadRoutes loads the dashboard routing configuration from a YAML file.
func LoadRoutes(path string) (*RoutesConfig, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, fmt.Errorf("failed to read routes file %s: %w", path, err)
	}
	var cfg RoutesConfig
	if err := yaml.Unmarshal(data, &cfg); err != nil {
		return nil, fmt.Errorf("failed to parse routes file: %w", err)
	}
	return &cfg, nil
}
