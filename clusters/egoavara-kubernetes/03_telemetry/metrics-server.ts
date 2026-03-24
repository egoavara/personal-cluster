import { helm } from "@pulumi/kubernetes";
import { telemetry as telemetryConfig } from "../utils/config.ts";
import { telemetryPhase } from "./phase.ts";
import { ns } from "./namespace.ts";

export const metricsServer = new helm.v3.Release("metrics-server", {
    chart: "metrics-server",
    name: "metrics-server",
    version: telemetryConfig.metricsServer.version,
    namespace: "kube-system",
    repositoryOpts: { repo: "https://kubernetes-sigs.github.io/metrics-server" },
    createNamespace: false,
    values: {
        replicas: 2,
        args: [
            "--kubelet-insecure-tls",
        ],
        resources: {
            requests: { cpu: "50m", memory: "64Mi" },
            limits: { cpu: "200m", memory: "256Mi" },
        },
    },
}, { parent: telemetryPhase });
