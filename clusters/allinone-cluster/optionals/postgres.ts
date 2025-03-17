import * as pulumi from "@pulumi/pulumi";
import { helm } from "@pulumi/kubernetes";
import { options } from "../utils/config.ts";
import { requireNamespace } from "../essentials/namespaces.ts";

const [postgres, setPostgres] = pulumi.deferredOutput<helm.v3.Release | undefined>();

if (options.postgres.enabled) {
    const ns = requireNamespace("runtime");
    setPostgres(pulumi.output(new helm.v3.Release("postgresql-ha", {
        chart: "oci://registry-1.docker.io/bitnamicharts/postgresql-ha",
        name: "postgresql-ha",
        version: "15.2.2",
        namespace: ns.metadata.name,
        createNamespace: false,
        values: {
            global: {
                postgres: {},
            },
            service: {
                type: "LoadBalancer",
            },
            postgresql: {
                pgHbaTrustAll: true,
                networkPolicy: {
                    enabled: false,
                }
            },
            pgpool: {
                enabled: true,
                image: {
                    debug: true,
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
    })));
} else {
    setPostgres(pulumi.output(undefined));
}

export { postgres };