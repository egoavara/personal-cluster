import * as pulumi from "@pulumi/pulumi";
import { core, helm } from "@pulumi/kubernetes";
import { jaegertracing } from "@pulumi/jaeger";
import { certmanager } from "./certmanager.ts";
import { options } from "../utils/config.ts";
import { must } from "../utils/must.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
import { elasticsearch } from "./elasticsearch.ts";
import { handle } from "../utils/handle.ts";

// export {
//     jaegerOperator,
//     jaegerSecret,
//     jaeger,
//     otel:{
//     endpoint: pulumi.interpolate`${jaeger}`
// }
// }

export const jaeger = handle(options.jaeger.enabled)
    .join(() => [requireNamespace("telemetry"), elasticsearch, certmanager])
    .letIf(([_, ns, rawElasticsearch, rawCertmanager]) => {
        must(rawCertmanager, "cert-manager is required for jaeger");
        const { cluster: esCluster } = must(rawElasticsearch, "elasticsearch is required for jaeger");

        const jaegerOperator = new helm.v3.Release("jaeger-operator", {
            chart: "jaeger-operator",
            name: "jaeger-operator",
            version: "2.57.0",
            namespace: ns.metadata.name,
            repositoryOpts: {
                repo: "https://jaegertracing.github.io/helm-charts",
            },
            skipCrds: false,
            values: {
                rbac: {
                    clusterRole: true,
                }
            }
        })

        const esSecret = pulumi.all({
            "esSecret": pulumi.interpolate`${esCluster.metadata.name}-es-elastic-user`,
            "esSecretId": pulumi.interpolate`${esCluster.metadata.namespace}/${esCluster.metadata.name}-es-elastic-user`,
        }).apply(({ esSecret, esSecretId }) => {
            return core.v1.Secret.get(esSecret, esSecretId);
        })

        const jaegerSecret = new core.v1.Secret("jaeger-secret", {
            metadata: {
                name: "jaeger-secret",
                namespace: ns.metadata.name,
            },
            stringData: {
                ES_USERNAME: "elastic",
                ES_PASSWORD: esSecret.data["elastic"].apply(v => Buffer.from(v, 'base64').toString("utf8")),
            }
        })

        const jaegerInstance = new jaegertracing.v1.Jaeger("jaeger", {
            metadata: {
                name: "jaeger",
                namespace: ns.metadata.name,
            },
            spec: {
                strategy: "production",
                ingress: {
                    enabled: false,
                },
                storage: {
                    type: "elasticsearch",
                    elasticsearch: {
                        doNotProvision: true,
                    },
                    secretName: jaegerSecret.metadata.name,
                    esIndexCleaner: {
                        enabled: true,
                        numberOfDays: 7,
                        schedule: "0 0 * * *",
                    },
                    options: {
                        es: {
                            "server-urls": pulumi.interpolate`http://${esCluster.metadata.name}-es-http.${esCluster.metadata.namespace}.svc.cluster.local:9200`,
                            "index-prefix": "jaeger",
                        }
                    }
                }
            },
        }, {
            dependsOn: [jaegerOperator]
        });
        return {
            jaegerOperator,
            jaegerSecret,
            jaeger: jaegerInstance,
            otel:{
                endpoint: pulumi.interpolate`${jaegerInstance.metadata.name}-collector.${jaegerInstance.metadata.namespace}.svc.cluster.local:4317`,
            }
        }
    })