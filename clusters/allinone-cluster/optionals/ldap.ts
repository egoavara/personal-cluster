import { apps, core } from "@pulumi/kubernetes";
import * as random from "@pulumi/random";
import fs from "fs";
import { requireNamespace } from "../essentials/namespaces.ts";
import { options } from "../utils/config.ts";
import { handle } from "../utils/handle.ts";
import { interpolate } from "@pulumi/pulumi";


export const ldap = handle(options.ldap.enabled)
    .join(() => [requireNamespace("core-system")])
    .letIf(([_, ns]) => {

        const password = new random.RandomPassword("admin-password", {
            length: 32,
            minLower: 1,
            minNumeric: 1,
            minUpper: 1,
            special: false,
        })
        const secret = new core.v1.Secret("ldap", {
            metadata: {
                name: "ldap-admin",
                namespace: ns.metadata.name,
            },
            stringData: {
                "LDAP_ADMIN_USERNAME": "admin",
                "LDAP_ADMIN_PASSWORD": password.result,
            }
        })
        const config = new core.v1.ConfigMap("ldap-schema", {
            metadata: {
                name: "ldap-schema",
                namespace: ns.metadata.name,
            },
            data: {
                "memberof.ldif": fs.readFileSync("./statics/ldap/memberof.ldif").toString(),
            }
        })
        const statefulSet = new apps.v1.StatefulSet("ldap", {
            metadata: {
                name: "ldap",
                namespace: ns.metadata.name,
            },
            spec: {
                serviceName: "ldap",
                replicas: 1,
                selector: {
                    matchLabels: {
                        "app": "ldap",
                        "app.kubernetes.io/name": "ldap",
                        "app.kubernetes.io/instance": "ldap",
                    }
                },
                template: {
                    metadata: {
                        labels: {
                            "app": "ldap",
                            "app.kubernetes.io/name": "ldap",
                            "app.kubernetes.io/instance": "ldap",
                        }
                    },
                    spec: {
                        securityContext: {
                            fsGroup: 1001,
                        },
                        volumes: [
                            {
                                name: "ldap-schema",
                                configMap: {
                                    name: config.metadata.name,
                                }
                            }
                        ],
                        containers: [
                            {
                                name: "ldap",
                                image: "bitnami/openldap:2.6.9",
                                env: [
                                    {
                                        name: "LDAP_PORT_NUMBER",
                                        value: "389"
                                    },
                                    {
                                        name: "LDAP_ROOT",
                                        value: "dc=egoavara,dc=net"
                                    },
                                    {
                                        name: "LDAP_ADMIN_USERNAME",
                                        valueFrom: {
                                            secretKeyRef: {
                                                name: secret.metadata.name,
                                                key: "LDAP_ADMIN_USERNAME"
                                            }
                                        }
                                    },
                                    {
                                        name: "LDAP_ADMIN_PASSWORD",
                                        valueFrom: {
                                            secretKeyRef: {
                                                name: secret.metadata.name,
                                                key: "LDAP_ADMIN_PASSWORD"
                                            }
                                        }
                                    },
                                    {
                                        name: "LDAP_EXTRA_SCHEMAS",
                                        value: "cosine,inetorgperson,nis,memberof"
                                    }
                                ],
                                volumeMounts: [
                                    {
                                        name: "ldap-data",
                                        mountPath: "/bitnami/openldap",
                                    },
                                    {
                                        name: "ldap-schema",
                                        mountPath: "/opt/bitnami/openldap/etc/schema/memberof.ldif",
                                        subPath: "memberof.ldif",
                                    }
                                ],
                                ports: [
                                    {
                                        containerPort: 389,
                                    }
                                ],
                            }
                        ],
                    }
                },
                volumeClaimTemplates: [
                    {
                        metadata: {
                            name: "ldap-data",
                        },
                        spec: {
                            storageClassName: "rook-ceph-block",
                            accessModes: ["ReadWriteOnce"],
                            resources: {
                                requests: {
                                    storage: "1Gi"
                                }
                            }
                        }
                    }
                ]
            }
        })
        const service = new core.v1.Service("ldap", {
            metadata: {
                name: "ldap",
                namespace: ns.metadata.name,
            },
            spec: {
                type: "LoadBalancer",
                selector: statefulSet.spec.template.metadata.labels,
                ports: [
                    {
                        port: 389,
                        targetPort: 389,
                    }
                ],
            }
        })
        return {
            hostname: interpolate`${service.metadata.name}.${service.metadata.namespace}.svc.cluster.local`,
            port: 389,
            username: "admin",
            password: password.result,
            secret: secret,
            config: config,
            statefulSet: statefulSet,
            service: service,
            details: {
                baseDn: "dc=egoavara,dc=net",
                bindDn: "cn=admin,dc=egoavara,dc=net",
                bindPw: password.result,
                user: {
                    baseDn: "ou=users,dc=egoavara,dc=net",
                    filter: "(objectClass=posixAccount)",
                    username: "uid",
                    idAttr: "uid",
                    emailAttr: "mail",
                    nameAttr: "cn",
                    preferredUsernameAttr: "uid",
                },
                group: {
                    baseDn: "ou=groups,dc=egoavara,dc=net",
                    filter: "(objectClass=groupOfNames)",
                    userMatchers: {
                        userAttr: "DN",
                        groupAttr: "member",
                    },
                    nameAttr: "cn",
                },
            }
        }
    })