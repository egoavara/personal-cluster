import { helm } from "@pulumi/kubernetes";
import { telemetry as telemetryConfig } from "../utils/config.ts";
import { telemetryPhase } from "../phases.ts";
import { ns } from "./namespace.ts";

export const nodeExporter = new helm.v3.Release("node-exporter", {
    chart: "prometheus-node-exporter",
    name: "node-exporter",
    version: telemetryConfig.nodeExporter.version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://prometheus-community.github.io/helm-charts" },
    createNamespace: false,
    values: {
        prometheus: {
            monitor: {
                enabled: false,
            },
        },
        resources: {
            requests: { cpu: "50m", memory: "32Mi" },
            limits: { cpu: "200m", memory: "128Mi" },
        },
    },
}, { parent: telemetryPhase });
