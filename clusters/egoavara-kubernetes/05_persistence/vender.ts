import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";
import { core, apps } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { cluster } from "./config.ts";

const namespace = ns.metadata.name;

const config = new pulumi.Config("cluster");
const venderImage = config.get("persistence.vender.image") ?? "ghcr.io/egoavara/vender:latest";

// Cross-phase secrets: auth phase의 SpiceDB preshared key, Zitadel PAT은
// K8s Secret으로 persistence NS에 복제됨 (04_auth의 zitadel-clients Job 패턴 참조)
// 여기서는 Secret 이름만 참조하고, 실제 값은 K8s Secret에서 가져옴

// --- ConfigMap: templates 정의 (비밀 정보 미포함) ---
const venderConfig = new core.v1.ConfigMap("vender-config", {
    metadata: { name: "vender-config", namespace },
    data: {
        "config.yaml": `
listenAddr: ":8080"
services:
  nats:
    url: "nats://nats.persistence.svc.cluster.local:4222"
  qdrant:
    signingKey: ""
templates:
  # --- PostgreSQL ---
  - id: pg-admin
    name: "PostgreSQL Admin"
    description: "ALL PRIVILEGES + schema CREATE on app database"
    service: postgres
    ttl: 8h
    params:
      grants: ALL
      schema: public
      database: app
      schemaCreate: "true"
  - id: pg-manager
    name: "PostgreSQL Manager"
    description: "DDL + DML (CREATE TABLE, TRUNCATE, SELECT, INSERT, UPDATE, DELETE)"
    service: postgres
    ttl: 12h
    params:
      grants: "SELECT,INSERT,UPDATE,DELETE,TRUNCATE,REFERENCES,TRIGGER"
      schema: public
      database: app
      schemaCreate: "true"
  - id: pg-worker
    name: "PostgreSQL Worker"
    description: "DML only (SELECT, INSERT, UPDATE, DELETE)"
    service: postgres
    ttl: 24h
    params:
      grants: "SELECT,INSERT,UPDATE,DELETE"
      schema: public
      database: app
  - id: pg-viewer
    name: "PostgreSQL Viewer"
    description: "Read-only (SELECT)"
    service: postgres
    ttl: 24h
    params:
      grants: SELECT
      schema: public
      database: app
  # --- Valkey ---
  - id: valkey-admin
    name: "Valkey Admin"
    description: "All commands on all keys"
    service: valkey
    ttl: 8h
    params:
      commands: "+@all"
      keys: "~*"
  - id: valkey-manager
    name: "Valkey Manager"
    description: "All commands except dangerous operations"
    service: valkey
    ttl: 12h
    params:
      commands: "+@all -@dangerous"
      keys: "~*"
  - id: valkey-worker
    name: "Valkey Worker"
    description: "Read and write commands"
    service: valkey
    ttl: 24h
    params:
      commands: "+@read +@write"
      keys: "~*"
  - id: valkey-viewer
    name: "Valkey Viewer"
    description: "Read-only commands"
    service: valkey
    ttl: 24h
    params:
      commands: "+@read"
      keys: "~*"
  # --- NATS ---
  - id: nats-admin
    name: "NATS Admin"
    description: "Publish and subscribe on all subjects"
    service: nats
    ttl: 8h
    params:
      pub.allow: ">"
      sub.allow: ">"
  - id: nats-manager
    name: "NATS Manager"
    description: "Publish and subscribe on all subjects"
    service: nats
    ttl: 12h
    params:
      pub.allow: ">"
      sub.allow: ">"
  - id: nats-worker
    name: "NATS Worker"
    description: "Publish and subscribe on app subjects"
    service: nats
    ttl: 24h
    params:
      pub.allow: "app.>"
      sub.allow: "app.>"
  - id: nats-viewer
    name: "NATS Viewer"
    description: "Subscribe only on all subjects"
    service: nats
    ttl: 24h
    params:
      sub.allow: ">"
  # --- etcd ---
  - id: etcd-admin
    name: "etcd Admin"
    description: "Read/write on all keys"
    service: etcd
    ttl: 8h
    params:
      keyPrefix: /
      permission: readWrite
  - id: etcd-manager
    name: "etcd Manager"
    description: "Read/write on all keys"
    service: etcd
    ttl: 12h
    params:
      keyPrefix: /
      permission: readWrite
  - id: etcd-worker
    name: "etcd Worker"
    description: "Read/write on /app/ prefix"
    service: etcd
    ttl: 24h
    params:
      keyPrefix: /app/
      permission: readWrite
  - id: etcd-viewer
    name: "etcd Viewer"
    description: "Read-only on /app/ prefix"
    service: etcd
    ttl: 24h
    params:
      keyPrefix: /app/
      permission: readOnly
  # --- Qdrant ---
  - id: qdrant-admin
    name: "Qdrant Admin"
    description: "Manage access (create/delete collections)"
    service: qdrant
    ttl: 8h
    params:
      access: m
  - id: qdrant-manager
    name: "Qdrant Manager"
    description: "Read/write access to all collections"
    service: qdrant
    ttl: 12h
    params:
      access: rw
  - id: qdrant-worker
    name: "Qdrant Worker"
    description: "Read/write access to all collections"
    service: qdrant
    ttl: 24h
    params:
      access: rw
  - id: qdrant-viewer
    name: "Qdrant Viewer"
    description: "Read-only access to all collections"
    service: qdrant
    ttl: 24h
    params:
      access: r
  # --- Ceph S3 ---
  - id: ceph-s3-admin
    name: "Ceph S3 Admin"
    description: "Full S3 access (bucket + object operations)"
    service: ceph-s3
    ttl: 8h
  - id: ceph-s3-manager
    name: "Ceph S3 Manager"
    description: "S3 access for management tasks"
    service: ceph-s3
    ttl: 24h
  - id: ceph-s3-worker
    name: "Ceph S3 Worker"
    description: "S3 access for read/write operations"
    service: ceph-s3
    ttl: 72h
  - id: ceph-s3-viewer
    name: "Ceph S3 Viewer"
    description: "S3 access for read operations"
    service: ceph-s3
    ttl: 168h
  # --- Manticore ---
  - id: manticore-admin
    name: "Manticore Admin"
    description: "Full API access via Zitadel PAT"
    service: manticore
    ttl: 8h
  - id: manticore-manager
    name: "Manticore Manager"
    description: "API access for index management"
    service: manticore
    ttl: 24h
  - id: manticore-worker
    name: "Manticore Worker"
    description: "API access for search and indexing"
    service: manticore
    ttl: 72h
  - id: manticore-viewer
    name: "Manticore Viewer"
    description: "API access for search queries"
    service: manticore
    ttl: 168h
  # --- ClickHouse ---
  - id: clickhouse-admin
    name: "ClickHouse Admin"
    description: "ALL privileges on default database"
    service: clickhouse
    ttl: 8h
    params:
      grants: ALL
      database: default
  - id: clickhouse-manager
    name: "ClickHouse Manager"
    description: "DDL + DML (CREATE, ALTER, DROP, SELECT, INSERT, TRUNCATE)"
    service: clickhouse
    ttl: 12h
    params:
      grants: "SELECT,INSERT,CREATE,ALTER,DROP,TRUNCATE"
      database: default
  - id: clickhouse-worker
    name: "ClickHouse Worker"
    description: "DML only (SELECT, INSERT)"
    service: clickhouse
    ttl: 24h
    params:
      grants: "SELECT,INSERT"
      database: default
  - id: clickhouse-viewer
    name: "ClickHouse Viewer"
    description: "Read-only (SELECT)"
    service: clickhouse
    ttl: 24h
    params:
      grants: SELECT
      database: default
`,
    },
}, { parent: persistencePhase });

