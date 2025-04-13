import * as eck from "@pulumi/eck";
import { elasticsearch } from "./elasticsearch.ts";
import { handle } from "../utils/handle.ts";
import { useWaypoint } from "./istio.ts";


export const kibana = handle(elasticsearch).letIf(({cluster}) => {
    return new eck.kibana.v1.Kibana("kibana", {
        metadata: {
            name: "kibana",
            namespace: cluster.metadata.namespace,
        },
        spec: {
            version: "8.15.1",
            count: 2,
            elasticsearchRef: {
                name: cluster.metadata.name,
            },
            http: {
                service: {
                    metadata:{
                        labels: useWaypoint()
                    },
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