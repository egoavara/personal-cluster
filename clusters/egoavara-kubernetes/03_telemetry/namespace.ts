import { core } from "@pulumi/kubernetes";
import { telemetryPhase } from "./phase.ts";

export const ns = new core.v1.Namespace("telemetry", {
    metadata: {
        name: "telemetry",
        labels: {
            "istio.io/dataplane-mode": "none",
            "istio.io/gateway-route-target": "true",
        },
    },
}, { parent: telemetryPhase });
