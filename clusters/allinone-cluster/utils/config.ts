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

    "gateway-api": {
    },
} as const;