import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { auth as authConfig, externalDns as externalDnsConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";
import { zitadel } from "./zitadel.ts";

const namespace = ns.metadata.name;
const zitadelDomain = authConfig.zitadel.domain; // auth.egoavara.net

// --- HTTPRoute: auth.egoavara.net → Zitadel ---
export const zitadelRoute = new k8s.apiextensions.CustomResource("zitadel-httproute", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "HTTPRoute",
    metadata: {
        name: "zitadel",
        namespace,
        annotations: {
            "external-dns.alpha.kubernetes.io/target": externalDnsConfig.defaultTargets,
        },
    },
    spec: {
        parentRefs: [{
            name: "public-gateway",
            namespace: "istio-system",
        }],
        hostnames: [zitadelDomain],
        rules: [
            {
                matches: [{ path: { type: "PathPrefix", value: "/ui/v2/login" } }],
                backendRefs: [{ name: "zitadel-login", port: 3000 }],
            },
            {
                backendRefs: [{ name: "zitadel", port: 8080 }],
            },
        ],
    },
}, { parent: authPhase, dependsOn: [zitadel] });
