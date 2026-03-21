import { apiextensions } from "@pulumi/kubernetes";
import { telemetryPhase } from "../phases.ts";
import { istiod } from "../essentials/istio.ts";
import { otelCollector } from "./otel-collector.ts";

// Istio Telemetry API — mesh 전체 tracing 활성화
// meshConfig.defaultProviders.tracing 만으로는 waypoint에 적용되지 않음.
// Telemetry CRD가 있어야 waypoint의 Envoy HCM에 tracing config가 주입됨.
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
