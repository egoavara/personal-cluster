import { apps, batch, core, helm } from "@pulumi/kubernetes"
import { requireNamespace } from "../essentials/namespaces.ts"
import { options } from "../utils/config.ts"
import { handle } from "../utils/handle.ts"
import { interpolate } from "@pulumi/pulumi"
import { RandomPassword } from "@pulumi/random"
import { useWaypoint } from "./istio.ts"

export const yugabytedb = handle(options.yugabytedb.enabled)
    .join(() => [requireNamespace("runtime")])
    .letIf(([_, ns]) => {
        const username = "yugabyte"
        const password = new RandomPassword("yugabyte-password", {
            length: 24,
            minLower: 1,
            minUpper: 1,
            minNumeric: 1,
            special: false,
        })
        const meta = Symbol.for("service-metadata")
        const endpoints = [
            {
                name: "yb-master-ui",
                type: "LoadBalancer",
                scope: "AZ",
                annotations: {},
                clusterIP: "",
                externalTrafficPolicy: "",
                app: "yb-master",
                loadBalancerIP: "",
                ports: {
                    "http-ui": "7000"
                },
                [meta]: {
                    waypoint: true,
                }
            },
            {
                name: "yb-tserver-service",
                type: "LoadBalancer",
                scope: "AZ",
                annotations: {},
                clusterIP: "",
                externalTrafficPolicy: "",
                app: "yb-tserver",
                loadBalancerIP: "",
                ports: {
                    "tcp-yql-port": "9042",
                    "tcp-yedis-port": "6379",
                    "tcp-ysql-port": "5433",
                },
                [meta]: {
                    waypoint: false,
                }
            }, {
                name: "yugabyted-ui-service",
                type: "LoadBalancer",
                scope: "AZ",
                annotations: {},
                clusterIP: "",
                externalTrafficPolicy: "",
                app: "yb-master",
                loadBalancerIP: "",
                sessionAffinity: "ClientIP",
                ports: {
                    "yugabyted-ui": "15433",
                },
                [meta]: {
                    waypoint: true,
                }
            }
        ]
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
                enableLoadBalancer: true,
                serviceEndpoints: endpoints,
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
        for (const endpoint of endpoints) {
            const svc = core.v1.Service.get(endpoint.name, interpolate`${chart.namespace}/${endpoint.name}`, { dependsOn: [chart] })
            if (endpoint[meta].waypoint) {
                useWaypoint(svc)
            }
        }
        return {
            username: username,
            password: password.result,
            hostname: interpolate`yb-tserver-service.${ns.metadata.name}.svc.cluster.local`,
            port: 5433,
            database: "postgres",
            helm: chart
        }
    })
