import * as random from "@pulumi/random";
import { authPhase } from "./phase.ts";

// Pulumi random으로 자동 생성, state에 저장되어 재배포 시 동일 값 유지

export const spicedbPresharedKey = new random.RandomPassword("spicedb-preshared-key", {
    length: 48,
    special: false,
}, { parent: authPhase });

export const oauth2ProxyClientSecret = new random.RandomPassword("oauth2-proxy-client-secret", {
    length: 32,
    special: false,
}, { parent: authPhase });

export const oauth2ProxyCookieSecret = new random.RandomPassword("oauth2-proxy-cookie-secret", {
    length: 32,
    special: false,
}, { parent: authPhase });

export const pgSpicedbPassword = new random.RandomPassword("pg-spicedb-password", {
    length: 32,
    special: false,
}, { parent: authPhase });

export const pgZitadelPassword = new random.RandomPassword("pg-zitadel-password", {
    length: 32,
    special: false,
}, { parent: authPhase });

// Pulumi resource name은 state 호환을 위해 유지
export const guardSessionSecret = new random.RandomPassword("kube-authz-session-secret", {
    length: 48,
    special: false,
}, { parent: authPhase });

export const guardValkeyPassword = new random.RandomPassword("guard-valkey-password", {
    length: 32,
    special: false,
}, { parent: authPhase });
