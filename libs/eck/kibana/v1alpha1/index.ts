// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { KibanaArgs } from "./kibana";
export type Kibana = import("./kibana").Kibana;
export const Kibana: typeof import("./kibana").Kibana = null as any;
utilities.lazyLoad(exports, ["Kibana"], () => require("./kibana"));

export { KibanaListArgs } from "./kibanaList";
export type KibanaList = import("./kibanaList").KibanaList;
export const KibanaList: typeof import("./kibanaList").KibanaList = null as any;
utilities.lazyLoad(exports, ["KibanaList"], () => require("./kibanaList"));

export { KibanaPatchArgs } from "./kibanaPatch";
export type KibanaPatch = import("./kibanaPatch").KibanaPatch;
export const KibanaPatch: typeof import("./kibanaPatch").KibanaPatch = null as any;
utilities.lazyLoad(exports, ["KibanaPatch"], () => require("./kibanaPatch"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:kibana.k8s.elastic.co/v1alpha1:Kibana":
                return new Kibana(name, <any>undefined, { urn })
            case "kubernetes:kibana.k8s.elastic.co/v1alpha1:KibanaList":
                return new KibanaList(name, <any>undefined, { urn })
            case "kubernetes:kibana.k8s.elastic.co/v1alpha1:KibanaPatch":
                return new KibanaPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("eck", "kibana.k8s.elastic.co/v1alpha1", _module)
