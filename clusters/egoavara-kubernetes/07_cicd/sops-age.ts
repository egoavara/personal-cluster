import * as pulumi from "@pulumi/pulumi";
import { core } from "@pulumi/kubernetes";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";

const config = new pulumi.Config("cluster");

// age 비밀키는 Pulumi config에 encrypted로 저장.
// 생성: age-keygen → 비밀키를 pulumi config set --secret cluster:sops.ageKey "AGE-SECRET-KEY-..."
// 공개키는 비즈니스 앱 repo의 .sops.yaml에 등록.
//
// age는 X25519 (Curve25519 ECDH + ChaCha20-Poly1305)를 사용.
// - 키 교환: X25519 (256-bit elliptic curve, 128-bit security level)
// - 대칭 암호화: ChaCha20-Poly1305 (AEAD, 256-bit key)
// - 현존 최고 수준의 비대칭 + 대칭 조합
const ageKey = config.requireSecret("sops.ageKey");

export const sopsAgeSecret = new core.v1.Secret("sops-age", {
    metadata: {
        name: "sops-age",
        namespace: ns.metadata.name,
    },
    stringData: {
        "age.agekey": ageKey,
    },
}, { parent: cicdPhase });
