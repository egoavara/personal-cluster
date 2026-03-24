import { apiextensions } from "@pulumi/kubernetes";
import { telemetryPhase } from "../phases.ts";
import { vmOperator } from "../operators/vm-operator.ts";
import { ns } from "./namespace.ts";

export const vlCluster = new apiextensions.CustomResource("vl-cluster", {
    apiVersion: "operator.victoriametrics.com/v1",
    kind: "VLCluster",
    metadata: {
        name: "vl-cluster",
        namespace: ns.metadata.name,
    },
    spec: {
        retentionPeriod: "30d",
        vlinsert: {
            replicaCount: 2,
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        vlselect: {
            replicaCount: 2,
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        vlstorage: {
            replicaCount: 3,
            storage: {
                volumeClaimTemplate: {
                    spec: {
                        storageClassName: "topolvm-provisioner",
                        accessModes: ["ReadWriteOnce"],
                        resources: { requests: { storage: "20Gi" } },
                    },
                },
            },
            resources: {
                requests: { cpu: "100m", memory: "256Mi" },
                limits: { cpu: "500m", memory: "512Mi" },
            },
        },
    },
}, {
    parent: telemetryPhase,
    dependsOn: [vmOperator],
});
