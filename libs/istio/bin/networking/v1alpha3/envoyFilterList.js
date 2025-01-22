"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvoyFilterList = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * EnvoyFilterList is a list of EnvoyFilter
 */
class EnvoyFilterList extends pulumi.CustomResource {
    /**
     * Get an existing EnvoyFilterList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new EnvoyFilterList(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of EnvoyFilterList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnvoyFilterList.__pulumiType;
    }
    /**
     * Create a EnvoyFilterList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.items === undefined) && !opts.urn) {
                throw new Error("Missing required property 'items'");
            }
            resourceInputs["apiVersion"] = "networking.istio.io/v1alpha3";
            resourceInputs["items"] = args ? args.items : undefined;
            resourceInputs["kind"] = "EnvoyFilterList";
            resourceInputs["metadata"] = args ? args.metadata : undefined;
        }
        else {
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["items"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EnvoyFilterList.__pulumiType, name, resourceInputs, opts);
    }
}
exports.EnvoyFilterList = EnvoyFilterList;
/** @internal */
EnvoyFilterList.__pulumiType = 'kubernetes:networking.istio.io/v1alpha3:EnvoyFilterList';
//# sourceMappingURL=envoyFilterList.js.map