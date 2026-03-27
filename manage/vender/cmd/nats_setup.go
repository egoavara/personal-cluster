package cmd

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"os/exec"

	"github.com/nats-io/jwt/v2"
	"github.com/nats-io/nkeys"
	"github.com/spf13/cobra"
)

var natsSetupCmd = &cobra.Command{
	Use:   "nats-setup",
	Short: "Generate NATS operator/account/system-account NKeys and JWTs, store in K8s Secret",
	RunE: func(cmd *cobra.Command, args []string) error {
		namespace, _ := cmd.Flags().GetString("namespace")
		secretName, _ := cmd.Flags().GetString("secret")
		dryRun, _ := cmd.Flags().GetBool("dry-run")

		// 1. Generate Operator NKey
		operatorKP, err := nkeys.CreateOperator()
		if err != nil {
			return fmt.Errorf("create operator nkey: %w", err)
		}
		operatorPub, _ := operatorKP.PublicKey()
		operatorSeed, _ := operatorKP.Seed()

		// 2. Generate System Account NKey
		sysAccountKP, err := nkeys.CreateAccount()
		if err != nil {
			return fmt.Errorf("create system account nkey: %w", err)
		}
		sysAccountPub, _ := sysAccountKP.PublicKey()

		// 3. Generate Vender Account NKey (for signing user JWTs)
		accountKP, err := nkeys.CreateAccount()
		if err != nil {
			return fmt.Errorf("create account nkey: %w", err)
		}
		accountPub, _ := accountKP.PublicKey()
		accountSeed, _ := accountKP.Seed()

		// 4. Create Operator JWT (includes system account)
		operatorClaims := jwt.NewOperatorClaims(operatorPub)
		operatorClaims.Name = "vender-operator"
		operatorClaims.SystemAccount = sysAccountPub
		operatorJWT, err := operatorClaims.Encode(operatorKP)
		if err != nil {
			return fmt.Errorf("encode operator jwt: %w", err)
		}

		// 5. Create System Account JWT (signed by operator)
		sysAccountClaims := jwt.NewAccountClaims(sysAccountPub)
		sysAccountClaims.Name = "SYS"
		sysAccountClaims.Exports = jwt.Exports{
			&jwt.Export{Name: "account-monitoring-streams", Subject: "$SYS.ACCOUNT.*.>", Type: jwt.Stream, AccountTokenPosition: 3},
			&jwt.Export{Name: "account-monitoring-services", Subject: "$SYS.REQ.ACCOUNT.*.*", Type: jwt.Service, AccountTokenPosition: 4},
		}
		sysAccountJWT, err := sysAccountClaims.Encode(operatorKP)
		if err != nil {
			return fmt.Errorf("encode sys account jwt: %w", err)
		}

		// 6. Create Vender Account JWT (signed by operator)
		accountClaims := jwt.NewAccountClaims(accountPub)
		accountClaims.Name = "vender"
		accountClaims.Limits.Conn = -1
		accountClaims.Limits.Subs = -1
		accountClaims.Limits.Data = -1
		accountClaims.Limits.Payload = -1
		accountJWT, err := accountClaims.Encode(operatorKP)
		if err != nil {
			return fmt.Errorf("encode account jwt: %w", err)
		}

		// 7. Create System Account user (for vender to push revocations via $SYS)
		sysUserKP, err := nkeys.CreateUser()
		if err != nil {
			return fmt.Errorf("create sys user nkey: %w", err)
		}
		sysUserPub, _ := sysUserKP.PublicKey()
		sysUserSeed, _ := sysUserKP.Seed()

		sysUserClaims := jwt.NewUserClaims(sysUserPub)
		sysUserClaims.Name = "vender-sys"
		sysUserClaims.IssuerAccount = sysAccountPub
		sysUserJWT, err := sysUserClaims.Encode(sysAccountKP)
		if err != nil {
			return fmt.Errorf("encode sys user jwt: %w", err)
		}

		if dryRun {
			// Print all generated data
			data := map[string]string{
				"operator-jwt":       operatorJWT,
				"operator-seed":      string(operatorSeed),
				"sys-account-jwt":    sysAccountJWT,
				"sys-account-pub":    sysAccountPub,
				"account-jwt":        accountJWT,
				"account-seed":       string(accountSeed),
				"account-pub":        accountPub,
				"sys-user-jwt":       sysUserJWT,
				"sys-user-seed":      string(sysUserSeed),
				"resolver-preload":   fmt.Sprintf(`{"%s": "%s", "%s": "%s"}`, accountPub, accountJWT, sysAccountPub, sysAccountJWT),
			}
			out, _ := json.MarshalIndent(data, "", "  ")
			fmt.Println(string(out))
			return nil
		}

		// 8. Store in K8s Secret
		kubectlArgs := []string{
			"create", "secret", "generic", secretName,
			"-n", namespace,
			"--from-literal=operator-jwt=" + operatorJWT,
			"--from-literal=operator-seed=" + string(operatorSeed),
			"--from-literal=sys-account-jwt=" + sysAccountJWT,
			"--from-literal=sys-account-pub=" + sysAccountPub,
			"--from-literal=account-jwt=" + accountJWT,
			"--from-literal=account-seed=" + string(accountSeed),
			"--from-literal=account-pub=" + accountPub,
			"--from-literal=sys-user-jwt=" + sysUserJWT,
			"--from-literal=sys-user-seed=" + string(sysUserSeed),
			"--dry-run=client", "-o", "yaml",
		}
		kubectlCreate := exec.Command("kubectl", kubectlArgs...)
		out, err := kubectlCreate.Output()
		if err != nil {
			return fmt.Errorf("kubectl create: %w", err)
		}

		kubectlApply := exec.Command("kubectl", "apply", "-f", "-")
		kubectlApply.Stdin = os.Stdin
		kubectlApply.Stdout = os.Stdout
		kubectlApply.Stderr = os.Stderr

		// Pipe output of create to apply
		applyCmd := exec.Command("kubectl", "apply", "-f", "-")
		applyCmd.Stdin = bytesReader(out)
		applyCmd.Stdout = os.Stdout
		applyCmd.Stderr = os.Stderr
		if err := applyCmd.Run(); err != nil {
			return fmt.Errorf("kubectl apply: %w", err)
		}

		fmt.Printf("NATS auth Secret '%s' created in namespace '%s'\n", secretName, namespace)
		fmt.Printf("  Operator:     %s\n", operatorPub)
		fmt.Printf("  SysAccount:   %s\n", sysAccountPub)
		fmt.Printf("  VenderAccount: %s\n", accountPub)
		return nil
	},
}

func init() {
	natsSetupCmd.Flags().String("namespace", "persistence", "Kubernetes namespace")
	natsSetupCmd.Flags().String("secret", "nats-jwt-token", "Secret name")
	natsSetupCmd.Flags().Bool("dry-run", false, "Print generated data without creating Secret")
	rootCmd.AddCommand(natsSetupCmd)
}

type bytesReaderCloser struct {
	data []byte
	pos  int
}

func bytesReader(data []byte) *bytesReaderCloser {
	return &bytesReaderCloser{data: data}
}

func (r *bytesReaderCloser) Read(p []byte) (n int, err error) {
	if r.pos >= len(r.data) {
		return 0, io.EOF
	}
	n = copy(p, r.data[r.pos:])
	r.pos += n
	return n, nil
}
