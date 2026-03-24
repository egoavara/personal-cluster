import { core } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";

export const ns = new core.v1.Namespace("persistence", {
    metadata: {
        name: "persistence",
        labels: {
            "istio.io/dataplane-mode": "ambient",
            // waypoint는 NS 전체가 아닌 개별 서비스(Qdrant)에만 적용
            // PG wire, RESP, NATS 등 non-HTTP 프로토콜은 waypoint를 거치면 안 됨
        },
    },
}, { parent: persistencePhase });
