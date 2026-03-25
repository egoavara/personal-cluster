import * as pulumi from "@pulumi/pulumi";
import { helm, core } from "@pulumi/kubernetes";
import { weaveGitops as weaveConfig } from "./config.ts";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { weaveAdminPassword } from "./secrets.ts";
import { flux } from "./flux.ts";

const namespace = ns.metadata.name;

// Fallback admin Secret — OIDC가 설정되기 전 또는 OIDC 장애 시 사용
const adminSecret = new core.v1.Secret("cluster-user-auth", {
    metadata: {
        name: "cluster-user-auth",
        namespace,
    },
    stringData: {
        username: "admin",
        password: weaveAdminPassword.result,
    },
}, { parent: cicdPhase });

// OIDC client-id/secret은 zitadel-clients Job이 flux-system/oidc-weave-gitops Secret으로 생성
// 최초 배포 시에는 Secret이 아직 없으므로, OIDC 없이 admin 비밀번호로 접속
// zitadel-clients Job 실행 후 pod restart하면 OIDC 활성화됨

export const weaveGitops = new helm.v3.Release("weave-gitops", {
    chart: weaveConfig.repository + "/weave-gitops",
    name: "weave-gitops",
    version: weaveConfig.version,
    namespace,
    createNamespace: false,
    values: {
        replicaCount: 2,
        resources: {
            requests: { cpu: "25m", memory: "64Mi" },
            limits: { cpu: "200m", memory: "256Mi" },
        },
        adminUser: {
            create: true,
            createClusterRole: true,
            createSecret: false,
            username: "admin",
        },
        metrics: {
            enabled: true,
        },
        // Zitadel OIDC 연동
        additionalArgs: [
            "--oidc-issuer-url=https://auth.egoavara.net",
            "--oidc-redirect-url=https://gitops.private.egoavara.net/oauth2/callback",
            "--oidc-username-claim=preferred_username",
        ],
        extraEnv: [
            {
                name: "WEAVE_GITOPS_FEATURE_OIDC_AUTH",
                value: "true",
            },
            {
                name: "OIDC_CLIENT_ID",
                valueFrom: {
                    secretKeyRef: {
                        name: "oidc-weave-gitops",
                        key: "client-id",
                        optional: true,  // Secret이 아직 없어도 기동 가능
                    },
                },
            },
            {
                name: "OIDC_CLIENT_SECRET",
                valueFrom: {
                    secretKeyRef: {
                        name: "oidc-weave-gitops",
                        key: "client-secret",
                        optional: true,
                    },
                },
            },
        ],
    },
}, { parent: cicdPhase, dependsOn: [flux, adminSecret] });
