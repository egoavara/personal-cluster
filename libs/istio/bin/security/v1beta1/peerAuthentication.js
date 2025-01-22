"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerAuthentication = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
class PeerAuthentication extends pulumi.CustomResource {
    /**
     * Get an existing PeerAuthentication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new PeerAuthentication(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of PeerAuthentication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PeerAuthentication.__pulumiType;
    }
    /**
     * Create a PeerAuthentication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "security.istio.io/v1beta1";
            resourceInputs["kind"] = "PeerAuthentication";
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
        const aliasOpts = { aliases: [{ type: "kubernetes:security.istio.io/v1:PeerAuthentication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PeerAuthentication.__pulumiType, name, resourceInputs, opts);
    }
}
exports.PeerAuthentication = PeerAuthentication;
/** @internal */
PeerAuthentication.__pulumiType = 'kubernetes:security.istio.io/v1beta1:PeerAuthentication';
//# sourceMappingURL=peerAuthentication.js.map