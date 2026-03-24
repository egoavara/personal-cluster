import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("cluster");

// --- Cross-phase configs only ---
// Phase-specific configs live in each phase's own config.ts:
//   00_bootstrap/config.ts: masterNodes, workerNodes, ssh, kubernetes, mikrotik, NodeConfig
//   01_essentials/config.ts: rookCeph, topoLvm, istio
//   05_persistence/config.ts: persistence

export const cilium = {
    version: config.get("cilium.version") ?? "1.17.4",
    bgp: {
        localASN: config.getNumber("cilium.bgp.localASN") ?? 65001,
        peerASN: config.getNumber("cilium.bgp.peerASN") ?? 65000,
        peerAddress: config.get("cilium.bgp.peerAddress") ?? "10.0.0.1",
    },
    lbPoolCidr: config.get("cilium.lbPoolCidr") ?? "10.240.0.0/16",
};

export const ingress = {
    gatewayIp: config.get("ingress.gatewayIp") ?? "10.240.1.1",
    domain: config.get("ingress.domain") ?? "egoavara.net",
};

export const externalDns = {
    version: config.get("externalDns.version") ?? "1.15.2",
    gcpProject: config.getSecret("externalDns.gcpProject"),
    gcpServiceAccountKey: config.getSecret("externalDns.gcpServiceAccountKey"),
    defaultTargets: config.get("externalDns.defaultTargets") ?? "",
    txtOwnerId: config.get("externalDns.txtOwnerId") ?? "",
};

export const telemetry = {
    vmOperator: { version: config.get("telemetry.vmOperator.version") ?? "0.59.3" },
    grafana: { version: config.get("telemetry.grafana.version") ?? "10.5.15" },
    metricsServer: { version: config.get("telemetry.metricsServer.version") ?? "3.13.0" },
    prometheusAdapter: { version: config.get("telemetry.prometheusAdapter.version") ?? "5.3.0" },
    otelCollector: { version: config.get("telemetry.otelCollector.version") ?? "0.147.1" },
    kubeStateMetrics: { version: config.get("telemetry.kubeStateMetrics.version") ?? "7.2.1" },
    nodeExporter: { version: config.get("telemetry.nodeExporter.version") ?? "4.52.1" },
};

export const auth = {
    spicedb: {
        image: config.get("auth.spicedb.image") ?? "authzed/spicedb:v1.50.0",
    },
    zitadel: {
        version: config.get("auth.zitadel.version") ?? "9.27.1",
        repository: "https://charts.zitadel.com",
        domain: config.get("auth.zitadel.domain") ?? "auth.egoavara.net",
    },
    oauth2Proxy: {
        version: config.get("auth.oauth2Proxy.version") ?? "10.1.5",
        repository: "https://oauth2-proxy.github.io/manifests",
    },
    guard: {
        image: config.get("auth.guard.image") ?? "ghcr.io/egoavara/guard:latest",
    },
};
