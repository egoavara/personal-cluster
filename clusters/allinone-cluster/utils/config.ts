import * as pulumi from "@pulumi/pulumi";
const config = new pulumi.Config();

export const options = {
    "rook-ceph": {
    },

    vault: {
        enabled: config.getBoolean("vault.enabled") ?? true,
    },

    istio: {
        enabled: config.getBoolean("istio.enabled") ?? true,
    },

    prometheus: {
        enabled: config.getBoolean("prometheus.enabled") ?? true,
    },

    jaeger: {
        enabled: config.getBoolean("jaeger.enabled") ?? true,
    },

    grafana: {
        enabled: config.getBoolean("grafana.enabled") ?? true,
    },

    "cert-manager": {
        enabled: (config.getBoolean("cert-manager.enabled") ?? true),
        email: config.get("cert-manager.email"),
        dns01: {
            projectId: config.get("cert-manager.dns01.projectId"),
            serviceAccountSecretRef: {
                name: config.get("cert-manager.dns01.serviceAccountSecretRef.name"),
                key: config.get("cert-manager.dns01.serviceAccountSecretRef.key"),
            }
        },
    },

    postgres: {
        enabled: config.getBoolean("postgres.enabled") ?? true,
    },

    elasticsearch: {
        enabled: config.getBoolean("elasticsearch.enabled") ?? true,
    },

    kibana: {
        enabled: config.getBoolean("kibana.enabled") ?? true,
    },

    redis: {
        enabled: config.getBoolean("redis.enabled") ?? true,
    },

    ldap: {
        enabled: config.getBoolean("ldap.enabled") ?? true
    },

    temporal: {
        enabled: config.getBoolean("temporal.enabled") ?? true
    },

    yugabytedb: {
        enabled: config.getBoolean("yugabytedb.enabled") ?? true,
    },

    etcd: {
        enabled: config.getBoolean("etcd.enabled") ?? true,
    },

    dex: {
        enabled: config.getBoolean("dex.enabled") ?? true,
        issuer: config.get("dex.issuer"),
    },

    "gateway-api": {
    },
} as const;