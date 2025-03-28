"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPRoutePatch = exports.HTTPRouteList = exports.HTTPRoute = exports.GRPCRoutePatch = exports.GRPCRouteList = exports.GRPCRoute = exports.GatewayPatch = exports.GatewayList = exports.GatewayClassPatch = exports.GatewayClassList = exports.GatewayClass = exports.Gateway = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.Gateway = null;
utilities.lazyLoad(exports, ["Gateway"], () => require("./gateway"));
exports.GatewayClass = null;
utilities.lazyLoad(exports, ["GatewayClass"], () => require("./gatewayClass"));
exports.GatewayClassList = null;
utilities.lazyLoad(exports, ["GatewayClassList"], () => require("./gatewayClassList"));
exports.GatewayClassPatch = null;
utilities.lazyLoad(exports, ["GatewayClassPatch"], () => require("./gatewayClassPatch"));
exports.GatewayList = null;
utilities.lazyLoad(exports, ["GatewayList"], () => require("./gatewayList"));
exports.GatewayPatch = null;
utilities.lazyLoad(exports, ["GatewayPatch"], () => require("./gatewayPatch"));
exports.GRPCRoute = null;
utilities.lazyLoad(exports, ["GRPCRoute"], () => require("./grpcroute"));
exports.GRPCRouteList = null;
utilities.lazyLoad(exports, ["GRPCRouteList"], () => require("./grpcrouteList"));
exports.GRPCRoutePatch = null;
utilities.lazyLoad(exports, ["GRPCRoutePatch"], () => require("./grpcroutePatch"));
exports.HTTPRoute = null;
utilities.lazyLoad(exports, ["HTTPRoute"], () => require("./httproute"));
exports.HTTPRouteList = null;
utilities.lazyLoad(exports, ["HTTPRouteList"], () => require("./httprouteList"));
exports.HTTPRoutePatch = null;
utilities.lazyLoad(exports, ["HTTPRoutePatch"], () => require("./httproutePatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:gateway.networking.k8s.io/v1:GRPCRoute":
                return new exports.GRPCRoute(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:GRPCRouteList":
                return new exports.GRPCRouteList(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:GRPCRoutePatch":
                return new exports.GRPCRoutePatch(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:Gateway":
                return new exports.Gateway(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:GatewayClass":
                return new exports.GatewayClass(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:GatewayClassList":
                return new exports.GatewayClassList(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:GatewayClassPatch":
                return new exports.GatewayClassPatch(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:GatewayList":
                return new exports.GatewayList(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:GatewayPatch":
                return new exports.GatewayPatch(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:HTTPRoute":
                return new exports.HTTPRoute(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:HTTPRouteList":
                return new exports.HTTPRouteList(name, undefined, { urn });
            case "kubernetes:gateway.networking.k8s.io/v1:HTTPRoutePatch":
                return new exports.HTTPRoutePatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("gateway-api", "gateway.networking.k8s.io/v1", _module);
//# sourceMappingURL=index.js.map