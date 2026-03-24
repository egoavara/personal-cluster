import { helm } from "@pulumi/kubernetes";
import { telemetry as telemetryConfig } from "../utils/config.ts";
import { operators } from "./phase.ts";

export const vmOperator = new helm.v3.Release("vm-operator", {
    chart: "victoria-metrics-operator",
    name: "vm-operator",
    version: telemetryConfig.vmOperator.version,
    namespace: "operator-system",
    repositoryOpts: { repo: "https://victoriametrics.github.io/helm-charts" },
    createNamespace: false,
    skipCrds: false,
    values: {
        operator: {
            disable_prometheus_converter: false,
            enable_converter_ownership: true,
        },
    },
}, { parent: operators });
