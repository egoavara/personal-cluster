import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { ingress as ingressConfig, externalDns } from "../utils/config.ts";

const privateDomain = `private.${ingressConfig.domain}`; // private.egoavara.net
const privateGatewayIp = "10.240.0.5";

// --- *.private.egoavara.net 와일드카드 인증서 ---
const privateCert = new k8s.apiextensions.CustomResource("private-wildcard-cert", {
    apiVersion: "cert-manager.io/v1",
    kind: "Certificate",
    metadata: {
        name: `wildcard-${privateDomain.replace(/\./g, "-")}`,
        namespace: "istio-system",
    },
    spec: {
        secretName: `tls-wildcard-${privateDomain.replace(/\./g, "-")}`,
        issuerRef: { name: "letsencrypt-prod", kind: "ClusterIssuer" },
        dnsNames: [`*.${privateDomain}`],
    },
}, { parent: authPhase });

// --- Private Gateway (내부 대시보드용, HTTPS 443) ---
export const privateGateway = new k8s.apiextensions.CustomResource("private-gateway", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "Gateway",
    metadata: {
        name: "private-gateway",
        namespace: "istio-system",
        annotations: {
            "io.cilium/lb-ipam-ips": privateGatewayIp,
        },
    },
    spec: {
        gatewayClassName: "istio",
        infrastructure: {
            labels: {
                "egoavara.net/lb-pool": "static",
            },
        },
        listeners: [
            {
                name: "https",
                hostname: `*.${privateDomain}`,
                protocol: "HTTPS",
                port: 443,
                tls: {
                    mode: "Terminate",
                    certificateRefs: [{
                        kind: "Secret",
                        name: `tls-wildcard-${privateDomain.replace(/\./g, "-")}`,
                    }],
                },
                allowedRoutes: {
                    namespaces: { from: "All" },
                },
            },
        ],
    },
}, { parent: authPhase, dependsOn: [privateCert] });

// --- DNS: *.private.egoavara.net → 10.240.0.5 (A record) ---
// ExternalDNS service source로 등록 — private gateway service에 annotation 추가
// Gateway가 생성한 Service에 자동으로 LB IP가 할당되므로 DNS는 ExternalDNS가 처리
