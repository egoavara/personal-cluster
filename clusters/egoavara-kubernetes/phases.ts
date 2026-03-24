import * as k8s from "@pulumi/kubernetes";
import { Phase } from "./utils/phase.ts";
import { bootstrap } from "./bootstrap/phase.ts";
import { kubeconfig } from "./bootstrap/post-init.ts";

export { bootstrap };

// bootstrap에서 생성된 kubeconfig를 사용하는 동적 K8s provider
export const k8sProvider = new k8s.Provider("k8s-dynamic", {
    kubeconfig: kubeconfig.stdout,
});

// Phase 2: 핵심 인프라 (K8s 리소스)
export const essentials = new Phase("essentials", {
    dependsOn: [bootstrap],
    providers: [k8sProvider],
});

// Phase 3: Operators (CRD + Operator만, 워크로드 없음)
export const operators = new Phase("operators", {
    dependsOn: [essentials],
    providers: [k8sProvider],
});

// Phase 4: Telemetry (Operator CRD 기반 워크로드)
export const telemetryPhase = new Phase("telemetry", {
    dependsOn: [operators],
    providers: [k8sProvider],
});

// Phase 5: Auth (인증 레이어)
export const authPhase = new Phase("auth", {
    dependsOn: [telemetryPhase],
    providers: [k8sProvider],
});

// Phase 6: Post-Process (모든 인프라 배포 후 후처리)
export const postProcess = new Phase("post-process", {
    dependsOn: [authPhase],
    providers: [k8sProvider],
});
