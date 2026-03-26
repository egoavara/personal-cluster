import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("cluster");

export const flux = {
    version: config.get("flux.version") ?? "2.18.2",
    repository: "https://fluxcd-community.github.io/helm-charts",
};

export const fluxOperator = {
    version: config.get("fluxOperator.version") ?? "0.45.1",
    repository: "oci://ghcr.io/controlplaneio-fluxcd/charts",
};
