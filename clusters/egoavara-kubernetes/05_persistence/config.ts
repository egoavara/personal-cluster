import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("cluster");

export const persistence = {
    qdrant: {
        version: config.get("persistence.qdrant.version") ?? "1.17.0",
        repository: "https://qdrant.github.io/qdrant-helm",
    },
    valkey: {
        version: config.get("persistence.valkey.version") ?? "5.4.8",
        repository: "https://charts.bitnami.com/bitnami",
    },
    nats: {
        version: config.get("persistence.nats.version") ?? "2.12.5",
        repository: "https://nats-io.github.io/k8s/helm/charts/",
    },
    etcd: {
        version: config.get("persistence.etcd.version") ?? "11.2.1",
        repository: "https://charts.bitnami.com/bitnami",
    },
    manticoresearch: {
        version: config.get("persistence.manticoresearch.version") ?? "15.1.0",
        repository: "https://helm.manticoresearch.com",
    },
};
