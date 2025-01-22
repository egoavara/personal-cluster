"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.CephObjectZone = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * CephObjectZone represents a Ceph Object Store Gateway Zone
 */
class CephObjectZone extends pulumi.CustomResource {
    /**
     * Get an existing CephObjectZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new CephObjectZone(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of CephObjectZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CephObjectZone.__pulumiType;
    }
    /**
     * Create a CephObjectZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "ceph.rook.io/v1";
            resourceInputs["kind"] = "CephObjectZone";
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        else {
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["spec"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CephObjectZone.__pulumiType, name, resourceInputs, opts);
    }
}
exports.CephObjectZone = CephObjectZone;
/** @internal */
CephObjectZone.__pulumiType = 'kubernetes:ceph.rook.io/v1:CephObjectZone';
//# sourceMappingURL=cephObjectZone.js.map