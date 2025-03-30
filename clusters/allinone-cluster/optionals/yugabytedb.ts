import { helm } from "@pulumi/kubernetes"
import { requireNamespace } from "../essentials/namespaces.ts"
import { options } from "../utils/config.ts"
import { handle } from "../utils/handle.ts"
import { interpolate } from "@pulumi/pulumi"

export const yugabytedb = handle(options.yugabytedb.enabled)
    .join(() => [requireNamespace("runtime")])
    .letIf(([_, ns]) => {
        const username = "yugabyte"
        const password = "yugabyte"
        const chart = new helm.v3.Release("yugabyte", {
            chart: "yugabyte",
            repositoryOpts: {
                repo: "https://charts.yugabyte.com",
            },
            name: "yugabyte",
            version: "2024.2.2",
            namespace: ns.metadata.name,
            createNamespace: false,
            values: {
                storage: {
                    master: {
                        count: "2",
                        size: "16Gi",
                        storageClass: "local-path",
                    },
                    tserver: {
                        count: "2",
                        size: "16Gi",
                        storageClass: "local-path",
                    },

                },
                resource: {
                    master: {
                        requests: {
                            cpu: "0.5",
                            memory: "0.5Gi",
                        },
                        limit: {
                            cpu: "1",
                            memory: "1Gi",
                        },
                    },
                    tserver: {
                        requests: {
                            cpu: "0.5",
                            memory: "0.5Gi",
                        },
                        limit: {
                            cpu: "1",
                            memory: "1Gi",
                        },
                    },
                },
                replicas: {
                    master: 3,
                    tserver: 3,
                    totalMasters: 3,
                },
                tls: {
                    enabled: false,
                },
                serviceMonitor: {
                    enabled: true,
                },
                // TODO: Enable otel collector
                // otelCollector: {
                //     enabled: true,
                // },
            },
        })

        return {
            username: username,
            password: password,
            hostname: interpolate`yb-tserver-service.${ns.metadata.name}.svc.cluster.local`,
            port: 5433,
            database: "postgres",
            helm: chart
        }
    })