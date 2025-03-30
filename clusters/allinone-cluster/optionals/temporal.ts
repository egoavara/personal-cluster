import * as k8s from "@pulumi/kubernetes";
import { requireNamespace } from "../essentials/namespaces.ts";
import { options } from "../utils/config.ts";
import { handle } from "../utils/handle.ts";
import { must } from "../utils/must.ts";
import { elasticsearch } from "./elasticsearch.ts";
import { rdbms } from "../compatible/rdbms.ts";

export const temporal = handle(options.temporal.enabled)
    .join(() => [requireNamespace("runtime"), rdbms, elasticsearch])
    .letIf(([_, ns, rdbms, es]) => {
        const db = must(rdbms, "RDBMS is required for Temporal, but not found any RDBMS");
        const vis = must(es, "Elasticsearch is required for Temporal");
        const dbTemporalSecret = new k8s.core.v1.Secret("temporal-secret", {
            metadata: {
                name: "temporal-secret",
                namespace: ns.metadata.name,
            },
            stringData: {
                "password": db.password,
            }
        })
        const visTemporalSecret = new k8s.core.v1.Secret("temporal-visibility-secret", {
            metadata: {
                name: "temporal-visibility-secret",
                namespace: ns.metadata.name,
            },
            stringData: {
                "password": vis.password,
            }
        })

        return {
            helm: new k8s.helm.v3.Release("temporal", {
                chart: "temporal",
                name: "temporal",
                version: "0.59.0",
                namespace: ns.metadata.name,
                repositoryOpts: {
                    repo: "https://go.temporal.io/helm-charts",
                },
                values: {
                    server: {
                        config: {
                            persistence: {
                                default: {
                                    driver: "sql",
                                    sql: {
                                        driver: "postgres12",
                                        host: db.hostname,
                                        port: db.port,
                                        database: "temporal",
                                        user: db.username,
                                        existingSecret: dbTemporalSecret.metadata.name,
                                        maxConns: 20,
                                        maxIdleConns: 20,
                                        maxConnLifetime: "1h",
                                    }
                                },
                                visibility: {
                                    existingSecret: visTemporalSecret.metadata.name,
                                },
                            },
                            namespaces: {
                                create: true,
                                namespace: [
                                    {
                                        name: "default",
                                        retention: "3d",
                                    }
                                ]
                            }
                        },
                    },
                    web: {
                        service: {
                            type: "LoadBalancer",
                            port: 80,
                        },
                    },
                    prometheus: {
                        enabled: false,
                    },
                    grafana: {
                        enabled: false,
                    },
                    cassandra: {
                        enabled: false,
                    },
                    elasticsearch: {
                        enabled: false,
                        external: true,
                        host: vis.hostname,
                        username: vis.username,
                        password: vis.password,
                        port: 9200,
                        version: "v7",
                        scheme: "http",
                        logLevel: "error",
                    },

                    schema: {
                        createDatabase: {
                            enabled: true,
                        },
                        setup: {
                            enabled: true,
                        },
                        update: {
                            enabled: true,
                        },
                    }
                },
            }),
        }
    })