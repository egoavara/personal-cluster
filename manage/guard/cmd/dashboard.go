package cmd

import (
	"github.com/egoavara/personal-cluster/manage/guard/internal/dashboard"
	"github.com/egoavara/personal-cluster/manage/guard/internal/spicedb"
	"github.com/spf13/cobra"
	"go.uber.org/zap"
)

var dashboardCmd = &cobra.Command{
	Use:   "dashboard",
	Short: "Policy management dashboard with OIDC login and dashboard relay",
	RunE: func(cmd *cobra.Command, args []string) error {
		if err := cfg.ValidateDashboard(); err != nil {
			return err
		}
		spiceClient, err := spicedb.NewClient(cfg.SpiceDB.Endpoint, cfg.SpiceDB.PresharedKey)
		if err != nil {
			return err
		}

		logger.Info("starting dashboard",
			zap.String("listen", cfg.Dashboard.ListenAddr),
			zap.String("oidc_issuer", cfg.Dashboard.OIDC.IssuerURL),
		)

		srv, err := dashboard.NewServer(spiceClient, cfg.Dashboard, logger)
		if err != nil {
			return err
		}
		return srv.Run(cmd.Context())
	},
}

func init() {
	rootCmd.AddCommand(dashboardCmd)
}
