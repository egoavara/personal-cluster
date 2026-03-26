import { core } from "@pulumi/kubernetes";
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
