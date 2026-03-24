import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { ingress as ingressConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";

const namespace = ns.metadata.name;

// 클러스터 내부에서 *.egoavara.net 접속 시 Gateway IP로 직접 라우팅
// DNS capture(ztunnel) → ServiceEntry → 10.240.1.1 (공유기 불경유)
// protocol: TLS → Gateway가 TLS terminate
export const internalDomainEntry = new k8s.apiextensions.CustomResource("egoavara-net-internal", {
    apiVersion: "networking.istio.io/v1",
    kind: "ServiceEntry",
    metadata: { name: "egoavara-net-internal", namespace },
    spec: {
        hosts: [`*.${ingressConfig.domain}`],
        location: "MESH_INTERNAL",
        ports: [{
            number: 443,
            name: "tls",
            protocol: "TLS",
        }],
        resolution: "STATIC",
        endpoints: [{
            address: ingressConfig.gatewayIp,
        }],
    },
}, { parent: authPhase });
