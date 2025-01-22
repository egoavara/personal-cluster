"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telemetry = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
class Telemetry extends pulumi.CustomResource {
    /**
     * Get an existing Telemetry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new Telemetry(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Telemetry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Telemetry.__pulumiType;
    }
    /**
     * Create a Telemetry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "telemetry.istio.io/v1";
            resourceInputs["kind"] = "Telemetry";
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
        const aliasOpts = { aliases: [{ type: "kubernetes:telemetry.istio.io/v1alpha1:Telemetry" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Telemetry.__pulumiType, name, resourceInputs, opts);
    }
}
exports.Telemetry = Telemetry;
/** @internal */
Telemetry.__pulumiType = 'kubernetes:telemetry.istio.io/v1:Telemetry';
//# sourceMappingURL=telemetry.js.map