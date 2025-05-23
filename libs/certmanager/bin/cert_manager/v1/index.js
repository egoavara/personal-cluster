"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuerPatch = exports.IssuerList = exports.Issuer = exports.ClusterIssuerPatch = exports.ClusterIssuerList = exports.ClusterIssuer = exports.CertificateRequestPatch = exports.CertificateRequestList = exports.CertificateRequest = exports.CertificatePatch = exports.CertificateList = exports.Certificate = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.Certificate = null;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));
exports.CertificateList = null;
utilities.lazyLoad(exports, ["CertificateList"], () => require("./certificateList"));
exports.CertificatePatch = null;
utilities.lazyLoad(exports, ["CertificatePatch"], () => require("./certificatePatch"));
exports.CertificateRequest = null;
utilities.lazyLoad(exports, ["CertificateRequest"], () => require("./certificateRequest"));
exports.CertificateRequestList = null;
utilities.lazyLoad(exports, ["CertificateRequestList"], () => require("./certificateRequestList"));
exports.CertificateRequestPatch = null;
utilities.lazyLoad(exports, ["CertificateRequestPatch"], () => require("./certificateRequestPatch"));
exports.ClusterIssuer = null;
utilities.lazyLoad(exports, ["ClusterIssuer"], () => require("./clusterIssuer"));
exports.ClusterIssuerList = null;
utilities.lazyLoad(exports, ["ClusterIssuerList"], () => require("./clusterIssuerList"));
exports.ClusterIssuerPatch = null;
utilities.lazyLoad(exports, ["ClusterIssuerPatch"], () => require("./clusterIssuerPatch"));
exports.Issuer = null;
utilities.lazyLoad(exports, ["Issuer"], () => require("./issuer"));
exports.IssuerList = null;
utilities.lazyLoad(exports, ["IssuerList"], () => require("./issuerList"));
exports.IssuerPatch = null;
utilities.lazyLoad(exports, ["IssuerPatch"], () => require("./issuerPatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:cert-manager.io/v1:Certificate":
                return new exports.Certificate(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:CertificateList":
                return new exports.CertificateList(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:CertificatePatch":
                return new exports.CertificatePatch(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:CertificateRequest":
                return new exports.CertificateRequest(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:CertificateRequestList":
                return new exports.CertificateRequestList(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:CertificateRequestPatch":
                return new exports.CertificateRequestPatch(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:ClusterIssuer":
                return new exports.ClusterIssuer(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:ClusterIssuerList":
                return new exports.ClusterIssuerList(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:ClusterIssuerPatch":
                return new exports.ClusterIssuerPatch(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:Issuer":
                return new exports.Issuer(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:IssuerList":
                return new exports.IssuerList(name, undefined, { urn });
            case "kubernetes:cert-manager.io/v1:IssuerPatch":
                return new exports.IssuerPatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("certmanager", "cert-manager.io/v1", _module);
//# sourceMappingURL=index.js.map