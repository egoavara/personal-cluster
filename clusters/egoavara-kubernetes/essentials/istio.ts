import { helm } from "@pulumi/kubernetes";
import { istio as istioConfig } from "../utils/config.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
import { essentials } from "../phases.ts";

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
            ],
            extensionProviders: [
                {
                    name: "otel-tracing",
                    opentelemetry: {
                        service: "otel-collector-opentelemetry-collector.telemetry.svc.cluster.local",
                        port: 4317,
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
                dnsCapture: false,
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
