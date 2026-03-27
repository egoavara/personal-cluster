import { helm } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { persistence as persistenceConfig } from "./config.ts";
import { ns } from "./namespace.ts";
import { clickhousePassword } from "./secrets.ts";

const namespace = ns.metadata.name;

export const clickhouse = new helm.v3.Release("clickhouse", {
    chart: "clickhouse",
    name: "clickhouse",
    version: persistenceConfig.clickhouse.version,
    namespace,
    repositoryOpts: { repo: persistenceConfig.clickhouse.repository },
    createNamespace: false,
    values: {
        clickhouse: {
            shardsCount: 1,
            replicasCount: 2,
            defaultUser: {
                password: clickhousePassword.result,
                allowExternalAccess: true, // 클러스터 내부 접근 허용
            },
            antiAffinity: true, // 같은 노드에 replica 배치 방지
            persistence: {
                enabled: true,
                size: "5Gi",
                storageClass: "topolvm-provisioner",
            },
            resources: {
                requests: { cpu: "100m", memory: "256Mi" },
                limits: { cpu: "1", memory: "1Gi" },
            },
            settings: {
                "prometheus/endpoint": "/metrics",
                "prometheus/port": "9363",
                "prometheus/metrics": "true",
                "prometheus/events": "true",
                "prometheus/asynchronous_metrics": "true",
            },
        },
        keeper: {
            enabled: true,
            replicaCount: 3,
            localStorage: {
                size: "1Gi",
                storageClass: "topolvm-provisioner",
            },
            resources: {
                cpuRequestsMs: 25,
                memoryRequestsMiB: "64Mi",
                cpuLimitsMs: 100,
                memoryLimitsMiB: "128Mi",
            },
        },
        operator: {
            enabled: true, // operator를 chart 내에 번들
        },
    },
}, { parent: persistencePhase });
