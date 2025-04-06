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
import { istio } from "./istio.ts";
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
                        "plugins": {}
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
        const cookie_secret = new RandomPassword("mcp-db-oauth2-proxy-cookie-secret", {
            length: 32,
            special: false,
            upper: true,
            lower: true,
            number: true,
        })
        const oauth2Config = new core.v1.Secret("mcp-db-oauth2-proxy-config", {
            metadata: {
                namespace: ns.metadata.name,
                name: "mcp-db-oauth2-proxy-config",
            },
            stringData: {
                "config.cfg": interpolate`http_address = "0.0.0.0:4180"
upstreams = [
    "http://${service.metadata.name}.${service.metadata.namespace}.svc.cluster.local:80"
]
pass_user_headers = true

provider = "oidc"

oidc_issuer_url="${dex.issuer}"
client_id="${dex.staticClients["mcp-db"].id}"
client_secret="${dex.staticClients["mcp-db"].secret}"
redirect_url="${dex.staticClients["mcp-db"].redirectURIs[0]}"
scope = "openid email profile groups"
oidc_groups_claim = "groups"

cookie_secure=false
cookie_secret="${cookie_secret.result}"
email_domains=[
    "*"
]
skip_jwt_bearer_tokens = true

skip_auth_routes = []
api_routes = [
    "^/sse",
    "^/message"
]
`
            }
        })

        const oauth2Proxy = new apps.v1.Deployment("mcp-db-oauth2-proxy", {
            metadata: {
                namespace: ns.metadata.name,
                name: "mcp-db-oauth2-proxy",
            },
            spec: {
                selector: {
                    matchLabels: {
                        app: "mcp-db-oauth2-proxy",
                    }
                },
                template: {
                    metadata: {
                        labels: {
                            app: "mcp-db-oauth2-proxy",
                        }
                    },
                    spec: {
                        volumes: [
                            {
                                name: "mcp-db-oauth2-proxy-config",
                                secret: {
                                    secretName: oauth2Config.metadata.name,
                                }
                            }
                        ],
                        containers: [
                            {
                                name: "mcp-db-oauth2-proxy",
                                image: "bitnami/oauth2-proxy:7.8.2",
                                args: [
                                    "--config=/etc/oauth2-proxy/config.cfg",
                                ],
                                volumeMounts: [
                                    {
                                        name: "mcp-db-oauth2-proxy-config",
                                        mountPath: "/etc/oauth2-proxy",
                                        readOnly: true,
                                    }
                                ],
                                ports: [
                                    { containerPort: 4180 },
                                ]
                            }
                        ]
                    }
                }
            }
        })

        const oauth2Service = new core.v1.Service("mcp-db-oauth2-proxy", {
            metadata: {
                namespace: ns.metadata.name,
                name: "mcp-db-oauth2-proxy",
            },
            spec: {
                type: "LoadBalancer",
                ports: [
                    {
                        port: 80,
                        targetPort: 4180,
                    }
                ],
                selector: {
                    app: "mcp-db-oauth2-proxy",
                }
            }
        })

        const oauth2Httproute = new gateway.v1.HTTPRoute("mcp-db-oauth2-proxy-route", {
            metadata: {
                name: "mcp-db-oauth2-proxy-route",
                namespace: ns.metadata.name,
            },
            spec: {
                hostnames: [
                    "mcp-db.egoavara.net",
                ],
                parentRefs: [{
                    kind: "Gateway",
                    name: defaultGateway.metadata.name,
                    namespace: defaultGateway.metadata.namespace,
                }],
                rules: [
                    {
                        matches: [
                            {
                                path: {
                                    type: "Exact",
                                    value: "/.well-known/oauth-authorization-server",
                                }
                            },
                        ],
                        // filters: [
                        //     {
                        //         type: "URLRewrite",
                        //         urlRewrite: {
                        //             path: {
                        //                 type: "ReplaceFullPath",
                        //                 replaceFullPath: "/.well-known/openid-configuration",
                        //             },
                        //         },
                        //     },
                        // ],
                        // backendRefs: [{
                        //     kind: "Service",
                        //     name: "dex",
                        //     port: 5556,
                        // }]
                        filters: [
                            {
                                type: "RequestRedirect",
                                requestRedirect: {
                                    hostname: "dex.egoavara.net",
                                    statusCode: 301,
                                }
                            }
                        ]
                    },
                    {
                        matches: [
                            {
                                path: {
                                    type: "Exact",
                                    value: "/message/",
                                }
                            },
                        ],
                        filters: [
                            {
                                type: "URLRewrite",
                                urlRewrite: {
                                    path: {
                                        type: "ReplaceFullPath",
                                        replaceFullPath: "/message",
                                    }
                                },
                            }
                        ],
                        backendRefs: [{
                            kind: "Service",
                            name: oauth2Service.metadata.name,
                            namespace: oauth2Service.metadata.namespace,
                            port: 80,
                        }]
                    },
                    {
                        matches: [
                            {
                                path: {
                                    type: "Exact",
                                    value: "/sse/",
                                }
                            },
                        ],
                        filters: [
                            {
                                type: "URLRewrite",
                                urlRewrite: {
                                    path: {
                                        type: "ReplaceFullPath",
                                        replaceFullPath: "/sse",
                                    }
                                },
                            }
                        ],
                        backendRefs: [{
                            kind: "Service",
                            name: oauth2Service.metadata.name,
                            namespace: oauth2Service.metadata.namespace,
                            port: 80,
                        }]
                    },
                    {
                        backendRefs: [{
                            kind: "Service",
                            name: oauth2Service.metadata.name,
                            namespace: oauth2Service.metadata.namespace,
                            port: 80,
                        }]
                    }
                ],
            }
        });

        return {
            config,
            deployment,
            service,
            oauth2: {
                deployment: oauth2Proxy,
                service: oauth2Service,
                httproute: oauth2Httproute,
            }
        }
    })
