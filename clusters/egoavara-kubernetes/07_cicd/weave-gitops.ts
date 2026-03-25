import * as pulumi from "@pulumi/pulumi";
import { helm, core } from "@pulumi/kubernetes";
import { weaveGitops as weaveConfig } from "./config.ts";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { weaveAdminPassword } from "./secrets.ts";
import { flux } from "./flux.ts";

const namespace = ns.metadata.name;

// bcrypt 해시를 Pulumi에서 직접 생성할 수 없으므로,
// admin 비밀번호를 Secret으로 저장하고 Weave GitOps가 참조하게 함.
// Weave GitOps는 OIDC 인증도 지원 — 추후 Zitadel 연동 시 OIDC로 전환.
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
            createSecret: false,       // 직접 생성한 Secret 사용
            username: "admin",
        },
        // Metrics: VMServiceScrape로 별도 구성
        metrics: {
            enabled: true,
        },
        // OIDC 설정 (추후 Zitadel 연동 시 활성화)
        // oidcConfig:
        //   issuerURL: "https://auth.egoavara.net"
        //   clientID: "weave-gitops"
        //   clientSecret: ...
        //   redirectURL: "https://gitops.private.egoavara.net/oauth2/callback"
    },
}, { parent: cicdPhase, dependsOn: [flux, adminSecret] });
