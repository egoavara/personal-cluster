import { core, helm } from "@pulumi/kubernetes";
import { options } from "../utils/config.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
import { handle } from "../utils/handle.ts";
import * as random from "@pulumi/random";
import { interpolate } from "@pulumi/pulumi";

export const postgres = handle(options.postgres.enabled)
    .join(() => [requireNamespace("runtime")])
    .letIf(([_, ns]) => {
        const pgPassword = new random.RandomPassword("pg-password", {
            length: 20,
            special: false,
            upper: true,
            lower: true,
            number: true,
        })
        const pgRepmgrPassword = new random.RandomPassword("pg-repmgr-password", {
            length: 20,
            special: false,
            upper: true,
            lower: true,
            number: true,
        })
        const pgpoolAdminPassword = new random.RandomPassword("pgpool-admin-password", {
            length: 20,
            special: false,
            upper: true,
            lower: true,
            number: true,
        })

        const pgSecret = new core.v1.Secret("postgresql-ha-secret", {
            metadata: {
                name: "postgresql-ha-postgresql",
                namespace: ns.metadata.name,
            },
            stringData: {
                "password": pgPassword.result,
                "repmgr-password": pgRepmgrPassword.result,
            }
        })
        const pgAdminSecret = new core.v1.Secret("postgresql-ha-pgpool", {
            metadata: {
                name: "postgresql-ha-pgpool",
                namespace: ns.metadata.name,
            },
            stringData: {
                "admin-password": pgpoolAdminPassword.result,
            }
        })

        const chart = new helm.v3.Release("postgresql-ha", {
            chart: "oci://registry-1.docker.io/bitnamicharts/postgresql-ha",
            name: "postgresql-ha",
            version: "15.3.7",
            namespace: ns.metadata.name,
            createNamespace: false,
            values: {
                global: {
                    postgresql: {
                        existingSecret: pgSecret.metadata.name,
                    },
                    pgpool: {
                        existingSecret: pgAdminSecret.metadata.name,
                    }
                },
                service: {
                    type: "LoadBalancer",
                },
                postgresql: {
                    networkPolicy: {
                        enabled: false,
                    },
                    // https://github.com/bitnami/charts/issues/12263
                    repmgrFenceOldPrimary: true,
                    repmgrConfiguration: `child_nodes_disconnect_command='/bin/bash -c "while (! pg_isready -h {{ .Release.Name }}-db-postgresql-witness.{{ .Release.Namespace }}.svc.cluster.local -U postgres -t 300) do sleep 10; done; kill -TERM 1"'
child_nodes_connected_include_witness = 'true'`,
                    livenessProbe: {
                        enabled: true,
                    },
                },
                pgpool: {
                    enabled: true,
                    image: {
                        debug: true,
                    },
                    networkPolicy: {
                        enabled: false,
                    },
                    podSecurityContext: {
                        enabled: false,
                    },
                    containerSecurityContext: {
                        enabled: false,
                    },
                },
                persistence: {
                    enabled: true,
                    size: "32Gi",
                    storageClass: "local-path"
                },
                metrics: {
                    enabled: true,
                    serviceMonitor: {
                        enabled: options.prometheus.enabled,
                    },
                },
            },
        })

        return {
            username: "postgres",
            password: pgPassword.result,
            port: 5432,
            database: "postgres",
            hostname: interpolate`${chart.name}-pgpool.${ns.metadata.name}.svc.cluster.local`,
            repmgrPassword: pgRepmgrPassword,
            adminPassword: pgpoolAdminPassword,
            helm: chart
        }
    })