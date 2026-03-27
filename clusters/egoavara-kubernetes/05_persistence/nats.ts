import * as pulumi from "@pulumi/pulumi";
import { core, helm } from "@pulumi/kubernetes";
import { persistencePhase } from "./phase.ts";
import { persistence as persistenceConfig } from "./config.ts";
import { ns } from "./namespace.ts";

const namespace = ns.metadata.name;

// NATS JWT auth: Operator/Account/SysAccount keys
// 사전 조건: `vender nats-setup --namespace persistence` 실행으로 Secret 생성 필요
// fresh cluster에서 pulumi up 전에 반드시 실행할 것
const natsJwtSecret = core.v1.Secret.get("nats-jwt-token", "persistence/nats-jwt-token");

// Decode JWT values for NATS config injection
const opJWT = natsJwtSecret.data["operator-jwt"].apply(v => Buffer.from(v, "base64").toString());
const acctJWT = natsJwtSecret.data["account-jwt"].apply(v => Buffer.from(v, "base64").toString());
const acctPub = natsJwtSecret.data["account-pub"].apply(v => Buffer.from(v, "base64").toString());
const sysJWT = natsJwtSecret.data["sys-account-jwt"].apply(v => Buffer.from(v, "base64").toString());
const sysPub = natsJwtSecret.data["sys-account-pub"].apply(v => Buffer.from(v, "base64").toString());

export const nats = new helm.v3.Release("nats", {
    chart: "nats",
    name: "nats",
    version: persistenceConfig.nats.version,
    namespace,
    repositoryOpts: { repo: persistenceConfig.nats.repository },
    createNamespace: false,
    values: {
        config: {
            cluster: {
                enabled: true,
                replicas: 3,
            },
            jetstream: {
                enabled: true,
                fileStore: {
                    pvc: {
                        size: "5Gi",
                        storageClassName: "topolvm-provisioner",
                    },
                },
            },
            merge: pulumi.all([opJWT, acctJWT, acctPub, sysJWT, sysPub]).apply(
                ([op, acct, acctP, sys, sysP]) => ({
                    operator: op,
                    system_account: sysP,
                    resolver: "MEMORY",
                    resolver_preload: {
                        [acctP]: acct,
                        [sysP]: sys,
                    },
                }),
            ),
        },
        container: {
            merge: {
                resources: {
                    requests: { cpu: "100m", memory: "128Mi" },
                    limits: { cpu: "500m", memory: "512Mi" },
                },
            },
        },
        podTemplate: {
            topologySpreadConstraints: {
                "kubernetes.io/hostname": {
                    maxSkew: 1,
                    whenUnsatisfiable: "DoNotSchedule",
                },
            },
        },
        reloader: {
            enabled: true,
        },
    },
}, { parent: persistencePhase, dependsOn: [natsJwtSecret] });
