import { helm } from "@pulumi/kubernetes";
import { requireNamespace } from "./namespaces.ts";
import { essentials } from "../phases.ts";

const ns = requireNamespace("cert-manager");

export const certManager = new helm.v3.Release("cert-manager", {
    chart: "cert-manager",
    name: "cert-manager",
    version: "v1.20.0",
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://charts.jetstack.io" },
    createNamespace: false,
    values: {
        crds: { enabled: true },
    },
}, { parent: essentials });
