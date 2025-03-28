// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { LogstashArgs } from "./logstash";
export type Logstash = import("./logstash").Logstash;
export const Logstash: typeof import("./logstash").Logstash = null as any;
utilities.lazyLoad(exports, ["Logstash"], () => require("./logstash"));

export { LogstashListArgs } from "./logstashList";
export type LogstashList = import("./logstashList").LogstashList;
export const LogstashList: typeof import("./logstashList").LogstashList = null as any;
utilities.lazyLoad(exports, ["LogstashList"], () => require("./logstashList"));

export { LogstashPatchArgs } from "./logstashPatch";
export type LogstashPatch = import("./logstashPatch").LogstashPatch;
export const LogstashPatch: typeof import("./logstashPatch").LogstashPatch = null as any;
utilities.lazyLoad(exports, ["LogstashPatch"], () => require("./logstashPatch"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:logstash.k8s.elastic.co/v1alpha1:Logstash":
                return new Logstash(name, <any>undefined, { urn })
            case "kubernetes:logstash.k8s.elastic.co/v1alpha1:LogstashList":
                return new LogstashList(name, <any>undefined, { urn })
            case "kubernetes:logstash.k8s.elastic.co/v1alpha1:LogstashPatch":
                return new LogstashPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("eck", "logstash.k8s.elastic.co/v1alpha1", _module)
