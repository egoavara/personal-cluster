import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export declare namespace ceph {
    namespace v1 {
        /**
         * CephBlockPool represents a Ceph Storage Pool
         */
        interface CephBlockPool {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephBlockPool">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpec>;
            /**
             * CephBlockPoolStatus represents the mirroring status of Ceph Storage Pool
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * CephBlockPoolRadosNamespace represents a Ceph BlockPool Rados Namespace
         */
        interface CephBlockPoolRadosNamespace {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephBlockPoolRadosNamespace">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephBlockPoolRadosNamespaceSpec>;
            /**
             * Status represents the status of a CephBlockPool Rados Namespace
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Spec represents the specification of a Ceph BlockPool Rados Namespace
         */
        interface CephBlockPoolRadosNamespaceSpec {
            /**
             * BlockPoolName is the name of Ceph BlockPool. Typically it's the name of
             * the CephBlockPool CR.
             */
            blockPoolName?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephBlockPoolRadosNamespaceSpecMirroring>;
            /**
             * The name of the CephBlockPoolRadosNamespaceSpec namespace. If not set, the default is the name of the CR.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Mirroring configuration of CephBlockPoolRadosNamespace
         */
        interface CephBlockPoolRadosNamespaceSpecMirroring {
            /**
             * Mode is the mirroring mode; either pool or image
             */
            mode?: pulumi.Input<string>;
            /**
             * RemoteNamespace is the name of the CephBlockPoolRadosNamespace on the secondary cluster CephBlockPool
             */
            remoteNamespace?: pulumi.Input<string>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBlockPoolRadosNamespaceSpecMirroringSnapshotSchedules>[]>;
        }
        /**
         * Mirroring configuration of CephBlockPoolRadosNamespace
         */
        interface CephBlockPoolRadosNamespaceSpecMirroringPatch {
            /**
             * Mode is the mirroring mode; either pool or image
             */
            mode?: pulumi.Input<string>;
            /**
             * RemoteNamespace is the name of the CephBlockPoolRadosNamespace on the secondary cluster CephBlockPool
             */
            remoteNamespace?: pulumi.Input<string>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBlockPoolRadosNamespaceSpecMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephBlockPoolRadosNamespaceSpecMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephBlockPoolRadosNamespaceSpecMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * Spec represents the specification of a Ceph BlockPool Rados Namespace
         */
        interface CephBlockPoolRadosNamespaceSpecPatch {
            /**
             * BlockPoolName is the name of Ceph BlockPool. Typically it's the name of
             * the CephBlockPool CR.
             */
            blockPoolName?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephBlockPoolRadosNamespaceSpecMirroringPatch>;
            /**
             * The name of the CephBlockPoolRadosNamespaceSpec namespace. If not set, the default is the name of the CR.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * NamedBlockPoolSpec allows a block pool to be created with a non-default name.
         * This is more specific than the NamedPoolSpec so we get schema validation on the
         * allowed pool names that can be specified.
         */
        interface CephBlockPoolSpec {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecErasureCoded>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecMirroring>;
            /**
             * The desired name of the pool if different from the CephBlockPool CR name.
             */
            name?: pulumi.Input<string>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecQuotas>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecReplicated>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The erasure code settings
         */
        interface CephBlockPoolSpecErasureCoded {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The erasure code settings
         */
        interface CephBlockPoolSpecErasureCodedPatch {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The mirroring settings
         */
        interface CephBlockPoolSpecMirroring {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecMirroringPeers>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecMirroringSnapshotSchedules>[]>;
        }
        /**
         * The mirroring settings
         */
        interface CephBlockPoolSpecMirroringPatch {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecMirroringPeersPatch>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephBlockPoolSpecMirroringPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephBlockPoolSpecMirroringPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephBlockPoolSpecMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephBlockPoolSpecMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * NamedBlockPoolSpec allows a block pool to be created with a non-default name.
         * This is more specific than the NamedPoolSpec so we get schema validation on the
         * allowed pool names that can be specified.
         */
        interface CephBlockPoolSpecPatch {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecErasureCodedPatch>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecMirroringPatch>;
            /**
             * The desired name of the pool if different from the CephBlockPool CR name.
             */
            name?: pulumi.Input<string>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecQuotasPatch>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecReplicatedPatch>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The quota settings
         */
        interface CephBlockPoolSpecQuotas {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The quota settings
         */
        interface CephBlockPoolSpecQuotasPatch {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephBlockPoolSpecReplicated {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecReplicatedHybridStorage>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephBlockPoolSpecReplicatedHybridStorage {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephBlockPoolSpecReplicatedHybridStoragePatch {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephBlockPoolSpecReplicatedPatch {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephBlockPoolSpecReplicatedHybridStoragePatch>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * CephBucketNotification represents a Bucket Notifications
         */
        interface CephBucketNotification {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephBucketNotification">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpec>;
            /**
             * Status represents the status of an object
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * BucketNotificationSpec represent the spec of a Bucket Notification
         */
        interface CephBucketNotificationSpec {
            /**
             * List of events that should trigger the notification
             */
            events?: pulumi.Input<pulumi.Input<string>[]>;
            filter?: pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpecFilter>;
            /**
             * The name of the topic associated with this notification
             */
            topic?: pulumi.Input<string>;
        }
        /**
         * Spec of notification filter
         */
        interface CephBucketNotificationSpecFilter {
            /**
             * Filters based on the object's key
             */
            keyFilters?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpecFilterKeyFilters>[]>;
            /**
             * Filters based on the object's metadata
             */
            metadataFilters?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpecFilterMetadataFilters>[]>;
            /**
             * Filters based on the object's tags
             */
            tagFilters?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpecFilterTagFilters>[]>;
        }
        /**
         * NotificationKeyFilterRule represent a single key rule in the Notification Filter spec
         */
        interface CephBucketNotificationSpecFilterKeyFilters {
            /**
             * Name of the filter - prefix/suffix/regex
             */
            name?: pulumi.Input<string>;
            /**
             * Value to filter on
             */
            value?: pulumi.Input<string>;
        }
        /**
         * NotificationKeyFilterRule represent a single key rule in the Notification Filter spec
         */
        interface CephBucketNotificationSpecFilterKeyFiltersPatch {
            /**
             * Name of the filter - prefix/suffix/regex
             */
            name?: pulumi.Input<string>;
            /**
             * Value to filter on
             */
            value?: pulumi.Input<string>;
        }
        /**
         * NotificationFilterRule represent a single rule in the Notification Filter spec
         */
        interface CephBucketNotificationSpecFilterMetadataFilters {
            /**
             * Name of the metadata or tag
             */
            name?: pulumi.Input<string>;
            /**
             * Value to filter on
             */
            value?: pulumi.Input<string>;
        }
        /**
         * NotificationFilterRule represent a single rule in the Notification Filter spec
         */
        interface CephBucketNotificationSpecFilterMetadataFiltersPatch {
            /**
             * Name of the metadata or tag
             */
            name?: pulumi.Input<string>;
            /**
             * Value to filter on
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Spec of notification filter
         */
        interface CephBucketNotificationSpecFilterPatch {
            /**
             * Filters based on the object's key
             */
            keyFilters?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpecFilterKeyFiltersPatch>[]>;
            /**
             * Filters based on the object's metadata
             */
            metadataFilters?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpecFilterMetadataFiltersPatch>[]>;
            /**
             * Filters based on the object's tags
             */
            tagFilters?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpecFilterTagFiltersPatch>[]>;
        }
        /**
         * NotificationFilterRule represent a single rule in the Notification Filter spec
         */
        interface CephBucketNotificationSpecFilterTagFilters {
            /**
             * Name of the metadata or tag
             */
            name?: pulumi.Input<string>;
            /**
             * Value to filter on
             */
            value?: pulumi.Input<string>;
        }
        /**
         * NotificationFilterRule represent a single rule in the Notification Filter spec
         */
        interface CephBucketNotificationSpecFilterTagFiltersPatch {
            /**
             * Name of the metadata or tag
             */
            name?: pulumi.Input<string>;
            /**
             * Value to filter on
             */
            value?: pulumi.Input<string>;
        }
        /**
         * BucketNotificationSpec represent the spec of a Bucket Notification
         */
        interface CephBucketNotificationSpecPatch {
            /**
             * List of events that should trigger the notification
             */
            events?: pulumi.Input<pulumi.Input<string>[]>;
            filter?: pulumi.Input<inputs.ceph.v1.CephBucketNotificationSpecFilterPatch>;
            /**
             * The name of the topic associated with this notification
             */
            topic?: pulumi.Input<string>;
        }
        /**
         * CephBucketTopic represents a Ceph Object Topic for Bucket Notifications
         */
        interface CephBucketTopic {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephBucketTopic">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpec>;
            /**
             * BucketTopicStatus represents the Status of a CephBucketTopic
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * BucketTopicSpec represent the spec of a Bucket Topic
         */
        interface CephBucketTopicSpec {
            endpoint?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpecEndpoint>;
            /**
             * The name of the object store on which to define the topic
             */
            objectStoreName?: pulumi.Input<string>;
            /**
             * The namespace of the object store on which to define the topic
             */
            objectStoreNamespace?: pulumi.Input<string>;
            /**
             * Data which is sent in each event
             */
            opaqueData?: pulumi.Input<string>;
            /**
             * Indication whether notifications to this endpoint are persistent or not
             */
            persistent?: pulumi.Input<boolean>;
        }
        /**
         * Contains the endpoint spec of the topic
         */
        interface CephBucketTopicSpecEndpoint {
            amqp?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpecEndpointAmqp>;
            http?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpecEndpointHttp>;
            kafka?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpecEndpointKafka>;
        }
        /**
         * Spec of AMQP endpoint
         */
        interface CephBucketTopicSpecEndpointAmqp {
            /**
             * The ack level required for this topic (none/broker/routeable)
             */
            ackLevel?: pulumi.Input<string>;
            /**
             * Indicate whether the server certificate is validated by the client or not
             */
            disableVerifySSL?: pulumi.Input<boolean>;
            /**
             * Name of the exchange that is used to route messages based on topics
             */
            exchange?: pulumi.Input<string>;
            /**
             * The URI of the AMQP endpoint to push notification to
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * Spec of AMQP endpoint
         */
        interface CephBucketTopicSpecEndpointAmqpPatch {
            /**
             * The ack level required for this topic (none/broker/routeable)
             */
            ackLevel?: pulumi.Input<string>;
            /**
             * Indicate whether the server certificate is validated by the client or not
             */
            disableVerifySSL?: pulumi.Input<boolean>;
            /**
             * Name of the exchange that is used to route messages based on topics
             */
            exchange?: pulumi.Input<string>;
            /**
             * The URI of the AMQP endpoint to push notification to
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * Spec of HTTP endpoint
         */
        interface CephBucketTopicSpecEndpointHttp {
            /**
             * Indicate whether the server certificate is validated by the client or not
             */
            disableVerifySSL?: pulumi.Input<boolean>;
            /**
             * Send the notifications with the CloudEvents header: https://github.com/cloudevents/spec/blob/main/cloudevents/adapters/aws-s3.md
             */
            sendCloudEvents?: pulumi.Input<boolean>;
            /**
             * The URI of the HTTP endpoint to push notification to
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * Spec of HTTP endpoint
         */
        interface CephBucketTopicSpecEndpointHttpPatch {
            /**
             * Indicate whether the server certificate is validated by the client or not
             */
            disableVerifySSL?: pulumi.Input<boolean>;
            /**
             * Send the notifications with the CloudEvents header: https://github.com/cloudevents/spec/blob/main/cloudevents/adapters/aws-s3.md
             */
            sendCloudEvents?: pulumi.Input<boolean>;
            /**
             * The URI of the HTTP endpoint to push notification to
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * Spec of Kafka endpoint
         */
        interface CephBucketTopicSpecEndpointKafka {
            /**
             * The ack level required for this topic (none/broker)
             */
            ackLevel?: pulumi.Input<string>;
            /**
             * Indicate whether the server certificate is validated by the client or not
             */
            disableVerifySSL?: pulumi.Input<boolean>;
            /**
             * The URI of the Kafka endpoint to push notification to
             */
            uri?: pulumi.Input<string>;
            /**
             * Indicate whether to use SSL when communicating with the broker
             */
            useSSL?: pulumi.Input<boolean>;
        }
        /**
         * Spec of Kafka endpoint
         */
        interface CephBucketTopicSpecEndpointKafkaPatch {
            /**
             * The ack level required for this topic (none/broker)
             */
            ackLevel?: pulumi.Input<string>;
            /**
             * Indicate whether the server certificate is validated by the client or not
             */
            disableVerifySSL?: pulumi.Input<boolean>;
            /**
             * The URI of the Kafka endpoint to push notification to
             */
            uri?: pulumi.Input<string>;
            /**
             * Indicate whether to use SSL when communicating with the broker
             */
            useSSL?: pulumi.Input<boolean>;
        }
        /**
         * Contains the endpoint spec of the topic
         */
        interface CephBucketTopicSpecEndpointPatch {
            amqp?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpecEndpointAmqpPatch>;
            http?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpecEndpointHttpPatch>;
            kafka?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpecEndpointKafkaPatch>;
        }
        /**
         * BucketTopicSpec represent the spec of a Bucket Topic
         */
        interface CephBucketTopicSpecPatch {
            endpoint?: pulumi.Input<inputs.ceph.v1.CephBucketTopicSpecEndpointPatch>;
            /**
             * The name of the object store on which to define the topic
             */
            objectStoreName?: pulumi.Input<string>;
            /**
             * The namespace of the object store on which to define the topic
             */
            objectStoreNamespace?: pulumi.Input<string>;
            /**
             * Data which is sent in each event
             */
            opaqueData?: pulumi.Input<string>;
            /**
             * Indication whether notifications to this endpoint are persistent or not
             */
            persistent?: pulumi.Input<boolean>;
        }
        /**
         * CephCOSIDriver represents the CRD for the Ceph COSI Driver Deployment
         */
        interface CephCOSIDriver {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephCOSIDriver">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpec>;
        }
        /**
         * Spec represents the specification of a Ceph COSI Driver
         */
        interface CephCOSIDriverSpec {
            /**
             * DeploymentStrategy is the strategy to use to deploy the COSI driver.
             */
            deploymentStrategy?: pulumi.Input<string>;
            /**
             * Image is the container image to run the Ceph COSI driver
             */
            image?: pulumi.Input<string>;
            /**
             * ObjectProvisionerImage is the container image to run the COSI driver sidecar
             */
            objectProvisionerImage?: pulumi.Input<string>;
            placement?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacement>;
            resources?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecResources>;
        }
        /**
         * Spec represents the specification of a Ceph COSI Driver
         */
        interface CephCOSIDriverSpecPatch {
            /**
             * DeploymentStrategy is the strategy to use to deploy the COSI driver.
             */
            deploymentStrategy?: pulumi.Input<string>;
            /**
             * Image is the container image to run the Ceph COSI driver
             */
            image?: pulumi.Input<string>;
            /**
             * ObjectProvisionerImage is the container image to run the COSI driver sidecar
             */
            objectProvisionerImage?: pulumi.Input<string>;
            placement?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPatch>;
            resources?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecResourcesPatch>;
        }
        interface CephCOSIDriverSpecPlacement {
            nodeAffinity?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinity>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementTolerations>[]>;
            topologySpreadConstraints?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementTopologySpreadConstraints>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface CephCOSIDriverSpecPlacementPatch {
            nodeAffinity?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPatch>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementTolerationsPatch>[]>;
            topologySpreadConstraints?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementTopologySpreadConstraintsPatch>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementTopologySpreadConstraints {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementTopologySpreadConstraintsLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            maxSkew?: pulumi.Input<number>;
            minDomains?: pulumi.Input<number>;
            nodeAffinityPolicy?: pulumi.Input<string>;
            nodeTaintsPolicy?: pulumi.Input<string>;
            topologyKey?: pulumi.Input<string>;
            whenUnsatisfiable?: pulumi.Input<string>;
        }
        interface CephCOSIDriverSpecPlacementTopologySpreadConstraintsLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephCOSIDriverSpecPlacementTopologySpreadConstraintsLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephCOSIDriverSpecPlacementTopologySpreadConstraintsPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecPlacementTopologySpreadConstraintsLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            maxSkew?: pulumi.Input<number>;
            minDomains?: pulumi.Input<number>;
            nodeAffinityPolicy?: pulumi.Input<string>;
            nodeTaintsPolicy?: pulumi.Input<string>;
            topologyKey?: pulumi.Input<string>;
            whenUnsatisfiable?: pulumi.Input<string>;
        }
        /**
         * Resources is the resource requirements for the COSI driver
         */
        interface CephCOSIDriverSpecResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecResourcesClaims>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface CephCOSIDriverSpecResourcesClaims {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface CephCOSIDriverSpecResourcesClaimsPatch {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * Resources is the resource requirements for the COSI driver
         */
        interface CephCOSIDriverSpecResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephCOSIDriverSpecResourcesClaimsPatch>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * CephClient represents a Ceph Client
         */
        interface CephClient {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephClient">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephClientSpec>;
            /**
             * Status represents the status of a Ceph Client
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Spec represents the specification of a Ceph Client
         */
        interface CephClientSpec {
            caps?: pulumi.Input<{
                [key: string]: any;
            }>;
            name?: pulumi.Input<string>;
        }
        /**
         * Spec represents the specification of a Ceph Client
         */
        interface CephClientSpecPatch {
            caps?: pulumi.Input<{
                [key: string]: any;
            }>;
            name?: pulumi.Input<string>;
        }
        /**
         * CephCluster is a Ceph storage cluster
         */
        interface CephCluster {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephCluster">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephClusterSpec>;
            /**
             * ClusterStatus represents the status of a Ceph cluster
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * ClusterSpec represents the specification of Ceph Cluster
         */
        interface CephClusterSpec {
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Ceph Config options
             */
            cephConfig?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            cephVersion?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCephVersion>;
            cleanupPolicy?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCleanupPolicy>;
            /**
             * ContinueUpgradeAfterChecksEvenIfNotHealthy defines if an upgrade should continue even if PGs are not clean
             */
            continueUpgradeAfterChecksEvenIfNotHealthy?: pulumi.Input<boolean>;
            crashCollector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCrashCollector>;
            csi?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCsi>;
            dashboard?: pulumi.Input<inputs.ceph.v1.CephClusterSpecDashboard>;
            /**
             * The path on the host where config and data can be persisted
             */
            dataDirHostPath?: pulumi.Input<string>;
            disruptionManagement?: pulumi.Input<inputs.ceph.v1.CephClusterSpecDisruptionManagement>;
            /**
             * Whether the Ceph Cluster is running external to this Kubernetes cluster
             * mon, mgr, osd, mds, and discover daemons will not be created for external clusters.
             */
            external?: pulumi.Input<{
                [key: string]: any;
            }>;
            healthCheck?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheck>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            logCollector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecLogCollector>;
            mgr?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMgr>;
            mon?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMon>;
            monitoring?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonitoring>;
            /**
             * Network related configuration
             */
            network?: pulumi.Input<{
                [key: string]: any;
            }>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * PriorityClassNames sets priority classes on components
             */
            priorityClassNames?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Remove the OSD that is out and safe to remove only if this option is true
             */
            removeOSDsIfOutAndSafeToRemove?: pulumi.Input<boolean>;
            /**
             * Resources set resource requests and limits
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            security?: pulumi.Input<inputs.ceph.v1.CephClusterSpecSecurity>;
            /**
             * SkipUpgradeChecks defines if an upgrade should be forced even if one of the check fails
             */
            skipUpgradeChecks?: pulumi.Input<boolean>;
            storage?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorage>;
            /**
             * UpgradeOSDRequiresHealthyPGs defines if OSD upgrade requires PGs are clean. If set to `true` OSD upgrade process won't start until PGs are healthy.
             * This configuration will be ignored if `skipUpgradeChecks` is `true`.
             * Default is false.
             */
            upgradeOSDRequiresHealthyPGs?: pulumi.Input<boolean>;
            /**
             * WaitTimeoutForHealthyOSDInMinutes defines the time the operator would wait before an OSD can be stopped for upgrade or restart.
             * If the timeout exceeds and OSD is not ok to stop, then the operator would skip upgrade for the current OSD and proceed with the next one
             * if `continueUpgradeAfterChecksEvenIfNotHealthy` is `false`. If `continueUpgradeAfterChecksEvenIfNotHealthy` is `true`, then operator would
             * continue with the upgrade of an OSD even if its not ok to stop after the timeout. This timeout won't be applied if `skipUpgradeChecks` is `true`.
             * The default wait timeout is 10 minutes.
             */
            waitTimeoutForHealthyOSDInMinutes?: pulumi.Input<number>;
        }
        /**
         * The version information that instructs Rook to orchestrate a particular version of Ceph.
         */
        interface CephClusterSpecCephVersion {
            /**
             * Whether to allow unsupported versions (do not set to true in production)
             */
            allowUnsupported?: pulumi.Input<boolean>;
            /**
             * Image is the container image used to launch the ceph daemons, such as quay.io/ceph/ceph:<tag>
             * The full list of images can be found at https://quay.io/repository/ceph/ceph?tab=tags
             */
            image?: pulumi.Input<string>;
            /**
             * ImagePullPolicy describes a policy for if/when to pull a container image
             * One of Always, Never, IfNotPresent.
             */
            imagePullPolicy?: pulumi.Input<string>;
        }
        /**
         * The version information that instructs Rook to orchestrate a particular version of Ceph.
         */
        interface CephClusterSpecCephVersionPatch {
            /**
             * Whether to allow unsupported versions (do not set to true in production)
             */
            allowUnsupported?: pulumi.Input<boolean>;
            /**
             * Image is the container image used to launch the ceph daemons, such as quay.io/ceph/ceph:<tag>
             * The full list of images can be found at https://quay.io/repository/ceph/ceph?tab=tags
             */
            image?: pulumi.Input<string>;
            /**
             * ImagePullPolicy describes a policy for if/when to pull a container image
             * One of Always, Never, IfNotPresent.
             */
            imagePullPolicy?: pulumi.Input<string>;
        }
        /**
         * Indicates user intent when deleting a cluster; blocks orchestration and should not be set if cluster
         * deletion is not imminent.
         */
        interface CephClusterSpecCleanupPolicy {
            /**
             * AllowUninstallWithVolumes defines whether we can proceed with the uninstall if they are RBD images still present
             */
            allowUninstallWithVolumes?: pulumi.Input<boolean>;
            /**
             * Confirmation represents the cleanup confirmation
             */
            confirmation?: pulumi.Input<string>;
            sanitizeDisks?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCleanupPolicySanitizeDisks>;
        }
        /**
         * Indicates user intent when deleting a cluster; blocks orchestration and should not be set if cluster
         * deletion is not imminent.
         */
        interface CephClusterSpecCleanupPolicyPatch {
            /**
             * AllowUninstallWithVolumes defines whether we can proceed with the uninstall if they are RBD images still present
             */
            allowUninstallWithVolumes?: pulumi.Input<boolean>;
            /**
             * Confirmation represents the cleanup confirmation
             */
            confirmation?: pulumi.Input<string>;
            sanitizeDisks?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCleanupPolicySanitizeDisksPatch>;
        }
        /**
         * SanitizeDisks represents way we sanitize disks
         */
        interface CephClusterSpecCleanupPolicySanitizeDisks {
            /**
             * DataSource is the data source to use to sanitize the disk with
             */
            dataSource?: pulumi.Input<string>;
            /**
             * Iteration is the number of pass to apply the sanitizing
             */
            iteration?: pulumi.Input<number>;
            /**
             * Method is the method we use to sanitize disks
             */
            method?: pulumi.Input<string>;
        }
        /**
         * SanitizeDisks represents way we sanitize disks
         */
        interface CephClusterSpecCleanupPolicySanitizeDisksPatch {
            /**
             * DataSource is the data source to use to sanitize the disk with
             */
            dataSource?: pulumi.Input<string>;
            /**
             * Iteration is the number of pass to apply the sanitizing
             */
            iteration?: pulumi.Input<number>;
            /**
             * Method is the method we use to sanitize disks
             */
            method?: pulumi.Input<string>;
        }
        /**
         * A spec for the crash controller
         */
        interface CephClusterSpecCrashCollector {
            /**
             * DaysToRetain represents the number of days to retain crash until they get pruned
             */
            daysToRetain?: pulumi.Input<number>;
            /**
             * Disable determines whether we should enable the crash collector
             */
            disable?: pulumi.Input<boolean>;
        }
        /**
         * A spec for the crash controller
         */
        interface CephClusterSpecCrashCollectorPatch {
            /**
             * DaysToRetain represents the number of days to retain crash until they get pruned
             */
            daysToRetain?: pulumi.Input<number>;
            /**
             * Disable determines whether we should enable the crash collector
             */
            disable?: pulumi.Input<boolean>;
        }
        /**
         * CSI Driver Options applied per cluster.
         */
        interface CephClusterSpecCsi {
            cephfs?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCsiCephfs>;
            readAffinity?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCsiReadAffinity>;
        }
        /**
         * CephFS defines CSI Driver settings for CephFS driver.
         */
        interface CephClusterSpecCsiCephfs {
            /**
             * FuseMountOptions defines the mount options for ceph fuse mounter.
             */
            fuseMountOptions?: pulumi.Input<string>;
            /**
             * KernelMountOptions defines the mount options for kernel mounter.
             */
            kernelMountOptions?: pulumi.Input<string>;
        }
        /**
         * CephFS defines CSI Driver settings for CephFS driver.
         */
        interface CephClusterSpecCsiCephfsPatch {
            /**
             * FuseMountOptions defines the mount options for ceph fuse mounter.
             */
            fuseMountOptions?: pulumi.Input<string>;
            /**
             * KernelMountOptions defines the mount options for kernel mounter.
             */
            kernelMountOptions?: pulumi.Input<string>;
        }
        /**
         * CSI Driver Options applied per cluster.
         */
        interface CephClusterSpecCsiPatch {
            cephfs?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCsiCephfsPatch>;
            readAffinity?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCsiReadAffinityPatch>;
        }
        /**
         * ReadAffinity defines the read affinity settings for CSI driver.
         */
        interface CephClusterSpecCsiReadAffinity {
            /**
             * CrushLocationLabels defines which node labels to use
             * as CRUSH location. This should correspond to the values set in
             * the CRUSH map.
             */
            crushLocationLabels?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Enables read affinity for CSI driver.
             */
            enabled?: pulumi.Input<boolean>;
        }
        /**
         * ReadAffinity defines the read affinity settings for CSI driver.
         */
        interface CephClusterSpecCsiReadAffinityPatch {
            /**
             * CrushLocationLabels defines which node labels to use
             * as CRUSH location. This should correspond to the values set in
             * the CRUSH map.
             */
            crushLocationLabels?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Enables read affinity for CSI driver.
             */
            enabled?: pulumi.Input<boolean>;
        }
        /**
         * Dashboard settings
         */
        interface CephClusterSpecDashboard {
            /**
             * Enabled determines whether to enable the dashboard
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Port is the dashboard webserver port
             */
            port?: pulumi.Input<number>;
            /**
             * Endpoint for the Prometheus host
             */
            prometheusEndpoint?: pulumi.Input<string>;
            /**
             * Whether to verify the ssl endpoint for prometheus. Set to false for a self-signed cert.
             */
            prometheusEndpointSSLVerify?: pulumi.Input<boolean>;
            /**
             * SSL determines whether SSL should be used
             */
            ssl?: pulumi.Input<boolean>;
            /**
             * URLPrefix is a prefix for all URLs to use the dashboard with a reverse proxy
             */
            urlPrefix?: pulumi.Input<string>;
        }
        /**
         * Dashboard settings
         */
        interface CephClusterSpecDashboardPatch {
            /**
             * Enabled determines whether to enable the dashboard
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Port is the dashboard webserver port
             */
            port?: pulumi.Input<number>;
            /**
             * Endpoint for the Prometheus host
             */
            prometheusEndpoint?: pulumi.Input<string>;
            /**
             * Whether to verify the ssl endpoint for prometheus. Set to false for a self-signed cert.
             */
            prometheusEndpointSSLVerify?: pulumi.Input<boolean>;
            /**
             * SSL determines whether SSL should be used
             */
            ssl?: pulumi.Input<boolean>;
            /**
             * URLPrefix is a prefix for all URLs to use the dashboard with a reverse proxy
             */
            urlPrefix?: pulumi.Input<string>;
        }
        /**
         * A spec for configuring disruption management.
         */
        interface CephClusterSpecDisruptionManagement {
            /**
             * Deprecated. Namespace to look for MDBs by the machineDisruptionBudgetController
             */
            machineDisruptionBudgetNamespace?: pulumi.Input<string>;
            /**
             * Deprecated. This enables management of machinedisruptionbudgets.
             */
            manageMachineDisruptionBudgets?: pulumi.Input<boolean>;
            /**
             * This enables management of poddisruptionbudgets
             */
            managePodBudgets?: pulumi.Input<boolean>;
            /**
             * OSDMaintenanceTimeout sets how many additional minutes the DOWN/OUT interval is for drained failure domains
             * it only works if managePodBudgets is true.
             * the default is 30 minutes
             */
            osdMaintenanceTimeout?: pulumi.Input<number>;
            /**
             * PGHealthCheckTimeout is the time (in minutes) that the operator will wait for the placement groups to become
             * healthy (active+clean) after a drain was completed and OSDs came back up. Rook will continue with the next drain
             * if the timeout exceeds. It only works if managePodBudgets is true.
             * No values or 0 means that the operator will wait until the placement groups are healthy before unblocking the next drain.
             */
            pgHealthCheckTimeout?: pulumi.Input<number>;
            /**
             * PgHealthyRegex is the regular expression that is used to determine which PG states should be considered healthy.
             * The default is `^(active\+clean|active\+clean\+scrubbing|active\+clean\+scrubbing\+deep)$`
             */
            pgHealthyRegex?: pulumi.Input<string>;
        }
        /**
         * A spec for configuring disruption management.
         */
        interface CephClusterSpecDisruptionManagementPatch {
            /**
             * Deprecated. Namespace to look for MDBs by the machineDisruptionBudgetController
             */
            machineDisruptionBudgetNamespace?: pulumi.Input<string>;
            /**
             * Deprecated. This enables management of machinedisruptionbudgets.
             */
            manageMachineDisruptionBudgets?: pulumi.Input<boolean>;
            /**
             * This enables management of poddisruptionbudgets
             */
            managePodBudgets?: pulumi.Input<boolean>;
            /**
             * OSDMaintenanceTimeout sets how many additional minutes the DOWN/OUT interval is for drained failure domains
             * it only works if managePodBudgets is true.
             * the default is 30 minutes
             */
            osdMaintenanceTimeout?: pulumi.Input<number>;
            /**
             * PGHealthCheckTimeout is the time (in minutes) that the operator will wait for the placement groups to become
             * healthy (active+clean) after a drain was completed and OSDs came back up. Rook will continue with the next drain
             * if the timeout exceeds. It only works if managePodBudgets is true.
             * No values or 0 means that the operator will wait until the placement groups are healthy before unblocking the next drain.
             */
            pgHealthCheckTimeout?: pulumi.Input<number>;
            /**
             * PgHealthyRegex is the regular expression that is used to determine which PG states should be considered healthy.
             * The default is `^(active\+clean|active\+clean\+scrubbing|active\+clean\+scrubbing\+deep)$`
             */
            pgHealthyRegex?: pulumi.Input<string>;
        }
        /**
         * Internal daemon healthchecks and liveness probe
         */
        interface CephClusterSpecHealthCheck {
            daemonHealth?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckDaemonHealth>;
            /**
             * LivenessProbe allows changing the livenessProbe configuration for a given daemon
             */
            livenessProbe?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * StartupProbe allows changing the startupProbe configuration for a given daemon
             */
            startupProbe?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * DaemonHealth is the health check for a given daemon
         */
        interface CephClusterSpecHealthCheckDaemonHealth {
            mon?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckDaemonHealthMon>;
            osd?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckDaemonHealthOsd>;
            status?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckDaemonHealthStatus>;
        }
        /**
         * Monitor represents the health check settings for the Ceph monitor
         */
        interface CephClusterSpecHealthCheckDaemonHealthMon {
            disabled?: pulumi.Input<boolean>;
            /**
             * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
             */
            interval?: pulumi.Input<string>;
            timeout?: pulumi.Input<string>;
        }
        /**
         * Monitor represents the health check settings for the Ceph monitor
         */
        interface CephClusterSpecHealthCheckDaemonHealthMonPatch {
            disabled?: pulumi.Input<boolean>;
            /**
             * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
             */
            interval?: pulumi.Input<string>;
            timeout?: pulumi.Input<string>;
        }
        /**
         * ObjectStorageDaemon represents the health check settings for the Ceph OSDs
         */
        interface CephClusterSpecHealthCheckDaemonHealthOsd {
            disabled?: pulumi.Input<boolean>;
            /**
             * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
             */
            interval?: pulumi.Input<string>;
            timeout?: pulumi.Input<string>;
        }
        /**
         * ObjectStorageDaemon represents the health check settings for the Ceph OSDs
         */
        interface CephClusterSpecHealthCheckDaemonHealthOsdPatch {
            disabled?: pulumi.Input<boolean>;
            /**
             * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
             */
            interval?: pulumi.Input<string>;
            timeout?: pulumi.Input<string>;
        }
        /**
         * DaemonHealth is the health check for a given daemon
         */
        interface CephClusterSpecHealthCheckDaemonHealthPatch {
            mon?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckDaemonHealthMonPatch>;
            osd?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckDaemonHealthOsdPatch>;
            status?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckDaemonHealthStatusPatch>;
        }
        /**
         * Status represents the health check settings for the Ceph health
         */
        interface CephClusterSpecHealthCheckDaemonHealthStatus {
            disabled?: pulumi.Input<boolean>;
            /**
             * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
             */
            interval?: pulumi.Input<string>;
            timeout?: pulumi.Input<string>;
        }
        /**
         * Status represents the health check settings for the Ceph health
         */
        interface CephClusterSpecHealthCheckDaemonHealthStatusPatch {
            disabled?: pulumi.Input<boolean>;
            /**
             * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
             */
            interval?: pulumi.Input<string>;
            timeout?: pulumi.Input<string>;
        }
        /**
         * Internal daemon healthchecks and liveness probe
         */
        interface CephClusterSpecHealthCheckPatch {
            daemonHealth?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckDaemonHealthPatch>;
            /**
             * LivenessProbe allows changing the livenessProbe configuration for a given daemon
             */
            livenessProbe?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * StartupProbe allows changing the startupProbe configuration for a given daemon
             */
            startupProbe?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * Logging represents loggings settings
         */
        interface CephClusterSpecLogCollector {
            /**
             * Enabled represents whether the log collector is enabled
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * MaxLogSize is the maximum size of the log per ceph daemons. Must be at least 1M.
             */
            maxLogSize?: pulumi.Input<number | string>;
            /**
             * Periodicity is the periodicity of the log rotation.
             */
            periodicity?: pulumi.Input<string>;
        }
        /**
         * Logging represents loggings settings
         */
        interface CephClusterSpecLogCollectorPatch {
            /**
             * Enabled represents whether the log collector is enabled
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * MaxLogSize is the maximum size of the log per ceph daemons. Must be at least 1M.
             */
            maxLogSize?: pulumi.Input<number | string>;
            /**
             * Periodicity is the periodicity of the log rotation.
             */
            periodicity?: pulumi.Input<string>;
        }
        /**
         * A spec for mgr related options
         */
        interface CephClusterSpecMgr {
            /**
             * AllowMultiplePerNode allows to run multiple managers on the same node (not recommended)
             */
            allowMultiplePerNode?: pulumi.Input<boolean>;
            /**
             * Count is the number of manager daemons to run
             */
            count?: pulumi.Input<number>;
            /**
             * Modules is the list of ceph manager modules to enable/disable
             */
            modules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecMgrModules>[]>;
        }
        /**
         * Module represents mgr modules that the user wants to enable or disable
         */
        interface CephClusterSpecMgrModules {
            /**
             * Enabled determines whether a module should be enabled or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Name is the name of the ceph manager module
             */
            name?: pulumi.Input<string>;
            settings?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMgrModulesSettings>;
        }
        /**
         * Module represents mgr modules that the user wants to enable or disable
         */
        interface CephClusterSpecMgrModulesPatch {
            /**
             * Enabled determines whether a module should be enabled or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Name is the name of the ceph manager module
             */
            name?: pulumi.Input<string>;
            settings?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMgrModulesSettingsPatch>;
        }
        /**
         * Settings to further configure the module
         */
        interface CephClusterSpecMgrModulesSettings {
            /**
             * BalancerMode sets the `balancer` module with different modes like `upmap`, `crush-compact` etc
             */
            balancerMode?: pulumi.Input<string>;
        }
        /**
         * Settings to further configure the module
         */
        interface CephClusterSpecMgrModulesSettingsPatch {
            /**
             * BalancerMode sets the `balancer` module with different modes like `upmap`, `crush-compact` etc
             */
            balancerMode?: pulumi.Input<string>;
        }
        /**
         * A spec for mgr related options
         */
        interface CephClusterSpecMgrPatch {
            /**
             * AllowMultiplePerNode allows to run multiple managers on the same node (not recommended)
             */
            allowMultiplePerNode?: pulumi.Input<boolean>;
            /**
             * Count is the number of manager daemons to run
             */
            count?: pulumi.Input<number>;
            /**
             * Modules is the list of ceph manager modules to enable/disable
             */
            modules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecMgrModulesPatch>[]>;
        }
        /**
         * A spec for mon related options
         */
        interface CephClusterSpecMon {
            /**
             * AllowMultiplePerNode determines if we can run multiple monitors on the same node (not recommended)
             */
            allowMultiplePerNode?: pulumi.Input<boolean>;
            /**
             * Count is the number of Ceph monitors
             */
            count?: pulumi.Input<number>;
            failureDomainLabel?: pulumi.Input<string>;
            stretchCluster?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonStretchCluster>;
            /**
             * VolumeClaimTemplate is the PVC definition
             */
            volumeClaimTemplate?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Zones are specified when we want to provide zonal awareness to mons
             */
            zones?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecMonZones>[]>;
        }
        /**
         * A spec for mon related options
         */
        interface CephClusterSpecMonPatch {
            /**
             * AllowMultiplePerNode determines if we can run multiple monitors on the same node (not recommended)
             */
            allowMultiplePerNode?: pulumi.Input<boolean>;
            /**
             * Count is the number of Ceph monitors
             */
            count?: pulumi.Input<number>;
            failureDomainLabel?: pulumi.Input<string>;
            stretchCluster?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonStretchClusterPatch>;
            /**
             * VolumeClaimTemplate is the PVC definition
             */
            volumeClaimTemplate?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Zones are specified when we want to provide zonal awareness to mons
             */
            zones?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecMonZonesPatch>[]>;
        }
        /**
         * StretchCluster is the stretch cluster specification
         */
        interface CephClusterSpecMonStretchCluster {
            /**
             * FailureDomainLabel the failure domain name (e,g: zone)
             */
            failureDomainLabel?: pulumi.Input<string>;
            /**
             * SubFailureDomain is the failure domain within a zone
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * Zones is the list of zones
             */
            zones?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecMonStretchClusterZones>[]>;
        }
        /**
         * StretchCluster is the stretch cluster specification
         */
        interface CephClusterSpecMonStretchClusterPatch {
            /**
             * FailureDomainLabel the failure domain name (e,g: zone)
             */
            failureDomainLabel?: pulumi.Input<string>;
            /**
             * SubFailureDomain is the failure domain within a zone
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * Zones is the list of zones
             */
            zones?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecMonStretchClusterZonesPatch>[]>;
        }
        /**
         * MonZoneSpec represents the specification of a zone in a Ceph Cluster
         */
        interface CephClusterSpecMonStretchClusterZones {
            /**
             * Arbiter determines if the zone contains the arbiter used for stretch cluster mode
             */
            arbiter?: pulumi.Input<boolean>;
            /**
             * Name is the name of the zone
             */
            name?: pulumi.Input<string>;
            /**
             * VolumeClaimTemplate is the PVC template
             */
            volumeClaimTemplate?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * MonZoneSpec represents the specification of a zone in a Ceph Cluster
         */
        interface CephClusterSpecMonStretchClusterZonesPatch {
            /**
             * Arbiter determines if the zone contains the arbiter used for stretch cluster mode
             */
            arbiter?: pulumi.Input<boolean>;
            /**
             * Name is the name of the zone
             */
            name?: pulumi.Input<string>;
            /**
             * VolumeClaimTemplate is the PVC template
             */
            volumeClaimTemplate?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * MonZoneSpec represents the specification of a zone in a Ceph Cluster
         */
        interface CephClusterSpecMonZones {
            /**
             * Arbiter determines if the zone contains the arbiter used for stretch cluster mode
             */
            arbiter?: pulumi.Input<boolean>;
            /**
             * Name is the name of the zone
             */
            name?: pulumi.Input<string>;
            /**
             * VolumeClaimTemplate is the PVC template
             */
            volumeClaimTemplate?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * MonZoneSpec represents the specification of a zone in a Ceph Cluster
         */
        interface CephClusterSpecMonZonesPatch {
            /**
             * Arbiter determines if the zone contains the arbiter used for stretch cluster mode
             */
            arbiter?: pulumi.Input<boolean>;
            /**
             * Name is the name of the zone
             */
            name?: pulumi.Input<string>;
            /**
             * VolumeClaimTemplate is the PVC template
             */
            volumeClaimTemplate?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Prometheus based Monitoring settings
         */
        interface CephClusterSpecMonitoring {
            /**
             * Enabled determines whether to create the prometheus rules for the ceph cluster. If true, the prometheus
             * types must exist or the creation will fail. Default is false.
             */
            enabled?: pulumi.Input<boolean>;
            exporter?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonitoringExporter>;
            /**
             * ExternalMgrEndpoints points to an existing Ceph prometheus exporter endpoint
             */
            externalMgrEndpoints?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecMonitoringExternalMgrEndpoints>[]>;
            /**
             * ExternalMgrPrometheusPort Prometheus exporter port
             */
            externalMgrPrometheusPort?: pulumi.Input<number>;
            /**
             * Interval determines prometheus scrape interval
             */
            interval?: pulumi.Input<string>;
            /**
             * Whether to disable the metrics reported by Ceph. If false, the prometheus mgr module and Ceph exporter are enabled.
             * If true, the prometheus mgr module and Ceph exporter are both disabled. Default is false.
             */
            metricsDisabled?: pulumi.Input<boolean>;
            /**
             * Port is the prometheus server port
             */
            port?: pulumi.Input<number>;
        }
        /**
         * Ceph exporter configuration
         */
        interface CephClusterSpecMonitoringExporter {
            /**
             * Only performance counters greater than or equal to this option are fetched
             */
            perfCountersPrioLimit?: pulumi.Input<number>;
            /**
             * Time to wait before sending requests again to exporter server (seconds)
             */
            statsPeriodSeconds?: pulumi.Input<number>;
        }
        /**
         * Ceph exporter configuration
         */
        interface CephClusterSpecMonitoringExporterPatch {
            /**
             * Only performance counters greater than or equal to this option are fetched
             */
            perfCountersPrioLimit?: pulumi.Input<number>;
            /**
             * Time to wait before sending requests again to exporter server (seconds)
             */
            statsPeriodSeconds?: pulumi.Input<number>;
        }
        /**
         * EndpointAddress is a tuple that describes single IP address.
         */
        interface CephClusterSpecMonitoringExternalMgrEndpoints {
            /**
             * The Hostname of this endpoint
             */
            hostname?: pulumi.Input<string>;
            /**
             * The IP of this endpoint.
             * May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10),
             * or link-local multicast (224.0.0.0/24 or ff02::/16).
             */
            ip?: pulumi.Input<string>;
            /**
             * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
             */
            nodeName?: pulumi.Input<string>;
            targetRef?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonitoringExternalMgrEndpointsTargetRef>;
        }
        /**
         * EndpointAddress is a tuple that describes single IP address.
         */
        interface CephClusterSpecMonitoringExternalMgrEndpointsPatch {
            /**
             * The Hostname of this endpoint
             */
            hostname?: pulumi.Input<string>;
            /**
             * The IP of this endpoint.
             * May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10),
             * or link-local multicast (224.0.0.0/24 or ff02::/16).
             */
            ip?: pulumi.Input<string>;
            /**
             * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
             */
            nodeName?: pulumi.Input<string>;
            targetRef?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonitoringExternalMgrEndpointsTargetRefPatch>;
        }
        /**
         * Reference to object providing the endpoint.
         */
        interface CephClusterSpecMonitoringExternalMgrEndpointsTargetRef {
            /**
             * API version of the referent.
             */
            apiVersion?: pulumi.Input<string>;
            /**
             * If referring to a piece of an object instead of an entire object, this string
             * should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].
             * For example, if the object reference is to a container within a pod, this would take on a value like:
             * "spec.containers{name}" (where "name" refers to the name of the container that triggered
             * the event) or if no container name is specified "spec.containers[2]" (container with
             * index 2 in this pod). This syntax is chosen only to have some well-defined way of
             * referencing a part of an object.
             */
            fieldPath?: pulumi.Input<string>;
            /**
             * Kind of the referent.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<string>;
            /**
             * Name of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            namespace?: pulumi.Input<string>;
            /**
             * Specific resourceVersion to which this reference is made, if any.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: pulumi.Input<string>;
            /**
             * UID of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
             */
            uid?: pulumi.Input<string>;
        }
        /**
         * Reference to object providing the endpoint.
         */
        interface CephClusterSpecMonitoringExternalMgrEndpointsTargetRefPatch {
            /**
             * API version of the referent.
             */
            apiVersion?: pulumi.Input<string>;
            /**
             * If referring to a piece of an object instead of an entire object, this string
             * should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].
             * For example, if the object reference is to a container within a pod, this would take on a value like:
             * "spec.containers{name}" (where "name" refers to the name of the container that triggered
             * the event) or if no container name is specified "spec.containers[2]" (container with
             * index 2 in this pod). This syntax is chosen only to have some well-defined way of
             * referencing a part of an object.
             */
            fieldPath?: pulumi.Input<string>;
            /**
             * Kind of the referent.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<string>;
            /**
             * Name of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            namespace?: pulumi.Input<string>;
            /**
             * Specific resourceVersion to which this reference is made, if any.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: pulumi.Input<string>;
            /**
             * UID of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
             */
            uid?: pulumi.Input<string>;
        }
        /**
         * Prometheus based Monitoring settings
         */
        interface CephClusterSpecMonitoringPatch {
            /**
             * Enabled determines whether to create the prometheus rules for the ceph cluster. If true, the prometheus
             * types must exist or the creation will fail. Default is false.
             */
            enabled?: pulumi.Input<boolean>;
            exporter?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonitoringExporterPatch>;
            /**
             * ExternalMgrEndpoints points to an existing Ceph prometheus exporter endpoint
             */
            externalMgrEndpoints?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecMonitoringExternalMgrEndpointsPatch>[]>;
            /**
             * ExternalMgrPrometheusPort Prometheus exporter port
             */
            externalMgrPrometheusPort?: pulumi.Input<number>;
            /**
             * Interval determines prometheus scrape interval
             */
            interval?: pulumi.Input<string>;
            /**
             * Whether to disable the metrics reported by Ceph. If false, the prometheus mgr module and Ceph exporter are enabled.
             * If true, the prometheus mgr module and Ceph exporter are both disabled. Default is false.
             */
            metricsDisabled?: pulumi.Input<boolean>;
            /**
             * Port is the prometheus server port
             */
            port?: pulumi.Input<number>;
        }
        /**
         * ClusterSpec represents the specification of Ceph Cluster
         */
        interface CephClusterSpecPatch {
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Ceph Config options
             */
            cephConfig?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            cephVersion?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCephVersionPatch>;
            cleanupPolicy?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCleanupPolicyPatch>;
            /**
             * ContinueUpgradeAfterChecksEvenIfNotHealthy defines if an upgrade should continue even if PGs are not clean
             */
            continueUpgradeAfterChecksEvenIfNotHealthy?: pulumi.Input<boolean>;
            crashCollector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCrashCollectorPatch>;
            csi?: pulumi.Input<inputs.ceph.v1.CephClusterSpecCsiPatch>;
            dashboard?: pulumi.Input<inputs.ceph.v1.CephClusterSpecDashboardPatch>;
            /**
             * The path on the host where config and data can be persisted
             */
            dataDirHostPath?: pulumi.Input<string>;
            disruptionManagement?: pulumi.Input<inputs.ceph.v1.CephClusterSpecDisruptionManagementPatch>;
            /**
             * Whether the Ceph Cluster is running external to this Kubernetes cluster
             * mon, mgr, osd, mds, and discover daemons will not be created for external clusters.
             */
            external?: pulumi.Input<{
                [key: string]: any;
            }>;
            healthCheck?: pulumi.Input<inputs.ceph.v1.CephClusterSpecHealthCheckPatch>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            logCollector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecLogCollectorPatch>;
            mgr?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMgrPatch>;
            mon?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonPatch>;
            monitoring?: pulumi.Input<inputs.ceph.v1.CephClusterSpecMonitoringPatch>;
            /**
             * Network related configuration
             */
            network?: pulumi.Input<{
                [key: string]: any;
            }>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * PriorityClassNames sets priority classes on components
             */
            priorityClassNames?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Remove the OSD that is out and safe to remove only if this option is true
             */
            removeOSDsIfOutAndSafeToRemove?: pulumi.Input<boolean>;
            /**
             * Resources set resource requests and limits
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            security?: pulumi.Input<inputs.ceph.v1.CephClusterSpecSecurityPatch>;
            /**
             * SkipUpgradeChecks defines if an upgrade should be forced even if one of the check fails
             */
            skipUpgradeChecks?: pulumi.Input<boolean>;
            storage?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStoragePatch>;
            /**
             * UpgradeOSDRequiresHealthyPGs defines if OSD upgrade requires PGs are clean. If set to `true` OSD upgrade process won't start until PGs are healthy.
             * This configuration will be ignored if `skipUpgradeChecks` is `true`.
             * Default is false.
             */
            upgradeOSDRequiresHealthyPGs?: pulumi.Input<boolean>;
            /**
             * WaitTimeoutForHealthyOSDInMinutes defines the time the operator would wait before an OSD can be stopped for upgrade or restart.
             * If the timeout exceeds and OSD is not ok to stop, then the operator would skip upgrade for the current OSD and proceed with the next one
             * if `continueUpgradeAfterChecksEvenIfNotHealthy` is `false`. If `continueUpgradeAfterChecksEvenIfNotHealthy` is `true`, then operator would
             * continue with the upgrade of an OSD even if its not ok to stop after the timeout. This timeout won't be applied if `skipUpgradeChecks` is `true`.
             * The default wait timeout is 10 minutes.
             */
            waitTimeoutForHealthyOSDInMinutes?: pulumi.Input<number>;
        }
        /**
         * Security represents security settings
         */
        interface CephClusterSpecSecurity {
            keyRotation?: pulumi.Input<inputs.ceph.v1.CephClusterSpecSecurityKeyRotation>;
            kms?: pulumi.Input<inputs.ceph.v1.CephClusterSpecSecurityKms>;
        }
        /**
         * KeyRotation defines options for Key Rotation.
         */
        interface CephClusterSpecSecurityKeyRotation {
            /**
             * Enabled represents whether the key rotation is enabled.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Schedule represents the cron schedule for key rotation.
             */
            schedule?: pulumi.Input<string>;
        }
        /**
         * KeyRotation defines options for Key Rotation.
         */
        interface CephClusterSpecSecurityKeyRotationPatch {
            /**
             * Enabled represents whether the key rotation is enabled.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Schedule represents the cron schedule for key rotation.
             */
            schedule?: pulumi.Input<string>;
        }
        /**
         * KeyManagementService is the main Key Management option
         */
        interface CephClusterSpecSecurityKms {
            /**
             * ConnectionDetails contains the KMS connection details (address, port etc)
             */
            connectionDetails?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * TokenSecretName is the kubernetes secret containing the KMS token
             */
            tokenSecretName?: pulumi.Input<string>;
        }
        /**
         * KeyManagementService is the main Key Management option
         */
        interface CephClusterSpecSecurityKmsPatch {
            /**
             * ConnectionDetails contains the KMS connection details (address, port etc)
             */
            connectionDetails?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * TokenSecretName is the kubernetes secret containing the KMS token
             */
            tokenSecretName?: pulumi.Input<string>;
        }
        /**
         * Security represents security settings
         */
        interface CephClusterSpecSecurityPatch {
            keyRotation?: pulumi.Input<inputs.ceph.v1.CephClusterSpecSecurityKeyRotationPatch>;
            kms?: pulumi.Input<inputs.ceph.v1.CephClusterSpecSecurityKmsPatch>;
        }
        /**
         * A spec for available storage in the cluster and how it should be used
         */
        interface CephClusterSpecStorage {
            /**
             * Whether to allow updating the device class after the OSD is initially provisioned
             */
            allowDeviceClassUpdate?: pulumi.Input<boolean>;
            /**
             * Whether Rook will resize the OSD CRUSH weight when the OSD PVC size is increased.
             * This allows cluster data to be rebalanced to make most effective use of new OSD space.
             * The default is false since data rebalancing can cause temporary cluster slowdown.
             */
            allowOsdCrushWeightUpdate?: pulumi.Input<boolean>;
            /**
             * BackfillFullRatio is the ratio at which the cluster is too full for backfill. Backfill will be disabled if above this threshold. Default is 0.90.
             */
            backfillFullRatio?: pulumi.Input<number>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * A regular expression to allow more fine-grained selection of devices on nodes across the cluster
             */
            deviceFilter?: pulumi.Input<string>;
            /**
             * A regular expression to allow more fine-grained selection of devices with path names
             */
            devicePathFilter?: pulumi.Input<string>;
            /**
             * List of devices to use as storage devices
             */
            devices?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * FlappingRestartIntervalHours defines the time for which the OSD pods, that failed with zero exit code, will sleep before restarting.
             * This is needed for OSD flapping where OSD daemons are marked down more than 5 times in 600 seconds by Ceph.
             * Preventing the OSD pods to restart immediately in such scenarios will prevent Rook from marking OSD as `up` and thus
             * peering of the PGs mapped to the OSD.
             * User needs to manually restart the OSD pod if they manage to fix the underlying OSD flapping issue before the restart interval.
             * The sleep will be disabled if this interval is set to 0.
             */
            flappingRestartIntervalHours?: pulumi.Input<number>;
            /**
             * FullRatio is the ratio at which the cluster is considered full and ceph will stop accepting writes. Default is 0.95.
             */
            fullRatio?: pulumi.Input<number>;
            migration?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageMigration>;
            /**
             * NearFullRatio is the ratio at which the cluster is considered nearly full and will raise a ceph health warning. Default is 0.85.
             */
            nearFullRatio?: pulumi.Input<number>;
            nodes?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodes>[]>;
            onlyApplyOSDPlacement?: pulumi.Input<boolean>;
            /**
             * Whether to always schedule OSDs on a node even if the node is not currently scheduleable or ready
             */
            scheduleAlways?: pulumi.Input<boolean>;
            storageClassDeviceSets?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSets>[]>;
            store?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStore>;
            /**
             * Whether to consume all the storage devices found on a machine
             */
            useAllDevices?: pulumi.Input<boolean>;
            useAllNodes?: pulumi.Input<boolean>;
            /**
             * PersistentVolumeClaims to use as storage
             */
            volumeClaimTemplates?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplates>[]>;
        }
        /**
         * Migration handles the OSD migration
         */
        interface CephClusterSpecStorageMigration {
            /**
             * A user confirmation to migrate the OSDs. It destroys each OSD one at a time, cleans up the backing disk
             * and prepares OSD with same ID on that disk
             */
            confirmation?: pulumi.Input<string>;
        }
        /**
         * Migration handles the OSD migration
         */
        interface CephClusterSpecStorageMigrationPatch {
            /**
             * A user confirmation to migrate the OSDs. It destroys each OSD one at a time, cleans up the backing disk
             * and prepares OSD with same ID on that disk
             */
            confirmation?: pulumi.Input<string>;
        }
        /**
         * Node is a storage nodes
         */
        interface CephClusterSpecStorageNodes {
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * A regular expression to allow more fine-grained selection of devices on nodes across the cluster
             */
            deviceFilter?: pulumi.Input<string>;
            /**
             * A regular expression to allow more fine-grained selection of devices with path names
             */
            devicePathFilter?: pulumi.Input<string>;
            /**
             * List of devices to use as storage devices
             */
            devices?: pulumi.Input<{
                [key: string]: any;
            }>;
            name?: pulumi.Input<string>;
            /**
             * ResourceRequirements describes the compute resource requirements.
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Whether to consume all the storage devices found on a machine
             */
            useAllDevices?: pulumi.Input<boolean>;
            /**
             * PersistentVolumeClaims to use as storage
             */
            volumeClaimTemplates?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplates>[]>;
        }
        /**
         * Node is a storage nodes
         */
        interface CephClusterSpecStorageNodesPatch {
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * A regular expression to allow more fine-grained selection of devices on nodes across the cluster
             */
            deviceFilter?: pulumi.Input<string>;
            /**
             * A regular expression to allow more fine-grained selection of devices with path names
             */
            devicePathFilter?: pulumi.Input<string>;
            /**
             * List of devices to use as storage devices
             */
            devices?: pulumi.Input<{
                [key: string]: any;
            }>;
            name?: pulumi.Input<string>;
            /**
             * ResourceRequirements describes the compute resource requirements.
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Whether to consume all the storage devices found on a machine
             */
            useAllDevices?: pulumi.Input<boolean>;
            /**
             * PersistentVolumeClaims to use as storage
             */
            volumeClaimTemplates?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesPatch>[]>;
        }
        /**
         * VolumeClaimTemplate is a simplified version of K8s corev1's PVC. It has no type meta or status.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplates {
            metadata?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesMetadata>;
            spec?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpec>;
        }
        /**
         * Standard object's metadata.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        /**
         * Standard object's metadata.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        /**
         * VolumeClaimTemplate is a simplified version of K8s corev1's PVC. It has no type meta or status.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesPatch {
            metadata?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesMetadataPatch>;
            spec?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecPatch>;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpec {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecResources>;
            selector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecSelector>;
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: pulumi.Input<string>;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
             * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
             * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
             * will be set by the persistentvolume controller if it exists.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
             */
            volumeAttributesClassName?: pulumi.Input<string>;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: pulumi.Input<string>;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: pulumi.Input<string>;
        }
        /**
         * dataSource field can be used to specify either:
         * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
         * * An existing PVC (PersistentVolumeClaim)
         * If the provisioner or an external controller can support the specified data source,
         * it will create a new volume based on the contents of the specified data source.
         * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
         * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
         * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecDataSource {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
        }
        /**
         * dataSource field can be used to specify either:
         * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
         * * An existing PVC (PersistentVolumeClaim)
         * If the provisioner or an external controller can support the specified data source,
         * it will create a new volume based on the contents of the specified data source.
         * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
         * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
         * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecDataSourcePatch {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
         * volume is desired. This may be any object from a non-empty API group (non
         * core object) or a PersistentVolumeClaim object.
         * When this field is specified, volume binding will only succeed if the type of
         * the specified object matches some installed volume populator or dynamic
         * provisioner.
         * This field will replace the functionality of the dataSource field and as such
         * if both fields are non-empty, they must have the same value. For backwards
         * compatibility, when namespace isn't specified in dataSourceRef,
         * both fields (dataSource and dataSourceRef) will be set to the same
         * value automatically if one of them is empty and the other is non-empty.
         * When namespace is specified in dataSourceRef,
         * dataSource isn't set to the same value and must be empty.
         * There are three important differences between dataSource and dataSourceRef:
         * * While dataSource only allows two specific types of objects, dataSourceRef
         *   allows any non-core object, as well as PersistentVolumeClaim objects.
         * * While dataSource ignores disallowed values (dropping them), dataSourceRef
         *   preserves all values, and generates an error if a disallowed value is
         *   specified.
         * * While dataSource only allows local objects, dataSourceRef allows objects
         *   in any namespaces.
         * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecDataSourceRef {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
         * volume is desired. This may be any object from a non-empty API group (non
         * core object) or a PersistentVolumeClaim object.
         * When this field is specified, volume binding will only succeed if the type of
         * the specified object matches some installed volume populator or dynamic
         * provisioner.
         * This field will replace the functionality of the dataSource field and as such
         * if both fields are non-empty, they must have the same value. For backwards
         * compatibility, when namespace isn't specified in dataSourceRef,
         * both fields (dataSource and dataSourceRef) will be set to the same
         * value automatically if one of them is empty and the other is non-empty.
         * When namespace is specified in dataSourceRef,
         * dataSource isn't set to the same value and must be empty.
         * There are three important differences between dataSource and dataSourceRef:
         * * While dataSource only allows two specific types of objects, dataSourceRef
         *   allows any non-core object, as well as PersistentVolumeClaim objects.
         * * While dataSource ignores disallowed values (dropping them), dataSourceRef
         *   preserves all values, and generates an error if a disallowed value is
         *   specified.
         * * While dataSource only allows local objects, dataSourceRef allows objects
         *   in any namespaces.
         * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecDataSourceRefPatch {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecPatch {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecSelectorPatch>;
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: pulumi.Input<string>;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
             * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
             * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
             * will be set by the persistentvolume controller if it exists.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
             */
            volumeAttributesClassName?: pulumi.Input<string>;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: pulumi.Input<string>;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: pulumi.Input<string>;
        }
        /**
         * resources represents the minimum resources the volume should have.
         * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
         * that are lower than previous value but must still be higher than capacity recorded in the
         * status field of the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecResources {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * resources represents the minimum resources the volume should have.
         * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
         * that are lower than previous value but must still be higher than capacity recorded in the
         * status field of the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecResourcesPatch {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface CephClusterSpecStorageNodesVolumeClaimTemplatesSpecSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A spec for available storage in the cluster and how it should be used
         */
        interface CephClusterSpecStoragePatch {
            /**
             * Whether to allow updating the device class after the OSD is initially provisioned
             */
            allowDeviceClassUpdate?: pulumi.Input<boolean>;
            /**
             * Whether Rook will resize the OSD CRUSH weight when the OSD PVC size is increased.
             * This allows cluster data to be rebalanced to make most effective use of new OSD space.
             * The default is false since data rebalancing can cause temporary cluster slowdown.
             */
            allowOsdCrushWeightUpdate?: pulumi.Input<boolean>;
            /**
             * BackfillFullRatio is the ratio at which the cluster is too full for backfill. Backfill will be disabled if above this threshold. Default is 0.90.
             */
            backfillFullRatio?: pulumi.Input<number>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * A regular expression to allow more fine-grained selection of devices on nodes across the cluster
             */
            deviceFilter?: pulumi.Input<string>;
            /**
             * A regular expression to allow more fine-grained selection of devices with path names
             */
            devicePathFilter?: pulumi.Input<string>;
            /**
             * List of devices to use as storage devices
             */
            devices?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * FlappingRestartIntervalHours defines the time for which the OSD pods, that failed with zero exit code, will sleep before restarting.
             * This is needed for OSD flapping where OSD daemons are marked down more than 5 times in 600 seconds by Ceph.
             * Preventing the OSD pods to restart immediately in such scenarios will prevent Rook from marking OSD as `up` and thus
             * peering of the PGs mapped to the OSD.
             * User needs to manually restart the OSD pod if they manage to fix the underlying OSD flapping issue before the restart interval.
             * The sleep will be disabled if this interval is set to 0.
             */
            flappingRestartIntervalHours?: pulumi.Input<number>;
            /**
             * FullRatio is the ratio at which the cluster is considered full and ceph will stop accepting writes. Default is 0.95.
             */
            fullRatio?: pulumi.Input<number>;
            migration?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageMigrationPatch>;
            /**
             * NearFullRatio is the ratio at which the cluster is considered nearly full and will raise a ceph health warning. Default is 0.85.
             */
            nearFullRatio?: pulumi.Input<number>;
            nodes?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageNodesPatch>[]>;
            onlyApplyOSDPlacement?: pulumi.Input<boolean>;
            /**
             * Whether to always schedule OSDs on a node even if the node is not currently scheduleable or ready
             */
            scheduleAlways?: pulumi.Input<boolean>;
            storageClassDeviceSets?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsPatch>[]>;
            store?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorePatch>;
            /**
             * Whether to consume all the storage devices found on a machine
             */
            useAllDevices?: pulumi.Input<boolean>;
            useAllNodes?: pulumi.Input<boolean>;
            /**
             * PersistentVolumeClaims to use as storage
             */
            volumeClaimTemplates?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesPatch>[]>;
        }
        /**
         * StorageClassDeviceSet is a storage class device set
         */
        interface CephClusterSpecStorageStorageClassDeviceSets {
            /**
             * Provider-specific device configuration
             */
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Count is the number of devices in this set
             */
            count?: pulumi.Input<number>;
            /**
             * Whether to encrypt the deviceSet
             */
            encrypted?: pulumi.Input<boolean>;
            /**
             * Name is a unique identifier for the set
             */
            name?: pulumi.Input<string>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Portable represents OSD portability across the hosts
             */
            portable?: pulumi.Input<boolean>;
            preparePlacement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * ResourceRequirements describes the compute resource requirements.
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Scheduler name for OSD pod placement
             */
            schedulerName?: pulumi.Input<string>;
            /**
             * TuneSlowDeviceClass Tune the OSD when running on a slow Device Class
             */
            tuneDeviceClass?: pulumi.Input<boolean>;
            /**
             * TuneFastDeviceClass Tune the OSD when running on a fast Device Class
             */
            tuneFastDeviceClass?: pulumi.Input<boolean>;
            /**
             * VolumeClaimTemplates is a list of PVC templates for the underlying storage devices
             */
            volumeClaimTemplates?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplates>[]>;
        }
        /**
         * StorageClassDeviceSet is a storage class device set
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsPatch {
            /**
             * Provider-specific device configuration
             */
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Count is the number of devices in this set
             */
            count?: pulumi.Input<number>;
            /**
             * Whether to encrypt the deviceSet
             */
            encrypted?: pulumi.Input<boolean>;
            /**
             * Name is a unique identifier for the set
             */
            name?: pulumi.Input<string>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Portable represents OSD portability across the hosts
             */
            portable?: pulumi.Input<boolean>;
            preparePlacement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * ResourceRequirements describes the compute resource requirements.
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Scheduler name for OSD pod placement
             */
            schedulerName?: pulumi.Input<string>;
            /**
             * TuneSlowDeviceClass Tune the OSD when running on a slow Device Class
             */
            tuneDeviceClass?: pulumi.Input<boolean>;
            /**
             * TuneFastDeviceClass Tune the OSD when running on a fast Device Class
             */
            tuneFastDeviceClass?: pulumi.Input<boolean>;
            /**
             * VolumeClaimTemplates is a list of PVC templates for the underlying storage devices
             */
            volumeClaimTemplates?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesPatch>[]>;
        }
        /**
         * VolumeClaimTemplate is a simplified version of K8s corev1's PVC. It has no type meta or status.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplates {
            metadata?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata>;
            spec?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec>;
        }
        /**
         * Standard object's metadata.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadata {
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        /**
         * Standard object's metadata.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        /**
         * VolumeClaimTemplate is a simplified version of K8s corev1's PVC. It has no type meta or status.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesPatch {
            metadata?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesMetadataPatch>;
            spec?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecPatch>;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpec {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources>;
            selector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector>;
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: pulumi.Input<string>;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
             * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
             * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
             * will be set by the persistentvolume controller if it exists.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
             */
            volumeAttributesClassName?: pulumi.Input<string>;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: pulumi.Input<string>;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: pulumi.Input<string>;
        }
        /**
         * dataSource field can be used to specify either:
         * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
         * * An existing PVC (PersistentVolumeClaim)
         * If the provisioner or an external controller can support the specified data source,
         * it will create a new volume based on the contents of the specified data source.
         * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
         * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
         * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSource {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
        }
        /**
         * dataSource field can be used to specify either:
         * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
         * * An existing PVC (PersistentVolumeClaim)
         * If the provisioner or an external controller can support the specified data source,
         * it will create a new volume based on the contents of the specified data source.
         * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
         * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
         * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourcePatch {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
         * volume is desired. This may be any object from a non-empty API group (non
         * core object) or a PersistentVolumeClaim object.
         * When this field is specified, volume binding will only succeed if the type of
         * the specified object matches some installed volume populator or dynamic
         * provisioner.
         * This field will replace the functionality of the dataSource field and as such
         * if both fields are non-empty, they must have the same value. For backwards
         * compatibility, when namespace isn't specified in dataSourceRef,
         * both fields (dataSource and dataSourceRef) will be set to the same
         * value automatically if one of them is empty and the other is non-empty.
         * When namespace is specified in dataSourceRef,
         * dataSource isn't set to the same value and must be empty.
         * There are three important differences between dataSource and dataSourceRef:
         * * While dataSource only allows two specific types of objects, dataSourceRef
         *   allows any non-core object, as well as PersistentVolumeClaim objects.
         * * While dataSource ignores disallowed values (dropping them), dataSourceRef
         *   preserves all values, and generates an error if a disallowed value is
         *   specified.
         * * While dataSource only allows local objects, dataSourceRef allows objects
         *   in any namespaces.
         * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRef {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
         * volume is desired. This may be any object from a non-empty API group (non
         * core object) or a PersistentVolumeClaim object.
         * When this field is specified, volume binding will only succeed if the type of
         * the specified object matches some installed volume populator or dynamic
         * provisioner.
         * This field will replace the functionality of the dataSource field and as such
         * if both fields are non-empty, they must have the same value. For backwards
         * compatibility, when namespace isn't specified in dataSourceRef,
         * both fields (dataSource and dataSourceRef) will be set to the same
         * value automatically if one of them is empty and the other is non-empty.
         * When namespace is specified in dataSourceRef,
         * dataSource isn't set to the same value and must be empty.
         * There are three important differences between dataSource and dataSourceRef:
         * * While dataSource only allows two specific types of objects, dataSourceRef
         *   allows any non-core object, as well as PersistentVolumeClaim objects.
         * * While dataSource ignores disallowed values (dropping them), dataSourceRef
         *   preserves all values, and generates an error if a disallowed value is
         *   specified.
         * * While dataSource only allows local objects, dataSourceRef allows objects
         *   in any namespaces.
         * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRefPatch {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecPatch {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorPatch>;
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: pulumi.Input<string>;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
             * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
             * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
             * will be set by the persistentvolume controller if it exists.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
             */
            volumeAttributesClassName?: pulumi.Input<string>;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: pulumi.Input<string>;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: pulumi.Input<string>;
        }
        /**
         * resources represents the minimum resources the volume should have.
         * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
         * that are lower than previous value but must still be higher than capacity recorded in the
         * status field of the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResources {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * resources represents the minimum resources the volume should have.
         * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
         * that are lower than previous value but must still be higher than capacity recorded in the
         * status field of the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecResourcesPatch {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageStorageClassDeviceSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * OSDStore is the backend storage type used for creating the OSDs
         */
        interface CephClusterSpecStorageStore {
            /**
             * Type of backend storage to be used while creating OSDs. If empty, then bluestore will be used
             */
            type?: pulumi.Input<string>;
            /**
             * UpdateStore updates the backend store for existing OSDs. It destroys each OSD one at a time, cleans up the backing disk
             * and prepares same OSD on that disk
             */
            updateStore?: pulumi.Input<string>;
        }
        /**
         * OSDStore is the backend storage type used for creating the OSDs
         */
        interface CephClusterSpecStorageStorePatch {
            /**
             * Type of backend storage to be used while creating OSDs. If empty, then bluestore will be used
             */
            type?: pulumi.Input<string>;
            /**
             * UpdateStore updates the backend store for existing OSDs. It destroys each OSD one at a time, cleans up the backing disk
             * and prepares same OSD on that disk
             */
            updateStore?: pulumi.Input<string>;
        }
        /**
         * VolumeClaimTemplate is a simplified version of K8s corev1's PVC. It has no type meta or status.
         */
        interface CephClusterSpecStorageVolumeClaimTemplates {
            metadata?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesMetadata>;
            spec?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpec>;
        }
        /**
         * Standard object's metadata.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        /**
         * Standard object's metadata.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        /**
         * VolumeClaimTemplate is a simplified version of K8s corev1's PVC. It has no type meta or status.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesPatch {
            metadata?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesMetadataPatch>;
            spec?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecPatch>;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpec {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecResources>;
            selector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecSelector>;
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: pulumi.Input<string>;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
             * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
             * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
             * will be set by the persistentvolume controller if it exists.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
             */
            volumeAttributesClassName?: pulumi.Input<string>;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: pulumi.Input<string>;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: pulumi.Input<string>;
        }
        /**
         * dataSource field can be used to specify either:
         * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
         * * An existing PVC (PersistentVolumeClaim)
         * If the provisioner or an external controller can support the specified data source,
         * it will create a new volume based on the contents of the specified data source.
         * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
         * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
         * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecDataSource {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
        }
        /**
         * dataSource field can be used to specify either:
         * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
         * * An existing PVC (PersistentVolumeClaim)
         * If the provisioner or an external controller can support the specified data source,
         * it will create a new volume based on the contents of the specified data source.
         * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
         * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
         * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecDataSourcePatch {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
         * volume is desired. This may be any object from a non-empty API group (non
         * core object) or a PersistentVolumeClaim object.
         * When this field is specified, volume binding will only succeed if the type of
         * the specified object matches some installed volume populator or dynamic
         * provisioner.
         * This field will replace the functionality of the dataSource field and as such
         * if both fields are non-empty, they must have the same value. For backwards
         * compatibility, when namespace isn't specified in dataSourceRef,
         * both fields (dataSource and dataSourceRef) will be set to the same
         * value automatically if one of them is empty and the other is non-empty.
         * When namespace is specified in dataSourceRef,
         * dataSource isn't set to the same value and must be empty.
         * There are three important differences between dataSource and dataSourceRef:
         * * While dataSource only allows two specific types of objects, dataSourceRef
         *   allows any non-core object, as well as PersistentVolumeClaim objects.
         * * While dataSource ignores disallowed values (dropping them), dataSourceRef
         *   preserves all values, and generates an error if a disallowed value is
         *   specified.
         * * While dataSource only allows local objects, dataSourceRef allows objects
         *   in any namespaces.
         * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecDataSourceRef {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
         * volume is desired. This may be any object from a non-empty API group (non
         * core object) or a PersistentVolumeClaim object.
         * When this field is specified, volume binding will only succeed if the type of
         * the specified object matches some installed volume populator or dynamic
         * provisioner.
         * This field will replace the functionality of the dataSource field and as such
         * if both fields are non-empty, they must have the same value. For backwards
         * compatibility, when namespace isn't specified in dataSourceRef,
         * both fields (dataSource and dataSourceRef) will be set to the same
         * value automatically if one of them is empty and the other is non-empty.
         * When namespace is specified in dataSourceRef,
         * dataSource isn't set to the same value and must be empty.
         * There are three important differences between dataSource and dataSourceRef:
         * * While dataSource only allows two specific types of objects, dataSourceRef
         *   allows any non-core object, as well as PersistentVolumeClaim objects.
         * * While dataSource ignores disallowed values (dropping them), dataSourceRef
         *   preserves all values, and generates an error if a disallowed value is
         *   specified.
         * * While dataSource only allows local objects, dataSourceRef allows objects
         *   in any namespaces.
         * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecDataSourceRefPatch {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: pulumi.Input<string>;
            /**
             * Kind is the type of resource being referenced
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of resource being referenced
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecPatch {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecSelectorPatch>;
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: pulumi.Input<string>;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
             * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
             * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
             * will be set by the persistentvolume controller if it exists.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
             */
            volumeAttributesClassName?: pulumi.Input<string>;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: pulumi.Input<string>;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: pulumi.Input<string>;
        }
        /**
         * resources represents the minimum resources the volume should have.
         * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
         * that are lower than previous value but must still be higher than capacity recorded in the
         * status field of the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecResources {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * resources represents the minimum resources the volume should have.
         * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
         * that are lower than previous value but must still be higher than capacity recorded in the
         * status field of the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecResourcesPatch {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface CephClusterSpecStorageVolumeClaimTemplatesSpecSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephClusterSpecStorageVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * CephFilesystem represents a Ceph Filesystem
         */
        interface CephFilesystem {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephFilesystem">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpec>;
            /**
             * CephFilesystemStatus represents the status of a Ceph Filesystem
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * CephFilesystemMirror is the Ceph Filesystem Mirror object definition
         */
        interface CephFilesystemMirror {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephFilesystemMirror">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpec>;
            status?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorStatus>;
        }
        /**
         * FilesystemMirroringSpec is the filesystem mirroring specification
         */
        interface CephFilesystemMirrorSpec {
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            placement?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacement>;
            /**
             * PriorityClassName sets priority class on the cephfs-mirror pods
             */
            priorityClassName?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecResources>;
        }
        /**
         * FilesystemMirroringSpec is the filesystem mirroring specification
         */
        interface CephFilesystemMirrorSpecPatch {
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            placement?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPatch>;
            /**
             * PriorityClassName sets priority class on the cephfs-mirror pods
             */
            priorityClassName?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecResourcesPatch>;
        }
        interface CephFilesystemMirrorSpecPlacement {
            nodeAffinity?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinity>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementTolerations>[]>;
            topologySpreadConstraints?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementTopologySpreadConstraints>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPatch {
            nodeAffinity?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPatch>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementTolerationsPatch>[]>;
            topologySpreadConstraints?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsPatch>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementTopologySpreadConstraints {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            maxSkew?: pulumi.Input<number>;
            minDomains?: pulumi.Input<number>;
            nodeAffinityPolicy?: pulumi.Input<string>;
            nodeTaintsPolicy?: pulumi.Input<string>;
            topologyKey?: pulumi.Input<string>;
            whenUnsatisfiable?: pulumi.Input<string>;
        }
        interface CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsPatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecPlacementTopologySpreadConstraintsLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            maxSkew?: pulumi.Input<number>;
            minDomains?: pulumi.Input<number>;
            nodeAffinityPolicy?: pulumi.Input<string>;
            nodeTaintsPolicy?: pulumi.Input<string>;
            topologyKey?: pulumi.Input<string>;
            whenUnsatisfiable?: pulumi.Input<string>;
        }
        /**
         * The resource requirements for the cephfs-mirror pods
         */
        interface CephFilesystemMirrorSpecResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecResourcesClaims>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface CephFilesystemMirrorSpecResourcesClaims {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface CephFilesystemMirrorSpecResourcesClaimsPatch {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * The resource requirements for the cephfs-mirror pods
         */
        interface CephFilesystemMirrorSpecResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorSpecResourcesClaimsPatch>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * Status represents the status of an object
         */
        interface CephFilesystemMirrorStatus {
            conditions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemMirrorStatusConditions>[]>;
            /**
             * ObservedGeneration is the latest generation observed by the controller.
             */
            observedGeneration?: pulumi.Input<number>;
            phase?: pulumi.Input<string>;
        }
        /**
         * Condition represents a status condition on any Rook-Ceph Custom Resource.
         */
        interface CephFilesystemMirrorStatusConditions {
            lastHeartbeatTime?: pulumi.Input<string>;
            lastTransitionTime?: pulumi.Input<string>;
            message?: pulumi.Input<string>;
            /**
             * ConditionReason is a reason for a condition
             */
            reason?: pulumi.Input<string>;
            status?: pulumi.Input<string>;
            /**
             * ConditionType represent a resource's status
             */
            type?: pulumi.Input<string>;
        }
        /**
         * FilesystemSpec represents the spec of a file system
         */
        interface CephFilesystemSpec {
            /**
             * The data pool settings, with optional predefined pool name.
             */
            dataPools?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPools>[]>;
            metadataPool?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPool>;
            metadataServer?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServer>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMirroring>;
            /**
             * Preserve the fs in the cluster on CephFilesystem CR deletion. Setting this to true automatically implies PreservePoolsOnDelete is true.
             */
            preserveFilesystemOnDelete?: pulumi.Input<boolean>;
            /**
             * Preserve pool names as specified
             */
            preservePoolNames?: pulumi.Input<boolean>;
            /**
             * Preserve pools on filesystem deletion
             */
            preservePoolsOnDelete?: pulumi.Input<boolean>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * NamedPoolSpec represents the named ceph pool spec
         */
        interface CephFilesystemSpecDataPools {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsErasureCoded>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsMirroring>;
            /**
             * Name of the pool
             */
            name?: pulumi.Input<string>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsQuotas>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsReplicated>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The erasure code settings
         */
        interface CephFilesystemSpecDataPoolsErasureCoded {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The erasure code settings
         */
        interface CephFilesystemSpecDataPoolsErasureCodedPatch {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The mirroring settings
         */
        interface CephFilesystemSpecDataPoolsMirroring {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsMirroringPeers>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsMirroringSnapshotSchedules>[]>;
        }
        /**
         * The mirroring settings
         */
        interface CephFilesystemSpecDataPoolsMirroringPatch {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsMirroringPeersPatch>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephFilesystemSpecDataPoolsMirroringPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephFilesystemSpecDataPoolsMirroringPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephFilesystemSpecDataPoolsMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephFilesystemSpecDataPoolsMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * NamedPoolSpec represents the named ceph pool spec
         */
        interface CephFilesystemSpecDataPoolsPatch {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsErasureCodedPatch>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsMirroringPatch>;
            /**
             * Name of the pool
             */
            name?: pulumi.Input<string>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsQuotasPatch>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsReplicatedPatch>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The quota settings
         */
        interface CephFilesystemSpecDataPoolsQuotas {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The quota settings
         */
        interface CephFilesystemSpecDataPoolsQuotasPatch {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephFilesystemSpecDataPoolsReplicated {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsReplicatedHybridStorage>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephFilesystemSpecDataPoolsReplicatedHybridStorage {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephFilesystemSpecDataPoolsReplicatedHybridStoragePatch {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephFilesystemSpecDataPoolsReplicatedPatch {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsReplicatedHybridStoragePatch>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * The metadata pool settings
         */
        interface CephFilesystemSpecMetadataPool {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolErasureCoded>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolMirroring>;
            /**
             * Name of the pool
             */
            name?: pulumi.Input<string>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolQuotas>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolReplicated>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The erasure code settings
         */
        interface CephFilesystemSpecMetadataPoolErasureCoded {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The erasure code settings
         */
        interface CephFilesystemSpecMetadataPoolErasureCodedPatch {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The mirroring settings
         */
        interface CephFilesystemSpecMetadataPoolMirroring {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolMirroringPeers>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolMirroringSnapshotSchedules>[]>;
        }
        /**
         * The mirroring settings
         */
        interface CephFilesystemSpecMetadataPoolMirroringPatch {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolMirroringPeersPatch>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephFilesystemSpecMetadataPoolMirroringPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephFilesystemSpecMetadataPoolMirroringPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephFilesystemSpecMetadataPoolMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephFilesystemSpecMetadataPoolMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * The metadata pool settings
         */
        interface CephFilesystemSpecMetadataPoolPatch {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolErasureCodedPatch>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolMirroringPatch>;
            /**
             * Name of the pool
             */
            name?: pulumi.Input<string>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolQuotasPatch>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolReplicatedPatch>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The quota settings
         */
        interface CephFilesystemSpecMetadataPoolQuotas {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The quota settings
         */
        interface CephFilesystemSpecMetadataPoolQuotasPatch {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephFilesystemSpecMetadataPoolReplicated {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolReplicatedHybridStorage>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephFilesystemSpecMetadataPoolReplicatedHybridStorage {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephFilesystemSpecMetadataPoolReplicatedHybridStoragePatch {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephFilesystemSpecMetadataPoolReplicatedPatch {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolReplicatedHybridStoragePatch>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * The mds pod info
         */
        interface CephFilesystemSpecMetadataServer {
            /**
             * The number of metadata servers that are active. The remaining servers in the cluster will be in standby mode.
             */
            activeCount?: pulumi.Input<number>;
            /**
             * Whether each active MDS instance will have an active standby with a warm metadata cache for faster failover.
             * If false, standbys will still be available, but will not have a warm metadata cache.
             */
            activeStandby?: pulumi.Input<boolean>;
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            livenessProbe?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbe>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * PriorityClassName sets priority classes on components
             */
            priorityClassName?: pulumi.Input<string>;
            /**
             * The resource requirements for the mds pods
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            startupProbe?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbe>;
        }
        /**
         * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
         */
        interface CephFilesystemSpecMetadataServerLivenessProbe {
            /**
             * Disabled determines whether probe is disable or not
             */
            disabled?: pulumi.Input<boolean>;
            probe?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbe>;
        }
        /**
         * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
         */
        interface CephFilesystemSpecMetadataServerLivenessProbePatch {
            /**
             * Disabled determines whether probe is disable or not
             */
            disabled?: pulumi.Input<boolean>;
            probe?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbePatch>;
        }
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbe {
            exec?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeExec>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             * Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeGrpc>;
            httpGet?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeHttpGet>;
            /**
             * Number of seconds after the container has started before liveness probes are initiated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             * Default to 10 seconds. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out.
             * Defaults to 1 second. Minimum value is 1.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Exec specifies a command to execute in the container.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeExec {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Exec specifies a command to execute in the container.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeExecPatch {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeGrpc {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port?: pulumi.Input<number>;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: pulumi.Input<string>;
        }
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeGrpcPatch {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port?: pulumi.Input<number>;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: pulumi.Input<string>;
        }
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: pulumi.Input<string>;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader describes a custom header to be used in HTTP probes
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name?: pulumi.Input<string>;
            /**
             * The header field value
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader describes a custom header to be used in HTTP probes
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersPatch {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name?: pulumi.Input<string>;
            /**
             * The header field value
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: pulumi.Input<string>;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersPatch>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: pulumi.Input<string>;
        }
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbePatch {
            exec?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeExecPatch>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             * Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeHttpGetPatch>;
            /**
             * Number of seconds after the container has started before liveness probes are initiated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             * Default to 10 seconds. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbeProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out.
             * Defaults to 1 second. Minimum value is 1.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeTcpSocket {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
        }
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        interface CephFilesystemSpecMetadataServerLivenessProbeProbeTcpSocketPatch {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
        }
        /**
         * The mds pod info
         */
        interface CephFilesystemSpecMetadataServerPatch {
            /**
             * The number of metadata servers that are active. The remaining servers in the cluster will be in standby mode.
             */
            activeCount?: pulumi.Input<number>;
            /**
             * Whether each active MDS instance will have an active standby with a warm metadata cache for faster failover.
             * If false, standbys will still be available, but will not have a warm metadata cache.
             */
            activeStandby?: pulumi.Input<boolean>;
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            livenessProbe?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerLivenessProbePatch>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * PriorityClassName sets priority classes on components
             */
            priorityClassName?: pulumi.Input<string>;
            /**
             * The resource requirements for the mds pods
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            startupProbe?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbePatch>;
        }
        /**
         * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
         */
        interface CephFilesystemSpecMetadataServerStartupProbe {
            /**
             * Disabled determines whether probe is disable or not
             */
            disabled?: pulumi.Input<boolean>;
            probe?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbe>;
        }
        /**
         * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
         */
        interface CephFilesystemSpecMetadataServerStartupProbePatch {
            /**
             * Disabled determines whether probe is disable or not
             */
            disabled?: pulumi.Input<boolean>;
            probe?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbePatch>;
        }
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbe {
            exec?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeExec>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             * Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeGrpc>;
            httpGet?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeHttpGet>;
            /**
             * Number of seconds after the container has started before liveness probes are initiated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             * Default to 10 seconds. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out.
             * Defaults to 1 second. Minimum value is 1.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Exec specifies a command to execute in the container.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeExec {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Exec specifies a command to execute in the container.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeExecPatch {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeGrpc {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port?: pulumi.Input<number>;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: pulumi.Input<string>;
        }
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeGrpcPatch {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port?: pulumi.Input<number>;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: pulumi.Input<string>;
        }
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: pulumi.Input<string>;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader describes a custom header to be used in HTTP probes
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name?: pulumi.Input<string>;
            /**
             * The header field value
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader describes a custom header to be used in HTTP probes
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersPatch {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name?: pulumi.Input<string>;
            /**
             * The header field value
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: pulumi.Input<string>;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersPatch>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: pulumi.Input<string>;
        }
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbePatch {
            exec?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeExecPatch>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             * Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeHttpGetPatch>;
            /**
             * Number of seconds after the container has started before liveness probes are initiated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             * Default to 10 seconds. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerStartupProbeProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out.
             * Defaults to 1 second. Minimum value is 1.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeTcpSocket {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
        }
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        interface CephFilesystemSpecMetadataServerStartupProbeProbeTcpSocketPatch {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
        }
        /**
         * The mirroring settings
         */
        interface CephFilesystemSpecMirroring {
            /**
             * Enabled whether this filesystem is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            peers?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMirroringPeers>;
            /**
             * Retention is the retention policy for a snapshot schedule
             * One path has exactly one retention policy.
             * A policy can however contain multiple count-time period pairs in order to specify complex retention policies
             */
            snapshotRetention?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMirroringSnapshotRetention>[]>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored filesystems
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMirroringSnapshotSchedules>[]>;
        }
        /**
         * The mirroring settings
         */
        interface CephFilesystemSpecMirroringPatch {
            /**
             * Enabled whether this filesystem is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            peers?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMirroringPeersPatch>;
            /**
             * Retention is the retention policy for a snapshot schedule
             * One path has exactly one retention policy.
             * A policy can however contain multiple count-time period pairs in order to specify complex retention policies
             */
            snapshotRetention?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMirroringSnapshotRetentionPatch>[]>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored filesystems
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephFilesystemSpecMirroringPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephFilesystemSpecMirroringPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * SnapshotScheduleRetentionSpec is a retention policy
         */
        interface CephFilesystemSpecMirroringSnapshotRetention {
            /**
             * Duration represents the retention duration for a snapshot
             */
            duration?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot
             */
            path?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleRetentionSpec is a retention policy
         */
        interface CephFilesystemSpecMirroringSnapshotRetentionPatch {
            /**
             * Duration represents the retention duration for a snapshot
             */
            duration?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot
             */
            path?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephFilesystemSpecMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephFilesystemSpecMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * FilesystemSpec represents the spec of a file system
         */
        interface CephFilesystemSpecPatch {
            /**
             * The data pool settings, with optional predefined pool name.
             */
            dataPools?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephFilesystemSpecDataPoolsPatch>[]>;
            metadataPool?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataPoolPatch>;
            metadataServer?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMetadataServerPatch>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephFilesystemSpecMirroringPatch>;
            /**
             * Preserve the fs in the cluster on CephFilesystem CR deletion. Setting this to true automatically implies PreservePoolsOnDelete is true.
             */
            preserveFilesystemOnDelete?: pulumi.Input<boolean>;
            /**
             * Preserve pool names as specified
             */
            preservePoolNames?: pulumi.Input<boolean>;
            /**
             * Preserve pools on filesystem deletion
             */
            preservePoolsOnDelete?: pulumi.Input<boolean>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * CephFilesystemSubVolumeGroup represents a Ceph Filesystem SubVolumeGroup
         */
        interface CephFilesystemSubVolumeGroup {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephFilesystemSubVolumeGroup">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephFilesystemSubVolumeGroupSpec>;
            /**
             * Status represents the status of a CephFilesystem SubvolumeGroup
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Spec represents the specification of a Ceph Filesystem SubVolumeGroup
         */
        interface CephFilesystemSubVolumeGroupSpec {
            /**
             * The data pool name for the Ceph Filesystem subvolume group layout, if the default CephFS pool is not desired.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * FilesystemName is the name of Ceph Filesystem SubVolumeGroup volume name. Typically it's the name of
             * the CephFilesystem CR. If not coming from the CephFilesystem CR, it can be retrieved from the
             * list of Ceph Filesystem volumes with `ceph fs volume ls`. To learn more about Ceph Filesystem
             * abstractions see https://docs.ceph.com/en/latest/cephfs/fs-volumes/#fs-volumes-and-subvolumes
             */
            filesystemName?: pulumi.Input<string>;
            /**
             * The name of the subvolume group. If not set, the default is the name of the subvolumeGroup CR.
             */
            name?: pulumi.Input<string>;
            pinning?: pulumi.Input<inputs.ceph.v1.CephFilesystemSubVolumeGroupSpecPinning>;
            /**
             * Quota size of the Ceph Filesystem subvolume group.
             */
            quota?: pulumi.Input<number | string>;
        }
        /**
         * Spec represents the specification of a Ceph Filesystem SubVolumeGroup
         */
        interface CephFilesystemSubVolumeGroupSpecPatch {
            /**
             * The data pool name for the Ceph Filesystem subvolume group layout, if the default CephFS pool is not desired.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * FilesystemName is the name of Ceph Filesystem SubVolumeGroup volume name. Typically it's the name of
             * the CephFilesystem CR. If not coming from the CephFilesystem CR, it can be retrieved from the
             * list of Ceph Filesystem volumes with `ceph fs volume ls`. To learn more about Ceph Filesystem
             * abstractions see https://docs.ceph.com/en/latest/cephfs/fs-volumes/#fs-volumes-and-subvolumes
             */
            filesystemName?: pulumi.Input<string>;
            /**
             * The name of the subvolume group. If not set, the default is the name of the subvolumeGroup CR.
             */
            name?: pulumi.Input<string>;
            pinning?: pulumi.Input<inputs.ceph.v1.CephFilesystemSubVolumeGroupSpecPinningPatch>;
            /**
             * Quota size of the Ceph Filesystem subvolume group.
             */
            quota?: pulumi.Input<number | string>;
        }
        /**
         * Pinning configuration of CephFilesystemSubVolumeGroup,
         * reference https://docs.ceph.com/en/latest/cephfs/fs-volumes/#pinning-subvolumes-and-subvolume-groups
         * only one out of (export, distributed, random) can be set at a time
         */
        interface CephFilesystemSubVolumeGroupSpecPinning {
            distributed?: pulumi.Input<number>;
            export?: pulumi.Input<number>;
            random?: pulumi.Input<number>;
        }
        /**
         * Pinning configuration of CephFilesystemSubVolumeGroup,
         * reference https://docs.ceph.com/en/latest/cephfs/fs-volumes/#pinning-subvolumes-and-subvolume-groups
         * only one out of (export, distributed, random) can be set at a time
         */
        interface CephFilesystemSubVolumeGroupSpecPinningPatch {
            distributed?: pulumi.Input<number>;
            export?: pulumi.Input<number>;
            random?: pulumi.Input<number>;
        }
        /**
         * CephNFS represents a Ceph NFS
         */
        interface CephNFS {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephNFS">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephNFSSpec>;
            /**
             * Status represents the status of an object
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * NFSGaneshaSpec represents the spec of an nfs ganesha server
         */
        interface CephNFSSpec {
            rados?: pulumi.Input<inputs.ceph.v1.CephNFSSpecRados>;
            security?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurity>;
            server?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServer>;
        }
        /**
         * NFSGaneshaSpec represents the spec of an nfs ganesha server
         */
        interface CephNFSSpecPatch {
            rados?: pulumi.Input<inputs.ceph.v1.CephNFSSpecRadosPatch>;
            security?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityPatch>;
            server?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerPatch>;
        }
        /**
         * RADOS is the Ganesha RADOS specification
         */
        interface CephNFSSpecRados {
            /**
             * The namespace inside the Ceph pool (set by 'pool') where shared NFS-Ganesha config is stored.
             * This setting is deprecated as it is internally set to the name of the CephNFS.
             */
            namespace?: pulumi.Input<string>;
            /**
             * The Ceph pool used store the shared configuration for NFS-Ganesha daemons.
             * This setting is deprecated, as it is internally required to be ".nfs".
             */
            pool?: pulumi.Input<string>;
        }
        /**
         * RADOS is the Ganesha RADOS specification
         */
        interface CephNFSSpecRadosPatch {
            /**
             * The namespace inside the Ceph pool (set by 'pool') where shared NFS-Ganesha config is stored.
             * This setting is deprecated as it is internally set to the name of the CephNFS.
             */
            namespace?: pulumi.Input<string>;
            /**
             * The Ceph pool used store the shared configuration for NFS-Ganesha daemons.
             * This setting is deprecated, as it is internally required to be ".nfs".
             */
            pool?: pulumi.Input<string>;
        }
        /**
         * Security allows specifying security configurations for the NFS cluster
         */
        interface CephNFSSpecSecurity {
            kerberos?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberos>;
            sssd?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssd>;
        }
        /**
         * Kerberos configures NFS-Ganesha to secure NFS client connections with Kerberos.
         */
        interface CephNFSSpecSecurityKerberos {
            configFiles?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFiles>;
            /**
             * DomainName should be set to the Kerberos Realm.
             */
            domainName?: pulumi.Input<string>;
            keytabFile?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFile>;
            /**
             * PrincipalName corresponds directly to NFS-Ganesha's NFS_KRB5:PrincipalName config. In
             * practice, this is the service prefix of the principal name. The default is "nfs".
             * This value is combined with (a) the namespace and name of the CephNFS (with a hyphen between)
             * and (b) the Realm configured in the user-provided krb5.conf to determine the full principal
             * name: <principalName>/<namespace>-<name>@<realm>. e.g., nfs/rook-ceph-my-nfs@example.net.
             * See https://github.com/nfs-ganesha/nfs-ganesha/wiki/RPCSEC_GSS for more detail.
             */
            principalName?: pulumi.Input<string>;
        }
        /**
         * ConfigFiles defines where the Kerberos configuration should be sourced from. Config files
         * will be placed into the `/etc/krb5.conf.rook/` directory.
         *
         * If this is left empty, Rook will not add any files. This allows you to manage the files
         * yourself however you wish. For example, you may build them into your custom Ceph container
         * image or use the Vault agent injector to securely add the files via annotations on the
         * CephNFS spec (passed to the NFS server pods).
         *
         * Rook configures Kerberos to log to stderr. We suggest removing logging sections from config
         * files to avoid consuming unnecessary disk space from logging to files.
         */
        interface CephNFSSpecSecurityKerberosConfigFiles {
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSource>;
        }
        /**
         * ConfigFiles defines where the Kerberos configuration should be sourced from. Config files
         * will be placed into the `/etc/krb5.conf.rook/` directory.
         *
         * If this is left empty, Rook will not add any files. This allows you to manage the files
         * yourself however you wish. For example, you may build them into your custom Ceph container
         * image or use the Vault agent injector to securely add the files via annotations on the
         * CephNFS spec (passed to the NFS server pods).
         *
         * Rook configures Kerberos to log to stderr. We suggest removing logging sections from config
         * files to avoid consuming unnecessary disk space from logging to files.
         */
        interface CephNFSSpecSecurityKerberosConfigFilesPatch {
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourcePatch>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSource {
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceConfigMap>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceEmptyDir>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceHostPath>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourcePersistentVolumeClaim>;
            projected?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjected>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceSecret>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourcePatch {
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceConfigMapPatch>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceEmptyDirPatch>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceHostPathPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourcePersistentVolumeClaimPatch>;
            projected?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceSecretPatch>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourcePersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourcePersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSources>[]>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesPatch>[]>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSources {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundle>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesServiceAccountToken>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundle {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundlePatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItems>[]>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesPatch {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesClusterTrustBundlePatch>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesServiceAccountTokenPatch>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosConfigFilesVolumeSourceSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesVolumeSourceSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        /**
         * KeytabFile defines where the Kerberos keytab should be sourced from. The keytab file will be
         * placed into `/etc/krb5.keytab`. If this is left empty, Rook will not add the file.
         * This allows you to manage the `krb5.keytab` file yourself however you wish. For example, you
         * may build it into your custom Ceph container image or use the Vault agent injector to
         * securely add the file via annotations on the CephNFS spec (passed to the NFS server pods).
         */
        interface CephNFSSpecSecurityKerberosKeytabFile {
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSource>;
        }
        /**
         * KeytabFile defines where the Kerberos keytab should be sourced from. The keytab file will be
         * placed into `/etc/krb5.keytab`. If this is left empty, Rook will not add the file.
         * This allows you to manage the `krb5.keytab` file yourself however you wish. For example, you
         * may build it into your custom Ceph container image or use the Vault agent injector to
         * securely add the file via annotations on the CephNFS spec (passed to the NFS server pods).
         */
        interface CephNFSSpecSecurityKerberosKeytabFilePatch {
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourcePatch>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSource {
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceConfigMap>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceEmptyDir>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceHostPath>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourcePersistentVolumeClaim>;
            projected?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjected>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceSecret>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourcePatch {
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceConfigMapPatch>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceEmptyDirPatch>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceHostPathPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourcePersistentVolumeClaimPatch>;
            projected?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceSecretPatch>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourcePersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourcePersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSources>[]>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesPatch>[]>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSources {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundle>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesServiceAccountToken>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundle {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundlePatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItems>[]>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesPatch {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesClusterTrustBundlePatch>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesServiceAccountTokenPatch>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecurityKerberosKeytabFileVolumeSourceSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFileVolumeSourceSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        /**
         * Kerberos configures NFS-Ganesha to secure NFS client connections with Kerberos.
         */
        interface CephNFSSpecSecurityKerberosPatch {
            configFiles?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosConfigFilesPatch>;
            /**
             * DomainName should be set to the Kerberos Realm.
             */
            domainName?: pulumi.Input<string>;
            keytabFile?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosKeytabFilePatch>;
            /**
             * PrincipalName corresponds directly to NFS-Ganesha's NFS_KRB5:PrincipalName config. In
             * practice, this is the service prefix of the principal name. The default is "nfs".
             * This value is combined with (a) the namespace and name of the CephNFS (with a hyphen between)
             * and (b) the Realm configured in the user-provided krb5.conf to determine the full principal
             * name: <principalName>/<namespace>-<name>@<realm>. e.g., nfs/rook-ceph-my-nfs@example.net.
             * See https://github.com/nfs-ganesha/nfs-ganesha/wiki/RPCSEC_GSS for more detail.
             */
            principalName?: pulumi.Input<string>;
        }
        /**
         * Security allows specifying security configurations for the NFS cluster
         */
        interface CephNFSSpecSecurityPatch {
            kerberos?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecurityKerberosPatch>;
            sssd?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdPatch>;
        }
        /**
         * SSSD enables integration with System Security Services Daemon (SSSD). SSSD can be used to
         * provide user ID mapping from a number of sources. See https://sssd.io for more information
         * about the SSSD project.
         */
        interface CephNFSSpecSecuritySssd {
            sidecar?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecar>;
        }
        /**
         * SSSD enables integration with System Security Services Daemon (SSSD). SSSD can be used to
         * provide user ID mapping from a number of sources. See https://sssd.io for more information
         * about the SSSD project.
         */
        interface CephNFSSpecSecuritySssdPatch {
            sidecar?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarPatch>;
        }
        /**
         * Sidecar tells Rook to run SSSD in a sidecar alongside the NFS-Ganesha server in each NFS pod.
         */
        interface CephNFSSpecSecuritySssdSidecar {
            /**
             * AdditionalFiles defines any number of additional files that should be mounted into the SSSD
             * sidecar with a directory root of `/etc/sssd/rook-additional/`.
             * These files may be referenced by the sssd.conf config file.
             */
            additionalFiles?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFiles>[]>;
            /**
             * DebugLevel sets the debug level for SSSD. If unset or set to 0, Rook does nothing. Otherwise,
             * this may be a value between 1 and 10. See SSSD docs for more info:
             * https://sssd.io/troubleshooting/basics.html#sssd-debug-logs
             */
            debugLevel?: pulumi.Input<number>;
            /**
             * Image defines the container image that should be used for the SSSD sidecar.
             */
            image?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarResources>;
            sssdConfigFile?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFile>;
        }
        /**
         * AdditionalVolumeMount represents the source from where additional files in pod containers
         * should come from and what subdirectory they are made available in.
         */
        interface CephNFSSpecSecuritySssdSidecarAdditionalFiles {
            /**
             * SubPath defines the sub-path (subdirectory) of the directory root where the volumeSource will
             * be mounted. All files/keys in the volume source's volume will be mounted to the subdirectory.
             * This is not the same as the Kubernetes `subPath` volume mount option.
             * Each subPath definition must be unique and must not contain ':'.
             */
            subPath?: pulumi.Input<string>;
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSource>;
        }
        /**
         * AdditionalVolumeMount represents the source from where additional files in pod containers
         * should come from and what subdirectory they are made available in.
         */
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesPatch {
            /**
             * SubPath defines the sub-path (subdirectory) of the directory root where the volumeSource will
             * be mounted. All files/keys in the volume source's volume will be mounted to the subdirectory.
             * This is not the same as the Kubernetes `subPath` volume mount option.
             * Each subPath definition must be unique and must not contain ':'.
             */
            subPath?: pulumi.Input<string>;
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourcePatch>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSource {
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceConfigMap>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceEmptyDir>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceHostPath>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourcePersistentVolumeClaim>;
            projected?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjected>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceSecret>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourcePatch {
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceConfigMapPatch>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceEmptyDirPatch>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceHostPathPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourcePersistentVolumeClaimPatch>;
            projected?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceSecretPatch>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourcePersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourcePersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSources>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesPatch>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSources {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundle>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesServiceAccountToken>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundle {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundlePatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItems>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesPatch {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesClusterTrustBundlePatch>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesServiceAccountTokenPatch>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesVolumeSourceSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        /**
         * Sidecar tells Rook to run SSSD in a sidecar alongside the NFS-Ganesha server in each NFS pod.
         */
        interface CephNFSSpecSecuritySssdSidecarPatch {
            /**
             * AdditionalFiles defines any number of additional files that should be mounted into the SSSD
             * sidecar with a directory root of `/etc/sssd/rook-additional/`.
             * These files may be referenced by the sssd.conf config file.
             */
            additionalFiles?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarAdditionalFilesPatch>[]>;
            /**
             * DebugLevel sets the debug level for SSSD. If unset or set to 0, Rook does nothing. Otherwise,
             * this may be a value between 1 and 10. See SSSD docs for more info:
             * https://sssd.io/troubleshooting/basics.html#sssd-debug-logs
             */
            debugLevel?: pulumi.Input<number>;
            /**
             * Image defines the container image that should be used for the SSSD sidecar.
             */
            image?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarResourcesPatch>;
            sssdConfigFile?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFilePatch>;
        }
        /**
         * Resources allow specifying resource requests/limits on the SSSD sidecar container.
         */
        interface CephNFSSpecSecuritySssdSidecarResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarResourcesClaims>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface CephNFSSpecSecuritySssdSidecarResourcesClaims {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface CephNFSSpecSecuritySssdSidecarResourcesClaimsPatch {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * Resources allow specifying resource requests/limits on the SSSD sidecar container.
         */
        interface CephNFSSpecSecuritySssdSidecarResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarResourcesClaimsPatch>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * SSSDConfigFile defines where the SSSD configuration should be sourced from. The config file
         * will be placed into `/etc/sssd/sssd.conf`. If this is left empty, Rook will not add the file.
         * This allows you to manage the `sssd.conf` file yourself however you wish. For example, you
         * may build it into your custom Ceph container image or use the Vault agent injector to
         * securely add the file via annotations on the CephNFS spec (passed to the NFS server pods).
         */
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFile {
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSource>;
        }
        /**
         * SSSDConfigFile defines where the SSSD configuration should be sourced from. The config file
         * will be placed into `/etc/sssd/sssd.conf`. If this is left empty, Rook will not add the file.
         * This allows you to manage the `sssd.conf` file yourself however you wish. For example, you
         * may build it into your custom Ceph container image or use the Vault agent injector to
         * securely add the file via annotations on the CephNFS spec (passed to the NFS server pods).
         */
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFilePatch {
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourcePatch>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSource {
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceConfigMap>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceEmptyDir>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceHostPath>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourcePersistentVolumeClaim>;
            projected?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjected>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceSecret>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourcePatch {
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceConfigMapPatch>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceEmptyDirPatch>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceHostPathPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourcePersistentVolumeClaimPatch>;
            projected?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceSecretPatch>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourcePersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourcePersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSources>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesPatch>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSources {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundle>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesServiceAccountToken>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundle {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundlePatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItems>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesPatch {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesClusterTrustBundlePatch>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesServiceAccountTokenPatch>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecSecuritySssdSidecarSssdConfigFileVolumeSourceSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        /**
         * Server is the Ganesha Server specification
         */
        interface CephNFSSpecServer {
            /**
             * The number of active Ganesha servers
             */
            active?: pulumi.Input<number>;
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Whether host networking is enabled for the Ganesha server. If not set, the network settings from the cluster CR will be applied.
             */
            hostNetwork?: pulumi.Input<boolean>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            livenessProbe?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbe>;
            /**
             * LogLevel set logging level
             */
            logLevel?: pulumi.Input<string>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * PriorityClassName sets the priority class on the pods
             */
            priorityClassName?: pulumi.Input<string>;
            /**
             * Resources set resource requests and limits
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * A liveness-probe to verify that Ganesha server has valid run-time state.
         * If LivenessProbe.Disabled is false and LivenessProbe.Probe is nil uses default probe.
         */
        interface CephNFSSpecServerLivenessProbe {
            /**
             * Disabled determines whether probe is disable or not
             */
            disabled?: pulumi.Input<boolean>;
            probe?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbe>;
        }
        /**
         * A liveness-probe to verify that Ganesha server has valid run-time state.
         * If LivenessProbe.Disabled is false and LivenessProbe.Probe is nil uses default probe.
         */
        interface CephNFSSpecServerLivenessProbePatch {
            /**
             * Disabled determines whether probe is disable or not
             */
            disabled?: pulumi.Input<boolean>;
            probe?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbePatch>;
        }
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        interface CephNFSSpecServerLivenessProbeProbe {
            exec?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeExec>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             * Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeGrpc>;
            httpGet?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeHttpGet>;
            /**
             * Number of seconds after the container has started before liveness probes are initiated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             * Default to 10 seconds. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out.
             * Defaults to 1 second. Minimum value is 1.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Exec specifies a command to execute in the container.
         */
        interface CephNFSSpecServerLivenessProbeProbeExec {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Exec specifies a command to execute in the container.
         */
        interface CephNFSSpecServerLivenessProbeProbeExecPatch {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        interface CephNFSSpecServerLivenessProbeProbeGrpc {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port?: pulumi.Input<number>;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: pulumi.Input<string>;
        }
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        interface CephNFSSpecServerLivenessProbeProbeGrpcPatch {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port?: pulumi.Input<number>;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: pulumi.Input<string>;
        }
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        interface CephNFSSpecServerLivenessProbeProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: pulumi.Input<string>;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeHttpGetHttpHeaders>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader describes a custom header to be used in HTTP probes
         */
        interface CephNFSSpecServerLivenessProbeProbeHttpGetHttpHeaders {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name?: pulumi.Input<string>;
            /**
             * The header field value
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader describes a custom header to be used in HTTP probes
         */
        interface CephNFSSpecServerLivenessProbeProbeHttpGetHttpHeadersPatch {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name?: pulumi.Input<string>;
            /**
             * The header field value
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        interface CephNFSSpecServerLivenessProbeProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: pulumi.Input<string>;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeHttpGetHttpHeadersPatch>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: pulumi.Input<string>;
        }
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        interface CephNFSSpecServerLivenessProbeProbePatch {
            exec?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeExecPatch>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             * Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeHttpGetPatch>;
            /**
             * Number of seconds after the container has started before liveness probes are initiated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             * Default to 10 seconds. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbeProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out.
             * Defaults to 1 second. Minimum value is 1.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        interface CephNFSSpecServerLivenessProbeProbeTcpSocket {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
        }
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        interface CephNFSSpecServerLivenessProbeProbeTcpSocketPatch {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
        }
        /**
         * Server is the Ganesha Server specification
         */
        interface CephNFSSpecServerPatch {
            /**
             * The number of active Ganesha servers
             */
            active?: pulumi.Input<number>;
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Whether host networking is enabled for the Ganesha server. If not set, the network settings from the cluster CR will be applied.
             */
            hostNetwork?: pulumi.Input<boolean>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            livenessProbe?: pulumi.Input<inputs.ceph.v1.CephNFSSpecServerLivenessProbePatch>;
            /**
             * LogLevel set logging level
             */
            logLevel?: pulumi.Input<string>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * PriorityClassName sets the priority class on the pods
             */
            priorityClassName?: pulumi.Input<string>;
            /**
             * Resources set resource requests and limits
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * CephObjectRealm represents a Ceph Object Store Gateway Realm
         */
        interface CephObjectRealm {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephObjectRealm">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephObjectRealmSpec>;
            /**
             * Status represents the status of an object
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * ObjectRealmSpec represent the spec of an ObjectRealm
         */
        interface CephObjectRealmSpec {
            pull?: pulumi.Input<inputs.ceph.v1.CephObjectRealmSpecPull>;
        }
        /**
         * ObjectRealmSpec represent the spec of an ObjectRealm
         */
        interface CephObjectRealmSpecPatch {
            pull?: pulumi.Input<inputs.ceph.v1.CephObjectRealmSpecPullPatch>;
        }
        /**
         * PullSpec represents the pulling specification of a Ceph Object Storage Gateway Realm
         */
        interface CephObjectRealmSpecPull {
            endpoint?: pulumi.Input<string>;
        }
        /**
         * PullSpec represents the pulling specification of a Ceph Object Storage Gateway Realm
         */
        interface CephObjectRealmSpecPullPatch {
            endpoint?: pulumi.Input<string>;
        }
        /**
         * CephObjectStore represents a Ceph Object Store Gateway
         */
        interface CephObjectStore {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephObjectStore">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpec>;
            /**
             * ObjectStoreStatus represents the status of a Ceph Object Store resource
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * ObjectStoreSpec represent the spec of a pool
         */
        interface CephObjectStoreSpec {
            /**
             * The list of allowed namespaces in addition to the object store namespace
             * where ceph object store users may be created. Specify "*" to allow all
             * namespaces, otherwise list individual namespaces that are to be allowed.
             * This is useful for applications that need object store credentials
             * to be created in their own namespace, where neither OBCs nor COSI
             * is being used to create buckets. The default is empty.
             */
            allowUsersInNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            auth?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecAuth>;
            dataPool?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPool>;
            gateway?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGateway>;
            healthCheck?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheck>;
            hosting?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHosting>;
            metadataPool?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPool>;
            /**
             * Preserve pools on object store deletion
             */
            preservePoolsOnDelete?: pulumi.Input<boolean>;
            protocols?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecProtocols>;
            security?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSecurity>;
            sharedPools?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSharedPools>;
            zone?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecZone>;
        }
        /**
         * The authentication configuration
         */
        interface CephObjectStoreSpecAuth {
            keystone?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecAuthKeystone>;
        }
        /**
         * The spec for Keystone
         */
        interface CephObjectStoreSpecAuthKeystone {
            /**
             * The roles requires to serve requests.
             */
            acceptedRoles?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Create new users in their own tenants of the same name. Possible values are true, false, swift and s3. The latter have the effect of splitting the identity space such that only the indicated protocol will use implicit tenants.
             */
            implicitTenants?: pulumi.Input<string>;
            /**
             * The number of seconds between token revocation checks.
             */
            revocationInterval?: pulumi.Input<number>;
            /**
             * The name of the secret containing the credentials for the service user account used by RGW. It has to be in the same namespace as the object store resource.
             */
            serviceUserSecretName?: pulumi.Input<string>;
            /**
             * The maximum number of entries in each Keystone token cache.
             */
            tokenCacheSize?: pulumi.Input<number>;
            /**
             * The URL for the Keystone server.
             */
            url?: pulumi.Input<string>;
        }
        /**
         * The spec for Keystone
         */
        interface CephObjectStoreSpecAuthKeystonePatch {
            /**
             * The roles requires to serve requests.
             */
            acceptedRoles?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Create new users in their own tenants of the same name. Possible values are true, false, swift and s3. The latter have the effect of splitting the identity space such that only the indicated protocol will use implicit tenants.
             */
            implicitTenants?: pulumi.Input<string>;
            /**
             * The number of seconds between token revocation checks.
             */
            revocationInterval?: pulumi.Input<number>;
            /**
             * The name of the secret containing the credentials for the service user account used by RGW. It has to be in the same namespace as the object store resource.
             */
            serviceUserSecretName?: pulumi.Input<string>;
            /**
             * The maximum number of entries in each Keystone token cache.
             */
            tokenCacheSize?: pulumi.Input<number>;
            /**
             * The URL for the Keystone server.
             */
            url?: pulumi.Input<string>;
        }
        /**
         * The authentication configuration
         */
        interface CephObjectStoreSpecAuthPatch {
            keystone?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecAuthKeystonePatch>;
        }
        /**
         * The data pool settings
         */
        interface CephObjectStoreSpecDataPool {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolErasureCoded>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolMirroring>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolQuotas>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolReplicated>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The erasure code settings
         */
        interface CephObjectStoreSpecDataPoolErasureCoded {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The erasure code settings
         */
        interface CephObjectStoreSpecDataPoolErasureCodedPatch {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The mirroring settings
         */
        interface CephObjectStoreSpecDataPoolMirroring {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolMirroringPeers>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolMirroringSnapshotSchedules>[]>;
        }
        /**
         * The mirroring settings
         */
        interface CephObjectStoreSpecDataPoolMirroringPatch {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolMirroringPeersPatch>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephObjectStoreSpecDataPoolMirroringPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephObjectStoreSpecDataPoolMirroringPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephObjectStoreSpecDataPoolMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephObjectStoreSpecDataPoolMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * The data pool settings
         */
        interface CephObjectStoreSpecDataPoolPatch {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolErasureCodedPatch>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolMirroringPatch>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolQuotasPatch>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolReplicatedPatch>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The quota settings
         */
        interface CephObjectStoreSpecDataPoolQuotas {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The quota settings
         */
        interface CephObjectStoreSpecDataPoolQuotasPatch {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephObjectStoreSpecDataPoolReplicated {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolReplicatedHybridStorage>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephObjectStoreSpecDataPoolReplicatedHybridStorage {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephObjectStoreSpecDataPoolReplicatedHybridStoragePatch {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephObjectStoreSpecDataPoolReplicatedPatch {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolReplicatedHybridStoragePatch>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * The rgw pod info
         */
        interface CephObjectStoreSpecGateway {
            /**
             * AdditionalVolumeMounts allows additional volumes to be mounted to the RGW pod.
             * The root directory for each additional volume mount is `/var/rgw`.
             * Example: for an additional mount at subPath `ldap`, mounted from a secret that has key
             * `bindpass.secret`, the file would reside at `/var/rgw/ldap/bindpass.secret`.
             */
            additionalVolumeMounts?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMounts>[]>;
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * The name of the secret that stores custom ca-bundle with root and intermediate certificates.
             */
            caBundleRef?: pulumi.Input<string>;
            /**
             * Whether rgw dashboard is enabled for the rgw daemon. If not set, the rgw dashboard will be enabled.
             */
            dashboardEnabled?: pulumi.Input<boolean>;
            /**
             * DisableMultisiteSyncTraffic, when true, prevents this object store's gateways from
             * transmitting multisite replication data. Note that this value does not affect whether
             * gateways receive multisite replication traffic: see ObjectZone.spec.customEndpoints for that.
             * If false or unset, this object store's gateways will be able to transmit multisite
             * replication data.
             */
            disableMultisiteSyncTraffic?: pulumi.Input<boolean>;
            /**
             * ExternalRgwEndpoints points to external RGW endpoint(s). Multiple endpoints can be given, but
             * for stability of ObjectBucketClaims, we highly recommend that users give only a single
             * external RGW endpoint that is a load balancer that sends requests to the multiple RGWs.
             */
            externalRgwEndpoints?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayExternalRgwEndpoints>[]>;
            /**
             * Whether host networking is enabled for the rgw daemon. If not set, the network settings from the cluster CR will be applied.
             */
            hostNetwork?: pulumi.Input<boolean>;
            /**
             * The number of pods in the rgw replicaset.
             */
            instances?: pulumi.Input<number>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            opsLogSidecar?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayOpsLogSidecar>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * The port the rgw service will be listening on (http)
             */
            port?: pulumi.Input<number>;
            /**
             * PriorityClassName sets priority classes on the rgw pods
             */
            priorityClassName?: pulumi.Input<string>;
            /**
             * The resource requirements for the rgw pods
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * RgwCommandFlags sets Ceph RGW config values for the gateway clients that serve this object
             * store. Values are modified at RGW startup, resulting in RGW pod restarts.
             * This feature is intended for advanced users. It allows breaking configurations to be easily
             * applied. Use with caution.
             */
            rgwCommandFlags?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * RgwConfig sets Ceph RGW config values for the gateway clients that serve this object store.
             * Values are modified at runtime without RGW restart.
             * This feature is intended for advanced users. It allows breaking configurations to be easily
             * applied. Use with caution.
             */
            rgwConfig?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The port the rgw service will be listening on (https)
             */
            securePort?: pulumi.Input<number>;
            service?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayService>;
            /**
             * The name of the secret that stores the ssl certificate for secure rgw connections
             */
            sslCertificateRef?: pulumi.Input<string>;
        }
        /**
         * AdditionalVolumeMount represents the source from where additional files in pod containers
         * should come from and what subdirectory they are made available in.
         */
        interface CephObjectStoreSpecGatewayAdditionalVolumeMounts {
            /**
             * SubPath defines the sub-path (subdirectory) of the directory root where the volumeSource will
             * be mounted. All files/keys in the volume source's volume will be mounted to the subdirectory.
             * This is not the same as the Kubernetes `subPath` volume mount option.
             * Each subPath definition must be unique and must not contain ':'.
             */
            subPath?: pulumi.Input<string>;
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSource>;
        }
        /**
         * AdditionalVolumeMount represents the source from where additional files in pod containers
         * should come from and what subdirectory they are made available in.
         */
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsPatch {
            /**
             * SubPath defines the sub-path (subdirectory) of the directory root where the volumeSource will
             * be mounted. All files/keys in the volume source's volume will be mounted to the subdirectory.
             * This is not the same as the Kubernetes `subPath` volume mount option.
             * Each subPath definition must be unique and must not contain ':'.
             */
            subPath?: pulumi.Input<string>;
            volumeSource?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourcePatch>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSource {
            configMap?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim>;
            projected?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjected>;
            secret?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceSecret>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourcePatch {
            configMap?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceConfigMapPatch>;
            emptyDir?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceEmptyDirPatch>;
            hostPath?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceHostPathPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaimPatch>;
            projected?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceSecretPatch>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourcePersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources>[]>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesPatch>[]>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSources {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundle {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundlePatch {
            labelSelector?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorPatch>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItems>[]>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesPatch {
            clusterTrustBundle?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesClusterTrustBundlePatch>;
            configMap?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountTokenPatch>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsVolumeSourceSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        /**
         * EndpointAddress is a tuple that describes a single IP address or host name. This is a subset of
         * Kubernetes's v1.EndpointAddress.
         */
        interface CephObjectStoreSpecGatewayExternalRgwEndpoints {
            /**
             * The DNS-addressable Hostname of this endpoint. This field will be preferred over IP if both are given.
             */
            hostname?: pulumi.Input<string>;
            /**
             * The IP of this endpoint. As a legacy behavior, this supports being given a DNS-addressable hostname as well.
             */
            ip?: pulumi.Input<string>;
        }
        /**
         * EndpointAddress is a tuple that describes a single IP address or host name. This is a subset of
         * Kubernetes's v1.EndpointAddress.
         */
        interface CephObjectStoreSpecGatewayExternalRgwEndpointsPatch {
            /**
             * The DNS-addressable Hostname of this endpoint. This field will be preferred over IP if both are given.
             */
            hostname?: pulumi.Input<string>;
            /**
             * The IP of this endpoint. As a legacy behavior, this supports being given a DNS-addressable hostname as well.
             */
            ip?: pulumi.Input<string>;
        }
        /**
         * Enable enhanced operation Logs for S3 in a sidecar named ops-log
         */
        interface CephObjectStoreSpecGatewayOpsLogSidecar {
            resources?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayOpsLogSidecarResources>;
        }
        /**
         * Enable enhanced operation Logs for S3 in a sidecar named ops-log
         */
        interface CephObjectStoreSpecGatewayOpsLogSidecarPatch {
            resources?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayOpsLogSidecarResourcesPatch>;
        }
        /**
         * Resources represents the way to specify resource requirements for the ops-log sidecar
         */
        interface CephObjectStoreSpecGatewayOpsLogSidecarResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayOpsLogSidecarResourcesClaims>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface CephObjectStoreSpecGatewayOpsLogSidecarResourcesClaims {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface CephObjectStoreSpecGatewayOpsLogSidecarResourcesClaimsPatch {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * Resources represents the way to specify resource requirements for the ops-log sidecar
         */
        interface CephObjectStoreSpecGatewayOpsLogSidecarResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayOpsLogSidecarResourcesClaimsPatch>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * The rgw pod info
         */
        interface CephObjectStoreSpecGatewayPatch {
            /**
             * AdditionalVolumeMounts allows additional volumes to be mounted to the RGW pod.
             * The root directory for each additional volume mount is `/var/rgw`.
             * Example: for an additional mount at subPath `ldap`, mounted from a secret that has key
             * `bindpass.secret`, the file would reside at `/var/rgw/ldap/bindpass.secret`.
             */
            additionalVolumeMounts?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayAdditionalVolumeMountsPatch>[]>;
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * The name of the secret that stores custom ca-bundle with root and intermediate certificates.
             */
            caBundleRef?: pulumi.Input<string>;
            /**
             * Whether rgw dashboard is enabled for the rgw daemon. If not set, the rgw dashboard will be enabled.
             */
            dashboardEnabled?: pulumi.Input<boolean>;
            /**
             * DisableMultisiteSyncTraffic, when true, prevents this object store's gateways from
             * transmitting multisite replication data. Note that this value does not affect whether
             * gateways receive multisite replication traffic: see ObjectZone.spec.customEndpoints for that.
             * If false or unset, this object store's gateways will be able to transmit multisite
             * replication data.
             */
            disableMultisiteSyncTraffic?: pulumi.Input<boolean>;
            /**
             * ExternalRgwEndpoints points to external RGW endpoint(s). Multiple endpoints can be given, but
             * for stability of ObjectBucketClaims, we highly recommend that users give only a single
             * external RGW endpoint that is a load balancer that sends requests to the multiple RGWs.
             */
            externalRgwEndpoints?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayExternalRgwEndpointsPatch>[]>;
            /**
             * Whether host networking is enabled for the rgw daemon. If not set, the network settings from the cluster CR will be applied.
             */
            hostNetwork?: pulumi.Input<boolean>;
            /**
             * The number of pods in the rgw replicaset.
             */
            instances?: pulumi.Input<number>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            opsLogSidecar?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayOpsLogSidecarPatch>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * The port the rgw service will be listening on (http)
             */
            port?: pulumi.Input<number>;
            /**
             * PriorityClassName sets priority classes on the rgw pods
             */
            priorityClassName?: pulumi.Input<string>;
            /**
             * The resource requirements for the rgw pods
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * RgwCommandFlags sets Ceph RGW config values for the gateway clients that serve this object
             * store. Values are modified at RGW startup, resulting in RGW pod restarts.
             * This feature is intended for advanced users. It allows breaking configurations to be easily
             * applied. Use with caution.
             */
            rgwCommandFlags?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * RgwConfig sets Ceph RGW config values for the gateway clients that serve this object store.
             * Values are modified at runtime without RGW restart.
             * This feature is intended for advanced users. It allows breaking configurations to be easily
             * applied. Use with caution.
             */
            rgwConfig?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The port the rgw service will be listening on (https)
             */
            securePort?: pulumi.Input<number>;
            service?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayServicePatch>;
            /**
             * The name of the secret that stores the ssl certificate for secure rgw connections
             */
            sslCertificateRef?: pulumi.Input<string>;
        }
        /**
         * The configuration related to add/set on each rgw service.
         */
        interface CephObjectStoreSpecGatewayService {
            /**
             * The annotations-related configuration to add/set on each rgw service.
             * nullable
             * optional
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * The configuration related to add/set on each rgw service.
         */
        interface CephObjectStoreSpecGatewayServicePatch {
            /**
             * The annotations-related configuration to add/set on each rgw service.
             * nullable
             * optional
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * The RGW health probes
         */
        interface CephObjectStoreSpecHealthCheck {
            /**
             * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
             */
            readinessProbe?: pulumi.Input<{
                [key: string]: any;
            }>;
            startupProbe?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbe>;
        }
        /**
         * The RGW health probes
         */
        interface CephObjectStoreSpecHealthCheckPatch {
            /**
             * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
             */
            readinessProbe?: pulumi.Input<{
                [key: string]: any;
            }>;
            startupProbe?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbePatch>;
        }
        /**
         * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
         */
        interface CephObjectStoreSpecHealthCheckStartupProbe {
            /**
             * Disabled determines whether probe is disable or not
             */
            disabled?: pulumi.Input<boolean>;
            probe?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbe>;
        }
        /**
         * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
         */
        interface CephObjectStoreSpecHealthCheckStartupProbePatch {
            /**
             * Disabled determines whether probe is disable or not
             */
            disabled?: pulumi.Input<boolean>;
            probe?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbePatch>;
        }
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbe {
            exec?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeExec>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             * Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeGrpc>;
            httpGet?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeHttpGet>;
            /**
             * Number of seconds after the container has started before liveness probes are initiated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             * Default to 10 seconds. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out.
             * Defaults to 1 second. Minimum value is 1.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Exec specifies a command to execute in the container.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeExec {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Exec specifies a command to execute in the container.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeExecPatch {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeGrpc {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port?: pulumi.Input<number>;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: pulumi.Input<string>;
        }
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeGrpcPatch {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port?: pulumi.Input<number>;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: pulumi.Input<string>;
        }
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: pulumi.Input<string>;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader describes a custom header to be used in HTTP probes
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeHttpGetHttpHeaders {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name?: pulumi.Input<string>;
            /**
             * The header field value
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader describes a custom header to be used in HTTP probes
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersPatch {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name?: pulumi.Input<string>;
            /**
             * The header field value
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: pulumi.Input<string>;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeHttpGetHttpHeadersPatch>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: pulumi.Input<string>;
        }
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbePatch {
            exec?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeExecPatch>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             * Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeHttpGetPatch>;
            /**
             * Number of seconds after the container has started before liveness probes are initiated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             * Default to 10 seconds. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckStartupProbeProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out.
             * Defaults to 1 second. Minimum value is 1.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeTcpSocket {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
        }
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        interface CephObjectStoreSpecHealthCheckStartupProbeProbeTcpSocketPatch {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port?: pulumi.Input<number | string>;
        }
        /**
         * Hosting settings for the object store.
         * A common use case for hosting configuration is to inform Rook of endpoints that support DNS
         * wildcards, which in turn allows virtual host-style bucket addressing.
         */
        interface CephObjectStoreSpecHosting {
            advertiseEndpoint?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHostingAdvertiseEndpoint>;
            /**
             * A list of DNS host names on which object store gateways will accept client S3 connections.
             * When specified, object store gateways will reject client S3 connections to hostnames that are
             * not present in this list, so include all endpoints.
             * The object store's advertiseEndpoint and Kubernetes service endpoint, plus CephObjectZone
             * `customEndpoints` are automatically added to the list but may be set here again if desired.
             * Each DNS name must be valid according RFC-1123.
             * If the DNS name corresponds to an endpoint with DNS wildcard support, do not include the
             * wildcard itself in the list of hostnames.
             * E.g., use "mystore.example.com" instead of "*.mystore.example.com".
             */
            dnsNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * AdvertiseEndpoint is the default endpoint Rook will return for resources dependent on this
         * object store. This endpoint will be returned to CephObjectStoreUsers, Object Bucket Claims,
         * and COSI Buckets/Accesses.
         * By default, Rook returns the endpoint for the object store's Kubernetes service using HTTPS
         * with `gateway.securePort` if it is defined (otherwise, HTTP with `gateway.port`).
         */
        interface CephObjectStoreSpecHostingAdvertiseEndpoint {
            /**
             * DnsName is the DNS name (in RFC-1123 format) of the endpoint.
             * If the DNS name corresponds to an endpoint with DNS wildcard support, do not include the
             * wildcard itself in the list of hostnames.
             * E.g., use "mystore.example.com" instead of "*.mystore.example.com".
             */
            dnsName?: pulumi.Input<string>;
            /**
             * Port is the port on which S3 connections can be made for this endpoint.
             */
            port?: pulumi.Input<number>;
            /**
             * UseTls defines whether the endpoint uses TLS (HTTPS) or not (HTTP).
             */
            useTls?: pulumi.Input<boolean>;
        }
        /**
         * AdvertiseEndpoint is the default endpoint Rook will return for resources dependent on this
         * object store. This endpoint will be returned to CephObjectStoreUsers, Object Bucket Claims,
         * and COSI Buckets/Accesses.
         * By default, Rook returns the endpoint for the object store's Kubernetes service using HTTPS
         * with `gateway.securePort` if it is defined (otherwise, HTTP with `gateway.port`).
         */
        interface CephObjectStoreSpecHostingAdvertiseEndpointPatch {
            /**
             * DnsName is the DNS name (in RFC-1123 format) of the endpoint.
             * If the DNS name corresponds to an endpoint with DNS wildcard support, do not include the
             * wildcard itself in the list of hostnames.
             * E.g., use "mystore.example.com" instead of "*.mystore.example.com".
             */
            dnsName?: pulumi.Input<string>;
            /**
             * Port is the port on which S3 connections can be made for this endpoint.
             */
            port?: pulumi.Input<number>;
            /**
             * UseTls defines whether the endpoint uses TLS (HTTPS) or not (HTTP).
             */
            useTls?: pulumi.Input<boolean>;
        }
        /**
         * Hosting settings for the object store.
         * A common use case for hosting configuration is to inform Rook of endpoints that support DNS
         * wildcards, which in turn allows virtual host-style bucket addressing.
         */
        interface CephObjectStoreSpecHostingPatch {
            advertiseEndpoint?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHostingAdvertiseEndpointPatch>;
            /**
             * A list of DNS host names on which object store gateways will accept client S3 connections.
             * When specified, object store gateways will reject client S3 connections to hostnames that are
             * not present in this list, so include all endpoints.
             * The object store's advertiseEndpoint and Kubernetes service endpoint, plus CephObjectZone
             * `customEndpoints` are automatically added to the list but may be set here again if desired.
             * Each DNS name must be valid according RFC-1123.
             * If the DNS name corresponds to an endpoint with DNS wildcard support, do not include the
             * wildcard itself in the list of hostnames.
             * E.g., use "mystore.example.com" instead of "*.mystore.example.com".
             */
            dnsNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * The metadata pool settings
         */
        interface CephObjectStoreSpecMetadataPool {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolErasureCoded>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolMirroring>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolQuotas>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolReplicated>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The erasure code settings
         */
        interface CephObjectStoreSpecMetadataPoolErasureCoded {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The erasure code settings
         */
        interface CephObjectStoreSpecMetadataPoolErasureCodedPatch {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The mirroring settings
         */
        interface CephObjectStoreSpecMetadataPoolMirroring {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolMirroringPeers>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolMirroringSnapshotSchedules>[]>;
        }
        /**
         * The mirroring settings
         */
        interface CephObjectStoreSpecMetadataPoolMirroringPatch {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolMirroringPeersPatch>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephObjectStoreSpecMetadataPoolMirroringPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephObjectStoreSpecMetadataPoolMirroringPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephObjectStoreSpecMetadataPoolMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephObjectStoreSpecMetadataPoolMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * The metadata pool settings
         */
        interface CephObjectStoreSpecMetadataPoolPatch {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolErasureCodedPatch>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolMirroringPatch>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolQuotasPatch>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolReplicatedPatch>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The quota settings
         */
        interface CephObjectStoreSpecMetadataPoolQuotas {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The quota settings
         */
        interface CephObjectStoreSpecMetadataPoolQuotasPatch {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephObjectStoreSpecMetadataPoolReplicated {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolReplicatedHybridStorage>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephObjectStoreSpecMetadataPoolReplicatedHybridStorage {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephObjectStoreSpecMetadataPoolReplicatedHybridStoragePatch {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephObjectStoreSpecMetadataPoolReplicatedPatch {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolReplicatedHybridStoragePatch>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * ObjectStoreSpec represent the spec of a pool
         */
        interface CephObjectStoreSpecPatch {
            /**
             * The list of allowed namespaces in addition to the object store namespace
             * where ceph object store users may be created. Specify "*" to allow all
             * namespaces, otherwise list individual namespaces that are to be allowed.
             * This is useful for applications that need object store credentials
             * to be created in their own namespace, where neither OBCs nor COSI
             * is being used to create buckets. The default is empty.
             */
            allowUsersInNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            auth?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecAuthPatch>;
            dataPool?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecDataPoolPatch>;
            gateway?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecGatewayPatch>;
            healthCheck?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHealthCheckPatch>;
            hosting?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecHostingPatch>;
            metadataPool?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecMetadataPoolPatch>;
            /**
             * Preserve pools on object store deletion
             */
            preservePoolsOnDelete?: pulumi.Input<boolean>;
            protocols?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecProtocolsPatch>;
            security?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSecurityPatch>;
            sharedPools?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSharedPoolsPatch>;
            zone?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecZonePatch>;
        }
        /**
         * The protocol specification
         */
        interface CephObjectStoreSpecProtocols {
            /**
             * Represents RGW 'rgw_enable_apis' config option. See: https://docs.ceph.com/en/reef/radosgw/config-ref/#confval-rgw_enable_apis
             * If no value provided then all APIs will be enabled: s3, s3website, swift, swift_auth, admin, sts, iam, notifications
             * If enabled APIs are set, all remaining APIs will be disabled.
             * This option overrides S3.Enabled value.
             */
            enableAPIs?: pulumi.Input<pulumi.Input<string>[]>;
            s3?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecProtocolsS3>;
            swift?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecProtocolsSwift>;
        }
        /**
         * The protocol specification
         */
        interface CephObjectStoreSpecProtocolsPatch {
            /**
             * Represents RGW 'rgw_enable_apis' config option. See: https://docs.ceph.com/en/reef/radosgw/config-ref/#confval-rgw_enable_apis
             * If no value provided then all APIs will be enabled: s3, s3website, swift, swift_auth, admin, sts, iam, notifications
             * If enabled APIs are set, all remaining APIs will be disabled.
             * This option overrides S3.Enabled value.
             */
            enableAPIs?: pulumi.Input<pulumi.Input<string>[]>;
            s3?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecProtocolsS3Patch>;
            swift?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecProtocolsSwiftPatch>;
        }
        /**
         * The spec for S3
         */
        interface CephObjectStoreSpecProtocolsS3 {
            /**
             * Whether to use Keystone for authentication. This option maps directly to the rgw_s3_auth_use_keystone option. Enabling it allows generating S3 credentials via an OpenStack API call, see the docs. If not given, the defaults of the corresponding RGW option apply.
             */
            authUseKeystone?: pulumi.Input<boolean>;
            /**
             * Deprecated: use protocol.enableAPIs instead.
             * Whether to enable S3. This defaults to true (even if protocols.s3 is not present in the CRD). This maintains backwards compatibility – by default S3 is enabled.
             */
            enabled?: pulumi.Input<boolean>;
        }
        /**
         * The spec for S3
         */
        interface CephObjectStoreSpecProtocolsS3Patch {
            /**
             * Whether to use Keystone for authentication. This option maps directly to the rgw_s3_auth_use_keystone option. Enabling it allows generating S3 credentials via an OpenStack API call, see the docs. If not given, the defaults of the corresponding RGW option apply.
             */
            authUseKeystone?: pulumi.Input<boolean>;
            /**
             * Deprecated: use protocol.enableAPIs instead.
             * Whether to enable S3. This defaults to true (even if protocols.s3 is not present in the CRD). This maintains backwards compatibility – by default S3 is enabled.
             */
            enabled?: pulumi.Input<boolean>;
        }
        /**
         * The spec for Swift
         */
        interface CephObjectStoreSpecProtocolsSwift {
            /**
             * Whether or not the Swift account name should be included in the Swift API URL. If set to false (the default), then the Swift API will listen on a URL formed like http://host:port/<rgw_swift_url_prefix>/v1. If set to true, the Swift API URL will be http://host:port/<rgw_swift_url_prefix>/v1/AUTH_<account_name>. You must set this option to true (and update the Keystone service catalog) if you want radosgw to support publicly-readable containers and temporary URLs.
             */
            accountInUrl?: pulumi.Input<boolean>;
            /**
             * The URL prefix for the Swift API, to distinguish it from the S3 API endpoint. The default is swift, which makes the Swift API available at the URL http://host:port/swift/v1 (or http://host:port/swift/v1/AUTH_%(tenant_id)s if rgw swift account in url is enabled).
             */
            urlPrefix?: pulumi.Input<string>;
            /**
             * Enables the Object Versioning of OpenStack Object Storage API. This allows clients to put the X-Versions-Location attribute on containers that should be versioned.
             */
            versioningEnabled?: pulumi.Input<boolean>;
        }
        /**
         * The spec for Swift
         */
        interface CephObjectStoreSpecProtocolsSwiftPatch {
            /**
             * Whether or not the Swift account name should be included in the Swift API URL. If set to false (the default), then the Swift API will listen on a URL formed like http://host:port/<rgw_swift_url_prefix>/v1. If set to true, the Swift API URL will be http://host:port/<rgw_swift_url_prefix>/v1/AUTH_<account_name>. You must set this option to true (and update the Keystone service catalog) if you want radosgw to support publicly-readable containers and temporary URLs.
             */
            accountInUrl?: pulumi.Input<boolean>;
            /**
             * The URL prefix for the Swift API, to distinguish it from the S3 API endpoint. The default is swift, which makes the Swift API available at the URL http://host:port/swift/v1 (or http://host:port/swift/v1/AUTH_%(tenant_id)s if rgw swift account in url is enabled).
             */
            urlPrefix?: pulumi.Input<string>;
            /**
             * Enables the Object Versioning of OpenStack Object Storage API. This allows clients to put the X-Versions-Location attribute on containers that should be versioned.
             */
            versioningEnabled?: pulumi.Input<boolean>;
        }
        /**
         * Security represents security settings
         */
        interface CephObjectStoreSpecSecurity {
            keyRotation?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSecurityKeyRotation>;
            kms?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSecurityKms>;
            s3?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSecurityS3>;
        }
        /**
         * KeyRotation defines options for Key Rotation.
         */
        interface CephObjectStoreSpecSecurityKeyRotation {
            /**
             * Enabled represents whether the key rotation is enabled.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Schedule represents the cron schedule for key rotation.
             */
            schedule?: pulumi.Input<string>;
        }
        /**
         * KeyRotation defines options for Key Rotation.
         */
        interface CephObjectStoreSpecSecurityKeyRotationPatch {
            /**
             * Enabled represents whether the key rotation is enabled.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Schedule represents the cron schedule for key rotation.
             */
            schedule?: pulumi.Input<string>;
        }
        /**
         * KeyManagementService is the main Key Management option
         */
        interface CephObjectStoreSpecSecurityKms {
            /**
             * ConnectionDetails contains the KMS connection details (address, port etc)
             */
            connectionDetails?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * TokenSecretName is the kubernetes secret containing the KMS token
             */
            tokenSecretName?: pulumi.Input<string>;
        }
        /**
         * KeyManagementService is the main Key Management option
         */
        interface CephObjectStoreSpecSecurityKmsPatch {
            /**
             * ConnectionDetails contains the KMS connection details (address, port etc)
             */
            connectionDetails?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * TokenSecretName is the kubernetes secret containing the KMS token
             */
            tokenSecretName?: pulumi.Input<string>;
        }
        /**
         * Security represents security settings
         */
        interface CephObjectStoreSpecSecurityPatch {
            keyRotation?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSecurityKeyRotationPatch>;
            kms?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSecurityKmsPatch>;
            s3?: pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSecurityS3Patch>;
        }
        /**
         * The settings for supporting AWS-SSE:S3 with RGW
         */
        interface CephObjectStoreSpecSecurityS3 {
            /**
             * ConnectionDetails contains the KMS connection details (address, port etc)
             */
            connectionDetails?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * TokenSecretName is the kubernetes secret containing the KMS token
             */
            tokenSecretName?: pulumi.Input<string>;
        }
        /**
         * The settings for supporting AWS-SSE:S3 with RGW
         */
        interface CephObjectStoreSpecSecurityS3Patch {
            /**
             * ConnectionDetails contains the KMS connection details (address, port etc)
             */
            connectionDetails?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * TokenSecretName is the kubernetes secret containing the KMS token
             */
            tokenSecretName?: pulumi.Input<string>;
        }
        /**
         * The pool information when configuring RADOS namespaces in existing pools.
         */
        interface CephObjectStoreSpecSharedPools {
            /**
             * The data pool used for creating RADOS namespaces in the object store
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * The metadata pool used for creating RADOS namespaces in the object store
             */
            metadataPoolName?: pulumi.Input<string>;
            /**
             * PoolPlacements control which Pools are associated with a particular RGW bucket.
             * Once PoolPlacements are defined, RGW client will be able to associate pool
             * with ObjectStore bucket by providing "<LocationConstraint>" during s3 bucket creation
             * or "X-Storage-Policy" header during swift container creation.
             * See: https://docs.ceph.com/en/latest/radosgw/placement/#placement-targets
             * PoolPlacement with name: "default" will be used as a default pool if no option
             * is provided during bucket creation.
             * If default placement is not provided, spec.sharedPools.dataPoolName and spec.sharedPools.MetadataPoolName will be used as default pools.
             * If spec.sharedPools are also empty, then RGW pools (spec.dataPool and spec.metadataPool) will be used as defaults.
             */
            poolPlacements?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSharedPoolsPoolPlacements>[]>;
            /**
             * Whether the RADOS namespaces should be preserved on deletion of the object store
             */
            preserveRadosNamespaceDataOnDelete?: pulumi.Input<boolean>;
        }
        /**
         * The pool information when configuring RADOS namespaces in existing pools.
         */
        interface CephObjectStoreSpecSharedPoolsPatch {
            /**
             * The data pool used for creating RADOS namespaces in the object store
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * The metadata pool used for creating RADOS namespaces in the object store
             */
            metadataPoolName?: pulumi.Input<string>;
            /**
             * PoolPlacements control which Pools are associated with a particular RGW bucket.
             * Once PoolPlacements are defined, RGW client will be able to associate pool
             * with ObjectStore bucket by providing "<LocationConstraint>" during s3 bucket creation
             * or "X-Storage-Policy" header during swift container creation.
             * See: https://docs.ceph.com/en/latest/radosgw/placement/#placement-targets
             * PoolPlacement with name: "default" will be used as a default pool if no option
             * is provided during bucket creation.
             * If default placement is not provided, spec.sharedPools.dataPoolName and spec.sharedPools.MetadataPoolName will be used as default pools.
             * If spec.sharedPools are also empty, then RGW pools (spec.dataPool and spec.metadataPool) will be used as defaults.
             */
            poolPlacements?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSharedPoolsPoolPlacementsPatch>[]>;
            /**
             * Whether the RADOS namespaces should be preserved on deletion of the object store
             */
            preserveRadosNamespaceDataOnDelete?: pulumi.Input<boolean>;
        }
        interface CephObjectStoreSpecSharedPoolsPoolPlacements {
            /**
             * The data pool used to store ObjectStore data that cannot use erasure coding (ex: multi-part uploads).
             * If dataPoolName is not erasure coded, then there is no need for dataNonECPoolName.
             */
            dataNonECPoolName?: pulumi.Input<string>;
            /**
             * The data pool used to store ObjectStore objects data.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * Sets given placement as default. Only one placement in the list can be marked as default.
             * Default is false.
             */
            default?: pulumi.Input<boolean>;
            /**
             * The metadata pool used to store ObjectStore bucket index.
             */
            metadataPoolName?: pulumi.Input<string>;
            /**
             * Pool placement name. Name can be arbitrary. Placement with name "default" will be used as default.
             */
            name?: pulumi.Input<string>;
            /**
             * StorageClasses can be selected by user to override dataPoolName during object creation.
             * Each placement has default STANDARD StorageClass pointing to dataPoolName.
             * This list allows defining additional StorageClasses on top of default STANDARD storage class.
             */
            storageClasses?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSharedPoolsPoolPlacementsStorageClasses>[]>;
        }
        interface CephObjectStoreSpecSharedPoolsPoolPlacementsPatch {
            /**
             * The data pool used to store ObjectStore data that cannot use erasure coding (ex: multi-part uploads).
             * If dataPoolName is not erasure coded, then there is no need for dataNonECPoolName.
             */
            dataNonECPoolName?: pulumi.Input<string>;
            /**
             * The data pool used to store ObjectStore objects data.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * Sets given placement as default. Only one placement in the list can be marked as default.
             * Default is false.
             */
            default?: pulumi.Input<boolean>;
            /**
             * The metadata pool used to store ObjectStore bucket index.
             */
            metadataPoolName?: pulumi.Input<string>;
            /**
             * Pool placement name. Name can be arbitrary. Placement with name "default" will be used as default.
             */
            name?: pulumi.Input<string>;
            /**
             * StorageClasses can be selected by user to override dataPoolName during object creation.
             * Each placement has default STANDARD StorageClass pointing to dataPoolName.
             * This list allows defining additional StorageClasses on top of default STANDARD storage class.
             */
            storageClasses?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectStoreSpecSharedPoolsPoolPlacementsStorageClassesPatch>[]>;
        }
        interface CephObjectStoreSpecSharedPoolsPoolPlacementsStorageClasses {
            /**
             * DataPoolName is the data pool used to store ObjectStore objects data.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * Name is the StorageClass name. Ceph allows arbitrary name for StorageClasses,
             * however most clients/libs insist on AWS names so it is recommended to use
             * one of the valid x-amz-storage-class values for better compatibility:
             * REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS | GLACIER_IR | SNOW | EXPRESS_ONEZONE
             * See AWS docs: https://aws.amazon.com/de/s3/storage-classes/
             */
            name?: pulumi.Input<string>;
        }
        interface CephObjectStoreSpecSharedPoolsPoolPlacementsStorageClassesPatch {
            /**
             * DataPoolName is the data pool used to store ObjectStore objects data.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * Name is the StorageClass name. Ceph allows arbitrary name for StorageClasses,
             * however most clients/libs insist on AWS names so it is recommended to use
             * one of the valid x-amz-storage-class values for better compatibility:
             * REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS | GLACIER_IR | SNOW | EXPRESS_ONEZONE
             * See AWS docs: https://aws.amazon.com/de/s3/storage-classes/
             */
            name?: pulumi.Input<string>;
        }
        /**
         * The multisite info
         */
        interface CephObjectStoreSpecZone {
            /**
             * RGW Zone the Object Store is in
             */
            name?: pulumi.Input<string>;
        }
        /**
         * The multisite info
         */
        interface CephObjectStoreSpecZonePatch {
            /**
             * RGW Zone the Object Store is in
             */
            name?: pulumi.Input<string>;
        }
        /**
         * CephObjectStoreUser represents a Ceph Object Store Gateway User
         */
        interface CephObjectStoreUser {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephObjectStoreUser">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephObjectStoreUserSpec>;
            /**
             * ObjectStoreUserStatus represents the status Ceph Object Store Gateway User
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * ObjectStoreUserSpec represent the spec of an Objectstoreuser
         */
        interface CephObjectStoreUserSpec {
            capabilities?: pulumi.Input<inputs.ceph.v1.CephObjectStoreUserSpecCapabilities>;
            /**
             * The namespace where the parent CephCluster and CephObjectStore are found
             */
            clusterNamespace?: pulumi.Input<string>;
            /**
             * The display name for the ceph users
             */
            displayName?: pulumi.Input<string>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectStoreUserSpecQuotas>;
            /**
             * The store the user will be created in
             */
            store?: pulumi.Input<string>;
        }
        /**
         * Additional admin-level capabilities for the Ceph object store user
         */
        interface CephObjectStoreUserSpecCapabilities {
            /**
             * Add capabilities for user to send request to RGW Cache API header. Documented in https://docs.ceph.com/en/latest/radosgw/rgw-cache/#cache-api
             */
            "amz-cache"?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change bucket index logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            bilog?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store buckets. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            bucket?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store buckets. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            buckets?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change data logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            datalog?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write information about the user. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            info?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change metadata logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            mdlog?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store metadata. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            metadata?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change oidc provider. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            "oidc-provider"?: pulumi.Input<string>;
            /**
             * Add capabilities for user to set rate limiter for user and bucket. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            ratelimit?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write roles for user. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            roles?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store usage. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            usage?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store users. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            user?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change user policies. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            "user-policy"?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store users. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            users?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store zones. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            zone?: pulumi.Input<string>;
        }
        /**
         * Additional admin-level capabilities for the Ceph object store user
         */
        interface CephObjectStoreUserSpecCapabilitiesPatch {
            /**
             * Add capabilities for user to send request to RGW Cache API header. Documented in https://docs.ceph.com/en/latest/radosgw/rgw-cache/#cache-api
             */
            "amz-cache"?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change bucket index logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            bilog?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store buckets. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            bucket?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store buckets. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            buckets?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change data logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            datalog?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write information about the user. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            info?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change metadata logging. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            mdlog?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store metadata. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            metadata?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change oidc provider. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            "oidc-provider"?: pulumi.Input<string>;
            /**
             * Add capabilities for user to set rate limiter for user and bucket. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            ratelimit?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write roles for user. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            roles?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store usage. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            usage?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store users. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            user?: pulumi.Input<string>;
            /**
             * Add capabilities for user to change user policies. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            "user-policy"?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store users. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            users?: pulumi.Input<string>;
            /**
             * Admin capabilities to read/write Ceph object store zones. Documented in https://docs.ceph.com/en/latest/radosgw/admin/?#add-remove-admin-capabilities
             */
            zone?: pulumi.Input<string>;
        }
        /**
         * ObjectStoreUserSpec represent the spec of an Objectstoreuser
         */
        interface CephObjectStoreUserSpecPatch {
            capabilities?: pulumi.Input<inputs.ceph.v1.CephObjectStoreUserSpecCapabilitiesPatch>;
            /**
             * The namespace where the parent CephCluster and CephObjectStore are found
             */
            clusterNamespace?: pulumi.Input<string>;
            /**
             * The display name for the ceph users
             */
            displayName?: pulumi.Input<string>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectStoreUserSpecQuotasPatch>;
            /**
             * The store the user will be created in
             */
            store?: pulumi.Input<string>;
        }
        /**
         * ObjectUserQuotaSpec can be used to set quotas for the object store user to limit their usage. See the [Ceph docs](https://docs.ceph.com/en/latest/radosgw/admin/?#quota-management) for more
         */
        interface CephObjectStoreUserSpecQuotas {
            /**
             * Maximum bucket limit for the ceph user
             */
            maxBuckets?: pulumi.Input<number>;
            /**
             * Maximum number of objects across all the user's buckets
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * Maximum size limit of all objects across all the user's buckets
             * See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info.
             */
            maxSize?: pulumi.Input<number | string>;
        }
        /**
         * ObjectUserQuotaSpec can be used to set quotas for the object store user to limit their usage. See the [Ceph docs](https://docs.ceph.com/en/latest/radosgw/admin/?#quota-management) for more
         */
        interface CephObjectStoreUserSpecQuotasPatch {
            /**
             * Maximum bucket limit for the ceph user
             */
            maxBuckets?: pulumi.Input<number>;
            /**
             * Maximum number of objects across all the user's buckets
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * Maximum size limit of all objects across all the user's buckets
             * See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info.
             */
            maxSize?: pulumi.Input<number | string>;
        }
        /**
         * CephObjectZone represents a Ceph Object Store Gateway Zone
         */
        interface CephObjectZone {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephObjectZone">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpec>;
            /**
             * Status represents the status of an object
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * CephObjectZoneGroup represents a Ceph Object Store Gateway Zone Group
         */
        interface CephObjectZoneGroup {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephObjectZoneGroup">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephObjectZoneGroupSpec>;
            /**
             * Status represents the status of an object
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * ObjectZoneGroupSpec represent the spec of an ObjectZoneGroup
         */
        interface CephObjectZoneGroupSpec {
            /**
             * The display name for the ceph users
             */
            realm?: pulumi.Input<string>;
        }
        /**
         * ObjectZoneGroupSpec represent the spec of an ObjectZoneGroup
         */
        interface CephObjectZoneGroupSpecPatch {
            /**
             * The display name for the ceph users
             */
            realm?: pulumi.Input<string>;
        }
        /**
         * ObjectZoneSpec represent the spec of an ObjectZone
         */
        interface CephObjectZoneSpec {
            /**
             * If this zone cannot be accessed from other peer Ceph clusters via the ClusterIP Service
             * endpoint created by Rook, you must set this to the externally reachable endpoint(s). You may
             * include the port in the definition. For example: "https://my-object-store.my-domain.net:443".
             * In many cases, you should set this to the endpoint of the ingress resource that makes the
             * CephObjectStore associated with this CephObjectStoreZone reachable to peer clusters.
             * The list can have one or more endpoints pointing to different RGW servers in the zone.
             *
             * If a CephObjectStore endpoint is omitted from this list, that object store's gateways will
             * not receive multisite replication data
             * (see CephObjectStore.spec.gateway.disableMultisiteSyncTraffic).
             */
            customEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
            dataPool?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPool>;
            metadataPool?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPool>;
            /**
             * Preserve pools on object zone deletion
             */
            preservePoolsOnDelete?: pulumi.Input<boolean>;
            sharedPools?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecSharedPools>;
            /**
             * The display name for the ceph users
             */
            zoneGroup?: pulumi.Input<string>;
        }
        /**
         * The data pool settings
         */
        interface CephObjectZoneSpecDataPool {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolErasureCoded>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolMirroring>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolQuotas>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolReplicated>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The erasure code settings
         */
        interface CephObjectZoneSpecDataPoolErasureCoded {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The erasure code settings
         */
        interface CephObjectZoneSpecDataPoolErasureCodedPatch {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The mirroring settings
         */
        interface CephObjectZoneSpecDataPoolMirroring {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolMirroringPeers>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolMirroringSnapshotSchedules>[]>;
        }
        /**
         * The mirroring settings
         */
        interface CephObjectZoneSpecDataPoolMirroringPatch {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolMirroringPeersPatch>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephObjectZoneSpecDataPoolMirroringPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephObjectZoneSpecDataPoolMirroringPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephObjectZoneSpecDataPoolMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephObjectZoneSpecDataPoolMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * The data pool settings
         */
        interface CephObjectZoneSpecDataPoolPatch {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolErasureCodedPatch>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolMirroringPatch>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolQuotasPatch>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolReplicatedPatch>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The quota settings
         */
        interface CephObjectZoneSpecDataPoolQuotas {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The quota settings
         */
        interface CephObjectZoneSpecDataPoolQuotasPatch {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephObjectZoneSpecDataPoolReplicated {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolReplicatedHybridStorage>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephObjectZoneSpecDataPoolReplicatedHybridStorage {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephObjectZoneSpecDataPoolReplicatedHybridStoragePatch {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephObjectZoneSpecDataPoolReplicatedPatch {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolReplicatedHybridStoragePatch>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * The metadata pool settings
         */
        interface CephObjectZoneSpecMetadataPool {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolErasureCoded>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolMirroring>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolQuotas>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolReplicated>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The erasure code settings
         */
        interface CephObjectZoneSpecMetadataPoolErasureCoded {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The erasure code settings
         */
        interface CephObjectZoneSpecMetadataPoolErasureCodedPatch {
            /**
             * The algorithm for erasure coding
             */
            algorithm?: pulumi.Input<string>;
            /**
             * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
             */
            codingChunks?: pulumi.Input<number>;
            /**
             * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
             * The number of chunks required to recover an object when any single OSD is lost is the same
             * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
             */
            dataChunks?: pulumi.Input<number>;
        }
        /**
         * The mirroring settings
         */
        interface CephObjectZoneSpecMetadataPoolMirroring {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolMirroringPeers>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolMirroringSnapshotSchedules>[]>;
        }
        /**
         * The mirroring settings
         */
        interface CephObjectZoneSpecMetadataPoolMirroringPatch {
            /**
             * Enabled whether this pool is mirrored or not
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Mode is the mirroring mode: either pool or image
             */
            mode?: pulumi.Input<string>;
            peers?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolMirroringPeersPatch>;
            /**
             * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
             */
            snapshotSchedules?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolMirroringSnapshotSchedulesPatch>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephObjectZoneSpecMetadataPoolMirroringPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephObjectZoneSpecMetadataPoolMirroringPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephObjectZoneSpecMetadataPoolMirroringSnapshotSchedules {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * SnapshotScheduleSpec represents the snapshot scheduling settings of a mirrored pool
         */
        interface CephObjectZoneSpecMetadataPoolMirroringSnapshotSchedulesPatch {
            /**
             * Interval represent the periodicity of the snapshot.
             */
            interval?: pulumi.Input<string>;
            /**
             * Path is the path to snapshot, only valid for CephFS
             */
            path?: pulumi.Input<string>;
            /**
             * StartTime indicates when to start the snapshot
             */
            startTime?: pulumi.Input<string>;
        }
        /**
         * The metadata pool settings
         */
        interface CephObjectZoneSpecMetadataPoolPatch {
            /**
             * The application name to set on the pool. Only expected to be set for rgw pools.
             */
            application?: pulumi.Input<string>;
            /**
             * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
             * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
             * Do NOT set a default value for kubebuilder as this will override the Parameters
             */
            compressionMode?: pulumi.Input<string>;
            /**
             * The root of the crush hierarchy utilized by the pool
             */
            crushRoot?: pulumi.Input<string>;
            /**
             * The device class the OSD should set to for use in the pool
             */
            deviceClass?: pulumi.Input<string>;
            /**
             * Allow rook operator to change the pool CRUSH tunables once the pool is created
             */
            enableCrushUpdates?: pulumi.Input<boolean>;
            /**
             * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
             */
            enableRBDStats?: pulumi.Input<boolean>;
            erasureCoded?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolErasureCodedPatch>;
            /**
             * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
             */
            failureDomain?: pulumi.Input<string>;
            mirroring?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolMirroringPatch>;
            /**
             * Parameters is a list of properties to enable on a given pool
             */
            parameters?: pulumi.Input<{
                [key: string]: any;
            }>;
            quotas?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolQuotasPatch>;
            replicated?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolReplicatedPatch>;
            /**
             * The mirroring statusCheck
             */
            statusCheck?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * The quota settings
         */
        interface CephObjectZoneSpecMetadataPoolQuotas {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The quota settings
         */
        interface CephObjectZoneSpecMetadataPoolQuotasPatch {
            /**
             * MaxBytes represents the quota in bytes
             * Deprecated in favor of MaxSize
             */
            maxBytes?: pulumi.Input<number>;
            /**
             * MaxObjects represents the quota in objects
             */
            maxObjects?: pulumi.Input<number>;
            /**
             * MaxSize represents the quota in bytes as a string
             */
            maxSize?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephObjectZoneSpecMetadataPoolReplicated {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolReplicatedHybridStorage>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephObjectZoneSpecMetadataPoolReplicatedHybridStorage {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        interface CephObjectZoneSpecMetadataPoolReplicatedHybridStoragePatch {
            /**
             * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
             */
            primaryDeviceClass?: pulumi.Input<string>;
            /**
             * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
             */
            secondaryDeviceClass?: pulumi.Input<string>;
        }
        /**
         * The replication settings
         */
        interface CephObjectZoneSpecMetadataPoolReplicatedPatch {
            hybridStorage?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolReplicatedHybridStoragePatch>;
            /**
             * ReplicasPerFailureDomain the number of replica in the specified failure domain
             */
            replicasPerFailureDomain?: pulumi.Input<number>;
            /**
             * RequireSafeReplicaSize if false allows you to set replica 1
             */
            requireSafeReplicaSize?: pulumi.Input<boolean>;
            /**
             * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
             */
            size?: pulumi.Input<number>;
            /**
             * SubFailureDomain the name of the sub-failure domain
             */
            subFailureDomain?: pulumi.Input<string>;
            /**
             * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
             */
            targetSizeRatio?: pulumi.Input<number>;
        }
        /**
         * ObjectZoneSpec represent the spec of an ObjectZone
         */
        interface CephObjectZoneSpecPatch {
            /**
             * If this zone cannot be accessed from other peer Ceph clusters via the ClusterIP Service
             * endpoint created by Rook, you must set this to the externally reachable endpoint(s). You may
             * include the port in the definition. For example: "https://my-object-store.my-domain.net:443".
             * In many cases, you should set this to the endpoint of the ingress resource that makes the
             * CephObjectStore associated with this CephObjectStoreZone reachable to peer clusters.
             * The list can have one or more endpoints pointing to different RGW servers in the zone.
             *
             * If a CephObjectStore endpoint is omitted from this list, that object store's gateways will
             * not receive multisite replication data
             * (see CephObjectStore.spec.gateway.disableMultisiteSyncTraffic).
             */
            customEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
            dataPool?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecDataPoolPatch>;
            metadataPool?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecMetadataPoolPatch>;
            /**
             * Preserve pools on object zone deletion
             */
            preservePoolsOnDelete?: pulumi.Input<boolean>;
            sharedPools?: pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecSharedPoolsPatch>;
            /**
             * The display name for the ceph users
             */
            zoneGroup?: pulumi.Input<string>;
        }
        /**
         * The pool information when configuring RADOS namespaces in existing pools.
         */
        interface CephObjectZoneSpecSharedPools {
            /**
             * The data pool used for creating RADOS namespaces in the object store
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * The metadata pool used for creating RADOS namespaces in the object store
             */
            metadataPoolName?: pulumi.Input<string>;
            /**
             * PoolPlacements control which Pools are associated with a particular RGW bucket.
             * Once PoolPlacements are defined, RGW client will be able to associate pool
             * with ObjectStore bucket by providing "<LocationConstraint>" during s3 bucket creation
             * or "X-Storage-Policy" header during swift container creation.
             * See: https://docs.ceph.com/en/latest/radosgw/placement/#placement-targets
             * PoolPlacement with name: "default" will be used as a default pool if no option
             * is provided during bucket creation.
             * If default placement is not provided, spec.sharedPools.dataPoolName and spec.sharedPools.MetadataPoolName will be used as default pools.
             * If spec.sharedPools are also empty, then RGW pools (spec.dataPool and spec.metadataPool) will be used as defaults.
             */
            poolPlacements?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecSharedPoolsPoolPlacements>[]>;
            /**
             * Whether the RADOS namespaces should be preserved on deletion of the object store
             */
            preserveRadosNamespaceDataOnDelete?: pulumi.Input<boolean>;
        }
        /**
         * The pool information when configuring RADOS namespaces in existing pools.
         */
        interface CephObjectZoneSpecSharedPoolsPatch {
            /**
             * The data pool used for creating RADOS namespaces in the object store
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * The metadata pool used for creating RADOS namespaces in the object store
             */
            metadataPoolName?: pulumi.Input<string>;
            /**
             * PoolPlacements control which Pools are associated with a particular RGW bucket.
             * Once PoolPlacements are defined, RGW client will be able to associate pool
             * with ObjectStore bucket by providing "<LocationConstraint>" during s3 bucket creation
             * or "X-Storage-Policy" header during swift container creation.
             * See: https://docs.ceph.com/en/latest/radosgw/placement/#placement-targets
             * PoolPlacement with name: "default" will be used as a default pool if no option
             * is provided during bucket creation.
             * If default placement is not provided, spec.sharedPools.dataPoolName and spec.sharedPools.MetadataPoolName will be used as default pools.
             * If spec.sharedPools are also empty, then RGW pools (spec.dataPool and spec.metadataPool) will be used as defaults.
             */
            poolPlacements?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecSharedPoolsPoolPlacementsPatch>[]>;
            /**
             * Whether the RADOS namespaces should be preserved on deletion of the object store
             */
            preserveRadosNamespaceDataOnDelete?: pulumi.Input<boolean>;
        }
        interface CephObjectZoneSpecSharedPoolsPoolPlacements {
            /**
             * The data pool used to store ObjectStore data that cannot use erasure coding (ex: multi-part uploads).
             * If dataPoolName is not erasure coded, then there is no need for dataNonECPoolName.
             */
            dataNonECPoolName?: pulumi.Input<string>;
            /**
             * The data pool used to store ObjectStore objects data.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * Sets given placement as default. Only one placement in the list can be marked as default.
             * Default is false.
             */
            default?: pulumi.Input<boolean>;
            /**
             * The metadata pool used to store ObjectStore bucket index.
             */
            metadataPoolName?: pulumi.Input<string>;
            /**
             * Pool placement name. Name can be arbitrary. Placement with name "default" will be used as default.
             */
            name?: pulumi.Input<string>;
            /**
             * StorageClasses can be selected by user to override dataPoolName during object creation.
             * Each placement has default STANDARD StorageClass pointing to dataPoolName.
             * This list allows defining additional StorageClasses on top of default STANDARD storage class.
             */
            storageClasses?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecSharedPoolsPoolPlacementsStorageClasses>[]>;
        }
        interface CephObjectZoneSpecSharedPoolsPoolPlacementsPatch {
            /**
             * The data pool used to store ObjectStore data that cannot use erasure coding (ex: multi-part uploads).
             * If dataPoolName is not erasure coded, then there is no need for dataNonECPoolName.
             */
            dataNonECPoolName?: pulumi.Input<string>;
            /**
             * The data pool used to store ObjectStore objects data.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * Sets given placement as default. Only one placement in the list can be marked as default.
             * Default is false.
             */
            default?: pulumi.Input<boolean>;
            /**
             * The metadata pool used to store ObjectStore bucket index.
             */
            metadataPoolName?: pulumi.Input<string>;
            /**
             * Pool placement name. Name can be arbitrary. Placement with name "default" will be used as default.
             */
            name?: pulumi.Input<string>;
            /**
             * StorageClasses can be selected by user to override dataPoolName during object creation.
             * Each placement has default STANDARD StorageClass pointing to dataPoolName.
             * This list allows defining additional StorageClasses on top of default STANDARD storage class.
             */
            storageClasses?: pulumi.Input<pulumi.Input<inputs.ceph.v1.CephObjectZoneSpecSharedPoolsPoolPlacementsStorageClassesPatch>[]>;
        }
        interface CephObjectZoneSpecSharedPoolsPoolPlacementsStorageClasses {
            /**
             * DataPoolName is the data pool used to store ObjectStore objects data.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * Name is the StorageClass name. Ceph allows arbitrary name for StorageClasses,
             * however most clients/libs insist on AWS names so it is recommended to use
             * one of the valid x-amz-storage-class values for better compatibility:
             * REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS | GLACIER_IR | SNOW | EXPRESS_ONEZONE
             * See AWS docs: https://aws.amazon.com/de/s3/storage-classes/
             */
            name?: pulumi.Input<string>;
        }
        interface CephObjectZoneSpecSharedPoolsPoolPlacementsStorageClassesPatch {
            /**
             * DataPoolName is the data pool used to store ObjectStore objects data.
             */
            dataPoolName?: pulumi.Input<string>;
            /**
             * Name is the StorageClass name. Ceph allows arbitrary name for StorageClasses,
             * however most clients/libs insist on AWS names so it is recommended to use
             * one of the valid x-amz-storage-class values for better compatibility:
             * REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS | GLACIER_IR | SNOW | EXPRESS_ONEZONE
             * See AWS docs: https://aws.amazon.com/de/s3/storage-classes/
             */
            name?: pulumi.Input<string>;
        }
        /**
         * CephRBDMirror represents a Ceph RBD Mirror
         */
        interface CephRBDMirror {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"ceph.rook.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"CephRBDMirror">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.ceph.v1.CephRBDMirrorSpec>;
            /**
             * Status represents the status of an object
             */
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * RBDMirroringSpec represents the specification of an RBD mirror daemon
         */
        interface CephRBDMirrorSpec {
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Count represents the number of rbd mirror instance to run
             */
            count?: pulumi.Input<number>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            peers?: pulumi.Input<inputs.ceph.v1.CephRBDMirrorSpecPeers>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * PriorityClassName sets priority class on the rbd mirror pods
             */
            priorityClassName?: pulumi.Input<string>;
            /**
             * The resource requirements for the rbd mirror pods
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * RBDMirroringSpec represents the specification of an RBD mirror daemon
         */
        interface CephRBDMirrorSpecPatch {
            /**
             * The annotations-related configuration to add/set on each Pod related object.
             */
            annotations?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Count represents the number of rbd mirror instance to run
             */
            count?: pulumi.Input<number>;
            /**
             * The labels-related configuration to add/set on each Pod related object.
             */
            labels?: pulumi.Input<{
                [key: string]: any;
            }>;
            peers?: pulumi.Input<inputs.ceph.v1.CephRBDMirrorSpecPeersPatch>;
            placement?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * PriorityClassName sets priority class on the rbd mirror pods
             */
            priorityClassName?: pulumi.Input<string>;
            /**
             * The resource requirements for the rbd mirror pods
             */
            resources?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephRBDMirrorSpecPeers {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Peers represents the peers spec
         */
        interface CephRBDMirrorSpecPeersPatch {
            /**
             * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
             */
            secretNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
    }
}
export declare namespace meta {
    namespace v1 {
        /**
         * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        interface ListMeta {
            /**
             * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
             */
            continue?: pulumi.Input<string>;
            /**
             * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
             */
            remainingItemCount?: pulumi.Input<number>;
            /**
             * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: pulumi.Input<string>;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink?: pulumi.Input<string>;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntry {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion?: pulumi.Input<string>;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType?: pulumi.Input<string>;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1?: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager?: pulumi.Input<string>;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation?: pulumi.Input<string>;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource?: pulumi.Input<string>;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntryPatch {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion?: pulumi.Input<string>;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType?: pulumi.Input<string>;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1?: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager?: pulumi.Input<string>;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation?: pulumi.Input<string>;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource?: pulumi.Input<string>;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMeta {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp?: pulumi.Input<string>;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp?: pulumi.Input<string>;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName?: pulumi.Input<string>;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation?: pulumi.Input<number>;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields?: pulumi.Input<pulumi.Input<inputs.meta.v1.ManagedFieldsEntry>[]>;
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace?: pulumi.Input<string>;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences?: pulumi.Input<pulumi.Input<inputs.meta.v1.OwnerReference>[]>;
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: pulumi.Input<string>;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink?: pulumi.Input<string>;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid?: pulumi.Input<string>;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMetaPatch {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp?: pulumi.Input<string>;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp?: pulumi.Input<string>;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName?: pulumi.Input<string>;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation?: pulumi.Input<number>;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields?: pulumi.Input<pulumi.Input<inputs.meta.v1.ManagedFieldsEntryPatch>[]>;
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace?: pulumi.Input<string>;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences?: pulumi.Input<pulumi.Input<inputs.meta.v1.OwnerReferencePatch>[]>;
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: pulumi.Input<string>;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink?: pulumi.Input<string>;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid?: pulumi.Input<string>;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReference {
            /**
             * API version of the referent.
             */
            apiVersion: pulumi.Input<string>;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion?: pulumi.Input<boolean>;
            /**
             * If true, this reference points to the managing controller.
             */
            controller?: pulumi.Input<boolean>;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: pulumi.Input<string>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: pulumi.Input<string>;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: pulumi.Input<string>;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReferencePatch {
            /**
             * API version of the referent.
             */
            apiVersion?: pulumi.Input<string>;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion?: pulumi.Input<boolean>;
            /**
             * If true, this reference points to the managing controller.
             */
            controller?: pulumi.Input<boolean>;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<string>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name?: pulumi.Input<string>;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid?: pulumi.Input<string>;
        }
    }
}
export declare namespace objectbucket {
    namespace v1alpha1 {
        interface ObjectBucket {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"objectbucket.io/v1alpha1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"ObjectBucket">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.objectbucket.v1alpha1.ObjectBucketSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        interface ObjectBucketClaim {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"objectbucket.io/v1alpha1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"ObjectBucketClaim">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.objectbucket.v1alpha1.ObjectBucketClaimSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        interface ObjectBucketClaimSpec {
            additionalConfig?: pulumi.Input<{
                [key: string]: any;
            }>;
            bucketName?: pulumi.Input<string>;
            generateBucketName?: pulumi.Input<string>;
            objectBucketName?: pulumi.Input<string>;
            storageClassName?: pulumi.Input<string>;
        }
        interface ObjectBucketClaimSpecPatch {
            additionalConfig?: pulumi.Input<{
                [key: string]: any;
            }>;
            bucketName?: pulumi.Input<string>;
            generateBucketName?: pulumi.Input<string>;
            objectBucketName?: pulumi.Input<string>;
            storageClassName?: pulumi.Input<string>;
        }
        interface ObjectBucketSpec {
            additionalState?: pulumi.Input<{
                [key: string]: any;
            }>;
            authentication?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            claimRef?: pulumi.Input<{
                [key: string]: any;
            }>;
            endpoint?: pulumi.Input<inputs.objectbucket.v1alpha1.ObjectBucketSpecEndpoint>;
            reclaimPolicy?: pulumi.Input<string>;
            storageClassName?: pulumi.Input<string>;
        }
        interface ObjectBucketSpecEndpoint {
            additionalConfig?: pulumi.Input<{
                [key: string]: any;
            }>;
            bucketHost?: pulumi.Input<string>;
            bucketName?: pulumi.Input<string>;
            bucketPort?: pulumi.Input<number>;
            region?: pulumi.Input<string>;
            subRegion?: pulumi.Input<string>;
        }
        interface ObjectBucketSpecEndpointPatch {
            additionalConfig?: pulumi.Input<{
                [key: string]: any;
            }>;
            bucketHost?: pulumi.Input<string>;
            bucketName?: pulumi.Input<string>;
            bucketPort?: pulumi.Input<number>;
            region?: pulumi.Input<string>;
            subRegion?: pulumi.Input<string>;
        }
        interface ObjectBucketSpecPatch {
            additionalState?: pulumi.Input<{
                [key: string]: any;
            }>;
            authentication?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            claimRef?: pulumi.Input<{
                [key: string]: any;
            }>;
            endpoint?: pulumi.Input<inputs.objectbucket.v1alpha1.ObjectBucketSpecEndpointPatch>;
            reclaimPolicy?: pulumi.Input<string>;
            storageClassName?: pulumi.Input<string>;
        }
    }
}
