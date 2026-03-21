import { apiextensions, core } from "@pulumi/kubernetes";
import { telemetryPhase } from "../phases.ts";
import { vmOperator } from "../operators/vm-operator.ts";
import { ns } from "./namespace.ts";

export const vtCluster = new apiextensions.CustomResource("vt-cluster", {
    apiVersion: "operator.victoriametrics.com/v1",
    kind: "VTCluster",
    metadata: {
        name: "vt-cluster",
        namespace: ns.metadata.name,
    },
    spec: {
        retentionPeriod: "14d",
        insert: {
            replicaCount: 2,
            extraArgs: {
                "otlpGRPCListenAddr": ":4317",
                "otlpGRPC.tls": "false",
            },
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        select: {
            replicaCount: 2,
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        storage: {
            replicaCount: 2,
            storage: {
                volumeClaimTemplate: {
                    spec: {
                        storageClassName: "topolvm-provisioner",
                        accessModes: ["ReadWriteOnce"],
                        resources: { requests: { storage: "15Gi" } },
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

// vtinsert OTLP gRPC Service (Operator가 자동 생성하지 않는 4317 포트)
export const vtinsertOtlpService = new core.v1.Service("vtinsert-otlp", {
    metadata: {
        name: "vtinsert-otlp",
        namespace: ns.metadata.name,
    },
    spec: {
        selector: {
            "app.kubernetes.io/name": "vtinsert",
            "app.kubernetes.io/instance": "vt-cluster",
        },
        ports: [{
            name: "otlp-grpc",
            port: 4317,
            targetPort: 4317,
            protocol: "TCP",
        }],
    },
}, { parent: telemetryPhase, dependsOn: [vtCluster] });
