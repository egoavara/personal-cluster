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
 * GatewayClass describes a class of Gateways available to the user for creating
 * Gateway resources.
 *
 * It is recommended that this resource be used as a template for Gateways. This
 * means that a Gateway is based on the state of the GatewayClass at the time it
 * was created and changes to the GatewayClass or associated parameters are not
 * propagated down to existing Gateways. This recommendation is intended to
 * limit the blast radius of changes to GatewayClass or associated parameters.
 * If implementations choose to propagate GatewayClass changes to existing
 * Gateways, that MUST be clearly documented by the implementation.
 *
 * Whenever one or more Gateways are using a GatewayClass, implementations SHOULD
 * add the `gateway-exists-finalizer.gateway.networking.k8s.io` finalizer on the
 * associated GatewayClass. This ensures that a GatewayClass associated with a
 * Gateway is not deleted while in use.
 *
 * GatewayClass is a Cluster level resource.
 */
export declare class GatewayClassPatch extends pulumi.CustomResource {
    /**
     * Get an existing GatewayClassPatch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GatewayClassPatch;
    /**
     * Returns true if the given object is an instance of GatewayClassPatch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GatewayClassPatch;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"gateway.networking.k8s.io/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"GatewayClass">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMetaPatch>;
    readonly spec: pulumi.Output<outputs.gateway.v1.GatewayClassSpecPatch>;
    readonly status: pulumi.Output<outputs.gateway.v1.GatewayClassStatusPatch>;
    /**
     * Create a GatewayClassPatch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GatewayClassPatchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a GatewayClassPatch resource.
 */
export interface GatewayClassPatchArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"GatewayClass">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMetaPatch>;
    spec?: pulumi.Input<inputs.gateway.v1.GatewayClassSpecPatch>;
}
