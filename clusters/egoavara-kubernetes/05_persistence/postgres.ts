import * as k8s from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { ns } from "./namespace.ts";

const namespace = ns.metadata.name;

// CloudNativePG PostgreSQL Cluster — 범용 공유 DB
// 3 instances: 1 primary + 2 replica, 자동 failover
// Services: pg-persistence-rw (쓰기), pg-persistence-ro (읽기 분산), pg-persistence-r (전체)
export const pgCluster = new k8s.apiextensions.CustomResource("pg-persistence", {
    apiVersion: "postgresql.cnpg.io/v1",
    kind: "Cluster",
    metadata: { name: "pg-persistence", namespace },
    spec: {
        instances: 3,
        imageName: "ghcr.io/cloudnative-pg/postgresql:17",
        postgresql: {
            parameters: {
                max_connections: "200",
                shared_buffers: "512MB",
                effective_cache_size: "1536MB",
            },
        },
        bootstrap: {
            initdb: {
                database: "app",
                owner: "app",
            },
        },
        storage: {
            size: "30Gi",
            storageClass: "topolvm-provisioner",
        },
        resources: {
            requests: { cpu: "500m", memory: "1Gi" },
            limits: { cpu: "2", memory: "2Gi" },
        },
        affinity: {
            topologyKey: "kubernetes.io/hostname",
        },
    },
}, { parent: persistencePhase });

// PgBouncer Pooler — Read-Write (앱은 이 서비스로 쓰기 연결)
export const pgPoolerRw = new k8s.apiextensions.CustomResource("pg-pooler-rw", {
    apiVersion: "postgresql.cnpg.io/v1",
    kind: "Pooler",
    metadata: { name: "pg-persistence-pooler-rw", namespace },
    spec: {
        cluster: { name: "pg-persistence" },
        type: "rw",
        instances: 2,
        pgbouncer: {
            poolMode: "transaction",
            parameters: {
                default_pool_size: "25",
                max_client_conn: "200",
            },
        },
    },
}, { parent: persistencePhase, dependsOn: [pgCluster] });

// PgBouncer Pooler — Read-Only (앱은 이 서비스로 읽기 연결)
export const pgPoolerRo = new k8s.apiextensions.CustomResource("pg-pooler-ro", {
    apiVersion: "postgresql.cnpg.io/v1",
    kind: "Pooler",
    metadata: { name: "pg-persistence-pooler-ro", namespace },
    spec: {
        cluster: { name: "pg-persistence" },
        type: "ro",
        instances: 2,
        pgbouncer: {
            poolMode: "transaction",
            parameters: {
                default_pool_size: "25",
                max_client_conn: "200",
            },
        },
    },
}, { parent: persistencePhase, dependsOn: [pgCluster] });