import { pgVenderPassword, clickhousePassword } from "./secrets.ts";
import { pgCluster, pgVenderSecret } from "./postgres.ts";
import { nats } from "./nats.ts";
import { etcd } from "./etcd.ts";
import { clickhouse } from "./clickhouse.ts";

// --- Secret: 민감 설정 (서비스 접속 정보, SpiceDB, Zitadel) ---
const venderSecrets = new core.v1.Secret("vender-secrets", {
    metadata: { name: "vender-secrets", namespace },
    stringData: {
        "secrets.yaml": pulumi.all([pgVenderPassword.result, clickhousePassword.result]).apply(([pgPass, chPass]) => {
            const authNs = cluster.authNamespace;
            const ns = "persistence";
            return `
spicedb:
  endpoint: "spicedb.${authNs}.svc.cluster.local:50051"
  presharedKey: ""
zitadel:
  apiEndpoint: "http://zitadel.${authNs}.svc.cluster.local:8080"
  hostHeader: "${cluster.authDomain}"
  pat: ""
  projectID: ""
services:
  postgres:
    dsn: "postgresql://vender:${pgPass}@pg-persistence-rw.${ns}.svc.cluster.local:5432/app?sslmode=disable"
  valkey:
    addr: "valkey-node-0.valkey-headless.${ns}.svc.cluster.local:6379"
    password: ""
  etcd:
    endpoints:
      - "etcd-0.etcd-headless.${ns}.svc.cluster.local:2379"
      - "etcd-1.etcd-headless.${ns}.svc.cluster.local:2379"
      - "etcd-2.etcd-headless.${ns}.svc.cluster.local:2379"
    rootPassword: ""
  clickhouse:
    dsn: "clickhouse://default:${chPass}@clickhouse-clickhouse.${ns}.svc.cluster.local:9000/default?secure=false"
`;
        }),
    },
}, { parent: persistencePhase });

