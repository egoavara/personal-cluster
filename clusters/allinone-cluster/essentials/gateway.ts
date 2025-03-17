import * as k8s from "@pulumi/kubernetes";

export const gatewayCrds = new k8s.yaml.ConfigFile("gateway-api", {
    file: "statics/gateway-api_v1.2.0.yaml",
});