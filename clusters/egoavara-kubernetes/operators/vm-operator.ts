import { core, helm } from "@pulumi/kubernetes";
import { telemetry as telemetryConfig } from "../utils/config.ts";
import { operators } from "../phases.ts";

const ns = new core.v1.Namespace("operator-system", {
    metadata: {
        name: "operator-system",
        labels: { "istio.io/dataplane-mode": "none" },
    },
}, { parent: operators });

export const vmOperator = new helm.v3.Release("vm-operator", {
    chart: "victoria-metrics-operator",
    name: "vm-operator",
    version: telemetryConfig.vmOperator.version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://victoriametrics.github.io/helm-charts" },
    createNamespace: false,
    skipCrds: false,
    values: {
        operator: {
            disable_prometheus_converter: false,
            enable_converter_ownership: true,
        },
    },
}, { parent: operators, dependsOn: [ns] });
