# WSL 커널

https://github.com/microsoft/WSL2-Linux-Kernel 에서 config-wsl 만 대체해서 사용

kernel 버전은 6.1.21.2 으로 빌드. (5 아님 주의)

기본 커널에는 일부 커널 기능이 누락되어 추가해 사용함

## 설정 목록

### RBD 설정 (Rados Block Device)

- Ceph 에서 요구

### XT_NAT 관련 설정

- istio ambient mode 설정을 위해 필요