// --- Deployment ---
export const venderDeployment = new apps.v1.Deployment("vender", {
    metadata: { name: "vender", namespace },
    spec: {
        replicas: 2,
        selector: { matchLabels: { app: "vender" } },
        template: {
            metadata: { labels: { app: "vender" } },
            spec: {
                topologySpreadConstraints: [{
                    maxSkew: 1,
                    topologyKey: "kubernetes.io/hostname",
                    whenUnsatisfiable: "DoNotSchedule",
                    labelSelector: { matchLabels: { app: "vender" } },
                }],
                serviceAccountName: "vender",
                containers: [{
                    name: "vender",
                    image: venderImage,
                    args: ["--config", "/config/config.yaml", "--config", "/secrets/secrets.yaml", "serve"],
                    ports: [{ containerPort: 8080, name: "http" }],
                    resources: {
                        requests: { cpu: "25m", memory: "32Mi" },
                        limits: { cpu: "200m", memory: "128Mi" },
                    },
                    readinessProbe: {
                        httpGet: { path: "/healthz", port: 8080 },
                        initialDelaySeconds: 5,
                        periodSeconds: 10,
                    },
                    livenessProbe: {
                        httpGet: { path: "/healthz", port: 8080 },
                        initialDelaySeconds: 15,
                        periodSeconds: 30,
                    },
                    volumeMounts: [
                        { name: "config", mountPath: "/config" },
                        { name: "secrets", mountPath: "/secrets" },
                    ],
                    env: [
                        {
                            name: "VALKEY_PASSWORD",
                            valueFrom: { secretKeyRef: { name: "valkey", key: "valkey-password", optional: true } },
                        },
                        {
                            name: "ETCD_ROOT_PASSWORD",
                            valueFrom: { secretKeyRef: { name: "etcd", key: "etcd-root-password", optional: true } },
                        },
                        // NATS JWT mode seeds (from nats-jwt-token Secret created by `vender nats-setup`)
                        {
                            name: "NATS_ACCOUNT_SEED",
                            valueFrom: { secretKeyRef: { name: "nats-jwt-token", key: "account-seed", optional: true } },
                        },
                        {
                            name: "NATS_OPERATOR_SEED",
                            valueFrom: { secretKeyRef: { name: "nats-jwt-token", key: "operator-seed", optional: true } },
                        },
                        {
                            name: "NATS_SYS_USER_JWT",
                            valueFrom: { secretKeyRef: { name: "nats-jwt-token", key: "sys-user-jwt", optional: true } },
                        },
                        {
                            name: "NATS_SYS_USER_SEED",
                            valueFrom: { secretKeyRef: { name: "nats-jwt-token", key: "sys-user-seed", optional: true } },
                        },
                        {
                            name: "QDRANT_API_KEY",
                            valueFrom: { secretKeyRef: { name: "vender-qdrant-apikey", key: "api-key", optional: true } },
                        },
                        // Cross-phase: SpiceDB preshared key (auth NS에서 복제 필요)
                        {
                            name: "SPICEDB_PRESHARED_KEY",
                            valueFrom: { secretKeyRef: { name: "vender-auth-secrets", key: "spicedb-preshared-key", optional: true } },
                        },
                        // Cross-phase: Zitadel PAT (auth NS에서 복제 필요)
                        {
                            name: "ZITADEL_PAT",
                            valueFrom: { secretKeyRef: { name: "vender-auth-secrets", key: "zitadel-pat", optional: true } },
                        },
                        {
                            name: "ZITADEL_PROJECT_ID",
                            valueFrom: { secretKeyRef: { name: "vender-auth-secrets", key: "zitadel-project-id", optional: true } },
                        },
                    ],
                }],
                volumes: [
                    { name: "config", configMap: { name: "vender-config" } },
                    { name: "secrets", secret: { secretName: "vender-secrets" } },
                ],
            },
        },
    },
}, { parent: persistencePhase, dependsOn: [venderConfig, venderSecrets, pgVenderSecret, pgCluster, nats, etcd, clickhouse] });

