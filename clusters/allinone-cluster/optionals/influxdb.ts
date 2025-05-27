import * as pulumi from "@pulumi/pulumi";
import { core, helm } from "@pulumi/kubernetes";
import { requireNamespace } from "../essentials/namespaces.ts";
import { options } from "../utils/config.ts";
import { handle } from "../utils/handle.ts";
import { useWaypoint } from "./istio.ts";
import { RandomPassword } from "@pulumi/random";

export const influxdb = handle(options.influxdb.enabled)
    .join(() => [requireNamespace("runtime")])
    .letIf(([_, ns]) => {
        const password = new RandomPassword("influxdb-password", {
            length: 24,
            minLower: 1,
            minUpper: 1,
            minNumeric: 1,
            special: false,
        });

        const user = new core.v1.Secret("influxdb-auth", {
            metadata: {
                name: "influxdb-auth",
                namespace: ns.metadata.name,
            },
            stringData: {
                "admin-password": password.result,
                "admin-token": password.result,
            },
        });

        const chart = new helm.v3.Release("influxdb", {
            chart: "influxdb2",
            name: "influxdb",
            version: "2.1.2",
            namespace: ns.metadata.name,
            createNamespace: false,
            repositoryOpts: {
                repo: "https://helm.influxdata.com/",
            },
            values: {
                adminUser: {
                    existingSecret: user.metadata.name,
                },
                service: {
                    type: "LoadBalancer",
                    annotations: useWaypoint(),
                },
                persistence: {
                    enabled: true,
                    size: "8Gi",
                    storageClass: "local-path",
                },
                resources: {
                    requests: {
                        memory: "256Mi",
                        cpu: "100m",
                    },
                    limits: {
                        memory: "2Gi",
                        cpu: "1000m",
                    },
                },
            },
        });

        return {
            chart,
            password,
        };
    });