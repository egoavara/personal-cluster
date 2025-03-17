import * as pulumi from "@pulumi/pulumi";
import { core, helm } from "@pulumi/kubernetes";
import { jaegertracing } from "@pulumi/jaeger";
import { certmanager } from "./certmanager.ts";
import { options } from "../utils/config.ts";
import { must } from "../utils/must.ts";
import { requireNamespace } from "../essentials/namespaces.ts";
import { elasticsearch } from "./elasticsearch.ts";

const [jaegerOperator, setJaegerOperator] = pulumi.deferredOutput<helm.v3.Release | undefined>();
const [jaegerSecret, setJaegerSecret] = pulumi.deferredOutput<core.v1.Secret | undefined>();
const [jaeger, setJaeger] = pulumi.deferredOutput<jaegertracing.v1.Jaeger | undefined>();

if (options.jaeger.enabled) {
    const cm = must(certmanager, "cert-manager is required for jaeger");
    const es = must(elasticsearch, "elasticsearch is required for jaeger");

    const ns = requireNamespace("telemetry");

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
        "esSecret": pulumi.interpolate`${es.metadata.name}-es-elastic-user`,
        "esSecretId": pulumi.interpolate`${es.metadata.namespace}/${es.metadata.name}-es-elastic-user`,
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
                        "server-urls": pulumi.interpolate`http://${es.metadata.name}-es-http.${es.metadata.namespace}.svc.cluster.local:9200`,
                        "index-prefix": "jaeger",
                    }
                }
            }
        },
    }, {
        dependsOn: [jaegerOperator]
    });

    setJaegerOperator(pulumi.output(jaegerOperator));
    setJaegerSecret(pulumi.output(jaegerSecret));
    setJaeger(pulumi.output(jaegerInstance));
} else {
    setJaegerOperator(pulumi.output(undefined));
    setJaegerSecret(pulumi.output(undefined));
    setJaeger(pulumi.output(undefined));
}

export {
    jaegerOperator,
    jaegerSecret,
    jaeger,
}