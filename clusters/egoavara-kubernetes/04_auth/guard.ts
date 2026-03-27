import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { auth as authConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";
import { spicedbPresharedKey, guardSessionSecret, guardValkeyPassword } from "./secrets.ts";
import { zitadelClients } from "./zitadel-clients.ts";
import { guardValkey } from "./valkey.ts";

const namespace = ns.metadata.name;
const image = authConfig.guard.image;
const appLabels = { app: "guard" };

// --- Config: base (ConfigMap) + overlay (Pulumi Secret) ---

const baseConfig = new k8s.core.v1.ConfigMap("guard-config", {
    metadata: { name: "guard-config", namespace },
    data: {
        "base.yaml": `
spicedb:
  endpoint: "spicedb.auth.svc.cluster.local:50051"

valkey:
  sentinelAddrs:
    - "guard-valkey-node-0.guard-valkey-headless.auth.svc.cluster.local:26379"
    - "guard-valkey-node-1.guard-valkey-headless.auth.svc.cluster.local:26379"
    - "guard-valkey-node-2.guard-valkey-headless.auth.svc.cluster.local:26379"
  masterName: "myprimary"

rateLimit:
  enabled: true
  slowStartDuration: "60s"
  l1MaxItems: 10000
  l1TTL: "30s"
  l2TTL: "60s"

extAuthz:
  listenAddr: ":4180"
  externalURL: "https://guard.private.egoavara.net"
  oidc:
    issuerURL: "https://auth.egoavara.net"
  cookie:
    domain: ".egoavara.net"
    name: "guard-session"
  hostResources:
    - host: "grafana.private.egoavara.net"
      resource: "telemetry/grafana"
    - host: "ceph.private.egoavara.net"
      resource: "rook-ceph/ceph-dashboard"
    - host: "hubble.private.egoavara.net"
      resource: "kube-system/hubble-ui"
    - host: "guard.private.egoavara.net"
      resource: "auth/guard-dashboard"
    - host: "vender.private.egoavara.net"
      resource: "persistence/vender"

dashboard:
  listenAddr: ":8080"
  externalURL: "https://guard.private.egoavara.net"
  oidc:
    issuerURL: "https://auth.egoavara.net"
  cookie:
    domain: ".egoavara.net"
    name: "guard-session"
  routesFile: "/config/routes.yaml"
`,
        "routes.yaml": `
dashboards:
  - name: grafana
    path: /grafana
    upstream: http://grafana.telemetry.svc.cluster.local:80
    stripPrefix: true
    spicedbResource: "app:grafana"
  - name: ceph
    path: /ceph
    upstream: http://rook-ceph-mgr-dashboard.rook-ceph.svc.cluster.local:7000
    stripPrefix: true
    spicedbResource: "app:ceph"
`,
    },
}, { parent: authPhase });

const secretOverlay = new k8s.core.v1.Secret("guard-secrets", {
    metadata: { name: "guard-secrets", namespace },
    stringData: {
        "overlay.yaml": pulumi.interpolate`
spicedb:
  presharedKey: "${spicedbPresharedKey.result}"
valkey:
  password: "${guardValkeyPassword.result}"
extAuthz:
  session:
    secret: "${guardSessionSecret.result}"
dashboard:
  session:
    secret: "${guardSessionSecret.result}"
`,
    },
}, { parent: authPhase });

// --- Shared helpers ---

const configVolumes: k8s.types.input.core.v1.Volume[] = [
    { name: "config", configMap: { name: "guard-config" } },
    { name: "secrets", secret: { secretName: "guard-secrets" } },
];

const configVolumeMounts: k8s.types.input.core.v1.VolumeMount[] = [
    { name: "config", mountPath: "/config" },
    { name: "secrets", mountPath: "/config/secrets" },
];

const configArgs = ["--config", "/config/base.yaml", "--config", "/config/secrets/overlay.yaml"];

// OIDC client-id/secret: zitadel-clients Job이 생성한 Secret에서 env var로 주입
const oidcEnv: k8s.types.input.core.v1.EnvVar[] = [
    { name: "OIDC_CLIENT_ID", valueFrom: { secretKeyRef: { name: "oidc-kube-authz", key: "client-id" } } },
    { name: "OIDC_CLIENT_SECRET", valueFrom: { secretKeyRef: { name: "oidc-kube-authz", key: "client-secret" } } },
];

const otelEndpoint = "http://otel-collector-opentelemetry-collector.telemetry.svc.cluster.local:4317";

function otelEnv(serviceName: string): k8s.types.input.core.v1.EnvVar[] {
    return [
        { name: "OTEL_EXPORTER_OTLP_ENDPOINT", value: otelEndpoint },
        { name: "OTEL_SERVICE_NAME", value: serviceName },
        { name: "OTEL_EXPORTER_OTLP_INSECURE", value: "true" },
    ];
}

function topologySpread(component: string): k8s.types.input.core.v1.TopologySpreadConstraint[] {
    return [{
        maxSkew: 1,
        topologyKey: "kubernetes.io/hostname",
        whenUnsatisfiable: "DoNotSchedule",
        labelSelector: { matchLabels: { ...appLabels, component } },
    }];
}

const deps = [baseConfig, secretOverlay, zitadelClients, guardValkey];

// --- ext-authz (2 replicas) ---

new k8s.apps.v1.Deployment("guard-ext-authz", {
    metadata: { name: "guard-ext-authz", namespace },
    spec: {
        replicas: 2,
        selector: { matchLabels: { ...appLabels, component: "ext-authz" } },
        template: {
            metadata: { labels: { ...appLabels, component: "ext-authz" } },
            spec: {
                topologySpreadConstraints: topologySpread("ext-authz"),
                volumes: configVolumes,
                containers: [{
                    name: "ext-authz",
                    image,
                    args: [...configArgs, "ext-authz"],
                    ports: [{ containerPort: 4180, name: "http" }],
                    env: [...oidcEnv, ...otelEnv("guard-ext-authz")],
                    volumeMounts: configVolumeMounts,
                    resources: { requests: { cpu: "25m", memory: "32Mi" }, limits: { cpu: "200m", memory: "128Mi" } },
                    readinessProbe: { httpGet: { path: "/healthz", port: 4180 }, periodSeconds: 5 },
                    livenessProbe: { httpGet: { path: "/healthz", port: 4180 }, periodSeconds: 15 },
                }],
            },
        },
    },
}, { parent: authPhase, dependsOn: deps });

new k8s.core.v1.Service("guard-ext-authz", {
    metadata: { name: "guard-ext-authz", namespace },
    spec: {
        selector: { ...appLabels, component: "ext-authz" },
        ports: [{ port: 4180, targetPort: 4180, name: "http", appProtocol: "http" }],
    },
}, { parent: authPhase });

// --- dashboard (2 replicas) ---

new k8s.apps.v1.Deployment("guard-dashboard", {
    metadata: { name: "guard-dashboard", namespace },
    spec: {
        replicas: 2,
        selector: { matchLabels: { ...appLabels, component: "dashboard" } },
        template: {
            metadata: { labels: { ...appLabels, component: "dashboard" } },
            spec: {
                topologySpreadConstraints: topologySpread("dashboard"),
                volumes: configVolumes,
                containers: [{
                    name: "dashboard",
                    image,
                    args: [...configArgs, "dashboard"],
                    ports: [{ containerPort: 8080, name: "http" }],
                    env: [...oidcEnv, ...otelEnv("guard-dashboard")],
                    volumeMounts: configVolumeMounts,
                    resources: { requests: { cpu: "25m", memory: "32Mi" }, limits: { cpu: "200m", memory: "128Mi" } },
                    readinessProbe: { httpGet: { path: "/healthz", port: 8080 }, periodSeconds: 5 },
                    livenessProbe: { httpGet: { path: "/healthz", port: 8080 }, periodSeconds: 15 },
                }],
            },
        },
    },
}, { parent: authPhase, dependsOn: deps });

new k8s.core.v1.Service("guard-dashboard", {
    metadata: { name: "guard-dashboard", namespace },
    spec: {
        selector: { ...appLabels, component: "dashboard" },
        ports: [{ port: 8080, targetPort: 8080, name: "http", appProtocol: "http" }],
    },
}, { parent: authPhase });
