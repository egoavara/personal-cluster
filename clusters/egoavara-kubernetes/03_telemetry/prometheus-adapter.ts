import { helm } from "@pulumi/kubernetes";
import { telemetry as telemetryConfig } from "../utils/config.ts";
import { telemetryPhase } from "./phase.ts";
import { vmCluster } from "./vm-cluster.ts";
import { ns } from "./namespace.ts";

export const prometheusAdapter = new helm.v3.Release("prometheus-adapter", {
    chart: "prometheus-adapter",
    name: "prometheus-adapter",
    version: telemetryConfig.prometheusAdapter.version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://prometheus-community.github.io/helm-charts" },
    createNamespace: false,
    values: {
        replicas: 2,
        prometheus: {
            url: "http://vmselect-vm-cluster.telemetry.svc.cluster.local",
            port: 8481,
            path: "/select/0/prometheus",
        },
        resources: {
            requests: { cpu: "50m", memory: "64Mi" },
            limits: { cpu: "200m", memory: "256Mi" },
        },
    },
}, {
    parent: telemetryPhase,
    dependsOn: [vmCluster],
});
