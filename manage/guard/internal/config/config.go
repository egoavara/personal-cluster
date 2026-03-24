package config

import (
	"fmt"
	"strings"
	"time"

	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

// Config is the top-level configuration for guard.
type Config struct {
	SpiceDB   SpiceDBConfig   `mapstructure:"spicedb"`
	ExtAuthz  ExtAuthzConfig  `mapstructure:"extAuthz"`
	Dashboard DashboardConfig `mapstructure:"dashboard"`
}

type SpiceDBConfig struct {
	Endpoint     string      `mapstructure:"endpoint"`
	PresharedKey string      `mapstructure:"presharedKey"`
	Cache        CacheConfig `mapstructure:"cache"`
}

type CacheConfig struct {
	TTL      time.Duration `mapstructure:"ttl"`
	TTI      time.Duration `mapstructure:"tti"`
	MaxItems int           `mapstructure:"maxItems"`
}

type ExtAuthzConfig struct {
	ListenAddr  string        `mapstructure:"listenAddr"`
	ExternalURL string        `mapstructure:"externalURL"`
	OIDC        OIDCConfig    `mapstructure:"oidc"`
	Session     SessionConfig `mapstructure:"session"`
	Cookie      CookieConfig  `mapstructure:"cookie"`
}

type DashboardConfig struct {
	ListenAddr  string        `mapstructure:"listenAddr"`
	ExternalURL string        `mapstructure:"externalURL"`
	OIDC        OIDCConfig    `mapstructure:"oidc"`
	Session     SessionConfig `mapstructure:"session"`
	RoutesFile  string        `mapstructure:"routesFile"`
}

type OIDCConfig struct {
	IssuerURL    string `mapstructure:"issuerURL"`
	ClientID     string `mapstructure:"clientID"`
	ClientSecret string `mapstructure:"clientSecret"`
}

type SessionConfig struct {
	Secret string `mapstructure:"secret"`
}

type CookieConfig struct {
	Domain string `mapstructure:"domain"`
	Name   string `mapstructure:"name"`
}

func (c *ExtAuthzConfig) IsSecure() bool {
	return strings.HasPrefix(c.ExternalURL, "https://")
}

func (c *DashboardConfig) IsSecure() bool {
	return strings.HasPrefix(c.ExternalURL, "https://")
}

func setDefaults() {
	viper.SetDefault("spicedb.endpoint", "spicedb.auth.svc.cluster.local:50051")
	viper.SetDefault("spicedb.cache.ttl", "2m")
	viper.SetDefault("spicedb.cache.tti", "30s")
	viper.SetDefault("spicedb.cache.maxItems", 10000)

	viper.SetDefault("extAuthz.listenAddr", ":4180")
	viper.SetDefault("extAuthz.externalURL", "https://guard.private.egoavara.net")
	viper.SetDefault("extAuthz.oidc.issuerURL", "https://auth.egoavara.net")
	viper.SetDefault("extAuthz.oidc.clientID", "guard")
	viper.SetDefault("extAuthz.cookie.domain", ".egoavara.net")
	viper.SetDefault("extAuthz.cookie.name", "guard-session")

	viper.SetDefault("dashboard.listenAddr", ":8080")
	viper.SetDefault("dashboard.externalURL", "https://guard.private.egoavara.net")
	viper.SetDefault("dashboard.oidc.issuerURL", "https://auth.egoavara.net")
	viper.SetDefault("dashboard.oidc.clientID", "guard")
	viper.SetDefault("dashboard.routesFile", "/config/routes.yaml")
}

func bindLegacyEnvVars() {
	viper.BindEnv("spicedb.endpoint", "SPICEDB_ENDPOINT")
	viper.BindEnv("spicedb.presharedKey", "SPICEDB_PRESHARED_KEY")
	viper.BindEnv("extAuthz.listenAddr", "EXT_AUTHZ_LISTEN_ADDR")
	viper.BindEnv("extAuthz.externalURL", "EXTERNAL_URL")
	viper.BindEnv("extAuthz.oidc.issuerURL", "OIDC_ISSUER_URL")
	viper.BindEnv("extAuthz.oidc.clientID", "OIDC_CLIENT_ID")
	viper.BindEnv("extAuthz.oidc.clientSecret", "OIDC_CLIENT_SECRET")
	viper.BindEnv("extAuthz.session.secret", "SESSION_SECRET")
	viper.BindEnv("extAuthz.cookie.domain", "COOKIE_DOMAIN")
	viper.BindEnv("extAuthz.cookie.name", "COOKIE_NAME")
	viper.BindEnv("dashboard.listenAddr", "DASHBOARD_LISTEN_ADDR")
	viper.BindEnv("dashboard.externalURL", "DASHBOARD_EXTERNAL_URL")
	viper.BindEnv("dashboard.oidc.clientID", "OIDC_CLIENT_ID")
	viper.BindEnv("dashboard.oidc.clientSecret", "OIDC_CLIENT_SECRET")
	viper.BindEnv("dashboard.routesFile", "DASHBOARD_ROUTES_FILE")
}

func Init(configFiles []string) error {
	setDefaults()
	bindLegacyEnvVars()

	for _, f := range configFiles {
		viper.SetConfigFile(f)
		if err := viper.MergeInConfig(); err != nil {
			return fmt.Errorf("failed to merge config file %s: %w", f, err)
		}
	}

	if len(configFiles) > 0 {
		viper.OnConfigChange(func(e fsnotify.Event) {})
		viper.WatchConfig()
	}

	return nil
}

func Load() (*Config, error) {
	var cfg Config
	if err := viper.Unmarshal(&cfg); err != nil {
		return nil, fmt.Errorf("failed to unmarshal config: %w", err)
	}
	return &cfg, nil
}

func (c *Config) ValidateSpiceDB() error {
	if c.SpiceDB.PresharedKey == "" {
		return fmt.Errorf("spicedb.presharedKey is required")
	}
	return nil
}

func (c *Config) ValidateExtAuthz() error {
	if err := c.ValidateSpiceDB(); err != nil {
		return err
	}
	if c.ExtAuthz.OIDC.ClientSecret == "" {
		return fmt.Errorf("extAuthz.oidc.clientSecret is required")
	}
	if c.ExtAuthz.Session.Secret == "" {
		return fmt.Errorf("extAuthz.session.secret is required")
	}
	return nil
}

func (c *Config) ValidateDashboard() error {
	if err := c.ValidateSpiceDB(); err != nil {
		return err
	}
	if c.Dashboard.OIDC.ClientSecret == "" {
		return fmt.Errorf("dashboard.oidc.clientSecret is required")
	}
	if c.Dashboard.Session.Secret == "" {
		return fmt.Errorf("dashboard.session.secret is required")
	}
	return nil
}