// --- Service ---
export const venderService = new core.v1.Service("vender-svc", {
    metadata: {
        name: "vender",
        namespace,
        labels: { app: "vender" },
    },
    spec: {
        selector: { app: "vender" },
        ports: [{
            name: "http",
            port: 8080,
            targetPort: 8080,
            appProtocol: "http",
        }],
    },
}, { parent: persistencePhase });

// --- HTTPRoute: vender.private.egoavara.net ---
const privateDomain = `private.${cluster.domain}`;

export const venderRoute = new k8s.apiextensions.CustomResource("vender-private-route", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "HTTPRoute",
    metadata: {
        name: "vender-private",
        namespace,
        annotations: {
            "external-dns.alpha.kubernetes.io/target": "10.240.0.5",
        },
    },
    spec: {
        parentRefs: [{
            name: "private-gateway",
            namespace: "istio-system",
        }],
        hostnames: [`vender.${privateDomain}`],
        rules: [{
            backendRefs: [{ name: "vender", port: 8080 }],
        }],
    },
}, { parent: persistencePhase, dependsOn: [venderService] });

// --- RBAC: Ceph S3 adapter가 rook-ceph NS에 CephObjectStoreUser CRD를 생성/삭제할 권한 ---
const venderSA = new core.v1.ServiceAccount("vender-sa", {
    metadata: { name: "vender", namespace },
}, { parent: persistencePhase });

// ClusterRole + RoleBinding for Ceph S3 adapter (CephObjectStoreUser CRD in rook-ceph NS)
import { rbac } from "@pulumi/kubernetes";

const venderCephClusterRole = new rbac.v1.ClusterRole("vender-ceph-objstore", {
    metadata: { name: "vender-ceph-objstore" },
    rules: [{
        apiGroups: ["ceph.rook.io"],
        resources: ["cephobjectstoreusers"],
        verbs: ["get", "create", "delete", "list"],
    }],
}, { parent: persistencePhase });

const venderCephRoleBinding = new rbac.v1.ClusterRoleBinding("vender-ceph-objstore", {
    metadata: { name: "vender-ceph-objstore" },
    roleRef: { apiGroup: "rbac.authorization.k8s.io", kind: "ClusterRole", name: "vender-ceph-objstore" },
    subjects: [{ kind: "ServiceAccount", name: "vender", namespace }],
}, { parent: persistencePhase, dependsOn: [venderSA, venderCephClusterRole] });
