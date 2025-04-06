import { requireNamespace } from "./namespaces.ts";
import { core, helm, storage } from "@pulumi/kubernetes";
import * as rookceph from "@pulumi/rook-ceph";
import * as fs from "fs";
import { createDashboard, getPrometheusEndpoint } from "../optionals/prometheus.ts";

const ns = requireNamespace("rook-ceph");

export const rookcephOperator = new helm.v3.Release("rook-ceph", {
    chart: "rook-ceph",
    name: "rook-ceph",
    version: "1.16.2",
    namespace: ns.metadata.name,
    repositoryOpts: {
        repo: "https://charts.rook.io/release",
    },
    skipCrds: true,
    values: {},
});
export const cephCluster = new rookceph.ceph.v1.CephCluster(
    "ceph-cluster",
    {
        metadata: {
            namespace: ns.metadata.name,
        },
        spec: {
            cephVersion: { image: "quay.io/ceph/ceph:v19.2.1" },
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
            dashboard: getPrometheusEndpoint()
                .apply((prometheusEndpoint) => {
                    if (prometheusEndpoint === undefined) {
                        return {
                            enabled: false,
                        }
                    }
                    return {
                        enabled: true,
                        prometheusEndpoint: prometheusEndpoint,
                        prometheusEndpointSSLVerify: false,
                    }
                }),
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
export const defaultBlockPool = new rookceph.ceph.v1.CephBlockPool(
    "default-block-pool",
    {
        metadata: {
            namespace: ns.metadata.name,
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

export const cephBlock = new storage.v1.StorageClass(
    "rook-ceph-block",
    {
        metadata: {
            name: "rook-ceph-block",
        },
        provisioner: "rook-ceph.rbd.csi.ceph.com",
        parameters: {
            clusterID: ns.metadata.name,
            pool: defaultBlockPool.metadata.name,
            imageFormat: "2",
            imageFeatures: "layering",
            "csi.storage.k8s.io/provisioner-secret-name": "rook-csi-rbd-provisioner",
            "csi.storage.k8s.io/provisioner-secret-namespace": ns.metadata.name,
            "csi.storage.k8s.io/controller-expand-secret-name": "rook-csi-rbd-provisioner",
            "csi.storage.k8s.io/controller-expand-secret-namespace": ns.metadata.name,
            "csi.storage.k8s.io/node-stage-secret-name": "rook-csi-rbd-node",
            "csi.storage.k8s.io/node-stage-secret-namespace": ns.metadata.name,
            "csi.storage.k8s.io/fstype": "ext4",
        },
        allowVolumeExpansion: true,
        reclaimPolicy: "Delete",
    },
    { dependsOn: [defaultBlockPool] }
);

// S3 호환되는 객체 스토어 생성
export const objectStore = new rookceph.ceph.v1.CephObjectStore("object-store", {
    metadata: {
        namespace: ns.metadata.name,
        name: "object-store",
    },
    spec: {
        metadataPool: {
            failureDomain: "host",
            replicated: {
                size: 3,
            },
        },
        dataPool: {
            failureDomain: "host",
            erasureCoded: {
                dataChunks: 2,
                codingChunks: 1,
            },
        },
        gateway: {
            port: 80,
            instances: 2,
            rgwConfig: {}
        }
    },
})

export const objectStoreUser = new rookceph.ceph.v1.CephObjectStoreUser("object-store-user", {
    metadata: {
        namespace: ns.metadata.name,
        name: "object-store-user",
    },
    spec: {
        store: objectStore.metadata.name,
        displayName: "object-store-user",
        quotas: {
            maxBuckets: 100,
            maxSize: "10G",
            maxObjects: 10000,
        },
        capabilities: {
            "users": "*",
            "buckets": "*",
            "usage": "*",
            "metadata": "*",
            "zone": "*",
            "roles": "*",
            "info": "*",
            "amz-cache": "*",
            "bilog": "*",
            "mdlog": "*",
            "datalog": "*",
            "user-policy": "*",
            "oidc-provider": "*",
            "ratelimit": "*",
        }
    },
}, { dependsOn: [objectStore] });

// ceph dashboard 서비스 생성 (80 포트를 위해 생성)
export const cephDashboard = new core.v1.Service("ceph-dashboard", {
    metadata: {
        name: "ceph-dashboard",
        namespace: ns.metadata.name,
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
            rook_cluster: ns.metadata.name,
        },
    },
}, { dependsOn: [cephCluster] });

export const dashboard = createDashboard(ns, "grafana-ceph-cluster", {
    "ceph-cluster.json": fs.readFileSync("./dashboards/grafana-ceph-cluster.json").toString(),
    "ceph-pool.json": fs.readFileSync("./dashboards/grafana-ceph-pool.json").toString(),
    "ceph-osd-single.json": fs.readFileSync("dashboards/grafana-ceph-osd-single.json").toString(),
    "ceph-osd-usage.json": fs.readFileSync("./dashboards/grafana-ceph-osd-usages.json").toString(),
})