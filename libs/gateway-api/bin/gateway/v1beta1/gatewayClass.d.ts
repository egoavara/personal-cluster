import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
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
export declare class GatewayClass extends pulumi.CustomResource {
    /**
     * Get an existing GatewayClass resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GatewayClass;
    /**
     * Returns true if the given object is an instance of GatewayClass.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GatewayClass;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"gateway.networking.k8s.io/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"GatewayClass">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    readonly spec: pulumi.Output<outputs.gateway.v1beta1.GatewayClassSpec>;
    readonly status: pulumi.Output<outputs.gateway.v1beta1.GatewayClassStatus>;
    /**
     * Create a GatewayClass resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GatewayClassArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a GatewayClass resource.
 */
export interface GatewayClassArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"GatewayClass">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.gateway.v1beta1.GatewayClassSpec>;
}
