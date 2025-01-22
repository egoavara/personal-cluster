export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export declare const Provider: typeof import("./provider").Provider;
import * as ceph from "./ceph";
import * as objectbucket from "./objectbucket";
import * as types from "./types";
export { ceph, objectbucket, types, };
