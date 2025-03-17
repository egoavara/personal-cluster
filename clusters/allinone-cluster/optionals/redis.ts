import * as pulumi from "@pulumi/pulumi";
import { helm } from "@pulumi/kubernetes";
import { options } from "../utils/config.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
const [redis, setRedis] = pulumi.deferredOutput<helm.v3.Release | undefined>();

if (options.redis.enabled) {
    const ns = requireNamespace("runtime");
    setRedis(pulumi.output(new helm.v3.Release("redis", {
        chart: "oci://registry-1.docker.io/bitnamicharts/redis-cluster",
        name: "redis-cluster",
        version: "11.4.3",
        namespace: ns.metadata.name,
        createNamespace: false,
        values: {
            image: {
                debug: true,
            },
            service: {
                type: "LoadBalancer",
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
    })));
} else {
    setRedis(pulumi.output(undefined));
}

export { redis };