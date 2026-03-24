import * as command from "@pulumi/command";
import * as pulumi from "@pulumi/pulumi";
import { initNode, connectionFor } from "./nodes.ts";
import { kubernetes } from "./config.ts";
import { cilium } from "../utils/config.ts";
import { kubeadmInit } from "./cluster-init.ts";
import { bootstrap } from "./phase.ts";

// kubeadm init 직후 Cilium CNI 설치 (노드 Ready의 전제 조건)
// init 노드에서 helm으로 설치 (kubeconfig 사용)
export const ciliumInstall = new command.remote.Command("cilium-install", {
    connection: connectionFor(initNode),
    create: pulumi.interpolate`
set -euo pipefail

export KUBECONFIG=/etc/kubernetes/admin.conf

# helm 설치 (없는 경우)
if ! command -v helm &>/dev/null; then
    curl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | sudo bash
fi

# cilium helm repo 추가
sudo -E helm repo add cilium https://helm.cilium.io/
sudo -E helm repo update cilium

# cilium 설치
sudo -E helm install cilium cilium/cilium \
    --version ${cilium.version} \
    --namespace kube-system \
    --set routingMode=native \
    --set ipv4NativeRoutingCIDR=10.240.0.0/12 \
    --set autoDirectNodeRoutes=true \
    --set kubeProxyReplacement=true \
    --set k8sServiceHost=${kubernetes.controlPlaneEndpoint.split(":")[0]} \
    --set k8sServicePort=${kubernetes.controlPlaneEndpoint.split(":")[1]} \
    --set ipam.mode=kubernetes \
    --set bgpControlPlane.enabled=true \
    --set hubble.enabled=true \
    --set hubble.relay.enabled=true \
    --set hubble.ui.enabled=true \
    --set cni.exclusive=false \
    --set socketLB.hostNamespaceOnly=true \
    --wait --timeout=5m 2>&1

echo "CILIUM_INSTALLED"
`,
    delete: `export KUBECONFIG=/etc/kubernetes/admin.conf; sudo -E helm uninstall cilium -n kube-system 2>/dev/null || true; echo "CILIUM_UNINSTALLED"`,
    triggers: [cilium.version],
}, {
    parent: bootstrap,
    dependsOn: [kubeadmInit],
    ignoreChanges: ["create"],
});
