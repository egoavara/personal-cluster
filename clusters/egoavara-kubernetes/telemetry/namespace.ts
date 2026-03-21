import { core } from "@pulumi/kubernetes";
import { telemetryPhase } from "../phases.ts";

export const ns = new core.v1.Namespace("telemetry", {
    metadata: {
        name: "telemetry",
        labels: { "istio.io/dataplane-mode": "ambient" },
    },
}, { parent: telemetryPhase });
