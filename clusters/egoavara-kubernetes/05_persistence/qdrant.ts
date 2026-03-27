import { helm, core } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { persistence as persistenceConfig } from "./config.ts";
import { ns } from "./namespace.ts";
import { waypointGateway } from "./waypoint.ts";
import { qdrantApiKey } from "./secrets.ts";

const namespace = ns.metadata.name;

// --- Secret: vender용 Qdrant API key (JWT 서명에 사용) ---
// Helm chart가 "qdrant-apikey" Secret을 자체 생성하므로 별도 이름 사용
export const qdrantApiKeySecret = new core.v1.Secret("vender-qdrant-apikey", {
    metadata: { name: "vender-qdrant-apikey", namespace },
    stringData: {
        "api-key": qdrantApiKey.result,
    },
}, { parent: persistencePhase });

export const qdrant = new helm.v3.Release("qdrant", {
    chart: "qdrant",
    name: "qdrant",
    version: persistenceConfig.qdrant.version,
    namespace,
    repositoryOpts: { repo: persistenceConfig.qdrant.repository },
    createNamespace: false,
    values: {
        replicaCount: 3,
        apiKey: qdrantApiKey.result,
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
}, { parent: persistencePhase, dependsOn: [waypointGateway, qdrantApiKeySecret] });
