import { helm } from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { auth as authConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";
import { guardValkeyPassword } from "./secrets.ts";

const namespace = ns.metadata.name;

export const guardValkey = new helm.v3.Release("guard-valkey", {
    chart: "valkey",
    name: "guard-valkey",
    version: authConfig.guardValkey.version,
    namespace,
    repositoryOpts: { repo: authConfig.guardValkey.repository },
    createNamespace: false,
    values: {
        architecture: "replication",
        // Istio ambient ztunnel이 RESP 프로토콜 pod 간 통신에서 "Connection reset by peer" 유발
        // localhost는 정상, pod 간(Pod IP 직접)만 실패 — HBONE 터널링이 RESP와 충돌 추정
        // use-waypoint: none만으로는 부족, mesh 자체를 제외해야 함
        commonLabels: {
            "istio.io/dataplane-mode": "none",
        },
        auth: {
            enabled: true,
            password: guardValkeyPassword.result,
        },
        commonConfiguration: "appendonly yes\nappendfsync everysec",
        sentinel: {
            enabled: true,
            masterSet: "myprimary",
            quorum: 2,
            resources: {
                requests: { cpu: "25m", memory: "32Mi" },
                limits: { cpu: "100m", memory: "128Mi" },
            },
        },
        // Sentinel 모드에서는 단일 StatefulSet으로 3 pod (master 1 + replica 2)
        replica: {
            replicaCount: 3,
            persistence: {
                enabled: true,
                size: "1Gi",
                storageClass: "topolvm-provisioner",
            },
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "200m", memory: "256Mi" },
            },
        },
        tls: { enabled: false }, // Istio mTLS
        metrics: {
            enabled: true,
            serviceMonitor: { enabled: false }, // Prometheus Operator CRD 미설치 — VMServiceScrape로 대체
        },
    },
}, { parent: authPhase });
