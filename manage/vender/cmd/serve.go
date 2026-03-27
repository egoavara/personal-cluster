package cmd

import (
	"time"

	"github.com/egoavara/personal-cluster/manage/vender/internal/adapter"
	"github.com/egoavara/personal-cluster/manage/vender/internal/dashboard"
	"github.com/egoavara/personal-cluster/manage/vender/internal/reaper"
	"github.com/egoavara/personal-cluster/manage/vender/internal/store"
	"github.com/spf13/cobra"
	"go.uber.org/zap"
)

var serveCmd = &cobra.Command{
	Use:   "serve",
	Short: "Start the vending dashboard and API server",
	RunE: func(cmd *cobra.Command, args []string) error {
		ctx := cmd.Context()

		// Initialize credential store (uses the same PG as the persistence phase)
		credStore, err := store.New(cfg.Services.Postgres.DSN)
		if err != nil {
			return err
		}
		if err := credStore.Migrate(ctx); err != nil {
			return err
		}

		// Seed DB templates from config YAML if the templates table is empty
		if len(cfg.Templates) > 0 {
			var seeds []store.DBTemplate
			for _, t := range cfg.Templates {
				seeds = append(seeds, store.DBTemplate{
					ID:          t.ID,
					Name:        t.Name,
					Description: t.Description,
					Service:     t.Service,
					TTL:         t.TTL,
					Params:      t.Params,
				})
			}
			if err := credStore.SeedTemplatesFromConfig(ctx, seeds); err != nil {
				logger.Warn("seed templates from config", zap.Error(err))
			}
		}
		logger.Info("credential store initialized")

		// Initialize adapters
		adapters := make(map[string]adapter.Adapter)

		// PostgreSQL
		if cfg.Services.Postgres.DSN != "" {
			pg, err := adapter.NewPostgresAdapter(cfg.Services.Postgres.DSN)
			if err != nil {
				logger.Warn("postgres adapter unavailable", zap.Error(err))
			} else {
				adapters["postgres"] = pg
				logger.Info("postgres adapter registered")
			}
		}

		// Valkey
		if cfg.Services.Valkey.Addr != "" {
			adapters["valkey"] = adapter.NewValkeyAdapter(cfg.Services.Valkey.Addr, cfg.Services.Valkey.Password)
			logger.Info("valkey adapter registered")
		}

		// NATS
		if cfg.Services.NATS.URL != "" && cfg.Services.NATS.AccountSeed != "" {
			natsAdapter, err := adapter.NewNATSAdapter(
				cfg.Services.NATS.URL,
				cfg.Services.NATS.AccountSeed,
				cfg.Services.NATS.OperatorSeed,
				cfg.Services.NATS.SysUserJWT,
				[]byte(cfg.Services.NATS.SysUserSeed),
			)
			if err != nil {
				logger.Warn("nats adapter unavailable", zap.Error(err))
			} else {
				adapters["nats"] = natsAdapter
				logger.Info("nats adapter registered (JWT mode)")
			}
		}

		// etcd
		if len(cfg.Services.Etcd.Endpoints) > 0 {
			etcdAdapter, err := adapter.NewEtcdAdapter(cfg.Services.Etcd.Endpoints, cfg.Services.Etcd.RootPassword)
			if err != nil {
				logger.Warn("etcd adapter unavailable", zap.Error(err))
			} else {
				adapters["etcd"] = etcdAdapter
				logger.Info("etcd adapter registered")
			}
		}

		// Qdrant
		if cfg.Services.Qdrant.SigningKey != "" {
			adapters["qdrant"] = adapter.NewQdrantAdapter(cfg.Services.Qdrant.SigningKey)
			logger.Info("qdrant adapter registered")
		} else {
			logger.Warn("qdrant adapter unavailable: signing key not configured")
		}

		// Ceph S3
		cephAdapter, err := adapter.NewCephS3Adapter("rook-ceph", "object-store", "persistence", nil)
		if err != nil {
			logger.Warn("ceph-s3 adapter unavailable", zap.Error(err))
		} else {
			adapters["ceph-s3"] = cephAdapter
			logger.Info("ceph-s3 adapter registered")
		}

		// Manticore
		if cfg.Zitadel.APIEndpoint != "" && cfg.Zitadel.PAT != "" {
			ma := adapter.NewManticoreAdapter(cfg.Zitadel.APIEndpoint, cfg.Zitadel.PAT, cfg.Zitadel.ProjectID)
			if cfg.Zitadel.HostHeader != "" {
				ma.SetHostHeader(cfg.Zitadel.HostHeader)
			}
			adapters["manticore"] = ma
			logger.Info("manticore adapter registered")
		} else {
			logger.Warn("manticore adapter unavailable: zitadel API endpoint or PAT not configured")
		}

		// ClickHouse
		if cfg.Services.ClickHouse.DSN != "" {
			ch, err := adapter.NewClickHouseAdapter(cfg.Services.ClickHouse.DSN)
			if err != nil {
				logger.Warn("clickhouse adapter unavailable", zap.Error(err))
			} else {
				adapters["clickhouse"] = ch
				logger.Info("clickhouse adapter registered")
			}
		}

		// Start credential reaper (background goroutine)
		reap := reaper.New(credStore, adapters, logger, 1*time.Minute)
		go reap.Run(ctx)
		logger.Info("credential reaper started", zap.Duration("interval", 1*time.Minute))

		logger.Info("starting vender server",
			zap.String("listen", cfg.ListenAddr),
			zap.Int("adapters", len(adapters)),
		)

		return dashboard.Run(ctx, cfg, adapters, credStore, logger)
	},
}

func init() {
	rootCmd.AddCommand(serveCmd)
}
