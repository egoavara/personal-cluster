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
export declare class ReferenceGrantPatch extends pulumi.CustomResource {
    /**
     * Get an existing ReferenceGrantPatch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReferenceGrantPatch;
    /**
     * Returns true if the given object is an instance of ReferenceGrantPatch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ReferenceGrantPatch;
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
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMetaPatch>;
    readonly spec: pulumi.Output<outputs.gateway.v1beta1.ReferenceGrantSpecPatch>;
    /**
     * Create a ReferenceGrantPatch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ReferenceGrantPatchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ReferenceGrantPatch resource.
 */
export interface ReferenceGrantPatchArgs {
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
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMetaPatch>;
    spec?: pulumi.Input<inputs.gateway.v1beta1.ReferenceGrantSpecPatch>;
}
