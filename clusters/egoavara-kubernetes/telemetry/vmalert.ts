import { apiextensions } from "@pulumi/kubernetes";
import { telemetryPhase } from "../phases.ts";
import { vmOperator } from "../operators/vm-operator.ts";
import { vmCluster } from "./vm-cluster.ts";
import { ns } from "./namespace.ts";

export const vmalert = new apiextensions.CustomResource("vmalert", {
    apiVersion: "operator.victoriametrics.com/v1beta1",
    kind: "VMAlert",
    metadata: {
        name: "vmalert",
        namespace: ns.metadata.name,
    },
    spec: {
        replicaCount: 2,
        datasource: {
            url: "http://vmselect-vm-cluster.telemetry.svc.cluster.local:8481/select/0/prometheus",
        },
        remoteWrite: {
            url: "http://vminsert-vm-cluster.telemetry.svc.cluster.local:8480/insert/0/prometheus",
        },
        remoteRead: {
            url: "http://vmselect-vm-cluster.telemetry.svc.cluster.local:8481/select/0/prometheus",
        },
        evaluationInterval: "30s",
        selectAllByDefault: true,
        resources: {
            requests: { cpu: "50m", memory: "64Mi" },
            limits: { cpu: "200m", memory: "256Mi" },
        },
    },
}, {
    parent: telemetryPhase,
    dependsOn: [vmOperator, vmCluster],
});
