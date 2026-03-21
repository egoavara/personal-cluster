import * as k8s from "@pulumi/kubernetes";
import { postProcess } from "../phases.ts";
import { istiod } from "../essentials/istio.ts";

/**
 * Waypoint Proxy 자동 배포.
 *
 * Istio ambient mesh에 포함된 네임스페이스에 waypoint를 배포하여
 * L7 기능(tracing, HTTP 라우팅, AuthorizationPolicy 등)을 활성화한다.
 *
 * Opt-out: 네임스페이스에 istio.io/use-waypoint: none 라벨을 추가하면
 * waypoint를 사용하지 않는다 (Gateway 리소스는 생성하되, NS 라벨로 비활성화).
 */

// waypoint를 배포할 네임스페이스 목록
// ambient가 활성화되어 있고 istio 제외 대상이 아닌 NS
const waypointNamespaces = [
    "telemetry",
    "default",
];

function createWaypoint(namespace: string) {
    const gateway = new k8s.apiextensions.CustomResource(`waypoint-${namespace}`, {
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
    }, { parent: postProcess, dependsOn: [istiod] });

    // NS에 waypoint 사용 라벨 추가
    const nsPatch = new k8s.core.v1.NamespacePatch(`waypoint-label-${namespace}`, {
        metadata: {
            name: namespace,
            labels: {
                "istio.io/use-waypoint": "waypoint",
            },
        },
    }, { parent: postProcess, dependsOn: [gateway] });

    return { gateway, nsPatch };
}

export const waypoints = waypointNamespaces.map(createWaypoint);
