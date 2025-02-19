import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * ReferenceGrant identifies kinds of resources in other namespaces that are
 * trusted to reference the specified kinds of resources in the same namespace
 * as the policy.
 *
 * Each ReferenceGrant can be used to represent a unique trust relationship.
 * Additional Reference Grants can be used to add to the set of trusted
 * sources of inbound references for the namespace they are defined within.
 *
 * All cross-namespace references in Gateway API (with the exception of cross-namespace
 * Gateway-route attachment) require a ReferenceGrant.
 *
 * ReferenceGrant is a form of runtime verification allowing users to assert
 * which cross-namespace object references are permitted. Implementations that
 * support ReferenceGrant MUST NOT permit cross-namespace references which have
 * no grant, and MUST respond to the removal of a grant by revoking the access
 * that the grant allowed.
 */
export declare class ReferenceGrant extends pulumi.CustomResource {
    /**
     * Get an existing ReferenceGrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReferenceGrant;
    /**
     * Returns true if the given object is an instance of ReferenceGrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ReferenceGrant;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"gateway.networking.k8s.io/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"ReferenceGrant">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    readonly spec: pulumi.Output<outputs.gateway.v1beta1.ReferenceGrantSpec>;
    /**
     * Create a ReferenceGrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ReferenceGrantArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ReferenceGrant resource.
 */
export interface ReferenceGrantArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"ReferenceGrant">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.gateway.v1beta1.ReferenceGrantSpec>;
}
