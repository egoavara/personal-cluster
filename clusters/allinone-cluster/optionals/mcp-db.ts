import { apps, core } from "@pulumi/kubernetes";
import { rdbms } from "../compatible/rdbms.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
import { options } from "../utils/config.ts";
import { handle } from "../utils/handle.ts";
import { all, interpolate } from "@pulumi/pulumi";
import { dump } from "js-yaml";
import { must } from "../utils/must.ts";
import { dex } from "./dex.ts";
import { gateway } from "@pulumi/gateway-api";
import { istio, useWaypoint } from "./istio.ts";
import { RandomBytes, RandomPassword } from "@pulumi/random";


export const mcpDb = handle(options.mcp.postgres.enabled)
    .join(() => [requireNamespace("runtime"), rdbms, dex, istio])
    .letIf(([_, ns, rawRdbms, rawDex, rawIstio]) => {
        const rdbms = must(rawRdbms, "mcp-db requires rdbms to be enabled");
        const dex = must(rawDex, "mcp-db requires dex to be enabled");
        const { defaultGateway } = must(rawIstio, "istio is required for mcp-db");

        const config = new core.v1.Secret("mcp-db-config", {
            metadata: {
                namespace: ns.metadata.name,
                name: "mcp-postgres-config",
            },
            stringData: {
                "config.yaml": all([
                    interpolate`postgresql://${rdbms.username}:${rdbms.password}@${rdbms.hostname}:${rdbms.port}/${rdbms.defaultDatabase}`,
                ]).apply(([
                    connString,
                ]) => (
                    dump({
                        "api": {
                            "name": "Automatic API",
                            "version": "1.0.0",
                        },
                        "database": {
                            "type": "postgres",
                            "connection": connString,
                        },
                        "plugins": {
                        }
                    })
                ))
            },
        })
        const deployment = new apps.v1.Deployment("mcp-db", {
            metadata: {
                namespace: ns.metadata.name,
                name: "mcp-db",
            },
            spec: {
                selector: {
                    matchLabels: {
                        app: "mcp-db",
                    }
                },
                template: {
                    metadata: {
                        labels: {
                            app: "mcp-db",
                        }
                    },
                    spec: {
                        volumes: [
                            {
                                name: "mcp-db-config",
                                secret: {
                                    secretName: config.metadata.name,
                                }
                            }
                        ],
                        containers: [
                            {
                                name: "mcp-db",
                                image: "ghcr.io/centralmind/gateway:v0.2.10",
                                args: [
                                    "start",
                                    "--config",
                                    "/etc/gateway/config.yaml",
                                    "--addr",
                                    ":8080",
                                    "--servers",
                                    interpolate`https://mcp-db.egoavara.net,https://mcp-db.${ns.metadata.name}.svc.cluster.local`,
                                ],
                                volumeMounts: [
                                    {
                                        name: "mcp-db-config",
                                        mountPath: "/etc/gateway",
                                        readOnly: true,
                                    }

                                ],
                                ports: [
                                    { containerPort: 8080 },
                                ]
                            }
                        ]
                    }
                }
            }
        })
        const service = new core.v1.Service("mcp-db", {
            metadata: {
                namespace: ns.metadata.name,
                name: "mcp-db",
                labels: useWaypoint(),
            },
            spec: {
                type: "LoadBalancer",
                ports: [
                    {
                        port: 80,
                        targetPort: 8080,
                    }
                ],
                selector: {
                    app: "mcp-db",
                }
            }
        })

        // const deploaymentProxy = new apps.v1.Deployment("mcp-db-proxy", {
        //     metadata: {
        //         namespace: ns.metadata.name,
        //         name: "mcp-db-proxy",
        //     },
        //     spec: {
        //         selector: {
        //             matchLabels: {
        //                 app: "mcp-db-proxy",
        //             }
        //         },
        //         template: {
        //             metadata: {
        //                 labels: {
        //                     app: "mcp-db-proxy",
        //                 }
        //             },
        //             spec: {
        //                 containers: [
        //                     {
        //                         name: "mcp-db-proxy",
        //                         image: "ghcr.io/egoavara/overlay-mcp:debug",
        //                         imagePullPolicy: "Always",
        //                         args: [
        //                             "--host",
        //                             "http://mcp-db.egoavara.net",
        //                             "--proxy",
        //                             interpolate`http://${service.metadata.name}.${ns.metadata.name}.svc.cluster.local`,
        //                             "--openid-connect",
        //                             "https://dex.egoavara.net",
        //                             "--client-id",
        //                             "mcp-db",
        //                             "--client-secret",
        //                             "tqbILcHlCVFC1ZeCSEe5414W",
        //                             "--scope",
        //                             "openid",
        //                             "--scope",
        //                             "email",
        //                             "--scope",
        //                             "profile",
        //                             "--scope",
        //                             "groups",
        //                         ],
        //                     }
        //                 ]
        //             }
        //         }
        //     }
        // })
        // const serviceProxy = new core.v1.Service("mcp-db-proxy", {
        //     metadata: {
        //         namespace: ns.metadata.name,
        //         name: "mcp-db-proxy",
        //     },
        //     spec: {
        //         type: "LoadBalancer",
        //         ports: [
        //             {
        //                 port: 80,
        //                 targetPort: 9090,
        //             }
        //         ],
        //         selector: {
        //             app: "mcp-db-proxy",
        //         }

        //     }
        // })

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
            config,
            deployment,
            service,
        }
    })
