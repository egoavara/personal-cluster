import * as command from "@pulumi/command";
import { initNode, connectionFor } from "./nodes.ts";
import { ciliumInstall } from "./cilium-install.ts";
import { allJoins } from "./cluster-init.ts";
import { bootstrap } from "./phase.ts";

// 모든 노드 join + Cilium 설치 후 후처리
export const postInit = new command.remote.Command("post-init", {
    connection: connectionFor(initNode),
    create: `
set -euo pipefail

export KUBECONFIG=/etc/kubernetes/admin.conf

# control-plane taint 제거 (3노드 모두 워크로드 스케줄 가능)
sudo -E kubectl taint nodes --all node-role.kubernetes.io/control-plane- 2>/dev/null || true

# 모든 노드 Ready 대기
echo "Waiting for all nodes to be Ready..."
sudo -E kubectl wait --for=condition=Ready nodes --all --timeout=300s

# Cilium 상태 확인
sudo -E kubectl -n kube-system get pods -l app.kubernetes.io/name=cilium-agent -o wide

echo "POST_INIT_DONE"
`,
}, {
    parent: bootstrap,
    dependsOn: [ciliumInstall, ...allJoins],
    ignoreChanges: ["create"],
});

// kubeconfig를 출력 (로컬에서 사용 가능하도록)
export const kubeconfig = new command.remote.Command("get-kubeconfig", {
    connection: connectionFor(initNode),
    create: `sudo cat /etc/kubernetes/admin.conf`,
}, {
    parent: bootstrap,
    dependsOn: [postInit],
    ignoreChanges: ["create"],
});
