// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { BeatArgs } from "./beat";
export type Beat = import("./beat").Beat;
export const Beat: typeof import("./beat").Beat = null as any;
utilities.lazyLoad(exports, ["Beat"], () => require("./beat"));

export { BeatListArgs } from "./beatList";
export type BeatList = import("./beatList").BeatList;
export const BeatList: typeof import("./beatList").BeatList = null as any;
utilities.lazyLoad(exports, ["BeatList"], () => require("./beatList"));

export { BeatPatchArgs } from "./beatPatch";
export type BeatPatch = import("./beatPatch").BeatPatch;
export const BeatPatch: typeof import("./beatPatch").BeatPatch = null as any;
utilities.lazyLoad(exports, ["BeatPatch"], () => require("./beatPatch"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:beat.k8s.elastic.co/v1beta1:Beat":
                return new Beat(name, <any>undefined, { urn })
            case "kubernetes:beat.k8s.elastic.co/v1beta1:BeatList":
                return new BeatList(name, <any>undefined, { urn })
            case "kubernetes:beat.k8s.elastic.co/v1beta1:BeatPatch":
                return new BeatPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("eck", "beat.k8s.elastic.co/v1beta1", _module)
