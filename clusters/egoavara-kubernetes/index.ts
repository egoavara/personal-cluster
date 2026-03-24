// Phase 정의 (phases.ts에서 Phase 간 dependsOn 관리)
export { bootstrap, essentials, operators, telemetryPhase, authPhase, postProcess } from "./phases.ts";

// Phase 1: 클러스터 부트스트랩 (SSH 기반)
// 각 리소스가 parent: bootstrap으로 등록됨
import "./bootstrap/prerequisites.ts";
import "./bootstrap/cluster-init.ts";
import "./bootstrap/cilium-install.ts";
import "./bootstrap/post-init.ts";
import "./bootstrap/mikrotik-bgp.ts";

// Phase 2: 핵심 인프라 (K8s 리소스)
// 각 리소스가 parent: essentials로 등록됨
import "./essentials/cilium-bgp.ts";
import "./essentials/istio.ts";
import "./essentials/gateway-api.ts";
import "./essentials/cert-manager.ts";
import "./essentials/topolvm.ts";
import "./essentials/rook-ceph.ts";
import "./essentials/external-dns.ts";

// Phase 3: Operators (CRD + Operator)
// 각 리소스가 parent: operators로 등록됨
import "./operators/vm-operator.ts";

// Phase 4: Telemetry (관측성 워크로드)
// 각 리소스가 parent: telemetryPhase로 등록됨
import "./telemetry/vm-cluster.ts";
import "./telemetry/vl-cluster.ts";
import "./telemetry/vt-cluster.ts";
import "./telemetry/vmagent.ts";
import "./telemetry/vmalert.ts";
import "./telemetry/grafana.ts";
import "./telemetry/metrics-server.ts";
import "./telemetry/prometheus-adapter.ts";
import "./telemetry/otel-collector.ts";
import "./telemetry/kube-state-metrics.ts";
import "./telemetry/node-exporter.ts";
import "./telemetry/scrapes.ts";
import "./telemetry/istio-telemetry.ts";

// Phase 5: Auth (인증 + 인가 레이어)
// 각 리소스가 parent: authPhase로 등록됨
import "./auth/namespace.ts";
import "./auth/cockroachdb.ts";
import "./auth/spicedb.ts";
import "./auth/kanidm.ts";
import "./auth/dex.ts";
import "./auth/oauth2-proxy.ts";
import "./auth/waypoint.ts";

// Phase 6: Post-Process (모든 인프라 배포 후 후처리)
// 각 리소스가 parent: postProcess로 등록됨
import "./post-process/waypoints.ts";
