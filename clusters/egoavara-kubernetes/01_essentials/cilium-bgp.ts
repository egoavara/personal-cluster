import { cilium as ciliumConfig } from "../utils/config.ts";
import { cilium } from "@pulumi/cilium";
import { essentials } from "../phases.ts";

const { bgp, lbPoolCidr } = ciliumConfig;

// BGP Peer 설정 — MikroTik 라우터
export const bgpPeerConfig = new cilium.v2alpha1.CiliumBGPPeerConfig("mikrotik", {
    metadata: {
        name: "mikrotik",
    },
    spec: {
        transport: {
            peerPort: 179,
        },
        timers: {
            holdTimeSeconds: 90,
            keepAliveTimeSeconds: 30,
            connectRetryTimeSeconds: 120,
        },
        families: [
            {
                afi: "ipv4",
                safi: "unicast",
                advertisements: {
                    matchLabels: {
                        "advertise": "bgp",
                    },
                },
            },
        ],
    },
}, { parent: essentials });

// BGP 클러스터 설정 — 모든 Linux 노드에서 BGP 인스턴스 실행
export const bgpClusterConfig = new cilium.v2alpha1.CiliumBGPClusterConfig("egoavara-bgp", {
    metadata: {
        name: "egoavara-bgp",
    },
    spec: {
        nodeSelector: {
            matchLabels: {
                "kubernetes.io/os": "linux",
            },
        },
        bgpInstances: [
            {
                name: "default",
                localASN: bgp.localASN,
                peers: [
                    {
                        name: "mikrotik",
                        peerAddress: bgp.peerAddress,
                        peerASN: bgp.peerASN,
                        peerConfigRef: {
                            name: "mikrotik",
                        },
                    },
                ],
            },
        ],
    },
}, {
    parent: essentials,
    dependsOn: [bgpPeerConfig],
});

// BGP 광고 — Pod CIDR 광고 (flat network)
export const bgpPodCidrAdvertisement = new cilium.v2alpha1.CiliumBGPAdvertisement("pod-cidr", {
    metadata: {
        name: "pod-cidr",
        labels: {
            "advertise": "bgp",
        },
    },
    spec: {
        advertisements: [
            {
                advertisementType: "PodCIDR",
            },
        ],
    },
}, { parent: essentials });

// BGP 광고 — LoadBalancer Service IP 광고
export const bgpServiceAdvertisement = new cilium.v2alpha1.CiliumBGPAdvertisement("lb-service", {
    metadata: {
        name: "lb-service",
        labels: {
            "advertise": "bgp",
        },
    },
    spec: {
        advertisements: [
            {
                advertisementType: "Service",
                service: {
                    addresses: ["LoadBalancerIP"],
                },
                selector: {
                    matchLabels: {},
                },
            },
        ],
    },
}, { parent: essentials });

// LoadBalancer IP Pool — BGP로 광고될 외부 IP 범위
export const lbIPPool = new cilium.v2alpha1.CiliumLoadBalancerIPPool("lb-pool", {
    metadata: {
        name: "lb-pool",
    },
    spec: {
        blocks: [
            { cidr: lbPoolCidr },
        ],
    },
}, { parent: essentials });
