import { apiextensions, core } from "@pulumi/kubernetes";
import { telemetryPhase } from "./phase.ts";
import { ns } from "./namespace.ts";

export const vmCluster = new apiextensions.CustomResource("vm-cluster", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMCluster",
    metadata: {
        name: "vm-cluster",
        namespace: ns.metadata.name,
    },
    spec: {
        retentionPeriod: "30d",
        replicationFactor: 2,
        vminsert: {
            replicaCount: 2,
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        vmselect: {
            replicaCount: 2,
            cacheMountPath: "/cache",
            storage: {
                volumeClaimTemplate: {
                    spec: {
                        storageClassName: "topolvm-provisioner",
                        accessModes: ["ReadWriteOnce"],
                        resources: { requests: { storage: "5Gi" } },
                    },
                },
            },
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "512Mi" },
            },
        },
        vmstorage: {
            replicaCount: 3,
            storage: {
                volumeClaimTemplate: {
                    spec: {
                        storageClassName: "topolvm-provisioner",
                        accessModes: ["ReadWriteOnce"],
                        resources: { requests: { storage: "30Gi" } },
                    },
                },
            },
            resources: {
                requests: { cpu: "100m", memory: "256Mi" },
                limits: { cpu: "1", memory: "1Gi" },
            },
        },
    },
}, {
    parent: telemetryPhase,
});
