import * as pulumi from "@pulumi/pulumi";
import { helm, core, rbac } from "@pulumi/kubernetes";
import { fluxOperator as fluxOperatorConfig } from "./config.ts";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { flux } from "./flux.ts";
import { ingress as ingressConfig } from "../utils/config.ts";

const namespace = ns.metadata.name;
const privateDomain = `private.${ingressConfig.domain}`;

// OIDC config는 zitadel-client Job이 생성한 Secret에서 읽음
// Job이 아직 실행되지 않았으면 OIDC 없이 기동 (anonymous read-only)
export const fluxWebUI = new helm.v3.Release("flux-operator", {
    chart: fluxOperatorConfig.repository + "/flux-operator",
    name: "flux-operator",
    version: fluxOperatorConfig.version,
    namespace,
    createNamespace: false,
    values: {
        // Operator 자체는 불필요 — Web UI만 standalone으로 배포
        web: {
            enabled: true,
            serverOnly: true,
            serverReplicas: 2,
            networkPolicy: {
                create: false, // HBONE 15008 충돌 방지, allow-hbone NetworkPolicy로 대체
            },
            rbac: {
                createRoles: false,
                createAggregation: false,
            },
            // OIDC config는 Secret으로 주입
            configSecretName: "flux-web-config",
            // Gateway API HTTPRoute
            httpRoute: {
                enabled: true,
                annotations: {
                    "external-dns.alpha.kubernetes.io/target": "10.240.0.5",
                },
                parentRefs: [{
                    name: "private-gateway",
                    namespace: "istio-system",
                }],
                hostnames: [`gitops.${privateDomain}`],
            },
        },
        resources: {
            requests: { cpu: "25m", memory: "64Mi" },
            limits: { cpu: "200m", memory: "256Mi" },
        },
    },
}, { parent: cicdPhase, dependsOn: [flux] });

// --- Flux RBAC: ClusterRole + Group 바인딩 ---
// Zitadel project roles → OIDC groups claim → K8s impersonation groups 체인.
// chart의 rbac.createRoles를 끄고 직접 정의하여 group 단위 권한 관리.

const fluxApiGroups = [
    "source.toolkit.fluxcd.io",
    "kustomize.toolkit.fluxcd.io",
    "helm.toolkit.fluxcd.io",
    "notification.toolkit.fluxcd.io",
];

const fluxAdminRole = new rbac.v1.ClusterRole("flux-web-admin", {
    metadata: { name: "flux-web-admin" },
    rules: [
        {
            apiGroups: fluxApiGroups,
            resources: ["*"],
            verbs: ["*"],
        },
        {
            apiGroups: [""],
            resources: ["namespaces", "events"],
            verbs: ["get", "list", "watch"],
        },
        {
            apiGroups: [""],
            resources: ["secrets", "configmaps", "serviceaccounts"],
            verbs: ["get", "list", "watch"],
        },
    ],
}, { parent: cicdPhase });

const fluxViewerRole = new rbac.v1.ClusterRole("flux-web-viewer", {
    metadata: { name: "flux-web-viewer" },
    rules: [
        {
            apiGroups: fluxApiGroups,
            resources: ["*"],
            verbs: ["get", "list", "watch"],
        },
        {
            apiGroups: [""],
            resources: ["namespaces", "events"],
            verbs: ["get", "list", "watch"],
        },
    ],
}, { parent: cicdPhase });

new rbac.v1.ClusterRoleBinding("flux-web-admin", {
    metadata: { name: "flux-web-admin" },
    roleRef: {
        apiGroup: "rbac.authorization.k8s.io",
        kind: "ClusterRole",
        name: "flux-web-admin",
    },
    subjects: [{
        kind: "Group",
        name: "flux-admin",
        apiGroup: "rbac.authorization.k8s.io",
    }],
}, { parent: cicdPhase, dependsOn: [fluxAdminRole] });

new rbac.v1.ClusterRoleBinding("flux-web-viewer", {
    metadata: { name: "flux-web-viewer" },
    roleRef: {
        apiGroup: "rbac.authorization.k8s.io",
        kind: "ClusterRole",
        name: "flux-web-viewer",
    },
    subjects: [{
        kind: "Group",
        name: "flux-viewer",
        apiGroup: "rbac.authorization.k8s.io",
    }],
}, { parent: cicdPhase, dependsOn: [fluxViewerRole] });
