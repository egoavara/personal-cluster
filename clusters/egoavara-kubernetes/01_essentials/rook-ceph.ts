import { requireNamespace } from "./namespaces.ts";
import { core, helm, storage } from "@pulumi/kubernetes";
import * as rookceph from "@pulumi/rook-ceph";
import { rookCeph as rookCephConfig } from "./config.ts";
import { essentials } from "./phase.ts";

const ns = requireNamespace("rook-ceph", {
    labels: {
        "istio.io/dataplane-mode": "none",
        "istio.io/gateway-route-target": "true",
    },
});

// ── Rook Ceph Operator ──────────────────────────────────────────────
export const rookcephOperator = new helm.v3.Release("rook-ceph", {
    chart: "rook-ceph",
    name: "rook-ceph",
    version: rookCephConfig.operatorVersion,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://charts.rook.io/release" },
    skipCrds: true,
    createNamespace: false,
    values: {},
}, { parent: essentials });

// ── CephCluster ─────────────────────────────────────────────────────
export const cephCluster = new rookceph.ceph.v1.CephCluster("ceph-cluster", {
    metadata: { namespace: ns.metadata.name },
    spec: {
        cephVersion: { image: rookCephConfig.cephImage },
        dataDirHostPath: "/var/lib/rook",
        waitTimeoutForHealthyOSDInMinutes: 10,
        mon: { count: 3, allowMultiplePerNode: true },
        mgr: {
            count: 2,
            allowMultiplePerNode: true,
            modules: [{ name: "rook", enabled: true }],
        },
        dashboard: { enabled: true },
        monitoring: {
            enabled: true,
            exporter: { perfCountersPrioLimit: 5, statsPeriodSeconds: 5 },
        },
        network: {
            connections: {
                encryption: {},
                compression: {},
            },
        },
        logCollector: { enabled: true, periodicity: "daily", maxLogSize: "100M" },
        cleanupPolicy: {
            sanitizeDisks: { method: "quick", dataSource: "zero", iteration: 1 },
            allowUninstallWithVolumes: true,
            wipeDevicesFromOtherClusters: true,
        },
        priorityClassNames: {
            mon: "system-node-critical",
            osd: "system-node-critical",
            mgr: "system-cluster-critical",
        },
        storage: {
            useAllNodes: true,
            useAllDevices: true,
            deviceFilter: rookCephConfig.deviceFilter,
        },
        disruptionManagement: {
            managePodBudgets: true,
            osdMaintenanceTimeout: 30,
        },
        csi: {
            readAffinity: { enabled: false },
            cephfs: {},
        },
    },
}, {
    parent: essentials,
    dependsOn: [rookcephOperator],
    ignoreChanges: ["spec.mgr.modules"],
    customTimeouts: { create: "15m", update: "15m" },
});

// ── Block Pool + StorageClass ───────────────────────────────────────
export const defaultBlockPool = new rookceph.ceph.v1.CephBlockPool("default-block-pool", {
    metadata: { namespace: ns.metadata.name },
    spec: {
        failureDomain: "host",
        replicated: { size: 3, requireSafeReplicaSize: true },
    },
}, { parent: essentials, dependsOn: [cephCluster] });

export const cephBlockSC = new storage.v1.StorageClass("rook-ceph-block", {
    metadata: { name: "rook-ceph-block" },
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
}, { parent: essentials, dependsOn: [defaultBlockPool] });

// ── CephFilesystem + StorageClass ───────────────────────────────────
export const cephFilesystem = new rookceph.ceph.v1.CephFilesystem("ceph-filesystem", {
    metadata: { namespace: ns.metadata.name, name: "ceph-filesystem" },
    spec: {
        metadataPool: {
            replicated: { size: 3 },
        },
        dataPools: [
            {
                name: "data0",
                failureDomain: "host",
                replicated: { size: 3 },
            },
        ],
        metadataServer: {
            activeCount: 1,
            activeStandby: true,
        },
    },
}, { parent: essentials, dependsOn: [cephCluster] });

export const cephfsSC = new storage.v1.StorageClass("rook-ceph-cephfs", {
    metadata: { name: "rook-ceph-cephfs" },
    provisioner: "rook-ceph.cephfs.csi.ceph.com",
    parameters: {
        clusterID: ns.metadata.name,
        fsName: cephFilesystem.metadata.name,
        pool: "ceph-filesystem-data0",
        "csi.storage.k8s.io/provisioner-secret-name": "rook-csi-cephfs-provisioner",
        "csi.storage.k8s.io/provisioner-secret-namespace": ns.metadata.name,
        "csi.storage.k8s.io/controller-expand-secret-name": "rook-csi-cephfs-provisioner",
        "csi.storage.k8s.io/controller-expand-secret-namespace": ns.metadata.name,
        "csi.storage.k8s.io/node-stage-secret-name": "rook-csi-cephfs-node",
        "csi.storage.k8s.io/node-stage-secret-namespace": ns.metadata.name,
    },
    allowVolumeExpansion: true,
    reclaimPolicy: "Delete",
}, { parent: essentials, dependsOn: [cephFilesystem] });

// ── Dashboard Service (ClusterIP — auth/ceph-proxy.ts에서 oauth2-proxy로 보호) ──
export const cephDashboard = new core.v1.Service("ceph-dashboard", {
    metadata: { name: "ceph-dashboard", namespace: ns.metadata.name },
    spec: {
        type: "ClusterIP",
        ports: [{
            name: "http-dashboard",
            protocol: "TCP",
            port: 80,
            targetPort: 7000,
        }],
        selector: {
            app: "rook-ceph-mgr",
            mgr_role: "active",
            rook_cluster: ns.metadata.name,
        },
    },
}, { parent: essentials, dependsOn: [cephCluster] });
