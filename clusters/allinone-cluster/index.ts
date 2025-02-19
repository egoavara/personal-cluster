import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";
import * as rookceph from "@pulumi/rook-ceph";
import * as istio from "@pulumi/istio";
import * as gateway from "@pulumi/gateway-api";
import * as fs from "fs";

const config = new pulumi.Config();

export const global = {
  vault: {
    enabled: config.getBoolean("vault.enabled") ?? true,
  },
  "gateway-api": {
    enabled: config.getBoolean("gateway-api.enabled") ?? true,
  },
  rookceph: {
    enabled: config.getBoolean("rook-ceph.enabled") ?? true,
  },
  istio: {
    enabled: config.getBoolean("istio.enabled") ?? true,
  },
  prometheus: {
    enabled: config.getBoolean("prometheus.enabled") ?? true,
  },
  grafana: {
    enabled: config.getBoolean("grafana.enabled") ?? true,
  },
  "cert-manager": {
    enabled: (config.getBoolean("cert-manager.enabled") ?? true),
  },
  postgres: {
    enabled: config.getBoolean("postgres.enabled") ?? true,
  },

  elasticsearch: {
    enabled: config.getBoolean("elasticsearch.enabled") ?? true,
  },
  kibana: {
    enabled: config.getBoolean("kibana.enabled") ?? true,
  },

  redis: {
    enabled: config.getBoolean("cluster:redis.enabled") ?? true,
  },
} as const;


const result: {
  namespace: {
    telemetry?: k8s.core.v1.Namespace,
  },
  prometheus: {
    dashboards: Array<k8s.core.v1.ConfigMap>
  }
  helm: {
    certmanager?: k8s.helm.v3.Release,
    prometheus?: k8s.helm.v3.Release,
  },
} = {
  namespace: {},
  prometheus: {
    dashboards: [],
  },
  helm: {},
};

if (global.prometheus.enabled) {
  result.namespace.telemetry = new k8s.core.v1.Namespace("telemetry", {
    metadata: {
      name: "telemetry",
    },
  });
}


if (global["gateway-api"].enabled) {
  const gateway_api_crd = new k8s.yaml.ConfigFile("gateway-api", {
    file: "https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.2.0/standard-install.yaml",
  });
}

if (global.istio.enabled) {
  const ns_istio = new k8s.core.v1.Namespace("istio-system", {
    metadata: {
      name: "istio-system",
      labels: {
        "istio-injection": "enabled",
      },
    },
  });

  const istio_version = "1.24.3"
  const mesh_config = {
    discoverySelectors: [
      { matchLabels: { "istio.io/dataplane-mode": "ambient" } },
      { matchLabels: { "istio-injection": "enabled" } },
    ],
    defaultConfig: {
      tracing: {
        enabled: true,
        sampling: 100,
      }
    },
    defaultProviders: {
      tracing: ["opentelemetry"]
    },
    extensionProviders: [
      {
        name: "opentelemetry",
        opentelemetry: {
          service: "jaeger-collector.telemetry.svc.cluster.local",
          port: 4317
        },
      },
    ],
    enablePrometheusMerge: true,
    trustDomain: "cluster.local"
  };

  const istio_base = new k8s.helm.v3.Release("istio-base", {
    chart: "base",
    name: "istio-base",
    version: istio_version,
    namespace: ns_istio.metadata.name,
    repositoryOpts: {
      repo: "https://istio-release.storage.googleapis.com/charts",
    },
    createNamespace: false,
    skipCrds: false,
    values: {
      global: {
        namespace: ns_istio.metadata.name,
      },
    },
  });

  const istiod = new k8s.helm.v3.Release("istiod", {
    chart: "istiod",
    name: "istiod",
    version: istio_version,
    namespace: ns_istio.metadata.name,
    repositoryOpts: {
      repo: "https://istio-release.storage.googleapis.com/charts",
    },
    createNamespace: false,
    skipCrds: false,
    values: {
      profile: "ambient",
      global: {
        namespace: ns_istio.metadata.name,
      },
      pilot: {
        autoscaleMin: 2,
        cni: {
          enabled: true
        },
        traceSampling: 1.0,
      },
      meshConfig: mesh_config,
    },
  }, {
    dependsOn: [istio_base],
  });

  const istio_cni = new k8s.helm.v3.Release("istio-cni", {
    chart: "cni",
    name: "istio-cni",
    version: istio_version,
    namespace: ns_istio.metadata.name,
    repositoryOpts: {
      repo: "https://istio-release.storage.googleapis.com/charts",
    },
    createNamespace: false,
    skipCrds: false,
    values: {
      profile: "ambient",
      cni: {
        cniBinDir: "/opt/cni/bin",
        cniConfDir: "/etc/cni/net.d",
        ambient: {
          dnsCapture: false,
          ipv6: false,
        },
      },
    },
  }, {
    dependsOn: [istiod],
  });

  const ztunnel = new k8s.helm.v3.Release("ztunnel", {
    chart: "ztunnel",
    name: "ztunnel",
    version: istio_version,
    namespace: ns_istio.metadata.name,
    repositoryOpts: {
      repo: "https://istio-release.storage.googleapis.com/charts",
    },
    createNamespace: false,
    skipCrds: false,
    values: {
      istioNamespace: ns_istio.metadata.name,
      meshConfig: mesh_config,
    },
  }, {
    dependsOn: [istio_cni],
  });
}

