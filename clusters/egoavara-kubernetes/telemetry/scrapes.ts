import { apiextensions } from "@pulumi/kubernetes";
import { telemetryPhase } from "../phases.ts";
import { vmOperator } from "../operators/vm-operator.ts";
import { vmagent } from "./vmagent.ts";
import { ns } from "./namespace.ts";

// kubelet metrics
export const kubeletScrape = new apiextensions.CustomResource("scrape-kubelet", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMNodeScrape",
    metadata: { name: "kubelet", namespace: ns.metadata.name },
    spec: {
        scheme: "https",
        tlsConfig: {
            insecureSkipVerify: true,
            caFile: "/var/run/secrets/kubernetes.io/serviceaccount/ca.crt",
        },
        bearerTokenFile: "/var/run/secrets/kubernetes.io/serviceaccount/token",
        relabelConfigs: [
            { action: "labelmap", regex: "__meta_kubernetes_node_label_(.+)" },
        ],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });

// cAdvisor metrics (kubelet /metrics/cadvisor)
export const cadvisorScrape = new apiextensions.CustomResource("scrape-cadvisor", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMNodeScrape",
    metadata: { name: "cadvisor", namespace: ns.metadata.name },
    spec: {
        scheme: "https",
        path: "/metrics/cadvisor",
        tlsConfig: {
            insecureSkipVerify: true,
            caFile: "/var/run/secrets/kubernetes.io/serviceaccount/ca.crt",
        },
        bearerTokenFile: "/var/run/secrets/kubernetes.io/serviceaccount/token",
        relabelConfigs: [
            { action: "labelmap", regex: "__meta_kubernetes_node_label_(.+)" },
        ],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });

// Rook Ceph MGR Prometheus exporter (port 9283)
export const cephMgrScrape = new apiextensions.CustomResource("scrape-ceph-mgr", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMServiceScrape",
    metadata: { name: "ceph-mgr", namespace: ns.metadata.name },
    spec: {
        namespaceSelector: { matchNames: ["rook-ceph"] },
        selector: {
            matchLabels: {
                app: "rook-ceph-mgr",
                rook_cluster: "rook-ceph",
            },
        },
        endpoints: [
            {
                port: "http-metrics",
                interval: "15s",
            },
        ],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });

// Rook Ceph Exporter (per-node ceph exporter, port 9926)
export const cephExporterScrape = new apiextensions.CustomResource("scrape-ceph-exporter", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMServiceScrape",
    metadata: { name: "ceph-exporter", namespace: ns.metadata.name },
    spec: {
        namespaceSelector: { matchNames: ["rook-ceph"] },
        selector: {
            matchLabels: {
                app: "rook-ceph-exporter",
                rook_cluster: "rook-ceph",
            },
        },
        endpoints: [
            {
                port: "ceph-exporter-http-metrics",
                interval: "15s",
            },
        ],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });

// kube-state-metrics
export const ksmScrape = new apiextensions.CustomResource("scrape-ksm", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMServiceScrape",
    metadata: { name: "kube-state-metrics", namespace: ns.metadata.name },
    spec: {
        namespaceSelector: { matchNames: ["telemetry"] },
        selector: {
            matchLabels: { "app.kubernetes.io/name": "kube-state-metrics" },
        },
        endpoints: [{ port: "http" }],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });

// node-exporter
export const nodeExporterScrape = new apiextensions.CustomResource("scrape-node-exporter", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMServiceScrape",
    metadata: { name: "node-exporter", namespace: ns.metadata.name },
    spec: {
        namespaceSelector: { matchNames: ["telemetry"] },
        selector: {
            matchLabels: { "app.kubernetes.io/name": "prometheus-node-exporter" },
        },
        endpoints: [{ port: "metrics" }],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });

// CoreDNS (kube-system, port 9153)
export const corednsScrape = new apiextensions.CustomResource("scrape-coredns", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMServiceScrape",
    metadata: { name: "coredns", namespace: ns.metadata.name },
    spec: {
        namespaceSelector: { matchNames: ["kube-system"] },
        selector: {
            matchLabels: { "k8s-app": "kube-dns" },
        },
        endpoints: [{ port: "metrics" }],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });

// kube-apiserver (kubernetes default service)
export const apiserverScrape = new apiextensions.CustomResource("scrape-apiserver", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMServiceScrape",
    metadata: { name: "apiserver", namespace: ns.metadata.name },
    spec: {
        namespaceSelector: { matchNames: ["default"] },
        selector: {
            matchLabels: { component: "apiserver", provider: "kubernetes" },
        },
        endpoints: [{
            port: "https",
            scheme: "https",
            tlsConfig: {
                insecureSkipVerify: true,
                caFile: "/var/run/secrets/kubernetes.io/serviceaccount/ca.crt",
            },
            bearerTokenFile: "/var/run/secrets/kubernetes.io/serviceaccount/token",
        }],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });

// Hubble metrics (Cilium Hubble, kube-system)
export const hubbleScrape = new apiextensions.CustomResource("scrape-hubble", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMServiceScrape",
    metadata: { name: "hubble", namespace: ns.metadata.name },
    spec: {
        namespaceSelector: { matchNames: ["kube-system"] },
        selector: {
            matchLabels: { "k8s-app": "hubble" },
        },
        endpoints: [{ port: "hubble-metrics" }],
    },
}, { parent: telemetryPhase, dependsOn: [vmOperator, vmagent] });
