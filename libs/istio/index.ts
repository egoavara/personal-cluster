// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as extensions from "./extensions";
import * as networking from "./networking";
import * as security from "./security";
import * as telemetry from "./telemetry";
import * as types from "./types";

export {
    extensions,
    networking,
    security,
    telemetry,
    types,
};
pulumi.runtime.registerResourcePackage("crds", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:kubernetes") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
