# Kubernetes 라벨 규칙

이 클러스터에서 사용하는 동작에 영향을 주는 라벨 목록.

## Istio Ambient Mode

| 라벨 | 값 | 대상 | 설명 |
|------|-----|------|------|
| `istio.io/dataplane-mode` | `none` | Namespace | 해당 namespace를 Istio 메시에서 **제외** |
| `istio.io/dataplane-mode` | `ambient` | Namespace | 해당 namespace를 Istio ambient 메시에 **명시적 포함** (현재는 blacklist 방식이라 기본 포함됨) |
| `istio.io/use-waypoint` | `waypoint` | Namespace, Service | waypoint proxy 사용 활성화 |
| `istio.io/use-waypoint` | `none` | Namespace, Service | waypoint proxy 사용 비활성화 |

### Istio 기본 제외 Namespace

discoverySelectors blacklist로 다음 namespace는 Istio 메시에서 자동 제외됨:
- `kube-system`
- `kube-public`
- `kube-node-lease`
- `cilium-secrets`

설정: `Pulumi.dev.yaml`의 `istio.excludeNamespaces`로 변경 가능.

## Cilium BGP

| 라벨 | 값 | 대상 | 설명 |
|------|-----|------|------|
| `advertise` | `bgp` | CiliumBGPAdvertisement | BGP advertisement 그룹 식별 (PeerConfig의 family에서 matchLabels로 참조) |

## Rook Ceph

| 라벨 | 값 | 대상 | 설명 |
|------|-----|------|------|
| `app` | `rook-ceph-rgw` | Pod | RGW (S3) Pod selector |
| `app` | `rook-ceph-mgr` | Pod | MGR Pod selector (Dashboard) |
| `mgr_role` | `active` | Pod | Dashboard Service가 active MGR만 선택 |
| `rook_cluster` | `rook-ceph` | Pod | Rook 클러스터 네임스페이스 식별 |
| `rook_object_store` | `object-store` | Pod | Object Store 이름 식별 |

## TopoLVM

| 라벨 | 값 | 대상 | 설명 |
|------|-----|------|------|
| `topolvm.io/node` | `<node-name>` | Node | TopoLVM이 자동 부여, 용량 인식 스케줄링에 사용 |

## VictoriaMetrics Operator

| 라벨 | 값 | 대상 | 설명 |
|------|-----|------|------|
| `app.kubernetes.io/name` | `vminsert` | Pod | VMCluster insert 컴포넌트 |
| `app.kubernetes.io/name` | `vmselect` | Pod | VMCluster select 컴포넌트 |
| `app.kubernetes.io/name` | `vmstorage` | Pod | VMCluster storage 컴포넌트 |
| `app.kubernetes.io/instance` | `vm-cluster` | Pod | VMCluster 인스턴스 식별 |

## Kubernetes 표준

| 라벨 | 값 | 대상 | 설명 |
|------|-----|------|------|
| `kubernetes.io/os` | `linux` | Node | Cilium BGP ClusterConfig의 nodeSelector로 사용 |
