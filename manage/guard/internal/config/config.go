package config

import (
	"fmt"
	"strings"
	"time"

	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

// Config is the top-level configuration for guard.
type ValkeyConfig struct {
	SentinelAddrs []string      `mapstructure:"sentinelAddrs"`
	MasterName    string        `mapstructure:"masterName"`
	Password      string        `mapstructure:"password"`
}

type RateLimitConfig struct {
	Enabled           bool          `mapstructure:"enabled"`
	SlowStartDuration time.Duration `mapstructure:"slowStartDuration"`
	L1MaxItems        int64         `mapstructure:"l1MaxItems"`
	L1TTL             time.Duration `mapstructure:"l1TTL"`
	L2TTL             time.Duration `mapstructure:"l2TTL"`
}

type Config struct {
	SpiceDB   SpiceDBConfig   `mapstructure:"spicedb"`
	ExtAuthz  ExtAuthzConfig  `mapstructure:"extAuthz"`
	Dashboard DashboardConfig `mapstructure:"dashboard"`
	Valkey    ValkeyConfig    `mapstructure:"valkey"`
	RateLimit RateLimitConfig `mapstructure:"rateLimit"`
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

type HostResourceEntry struct {
	Host     string `mapstructure:"host"`
	Resource string `mapstructure:"resource"`
}

type PATConfig struct {
	Enabled  bool          `mapstructure:"enabled"`
	Prefix   string        `mapstructure:"prefix"`
	CacheTTL time.Duration `mapstructure:"cacheTTL"`
}

type ExtAuthzConfig struct {
	ListenAddr      string              `mapstructure:"listenAddr"`
	ExternalURL     string              `mapstructure:"externalURL"`
	OIDC            OIDCConfig          `mapstructure:"oidc"`
	Session         SessionConfig       `mapstructure:"session"`
	Cookie          CookieConfig        `mapstructure:"cookie"`
	HostResources   []HostResourceEntry `mapstructure:"hostResources"`
	PAT             PATConfig           `mapstructure:"pat"`
}

// HostResourceMap returns a map[host]resource built from the HostResources slice.
func (c *ExtAuthzConfig) HostResourceMap() map[string]string {
	m := make(map[string]string, len(c.HostResources))
	for _, e := range c.HostResources {
		m[e.Host] = e.Resource
	}
	return m
}

type DashboardConfig struct {
	ListenAddr  string        `mapstructure:"listenAddr"`
	ExternalURL string        `mapstructure:"externalURL"`
	OIDC        OIDCConfig    `mapstructure:"oidc"`
	Session     SessionConfig `mapstructure:"session"`
	Cookie      CookieConfig  `mapstructure:"cookie"`
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

	viper.SetDefault("extAuthz.pat.enabled", false)
	viper.SetDefault("extAuthz.pat.prefix", "vdpat_")
	viper.SetDefault("extAuthz.pat.cacheTTL", "30s")

	viper.SetDefault("rateLimit.enabled", false)
	viper.SetDefault("rateLimit.slowStartDuration", "60s")
	viper.SetDefault("rateLimit.l1MaxItems", 10000)
	viper.SetDefault("rateLimit.l1TTL", "30s")
	viper.SetDefault("rateLimit.l2TTL", "60s")
	viper.SetDefault("valkey.masterName", "myprimary")
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

	viper.BindEnv("extAuthz.pat.enabled", "PAT_ENABLED")

	viper.BindEnv("valkey.password", "VALKEY_PASSWORD")
	viper.BindEnv("rateLimit.enabled", "RATE_LIMIT_ENABLED")
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

func (c *Config) ValidateValkey() error {
	if !c.RateLimit.Enabled {
		return nil
	}
	if len(c.Valkey.SentinelAddrs) == 0 {
		return fmt.Errorf("valkey.sentinelAddrs is required when rate limiting is enabled")
	}
	if c.Valkey.MasterName == "" {
		return fmt.Errorf("valkey.masterName is required when rate limiting is enabled")
	}
	return nil
}
