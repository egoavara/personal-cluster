"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackConfigPolicyPatch = exports.StackConfigPolicyList = exports.StackConfigPolicy = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.StackConfigPolicy = null;
utilities.lazyLoad(exports, ["StackConfigPolicy"], () => require("./stackConfigPolicy"));
exports.StackConfigPolicyList = null;
utilities.lazyLoad(exports, ["StackConfigPolicyList"], () => require("./stackConfigPolicyList"));
exports.StackConfigPolicyPatch = null;
utilities.lazyLoad(exports, ["StackConfigPolicyPatch"], () => require("./stackConfigPolicyPatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:stackconfigpolicy.k8s.elastic.co/v1alpha1:StackConfigPolicy":
                return new exports.StackConfigPolicy(name, undefined, { urn });
            case "kubernetes:stackconfigpolicy.k8s.elastic.co/v1alpha1:StackConfigPolicyList":
                return new exports.StackConfigPolicyList(name, undefined, { urn });
            case "kubernetes:stackconfigpolicy.k8s.elastic.co/v1alpha1:StackConfigPolicyPatch":
                return new exports.StackConfigPolicyPatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("eck", "stackconfigpolicy.k8s.elastic.co/v1alpha1", _module);
//# sourceMappingURL=index.js.map