# 네트워크 설계

## IP 대역

| 용도 | CIDR | 범위 |
|------|------|------|
| LAN (노드, PC, 라우터 등) | 10.0.0.0/8 | 10.0.0.0 ~ 10.255.255.255 |
| **K8s 내부 (native routing)** | **10.240.0.0/12** | **10.240.0.0 ~ 10.255.255.255** |
| └ LB Pool (Cilium LoadBalancer) | 10.240.0.0/16 | 10.240.0.0 ~ 10.240.255.255 |
| └ Pod CIDR | 10.244.0.0/16 | 10.244.0.0 ~ 10.244.255.255 |
| └ Service CIDR | 10.248.0.0/16 | 10.248.0.0 ~ 10.248.255.255 |

### 호스트 할당

| 호스트 | IP | 서브넷 |
|--------|------|--------|
| MikroTik 라우터 | 10.0.0.1 | LAN |
| PC (이더넷) | 10.0.1.1 | LAN |
| k8sa-00 | 10.0.3.1 | LAN |
| k8sa-01 | 10.0.3.2 | LAN |
| k8sa-02 | 10.0.3.3 | LAN |

### 고정 LB IP

| 서비스 | IP | 용도 |
|--------|------|------|
| Ingress Gateway (public) | 10.240.1.1 | `*.egoavara.net` HTTPS |
| Private Gateway | 10.240.0.5 | `*.private.egoavara.net` HTTPS |

## Cilium 네이티브 라우팅 & Masquerade

```
ipv4-native-routing-cidr: 10.240.0.0/12
```

### 핵심 규칙

**K8s 내부 대역(10.240.0.0/12) 내 통신** — masquerade 없음 (pod IP 그대로):
- Pod ↔ Pod: native routing, SNAT 없음
- Pod ↔ Service: kube-proxy/Cilium이 DNAT, source는 pod IP 유지
- Pod ↔ LB IP: 동일

**K8s 내부 → LAN(10.0.x.x) 통신** — masquerade 적용 (노드 IP로 SNAT):
- Pod → PC/라우터/외부: source IP가 노드 IP(10.0.3.x)로 변환
- PC는 pod CIDR 라우트 불필요, 별도 설정 없이 통신 가능

**LAN → K8s 내부 통신**:
- PC/라우터 → LB IP(10.240.x.x): MikroTik BGP가 LB IP를 노드로 라우팅
- PC/라우터 → Pod IP(10.244.x.x): BGP로 라우팅되지만, 응답이 masquerade되지 않아 비대칭 라우팅 발생 가능 → **LB IP를 통해 접근하는 것이 정석**

## 통신 매트릭스

| 출발 → 도착 | 경로 | 비고 |
|-------------|------|------|
| PC → LB IP | PC → 라우터(BGP) → 노드 → Cilium → Pod | 정상. LB IP는 BGP로 광고됨 |
| PC → Node | PC → 라우터 → 노드 (같은 L2) | 정상 |
| PC → Pod IP | PC → 라우터(BGP) → 노드 → Pod | **응답이 SNAT 안 됨. PC에 pod CIDR 라우트 필요. 비권장** |
| Pod → PC | Pod → 노드(SNAT to 노드 IP) → PC | 정상. masquerade 적용 |
| Pod → Pod | 직접 (native routing) | 정상 |
| Pod → LAN 외부 | Pod → 노드(SNAT) → 라우터 → 인터넷 | 정상 |
| Node → PC | 노드 → PC (같은 L2) | 정상 |

## 왜 10.240.0.0/12인가

`ipv4-native-routing-cidr`는 **단일 CIDR만 지원**한다. Pod(10.244.0.0/16), Service(10.248.0.0/16), LB(10.240.0.0/16)를 모두 포함하는 최소 공통 CIDR이 10.240.0.0/12이다.

이 범위 밖의 IP(10.0.x.x LAN 등)로 나가는 pod 트래픽은 자동으로 masquerade되어 노드 IP로 SNAT된다. 따라서 LAN의 새 장비(PC 등)가 추가되어도 별도 라우트 설정 없이 Pod와 통신 가능하다.
