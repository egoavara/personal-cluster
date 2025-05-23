"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.KibanaPatch = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Patch resources are used to modify existing Kubernetes resources by using
 * Server-Side Apply updates. The name of the resource must be specified, but all other properties are optional. More than
 * one patch may be applied to the same resource, and a random FieldManager name will be used for each Patch resource.
 * Conflicts will result in an error by default, but can be forced using the "pulumi.com/patchForce" annotation. See the
 * [Server-Side Apply Docs](https://www.pulumi.com/registry/packages/kubernetes/how-to-guides/managing-resources-with-server-side-apply/) for
 * additional information about using Server-Side Apply to manage Kubernetes resources with Pulumi.
 * Kibana represents a Kibana resource in a Kubernetes cluster.
 */
class KibanaPatch extends pulumi.CustomResource {
    /**
     * Get an existing KibanaPatch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new KibanaPatch(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of KibanaPatch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KibanaPatch.__pulumiType;
    }
    /**
     * Create a KibanaPatch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "kibana.k8s.elastic.co/v1beta1";
            resourceInputs["kind"] = "Kibana";
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
        const aliasOpts = { aliases: [{ type: "kubernetes:kibana.k8s.elastic.co/v1:KibanaPatch" }, { type: "kubernetes:kibana.k8s.elastic.co/v1alpha1:KibanaPatch" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KibanaPatch.__pulumiType, name, resourceInputs, opts);
    }
}
exports.KibanaPatch = KibanaPatch;
/** @internal */
KibanaPatch.__pulumiType = 'kubernetes:kibana.k8s.elastic.co/v1beta1:KibanaPatch';
//# sourceMappingURL=kibanaPatch.js.map