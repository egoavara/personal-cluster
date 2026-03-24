import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();

export interface NodeConfig {
    name: string;
    host: string;
    storage?: {
        /** TopoLVM VG 이름 → 디바이스 경로 목록 */
        volumeGroups?: Record<string, string[]>;
    };
}

export const masterNodes: NodeConfig[] = [
    {
        name: "k8sa-00", host: "10.0.3.1",
        storage: { volumeGroups: { "local-nvme": ["/dev/nvme0n1p4"] } },
    },
    {
        name: "k8sa-01", host: "10.0.3.2",
        storage: { volumeGroups: { "local-nvme": ["/dev/nvme0n1p4"] } },
    },
    {
        name: "k8sa-02", host: "10.0.3.3",
        storage: { volumeGroups: { "local-nvme": ["/dev/nvme0n1p4"] } },
    },
];

// worker 노드 추가 시 여기에 SSH 접속 정보만 추가
export const workerNodes: NodeConfig[] = [
    // { name: "k8sw-00", host: "10.0.3.10" },
];

export const ssh = {
    keyPath: config.get("ssh.keyPath") ?? "~/.ssh/egoavara-windows",
};

export type ContainerRuntime = "containerd" | "cri-o";

export const kubernetes = {
    version: config.get("kubernetes.version") ?? "1.35",
    containerRuntime: (config.get("kubernetes.containerRuntime") ?? "containerd") as ContainerRuntime,
    controlPlaneEndpoint: config.get("kubernetes.controlPlaneEndpoint") ?? "private-kubernetes.egoavara.net:6443",
    podCidr: "10.202.0.0/16",
    serviceCidr: "10.201.0.0/16",
};

export const mikrotik = {
    host: config.get("mikrotik.host") ?? "10.0.0.1",
    user: config.get("mikrotik.user") ?? "admin",
    routerId: config.get("mikrotik.routerId") ?? "10.0.0.1",
};

export const cilium = {
    version: config.get("cilium.version") ?? "1.17.4",
    bgp: {
        localASN: config.getNumber("cilium.bgp.localASN") ?? 65001,
        peerASN: config.getNumber("cilium.bgp.peerASN") ?? 65000,
        peerAddress: config.get("cilium.bgp.peerAddress") ?? "10.0.0.1",
    },
    lbPoolCidr: config.get("cilium.lbPoolCidr") ?? "10.200.0.0/16",
};

export const rookCeph = {
    operatorVersion: config.get("rookCeph.operatorVersion") ?? "1.19.2",
    cephImage: config.get("rookCeph.cephImage") ?? "quay.io/ceph/ceph:v19.2.2",
    deviceFilter: config.get("rookCeph.deviceFilter") ?? "^sd.+",
};

export const gatewayApi = {
    version: config.get("gatewayApi.version") ?? "1.5.1",
};

export const topoLvm = {
    version: config.get("topoLvm.version") ?? "15.5.2",
};

const defaultExcludeNamespaces = ["kube-system", "kube-public", "kube-node-lease", "cilium-secrets", "operator-system"];

export const istio = {
    version: config.get("istio.version") ?? "1.29.1",
    repository: "https://istio-release.storage.googleapis.com/charts",
    excludeNamespaces: config.get("istio.excludeNamespaces")?.split(",") ?? defaultExcludeNamespaces,
};

export const externalDns = {
    version: config.get("externalDns.version") ?? "1.15.2",
    gcpProject: config.requireSecret("externalDns.gcpProject"),
    gcpServiceAccountKey: config.requireSecret("externalDns.gcpServiceAccountKey"),
    defaultTargets: config.require("externalDns.defaultTargets"),
    txtOwnerId: config.require("externalDns.txtOwnerId"),
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
    cockroachdb: {
        version: config.get("auth.cockroachdb.version") ?? "20.0.1",
        repository: "https://charts.cockroachdb.com/",
    },
    spicedb: {
        image: config.get("auth.spicedb.image") ?? "authzed/spicedb:v1.50.0",
    },
    kanidm: {
        image: config.get("auth.kanidm.image") ?? "kanidm/server:1.9.2",
        domain: config.get("auth.kanidm.domain") ?? "idm.egoavara.net",
    },
    dex: {
        version: config.get("auth.dex.version") ?? "0.24.0",
        repository: "https://charts.dexidp.io",
    },
    oauth2Proxy: {
        version: config.get("auth.oauth2Proxy.version") ?? "10.1.5",
        repository: "https://oauth2-proxy.github.io/manifests",
    },
};
