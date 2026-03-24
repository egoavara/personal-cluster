import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { auth as authConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";
import { pgCluster } from "./postgres.ts";
import { pgSpicedbPassword } from "./secrets.ts";
import { spicedbPresharedKey } from "./secrets.ts";

const namespace = ns.metadata.name;
const { image } = authConfig.spicedb;

// SpiceDB preshared key for API auth
const presharedKeySecret = new k8s.core.v1.Secret("spicedb-preshared-key", {
    metadata: { name: "spicedb-preshared-key", namespace },
    stringData: {
        "SPICEDB_GRPC_PRESHARED_KEY": spicedbPresharedKey.result,
    },
}, { parent: authPhase });

const pgConnUri = pulumi.interpolate`postgres://spicedb:${pgSpicedbPassword.result}@pg-cluster-rw.auth.svc.cluster.local:5432/spicedb?sslmode=disable`;

// --- SpiceDB Deployment ---
export const spicedb = new k8s.apps.v1.Deployment("spicedb", {
    metadata: { name: "spicedb", namespace },
    spec: {
        replicas: 3,
        selector: { matchLabels: { app: "spicedb" } },
        template: {
            metadata: { labels: { app: "spicedb" } },
            spec: {
                initContainers: [{
                    name: "migrate",
                    image,
                    command: ["spicedb", "migrate", "head"],
                    env: [{
                        name: "SPICEDB_DATASTORE_ENGINE",
                        value: "postgres",
                    }, {
                        name: "SPICEDB_DATASTORE_CONN_URI",
                        valueFrom: { secretKeyRef: { name: "spicedb-pg-conn", key: "uri" } },
                    }],
                }],
                containers: [{
                    name: "spicedb",
                    image,
                    command: ["spicedb", "serve"],
                    args: [
                        "--grpc-addr=:50051",
                        "--http-addr=:8443",
                        "--metrics-addr=:9090",
                        "--http-enabled=true",
                        "--dispatch-cluster-enabled=false",
                        "--datastore-conn-pool-read-min-open=5",
                        "--datastore-conn-pool-read-max-open=10",
                        "--datastore-conn-pool-write-min-open=3",
                        "--datastore-conn-pool-write-max-open=5",
                    ],
                    env: [{
                        name: "SPICEDB_DATASTORE_ENGINE",
                        value: "postgres",
                    }, {
                        name: "SPICEDB_DATASTORE_CONN_URI",
                        valueFrom: { secretKeyRef: { name: "spicedb-pg-conn", key: "uri" } },
                    }, {
                        name: "SPICEDB_GRPC_PRESHARED_KEY",
                        valueFrom: { secretKeyRef: { name: "spicedb-preshared-key", key: "SPICEDB_GRPC_PRESHARED_KEY" } },
                    }, {
                        name: "GOMEMLIMIT",
                        value: "460MiB",
                    }],
                    ports: [
                        { name: "grpc", containerPort: 50051 },
                        { name: "http", containerPort: 8443 },
                        { name: "metrics", containerPort: 9090 },
                    ],
                    resources: {
                        requests: { cpu: "100m", memory: "128Mi" },
                        limits: { cpu: "500m", memory: "512Mi" },
                    },
                    readinessProbe: {
                        httpGet: { path: "/healthz", port: 8443 },
                        initialDelaySeconds: 5,
                        periodSeconds: 10,
                    },
                    livenessProbe: {
                        httpGet: { path: "/healthz", port: 8443 },
                        initialDelaySeconds: 15,
                        periodSeconds: 30,
                    },
                }],
                topologySpreadConstraints: [{
                    maxSkew: 1,
                    topologyKey: "kubernetes.io/hostname",
                    whenUnsatisfiable: "DoNotSchedule",
                    labelSelector: { matchLabels: { app: "spicedb" } },
                }],
            },
        },
    },
}, { parent: authPhase, dependsOn: [pgCluster, presharedKeySecret] });

// PG connection URI Secret
const pgConnSecret = new k8s.core.v1.Secret("spicedb-pg-conn", {
    metadata: { name: "spicedb-pg-conn", namespace },
    stringData: {
        uri: pgConnUri,
    },
}, { parent: authPhase });

// --- Services ---
const headlessSvc = new k8s.core.v1.Service("spicedb-headless", {
    metadata: { name: "spicedb-headless", namespace, labels: { app: "spicedb" } },
    spec: {
        clusterIP: "None",
        selector: { app: "spicedb" },
        ports: [{ name: "grpc", port: 50051, targetPort: 50051, appProtocol: "grpc" }],
    },
}, { parent: authPhase });

export const spicedbService = new k8s.core.v1.Service("spicedb", {
    metadata: { name: "spicedb", namespace, labels: { app: "spicedb" } },
    spec: {
        type: "ClusterIP",
        selector: { app: "spicedb" },
        ports: [
            { name: "grpc", port: 50051, targetPort: 50051, appProtocol: "grpc" },
            { name: "http", port: 8443, targetPort: 8443, appProtocol: "http" },
            { name: "metrics", port: 9090, targetPort: 9090, appProtocol: "http" },
        ],
    },
}, { parent: authPhase, dependsOn: [spicedb] });
