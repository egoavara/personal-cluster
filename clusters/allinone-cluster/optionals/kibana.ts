import * as eck from "@pulumi/eck";
import { elasticsearch } from "./elasticsearch.ts";
import { handle } from "../utils/handle.ts";


export const kibana = handle(elasticsearch).letIf((es) => {
    return new eck.kibana.v1.Kibana("kibana", {
        metadata: {
            name: "kibana",
            namespace: es.metadata.namespace,
        },
        spec: {
            version: "8.15.1",
            count: 2,
            elasticsearchRef: {
                name: es.metadata.name,
            },
            http: {
                service: {
                    spec: {
                        type: "LoadBalancer",
                        ports: [
                            {
                                name: "http",
                                port: 80,
                                targetPort: 5601,
                            }
                        ],
                    },
                },
                tls: {
                    selfSignedCertificate: {
                        disabled: true,
                    }
                }
            }
        },
    })
})