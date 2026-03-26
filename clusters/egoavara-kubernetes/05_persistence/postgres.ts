import * as k8s from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { ns } from "./namespace.ts";

const namespace = ns.metadata.name;

// --- S3 WAL Archive ---
// pg_rewind timeline divergence 방지를 위해 WAL을 S3에 아카이브
// 쓰기 경로(로컬 pg_wal)는 변경 없음 — 백그라운드 아카이브만 추가
//
// OBC가 버킷 + S3 credentials(Secret) + 버킷 정보(ConfigMap)를 자동 생성
// barman이 OBC Secret을 직접 참조 → 별도 wrapper Secret 불필요

// OBC → 버킷 생성 + Secret(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
//        + ConfigMap(BUCKET_NAME, BUCKET_HOST, BUCKET_PORT) 자동 생성
// bucketName으로 정확한 이름 지정 — destinationPath를 고정할 수 있어 ConfigMap 읽기 불필요
// StorageClass rook-ceph-bucket은 01_essentials/rook-ceph.ts에서 정의
const walBucketName = "pg-wal-archive";

const walBucket = new k8s.apiextensions.CustomResource("pg-wal-archive", {
    apiVersion: "objectbucket.io/v1alpha1",
    kind: "ObjectBucketClaim",
    metadata: { name: "pg-wal-archive", namespace },
    spec: {
        bucketName: walBucketName,
        storageClassName: "rook-ceph-bucket",
    },
}, { parent: persistencePhase });

const s3Endpoint = "http://rook-ceph-rgw-object-store.rook-ceph.svc:80";

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
        backup: {
            barmanObjectStore: {
                destinationPath: `s3://${walBucketName}/`,
                endpointURL: s3Endpoint,
                s3Credentials: {
                    accessKeyId: { name: "pg-wal-archive", key: "AWS_ACCESS_KEY_ID" },
                    secretAccessKey: { name: "pg-wal-archive", key: "AWS_SECRET_ACCESS_KEY" },
                },
            },
            retentionPolicy: "7d",
        },
    },
}, { parent: persistencePhase, dependsOn: [walBucket] });

// ScheduledBackup — 매일 full backup, retention 정리의 기준점
// full backup 없이 WAL만 쌓으면 retention이 동작하지 않음
export const pgScheduledBackup = new k8s.apiextensions.CustomResource("pg-persistence-backup", {
    apiVersion: "postgresql.cnpg.io/v1",
    kind: "ScheduledBackup",
    metadata: { name: "pg-persistence-daily", namespace },
    spec: {
        schedule: "0 0 2 * * *", // 매일 02:00 UTC
        backupOwnerReference: "cluster",
        cluster: { name: "pg-persistence" },
        target: "prefer-standby",
    },
}, { parent: persistencePhase, dependsOn: [pgCluster] });

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
