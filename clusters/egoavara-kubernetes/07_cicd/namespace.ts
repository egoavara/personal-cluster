import { core, networking } from "@pulumi/kubernetes";
import * as k8s from "@pulumi/kubernetes";
import { cicdPhase } from "./phase.ts";

export const ns = new core.v1.Namespace("flux-system", {
    metadata: {
        name: "flux-system",
        labels: {
            "istio.io/dataplane-mode": "ambient",
            "istio.io/use-waypoint": "waypoint",
        },
    },
}, { parent: cicdPhase });

// Istio ambient + NetworkPolicy 호환을 위한 추가 정책
// Flux/Helm chart의 NetworkPolicy가 기본적으로 제한적이므로,
// HBONE(15008), health probe(8081), web UI(9080) 포트를 추가 허용
export const allowHbone = new k8s.networking.v1.NetworkPolicy("allow-hbone", {
    metadata: { name: "allow-hbone", namespace: ns.metadata.name },
    spec: {
        podSelector: {},
        ingress: [{ ports: [{ port: 15008, protocol: "TCP" }] }],
        policyTypes: ["Ingress"],
    },
}, { parent: cicdPhase });

export const allowHealthProbes = new k8s.networking.v1.NetworkPolicy("allow-health-probes", {
    metadata: { name: "allow-health-probes", namespace: ns.metadata.name },
    spec: {
        podSelector: {},
        ingress: [{ ports: [
            { port: 8081, protocol: "TCP" },  // liveness/readiness probe
            { port: 9080, protocol: "TCP" },  // Flux Operator Web UI
            { port: 9440, protocol: "TCP" },  // Flux controller health
        ] }],
        policyTypes: ["Ingress"],
    },
}, { parent: cicdPhase });
