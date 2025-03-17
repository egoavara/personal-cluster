import { core, helm } from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import { onNamespaceLoaded, requireNamespace, tryNamespace } from "../essentials/namespaces.ts";
import { gateway } from "@pulumi/gateway-api";
import { options } from "../utils/config.ts";
import assert from "assert";

const istioVersion = "1.24.3";
const istioRepository = "https://istio-release.storage.googleapis.com/charts";

const useIstioInjectionLabel = { "istio-injection": "enabled" }
const useAmbientLabel = { "istio.io/dataplane-mode": "ambient", }

const meshConfig = {
    discoverySelectors: [
        { matchLabels: useAmbientLabel },
        { matchLabels: useIstioInjectionLabel },
    ],
    defaultConfig: {
        tracing: {
            enabled: true,
            sampling: 100,
        }
    },
    defaultProviders: {
        tracing: ["opentelemetry"]
    },
    extensionProviders: [
        {
            name: "opentelemetry",
            opentelemetry: {
                service: "jaeger-collector.telemetry.svc.cluster.local",
                port: 4317
            },
        },
    ],
    enablePrometheusMerge: true,
    trustDomain: "cluster.local"
};

const [base, setBase] = pulumi.deferredOutput<helm.v3.Release | undefined>();
const [istiod, setIstiod] = pulumi.deferredOutput<helm.v3.Release | undefined>();
const [istioCni, setIstioCni] = pulumi.deferredOutput<helm.v3.Release | undefined>();
const [ztunnel, setZtunnel] = pulumi.deferredOutput<helm.v3.Release | undefined>();
const [defaultGateway, setDefaultGateway] = pulumi.deferredOutput<gateway.v1.Gateway | undefined>();

if (options["istio"].enabled) {
    const ns = requireNamespace("istio-system");
    
    const base = new helm.v3.Release("istio-base", {
        chart: "base",
        name: "istio-base",
        version: istioVersion,
        namespace: ns.metadata.name,
        repositoryOpts: {
            repo: istioRepository,
        },
        createNamespace: false,
        skipCrds: false,
        values: {
            global: {
                namespace: ns.metadata.name,
            },
        },
    });
    const istiod = new helm.v3.Release("istiod", {
        chart: "istiod",
        name: "istiod",
        version: istioVersion,
        namespace: ns.metadata.name,
        repositoryOpts: {
            repo: istioRepository,
        },
        createNamespace: false,
        skipCrds: false,
        values: {
            profile: "ambient",
            global: {
                namespace: ns.metadata.name,
            },
            pilot: {
                autoscaleMin: 2,
                cni: {
                    enabled: true
                },
                traceSampling: 1.0,
            },
            meshConfig: meshConfig,
        },
    }, {
        dependsOn: [base],
    });

    const istioCni = new helm.v3.Release("istio-cni", {
        chart: "cni",
        name: "istio-cni",
        version: istioVersion,
        namespace: ns.metadata.name,
        repositoryOpts: {
            repo: istioRepository,
        },
        createNamespace: false,
        skipCrds: false,
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
        dependsOn: [istiod],
    });

    const ztunnel = new helm.v3.Release("ztunnel", {
        chart: "ztunnel",
        name: "ztunnel",
        version: istioVersion,
        namespace: ns.metadata.name,
        repositoryOpts: {
            repo: istioRepository,
        },
        createNamespace: false,
        skipCrds: false,
        values: {
            istioNamespace: ns.metadata.name,
            meshConfig: meshConfig,
        },
    }, {
        dependsOn: [istioCni],
    });

    const defaultGateway = new gateway.v1.Gateway("default", {
        metadata: {
            name: "default",
            namespace: ns.metadata.name,
            annotations: {
                "networking.istio.io/service-type": "NodePort"
            }
        },
        spec: {
            gatewayClassName: "istio",
            listeners: [
                {
                    name: "tcp-http",
                    protocol: "HTTP",
                    port: 80,
                    allowedRoutes: {
                        namespaces: {
                            from: "Selector",
                            selector: {
                                matchLabels: Object.assign({}, useAmbientLabel)
                            }
                        }
                    }
                },
            ]
        }
    });

    setBase(pulumi.output(base));
    setIstiod(pulumi.output(istiod));
    setIstioCni(pulumi.output(istioCni));
    setZtunnel(pulumi.output(ztunnel));
    setDefaultGateway(pulumi.output(defaultGateway));

    onNamespaceLoaded("runtime", (ns)=>{
        setupWaypoint(ns);
    });
} else {
    setBase(pulumi.output(undefined));
    setIstiod(pulumi.output(undefined));
    setIstioCni(pulumi.output(undefined));
    setZtunnel(pulumi.output(undefined));
    setDefaultGateway(pulumi.output(undefined));
}

export {
    base,
    istiod,
    istioCni,
    ztunnel,
    defaultGateway
}

export function setupWaypoint(target: core.v1.Namespace): pulumi.Output<{ gateway: gateway.v1.Gateway, namespace: core.v1.NamespacePatch } | undefined> {
    return pulumi.all([
        base,
        target.metadata.name,
        pulumi.interpolate`${target.metadata.name}-labeler`,
        pulumi.interpolate`${target.metadata.name}-waypoint-gateway`
    ]).apply(([base, namespaceName, urlName, gatewayName]) => {
        if (base === undefined) {
            return undefined;
        }
        return {
            namespace: new core.v1.NamespacePatch(urlName, {
                metadata: {
                    name: namespaceName,
                    labels: { "istio.io/dataplane-mode": "ambient", "istio-injection": "true" },
                },
            }),
            gateway: new gateway.v1.Gateway(gatewayName, {
                metadata: {
                    name: "waypoint",
                    namespace: namespaceName,
                    labels: {
                        "istio.io/waypoint-for": "service"
                    }
                },
                spec: {
                    gatewayClassName: "istio-waypoint",
                    listeners: [
                        {
                            name: "mesh",
                            protocol: "HBONE",
                            port: 15008,
                        }
                    ]
                }
            })
        }
    });
}

export function useWaypoint(): pulumi.Output<Record<string, pulumi.Output<string>>>;
export function useWaypoint(target: core.v1.Namespace): pulumi.Output<core.v1.NamespacePatch>;
export function useWaypoint(target: core.v1.Service): pulumi.Output<core.v1.ServicePatch>;
export function useWaypoint(target?: pulumi.Input<any>): pulumi.Output<any> {
    if (target === undefined) {
        if (base === undefined) {
            return pulumi.output({ "istio.io/use-waypoint": "waypoint" });
        }
        return pulumi.output({ "istio.io/use-waypoint": "waypoint" });
    }

    if (target === undefined) {
        return pulumi.output({ "istio.io/use-waypoint": "waypoint" });
    }
    return pulumi.output(target).apply((t) => {
        if (t instanceof core.v1.Namespace) {
            return pulumi.interpolate`useWaypoint(${t.metadata.name})`.apply(urnName => {
                return new core.v1.NamespacePatch(urnName, {
                    metadata: {
                        name: t.metadata.name,
                        labels: {
                            "istio.io/waypoint-for": "service"
                        },
                    },
                });
            });
        }
        if (t instanceof core.v1.Service) {
            return pulumi.interpolate`useWaypoint(${t.metadata.name})`.apply(urnName => {
                return new core.v1.ServicePatch(urnName, {
                    metadata: {
                        name: t.metadata.name,
                        labels: {
                            "istio.io/waypoint-for": "service"
                        },
                    },
                });
            });
        }
        assert(false, "unreachable");
    });
}

