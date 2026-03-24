package cmd

import (
	"github.com/egoavara/personal-cluster/manage/guard/internal/extauthz"
	"github.com/spf13/cobra"
	"go.uber.org/zap"
)

var extAuthzCmd = &cobra.Command{
	Use:   "ext-authz",
	Short: "Run Envoy ext_authz server (replaces oauth2-proxy)",
	RunE: func(cmd *cobra.Command, args []string) error {
		if err := cfg.ValidateExtAuthz(); err != nil {
			return err
		}

		logger.Info("starting ext-authz server",
			zap.String("listen", cfg.ExtAuthz.ListenAddr),
			zap.String("oidc_issuer", cfg.ExtAuthz.OIDC.IssuerURL),
			zap.String("cookie_domain", cfg.ExtAuthz.Cookie.Domain),
		)

		return extauthz.Run(cmd.Context(), cfg.SpiceDB, cfg.ExtAuthz, cfg.Valkey, cfg.RateLimit, logger)
	},
}

func init() {
	rootCmd.AddCommand(extAuthzCmd)
}
