import { helm } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { persistence as persistenceConfig } from "./config.ts";
import { ns } from "./namespace.ts";
import { valkeyPassword } from "./secrets.ts";

const namespace = ns.metadata.name;

export const valkey = new helm.v3.Release("valkey", {
    chart: "valkey",
    name: "valkey",
    version: persistenceConfig.valkey.version,
    namespace,
    repositoryOpts: { repo: persistenceConfig.valkey.repository },
    createNamespace: false,
    values: {
        architecture: "replication",
        auth: {
            enabled: true,
            password: valkeyPassword.result,
        },
        sentinel: {
            enabled: true,
            masterSet: "mymaster",
            quorum: 2,
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "200m", memory: "128Mi" },
            },
        },
        master: {
            persistence: {
                enabled: true,
                size: "5Gi",
                storageClass: "topolvm-provisioner",
            },
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "512Mi" },
            },
        },
        replica: {
            replicaCount: 2,
            persistence: {
                enabled: true,
                size: "5Gi",
                storageClass: "topolvm-provisioner",
            },
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "512Mi" },
            },
        },
        tls: { enabled: false }, // Istio mTLS
        metrics: {
            enabled: true,
            serviceMonitor: { enabled: true },
        },
    },
}, { parent: persistencePhase });