// rock-ceph 구성
if (global.rookceph.enabled) {
  // // rook-ceph namespace 생성
  const ns_rookceph = new k8s.core.v1.Namespace("rook-ceph", {
    metadata: {
      name: "rook-ceph",
    },
  });
  // // rook-ceph operator 설치
  const rookcephOperator = new k8s.helm.v3.Release("rook-ceph", {
    chart: "rook-ceph",
    name: "rook-ceph",
    version: "1.16.2",
    namespace: ns_rookceph.metadata.name,
    repositoryOpts: {
      repo: "https://charts.rook.io/release",
    },
    skipCrds: true,
    values: {},
  }, {

  });
  // ceph cluster 생성
  const cephCluster = new rookceph.ceph.v1.CephCluster(
    "ceph-cluster",
    {
      metadata: {
        namespace: ns_rookceph.metadata.name,
      },
      spec: {
        cephVersion: { image: "quay.io/ceph/ceph:v19.2.0" },
        dataDirHostPath: "/var/lib/rook",
        // skipUpgradeChecks: false,
        waitTimeoutForHealthyOSDInMinutes: 10,
        // upgradeOSDRequiresHealthyPGs: false,
        mon: {
          count: 3,
          allowMultiplePerNode: true,
        },
        mgr: {
          count: 2,
          allowMultiplePerNode: true,
          modules: [
            { name: "rook", enabled: true },
          ]
        },
        dashboard: {
          enabled: true,
          ...(global.prometheus.enabled ? {} : {
            prometheusEndpoint: "http://kube-prometheus-stack-prometheus.telemetry.svc.cluster.local:9090",
            prometheusEndpointSSLVerify: false,
          }),
        },
        monitoring: {
          enabled: true,

          // metricsDisabled: false,
          exporter: {
            perfCountersPrioLimit: 5,
            statsPeriodSeconds: 5,
          }
        },
        network: {
          "connections": {
            encryption: {
              // enabled: false,
            },
            compression: {
              // enabled: false,
            },
            // requireMsgr2: false,
          }
        },
        crashCollector: {
        },
        logCollector: {
          enabled: true,
          periodicity: "daily",
          maxLogSize: "100M",
        },
        cleanupPolicy: {
          sanitizeDisks: {
            method: "quick",
            dataSource: "zero",
            iteration: 1,
          },
          allowUninstallWithVolumes: true,
        },
        // removeOSDsIfOutAndSafeToRemove: false,
        priorityClassNames: {
          "mon": "system-node-critical",
          "osd": "system-node-critical",
          "mgr": "system-cluster-critical",
        },
        storage: {
          useAllNodes: true,
          useAllDevices: true,
          deviceFilter: "^sd.+",
          // config: {},
          // allowDeviceClassUpdate: false,
          // allowOsdCrushWeightUpdate: false,
          // scheduleAlways: false,
          // onlyApplyOSDPlacement: false,
        },
        disruptionManagement: {
          managePodBudgets: true,
          osdMaintenanceTimeout: 30,
          // pgHealthCheckTimeout: 0,
        },
        csi: {
          readAffinity: {
            enabled: false,
          },
          cephfs: {}
        },
      },
    },
    { dependsOn: [rookcephOperator], ignoreChanges: ["spec.mgr.modules"] }
  );

  const defaultBlockPool = new rookceph.ceph.v1.CephBlockPool(
    "default-block-pool",
    {
      metadata: {
        namespace: ns_rookceph.metadata.name,
      },
      spec: {
        failureDomain: "host",
        replicated: {
          size: 3,
          requireSafeReplicaSize: true,
        },
      },
    },
    { dependsOn: [cephCluster] }
  );

  const cephBlock = new k8s.storage.v1.StorageClass(
    "rook-ceph-block",
    {
      metadata: {
        name: "rook-ceph-block",
      },
      provisioner: "rook-ceph.rbd.csi.ceph.com",
      parameters: {
        clusterID: ns_rookceph.metadata.name,
        pool: defaultBlockPool.metadata.name,
        imageFormat: "2",
        imageFeatures: "layering",
        "csi.storage.k8s.io/provisioner-secret-name": "rook-csi-rbd-provisioner",
        "csi.storage.k8s.io/provisioner-secret-namespace": ns_rookceph.metadata.name,
        "csi.storage.k8s.io/controller-expand-secret-name": "rook-csi-rbd-provisioner",
        "csi.storage.k8s.io/controller-expand-secret-namespace": ns_rookceph.metadata.name,
        "csi.storage.k8s.io/node-stage-secret-name": "rook-csi-rbd-node",
        "csi.storage.k8s.io/node-stage-secret-namespace": ns_rookceph.metadata.name,
        "csi.storage.k8s.io/fstype": "ext4",
      },
      allowVolumeExpansion: true,
      reclaimPolicy: "Delete",
    },
    { dependsOn: [defaultBlockPool] }
  );
  const cephDashboard = new k8s.core.v1.Service("ceph-dashboard", {
    metadata: {
      name: "ceph-dashboard",
      namespace: ns_rookceph.metadata.name,
    },
    spec: {
      type: "LoadBalancer",
      ports: [
        {
          name: "http-dashboard",
          protocol: "TCP",
          port: 80,
          targetPort: 7000,
        },
      ],
      selector: {
        app: "rook-ceph-mgr",
        mgr_role: "active",
        rook_cluster: ns_rookceph.metadata.name,
      },
    },
  }, { dependsOn: [cephCluster] });


  // 기타 대시보드 추가
  if (result.namespace.telemetry !== undefined) {
    result.prometheus.dashboards.push(new k8s.core.v1.ConfigMap("grafana-ceph-cluster", {
      metadata: {
        name: "grafana-ceph",
        namespace: ns_rookceph.metadata.name,
        labels: {
          "grafana_dashboard": "1"
        }
      },
      data: {
        "ceph-cluster.json": fs.readFileSync("./dashboards/grafana-ceph-cluster.json").toString(),
        "ceph-pool.json": fs.readFileSync("./dashboards/grafana-ceph-pool.json").toString(),
        "ceph-osd-single.json": fs.readFileSync("dashboards/grafana-ceph-osd-single.json").toString(),
        "ceph-osd-usage.json": fs.readFileSync("./dashboards/grafana-ceph-osd-usages.json").toString(),
      }
    }));
  }

}
if (global["cert-manager"].enabled) {
  result.helm.certmanager = new k8s.helm.v3.Release("cert-manager", {
    chart: "cert-manager",
    name: "cert-manager",
    version: "1.14.4",
    namespace: "kube-system",
    repositoryOpts: {
      repo: "https://charts.jetstack.io",
    },
    skipCrds: false,
    values: {
      installCRDs: true,
      prometheus: {
        enabled: global.prometheus.enabled,
      },
    },
  });
}

