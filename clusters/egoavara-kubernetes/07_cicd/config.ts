import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("cluster");

export const flux = {
    version: config.get("flux.version") ?? "2.4.0",
    repository: "https://fluxcd-community.github.io/helm-charts",
};

export const weaveGitops = {
    version: config.get("weaveGitops.version") ?? "4.0.36",
    repository: "oci://ghcr.io/weaveworks/charts",
};
