import { helm } from "@pulumi/kubernetes";
import * as random from "@pulumi/random";
import { authPhase } from "./phase.ts";
import { auth as authConfig } from "../utils/config.ts";
import { ns } from "./namespace.ts";
import { pgCluster } from "./postgres.ts";
import { pgZitadelPassword } from "./secrets.ts";

const namespace = ns.metadata.name;
const { version, repository, domain } = authConfig.zitadel;

const masterkey = new random.RandomPassword("zitadel-masterkey", {
    length: 32,
    special: false,
}, { parent: authPhase });

export const zitadel = new helm.v3.Release("zitadel", {
    chart: "zitadel",
    name: "zitadel",
    version,
    namespace,
    repositoryOpts: { repo: repository },
    createNamespace: false,
    values: {
        replicaCount: 2,
        zitadel: {
            masterkey: masterkey.result,
            configmapConfig: {
                ExternalSecure: true,
                ExternalDomain: domain,
                ExternalPort: 443,
                TLS: { Enabled: false },
                Database: {
                    Postgres: {
                        Host: "pg-cluster-rw.auth.svc.cluster.local",
                        Port: 5432,
                        Database: "zitadel",
                        MaxOpenConns: 10,
                        MaxIdleConns: 5,
                        User: {
                            Username: "zitadel",
                            SSL: { Mode: "disable" },
                        },
                        Admin: {
                            Username: "zitadel",
                            SSL: { Mode: "disable" },
                        },
                    },
                },
            },
            // secretConfig로 비밀번호 전달 (Pulumi random → PG/Zitadel 공유)
            secretConfig: {
                Database: {
                    Postgres: {
                        User: { Password: pgZitadelPassword.result },
                        Admin: { Password: pgZitadelPassword.result },
                    },
                },
            },
        },
        service: {
            type: "ClusterIP",
            port: 8080,
        },
        resources: {
            requests: { cpu: "100m", memory: "128Mi" },
            limits: { cpu: "500m", memory: "512Mi" },
        },
    },
}, {
    parent: authPhase,
    dependsOn: [pgCluster],
});
