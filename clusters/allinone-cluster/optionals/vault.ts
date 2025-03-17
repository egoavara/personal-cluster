
// prometheus 구성

// vault 구성
// if (global.vault.enabled) {
  //   const vault = new k8s.helm.v3.Release("vault", {
  //     chart: "vault",
  //     name: "vault",
  //     version: "0.29.1",
  //     namespace: namespace.vault.metadata.name,
  //     repositoryOpts: {
  //       repo: "https://helm.releases.hashicorp.com",
  //     },
  //     skipCrds: true,
  //     values: {
  //       injectors: {
  //         enable: "false",
  //       },
  //       server: {
  //         enabled: "true",
  //         dataStorage: {
  //           enabled: "true",
  //           size: "5Gi",
  //           mountPath: "/vault/data",
  //           storageClass: global.rookceph.enabled ? "rook-ceph-block" : null,
  //         },
  //         persistentVolumeClaimRetentionPolicy: {
  //           whenDeleted: "Delete",
  //           whenScaled: "Delete",
  //         },
  //         auditStorage: {
  //           enabled: "false",
  //         },
  //         dev: {
  //           enabled: "false",
  //         },
  //         standalone: {
  //           enabled: "false",
  //         },
  //         ha: {
  //           enabled: "true",
  //           raft: {
  //             enabled: "true",
  //             config: `
  // ui = true

  // listener "tcp" {
  //   tls_disable = 1
  //   address = "[::]:8200"
  //   cluster_address = "[::]:8201"
  //   # Enable unauthenticated metrics access (necessary for Prometheus Operator)
  //   telemetry {
  //     unauthenticated_metrics_access = "true"
  //   }
  // }

  // storage "raft" {
  //   path = "/vault/data"
  // }

  // service_registration "kubernetes" {}
  // `
  //           }
  //         },
  //       },
  //       ui: {
  //         enabled: "true",
  //         serviceType: "LoadBalancer",
  //       },
  //       csi: {
  //         enabled: "true",
  //       }
  //     },
  //   });
// }
