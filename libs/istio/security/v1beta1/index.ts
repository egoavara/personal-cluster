// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { AuthorizationPolicyArgs } from "./authorizationPolicy";
export type AuthorizationPolicy = import("./authorizationPolicy").AuthorizationPolicy;
export const AuthorizationPolicy: typeof import("./authorizationPolicy").AuthorizationPolicy = null as any;
utilities.lazyLoad(exports, ["AuthorizationPolicy"], () => require("./authorizationPolicy"));

export { AuthorizationPolicyListArgs } from "./authorizationPolicyList";
export type AuthorizationPolicyList = import("./authorizationPolicyList").AuthorizationPolicyList;
export const AuthorizationPolicyList: typeof import("./authorizationPolicyList").AuthorizationPolicyList = null as any;
utilities.lazyLoad(exports, ["AuthorizationPolicyList"], () => require("./authorizationPolicyList"));

export { AuthorizationPolicyPatchArgs } from "./authorizationPolicyPatch";
export type AuthorizationPolicyPatch = import("./authorizationPolicyPatch").AuthorizationPolicyPatch;
export const AuthorizationPolicyPatch: typeof import("./authorizationPolicyPatch").AuthorizationPolicyPatch = null as any;
utilities.lazyLoad(exports, ["AuthorizationPolicyPatch"], () => require("./authorizationPolicyPatch"));

export { PeerAuthenticationArgs } from "./peerAuthentication";
export type PeerAuthentication = import("./peerAuthentication").PeerAuthentication;
export const PeerAuthentication: typeof import("./peerAuthentication").PeerAuthentication = null as any;
utilities.lazyLoad(exports, ["PeerAuthentication"], () => require("./peerAuthentication"));

export { PeerAuthenticationListArgs } from "./peerAuthenticationList";
export type PeerAuthenticationList = import("./peerAuthenticationList").PeerAuthenticationList;
export const PeerAuthenticationList: typeof import("./peerAuthenticationList").PeerAuthenticationList = null as any;
utilities.lazyLoad(exports, ["PeerAuthenticationList"], () => require("./peerAuthenticationList"));

export { PeerAuthenticationPatchArgs } from "./peerAuthenticationPatch";
export type PeerAuthenticationPatch = import("./peerAuthenticationPatch").PeerAuthenticationPatch;
export const PeerAuthenticationPatch: typeof import("./peerAuthenticationPatch").PeerAuthenticationPatch = null as any;
utilities.lazyLoad(exports, ["PeerAuthenticationPatch"], () => require("./peerAuthenticationPatch"));

export { RequestAuthenticationArgs } from "./requestAuthentication";
export type RequestAuthentication = import("./requestAuthentication").RequestAuthentication;
export const RequestAuthentication: typeof import("./requestAuthentication").RequestAuthentication = null as any;
utilities.lazyLoad(exports, ["RequestAuthentication"], () => require("./requestAuthentication"));

export { RequestAuthenticationListArgs } from "./requestAuthenticationList";
export type RequestAuthenticationList = import("./requestAuthenticationList").RequestAuthenticationList;
export const RequestAuthenticationList: typeof import("./requestAuthenticationList").RequestAuthenticationList = null as any;
utilities.lazyLoad(exports, ["RequestAuthenticationList"], () => require("./requestAuthenticationList"));

export { RequestAuthenticationPatchArgs } from "./requestAuthenticationPatch";
export type RequestAuthenticationPatch = import("./requestAuthenticationPatch").RequestAuthenticationPatch;
export const RequestAuthenticationPatch: typeof import("./requestAuthenticationPatch").RequestAuthenticationPatch = null as any;
utilities.lazyLoad(exports, ["RequestAuthenticationPatch"], () => require("./requestAuthenticationPatch"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:security.istio.io/v1beta1:AuthorizationPolicy":
                return new AuthorizationPolicy(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:AuthorizationPolicyList":
                return new AuthorizationPolicyList(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:AuthorizationPolicyPatch":
                return new AuthorizationPolicyPatch(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:PeerAuthentication":
                return new PeerAuthentication(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:PeerAuthenticationList":
                return new PeerAuthenticationList(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:PeerAuthenticationPatch":
                return new PeerAuthenticationPatch(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:RequestAuthentication":
                return new RequestAuthentication(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:RequestAuthenticationList":
                return new RequestAuthenticationList(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:RequestAuthenticationPatch":
                return new RequestAuthenticationPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "security.istio.io/v1beta1", _module)
