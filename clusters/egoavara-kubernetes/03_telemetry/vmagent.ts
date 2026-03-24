import { apiextensions } from "@pulumi/kubernetes";
import { telemetryPhase } from "../phases.ts";
import { vmOperator } from "../operators/vm-operator.ts";
import { vmCluster } from "./vm-cluster.ts";
import { ns } from "./namespace.ts";

export const vmagent = new apiextensions.CustomResource("vmagent", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMAgent",
    metadata: {
        name: "vmagent",
        namespace: ns.metadata.name,
    },
    spec: {
        selectAllByDefault: true,
        replicaCount: 1,
        resources: {
            requests: { cpu: "100m", memory: "128Mi" },
            limits: { cpu: "500m", memory: "512Mi" },
        },
        extraArgs: {
            "promscrape.streamParse": "true",
            "remoteWrite.tmpDataPath": "/tmp/vmagent-remotewrite-data",
        },
        remoteWrite: [
            {
                url: "http://vminsert-vm-cluster.telemetry.svc.cluster.local:8480/insert/0/prometheus/api/v1/write",
            },
        ],
        scrapeInterval: "30s",
        serviceScrapeNamespaceSelector: {},
        serviceScrapeSelector: {},
        podScrapeNamespaceSelector: {},
        podScrapeSelector: {},
        nodeScrapeNamespaceSelector: {},
        nodeScrapeSelector: {},
    },
}, {
    parent: telemetryPhase,
    dependsOn: [vmOperator, vmCluster],
});
