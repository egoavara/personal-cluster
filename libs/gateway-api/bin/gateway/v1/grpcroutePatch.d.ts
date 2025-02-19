import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Patch resources are used to modify existing Kubernetes resources by using
 * Server-Side Apply updates. The name of the resource must be specified, but all other properties are optional. More than
 * one patch may be applied to the same resource, and a random FieldManager name will be used for each Patch resource.
 * Conflicts will result in an error by default, but can be forced using the "pulumi.com/patchForce" annotation. See the
 * [Server-Side Apply Docs](https://www.pulumi.com/registry/packages/kubernetes/how-to-guides/managing-resources-with-server-side-apply/) for
 * additional information about using Server-Side Apply to manage Kubernetes resources with Pulumi.
 * GRPCRoute provides a way to route gRPC requests. This includes the capability
 * to match requests by hostname, gRPC service, gRPC method, or HTTP/2 header.
 * Filters can be used to specify additional processing steps. Backends specify
 * where matching requests will be routed.
 *
 * GRPCRoute falls under extended support within the Gateway API. Within the
 * following specification, the word "MUST" indicates that an implementation
 * supporting GRPCRoute must conform to the indicated requirement, but an
 * implementation not supporting this route type need not follow the requirement
 * unless explicitly indicated.
 *
 * Implementations supporting `GRPCRoute` with the `HTTPS` `ProtocolType` MUST
 * accept HTTP/2 connections without an initial upgrade from HTTP/1.1, i.e. via
 * ALPN. If the implementation does not support this, then it MUST set the
 * "Accepted" condition to "False" for the affected listener with a reason of
 * "UnsupportedProtocol".  Implementations MAY also accept HTTP/2 connections
 * with an upgrade from HTTP/1.
 *
 * Implementations supporting `GRPCRoute` with the `HTTP` `ProtocolType` MUST
 * support HTTP/2 over cleartext TCP (h2c,
 * https://www.rfc-editor.org/rfc/rfc7540#section-3.1) without an initial
 * upgrade from HTTP/1.1, i.e. with prior knowledge
 * (https://www.rfc-editor.org/rfc/rfc7540#section-3.4). If the implementation
 * does not support this, then it MUST set the "Accepted" condition to "False"
 * for the affected listener with a reason of "UnsupportedProtocol".
 * Implementations MAY also accept HTTP/2 connections with an upgrade from
 * HTTP/1, i.e. without prior knowledge.
 */
export declare class GRPCRoutePatch extends pulumi.CustomResource {
    /**
     * Get an existing GRPCRoutePatch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GRPCRoutePatch;
    /**
     * Returns true if the given object is an instance of GRPCRoutePatch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GRPCRoutePatch;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"gateway.networking.k8s.io/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"GRPCRoute">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMetaPatch>;
    readonly spec: pulumi.Output<outputs.gateway.v1.GRPCRouteSpecPatch>;
    readonly status: pulumi.Output<outputs.gateway.v1.GRPCRouteStatusPatch>;
    /**
     * Create a GRPCRoutePatch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GRPCRoutePatchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a GRPCRoutePatch resource.
 */
export interface GRPCRoutePatchArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"GRPCRoute">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMetaPatch>;
    spec?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecPatch>;
}
