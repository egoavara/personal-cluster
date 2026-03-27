package cmd

import (
	"github.com/egoavara/personal-cluster/manage/vender/internal/config"
	"github.com/spf13/cobra"
	"go.uber.org/zap"
)

var (
	logger      *zap.Logger
	configFiles []string
	cfg         *config.Config
)

var rootCmd = &cobra.Command{
	Use:   "vender",
	Short: "Persistence credential vending service",
	PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
		var err error
		logger, err = zap.NewProduction()
		if err != nil {
			return err
		}

		cfg, err = config.Load(configFiles)
		if err != nil {
			return err
		}

		return nil
	},
	PersistentPostRun: func(cmd *cobra.Command, args []string) {
		if logger != nil {
			_ = logger.Sync()
		}
	},
}

func init() {
	rootCmd.PersistentFlags().StringSliceVar(&configFiles, "config", nil, "config files (overlay order)")
}

func Execute() error {
	return rootCmd.Execute()
}
