import * as pulumi from "@pulumi/pulumi";
import { core, helm } from "@pulumi/kubernetes";
import { options } from "../utils/config.ts";
import { certmanager } from "./certmanager.ts";
import { must } from "../utils/must.ts";
import { requireNamespace } from "../essentials/namespaces.ts";

const [prometheus, setPrometheus] = pulumi.deferredOutput<helm.v3.Release | undefined>();

if (options["prometheus"].enabled) {
    const ns = requireNamespace("telemetry");
    const cm = must(certmanager, "Certmanager is required for Prometheus");
    const prom = new helm.v3.Release("kube-prometheus-stack", {
        chart: "kube-prometheus-stack",
        name: "kube-prometheus-stack",
        version: "65.0.0",
        namespace: ns.metadata.name,
        repositoryOpts: {
            repo: "https://prometheus-community.github.io/helm-charts",
        },
        skipCrds: false,
        values: {
            crds: { enabled: true },
            prometheusOperator: { enabled: true, admissionWebhooks: { enabled: true, certManager: { enabled: true } } },
            prometheus: {
                enabled: true,
                service: {
                    type: "LoadBalancer",
                },
                prometheusSpec: {
                    podMonitorSelectorNilUsesHelmValues: false,
                    serviceMonitorSelectorNilUsesHelmValues: false,
                },
                additionalRulesForClusterRole: [
                    {
                        apiGroups: [""],
                        resources: ["nodes/proxy", "ingresses", "configmaps"],
                        verbs: ["get", "list", "watch"],
                    },
                    {
                        apiGroups: ["extensions", "networking.k8s.io"],
                        resources: ["ingresses/status", "ingresses"],
                        verbs: ["get", "list", "watch"],
                    },
                    {
                        apiGroups: ["discovery.k8s.io"],
                        resources: ["endpointslices"],
                        verbs: ["get", "list", "watch"],
                    },
                    {
                        apiGroups: ["monitoring.coreos.com"],
                        resources: ["servicemonitors"],
                        verbs: ["get", "list", "watch", "create", "update", "patch", "delete"],
                    },
                ]
            },
            grafana: {
                enabled: options.grafana.enabled,
                service: {
                    type: "LoadBalancer",
                },
                sidecar: {
                    dashboards: {
                        searchNamespace: ["ALL"],
                    }
                }
            },
        },
    }, {
        dependsOn: [cm],
    })
    setPrometheus(pulumi.output(prom));
} else {
    setPrometheus(pulumi.output(undefined));
}

export {
    prometheus,
}

export function createDashboard(namespace: pulumi.Input<core.v1.Namespace>, name: pulumi.Input<string>, config: pulumi.Input<Record<string, pulumi.Input<string>>>): pulumi.Output<core.v1.ConfigMap | undefined> {

    return pulumi.all([
        namespace,
        name,
        prometheus,
    ]).apply(([namespace, name, prometheus]) => {
        if (prometheus === undefined) {
            return undefined;
        }
        return new core.v1.ConfigMap(name, {
            metadata: {
                namespace: namespace.metadata.name,
                name: name,
                labels: {
                    "grafana_dashboard": "1"
                },
            },
            data: config,
        });
    })
}

export function getPrometheusEndpoint(): pulumi.Output<string | undefined> {
    return prometheus.apply((prometheus) => {
        if (prometheus === undefined) {
            return undefined;
        }
        return "http://kube-prometheus-stack-prometheus.telemetry.svc.cluster.local:9090";
    });
}