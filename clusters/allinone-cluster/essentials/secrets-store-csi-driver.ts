import { helm } from "@pulumi/kubernetes";
import { handle } from "../utils/handle.ts";
import { requireNamespace } from "./namespaces.ts";

export const secretStoreCsiDriver = handle(true)
    .join(() => [requireNamespace("core-system")])
    .letIf(([_, ns]) => {
        const secretStoreCsiDriver = new helm.v3.Release("secrets-store-csi-driver", {
            chart: "secrets-store-csi-driver",
            name: "secrets-store-csi-driver",
            version: "1.4.8",
            namespace: ns.metadata.name,
            repositoryOpts: {
                repo: "https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts",
            },
            skipCrds: true,
            values: {
                syncSecret: {
                    enabled: true,
                },
                enableSecretRotation: true,
                rotationPollInterval: "2m",
            },
        });
        return {
            helm: secretStoreCsiDriver,
        };
    });
