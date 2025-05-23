// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { JaegerArgs } from "./jaeger";
export type Jaeger = import("./jaeger").Jaeger;
export const Jaeger: typeof import("./jaeger").Jaeger = null as any;
utilities.lazyLoad(exports, ["Jaeger"], () => require("./jaeger"));

export { JaegerListArgs } from "./jaegerList";
export type JaegerList = import("./jaegerList").JaegerList;
export const JaegerList: typeof import("./jaegerList").JaegerList = null as any;
utilities.lazyLoad(exports, ["JaegerList"], () => require("./jaegerList"));

export { JaegerPatchArgs } from "./jaegerPatch";
export type JaegerPatch = import("./jaegerPatch").JaegerPatch;
export const JaegerPatch: typeof import("./jaegerPatch").JaegerPatch = null as any;
utilities.lazyLoad(exports, ["JaegerPatch"], () => require("./jaegerPatch"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:jaegertracing.io/v1:Jaeger":
                return new Jaeger(name, <any>undefined, { urn })
            case "kubernetes:jaegertracing.io/v1:JaegerList":
                return new JaegerList(name, <any>undefined, { urn })
            case "kubernetes:jaegertracing.io/v1:JaegerPatch":
                return new JaegerPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("jaeger", "jaegertracing.io/v1", _module)
