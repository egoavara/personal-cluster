import { helm } from "@pulumi/kubernetes";
import { istio as istioConfig } from "./config.ts";
import { requireNamespace } from "./namespaces.ts";
import { essentials } from "./phase.ts";

const ns = requireNamespace("istio-system", {
    labels: { "istio.io/dataplane-mode": "ambient" },
});
const { version, repository } = istioConfig;

export const base = new helm.v3.Release("istio-base", {
    chart: "base",
    name: "istio-base",
    version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: repository },
    createNamespace: false,
    skipCrds: false,
}, { parent: essentials });

export const istiod = new helm.v3.Release("istiod", {
    chart: "istiod",
    name: "istiod",
    version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: repository },
    createNamespace: false,
    values: {
        profile: "ambient",
        pilot: {
            autoscaleMin: 2,
            cni: { enabled: true },
        },
        meshConfig: {
            discoverySelectors: [
                {
                    matchExpressions: [
                        {
                            key: "kubernetes.io/metadata.name",
                            operator: "NotIn",
                            values: istioConfig.excludeNamespaces,
                        },
                        {
                            key: "istio.io/dataplane-mode",
                            operator: "NotIn",
                            values: ["none"],
                        },
                    ],
                },
                // Gateway API routing 대상 NS (mesh 미포함, discovery만)
                {
                    matchLabels: {
                        "istio.io/gateway-route-target": "true",
                    },
                },
            ],
            extensionProviders: [
                {
                    name: "otel-tracing",
                    opentelemetry: {
                        service: "otel-collector-opentelemetry-collector.telemetry.svc.cluster.local",
                        port: 4317,
                    },
                },
                {
                    name: "oauth2-proxy",
                    envoyExtAuthzHttp: {
                        service: "oauth2-proxy.auth.svc.cluster.local",
                        port: 4180,
                        headersToUpstreamOnAllow: [
                            "authorization",
                            "x-auth-request-user",
                            "x-auth-request-email",
                            "x-auth-request-access-token",
                        ],
                        headersToDownstreamOnDeny: [
                            "set-cookie",
                            "location",
                            "content-type",
                        ],
                        includeRequestHeadersInCheck: [
                            "authorization",
                            "cookie",
                        ],
                        pathPrefix: "/oauth2",
                    },
                },
                {
                    name: "guard",
                    envoyExtAuthzHttp: {
                        service: "guard-ext-authz.auth.svc.cluster.local",
                        port: 4180,
                        headersToUpstreamOnAllow: [
                            "x-auth-request-user",
                            "x-auth-request-email",
                        ],
                        headersToDownstreamOnDeny: [
                            "set-cookie",
                            "location",
                            "content-type",
                        ],
                        includeRequestHeadersInCheck: [
                            "cookie",
                            "x-forwarded-host",
                            "x-forwarded-proto",
                            "x-forwarded-uri",
                        ],
                    },
                },
            ],
            defaultProviders: {
                tracing: ["otel-tracing"],
            },
            defaultConfig: {
                proxyHeaders: {
                    server: { disable: true },
                },
            },
            enableTracing: true,
            enablePrometheusMerge: true,
            trustDomain: "cluster.local",
        },
    },
}, {
    parent: essentials,
    dependsOn: [base],
});

export const istioCni = new helm.v3.Release("istio-cni", {
    chart: "cni",
    name: "istio-cni",
    version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: repository },
    createNamespace: false,
    values: {
        profile: "ambient",
        cni: {
            cniBinDir: "/opt/cni/bin",
            cniConfDir: "/etc/cni/net.d",
            ambient: {
                dnsCapture: true,
                ipv6: false,
            },
        },
    },
}, {
    parent: essentials,
    dependsOn: [istiod],
});

export const ztunnel = new helm.v3.Release("ztunnel", {
    chart: "ztunnel",
    name: "ztunnel",
    version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: repository },
    createNamespace: false,
    values: {
        istioNamespace: ns.metadata.name,
    },
}, {
    parent: essentials,
    dependsOn: [istioCni],
});
