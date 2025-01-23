import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";
import * as rookceph from "@pulumi/rook-ceph";
import * as istio from "@pulumi/istio";

const config = new pulumi.Config();
const storageClass = config.require("storage-class");
const monPvcSize = config.require("mon-pvc-size");

const rookCephSystem = new kubernetes.core.v1.Namespace("rook-ceph-system", {
  metadata: {
    name: "rook-ceph-system",
  },
});
const namespace = {
  ceph: new kubernetes.core.v1.Namespace("ceph", {
    metadata: {
      name: "ceph",
    },
  }),
} as const;

// const vault = new kubernetes.helm.v3.Release("ingresscontroller", {
//     chart: "nginx-ingress",
//     namespace: "default",
//     repositoryOpts: {
//         repo: "https://helm.nginx.com/stable",
//     },
//     skipCrds: true,
//     values: {
//         controller: {
//             enableCustomResources: false,
//             appprotect: {
//                 enable: false,
//             },
//             appprotectdos: {
//                 enable: false,
//             },
//             service: {
//                 extraLabels: appLabels,
//             },
//         },
//     },
//     version: "0.14.1",
// });

const rookcephOperator = new kubernetes.helm.v3.Release("rook-ceph", {
  chart: "rook-ceph",
  version: "1.16.2",
  namespace: rookCephSystem.metadata.name,
  repositoryOpts: {
    repo: "https://charts.rook.io/release",
  },
  values: {},
});

const cephCluster = new rookceph.ceph.v1.CephCluster(
  "ceph-cluster",
  {
    metadata: {
      namespace: namespace.ceph.metadata.name,
    },
    spec: {
      cephVersion: {
        image: "quay.io/ceph/ceph:v19.2.0",
        allowUnsupported: false
      },
      dataDirHostPath: "/var/lib/rook",
      skipUpgradeChecks: false,
      continueUpgradeAfterChecksEvenIfNotHealthy: false,
      waitTimeoutForHealthyOSDInMinutes: 10,
      upgradeOSDRequiresHealthyPGs: false,
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
        ssl: false,
      },
      monitoring: {
        enabled: false,
        metricsDisabled: false,
        exporter: {
          perfCountersPrioLimit: 5,
          statsPeriodSeconds: 5,
        }
      },
      network: {
        "connections": {
          encryption: {
            enabled: false,
          },
          compression: {
            enabled: false,
          },
          requireMsgr2: false,
        }
      },
      crashCollector: {
        disable: false,
      },
      logCollector: {
        enabled: true,
        periodicity: "weekly",
        maxLogSize: "10M",
      },
      cleanupPolicy: {
        confirmation: "",
        sanitizeDisks: {
          method: "quick",
          dataSource: "zero",
          iteration: 1,
        },
        allowUninstallWithVolumes: true,
      },
      removeOSDsIfOutAndSafeToRemove: false,
      priorityClassNames: {
        "mon": "system-node-critical",
        "osd": "system-node-critical",
        "mgr": "system-cluster-critical",
      },
      storage: {
        useAllNodes: true,
        useAllDevices: true,
        config: {},
        allowDeviceClassUpdate: false,
        allowOsdCrushWeightUpdate: false,
        scheduleAlways: false,
        onlyApplyOSDPlacement: false,
      },
      disruptionManagement: {
        managePodBudgets: true,
        osdMaintenanceTimeout: 30,
        pgHealthCheckTimeout: 0,
      },
      csi: {
        readAffinity: {
          enabled: false,
        },
        cephfs: {}
      },
    },
  },
  { dependsOn: [rookcephOperator] }
);
