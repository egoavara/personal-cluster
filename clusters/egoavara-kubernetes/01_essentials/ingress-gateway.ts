import * as k8s from "@pulumi/kubernetes";
import { essentials } from "./phase.ts";
import { ingress as ingressConfig, externalDns } from "../utils/config.ts";
import { istiod } from "./istio.ts";
import { gatewayCrds } from "./gateway-api.ts";
import { certManager } from "./cert-manager.ts";

const domain = ingressConfig.domain; // egoavara.net

// --- GCP DNS credentials for cert-manager DNS-01 solver ---
const gcpDnsSecret = new k8s.core.v1.Secret("cert-manager-gcp-dns", {
    metadata: {
        name: "cert-manager-gcp-dns",
        namespace: "cert-manager",
    },
    stringData: {
        "credentials.json": externalDns.gcpServiceAccountKey!,
    },
}, { parent: essentials, dependsOn: [certManager] });

// --- Let's Encrypt ClusterIssuer (DNS-01, 와일드카드 지원) ---
export const letsEncryptStaging = new k8s.apiextensions.CustomResource("letsencrypt-staging", {
    apiVersion: "cert-manager.io/v1",
    kind: "ClusterIssuer",
    metadata: { name: "letsencrypt-staging" },
    spec: {
        acme: {
            server: "https://acme-staging-v02.api.letsencrypt.org/directory",
            email: `admin@${domain}`,
            privateKeySecretRef: { name: "letsencrypt-staging-key" },
            solvers: [{
                dns01: {
                    cloudDNS: {
                        project: externalDns.gcpProject,
                        serviceAccountSecretRef: {
                            name: "cert-manager-gcp-dns",
                            key: "credentials.json",
                        },
                    },
                },
            }],
        },
    },
}, { parent: essentials, dependsOn: [gcpDnsSecret] });

export const letsEncryptProd = new k8s.apiextensions.CustomResource("letsencrypt-prod", {
    apiVersion: "cert-manager.io/v1",
    kind: "ClusterIssuer",
    metadata: { name: "letsencrypt-prod" },
    spec: {
        acme: {
            server: "https://acme-v02.api.letsencrypt.org/directory",
            email: `admin@${domain}`,
            privateKeySecretRef: { name: "letsencrypt-prod-key" },
            solvers: [{
                dns01: {
                    cloudDNS: {
                        project: externalDns.gcpProject,
                        serviceAccountSecretRef: {
                            name: "cert-manager-gcp-dns",
                            key: "credentials.json",
                        },
                    },
                },
            }],
        },
    },
}, { parent: essentials, dependsOn: [gcpDnsSecret] });

// --- 와일드카드 인증서 (*.egoavara.net + egoavara.net) ---
const wildcardCert = new k8s.apiextensions.CustomResource("wildcard-cert", {
    apiVersion: "cert-manager.io/v1",
    kind: "Certificate",
    metadata: {
        name: `wildcard-${domain.replace(/\./g, "-")}`,
        namespace: "istio-system",
    },
    spec: {
        secretName: `tls-wildcard-${domain.replace(/\./g, "-")}`,
        issuerRef: { name: "letsencrypt-prod", kind: "ClusterIssuer" },
        dnsNames: [
            `*.${domain}`,
            domain,
        ],
    },
}, { parent: essentials, dependsOn: [letsEncryptStaging] });

// --- Istio Ingress Gateway (public) ---
export const publicGateway = new k8s.apiextensions.CustomResource("public-gateway", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "Gateway",
    metadata: {
        name: "public-gateway",
        namespace: "istio-system",
        annotations: {
            "io.cilium/lb-ipam-ips": ingressConfig.gatewayIp,
        },
    },
    spec: {
        gatewayClassName: "istio",
        infrastructure: {
            labels: {
                "egoavara.net/ingress": "public",
                "egoavara.net/lb-pool": "static",
            },
        },
        listeners: [
            {
                name: "http",
                protocol: "HTTP",
                port: 80,
                allowedRoutes: {
                    namespaces: { from: "All" },
                },
            },
            {
                name: "https",
                hostname: `*.${domain}`,
                protocol: "HTTPS",
                port: 443,
                tls: {
                    mode: "Terminate",
                    certificateRefs: [{
                        kind: "Secret",
                        name: `tls-wildcard-${domain.replace(/\./g, "-")}`,
                    }],
                },
                allowedRoutes: {
                    namespaces: { from: "All" },
                },
            },
        ],
    },
}, { parent: essentials, dependsOn: [istiod, gatewayCrds, wildcardCert] });
