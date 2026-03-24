import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { ingress as ingressConfig } from "../utils/config.ts";
import { privateGateway } from "./private-gateway.ts";

const privateDomain = `private.${ingressConfig.domain}`;
const privateGatewayIp = "10.240.0.5";

const parentRef = {
    name: "private-gateway",
    namespace: "istio-system",
};

const dnsAnnotations = {
    "external-dns.alpha.kubernetes.io/target": privateGatewayIp,
};

// --- Grafana (telemetry NS) ---
export const grafanaRoute = new k8s.apiextensions.CustomResource("grafana-private-route", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "HTTPRoute",
    metadata: {
        name: "grafana-private",
        namespace: "telemetry",
        annotations: dnsAnnotations,
    },
    spec: {
        parentRefs: [parentRef],
        hostnames: [`grafana.${privateDomain}`],
        rules: [{
            backendRefs: [{ name: "grafana", port: 80 }],
        }],
    },
}, { parent: authPhase, dependsOn: [privateGateway] });

// --- Ceph Dashboard (rook-ceph NS) ---
export const cephRoute = new k8s.apiextensions.CustomResource("ceph-private-route", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "HTTPRoute",
    metadata: {
        name: "ceph-private",
        namespace: "rook-ceph",
        annotations: dnsAnnotations,
    },
    spec: {
        parentRefs: [parentRef],
        hostnames: [`ceph.${privateDomain}`],
        rules: [{
            backendRefs: [{ name: "ceph-dashboard", port: 80 }],
        }],
    },
}, { parent: authPhase, dependsOn: [privateGateway] });

// --- Guard ext-authz (auth NS) --- OIDC 로그인/콜백 엔드포인트
export const guardRoute = new k8s.apiextensions.CustomResource("guard-private-route", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "HTTPRoute",
    metadata: {
        name: "guard-private",
        namespace: "auth",
        annotations: dnsAnnotations,
    },
    spec: {
        parentRefs: [parentRef],
        hostnames: [`guard.${privateDomain}`],
        rules: [{
            backendRefs: [{ name: "guard-ext-authz", port: 4180 }],
        }],
    },
}, { parent: authPhase, dependsOn: [privateGateway] });

// --- Hubble UI (kube-system NS) --- guard ext-authz로 인증
export const hubbleRoute = new k8s.apiextensions.CustomResource("hubble-private-route", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "HTTPRoute",
    metadata: {
        name: "hubble-private",
        namespace: "kube-system",
        annotations: dnsAnnotations,
    },
    spec: {
        parentRefs: [parentRef],
        hostnames: [`hubble.${privateDomain}`],
        rules: [{
            backendRefs: [{ name: "hubble-ui", port: 80 }],
        }],
    },
}, { parent: authPhase, dependsOn: [privateGateway] });
