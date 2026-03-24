import * as command from "@pulumi/command";
import { allNodes, connectionFor } from "./nodes.ts";
import { kubernetes, type NodeConfig } from "./config.ts";
import { bootstrap } from "./phase.ts";

const k8sVersion = kubernetes.version;

// ── 개별 단계 스크립트 ──────────────────────────────────────────────

const cleanupScript = `
set -euo pipefail
sudo kubeadm reset -f 2>/dev/null || true
sudo rm -rf /etc/cni/net.d /opt/cni/bin /var/lib/etcd /etc/kubernetes /var/lib/rook
sudo iptables -F 2>/dev/null || true
sudo iptables -t nat -F 2>/dev/null || true
sudo iptables -t mangle -F 2>/dev/null || true
echo "CLEANUP_DONE"
`;

const systemConfigScript = `
set -euo pipefail

# swap 비활성화
sudo swapoff -a
sudo sed -i '/\\bswap\\b/d' /etc/fstab

# 커널 모듈
cat <<MODULES | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
MODULES
sudo modprobe overlay
sudo modprobe br_netfilter

# sysctl
cat <<SYSCTL | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
SYSCTL
sudo sysctl --system
echo "SYSTEM_CONFIG_DONE"
`;

const containerdScript = `
set -euo pipefail
CONTAINERD_MAJOR=\$(containerd --version 2>/dev/null | grep -oP 'v\\K[0-9]+' | head -1)
if [ "\$CONTAINERD_MAJOR" != "2" ]; then
    sudo apt-get update -qq
    sudo apt-get install -y -qq containerd.io
fi
sudo mkdir -p /etc/containerd
containerd config default | sudo tee /etc/containerd/config.toml > /dev/null
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml
sudo systemctl restart containerd
sudo systemctl enable containerd
echo "CONTAINERD_DONE"
`;

const k8sToolsScript = `
set -euo pipefail
if ! command -v kubeadm &>/dev/null || ! kubeadm version -o short | grep -q "v${k8sVersion}"; then
    sudo apt-get update -qq
    sudo apt-get install -y -qq apt-transport-https ca-certificates curl gpg
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL "https://pkgs.k8s.io/core:/stable:/v${k8sVersion}/deb/Release.key" | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg --yes
    echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v${k8sVersion}/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
    sudo apt-get update -qq
    sudo apt-mark unhold kubelet kubeadm kubectl 2>/dev/null || true
    sudo apt-get install -y -qq kubelet kubeadm kubectl
    sudo apt-mark hold kubelet kubeadm kubectl
fi
sudo systemctl enable --now kubelet
echo "K8S_TOOLS_DONE"
`;

// ── VG 생성 스크립트 (노드별) ──────────────────────────────────────

function buildVgScript(node: NodeConfig): string {
    const vgs = node.storage?.volumeGroups;
    if (!vgs || Object.keys(vgs).length === 0) return "";

    const lines: string[] = ["set -euo pipefail"];
    lines.push("if ! command -v pvcreate &>/dev/null; then");
    lines.push("    sudo apt-get update -qq");
    lines.push("    sudo apt-get install -y -qq lvm2");
    lines.push("fi");

    for (const [vgName, devices] of Object.entries(vgs)) {
        lines.push(`if ! sudo vgs ${vgName} &>/dev/null; then`);
        for (const dev of devices) {
            lines.push(`    sudo pvcreate ${dev} 2>/dev/null || true`);
        }
        lines.push(`    sudo vgcreate ${vgName} ${devices.join(" ")}`);
        lines.push(`fi`);
    }

    lines.push('echo "VG_DONE"');
    return lines.join("\n");
}

// ── 리소스 생성 ─────────────────────────────────────────────────────

function createPrerequisites(node: NodeConfig) {
    const conn = connectionFor(node);

    const cleanup = new command.remote.Command(`prereq-cleanup-${node.name}`, {
        connection: conn,
        create: cleanupScript,
    }, { parent: bootstrap, ignoreChanges: ["create"] });

    const systemConfig = new command.remote.Command(`prereq-system-${node.name}`, {
        connection: conn,
        create: systemConfigScript,
    }, { parent: bootstrap, dependsOn: [cleanup], ignoreChanges: ["create"] });

    const containerd = new command.remote.Command(`prereq-containerd-${node.name}`, {
        connection: conn,
        create: containerdScript,
        triggers: [kubernetes.containerRuntime],
    }, { parent: bootstrap, dependsOn: [systemConfig], ignoreChanges: ["create"] });

    const k8sTools = new command.remote.Command(`prereq-k8s-${node.name}`, {
        connection: conn,
        create: k8sToolsScript,
        triggers: [k8sVersion],
    }, { parent: bootstrap, dependsOn: [containerd], ignoreChanges: ["create"] });

    const resources: command.remote.Command[] = [cleanup, systemConfig, containerd, k8sTools];

    const vgScript = buildVgScript(node);
    if (vgScript) {
        const vg = new command.remote.Command(`prereq-vg-${node.name}`, {
            connection: conn,
            create: vgScript,
            triggers: [JSON.stringify(node.storage?.volumeGroups)],
        }, { parent: bootstrap, dependsOn: [systemConfig], ignoreChanges: ["create"] });
        resources.push(vg);
    }

    return resources;
}

// master + worker 모든 노드에 실행
export const prerequisites = allNodes.flatMap(createPrerequisites);
