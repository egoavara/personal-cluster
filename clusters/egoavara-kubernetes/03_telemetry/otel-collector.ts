import { helm } from "@pulumi/kubernetes";
import { telemetry as telemetryConfig } from "../utils/config.ts";
import { telemetryPhase } from "../phases.ts";
import { vmCluster } from "./vm-cluster.ts";
import { vlCluster } from "./vl-cluster.ts";
import { vtCluster } from "./vt-cluster.ts";
import { ns } from "./namespace.ts";

export const otelCollector = new helm.v3.Release("otel-collector", {
    chart: "opentelemetry-collector",
    name: "otel-collector",
    version: telemetryConfig.otelCollector.version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://open-telemetry.github.io/opentelemetry-helm-charts" },
    createNamespace: false,
    values: {
        mode: "deployment",
        replicaCount: 2,
        image: {
            repository: "otel/opentelemetry-collector-contrib",
        },
        resources: {
            requests: { cpu: "100m", memory: "128Mi" },
            limits: { cpu: "500m", memory: "512Mi" },
        },
        ports: {
            "otlp": { enabled: true, containerPort: 4317, servicePort: 4317, protocol: "TCP" },
            "otlp-http": { enabled: true, containerPort: 4318, servicePort: 4318, protocol: "TCP" },
        },
        config: {
            receivers: {
                otlp: {
                    protocols: {
                        grpc: { endpoint: "0.0.0.0:4317" },
                        http: { endpoint: "0.0.0.0:4318" },
                    },
                },
            },
            processors: {
                batch: {
                    timeout: "5s",
                    send_batch_size: 1024,
                },
                memory_limiter: {
                    check_interval: "5s",
                    limit_mib: 400,
                    spike_limit_mib: 100,
                },
            },
            exporters: {
                "otlphttp/metrics": {
                    endpoint: "http://vminsert-vm-cluster.telemetry.svc.cluster.local:8480/insert/0/opentelemetry",
                    tls: { insecure: true },
                },
                "otlphttp/logs": {
                    endpoint: "http://vlinsert-vl-cluster.telemetry.svc.cluster.local:9480/insert/opentelemetry",
                    tls: { insecure: true },
                },
                "otlp/traces": {
                    endpoint: "vtinsert-otlp.telemetry.svc.cluster.local:4317",
                    tls: { insecure: true },
                },
            },
            service: {
                pipelines: {
                    metrics: {
                        receivers: ["otlp"],
                        processors: ["memory_limiter", "batch"],
                        exporters: ["otlphttp/metrics"],
                    },
                    logs: {
                        receivers: ["otlp"],
                        processors: ["memory_limiter", "batch"],
                        exporters: ["otlphttp/logs"],
                    },
                    traces: {
                        receivers: ["otlp"],
                        processors: ["memory_limiter", "batch"],
                        exporters: ["otlp/traces"],
                    },
                },
            },
        },
    },
}, {
    parent: telemetryPhase,
    dependsOn: [vmCluster, vlCluster, vtCluster],
});
