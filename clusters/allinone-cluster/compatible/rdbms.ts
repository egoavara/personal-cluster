import { interpolate, output } from "@pulumi/pulumi";
import { postgres } from "../optionals/postgres.ts";
import { yugabytedb } from "../optionals/yugabytedb.ts";
import { interfacing } from "../utils/interfacing.ts";
import { batch, core } from "@pulumi/kubernetes";
import { must } from "../utils/must.ts";

export const rdbms = interfacing<{
    username: string;
    password: string;
    hostname: string;
    port: number;
    defaultDatabase: string;
}>()
    .orElse(postgres, postgres => output({
        defaultDatabase: postgres.database,
        username: postgres.username,
        password: postgres.password,
        hostname: postgres.hostname,
        port: postgres.port,
    }))
    .orElse(yugabytedb, yugabytedb => output({
        defaultDatabase: yugabytedb.database,
        username: yugabytedb.username,
        password: yugabytedb.password,
        hostname: yugabytedb.hostname,
        port: yugabytedb.port,
    }))
    .end()


export function createDatabase(databaseName: string) {
    return rdbms.apply(rawRdbms => {
        const rdbms = must(rawRdbms, "rdbms is required to create database");

        const dbcreateShell = new core.v1.ConfigMap(`db-create-shell-${databaseName}`, {
            metadata: {
                name: interpolate`db-create-shell-${databaseName}`,
            },
            data: {
                "create-db.sh": interpolate`#!/bin/bash
psql -tc "SELECT 1 FROM pg_database WHERE datname = '${databaseName}'" | grep -q 1 || psql -c "CREATE DATABASE ${databaseName}"
`
            }
        })
        const dbcreateSecret = new core.v1.Secret(`db-create-shell-${databaseName}`, {
            metadata: {
                name: interpolate`db-create-secret-${databaseName}`,
            },
            stringData: {
                hostname: rdbms.hostname,
                port: rdbms.port.apply(v => v.toString()),
                username: rdbms.username,
                password: rdbms.password,
                database: rdbms.defaultDatabase,
            },
        })

        const dbcreate = new batch.v1.Job(`db-create-shell-${databaseName}`, {
            metadata: {
                name: interpolate`db-create-${databaseName}`,
                labels: {
                    app: interpolate`db-create-${databaseName}`,
                },
            },
            spec: {
                template: {
                    metadata: {
                        labels: {
                            app: interpolate`db-create-${databaseName}`,
                        },
                    },
                    spec: {
                        volumes: [
                            {
                                name: "db-create-shell",
                                configMap: {
                                    name: dbcreateShell.metadata.name,
                                    items: [
                                        {
                                            key: "create-db.sh",
                                            path: "create-db.sh",
                                            mode: 0o555,
                                        }
                                    ],
                                }
                            }
                        ],
                        restartPolicy: "Never",
                        containers: [
                            {
                                name: "yugabyte-db-create",
                                image: "postgres:17.4-bookworm",
                                command: [
                                    "/bin/bash",
                                    "-c",
                                    interpolate`/scripts/create-db.sh`,
                                ],
                                env: [
                                    {
                                        name: "PGPASSWORD",
                                        valueFrom: {
                                            secretKeyRef: {
                                                name: dbcreateSecret.metadata.name,
                                                key: "password",
                                            }
                                        }
                                    },
                                    {
                                        name: "PGUSER",
                                        valueFrom: {
                                            secretKeyRef: {
                                                name: dbcreateSecret.metadata.name,     
                                                key: "username",
                                            }
                                        }
                                    },
                                    {
                                        name: "PGDATABASE",
                                        valueFrom: {
                                            secretKeyRef: {
                                                name: dbcreateSecret.metadata.name,
                                                key: "database",
                                            }
                                        }
                                    },
                                    {
                                        name: "PGHOST",
                                        valueFrom: {
                                            secretKeyRef: {
                                                name: dbcreateSecret.metadata.name,
                                                key: "hostname",
                                            }
                                        }
                                    },
                                    {
                                        name: "PGPORT",
                                        valueFrom: {
                                            secretKeyRef: {
                                                name: dbcreateSecret.metadata.name,
                                                key: "port",
                                            }
                                        }
                                    }
                                ],
                                volumeMounts: [
                                    {
                                        name: "db-create-shell",
                                        mountPath: "/scripts",
                                    }
                                ],
                            }
                        ],
                    },
                },
                backoffLimit: 5,
                ttlSecondsAfterFinished: 60,
                completions: 1,
                parallelism: 1,
            },
        })
        return {
            
            database: databaseName,
            job: dbcreate,
            configMap: dbcreateShell,
            secret: dbcreateSecret,
        }   
    })
}