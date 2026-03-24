import * as k8s from "@pulumi/kubernetes";
import { postProcess } from "../phases.ts";
import { istiod } from "../essentials/istio.ts";

/**
 * Waypoint Proxy 자동 배포.
 *
 * Istio ambient mesh에 포함된 네임스페이스에 waypoint를 배포하여
 * L7 기능(tracing, HTTP 라우팅, AuthorizationPolicy 등)을 활성화한다.
 *
 * 각 NS에 다음 라벨을 주입:
 *   istio.io/dataplane-mode: ambient  — ztunnel L4 참여 (필수)
 *   istio.io/use-waypoint: waypoint   — waypoint L7 라우팅 활성화
 *
 * Opt-out: NS에 istio.io/dataplane-mode: none 라벨을 추가하면 ambient 자체를 비활성화.
 */

// waypoint를 배포할 네임스페이스 목록
// ambient가 활성화되어 있고 istio 제외 대상이 아닌 NS
const waypointNamespaces = [
    "default",
];

function createWaypoint(namespace: string) {
    // NS에 ambient + waypoint 라벨 주입 (Gateway 보다 먼저)
    const nsPatch = new k8s.core.v1.NamespacePatch(`waypoint-label-${namespace}`, {
        metadata: {
            name: namespace,
            labels: {
                "istio.io/dataplane-mode": "ambient",
                "istio.io/use-waypoint": "waypoint",
            },
        },
    }, { parent: postProcess, dependsOn: [istiod] });

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
    }, { parent: postProcess, dependsOn: [nsPatch] });

    return { nsPatch, gateway };
}

export const waypoints = waypointNamespaces.map(createWaypoint);
