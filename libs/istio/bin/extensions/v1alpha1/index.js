"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.WasmPluginPatch = exports.WasmPluginList = exports.WasmPlugin = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.WasmPlugin = null;
utilities.lazyLoad(exports, ["WasmPlugin"], () => require("./wasmPlugin"));
exports.WasmPluginList = null;
utilities.lazyLoad(exports, ["WasmPluginList"], () => require("./wasmPluginList"));
exports.WasmPluginPatch = null;
utilities.lazyLoad(exports, ["WasmPluginPatch"], () => require("./wasmPluginPatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:extensions.istio.io/v1alpha1:WasmPlugin":
                return new exports.WasmPlugin(name, undefined, { urn });
            case "kubernetes:extensions.istio.io/v1alpha1:WasmPluginList":
                return new exports.WasmPluginList(name, undefined, { urn });
            case "kubernetes:extensions.istio.io/v1alpha1:WasmPluginPatch":
                return new exports.WasmPluginPatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "extensions.istio.io/v1alpha1", _module);
//# sourceMappingURL=index.js.map