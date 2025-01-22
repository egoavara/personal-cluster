"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceEntry = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
class ServiceEntry extends pulumi.CustomResource {
    /**
     * Get an existing ServiceEntry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new ServiceEntry(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of ServiceEntry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceEntry.__pulumiType;
    }
    /**
     * Create a ServiceEntry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "networking.istio.io/v1alpha3";
            resourceInputs["kind"] = "ServiceEntry";
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
        const aliasOpts = { aliases: [{ type: "kubernetes:networking.istio.io/v1:ServiceEntry" }, { type: "kubernetes:networking.istio.io/v1beta1:ServiceEntry" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServiceEntry.__pulumiType, name, resourceInputs, opts);
    }
}
exports.ServiceEntry = ServiceEntry;
/** @internal */
ServiceEntry.__pulumiType = 'kubernetes:networking.istio.io/v1alpha3:ServiceEntry';
//# sourceMappingURL=serviceEntry.js.map