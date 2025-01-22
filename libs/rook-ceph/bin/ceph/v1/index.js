"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.CephRBDMirrorList = exports.CephRBDMirror = exports.CephObjectZonePatch = exports.CephObjectZoneList = exports.CephObjectZoneGroupPatch = exports.CephObjectZoneGroupList = exports.CephObjectZoneGroup = exports.CephObjectZone = exports.CephObjectStoreUserPatch = exports.CephObjectStoreUserList = exports.CephObjectStoreUser = exports.CephObjectStorePatch = exports.CephObjectStoreList = exports.CephObjectStore = exports.CephObjectRealmPatch = exports.CephObjectRealmList = exports.CephObjectRealm = exports.CephNFSPatch = exports.CephNFSList = exports.CephNFS = exports.CephFilesystemSubVolumeGroupPatch = exports.CephFilesystemSubVolumeGroupList = exports.CephFilesystemSubVolumeGroup = exports.CephFilesystemPatch = exports.CephFilesystemMirrorPatch = exports.CephFilesystemMirrorList = exports.CephFilesystemMirror = exports.CephFilesystemList = exports.CephFilesystem = exports.CephClusterPatch = exports.CephClusterList = exports.CephCluster = exports.CephClientPatch = exports.CephClientList = exports.CephClient = exports.CephCOSIDriverPatch = exports.CephCOSIDriverList = exports.CephCOSIDriver = exports.CephBucketTopicPatch = exports.CephBucketTopicList = exports.CephBucketTopic = exports.CephBucketNotificationPatch = exports.CephBucketNotificationList = exports.CephBucketNotification = exports.CephBlockPoolRadosNamespacePatch = exports.CephBlockPoolRadosNamespaceList = exports.CephBlockPoolRadosNamespace = exports.CephBlockPoolPatch = exports.CephBlockPoolList = exports.CephBlockPool = void 0;
exports.CephRBDMirrorPatch = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.CephBlockPool = null;
utilities.lazyLoad(exports, ["CephBlockPool"], () => require("./cephBlockPool"));
exports.CephBlockPoolList = null;
utilities.lazyLoad(exports, ["CephBlockPoolList"], () => require("./cephBlockPoolList"));
exports.CephBlockPoolPatch = null;
utilities.lazyLoad(exports, ["CephBlockPoolPatch"], () => require("./cephBlockPoolPatch"));
exports.CephBlockPoolRadosNamespace = null;
utilities.lazyLoad(exports, ["CephBlockPoolRadosNamespace"], () => require("./cephBlockPoolRadosNamespace"));
exports.CephBlockPoolRadosNamespaceList = null;
utilities.lazyLoad(exports, ["CephBlockPoolRadosNamespaceList"], () => require("./cephBlockPoolRadosNamespaceList"));
exports.CephBlockPoolRadosNamespacePatch = null;
utilities.lazyLoad(exports, ["CephBlockPoolRadosNamespacePatch"], () => require("./cephBlockPoolRadosNamespacePatch"));
exports.CephBucketNotification = null;
utilities.lazyLoad(exports, ["CephBucketNotification"], () => require("./cephBucketNotification"));
exports.CephBucketNotificationList = null;
utilities.lazyLoad(exports, ["CephBucketNotificationList"], () => require("./cephBucketNotificationList"));
exports.CephBucketNotificationPatch = null;
utilities.lazyLoad(exports, ["CephBucketNotificationPatch"], () => require("./cephBucketNotificationPatch"));
exports.CephBucketTopic = null;
utilities.lazyLoad(exports, ["CephBucketTopic"], () => require("./cephBucketTopic"));
exports.CephBucketTopicList = null;
utilities.lazyLoad(exports, ["CephBucketTopicList"], () => require("./cephBucketTopicList"));
exports.CephBucketTopicPatch = null;
utilities.lazyLoad(exports, ["CephBucketTopicPatch"], () => require("./cephBucketTopicPatch"));
exports.CephCOSIDriver = null;
utilities.lazyLoad(exports, ["CephCOSIDriver"], () => require("./cephCOSIDriver"));
exports.CephCOSIDriverList = null;
utilities.lazyLoad(exports, ["CephCOSIDriverList"], () => require("./cephCOSIDriverList"));
exports.CephCOSIDriverPatch = null;
utilities.lazyLoad(exports, ["CephCOSIDriverPatch"], () => require("./cephCOSIDriverPatch"));
exports.CephClient = null;
utilities.lazyLoad(exports, ["CephClient"], () => require("./cephClient"));
exports.CephClientList = null;
utilities.lazyLoad(exports, ["CephClientList"], () => require("./cephClientList"));
exports.CephClientPatch = null;
utilities.lazyLoad(exports, ["CephClientPatch"], () => require("./cephClientPatch"));
exports.CephCluster = null;
utilities.lazyLoad(exports, ["CephCluster"], () => require("./cephCluster"));
exports.CephClusterList = null;
utilities.lazyLoad(exports, ["CephClusterList"], () => require("./cephClusterList"));
exports.CephClusterPatch = null;
utilities.lazyLoad(exports, ["CephClusterPatch"], () => require("./cephClusterPatch"));
exports.CephFilesystem = null;
utilities.lazyLoad(exports, ["CephFilesystem"], () => require("./cephFilesystem"));
exports.CephFilesystemList = null;
utilities.lazyLoad(exports, ["CephFilesystemList"], () => require("./cephFilesystemList"));
exports.CephFilesystemMirror = null;
utilities.lazyLoad(exports, ["CephFilesystemMirror"], () => require("./cephFilesystemMirror"));
exports.CephFilesystemMirrorList = null;
utilities.lazyLoad(exports, ["CephFilesystemMirrorList"], () => require("./cephFilesystemMirrorList"));
exports.CephFilesystemMirrorPatch = null;
utilities.lazyLoad(exports, ["CephFilesystemMirrorPatch"], () => require("./cephFilesystemMirrorPatch"));
exports.CephFilesystemPatch = null;
utilities.lazyLoad(exports, ["CephFilesystemPatch"], () => require("./cephFilesystemPatch"));
exports.CephFilesystemSubVolumeGroup = null;
utilities.lazyLoad(exports, ["CephFilesystemSubVolumeGroup"], () => require("./cephFilesystemSubVolumeGroup"));
exports.CephFilesystemSubVolumeGroupList = null;
utilities.lazyLoad(exports, ["CephFilesystemSubVolumeGroupList"], () => require("./cephFilesystemSubVolumeGroupList"));
exports.CephFilesystemSubVolumeGroupPatch = null;
utilities.lazyLoad(exports, ["CephFilesystemSubVolumeGroupPatch"], () => require("./cephFilesystemSubVolumeGroupPatch"));
exports.CephNFS = null;
utilities.lazyLoad(exports, ["CephNFS"], () => require("./cephNFS"));
exports.CephNFSList = null;
utilities.lazyLoad(exports, ["CephNFSList"], () => require("./cephNFSList"));
exports.CephNFSPatch = null;
utilities.lazyLoad(exports, ["CephNFSPatch"], () => require("./cephNFSPatch"));
exports.CephObjectRealm = null;
utilities.lazyLoad(exports, ["CephObjectRealm"], () => require("./cephObjectRealm"));
exports.CephObjectRealmList = null;
utilities.lazyLoad(exports, ["CephObjectRealmList"], () => require("./cephObjectRealmList"));
exports.CephObjectRealmPatch = null;
utilities.lazyLoad(exports, ["CephObjectRealmPatch"], () => require("./cephObjectRealmPatch"));
exports.CephObjectStore = null;
utilities.lazyLoad(exports, ["CephObjectStore"], () => require("./cephObjectStore"));
exports.CephObjectStoreList = null;
utilities.lazyLoad(exports, ["CephObjectStoreList"], () => require("./cephObjectStoreList"));
exports.CephObjectStorePatch = null;
utilities.lazyLoad(exports, ["CephObjectStorePatch"], () => require("./cephObjectStorePatch"));
exports.CephObjectStoreUser = null;
utilities.lazyLoad(exports, ["CephObjectStoreUser"], () => require("./cephObjectStoreUser"));
exports.CephObjectStoreUserList = null;
utilities.lazyLoad(exports, ["CephObjectStoreUserList"], () => require("./cephObjectStoreUserList"));
exports.CephObjectStoreUserPatch = null;
utilities.lazyLoad(exports, ["CephObjectStoreUserPatch"], () => require("./cephObjectStoreUserPatch"));
exports.CephObjectZone = null;
utilities.lazyLoad(exports, ["CephObjectZone"], () => require("./cephObjectZone"));
exports.CephObjectZoneGroup = null;
utilities.lazyLoad(exports, ["CephObjectZoneGroup"], () => require("./cephObjectZoneGroup"));
exports.CephObjectZoneGroupList = null;
utilities.lazyLoad(exports, ["CephObjectZoneGroupList"], () => require("./cephObjectZoneGroupList"));
exports.CephObjectZoneGroupPatch = null;
utilities.lazyLoad(exports, ["CephObjectZoneGroupPatch"], () => require("./cephObjectZoneGroupPatch"));
exports.CephObjectZoneList = null;
utilities.lazyLoad(exports, ["CephObjectZoneList"], () => require("./cephObjectZoneList"));
exports.CephObjectZonePatch = null;
utilities.lazyLoad(exports, ["CephObjectZonePatch"], () => require("./cephObjectZonePatch"));
exports.CephRBDMirror = null;
utilities.lazyLoad(exports, ["CephRBDMirror"], () => require("./cephRBDMirror"));
exports.CephRBDMirrorList = null;
utilities.lazyLoad(exports, ["CephRBDMirrorList"], () => require("./cephRBDMirrorList"));
exports.CephRBDMirrorPatch = null;
utilities.lazyLoad(exports, ["CephRBDMirrorPatch"], () => require("./cephRBDMirrorPatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:ceph.rook.io/v1:CephBlockPool":
                return new exports.CephBlockPool(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBlockPoolList":
                return new exports.CephBlockPoolList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBlockPoolPatch":
                return new exports.CephBlockPoolPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBlockPoolRadosNamespace":
                return new exports.CephBlockPoolRadosNamespace(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBlockPoolRadosNamespaceList":
                return new exports.CephBlockPoolRadosNamespaceList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBlockPoolRadosNamespacePatch":
                return new exports.CephBlockPoolRadosNamespacePatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBucketNotification":
                return new exports.CephBucketNotification(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBucketNotificationList":
                return new exports.CephBucketNotificationList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBucketNotificationPatch":
                return new exports.CephBucketNotificationPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBucketTopic":
                return new exports.CephBucketTopic(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBucketTopicList":
                return new exports.CephBucketTopicList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephBucketTopicPatch":
                return new exports.CephBucketTopicPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephCOSIDriver":
                return new exports.CephCOSIDriver(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephCOSIDriverList":
                return new exports.CephCOSIDriverList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephCOSIDriverPatch":
                return new exports.CephCOSIDriverPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephClient":
                return new exports.CephClient(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephClientList":
                return new exports.CephClientList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephClientPatch":
                return new exports.CephClientPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephCluster":
                return new exports.CephCluster(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephClusterList":
                return new exports.CephClusterList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephClusterPatch":
                return new exports.CephClusterPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystem":
                return new exports.CephFilesystem(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystemList":
                return new exports.CephFilesystemList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystemMirror":
                return new exports.CephFilesystemMirror(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystemMirrorList":
                return new exports.CephFilesystemMirrorList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystemMirrorPatch":
                return new exports.CephFilesystemMirrorPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystemPatch":
                return new exports.CephFilesystemPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystemSubVolumeGroup":
                return new exports.CephFilesystemSubVolumeGroup(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystemSubVolumeGroupList":
                return new exports.CephFilesystemSubVolumeGroupList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephFilesystemSubVolumeGroupPatch":
                return new exports.CephFilesystemSubVolumeGroupPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephNFS":
                return new exports.CephNFS(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephNFSList":
                return new exports.CephNFSList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephNFSPatch":
                return new exports.CephNFSPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectRealm":
                return new exports.CephObjectRealm(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectRealmList":
                return new exports.CephObjectRealmList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectRealmPatch":
                return new exports.CephObjectRealmPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectStore":
                return new exports.CephObjectStore(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectStoreList":
                return new exports.CephObjectStoreList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectStorePatch":
                return new exports.CephObjectStorePatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectStoreUser":
                return new exports.CephObjectStoreUser(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectStoreUserList":
                return new exports.CephObjectStoreUserList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectStoreUserPatch":
                return new exports.CephObjectStoreUserPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectZone":
                return new exports.CephObjectZone(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectZoneGroup":
                return new exports.CephObjectZoneGroup(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectZoneGroupList":
                return new exports.CephObjectZoneGroupList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectZoneGroupPatch":
                return new exports.CephObjectZoneGroupPatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectZoneList":
                return new exports.CephObjectZoneList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephObjectZonePatch":
                return new exports.CephObjectZonePatch(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephRBDMirror":
                return new exports.CephRBDMirror(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephRBDMirrorList":
                return new exports.CephRBDMirrorList(name, undefined, { urn });
            case "kubernetes:ceph.rook.io/v1:CephRBDMirrorPatch":
                return new exports.CephRBDMirrorPatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "ceph.rook.io/v1", _module);
//# sourceMappingURL=index.js.map