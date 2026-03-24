import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { pgZitadelPassword, pgSpicedbPassword } from "./secrets.ts";

const namespace = ns.metadata.name;

export const spicedbPgSecret = new k8s.core.v1.Secret("pg-spicedb-secret", {
    metadata: { name: "pg-spicedb-secret", namespace },
    stringData: {
        username: "spicedb",
        password: pgSpicedbPassword.result,
    },
}, { parent: authPhase });

// Zitadel user Secret (CloudNativePG가 이 Secret의 비밀번호로 owner 생성)
export const zitadelPgSecret = new k8s.core.v1.Secret("pg-zitadel-secret", {
    metadata: { name: "pg-zitadel-secret", namespace },
    type: "kubernetes.io/basic-auth",
    stringData: {
        username: "zitadel",
        password: pgZitadelPassword.result,
    },
}, { parent: authPhase });

// CloudNativePG PostgreSQL Cluster
// 3 instances: 1 primary + 2 replica, 자동 failover
// Services: pg-cluster-rw (쓰기), pg-cluster-ro (읽기 분산), pg-cluster-r (전체)
export const pgCluster = new k8s.apiextensions.CustomResource("pg-cluster", {
    apiVersion: "postgresql.cnpg.io/v1",
    kind: "Cluster",
    metadata: { name: "pg-cluster", namespace },
    spec: {
        instances: 3,
        imageName: "ghcr.io/cloudnative-pg/postgresql:17",
        postgresql: {
            parameters: {
                max_connections: "200",
                shared_buffers: "256MB",
            },
        },
        bootstrap: {
            initdb: {
                database: "zitadel",
                owner: "zitadel",
                secret: { name: "pg-zitadel-secret" },
                postInitSQL: [
                    "ALTER ROLE zitadel CREATEDB;",
                    "CREATE DATABASE spicedb OWNER spicedb;",
                ],
                postInitTemplateSQL: [
                    "GRANT ALL ON SCHEMA public TO zitadel;",
                ],
            },
        },
        managed: {
            roles: [{
                name: "spicedb",
                login: true,
                superuser: false,
                createdb: false,
                passwordSecret: { name: "pg-spicedb-secret" },
            }],
        },
        storage: {
            size: "10Gi",
            storageClass: "topolvm-provisioner",
        },
        resources: {
            requests: { cpu: "250m", memory: "512Mi" },
            limits: { cpu: "1", memory: "1Gi" },
        },
        affinity: {
            topologyKey: "kubernetes.io/hostname",
        },
    },
}, { parent: authPhase });
