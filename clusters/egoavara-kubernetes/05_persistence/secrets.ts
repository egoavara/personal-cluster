import * as random from "@pulumi/random";
import { persistencePhase } from "./phase.ts";

// Pulumi random으로 자동 생성, state에 저장되어 재배포 시 동일 값 유지

export const valkeyPassword = new random.RandomPassword("valkey-password", {
    length: 32,
    special: false,
}, { parent: persistencePhase });

export const etcdRootPassword = new random.RandomPassword("etcd-root-password", {
    length: 32,
    special: false,
}, { parent: persistencePhase });

export const pgVenderPassword = new random.RandomPassword("pg-vender-password", {
    length: 32,
    special: false,
}, { parent: persistencePhase });

export const clickhousePassword = new random.RandomPassword("clickhouse-password", {
    length: 32,
    special: false,
}, { parent: persistencePhase });

export const qdrantApiKey = new random.RandomPassword("qdrant-api-key", {
    length: 48,
    special: false,
}, { parent: persistencePhase });
