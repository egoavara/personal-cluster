import * as pulumi from "@pulumi/pulumi";
import { core, helm } from "@pulumi/kubernetes";
import { externalDns as externalDnsConfig } from "../utils/config.ts";
import { requireNamespace } from "./namespaces.ts";
import { essentials } from "./phase.ts";
import { gatewayCrds } from "./gateway-api.ts";

const ns = requireNamespace("operator-system", {
    labels: { "istio.io/dataplane-mode": "none" },
});

const gcpSaSecret = new core.v1.Secret("external-dns-gcp-sa", {
    metadata: {
        name: "external-dns-gcp-sa",
        namespace: ns.metadata.name,
    },
    stringData: {
        "credentials.json": externalDnsConfig.gcpServiceAccountKey!,
    },
}, { parent: essentials });

export const externalDns = new helm.v3.Release("external-dns", {
    chart: "external-dns",
    name: "external-dns",
    version: externalDnsConfig.version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://kubernetes-sigs.github.io/external-dns/" },
    createNamespace: false,
    values: {
        provider: {
            name: "google",
        },
        extraArgs: [
            pulumi.interpolate`--google-project=${externalDnsConfig.gcpProject}`,
            pulumi.interpolate`--txt-owner-id=${externalDnsConfig.txtOwnerId}`,
            "--txt-prefix=edns-",
        ],
        policy: "sync",
        sources: ["gateway-httproute", "gateway-grpcroute", "service"],
        env: [
            {
                name: "GOOGLE_APPLICATION_CREDENTIALS",
                value: "/etc/gcp/credentials.json",
            },
        ],
        extraVolumes: [
            {
                name: "gcp-sa",
                secret: { secretName: "external-dns-gcp-sa" },
            },
        ],
        extraVolumeMounts: [
            {
                name: "gcp-sa",
                mountPath: "/etc/gcp",
                readOnly: true,
            },
        ],
        resources: {
            requests: { cpu: "50m", memory: "64Mi" },
            limits: { cpu: "200m", memory: "128Mi" },
        },
    },
}, {
    parent: essentials,
    dependsOn: [gcpSaSecret, gatewayCrds],
});
