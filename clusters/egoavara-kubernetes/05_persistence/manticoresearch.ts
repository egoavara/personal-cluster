import { helm } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { persistence as persistenceConfig } from "./config.ts";
import { ns } from "./namespace.ts";
import { waypointGateway } from "./waypoint.ts";

const namespace = ns.metadata.name;

export const manticoresearch = new helm.v3.Release("manticoresearch", {
    chart: "manticoresearch",
    name: "manticoresearch",
    version: persistenceConfig.manticoresearch.version,
    namespace,
    repositoryOpts: { repo: persistenceConfig.manticoresearch.repository },
    createNamespace: false,
    values: {
        worker: {
            replicaCount: 3,
            replicationMode: "multi-master",
            autoAddTablesInCluster: true,
            persistence: {
                enabled: true,
                size: "16Gi",
                storageClass: "topolvm-provisioner",
            },
            resources: {
                requests: { cpu: "100m", memory: "128Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        balancer: {
            enabled: true,
            replicaCount: 2,
            service: {
                http: {
                    port: 9308,
                    targetPort: 9308,
                },
            },
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "200m", memory: "128Mi" },
            },
        },
        podLabels: {
            "istio.io/use-waypoint": "waypoint",
        },
        exporter: {
            enabled: true,
        },
        serviceMonitor: {
            enabled: false,
        },
        optimize: {
            enabled: true,
            interval: "30",
        },
    },
}, { parent: persistencePhase, dependsOn: [waypointGateway] });