// prometheus 구성
if (global.prometheus.enabled) {
  const certmanager = result.helm.certmanager;
  if (certmanager === undefined) {
    throw new Error("cert-manager is required for prometheus");
  }
  if (result.namespace.telemetry === undefined) {
    throw new Error("telemetry namespace is required for prometheus");
  }
  // prometheus 설치
  result.helm.prometheus = new k8s.helm.v3.Release("kube-prometheus-stack", {
    chart: "kube-prometheus-stack",
    name: "kube-prometheus-stack",
    version: "65.0.0",
    namespace: result.namespace.telemetry.metadata.name,
    repositoryOpts: {
      repo: "https://prometheus-community.github.io/helm-charts",
    },
    skipCrds: false,
    values: {
      crds: { enabled: true },
      prometheusOperator: { enabled: true, admissionWebhooks: { enabled: true, certManager: { enabled: result.helm.certmanager !== undefined } } },
      prometheus: {
        enabled: true,
        service: {
          type: "LoadBalancer",
        },
        prometheusSpec: {
          podMonitorSelectorNilUsesHelmValues: false,
          serviceMonitorSelectorNilUsesHelmValues: false,
        },
        additionalRulesForClusterRole: [
          {
            apiGroups: [""],
            resources: ["nodes/proxy", "ingresses", "configmaps"],
            verbs: ["get", "list", "watch"],
          },
          {
            apiGroups: ["extensions", "networking.k8s.io"],
            resources: ["ingresses/status", "ingresses"],
            verbs: ["get", "list", "watch"],
          },
          {
            apiGroups: ["discovery.k8s.io"],
            resources: ["endpointslices"],
            verbs: ["get", "list", "watch"],
          },
          {
            apiGroups: ["monitoring.coreos.com"],
            resources: ["servicemonitors"],
            verbs: ["get", "list", "watch", "create", "update", "patch", "delete"],
          },
        ]
      },
      grafana: {
        enabled: global.grafana.enabled,
        service: {
          type: "LoadBalancer",
        },
        sidecar: {
          dashboards: {
            searchNamespace: [
              result.namespace.telemetry.metadata.name,
              ...result.prometheus.dashboards.map((v) => v.metadata.namespace)
            ],
          }
        }
      },
    },
  }, {
    dependsOn: [certmanager],
  });

}

// vault 구성
if (global.vault.enabled) {
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
}

