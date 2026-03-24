import { helm } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { persistence as persistenceConfig } from "./config.ts";
import { ns } from "./namespace.ts";
import { waypointGateway } from "./waypoint.ts";

const namespace = ns.metadata.name;

export const qdrant = new helm.v3.Release("qdrant", {
    chart: "qdrant",
    name: "qdrant",
    version: persistenceConfig.qdrant.version,
    namespace,
    repositoryOpts: { repo: persistenceConfig.qdrant.repository },
    createNamespace: false,
    values: {
        replicaCount: 3,
        persistence: {
            size: "10Gi",
            storageClassName: "topolvm-provisioner",
        },
        resources: {
            requests: { cpu: "250m", memory: "512Mi" },
            limits: { cpu: "1", memory: "1Gi" },
        },
        config: {
            cluster: { enabled: true },
            service: {
                enable_tls: false, // Istio mTLS
            },
        },
        podLabels: {
            "istio.io/use-waypoint": "waypoint",
        },
        service: {
            type: "ClusterIP",
            additionalLabels: {
                "istio.io/use-waypoint": "waypoint",
            },
        },
        topologySpreadConstraints: [{
            maxSkew: 1,
            topologyKey: "kubernetes.io/hostname",
            whenUnsatisfiable: "DoNotSchedule",
            labelSelector: {
                matchLabels: { "app.kubernetes.io/name": "qdrant" },
            },
        }],
    },
}, { parent: persistencePhase, dependsOn: [waypointGateway] });
