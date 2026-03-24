import { core, helm } from "@pulumi/kubernetes";
import { telemetry as telemetryConfig, auth as authConfig } from "../utils/config.ts";
import { telemetryPhase } from "./phase.ts";
import { vmCluster } from "./vm-cluster.ts";
import { vlCluster } from "./vl-cluster.ts";
import { vtCluster } from "./vt-cluster.ts";
import { ns } from "./namespace.ts";

const zitadelDomain = authConfig.zitadel.domain;

// Placeholder secret — zitadel-clients Job(auth phase)이 실제 값으로 덮어씀
const oidcPlaceholder = new core.v1.Secret("oidc-grafana-placeholder", {
    metadata: { name: "oidc-grafana", namespace: ns.metadata.name },
    stringData: { "client-id": "placeholder", "client-secret": "placeholder" },
}, { parent: telemetryPhase });

export const grafana = new helm.v3.Release("grafana", {
    chart: "grafana",
    name: "grafana",
    version: telemetryConfig.grafana.version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://grafana.github.io/helm-charts" },
    createNamespace: false,
    values: {
        replicas: 1,
        service: {
            type: "ClusterIP",
        },
        envValueFrom: {
            GF_AUTH_GENERIC_OAUTH_CLIENT_ID: { secretKeyRef: { name: "oidc-grafana", key: "client-id" } },
            GF_AUTH_GENERIC_OAUTH_CLIENT_SECRET: { secretKeyRef: { name: "oidc-grafana", key: "client-secret" } },
        },
        "grafana.ini": {
            server: {
                root_url: "https://grafana.private.egoavara.net",
            },
            "auth.generic_oauth": {
                enabled: true,
                name: "Zitadel",
                scopes: "openid profile email",
                auth_url: `https://${zitadelDomain}/oauth/v2/authorize`,
                token_url: `https://${zitadelDomain}/oauth/v2/token`,
                api_url: `https://${zitadelDomain}/oidc/v1/userinfo`,
                allow_sign_up: true,
                tls_skip_verify_insecure: true,
            },
        },
        persistence: {
            enabled: true,
            storageClassName: "rook-ceph-cephfs",
            accessModes: ["ReadWriteMany"],
            size: "5Gi",
        },
        datasources: {
            "datasources.yaml": {
                apiVersion: 1,
                datasources: [
                    {
                        name: "VictoriaMetrics",
                        type: "prometheus",
                        access: "proxy",
                        url: "http://vmselect-vm-cluster.telemetry.svc.cluster.local:8481/select/0/prometheus",
                        isDefault: true,
                    },
                    {
                        name: "VictoriaLogs",
                        type: "victoriametrics-logs-datasource",
                        access: "proxy",
                        url: "http://vlselect-vl-cluster.telemetry.svc.cluster.local:9471",
                    },
                    {
                        name: "VictoriaTraces",
                        type: "jaeger",
                        access: "proxy",
                        url: "http://vtselect-vt-cluster.telemetry.svc.cluster.local:10471/select/jaeger",
                    },
                ],
            },
        },
        dashboardProviders: {
            "dashboardproviders.yaml": {
                apiVersion: 1,
                providers: [
                    {
                        name: "kubernetes",
                        orgId: 1,
                        folder: "Kubernetes",
                        type: "file",
                        disableDeletion: false,
                        editable: true,
                        options: { path: "/var/lib/grafana/dashboards/kubernetes" },
                    },
                    {
                        name: "infrastructure",
                        orgId: 1,
                        folder: "Infrastructure",
                        type: "file",
                        disableDeletion: false,
                        editable: true,
                        options: { path: "/var/lib/grafana/dashboards/infrastructure" },
                    },
                    {
                        name: "ceph",
                        orgId: 1,
                        folder: "Ceph",
                        type: "file",
                        disableDeletion: false,
                        editable: true,
                        options: { path: "/var/lib/grafana/dashboards/ceph" },
                    },
                    {
                        name: "victoria",
                        orgId: 1,
                        folder: "Victoria",
                        type: "file",
                        disableDeletion: false,
                        editable: true,
                        options: { path: "/var/lib/grafana/dashboards/victoria" },
                    },
                    {
                        name: "logs",
                        orgId: 1,
                        folder: "Logs",
                        type: "file",
                        disableDeletion: false,
                        editable: true,
                        options: { path: "/var/lib/grafana/dashboards/logs" },
                    },
                    {
                        name: "traces",
                        orgId: 1,
                        folder: "Traces",
                        type: "file",
                        disableDeletion: false,
                        editable: true,
                        options: { path: "/var/lib/grafana/dashboards/traces" },
                    },
                    {
                        name: "guard",
                        orgId: 1,
                        folder: "Guard",
                        type: "file",
                        disableDeletion: false,
                        editable: true,
                        options: { path: "/var/lib/grafana/dashboards/guard" },
                    },
                ],
            },
        },
        dashboards: {
            kubernetes: {
                // K8s 전체 클러스터 개요 (namespace multi-select) — dotdc series
                "k8s-views-global": {
                    gnetId: 15757,
                    revision: 43,
                    datasource: "VictoriaMetrics",
                },
                // K8s 네임스페이스 단위 뷰 (multi-select)
                "k8s-views-namespaces": {
                    gnetId: 15758,
                    revision: 44,
                    datasource: "VictoriaMetrics",
                },
                // K8s 워크로드+Pod 리소스 (multi-pod 안전)
                "k8s-cluster-prometheus": {
                    gnetId: 6417,
                    revision: 1,
                    datasource: "VictoriaMetrics",
                },
                // K8s 노드 단위 뷰
                "k8s-views-nodes": {
                    gnetId: 15759,
                    revision: 40,
                    datasource: "VictoriaMetrics",
                },
                // K8s API Server
                "k8s-api-server": {
                    gnetId: 15761,
                    revision: 20,
                    datasource: "VictoriaMetrics",
                },
                // CoreDNS
                "coredns": {
                    gnetId: 15762,
                    revision: 22,
                    datasource: "VictoriaMetrics",
                },
            },
            infrastructure: {
                // Node Exporter Full (하드웨어/OS 상세)
                "node-exporter-full": {
                    gnetId: 1860,
                    revision: 42,
                    datasource: "VictoriaMetrics",
                },
            },
            ceph: {
                // Ceph Cluster 개요
                "ceph-cluster": {
                    gnetId: 2842,
                    revision: 18,
                    datasource: "VictoriaMetrics",
                },
                // Ceph OSD 상세
                "ceph-osd": {
                    gnetId: 5336,
                    revision: 9,
                    datasource: "VictoriaMetrics",
                },
                // Ceph Pool 상세
                "ceph-pools": {
                    gnetId: 5342,
                    revision: 9,
                    datasource: "VictoriaMetrics",
                },
            },
            victoria: {
                // VictoriaMetrics Cluster 자체 모니터링
                "vm-cluster": {
                    gnetId: 11176,
                    revision: 53,
                    datasource: "VictoriaMetrics",
                },
                // vmagent 모니터링
                "vmagent": {
                    gnetId: 12683,
                    revision: 21,
                    datasource: "VictoriaMetrics",
                },
            },
            logs: {
                // VictoriaLogs Explorer (로그 검색/탐색)
                "vlogs-explorer": {
                    gnetId: 22759,
                    revision: 9,
                    datasource: "VictoriaLogs",
                },
                // VictoriaLogs Cluster 모니터링 (수집률, 디스크 등)
                "vlogs-cluster": {
                    gnetId: 23274,
                    revision: 7,
                    datasource: "VictoriaMetrics",
                },
            },
            traces: {
                // VictoriaTraces Cluster 모니터링 (span 수집률, 에러 등)
                "vtraces-cluster": {
                    gnetId: 24134,
                    revision: 3,
                    datasource: "VictoriaMetrics",
                },
            },
            guard: {
                "guard-overview": {
                    json: JSON.stringify({
                        title: "Guard Overview",
                        uid: "guard-overview",
                        editable: true,
                        time: { from: "now-1h", to: "now" },
                        refresh: "30s",
                        templating: {
                            list: [{
                                name: "service",
                                type: "custom",
                                current: { text: "All", value: "$__all" },
                                options: [
                                    { text: "All", value: "$__all", selected: true },
                                    { text: "guard-ext-authz", value: "guard-ext-authz" },
                                    { text: "guard-dashboard", value: "guard-dashboard" },
                                ],
                                includeAll: true,
                                multi: false,
                            }],
                        },
                        panels: [
                            {
                                id: 1, title: "Request Rate", type: "timeseries",
                                gridPos: { h: 8, w: 12, x: 0, y: 0 },
                                targets: [{
                                    expr: `sum by (service_name, http_response_status_code) (rate(http_server_request_duration_seconds_count{service_name=~"guard-.*", service_name=~"$service"}[5m]))`,
                                    legendFormat: "{{service_name}} {{http_response_status_code}}",
                                }],
                                fieldConfig: { defaults: { unit: "reqps" } },
                            },
                            {
                                id: 2, title: "Request Latency (p95)", type: "timeseries",
                                gridPos: { h: 8, w: 12, x: 12, y: 0 },
                                targets: [{
                                    expr: `histogram_quantile(0.95, sum by (le, service_name) (rate(http_server_request_duration_seconds_bucket{service_name=~"guard-.*", service_name=~"$service"}[5m])))`,
                                    legendFormat: "p95 {{service_name}}",
                                }, {
                                    expr: `histogram_quantile(0.50, sum by (le, service_name) (rate(http_server_request_duration_seconds_bucket{service_name=~"guard-.*", service_name=~"$service"}[5m])))`,
                                    legendFormat: "p50 {{service_name}}",
                                }],
                                fieldConfig: { defaults: { unit: "s" } },
                            },
                            {
                                id: 3, title: "Authorization Decisions", type: "timeseries",
                                gridPos: { h: 8, w: 12, x: 0, y: 8 },
                                targets: [{
                                    expr: `sum by (decision, resource) (rate(guard_authz_decisions_total{service_name=~"$service"}[5m]))`,
                                    legendFormat: "{{decision}} ({{resource}})",
                                }],
                                fieldConfig: {
                                    defaults: { unit: "reqps" },
                                    overrides: [{
                                        matcher: { id: "byRegexp", options: "/denied/" },
                                        properties: [{ id: "color", value: { mode: "fixed", fixedColor: "red" } }],
                                    }],
                                },
                            },
                            {
                                id: 4, title: "Error Rate (5xx)", type: "stat",
                                gridPos: { h: 8, w: 12, x: 12, y: 8 },
                                targets: [{
                                    expr: `sum(rate(http_server_request_duration_seconds_count{service_name=~"guard-.*", service_name=~"$service", http_response_status_code=~"5.."}[5m])) / sum(rate(http_server_request_duration_seconds_count{service_name=~"guard-.*", service_name=~"$service"}[5m])) * 100`,
                                    legendFormat: "Error %",
                                }],
                                fieldConfig: {
                                    defaults: {
                                        unit: "percent",
                                        thresholds: {
                                            mode: "absolute",
                                            steps: [
                                                { color: "green", value: null },
                                                { color: "yellow", value: 1 },
                                                { color: "red", value: 5 },
                                            ],
                                        },
                                    },
                                },
                            },
                        ],
                        schemaVersion: 39,
                    }),
                },
            },
        },
        plugins: [
            "victoriametrics-logs-datasource",
        ],
        resources: {
            requests: { cpu: "100m", memory: "128Mi" },
            limits: { cpu: "500m", memory: "512Mi" },
        },
    },
}, {
    parent: telemetryPhase,
    dependsOn: [vmCluster, vlCluster, vtCluster, oidcPlaceholder],
});
