import * as k8s from "@pulumi/kubernetes";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";

const namespace = ns.metadata.name;

// flux-system waypoint Gateway (L7 기능 활성화)
export const waypoint = new k8s.apiextensions.CustomResource("waypoint-flux-system", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "Gateway",
    metadata: {
        name: "waypoint",
        namespace,
        labels: {
            "istio.io/waypoint-for": "all",
        },
    },
    spec: {
        gatewayClassName: "istio-waypoint",
        listeners: [{
            name: "mesh",
            port: 15008,
            protocol: "HBONE",
        }],
    },
}, { parent: cicdPhase });

// Waypoint telemetry (tracing)
export const telemetry = new k8s.apiextensions.CustomResource("telemetry-waypoint-flux-system", {
    apiVersion: "telemetry.istio.io/v1",
    kind: "Telemetry",
    metadata: {
        name: "waypoint-tracing",
        namespace,
    },
    spec: {
        targetRefs: [{
            group: "gateway.networking.k8s.io",
            kind: "Gateway",
            name: "waypoint",
        }],
        tracing: [{
            providers: [{ name: "opentelemetry" }],
            randomSamplingPercentage: 100,
        }],
    },
}, { parent: cicdPhase, dependsOn: [waypoint] });
