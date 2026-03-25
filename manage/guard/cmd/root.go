package cmd

import (
	"context"
	"time"

	"github.com/egoavara/personal-cluster/manage/guard/internal/config"
	guardotel "github.com/egoavara/personal-cluster/manage/guard/internal/otel"
	"github.com/spf13/cobra"
	"go.uber.org/zap"
)

var (
	logger       *zap.Logger
	configFiles  []string
	cfg          *config.Config
	otelShutdown func(context.Context) error
)

var rootCmd = &cobra.Command{
	Use:   "guard",
	Short: "Kubernetes authorization system powered by SpiceDB",
	PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
		var err error
		logger, err = zap.NewProduction()
		if err != nil {
			return err
		}

		if err := config.Init(configFiles); err != nil {
			return err
		}

		cfg, err = config.Load()
		if err != nil {
			return err
		}

		// Initialize OTel — uses OTEL_EXPORTER_OTLP_ENDPOINT and OTEL_SERVICE_NAME env vars.
		// If OTEL_EXPORTER_OTLP_ENDPOINT is not set, the SDK defaults to localhost:4317
		// and exports will silently fail, which is fine for local development.
		otelLogger, shutdown, err := guardotel.Setup(cmd.Context(), cmd.Use)
		if err != nil {
			logger.Warn("otel setup failed, continuing without telemetry", zap.Error(err))
		} else {
			otelShutdown = shutdown
			logger = otelLogger // Replace logger with OTel-bridged logger
		}

		return nil
	},
	PersistentPostRun: func(cmd *cobra.Command, args []string) {
		if otelShutdown != nil {
			ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
			defer cancel()
			if err := otelShutdown(ctx); err != nil {
				logger.Warn("otel shutdown error", zap.Error(err))
			}
		}
		if logger != nil {
			_ = logger.Sync()
		}
	},
}

func init() {
	rootCmd.PersistentFlags().StringSliceVar(&configFiles, "config", nil, "config files (overlay order, later overrides earlier)")
}

func Execute() error {
	return rootCmd.Execute()
}
