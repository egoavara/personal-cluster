import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";
import fs from "fs";
import { apps, core } from "@pulumi/kubernetes";
import { options } from "../utils/config.ts";
import { requireNamespace } from "../essentials/namespaces.ts";

const [ldapAdminPassword, setLdapAdminPassword] = pulumi.deferredOutput<random.RandomPassword | undefined>();
const [ldapSecret, setLdapSecret] = pulumi.deferredOutput<core.v1.Secret | undefined>();
const [ldapConfig, setLdapConfig] = pulumi.deferredOutput<core.v1.ConfigMap | undefined>();
const [ldapApp, setLdapApp] = pulumi.deferredOutput<apps.v1.StatefulSet | undefined>();
const [ldapService, setLdapService] = pulumi.deferredOutput<core.v1.Service | undefined>();


if (options.ldap.enabled) {
    const ns = requireNamespace("core-system");
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

    setLdapAdminPassword(pulumi.output(password));
    setLdapSecret(pulumi.output(secret));
    setLdapConfig(pulumi.output(config));
    setLdapApp(pulumi.output(statefulSet));
    setLdapService(pulumi.output(service));
} else {
    setLdapAdminPassword(pulumi.output(undefined));
    setLdapSecret(pulumi.output(undefined));
    setLdapConfig(pulumi.output(undefined));
    setLdapApp(pulumi.output(undefined));
    setLdapService(pulumi.output(undefined));
}

export { ldapAdminPassword, ldapSecret, ldapConfig, ldapApp, ldapService };