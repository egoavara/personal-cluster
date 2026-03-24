import { helm } from "@pulumi/kubernetes";
import { telemetry as telemetryConfig } from "../utils/config.ts";
import { telemetryPhase } from "../phases.ts";
import { ns } from "./namespace.ts";

export const kubeStateMetrics = new helm.v3.Release("kube-state-metrics", {
    chart: "kube-state-metrics",
    name: "kube-state-metrics",
    version: telemetryConfig.kubeStateMetrics.version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://prometheus-community.github.io/helm-charts" },
    createNamespace: false,
    values: {
        replicas: 2,
        prometheus: {
            monitor: {
                enabled: false,
            },
        },
        resources: {
            requests: { cpu: "50m", memory: "64Mi" },
            limits: { cpu: "200m", memory: "256Mi" },
        },
    },
}, { parent: telemetryPhase });
