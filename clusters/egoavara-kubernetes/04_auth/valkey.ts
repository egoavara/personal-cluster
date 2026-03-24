import { helm } from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { auth as authConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";
import { guardValkeyPassword } from "./secrets.ts";

const namespace = ns.metadata.name;

export const guardValkey = new helm.v3.Release("guard-valkey", {
    chart: "valkey",
    name: "guard-valkey",
    version: authConfig.guardValkey.version,
    namespace,
    repositoryOpts: { repo: authConfig.guardValkey.repository },
    createNamespace: false,
    values: {
        architecture: "replication",
        auth: {
            enabled: true,
            password: guardValkeyPassword.result,
        },
        commonConfiguration: "appendonly yes\nappendfsync everysec",
        sentinel: {
            enabled: true,
            masterSet: "mymaster",
            quorum: 2,
            resources: {
                requests: { cpu: "25m", memory: "32Mi" },
                limits: { cpu: "100m", memory: "128Mi" },
            },
        },
        master: {
            persistence: {
                enabled: true,
                size: "1Gi",
                storageClass: "topolvm-provisioner",
            },
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "200m", memory: "256Mi" },
            },
        },
        replica: {
            replicaCount: 2,
            persistence: {
                enabled: true,
                size: "1Gi",
                storageClass: "topolvm-provisioner",
            },
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "200m", memory: "256Mi" },
            },
        },
        // Istio ambient mesh: RESP protocol doesn't work with L7 waypoint
        // Use pod label to bypass waypoint while staying in ambient mesh for mTLS
        commonLabels: {
            "istio.io/use-waypoint": "none",
        },
        tls: { enabled: false }, // Istio mTLS
        metrics: {
            enabled: true,
            serviceMonitor: { enabled: true },
        },
    },
}, { parent: authPhase });
