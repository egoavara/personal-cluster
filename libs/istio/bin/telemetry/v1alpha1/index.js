"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryPatch = exports.TelemetryList = exports.Telemetry = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.Telemetry = null;
utilities.lazyLoad(exports, ["Telemetry"], () => require("./telemetry"));
exports.TelemetryList = null;
utilities.lazyLoad(exports, ["TelemetryList"], () => require("./telemetryList"));
exports.TelemetryPatch = null;
utilities.lazyLoad(exports, ["TelemetryPatch"], () => require("./telemetryPatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:telemetry.istio.io/v1alpha1:Telemetry":
                return new exports.Telemetry(name, undefined, { urn });
            case "kubernetes:telemetry.istio.io/v1alpha1:TelemetryList":
                return new exports.TelemetryList(name, undefined, { urn });
            case "kubernetes:telemetry.istio.io/v1alpha1:TelemetryPatch":
                return new exports.TelemetryPatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "telemetry.istio.io/v1alpha1", _module);
//# sourceMappingURL=index.js.map