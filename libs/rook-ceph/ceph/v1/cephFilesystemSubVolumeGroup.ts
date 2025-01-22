// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * CephFilesystemSubVolumeGroup represents a Ceph Filesystem SubVolumeGroup
 */
export class CephFilesystemSubVolumeGroup extends pulumi.CustomResource {
    /**
     * Get an existing CephFilesystemSubVolumeGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CephFilesystemSubVolumeGroup {
        return new CephFilesystemSubVolumeGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:ceph.rook.io/v1:CephFilesystemSubVolumeGroup';

    /**
     * Returns true if the given object is an instance of CephFilesystemSubVolumeGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CephFilesystemSubVolumeGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CephFilesystemSubVolumeGroup.__pulumiType;
    }

    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    public readonly apiVersion!: pulumi.Output<"ceph.rook.io/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    public readonly kind!: pulumi.Output<"CephFilesystemSubVolumeGroup">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata!: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    public readonly spec!: pulumi.Output<outputs.ceph.v1.CephFilesystemSubVolumeGroupSpec>;
    /**
     * Status represents the status of a CephFilesystem SubvolumeGroup
     */
    public /*out*/ readonly status!: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a CephFilesystemSubVolumeGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CephFilesystemSubVolumeGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "ceph.rook.io/v1";
            resourceInputs["kind"] = "CephFilesystemSubVolumeGroup";
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["status"] = undefined /*out*/;
        } else {
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["spec"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CephFilesystemSubVolumeGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CephFilesystemSubVolumeGroup resource.
 */
export interface CephFilesystemSubVolumeGroupArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"CephFilesystemSubVolumeGroup">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.ceph.v1.CephFilesystemSubVolumeGroupSpec>;
}
