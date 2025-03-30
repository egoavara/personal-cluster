import { output } from "@pulumi/pulumi";
import { postgres } from "../optionals/postgres.ts";
import { yugabytedb } from "../optionals/yugabytedb.ts";
import { interfacing } from "../utils/interfacing.ts";

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

