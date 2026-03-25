import { helm, core } from "@pulumi/kubernetes";
import { weaveGitops as weaveConfig } from "./config.ts";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { weaveAdminPassword } from "./secrets.ts";
import { flux } from "./flux.ts";

const namespace = ns.metadata.name;

// Fallback admin Secret — OIDC 미설정 시 또는 장애 시 password 로그인
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

// OIDC Secret (oidc-auth)은 zitadel-client.ts의 Job이 생성함.
// Job 실행 전: password 로그인 → Job 실행 후: OIDC 로그인 + pod 자동 restart

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
        oidcSecret: {
            create: false,  // zitadel-client Job이 oidc-auth Secret을 생성
        },
    },
}, { parent: cicdPhase, dependsOn: [flux, adminSecret] });
