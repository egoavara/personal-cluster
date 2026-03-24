import * as k8s from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { ns } from "./namespace.ts";

const namespace = ns.metadata.name;

// Waypoint Gateway for persistence namespace (Qdrant HTTP/gRPC L7 처리)
export const waypointGateway = new k8s.apiextensions.CustomResource("waypoint-persistence", {
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
}, { parent: persistencePhase });

// Telemetry CRD — waypoint targetRefs 방식
export const waypointTelemetry = new k8s.apiextensions.CustomResource("istio-telemetry-waypoint-persistence", {
    apiVersion: "telemetry.istio.io/v1",
    kind: "Telemetry",
    metadata: {
        name: "waypoint-tracing",
        namespace,
    },
    spec: {
        targetRefs: [{
            kind: "Gateway",
            name: "waypoint",
            group: "gateway.networking.k8s.io",
        }],
        tracing: [{
            providers: [{ name: "otel-tracing" }],
            randomSamplingPercentage: 100,
        }],
    },
}, { parent: persistencePhase });
