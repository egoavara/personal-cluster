import { core, helm } from "@pulumi/kubernetes";
import { requireNamespace } from "../essentials/namespaces.ts";
import { options } from "../utils/config.ts";
import { handle } from "../utils/handle.ts";
import { RandomPassword } from "@pulumi/random";
import { interpolate } from "@pulumi/pulumi";


export const etcd = handle(options.etcd.enabled)
    .join(() => [requireNamespace("runtime")])
    .letIf(([_, ns]) => {

        const etcdRootPassword = new RandomPassword("etcd-password", {
            length: 20,
            special: false,
            upper: true,
            lower: true,
            number: true,
        })

        const etcdSecret = new core.v1.Secret("etcd-secret", {
            metadata: {
                name: "etcd-root-password",
                namespace: ns.metadata.name,
            },
            stringData: {
                "password": etcdRootPassword.result,
            }
        })
        const chart = new helm.v3.Release("etcd", {
            chart: "oci://registry-1.docker.io/bitnamicharts/etcd",
            name: "etcd",
            version: "11.2.1",
            namespace: ns.metadata.name,
            createNamespace: false,
            values: {
                replicaCount: 3,
                auth: {
                    rbac: {
                        enabled: true,
                        create: false,
                        allowNoneAuthentication: false,
                        existingSecret: etcdSecret.metadata.name,
                        existingSecretPasswordKey: "password",
                    }
                },
                persistence: {
                    enabled: true,
                    storageClass: "local-path",
                    size: "4Gi",
                },
                disasterRecovery: {
                    enabled: false,
                },
                networkPolicy: {
                    enabled: false,
                },
                service: {
                    type: "LoadBalancer",
                },
                metric: {
                    enabled: true,
                    podMonitor: {
                        enabled: true,
                    },
                    prometheusRule: {
                        enabled: false,
                    },
                }
            },
        })
        return {
            username: "root",
            password: etcdRootPassword.result,
            hostname: interpolate`${chart.name}.${chart.namespace}.svc.cluster.local`,
            port: 2379,
            helm: chart,
        }
    })