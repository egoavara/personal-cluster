import { helm } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { persistence as persistenceConfig } from "./config.ts";
import { ns } from "./namespace.ts";
import { etcdRootPassword } from "./secrets.ts";

const namespace = ns.metadata.name;

export const etcd = new helm.v3.Release("etcd", {
    chart: "etcd",
    name: "etcd",
    version: persistenceConfig.etcd.version,
    namespace,
    repositoryOpts: { repo: persistenceConfig.etcd.repository },
    createNamespace: false,
    values: {
        networkPolicy: {
            enabled: false, // ambient mesh HBONE(15008)과 충돌, NS-level allow-hbone으로 대체
        },
        replicaCount: 3,
        auth: {
            rbac: {
                create: true,
                allowNoneAuthentication: false,
                rootPassword: etcdRootPassword.result,
            },
            client: { secureTransport: false }, // Istio mTLS
            peer: { secureTransport: false },
        },
        persistence: {
            enabled: true,
            size: "5Gi",
            storageClass: "topolvm-provisioner",
        },
        resources: {
            requests: { cpu: "100m", memory: "128Mi" },
            limits: { cpu: "500m", memory: "512Mi" },
        },
        metrics: {
            enabled: true,
            podMonitor: { enabled: false },
        },
        topologySpreadConstraints: [{
            maxSkew: 1,
            topologyKey: "kubernetes.io/hostname",
            whenUnsatisfiable: "DoNotSchedule",
            labelSelector: {
                matchLabels: { "app.kubernetes.io/name": "etcd" },
            },
        }],
    },
}, { parent: persistencePhase });
