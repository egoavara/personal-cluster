package config

import (
	"fmt"
	"os"
	"time"

	"gopkg.in/yaml.v3"
)

type Config struct {
	ListenAddr string        `yaml:"listenAddr"`
	SpiceDB    SpiceDBConfig `yaml:"spicedb"`
	Zitadel    ZitadelConfig `yaml:"zitadel"`
	Templates  []Template    `yaml:"templates"`
	Services   ServicesConfig `yaml:"services"`
}

type SpiceDBConfig struct {
	Endpoint     string `yaml:"endpoint"`
	PresharedKey string `yaml:"presharedKey"`
}

type ZitadelConfig struct {
	APIEndpoint string `yaml:"apiEndpoint"`
	PAT         string `yaml:"pat"`
	ProjectID   string `yaml:"projectID"`
	HostHeader  string `yaml:"hostHeader"`
}

type Template struct {
	ID          string            `yaml:"id"`
	Name        string            `yaml:"name"`
	Description string            `yaml:"description"`
	Service     string            `yaml:"service"`
	TTL         time.Duration     `yaml:"ttl"`
	Params      map[string]string `yaml:"params"`
}

type ServicesConfig struct {
	Postgres    PostgresConfig    `yaml:"postgres"`
	Valkey      ValkeyConfig      `yaml:"valkey"`
	NATS        NATSConfig        `yaml:"nats"`
	Etcd        EtcdConfig        `yaml:"etcd"`
	Qdrant      QdrantConfig      `yaml:"qdrant"`
	CephS3      CephS3Config      `yaml:"cephS3"`
	Manticore   ManticoreConfig   `yaml:"manticore"`
	ClickHouse  ClickHouseConfig  `yaml:"clickhouse"`
}

type PostgresConfig struct {
	DSN string `yaml:"dsn"`
}

type ValkeyConfig struct {
	Addr     string `yaml:"addr"`
	Password string `yaml:"password"`
}

type NATSConfig struct {
	URL          string `yaml:"url"`
	Token        string `yaml:"token"`        // Legacy shared token (deprecated)
	AccountSeed  string `yaml:"accountSeed"`  // Account NKey seed (for signing user JWTs)
	OperatorSeed string `yaml:"operatorSeed"` // Operator NKey seed (for re-signing account JWT)
	SysUserJWT   string `yaml:"sysUserJWT"`   // System account user JWT
	SysUserSeed  string `yaml:"sysUserSeed"`  // System account user NKey seed
}

type EtcdConfig struct {
	Endpoints    []string `yaml:"endpoints"`
	RootPassword string   `yaml:"rootPassword"`
}

type QdrantConfig struct {
	SigningKey string `yaml:"signingKey"`
}

type CephS3Config struct {
	AdminEndpoint string `yaml:"adminEndpoint"`
	AccessKey     string `yaml:"accessKey"`
	SecretKey     string `yaml:"secretKey"`
}

type ManticoreConfig struct {
	// Uses Zitadel machine users — no direct Manticore credentials needed
}

type ClickHouseConfig struct {
	DSN string `yaml:"dsn"`
}

func Load(files []string) (*Config, error) {
	cfg := &Config{
		ListenAddr: ":8080",
		SpiceDB: SpiceDBConfig{
			Endpoint: "spicedb.auth.svc.cluster.local:50051",
		},
	}

	for _, f := range files {
		data, err := os.ReadFile(f)
		if err != nil {
			return nil, fmt.Errorf("read config %s: %w", f, err)
		}
		if err := yaml.Unmarshal(data, cfg); err != nil {
			return nil, fmt.Errorf("parse config %s: %w", f, err)
		}
	}

	// Environment variable overrides for secrets that can't be in YAML
	applyEnvOverride(&cfg.Services.Valkey.Password, "VALKEY_PASSWORD")
	applyEnvOverride(&cfg.Services.NATS.Token, "NATS_AUTH_TOKEN")
	applyEnvOverride(&cfg.Services.NATS.AccountSeed, "NATS_ACCOUNT_SEED")
	applyEnvOverride(&cfg.Services.NATS.OperatorSeed, "NATS_OPERATOR_SEED")
	applyEnvOverride(&cfg.Services.NATS.SysUserJWT, "NATS_SYS_USER_JWT")
	applyEnvOverride(&cfg.Services.NATS.SysUserSeed, "NATS_SYS_USER_SEED")
	applyEnvOverride(&cfg.Services.Etcd.RootPassword, "ETCD_ROOT_PASSWORD")
	applyEnvOverride(&cfg.Services.Qdrant.SigningKey, "QDRANT_API_KEY")
	applyEnvOverride(&cfg.SpiceDB.PresharedKey, "SPICEDB_PRESHARED_KEY")
	applyEnvOverride(&cfg.Zitadel.PAT, "ZITADEL_PAT")
	applyEnvOverride(&cfg.Zitadel.ProjectID, "ZITADEL_PROJECT_ID")

	return cfg, nil
}

func applyEnvOverride(target *string, envKey string) {
	if v := os.Getenv(envKey); v != "" {
		*target = v
	}
}
