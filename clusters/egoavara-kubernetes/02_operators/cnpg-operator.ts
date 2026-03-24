import { helm } from "@pulumi/kubernetes";
import { operators } from "./phase.ts";

// CloudNativePG Operator — K8s 네이티브 PostgreSQL HA
// pgpool/Patroni/etcd 불필요, K8s API 기반 자동 failover
export const cnpgOperator = new helm.v3.Release("cnpg", {
    chart: "cloudnative-pg",
    name: "cnpg",
    version: "0.25.0",
    namespace: "operator-system",
    repositoryOpts: { repo: "https://cloudnative-pg.github.io/charts" },
    createNamespace: false,
    values: {
        resources: {
            requests: { cpu: "50m", memory: "64Mi" },
            limits: { cpu: "200m", memory: "256Mi" },
        },
    },
}, { parent: operators });
