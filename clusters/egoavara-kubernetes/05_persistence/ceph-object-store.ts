import * as k8s from "@pulumi/kubernetes";
import * as rookceph from "@pulumi/rook-ceph";
import { persistencePhase } from "./phase.ts";
import { ns } from "./namespace.ts";

const namespace = ns.metadata.name;

// CephObjectStore — rook-ceph NS에 생성 (Rook operator 제약)
// RGW gateway 2인스턴스로 S3 호환 API 제공
export const cephObjectStore = new rookceph.ceph.v1.CephObjectStore("object-store", {
    metadata: { namespace: "rook-ceph", name: "object-store" },
    spec: {
        metadataPool: {
            failureDomain: "host",
            replicated: { size: 3 },
        },
        dataPool: {
            failureDomain: "host",
            replicated: { size: 3 },
        },
        preservePoolsOnDelete: true,
        gateway: {
            port: 80,
            instances: 2,
            resources: {
                requests: { cpu: "100m", memory: "256Mi" },
                limits: { cpu: "500m", memory: "512Mi" },
            },
        },
    },
}, {
    parent: persistencePhase,
    customTimeouts: { create: "10m", update: "10m" },
});

// persistence NS에서 S3 API에 접근하기 위한 ExternalName Service
// → 앱에서 ceph-s3.persistence.svc.cluster.local 로 접근
export const s3Service = new k8s.core.v1.Service("ceph-s3", {
    metadata: { name: "ceph-s3", namespace },
    spec: {
        type: "ExternalName",
        externalName: "rook-ceph-rgw-object-store.rook-ceph.svc.cluster.local",
    },
}, { parent: persistencePhase, dependsOn: [cephObjectStore] });
