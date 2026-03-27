import * as pulumi from "@pulumi/pulumi";
import { core, apps } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { ns } from "./namespace.ts";

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
  - id: pg-readonly
    name: PostgreSQL Read-Only
    description: Read-only access to PostgreSQL
    service: postgres
    ttl: 24h
    params:
      grants: SELECT
      schema: public
      database: app
  - id: pg-readwrite
    name: PostgreSQL Read-Write
    description: Full access to PostgreSQL
    service: postgres
    ttl: 24h
    params:
      grants: "SELECT,INSERT,UPDATE,DELETE"
      schema: public
      database: app
  - id: valkey-cache-rw
    name: Valkey Cache R/W
    description: Read/write access to Valkey cache
    service: valkey
    ttl: 24h
    params:
      commands: "+@read +@write"
      keys: "~cache:*"
  - id: nats-connect
    name: NATS Connection
    description: Connect to NATS (auth not yet enabled)
    service: nats
    ttl: 24h
  - id: etcd-prefix-ro
    name: etcd Read-Only
    description: Read-only access to etcd key prefix
    service: etcd
    ttl: 24h
    params:
      keyPrefix: /app/
      permission: readOnly
  - id: qdrant-collection
    name: Qdrant Collection
    description: Access to Qdrant collections
    service: qdrant
    ttl: 24h
    params:
      access: r
  - id: ceph-s3-bucket
    name: Ceph S3 Bucket
    description: S3 user for Ceph Object Storage
    service: ceph-s3
    ttl: 168h
  - id: manticore-search
    name: Manticore Search
    description: API access to Manticore Search
    service: manticore
    ttl: 168h
`,
    },
}, { parent: persistencePhase });

import { pgVenderPassword } from "./secrets.ts";
import { pgCluster, pgVenderSecret } from "./postgres.ts";
import { nats } from "./nats.ts";
import { etcd } from "./etcd.ts";

// --- Secret: 민감 설정 (서비스 접속 정보, SpiceDB, Zitadel) ---
const venderSecrets = new core.v1.Secret("vender-secrets", {
    metadata: { name: "vender-secrets", namespace },
    stringData: {
        "secrets.yaml": pgVenderPassword.result.apply(pgPass => `
spicedb:
  endpoint: "spicedb.auth.svc.cluster.local:50051"
  presharedKey: ""
zitadel:
  apiEndpoint: "http://zitadel.auth.svc.cluster.local:8080"
  pat: ""
  projectID: ""
services:
  postgres:
    dsn: "postgresql://vender:${pgPass}@pg-persistence-rw.persistence.svc.cluster.local:5432/app?sslmode=disable"
  valkey:
    addr: "valkey-node-0.valkey-headless.persistence.svc.cluster.local:6379"
    password: ""
  etcd:
    endpoints:
      - "etcd-0.etcd-headless.persistence.svc.cluster.local:2379"
      - "etcd-1.etcd-headless.persistence.svc.cluster.local:2379"
      - "etcd-2.etcd-headless.persistence.svc.cluster.local:2379"
    rootPassword: ""
`),
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
                            valueFrom: { secretKeyRef: { name: "etcd-root-password", key: "etcd-root-password", optional: true } },
                        },
                        {
                            name: "NATS_AUTH_TOKEN",
                            valueFrom: { secretKeyRef: { name: "nats-auth-token", key: "nats-auth-token", optional: true } },
                        },
                        {
                            name: "QDRANT_API_KEY",
                            valueFrom: { secretKeyRef: { name: "qdrant-apikey", key: "api-key", optional: true } },
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
}, { parent: persistencePhase, dependsOn: [venderConfig, venderSecrets, pgVenderSecret, pgCluster, nats, etcd] });

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
    subjects: [{ kind: "ServiceAccount", name: "vender", namespace: "persistence" }],
}, { parent: persistencePhase, dependsOn: [venderSA, venderCephClusterRole] });
