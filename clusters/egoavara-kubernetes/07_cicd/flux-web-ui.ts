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
                createRoles: true,
                createAggregation: true,
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

// --- OIDC groups → K8s RBAC (정적 ClusterRoleBinding) ---
// Zitadel Action이 project roles를 flat "groups" claim으로 주입하고,
// Flux Web UI가 impersonation.groups로 K8s에 전달.
// 여기서는 Group → ClusterRole 바인딩만 정적으로 생성.

// TODO: kubectl get clusterroles | grep flux 로 실제 ClusterRole 이름 확인 후 교체
new rbac.v1.ClusterRoleBinding("flux-web-admin", {
    metadata: { name: "flux-web-admin" },
    roleRef: {
        apiGroup: "rbac.authorization.k8s.io",
        kind: "ClusterRole",
        name: "flux-operator-admin",  // TODO: 클러스터에서 확인 후 교체
    },
    subjects: [{
        kind: "Group",
        name: "flux-admin",
        apiGroup: "rbac.authorization.k8s.io",
    }],
}, { parent: cicdPhase, dependsOn: [fluxWebUI] });

new rbac.v1.ClusterRoleBinding("flux-web-viewer", {
    metadata: { name: "flux-web-viewer" },
    roleRef: {
        apiGroup: "rbac.authorization.k8s.io",
        kind: "ClusterRole",
        name: "flux-operator-viewer",  // TODO: 클러스터에서 확인 후 교체
    },
    subjects: [{
        kind: "Group",
        name: "flux-viewer",
        apiGroup: "rbac.authorization.k8s.io",
    }],
}, { parent: cicdPhase, dependsOn: [fluxWebUI] });
