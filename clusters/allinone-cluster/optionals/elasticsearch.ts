import { core, helm } from "@pulumi/kubernetes";
import * as eck from "@pulumi/eck";
import { handle } from "../utils/handle.ts";
import { options } from "../utils/config.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
import { useWaypoint } from "./istio.ts";
import { interpolate } from "@pulumi/pulumi";

export const elasticsearch = handle(options["elasticsearch"].enabled)
    .join(() => [requireNamespace("runtime")])
    .letIf(([_, ns]) => {
        const eckOperator = new helm.v3.Release("eck-operator", {
            chart: "eck-operator",
            name: "eck-operator",
            version: "2.10.0",
            namespace: "kube-system",
            repositoryOpts: {
                repo: "https://helm.elastic.co",
            },
            createNamespace: false,
            skipCrds: false,
            values: {
                "eck-operator-crds": {
                    global: {
                        createOperatorNamespace: true,
                        kubeVersion: "1.28.15",
                        manifestGen: false,
                    },
                },
                replicaCount: 1,
                tracing: {
                    enabled: false,
                }
            },
        })
        const es = new eck.elasticsearch.v1.Elasticsearch("elasticsearch", {
            metadata: {
                name: "elastic",
                namespace: ns.metadata.name,
                annotations: {
                    "pulumi.com/patchForce": "true"
                }
            },
            spec: {
                version: "8.15.1",

                nodeSets: [
                    {
                        name: "default",
                        count: 3,
                        config: {
                            "xpack.security.authc": {
                                anonymous: {
                                    username: "anonymous",
                                    roles: "superuser",
                                    authz_exception: false,
                                }
                            },
                            "node.store.allow_mmap": false,
                        },
                        podTemplate: {
                            spec: {
                                initContainers: [
                                    {
                                        name: "install-plugins",
                                        command: [
                                            "sh",
                                            "-c",
                                            `
bin/elasticsearch-plugin remove --purge analysis-nori
bin/elasticsearch-plugin install --batch analysis-nori
                            `
                                        ],
                                    }
                                ]
                            }
                        },
                        volumeClaimTemplates: [
                            {
                                metadata: {
                                    name: "elasticsearch-data",
                                },
                                spec: {
                                    accessModes: ["ReadWriteOnce"],
                                    resources: {
                                        requests: {
                                            storage: "32Gi",
                                        },
                                    },
                                    storageClassName: "local-path",
                                }
                            }
                        ],
                    }
                ],
                http: {
                    service: {
                        metadata: {
                            labels: useWaypoint(),
                        }
                    },
                    tls: {
                        selfSignedCertificate: {
                            disabled: true,
                        },
                    },
                },
            },
        }, {
            dependsOn: [eckOperator],
        })
        const passwordSecret = core.v1.Secret.get("elastic-password", interpolate`${ns.metadata.name}/${es.metadata.name}-es-elastic-user`, {
            dependsOn: [es],
        })
        return {
            eckOperator: eckOperator,
            cluster: es,
            hostname: interpolate`${es.metadata.name}-es-http.${ns.metadata.name}.svc.cluster.local`,
            username: "elastic",
            password: passwordSecret.data["elastic"].apply(v => Buffer.from(v, 'base64').toString("utf8")),
        }
    })