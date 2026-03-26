import { helm } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { persistence as persistenceConfig } from "./config.ts";
import { ns } from "./namespace.ts";
import { natsAuthToken } from "./secrets.ts";

const namespace = ns.metadata.name;

export const nats = new helm.v3.Release("nats", {
    chart: "nats",
    name: "nats",
    version: persistenceConfig.nats.version,
    namespace,
    repositoryOpts: { repo: persistenceConfig.nats.repository },
    createNamespace: false,
    values: {
        config: {
            cluster: {
                enabled: true,
                replicas: 3,
            },
            jetstream: {
                enabled: true,
                fileStore: {
                    pvc: {
                        size: "5Gi",
                        storageClassName: "topolvm-provisioner",
                    },
                },
            },
        },
        container: {
            merge: {
                resources: {
                    requests: { cpu: "100m", memory: "128Mi" },
                    limits: { cpu: "500m", memory: "512Mi" },
                },
            },
        },
        podTemplate: {
            topologySpreadConstraints: {
                "kubernetes.io/hostname": {
                    maxSkew: 1,
                    whenUnsatisfiable: "DoNotSchedule",
                },
            },
        },
        reloader: {
            enabled: false,
        },
    },
}, { parent: persistencePhase });
