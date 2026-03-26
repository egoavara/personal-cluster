import * as k8s from "@pulumi/kubernetes";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";

const namespace = ns.metadata.name;

// flux-system waypoint Gateway (L7 기능 활성화)
export const waypoint = new k8s.apiextensions.CustomResource("waypoint-flux-system", {
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
}, { parent: cicdPhase });

// Waypoint telemetry (tracing)
export const telemetry = new k8s.apiextensions.CustomResource("telemetry-waypoint-flux-system", {
    apiVersion: "telemetry.istio.io/v1",
    kind: "Telemetry",
    metadata: {
        name: "waypoint-tracing",
        namespace,
    },
    spec: {
        targetRefs: [{
            group: "gateway.networking.k8s.io",
            kind: "Gateway",
            name: "waypoint",
        }],
        tracing: [{
            providers: [{ name: "opentelemetry" }],
            randomSamplingPercentage: 100,
        }],
    },
}, { parent: cicdPhase, dependsOn: [waypoint] });

// Weave GitOps sticky session — cookie 기반 consistent hash
// OIDC 세션이 in-memory이므로 같은 유저의 요청이 같은 pod으로 가야 함
export const weaveStickySesion = new k8s.apiextensions.CustomResource("weave-gitops-sticky", {
    apiVersion: "networking.istio.io/v1",
    kind: "DestinationRule",
    metadata: {
        name: "weave-gitops-sticky",
        namespace,
    },
    spec: {
        host: "weave-gitops.flux-system.svc.cluster.local",
        trafficPolicy: {
            loadBalancer: {
                consistentHash: {
                    httpCookie: {
                        name: "weave-session-affinity",
                        ttl: "3600s",
                    },
                },
            },
        },
    },
}, { parent: cicdPhase, dependsOn: [waypoint] });
