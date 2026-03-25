import * as k8s from "@pulumi/kubernetes";
import { cicdPhase } from "./phase.ts";
import { ingress as ingressConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";

const privateDomain = `private.${ingressConfig.domain}`;
const privateGatewayIp = "10.240.0.5";

export const gitopsRoute = new k8s.apiextensions.CustomResource("gitops-private-route", {
    apiVersion: "gateway.networking.k8s.io/v1",
    kind: "HTTPRoute",
    metadata: {
        name: "gitops-private",
        namespace: ns.metadata.name,
        annotations: {
            "external-dns.alpha.kubernetes.io/target": privateGatewayIp,
        },
    },
    spec: {
        parentRefs: [{
            name: "private-gateway",
            namespace: "istio-system",
        }],
        hostnames: [`gitops.${privateDomain}`],
        rules: [{
            backendRefs: [{ name: "weave-gitops", port: 9001 }],
        }],
    },
}, { parent: cicdPhase });
