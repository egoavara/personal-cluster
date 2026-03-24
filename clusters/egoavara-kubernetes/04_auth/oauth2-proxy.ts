import { helm } from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { auth as authConfig, ingress as ingressConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";
import { zitadelClients } from "./zitadel-clients.ts";
import { oauth2ProxyCookieSecret } from "./secrets.ts";

const namespace = ns.metadata.name;
const { version, repository } = authConfig.oauth2Proxy;
const zitadelDomain = authConfig.zitadel.domain;
const privateDomain = `private.${ingressConfig.domain}`;

// oauth2-proxy: ExtAuthz 모드 (단일 인스턴스로 모든 private 대시보드 인증)
// Private Gateway의 AuthorizationPolicy(CUSTOM)에서 호출됨
export const oauth2Proxy = new helm.v3.Release("oauth2-proxy", {
    chart: "oauth2-proxy",
    name: "oauth2-proxy",
    version,
    namespace,
    repositoryOpts: { repo: repository },
    createNamespace: false,
    values: {
        replicaCount: 2,
        config: {
            cookieSecret: oauth2ProxyCookieSecret.result,
        },
        extraEnv: [
            {
                name: "OAUTH2_PROXY_CLIENT_ID",
                valueFrom: { secretKeyRef: { name: "oidc-oauth2-proxy", key: "client-id" } },
            },
            {
                name: "OAUTH2_PROXY_CLIENT_SECRET",
                valueFrom: { secretKeyRef: { name: "oidc-oauth2-proxy", key: "client-secret" } },
            },
        ],
        extraArgs: {
            provider: "oidc",
            "oidc-issuer-url": `https://${zitadelDomain}`,
            "ssl-insecure-skip-verify": "true",
            "email-domain": "*",
            "cookie-secure": "true",
            "cookie-domain": `.${privateDomain}`,
            "whitelist-domain": `.${privateDomain}`,
            "http-address": "0.0.0.0:4180",
            upstream: "static://200",
            "skip-provider-button": "true",
            "set-xauthrequest": "true",
            "pass-access-token": "true",
            "reverse-proxy": "true",
        },
        service: {
            type: "ClusterIP",
            portNumber: 4180,
            appProtocol: "http",
        },
        resources: {
            requests: { cpu: "25m", memory: "32Mi" },
            limits: { cpu: "200m", memory: "128Mi" },
        },
    },
}, {
    parent: authPhase,
    dependsOn: [zitadelClients],
});
