import { core, helm } from "@pulumi/kubernetes";
import { requireNamespace } from "../essentials/namespaces.ts";
import { options } from "../utils/config.ts";
import { handle } from "../utils/handle.ts";
import { etcd } from "./etcd.ts";
import { interpolate } from "@pulumi/pulumi";
import { must } from "../utils/must.ts";
import { ldap } from "./ldap.ts";
import { istio, useWaypoint } from "./istio.ts";
import { gateway } from "@pulumi/gateway-api";
import assert from "assert";
import { RandomPassword } from "@pulumi/random";


export const dex = handle(options.dex.enabled)
    .join(() => [requireNamespace("runtime"), etcd, ldap, istio])
    .letIf(([_, ns, rawEtcd, rawLdap, rawIstio]) => {
        assert(options.dex.issuer, "issuer is required for dex");

        const storage = must(rawEtcd, "etcd is required for dex");
        const { defaultGateway } = must(rawIstio, "istio is required for dex");

        const staticClients = {
            "debug": {
                id: "debug",
                redirectURIs: [
                    "https://debug.kafe.or.kr/api/oidc/callback",
                    "https://oidcdebugger.com/debug",
                    "https://openidconnect.net/callback",
                ],
                name: "Debug",
                secret: "debug-secret-debug-secret-debug-secret",
            },
            "mcp-db": {
                id: "mcp-db",
                redirectURIs: [
                    "https://mcp-db.egoavara.net/oauth2/callback",
                    "https://mcp-db.egoavara.net/swagger/oauth2-redirect.html",
                    "https://mcp-db.egoavara.net/",
                    "http://127.0.0.1:6274/oauth/callback",
                    "http://localhost:6274/oauth/callback",
                    "https://oidcdebugger.com/debug",
                ],
                name: "MCP DB",
                secret: (new RandomPassword("mcp-db-static-client", {
                    length: 24,
                    special: false,
                    overrideSpecial: "_",
                })).result,
            },
        }

        const connectors: any[] = []
        if (rawLdap !== undefined) {
            connectors.push({
                type: "ldap",
                id: "ldap",
                name: "LDAP",

                config: {
                    host: interpolate`${rawLdap.hostname}:${rawLdap.port}`,
                    insecureNoSSL: true,
                    insecureSkipVerify: true,
                    bindDN: rawLdap.details.bindDn,
                    bindPW: rawLdap.details.bindPw,
                    userSearch: {
                        baseDN: rawLdap.details.user.baseDn,
                        filter: rawLdap.details.user.filter,
                        username: rawLdap.details.user.username,
                        idAttr: rawLdap.details.user.idAttr,
                        emailAttr: rawLdap.details.user.emailAttr,
                        nameAttr: rawLdap.details.user.nameAttr,
                        preferredUsernameAttr: rawLdap.details.user.preferredUsernameAttr,
                    },
                    groupSearch: {
                        baseDN: rawLdap.details.group.baseDn,
                        filter: rawLdap.details.group.filter,
                        userMatchers: [
                            {
                                userAttr: rawLdap.details.group.userMatchers.userAttr,
                                groupAttr: rawLdap.details.group.userMatchers.groupAttr,
                            }
                        ],
                        nameAttr: rawLdap.details.group.nameAttr,
                    },
                }
            })
        }

        const chart = new helm.v3.Release("dex", {
            chart: "dex",
            repositoryOpts: {
                repo: "https://charts.dexidp.io",
            },
            name: "dex",
            version: "0.23.0",
            namespace: ns.metadata.name,
            createNamespace: false,
            maxHistory: 5,
            values: {
                replicaCount: 2,
                config: {
                    issuer: options.dex.issuer,
                    oauth2: {
                        responseTypes: ["code", "id_token", "token"],
                    },
                    storage: {
                        type: "etcd",
                        config: {
                            endpoints: [
                                interpolate`http://${storage.hostname}:${storage.port}`,
                            ],
                            namespace: "dex/",
                            username: storage.username,
                            password: storage.password,
                        },
                    },
                    staticClients: Object.values(staticClients),
                    connectors: connectors,
                },
                service: {
                    type: "LoadBalancer",
                },
                serviceMonitor: {
                    enabled: true,
                },
            },
        })

        const svc = core.v1.Service.get("dex", interpolate`${chart.namespace}/${chart.name}`, { dependsOn: [chart] })
        useWaypoint(svc)
        
        const issuerHostname = new URL(options.dex.issuer).hostname
        const httproute = new gateway.v1.HTTPRoute("dex-route", {
            metadata: {
                name: "dex-route",
                namespace: ns.metadata.name,
            },
            spec: {
                hostnames: [issuerHostname],
                parentRefs: [{
                    kind: "Gateway",
                    name: defaultGateway.metadata.name,
                    namespace: defaultGateway.metadata.namespace,
                }],
                rules: [
                    {
                        matches: [
                            {
                                method: "GET",
                                path: {
                                    type: "Exact",
                                    value: "/.well-known/oauth-authorization-server",
                                }
                            },
                        ],
                        filters: [
                            {
                                type: "URLRewrite",
                                urlRewrite: {
                                    path: {
                                        type: "ReplaceFullPath",
                                        replaceFullPath: "/.well-known/openid-configuration",
                                    },
                                },
                            },
                        ],
                        backendRefs: [{
                            kind: "Service",
                            name: svc.metadata.name,
                            namespace: svc.metadata.namespace,
                            port: 5556,
                        }]
                    },
                    {
                        backendRefs: [{
                            kind: "Service",
                            name: svc.metadata.name,
                            namespace: svc.metadata.namespace,
                            port: 5556,
                        }]
                    },
                ]
            }
        }, {
            dependsOn: [svc],
        })
        return {
            issuer: options.dex.issuer,
            httproute: httproute,
            helm: chart,
            staticClients: staticClients,
            url: options.dex.issuer,
        }
    })