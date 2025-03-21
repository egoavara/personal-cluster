"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogstashPatch = exports.LogstashList = exports.Logstash = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.Logstash = null;
utilities.lazyLoad(exports, ["Logstash"], () => require("./logstash"));
exports.LogstashList = null;
utilities.lazyLoad(exports, ["LogstashList"], () => require("./logstashList"));
exports.LogstashPatch = null;
utilities.lazyLoad(exports, ["LogstashPatch"], () => require("./logstashPatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:logstash.k8s.elastic.co/v1alpha1:Logstash":
                return new exports.Logstash(name, undefined, { urn });
            case "kubernetes:logstash.k8s.elastic.co/v1alpha1:LogstashList":
                return new exports.LogstashList(name, undefined, { urn });
            case "kubernetes:logstash.k8s.elastic.co/v1alpha1:LogstashPatch":
                return new exports.LogstashPatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("eck", "logstash.k8s.elastic.co/v1alpha1", _module);
//# sourceMappingURL=index.js.map