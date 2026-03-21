import { apiextensions } from "@pulumi/kubernetes";
import { telemetryPhase } from "../phases.ts";
import { istiod } from "../essentials/istio.ts";
import { otelCollector } from "./otel-collector.ts";

// Istio Telemetry API — mesh 전체 tracing 활성화
// meshConfig.defaultProviders.tracing 만으로는 waypoint에 적용되지 않음.
// Telemetry CRD가 있어야 waypoint의 Envoy HCM에 tracing config가 주입됨.
//
// 참고: waypoint는 targetRefs 기반 Telemetry를 권장하지만,
// istio-system에 mesh-wide Telemetry를 생성하면 sidecar + waypoint 모두 적용됨.
// 추가로 각 waypoint Gateway에 targetRefs Telemetry를 생성하여 확실히 적용.
export const meshTelemetry = new apiextensions.CustomResource("istio-telemetry", {
    apiVersion: "telemetry.istio.io/v1",
    kind: "Telemetry",
    metadata: {
        name: "mesh-default",
        namespace: "istio-system",
    },
    spec: {
        tracing: [
            {
                providers: [{ name: "otel-tracing" }],
                randomSamplingPercentage: 100,
            },
        ],
    },
}, {
    parent: telemetryPhase,
    dependsOn: [istiod, otelCollector],
});

// waypoint별 Telemetry (targetRefs 방식 — 공식 권장)
const waypointNamespaces = ["telemetry", "default", "cert-manager"];

export const waypointTelemetries = waypointNamespaces.map(ns =>
    new apiextensions.CustomResource(`istio-telemetry-waypoint-${ns}`, {
        apiVersion: "telemetry.istio.io/v1",
        kind: "Telemetry",
        metadata: {
            name: "waypoint-tracing",
            namespace: ns,
        },
        spec: {
            targetRefs: [{
                kind: "Gateway",
                name: "waypoint",
                group: "gateway.networking.k8s.io",
            }],
            tracing: [
                {
                    providers: [{ name: "otel-tracing" }],
                    randomSamplingPercentage: 100,
                },
            ],
        },
    }, {
        parent: telemetryPhase,
        dependsOn: [istiod, otelCollector],
    })
);
