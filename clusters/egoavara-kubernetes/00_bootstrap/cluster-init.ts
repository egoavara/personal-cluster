import * as command from "@pulumi/command";
import * as pulumi from "@pulumi/pulumi";
import { initNode, joinMasterNodes, connectionFor } from "./nodes.ts";
import { kubernetes, workerNodes } from "./config.ts";
import { prerequisites } from "./prerequisites.ts";
import { bootstrap } from "./phase.ts";

// kubeadm init (첫 번째 master 노드)
export const kubeadmInit = new command.remote.Command("kubeadm-init", {
    connection: connectionFor(initNode),
    create: pulumi.interpolate`
set -euo pipefail

K8S_VERSION=\$(kubeadm version -o short)

# kubeadm init 설정 파일 생성
cat <<KUBEADM_CONFIG | sudo tee /tmp/kubeadm-config.yaml
apiVersion: kubeadm.k8s.io/v1beta4
kind: ClusterConfiguration
kubernetesVersion: "\$K8S_VERSION"
controlPlaneEndpoint: "${kubernetes.controlPlaneEndpoint}"
networking:
  podSubnet: "${kubernetes.podCidr}"
  serviceSubnet: "${kubernetes.serviceCidr}"
  dnsDomain: "cluster.local"
apiServer:
  certSANs:
    - "kubernetes.egoavara.net"
    - "private-kubernetes.egoavara.net"
    - "${initNode.host}"
${joinMasterNodes.map(n => `    - "${n.host}"`).join("\n")}
---
apiVersion: kubeadm.k8s.io/v1beta4
kind: InitConfiguration
skipPhases:
  - addon/kube-proxy
nodeRegistration:
  kubeletExtraArgs:
  - name: "node-ip"
    value: "${initNode.host}"
KUBEADM_CONFIG

sudo kubeadm init --config /tmp/kubeadm-config.yaml --upload-certs 2>&1
`,
    delete: `sudo kubeadm reset -f 2>&1; sudo rm -rf /etc/cni/net.d /opt/cni/bin /var/lib/etcd /etc/kubernetes; sudo iptables -F; sudo iptables -t nat -F; sudo iptables -t mangle -F; sudo apt-mark unhold kubelet kubeadm kubectl 2>/dev/null; echo "RESET_DONE"`,
}, {
    parent: bootstrap,
    dependsOn: prerequisites,
    ignoreChanges: ["create"],
});

// init 출력에서 join 토큰과 certificate-key 추출
const joinToken = kubeadmInit.stdout.apply(out => {
    const match = out.match(/--token\s+(\S+)/);
    return match ? match[1] : "";
});

const discoveryTokenHash = kubeadmInit.stdout.apply(out => {
    const match = out.match(/--discovery-token-ca-cert-hash\s+(\S+)/);
    return match ? match[1] : "";
});

const certificateKey = kubeadmInit.stdout.apply(out => {
    const match = out.match(/--certificate-key\s+(\S+)/);
    return match ? match[1] : "";
});

// control-plane join (나머지 master 노드)
export const kubeadmMasterJoins = joinMasterNodes.map(node =>
    new command.remote.Command(`kubeadm-join-master-${node.name}`, {
        connection: connectionFor(node),
        create: pulumi.interpolate`
set -euo pipefail
sudo kubeadm join ${kubernetes.controlPlaneEndpoint} \
    --token ${joinToken} \
    --discovery-token-ca-cert-hash ${discoveryTokenHash} \
    --control-plane \
    --certificate-key ${certificateKey} \
    --node-name ${node.name} \
    --apiserver-advertise-address ${node.host} 2>&1
`,
        delete: `sudo kubeadm reset -f 2>&1; sudo rm -rf /etc/cni/net.d /opt/cni/bin /var/lib/etcd /etc/kubernetes; sudo iptables -F; sudo iptables -t nat -F; sudo iptables -t mangle -F; sudo apt-mark unhold kubelet kubeadm kubectl 2>/dev/null; echo "RESET_DONE"`,
    }, {
        parent: bootstrap,
        dependsOn: [kubeadmInit],
        ignoreChanges: ["create"],
    })
);

// worker join (worker 노드) — config에 추가하면 자동으로 join
export const kubeadmWorkerJoins = workerNodes.map(node =>
    new command.remote.Command(`kubeadm-join-worker-${node.name}`, {
        connection: connectionFor(node),
        create: pulumi.interpolate`
set -euo pipefail
sudo kubeadm join ${kubernetes.controlPlaneEndpoint} \
    --token ${joinToken} \
    --discovery-token-ca-cert-hash ${discoveryTokenHash} \
    --node-name ${node.name} 2>&1
`,
        delete: `sudo kubeadm reset -f 2>&1; sudo rm -rf /etc/cni/net.d /opt/cni/bin /var/lib/etcd /etc/kubernetes; sudo iptables -F; sudo iptables -t nat -F; sudo iptables -t mangle -F; sudo apt-mark unhold kubelet kubeadm kubectl 2>/dev/null; echo "RESET_DONE"`,
    }, {
        parent: bootstrap,
        dependsOn: [kubeadmInit],
        ignoreChanges: ["create"],
    })
);

export const allJoins = [...kubeadmMasterJoins, ...kubeadmWorkerJoins];
