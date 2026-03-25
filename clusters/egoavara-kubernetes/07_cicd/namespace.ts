import { core } from "@pulumi/kubernetes";
import { cicdPhase } from "./phase.ts";

export const ns = new core.v1.Namespace("flux-system", {
    metadata: {
        name: "flux-system",
        labels: {
            // Flux 컨트롤러 간 통신에 ztunnel이 간섭하여 liveness probe 실패 발생
            // mesh 제외하여 안정화 후, 추후 ambient 적용 검토
            "istio.io/dataplane-mode": "none",
            // mesh 밖이지만 Gateway HTTPRoute를 Istio가 인식하도록 허용
            "istio.io/gateway-route-target": "true",
        },
    },
}, { parent: cicdPhase });
