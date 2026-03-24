import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("cluster");

export const rookCeph = {
    operatorVersion: config.get("rookCeph.operatorVersion") ?? "1.19.2",
    cephImage: config.get("rookCeph.cephImage") ?? "quay.io/ceph/ceph:v19.2.2",
    deviceFilter: config.get("rookCeph.deviceFilter") ?? "^sd.+",
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
