import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";
import * as rookceph from "rook-ceph";

const config = new pulumi.Config();

const rookCephSystem = new kubernetes.core.v1.Namespace("rook-ceph-system", {
  metadata: {
    name: "rook-ceph-system",
  },
});
const namespace = {
  ceph: new kubernetes.core.v1.Namespace("ceph", {
    metadata: {
      name: "ceph",
    },
  }),
} as const;

// const vault = new kubernetes.helm.v3.Release("ingresscontroller", {
//     chart: "nginx-ingress",
//     namespace: "default",
//     repositoryOpts: {
//         repo: "https://helm.nginx.com/stable",
//     },
//     skipCrds: true,
//     values: {
//         controller: {
//             enableCustomResources: false,
//             appprotect: {
//                 enable: false,
//             },
//             appprotectdos: {
//                 enable: false,
//             },
//             service: {
//                 extraLabels: appLabels,
//             },
//         },
//     },
//     version: "0.14.1",
// });

const rookcephOperator = new kubernetes.helm.v3.Release("rook-ceph", {
  chart: "rook-ceph",
  version: "1.16.2",
  namespace: rookCephSystem.metadata.name,
  repositoryOpts: {
    repo: "https://charts.rook.io/release",
  },
  values: {},
});

const cephCluster = new rookceph.ceph.v1.CephCluster(
  "ceph-cluster",
  {
    metadata: {
      namespace: namespace.ceph.metadata.name,
    },
    spec: {
        
    },
  },
  { dependsOn: [rookcephOperator] }
);
