"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPRoute = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * HTTPRoute provides a way to route HTTP requests. This includes the capability
 * to match requests by hostname, path, header, or query param. Filters can be
 * used to specify additional processing steps. Backends specify where matching
 * requests should be routed.
 */
class HTTPRoute extends pulumi.CustomResource {
    /**
     * Get an existing HTTPRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new HTTPRoute(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of HTTPRoute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HTTPRoute.__pulumiType;
    }
    /**
     * Create a HTTPRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "gateway.networking.k8s.io/v1";
            resourceInputs["kind"] = "HTTPRoute";
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
        const aliasOpts = { aliases: [{ type: "kubernetes:gateway.networking.k8s.io/v1beta1:HTTPRoute" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HTTPRoute.__pulumiType, name, resourceInputs, opts);
    }
}
exports.HTTPRoute = HTTPRoute;
/** @internal */
HTTPRoute.__pulumiType = 'kubernetes:gateway.networking.k8s.io/v1:HTTPRoute';
//# sourceMappingURL=httproute.js.map