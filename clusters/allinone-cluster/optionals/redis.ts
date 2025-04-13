import * as pulumi from "@pulumi/pulumi";
import { helm } from "@pulumi/kubernetes";
import { options } from "../utils/config.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
import { useWaypoint } from "./istio.ts";
import { handle } from "../utils/handle.ts";
import { RandomPassword } from "@pulumi/random";

export const redis = handle(options.redis.enabled)
    .join(() => [requireNamespace("runtime")])
    .letIf(([_, ns]) => {
        const password = new RandomPassword("redis-password", {
            length: 24,
            minLower: 1,
            minUpper: 1,
            minNumeric: 1,
            special: false,
        })

        const chart = new helm.v3.Release("redis", {
            chart: "oci://registry-1.docker.io/bitnamicharts/redis-cluster",
            name: "redis-cluster",
            version: "11.4.3",
            namespace: ns.metadata.name,
            createNamespace: false,
            values: {
                image: {
                    debug: true,
                },
                password: password.result,
                service: {
                    type: "LoadBalancer",
                    labels: useWaypoint("none")
                },
                networkPolicy: {
                    enabled: !options.istio.enabled,
                },
                redis: {
                    readinessProbe: {
                        initialDelaySeconds: 60,
                    },
                    livelinessProbe: {
                        initialDelaySeconds: 60,
                    }
                },
                metrics: {
                    enabled: options.prometheus.enabled,
                    serviceMonitor: {
                        enabled: options.prometheus.enabled,
                    },
                },
                persistence: {
                    size: "16Gi",
                    storageClass: "local-path",
                },
                cluster: {
                    nodes: 6,
                    replicas: 1,
                },
            },
        })
        return {
            chart
        };
    })