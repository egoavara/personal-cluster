import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("cluster");

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
    podCidr: "10.244.0.0/16",
    serviceCidr: "10.248.0.0/16",
};

export const mikrotik = {
    host: config.get("mikrotik.host") ?? "10.0.0.1",
    user: config.get("mikrotik.user") ?? "admin",
    routerId: config.get("mikrotik.routerId") ?? "10.0.0.1",
};
