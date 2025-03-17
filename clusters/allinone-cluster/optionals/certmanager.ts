import * as k8s from "@pulumi/kubernetes";
import { options } from "../utils/config.ts";
import { handle } from "../utils/handle.ts";

export const certmanager = handle(options["cert-manager"].enabled).letIf((_) => {
    return new k8s.helm.v3.Release("cert-manager", {
        chart: "cert-manager",
        name: "cert-manager",
        version: "1.14.4",
        namespace: "kube-system",
        repositoryOpts: {
            repo: "https://charts.jetstack.io",
        },
        skipCrds: false,
        values: {
            installCRDs: true,
            prometheus: {
                enabled: options["prometheus"].enabled,
            },
        },
    })
})