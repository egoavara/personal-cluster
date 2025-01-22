"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestAuthenticationPatch = exports.RequestAuthenticationList = exports.RequestAuthentication = exports.PeerAuthenticationPatch = exports.PeerAuthenticationList = exports.PeerAuthentication = exports.AuthorizationPolicyPatch = exports.AuthorizationPolicyList = exports.AuthorizationPolicy = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.AuthorizationPolicy = null;
utilities.lazyLoad(exports, ["AuthorizationPolicy"], () => require("./authorizationPolicy"));
exports.AuthorizationPolicyList = null;
utilities.lazyLoad(exports, ["AuthorizationPolicyList"], () => require("./authorizationPolicyList"));
exports.AuthorizationPolicyPatch = null;
utilities.lazyLoad(exports, ["AuthorizationPolicyPatch"], () => require("./authorizationPolicyPatch"));
exports.PeerAuthentication = null;
utilities.lazyLoad(exports, ["PeerAuthentication"], () => require("./peerAuthentication"));
exports.PeerAuthenticationList = null;
utilities.lazyLoad(exports, ["PeerAuthenticationList"], () => require("./peerAuthenticationList"));
exports.PeerAuthenticationPatch = null;
utilities.lazyLoad(exports, ["PeerAuthenticationPatch"], () => require("./peerAuthenticationPatch"));
exports.RequestAuthentication = null;
utilities.lazyLoad(exports, ["RequestAuthentication"], () => require("./requestAuthentication"));
exports.RequestAuthenticationList = null;
utilities.lazyLoad(exports, ["RequestAuthenticationList"], () => require("./requestAuthenticationList"));
exports.RequestAuthenticationPatch = null;
utilities.lazyLoad(exports, ["RequestAuthenticationPatch"], () => require("./requestAuthenticationPatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:security.istio.io/v1beta1:AuthorizationPolicy":
                return new exports.AuthorizationPolicy(name, undefined, { urn });
            case "kubernetes:security.istio.io/v1beta1:AuthorizationPolicyList":
                return new exports.AuthorizationPolicyList(name, undefined, { urn });
            case "kubernetes:security.istio.io/v1beta1:AuthorizationPolicyPatch":
                return new exports.AuthorizationPolicyPatch(name, undefined, { urn });
            case "kubernetes:security.istio.io/v1beta1:PeerAuthentication":
                return new exports.PeerAuthentication(name, undefined, { urn });
            case "kubernetes:security.istio.io/v1beta1:PeerAuthenticationList":
                return new exports.PeerAuthenticationList(name, undefined, { urn });
            case "kubernetes:security.istio.io/v1beta1:PeerAuthenticationPatch":
                return new exports.PeerAuthenticationPatch(name, undefined, { urn });
            case "kubernetes:security.istio.io/v1beta1:RequestAuthentication":
                return new exports.RequestAuthentication(name, undefined, { urn });
            case "kubernetes:security.istio.io/v1beta1:RequestAuthenticationList":
                return new exports.RequestAuthenticationList(name, undefined, { urn });
            case "kubernetes:security.istio.io/v1beta1:RequestAuthenticationPatch":
                return new exports.RequestAuthenticationPatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "security.istio.io/v1beta1", _module);
//# sourceMappingURL=index.js.map