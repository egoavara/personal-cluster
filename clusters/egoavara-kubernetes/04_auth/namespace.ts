import { core } from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";

export const ns = new core.v1.Namespace("auth", {
    metadata: {
        name: "auth",
        labels: {
            "istio.io/dataplane-mode": "ambient",
            // waypoint는 NS 전체가 아닌 개별 서비스에 적용
            // CockroachDB 등 non-HTTP 프로토콜은 waypoint를 거치면 안 됨
        },
    },
}, { parent: authPhase });
