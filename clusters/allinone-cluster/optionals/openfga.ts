import { core, helm } from "@pulumi/kubernetes";
import { createDatabase, rdbms } from "../compatible/rdbms.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
import { options } from "../utils/config.ts";
import { handle } from "../utils/handle.ts";
import { must } from "../utils/must.ts";
import { istio, useWaypoint } from "./istio.ts";
import { interpolate } from "@pulumi/pulumi";
import { jaeger } from "./jaeger.ts";

export const mcpDb = handle(options.openfga.enabled)
    .join(() => [requireNamespace("runtime"), rdbms, istio, jaeger])
    .letIf(([_, ns, rawRdbms, rawIstio, rawJaeger]) => {
        const rdbms = must(rawRdbms, "mcp-db requires rdbms to be enabled");
        const { defaultGateway } = must(rawIstio, "istio is required for mcp-db");
        const jaeger = must(rawJaeger, "jaeger is required for mcp-db");
        const { database } = createDatabase("openfga");
        const datastoreSecret = new core.v1.Secret("datastore-secret", {
            metadata: {
                namespace: ns.metadata.name,
                name: "openfga-datastore-secret",
            },
            stringData: {
                "uri": interpolate`postgresql://${rdbms.username}:${rdbms.password}@${rdbms.hostname}:${rdbms.port}/${database}?sslmode=disable`,
            }
        })

        const chart = new helm.v3.Release("openfga", {
            chart: "openfga",
            repositoryOpts: {
                repo: "https://openfga.github.io/helm-charts",
            },
            name: "openfga",
            version: "0.2.26",
            namespace: ns.metadata.name,
            createNamespace: false,
            waitForJobs: true,
            values: {
                replicaCount: 3,
                image: {
                    repository: "openfga/openfga",
                    pullPolicy: "IfNotPresent",
                    tag: "v1.8.9",
                },
                datastore: {
                    engine: "postgres",
                    uriSecret: datastoreSecret.metadata.name,
                    applyMigrations: true,
                    migrationType: "job",
                },
                service: {
                    type: "LoadBalancer",
                    port: 80,
                },
                telemetry: {
                    trace: {
                        enabled: true,
                        otlp: {
                            endpoint: jaeger.otel.endpoint,
                            tls: {
                                enabled: false,
                            }
                        },
                        sampleRatio: 1,
                    },
                    metrics: {
                        enabled: true,
                        prometheus: {
                            enabled: true,
                            serviceMonitor: {
                                enabled: true,
                                namespace: ns.metadata.name,
                            }
                        }
                    },
                    http: {
                        enabled: true,
                        addr: "0.0.0.0:8080",
                        corsAllowedOrigins: ["*"],
                        corsAllowedHeaders: ["*"],
                    },
                    grpc: {
                        addr: "0.0.0.0:8081"
                    },
                    playground: {
                        enabled: true,
                        port: 3000,
                    },
                }
            },
        })

        const svc = core.v1.Service.get("openfga", interpolate`${chart.namespace}/${chart.name}`, { dependsOn: [chart] })
        useWaypoint(svc)
        
        // const httproute = new gateway.v1.HTTPRoute("mcp-db-route", {
        //     metadata: {
        //         name: "mcp-db-route",
        //         namespace: ns.metadata.name,
        //     },
        //     spec: {
        //         hostnames: [
        //             "mcp-db.egoavara.net",
        //         ],
        //         parentRefs: [{
        //             kind: "Gateway",
        //             name: defaultGateway.metadata.name,
        //             namespace: defaultGateway.metadata.namespace,
        //         }],
        //         rules: [
        //             {
        //                 backendRefs: [{
        //                     kind: "Service",
        //                     name: serviceProxy.metadata.name,
        //                     namespace: serviceProxy.metadata.namespace,
        //                     port: 80,
        //                 }]
        //             }
        //         ],
        //     }
        // });

        return {
            chart,
        }
    })
