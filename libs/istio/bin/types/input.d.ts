import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export declare namespace extensions {
    namespace v1alpha1 {
        interface WasmPlugin {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"extensions.istio.io/v1alpha1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"WasmPlugin">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Extend the functionality provided by the Istio proxy through WebAssembly filters. See more details at: https://istio.io/docs/reference/config/proxy_extensions/wasm-plugin.html
         */
        interface WasmPluginSpec {
            /**
             * Specifies the failure behavior for the plugin due to fatal errors.
             *
             * Valid Options: FAIL_CLOSE, FAIL_OPEN
             */
            failStrategy?: pulumi.Input<string>;
            /**
             * The pull behaviour to be applied when fetching Wasm module by either OCI image or `http/https`.
             *
             * Valid Options: IfNotPresent, Always
             */
            imagePullPolicy?: pulumi.Input<string>;
            /**
             * Credentials to use for OCI image pulling.
             */
            imagePullSecret?: pulumi.Input<string>;
            /**
             * Specifies the criteria to determine which traffic is passed to WasmPlugin.
             */
            match?: pulumi.Input<pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecMatch>[]>;
            /**
             * Determines where in the filter chain this `WasmPlugin` is to be injected.
             *
             * Valid Options: AUTHN, AUTHZ, STATS
             */
            phase?: pulumi.Input<string>;
            /**
             * The configuration that will be passed on to the plugin.
             */
            pluginConfig?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * The plugin name to be used in the Envoy configuration (used to be called `rootID`).
             */
            pluginName?: pulumi.Input<string>;
            /**
             * Determines ordering of `WasmPlugins` in the same `phase`.
             */
            priority?: pulumi.Input<number>;
            selector?: pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecSelector>;
            /**
             * SHA256 checksum that will be used to verify Wasm module or OCI container.
             */
            sha256?: pulumi.Input<string>;
            targetRef?: pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecTargetRef>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecTargetRefs>[]>;
            /**
             * Specifies the type of Wasm Extension to be used.
             *
             * Valid Options: HTTP, NETWORK
             */
            type?: pulumi.Input<string>;
            /**
             * URL of a Wasm module or OCI container.
             */
            url?: pulumi.Input<string>;
            verificationKey?: pulumi.Input<string>;
            vmConfig?: pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecVmConfig>;
        }
        interface WasmPluginSpecMatch {
            /**
             * Criteria for selecting traffic by their direction.
             *
             * Valid Options: CLIENT, SERVER, CLIENT_AND_SERVER
             */
            mode?: pulumi.Input<string>;
            /**
             * Criteria for selecting traffic by their destination port.
             */
            ports?: pulumi.Input<pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecMatchPorts>[]>;
        }
        interface WasmPluginSpecMatchPatch {
            /**
             * Criteria for selecting traffic by their direction.
             *
             * Valid Options: CLIENT, SERVER, CLIENT_AND_SERVER
             */
            mode?: pulumi.Input<string>;
            /**
             * Criteria for selecting traffic by their destination port.
             */
            ports?: pulumi.Input<pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecMatchPortsPatch>[]>;
        }
        interface WasmPluginSpecMatchPorts {
            number?: pulumi.Input<number>;
        }
        interface WasmPluginSpecMatchPortsPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * Extend the functionality provided by the Istio proxy through WebAssembly filters. See more details at: https://istio.io/docs/reference/config/proxy_extensions/wasm-plugin.html
         */
        interface WasmPluginSpecPatch {
            /**
             * Specifies the failure behavior for the plugin due to fatal errors.
             *
             * Valid Options: FAIL_CLOSE, FAIL_OPEN
             */
            failStrategy?: pulumi.Input<string>;
            /**
             * The pull behaviour to be applied when fetching Wasm module by either OCI image or `http/https`.
             *
             * Valid Options: IfNotPresent, Always
             */
            imagePullPolicy?: pulumi.Input<string>;
            /**
             * Credentials to use for OCI image pulling.
             */
            imagePullSecret?: pulumi.Input<string>;
            /**
             * Specifies the criteria to determine which traffic is passed to WasmPlugin.
             */
            match?: pulumi.Input<pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecMatchPatch>[]>;
            /**
             * Determines where in the filter chain this `WasmPlugin` is to be injected.
             *
             * Valid Options: AUTHN, AUTHZ, STATS
             */
            phase?: pulumi.Input<string>;
            /**
             * The configuration that will be passed on to the plugin.
             */
            pluginConfig?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * The plugin name to be used in the Envoy configuration (used to be called `rootID`).
             */
            pluginName?: pulumi.Input<string>;
            /**
             * Determines ordering of `WasmPlugins` in the same `phase`.
             */
            priority?: pulumi.Input<number>;
            selector?: pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecSelectorPatch>;
            /**
             * SHA256 checksum that will be used to verify Wasm module or OCI container.
             */
            sha256?: pulumi.Input<string>;
            targetRef?: pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecTargetRefPatch>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecTargetRefsPatch>[]>;
            /**
             * Specifies the type of Wasm Extension to be used.
             *
             * Valid Options: HTTP, NETWORK
             */
            type?: pulumi.Input<string>;
            /**
             * URL of a Wasm module or OCI container.
             */
            url?: pulumi.Input<string>;
            verificationKey?: pulumi.Input<string>;
            vmConfig?: pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecVmConfigPatch>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this plugin configuration should be applied.
         */
        interface WasmPluginSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this plugin configuration should be applied.
         */
        interface WasmPluginSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface WasmPluginSpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface WasmPluginSpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface WasmPluginSpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface WasmPluginSpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Configuration for a Wasm VM.
         */
        interface WasmPluginSpecVmConfig {
            /**
             * Specifies environment variables to be injected to this VM.
             */
            env?: pulumi.Input<pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecVmConfigEnv>[]>;
        }
        interface WasmPluginSpecVmConfigEnv {
            /**
             * Name of the environment variable.
             */
            name?: pulumi.Input<string>;
            /**
             * Value for the environment variable.
             */
            value?: pulumi.Input<string>;
            /**
             * Source for the environment variable's value.
             *
             * Valid Options: INLINE, HOST
             */
            valueFrom?: pulumi.Input<string>;
        }
        interface WasmPluginSpecVmConfigEnvPatch {
            /**
             * Name of the environment variable.
             */
            name?: pulumi.Input<string>;
            /**
             * Value for the environment variable.
             */
            value?: pulumi.Input<string>;
            /**
             * Source for the environment variable's value.
             *
             * Valid Options: INLINE, HOST
             */
            valueFrom?: pulumi.Input<string>;
        }
        /**
         * Configuration for a Wasm VM.
         */
        interface WasmPluginSpecVmConfigPatch {
            /**
             * Specifies environment variables to be injected to this VM.
             */
            env?: pulumi.Input<pulumi.Input<inputs.extensions.v1alpha1.WasmPluginSpecVmConfigEnvPatch>[]>;
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
export declare namespace networking {
    namespace v1 {
        interface DestinationRule {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"DestinationRule">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1.DestinationRuleSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpec {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsets>[]>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicy>;
            workloadSelector?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecWorkloadSelector>;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpecPatch {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsPatch>[]>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPatch>;
            workloadSelector?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecWorkloadSelectorPatch>;
        }
        interface DestinationRuleSpecSubsets {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Name of the subset.
             */
            name?: pulumi.Input<string>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicy>;
        }
        interface DestinationRuleSpecSubsetsPatch {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Name of the subset.
             */
            name?: pulumi.Input<string>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPatch>;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicy {
            connectionPool?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol>;
            tls?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyTls>;
            tunnel?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyTunnel>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPool {
            http?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch>;
            tls?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyTlsPatch>;
            tunnel?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings {
            connectionPool?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection>;
            port?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort>;
            tls?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool {
            http?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch>;
            port?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicy {
            connectionPool?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyOutlierDetection>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettings>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyProxyProtocol>;
            tls?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyTls>;
            tunnel?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyTunnel>;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPool {
            http?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicyPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyOutlierDetectionPatch>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyProxyProtocolPatch>;
            tls?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyTlsPatch>;
            tunnel?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyTunnelPatch>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettings {
            connectionPool?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection>;
            port?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPort>;
            tls?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsTls>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool {
            http?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch>;
            port?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecTrafficPolicyProxyProtocol {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecTrafficPolicyProxyProtocolPatch {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface Gateway {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Gateway">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1.GatewaySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpec {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * A list of server specifications.
             */
            servers?: pulumi.Input<pulumi.Input<inputs.networking.v1.GatewaySpecServers>[]>;
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpecPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * A list of server specifications.
             */
            servers?: pulumi.Input<pulumi.Input<inputs.networking.v1.GatewaySpecServersPatch>[]>;
        }
        interface GatewaySpecServers {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            defaultEndpoint?: pulumi.Input<string>;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.GatewaySpecServersPort>;
            tls?: pulumi.Input<inputs.networking.v1.GatewaySpecServersTls>;
        }
        interface GatewaySpecServersPatch {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            defaultEndpoint?: pulumi.Input<string>;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.GatewaySpecServersPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1.GatewaySpecServersTlsPatch>;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface ServiceEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"ServiceEntry">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1.ServiceEntrySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpec {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more endpoints associated with the service.
             */
            endpoints?: pulumi.Input<pulumi.Input<inputs.networking.v1.ServiceEntrySpecEndpoints>[]>;
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location?: pulumi.Input<string>;
            /**
             * The ports associated with the external service.
             */
            ports?: pulumi.Input<pulumi.Input<inputs.networking.v1.ServiceEntrySpecPorts>[]>;
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution?: pulumi.Input<string>;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            workloadSelector?: pulumi.Input<inputs.networking.v1.ServiceEntrySpecWorkloadSelector>;
        }
        interface ServiceEntrySpecEndpoints {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        interface ServiceEntrySpecEndpointsPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpecPatch {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more endpoints associated with the service.
             */
            endpoints?: pulumi.Input<pulumi.Input<inputs.networking.v1.ServiceEntrySpecEndpointsPatch>[]>;
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location?: pulumi.Input<string>;
            /**
             * The ports associated with the external service.
             */
            ports?: pulumi.Input<pulumi.Input<inputs.networking.v1.ServiceEntrySpecPortsPatch>[]>;
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution?: pulumi.Input<string>;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            workloadSelector?: pulumi.Input<inputs.networking.v1.ServiceEntrySpecWorkloadSelectorPatch>;
        }
        interface ServiceEntrySpecPorts {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort?: pulumi.Input<number>;
        }
        interface ServiceEntrySpecPortsPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface Sidecar {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Sidecar">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1.SidecarSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpec {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress?: pulumi.Input<pulumi.Input<inputs.networking.v1.SidecarSpecEgress>[]>;
            inboundConnectionPool?: pulumi.Input<inputs.networking.v1.SidecarSpecInboundConnectionPool>;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress?: pulumi.Input<pulumi.Input<inputs.networking.v1.SidecarSpecIngress>[]>;
            outboundTrafficPolicy?: pulumi.Input<inputs.networking.v1.SidecarSpecOutboundTrafficPolicy>;
            workloadSelector?: pulumi.Input<inputs.networking.v1.SidecarSpecWorkloadSelector>;
        }
        interface SidecarSpecEgress {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            port?: pulumi.Input<inputs.networking.v1.SidecarSpecEgressPort>;
        }
        interface SidecarSpecEgressPatch {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            port?: pulumi.Input<inputs.networking.v1.SidecarSpecEgressPortPatch>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPool {
            http?: pulumi.Input<inputs.networking.v1.SidecarSpecInboundConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1.SidecarSpecInboundConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecInboundConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecInboundConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1.SidecarSpecInboundConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1.SidecarSpecInboundConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.SidecarSpecInboundConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        interface SidecarSpecIngress {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind?: pulumi.Input<string>;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            connectionPool?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressConnectionPool>;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressPort>;
            tls?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressTls>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPool {
            http?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecIngressConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecIngressConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        interface SidecarSpecIngressPatch {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind?: pulumi.Input<string>;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            connectionPool?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressConnectionPoolPatch>;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1.SidecarSpecIngressTlsPatch>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicy {
            egressProxy?: pulumi.Input<inputs.networking.v1.SidecarSpecOutboundTrafficPolicyEgressProxy>;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode?: pulumi.Input<string>;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxy {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.SidecarSpecOutboundTrafficPolicyEgressProxyPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicyPatch {
            egressProxy?: pulumi.Input<inputs.networking.v1.SidecarSpecOutboundTrafficPolicyEgressProxyPatch>;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpecPatch {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress?: pulumi.Input<pulumi.Input<inputs.networking.v1.SidecarSpecEgressPatch>[]>;
            inboundConnectionPool?: pulumi.Input<inputs.networking.v1.SidecarSpecInboundConnectionPoolPatch>;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress?: pulumi.Input<pulumi.Input<inputs.networking.v1.SidecarSpecIngressPatch>[]>;
            outboundTrafficPolicy?: pulumi.Input<inputs.networking.v1.SidecarSpecOutboundTrafficPolicyPatch>;
            workloadSelector?: pulumi.Input<inputs.networking.v1.SidecarSpecWorkloadSelectorPatch>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualService {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"VirtualService">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1.VirtualServiceSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpec {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttp>[]>;
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcp>[]>;
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTls>[]>;
        }
        interface VirtualServiceSpecHttp {
            corsPolicy?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpCorsPolicy>;
            delegate?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpDelegate>;
            directResponse?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpDirectResponse>;
            fault?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFault>;
            headers?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpHeaders>;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatch>[]>;
            mirror?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirror>;
            mirrorPercent?: pulumi.Input<number>;
            mirrorPercentage?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorPercentage>;
            mirror_percent?: pulumi.Input<number>;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrors>[]>;
            /**
             * The name assigned to the route for debugging purposes.
             */
            name?: pulumi.Input<string>;
            redirect?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRedirect>;
            retries?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRetries>;
            rewrite?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRewrite>;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRoute>[]>;
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout?: pulumi.Input<string>;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicy {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods?: pulumi.Input<pulumi.Input<string>[]>;
            allowOrigin?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpCorsPolicyAllowOrigins>[]>;
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge?: pulumi.Input<string>;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOrigins {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicyPatch {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods?: pulumi.Input<pulumi.Input<string>[]>;
            allowOrigin?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch>[]>;
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge?: pulumi.Input<string>;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights?: pulumi.Input<string>;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegate {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegatePatch {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponse {
            body?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpDirectResponseBody>;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status?: pulumi.Input<number>;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBody {
            /**
             * response body as base64 encoded bytes.
             */
            bytes?: pulumi.Input<string>;
            string?: pulumi.Input<string>;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBodyPatch {
            /**
             * response body as base64 encoded bytes.
             */
            bytes?: pulumi.Input<string>;
            string?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponsePatch {
            body?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpDirectResponseBodyPatch>;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status?: pulumi.Input<number>;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFault {
            abort?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultAbort>;
            delay?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultDelay>;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbort {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus?: pulumi.Input<string>;
            http2Error?: pulumi.Input<string>;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultAbortPercentage>;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbortPatch {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus?: pulumi.Input<string>;
            http2Error?: pulumi.Input<string>;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultAbortPercentagePatch>;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelay {
            exponentialDelay?: pulumi.Input<string>;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay?: pulumi.Input<string>;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultDelayPercentage>;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelayPatch {
            exponentialDelay?: pulumi.Input<string>;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay?: pulumi.Input<string>;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultDelayPercentagePatch>;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFaultPatch {
            abort?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultAbortPatch>;
            delay?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultDelayPatch>;
        }
        interface VirtualServiceSpecHttpHeaders {
            request?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpHeadersRequest>;
            response?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpHeadersResponse>;
        }
        interface VirtualServiceSpecHttpHeadersPatch {
            request?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpHeadersRequestPatch>;
            response?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpHeadersResponsePatch>;
        }
        interface VirtualServiceSpecHttpHeadersRequest {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersRequestPatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersResponse {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersResponsePatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpMatch {
            authority?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchAuthority>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase?: pulumi.Input<boolean>;
            method?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchMethod>;
            /**
             * The name assigned to a match.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * Query parameters for matching.
             */
            queryParams?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            scheme?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchScheme>;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix?: pulumi.Input<string>;
            uri?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchUri>;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthority {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthorityPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethod {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethodPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpMatchPatch {
            authority?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchAuthorityPatch>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase?: pulumi.Input<boolean>;
            method?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchMethodPatch>;
            /**
             * The name assigned to a match.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * Query parameters for matching.
             */
            queryParams?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            scheme?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchSchemePatch>;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix?: pulumi.Input<string>;
            uri?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchUriPatch>;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchScheme {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchSchemePatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUri {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUriPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirror {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirrorPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpMirrors {
            destination?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorsDestination>;
            percentage?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorsPercentage>;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorsDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorsDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpMirrorsPatch {
            destination?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorsDestinationPatch>;
            percentage?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorsPercentagePatch>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentagePatch {
            value?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpPatch {
            corsPolicy?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpCorsPolicyPatch>;
            delegate?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpDelegatePatch>;
            directResponse?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpDirectResponsePatch>;
            fault?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpFaultPatch>;
            headers?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpHeadersPatch>;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMatchPatch>[]>;
            mirror?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorPatch>;
            mirrorPercent?: pulumi.Input<number>;
            mirrorPercentage?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorPercentagePatch>;
            mirror_percent?: pulumi.Input<number>;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpMirrorsPatch>[]>;
            /**
             * The name assigned to the route for debugging purposes.
             */
            name?: pulumi.Input<string>;
            redirect?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRedirectPatch>;
            retries?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRetriesPatch>;
            rewrite?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRewritePatch>;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRoutePatch>[]>;
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirect {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port?: pulumi.Input<number>;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode?: pulumi.Input<number>;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirectPatch {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port?: pulumi.Input<number>;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode?: pulumi.Input<number>;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetries {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts?: pulumi.Input<number>;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout?: pulumi.Input<string>;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn?: pulumi.Input<string>;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities?: pulumi.Input<boolean>;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetriesPatch {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts?: pulumi.Input<number>;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout?: pulumi.Input<string>;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn?: pulumi.Input<string>;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities?: pulumi.Input<boolean>;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewrite {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri?: pulumi.Input<string>;
            uriRegexRewrite?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRewriteUriRegexRewrite>;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewritePatch {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri?: pulumi.Input<string>;
            uriRegexRewrite?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRewriteUriRegexRewritePatch>;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewrite {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match?: pulumi.Input<string>;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite?: pulumi.Input<string>;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewritePatch {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match?: pulumi.Input<string>;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpRoute {
            destination?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteDestination>;
            headers?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteHeaders>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpRouteHeaders {
            request?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteHeadersRequest>;
            response?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteHeadersResponse>;
        }
        interface VirtualServiceSpecHttpRouteHeadersPatch {
            request?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteHeadersRequestPatch>;
            response?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteHeadersResponsePatch>;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequest {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequestPatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersResponse {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersResponsePatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteDestinationPatch>;
            headers?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpRouteHeadersPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpecPatch {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecHttpPatch>[]>;
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpPatch>[]>;
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsPatch>[]>;
        }
        interface VirtualServiceSpecTcp {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpMatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpRoute>[]>;
        }
        interface VirtualServiceSpecTcpMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            sourceSubnet?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTcpMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            sourceSubnet?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTcpPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpMatchPatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpRoutePatch>[]>;
        }
        interface VirtualServiceSpecTcpRoute {
            destination?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpRouteDestination>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTcpRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecTcpRouteDestinationPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTls {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsMatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsRoute>[]>;
        }
        interface VirtualServiceSpecTlsMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTlsMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTlsPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsMatchPatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsRoutePatch>[]>;
        }
        interface VirtualServiceSpecTlsRoute {
            destination?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsRouteDestination>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTlsRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1.VirtualServiceSpecTlsRouteDestinationPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        interface WorkloadEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"WorkloadEntry">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1.WorkloadEntrySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpec {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpecPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        interface WorkloadGroup {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"WorkloadGroup">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpec {
            metadata?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecMetadata>;
            probe?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbe>;
            template?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecTemplate>;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpecPatch {
            metadata?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecMetadataPatch>;
            probe?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbePatch>;
            template?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecTemplatePatch>;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbe {
            exec?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeExec>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeGrpc>;
            httpGet?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeHttpGet>;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeTcpSocket>;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExec {
            /**
             * Command to run.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExecPatch {
            /**
             * Command to run.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpc {
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpcPatch {
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeHttpGetHttpHeaders>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            scheme?: pulumi.Input<string>;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeHttpGetHttpHeadersPatch>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            scheme?: pulumi.Input<string>;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbePatch {
            exec?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeExecPatch>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeHttpGetPatch>;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.networking.v1.WorkloadGroupSpecProbeTcpSocketPatch>;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number>;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number>;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplate {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplatePatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
    }
    namespace v1alpha3 {
        interface DestinationRule {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1alpha3">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"DestinationRule">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpec {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsets>[]>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicy>;
            workloadSelector?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecWorkloadSelector>;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpecPatch {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsPatch>[]>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPatch>;
            workloadSelector?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecWorkloadSelectorPatch>;
        }
        interface DestinationRuleSpecSubsets {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Name of the subset.
             */
            name?: pulumi.Input<string>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicy>;
        }
        interface DestinationRuleSpecSubsetsPatch {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Name of the subset.
             */
            name?: pulumi.Input<string>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPatch>;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicy {
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyTls>;
            tunnel?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyTunnel>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPool {
            http?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyTlsPatch>;
            tunnel?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings {
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection>;
            port?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool {
            http?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch>;
            port?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicy {
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyOutlierDetection>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettings>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyProxyProtocol>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyTls>;
            tunnel?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyTunnel>;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPool {
            http?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicyPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyOutlierDetectionPatch>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyProxyProtocolPatch>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyTlsPatch>;
            tunnel?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyTunnelPatch>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettings {
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection>;
            port?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsPort>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsTls>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool {
            http?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch>;
            port?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecTrafficPolicyProxyProtocol {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecTrafficPolicyProxyProtocolPatch {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface EnvoyFilter {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1alpha3">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"EnvoyFilter">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Customizing Envoy configuration generated by Istio. See more details at: https://istio.io/docs/reference/config/networking/envoy-filter.html
         */
        interface EnvoyFilterSpec {
            /**
             * One or more patches with match conditions.
             */
            configPatches?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatches>[]>;
            /**
             * Priority defines the order in which patch sets are applied within a context.
             */
            priority?: pulumi.Input<number>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecTargetRefs>[]>;
            workloadSelector?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecWorkloadSelector>;
        }
        interface EnvoyFilterSpecConfigPatches {
            /**
             * Specifies where in the Envoy configuration, the patch should be applied.
             *
             * Valid Options: LISTENER, FILTER_CHAIN, NETWORK_FILTER, HTTP_FILTER, ROUTE_CONFIGURATION, VIRTUAL_HOST, HTTP_ROUTE, CLUSTER, EXTENSION_CONFIG, BOOTSTRAP, LISTENER_FILTER
             */
            applyTo?: pulumi.Input<string>;
            match?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatch>;
            patch?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesPatch>;
        }
        /**
         * Match on listener/route configuration/cluster.
         */
        interface EnvoyFilterSpecConfigPatchesMatch {
            cluster?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchCluster>;
            /**
             * The specific config generation context to match on.
             *
             * Valid Options: ANY, SIDECAR_INBOUND, SIDECAR_OUTBOUND, GATEWAY
             */
            context?: pulumi.Input<string>;
            listener?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchListener>;
            proxy?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchProxy>;
            routeConfiguration?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchRouteConfiguration>;
        }
        /**
         * Match on envoy cluster attributes.
         */
        interface EnvoyFilterSpecConfigPatchesMatchCluster {
            /**
             * The exact name of the cluster to match.
             */
            name?: pulumi.Input<string>;
            /**
             * The service port for which this cluster was generated.
             */
            portNumber?: pulumi.Input<number>;
            /**
             * The fully qualified service name for this cluster.
             */
            service?: pulumi.Input<string>;
            /**
             * The subset associated with the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Match on envoy listener attributes.
         */
        interface EnvoyFilterSpecConfigPatchesMatchListener {
            filterChain?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchListenerFilterChain>;
            /**
             * Match a specific listener filter.
             */
            listenerFilter?: pulumi.Input<string>;
            /**
             * Match a specific listener by its name.
             */
            name?: pulumi.Input<string>;
            portName?: pulumi.Input<string>;
            /**
             * The service port/gateway port to which traffic is being sent/received.
             */
            portNumber?: pulumi.Input<number>;
        }
        /**
         * Match a specific filter chain in a listener.
         */
        interface EnvoyFilterSpecConfigPatchesMatchListenerFilterChain {
            /**
             * Applies only to sidecars.
             */
            applicationProtocols?: pulumi.Input<string>;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            destinationPort?: pulumi.Input<number>;
            filter?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchListenerFilterChainFilter>;
            /**
             * The name assigned to the filter chain.
             */
            name?: pulumi.Input<string>;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            sni?: pulumi.Input<string>;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            transportProtocol?: pulumi.Input<string>;
        }
        /**
         * The name of a specific filter to apply the patch to.
         */
        interface EnvoyFilterSpecConfigPatchesMatchListenerFilterChainFilter {
            /**
             * The filter name to match on.
             */
            name?: pulumi.Input<string>;
            subFilter?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchListenerFilterChainFilterSubFilter>;
        }
        /**
         * The next level filter within this filter to match upon.
         */
        interface EnvoyFilterSpecConfigPatchesMatchListenerFilterChainFilterSubFilter {
            /**
             * The filter name to match on.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Match on properties associated with a proxy.
         */
        interface EnvoyFilterSpecConfigPatchesMatchProxy {
            /**
             * Match on the node metadata supplied by a proxy when connecting to istiod.
             */
            metadata?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * A regular expression in golang regex format (RE2) that can be used to select proxies using a specific version of istio proxy.
             */
            proxyVersion?: pulumi.Input<string>;
        }
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        interface EnvoyFilterSpecConfigPatchesMatchRouteConfiguration {
            /**
             * The Istio gateway config's namespace/name for which this route configuration was generated.
             */
            gateway?: pulumi.Input<string>;
            /**
             * Route configuration name to match on.
             */
            name?: pulumi.Input<string>;
            /**
             * Applicable only for GATEWAY context.
             */
            portName?: pulumi.Input<string>;
            /**
             * The service port number or gateway server port number for which this route configuration was generated.
             */
            portNumber?: pulumi.Input<number>;
            vhost?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchRouteConfigurationVhost>;
        }
        /**
         * Match a specific virtual host in a route configuration and apply the patch to the virtual host.
         */
        interface EnvoyFilterSpecConfigPatchesMatchRouteConfigurationVhost {
            /**
             * The VirtualHosts objects generated by Istio are named as host:port, where the host typically corresponds to the VirtualService's host field or the hostname of a service in the registry.
             */
            name?: pulumi.Input<string>;
            route?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchRouteConfigurationVhostRoute>;
        }
        /**
         * Match a specific route within the virtual host.
         */
        interface EnvoyFilterSpecConfigPatchesMatchRouteConfigurationVhostRoute {
            /**
             * Match a route with specific action type.
             *
             * Valid Options: ANY, ROUTE, REDIRECT, DIRECT_RESPONSE
             */
            action?: pulumi.Input<string>;
            /**
             * The Route objects generated by default are named as default.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * The patch to apply along with the operation.
         */
        interface EnvoyFilterSpecConfigPatchesPatch {
            /**
             * Determines the filter insertion order.
             *
             * Valid Options: AUTHN, AUTHZ, STATS
             */
            filterClass?: pulumi.Input<string>;
            /**
             * Determines how the patch should be applied.
             *
             * Valid Options: MERGE, ADD, REMOVE, INSERT_BEFORE, INSERT_AFTER, INSERT_FIRST, REPLACE
             */
            operation?: pulumi.Input<string>;
            /**
             * The JSON config of the object being patched.
             */
            value?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Customizing Envoy configuration generated by Istio. See more details at: https://istio.io/docs/reference/config/networking/envoy-filter.html
         */
        interface EnvoyFilterSpecPatch {
            /**
             * One or more patches with match conditions.
             */
            configPatches?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesPatch>[]>;
            /**
             * Priority defines the order in which patch sets are applied within a context.
             */
            priority?: pulumi.Input<number>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecTargetRefsPatch>[]>;
            workloadSelector?: pulumi.Input<inputs.networking.v1alpha3.EnvoyFilterSpecWorkloadSelectorPatch>;
        }
        interface EnvoyFilterSpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface EnvoyFilterSpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this patch configuration should be applied.
         */
        interface EnvoyFilterSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this patch configuration should be applied.
         */
        interface EnvoyFilterSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface Gateway {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1alpha3">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Gateway">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1alpha3.GatewaySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpec {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * A list of server specifications.
             */
            servers?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.GatewaySpecServers>[]>;
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpecPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * A list of server specifications.
             */
            servers?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.GatewaySpecServersPatch>[]>;
        }
        interface GatewaySpecServers {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            defaultEndpoint?: pulumi.Input<string>;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.GatewaySpecServersPort>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.GatewaySpecServersTls>;
        }
        interface GatewaySpecServersPatch {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            defaultEndpoint?: pulumi.Input<string>;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.GatewaySpecServersPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.GatewaySpecServersTlsPatch>;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface ServiceEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1alpha3">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"ServiceEntry">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1alpha3.ServiceEntrySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpec {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more endpoints associated with the service.
             */
            endpoints?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.ServiceEntrySpecEndpoints>[]>;
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location?: pulumi.Input<string>;
            /**
             * The ports associated with the external service.
             */
            ports?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.ServiceEntrySpecPorts>[]>;
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution?: pulumi.Input<string>;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            workloadSelector?: pulumi.Input<inputs.networking.v1alpha3.ServiceEntrySpecWorkloadSelector>;
        }
        interface ServiceEntrySpecEndpoints {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        interface ServiceEntrySpecEndpointsPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpecPatch {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more endpoints associated with the service.
             */
            endpoints?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.ServiceEntrySpecEndpointsPatch>[]>;
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location?: pulumi.Input<string>;
            /**
             * The ports associated with the external service.
             */
            ports?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.ServiceEntrySpecPortsPatch>[]>;
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution?: pulumi.Input<string>;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            workloadSelector?: pulumi.Input<inputs.networking.v1alpha3.ServiceEntrySpecWorkloadSelectorPatch>;
        }
        interface ServiceEntrySpecPorts {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort?: pulumi.Input<number>;
        }
        interface ServiceEntrySpecPortsPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface Sidecar {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1alpha3">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Sidecar">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpec {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.SidecarSpecEgress>[]>;
            inboundConnectionPool?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecInboundConnectionPool>;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngress>[]>;
            outboundTrafficPolicy?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicy>;
            workloadSelector?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecWorkloadSelector>;
        }
        interface SidecarSpecEgress {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            port?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecEgressPort>;
        }
        interface SidecarSpecEgressPatch {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            port?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecEgressPortPatch>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPool {
            http?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecInboundConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecInboundConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        interface SidecarSpecIngress {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind?: pulumi.Input<string>;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressConnectionPool>;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressPort>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressTls>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPool {
            http?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecIngressConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecIngressConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        interface SidecarSpecIngressPatch {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind?: pulumi.Input<string>;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            connectionPool?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolPatch>;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressTlsPatch>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicy {
            egressProxy?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyEgressProxy>;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode?: pulumi.Input<string>;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxy {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyEgressProxyPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicyPatch {
            egressProxy?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyEgressProxyPatch>;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpecPatch {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.SidecarSpecEgressPatch>[]>;
            inboundConnectionPool?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolPatch>;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.SidecarSpecIngressPatch>[]>;
            outboundTrafficPolicy?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyPatch>;
            workloadSelector?: pulumi.Input<inputs.networking.v1alpha3.SidecarSpecWorkloadSelectorPatch>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualService {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1alpha3">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"VirtualService">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpec {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttp>[]>;
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcp>[]>;
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTls>[]>;
        }
        interface VirtualServiceSpecHttp {
            corsPolicy?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpCorsPolicy>;
            delegate?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpDelegate>;
            directResponse?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpDirectResponse>;
            fault?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFault>;
            headers?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpHeaders>;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatch>[]>;
            mirror?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirror>;
            mirrorPercent?: pulumi.Input<number>;
            mirrorPercentage?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPercentage>;
            mirror_percent?: pulumi.Input<number>;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrors>[]>;
            /**
             * The name assigned to the route for debugging purposes.
             */
            name?: pulumi.Input<string>;
            redirect?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRedirect>;
            retries?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRetries>;
            rewrite?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRewrite>;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRoute>[]>;
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout?: pulumi.Input<string>;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicy {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods?: pulumi.Input<pulumi.Input<string>[]>;
            allowOrigin?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpCorsPolicyAllowOrigins>[]>;
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge?: pulumi.Input<string>;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOrigins {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicyPatch {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods?: pulumi.Input<pulumi.Input<string>[]>;
            allowOrigin?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch>[]>;
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge?: pulumi.Input<string>;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights?: pulumi.Input<string>;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegate {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegatePatch {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponse {
            body?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpDirectResponseBody>;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status?: pulumi.Input<number>;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBody {
            /**
             * response body as base64 encoded bytes.
             */
            bytes?: pulumi.Input<string>;
            string?: pulumi.Input<string>;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBodyPatch {
            /**
             * response body as base64 encoded bytes.
             */
            bytes?: pulumi.Input<string>;
            string?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponsePatch {
            body?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpDirectResponseBodyPatch>;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status?: pulumi.Input<number>;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFault {
            abort?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultAbort>;
            delay?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultDelay>;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbort {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus?: pulumi.Input<string>;
            http2Error?: pulumi.Input<string>;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultAbortPercentage>;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbortPatch {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus?: pulumi.Input<string>;
            http2Error?: pulumi.Input<string>;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultAbortPercentagePatch>;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelay {
            exponentialDelay?: pulumi.Input<string>;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay?: pulumi.Input<string>;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultDelayPercentage>;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelayPatch {
            exponentialDelay?: pulumi.Input<string>;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay?: pulumi.Input<string>;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultDelayPercentagePatch>;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFaultPatch {
            abort?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultAbortPatch>;
            delay?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultDelayPatch>;
        }
        interface VirtualServiceSpecHttpHeaders {
            request?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersRequest>;
            response?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersResponse>;
        }
        interface VirtualServiceSpecHttpHeadersPatch {
            request?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersRequestPatch>;
            response?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersResponsePatch>;
        }
        interface VirtualServiceSpecHttpHeadersRequest {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersRequestPatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersResponse {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersResponsePatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpMatch {
            authority?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchAuthority>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase?: pulumi.Input<boolean>;
            method?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchMethod>;
            /**
             * The name assigned to a match.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * Query parameters for matching.
             */
            queryParams?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            scheme?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchScheme>;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix?: pulumi.Input<string>;
            uri?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchUri>;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthority {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthorityPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethod {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethodPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpMatchPatch {
            authority?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchAuthorityPatch>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase?: pulumi.Input<boolean>;
            method?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchMethodPatch>;
            /**
             * The name assigned to a match.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * Query parameters for matching.
             */
            queryParams?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            scheme?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchSchemePatch>;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix?: pulumi.Input<string>;
            uri?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchUriPatch>;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchScheme {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchSchemePatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUri {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUriPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirror {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirrorPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpMirrors {
            destination?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsDestination>;
            percentage?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsPercentage>;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpMirrorsPatch {
            destination?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsDestinationPatch>;
            percentage?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsPercentagePatch>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentagePatch {
            value?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpPatch {
            corsPolicy?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpCorsPolicyPatch>;
            delegate?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpDelegatePatch>;
            directResponse?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpDirectResponsePatch>;
            fault?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpFaultPatch>;
            headers?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersPatch>;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMatchPatch>[]>;
            mirror?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPatch>;
            mirrorPercent?: pulumi.Input<number>;
            mirrorPercentage?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPercentagePatch>;
            mirror_percent?: pulumi.Input<number>;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsPatch>[]>;
            /**
             * The name assigned to the route for debugging purposes.
             */
            name?: pulumi.Input<string>;
            redirect?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRedirectPatch>;
            retries?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRetriesPatch>;
            rewrite?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRewritePatch>;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRoutePatch>[]>;
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirect {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port?: pulumi.Input<number>;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode?: pulumi.Input<number>;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirectPatch {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port?: pulumi.Input<number>;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode?: pulumi.Input<number>;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetries {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts?: pulumi.Input<number>;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout?: pulumi.Input<string>;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn?: pulumi.Input<string>;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities?: pulumi.Input<boolean>;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetriesPatch {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts?: pulumi.Input<number>;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout?: pulumi.Input<string>;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn?: pulumi.Input<string>;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities?: pulumi.Input<boolean>;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewrite {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri?: pulumi.Input<string>;
            uriRegexRewrite?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRewriteUriRegexRewrite>;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewritePatch {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri?: pulumi.Input<string>;
            uriRegexRewrite?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRewriteUriRegexRewritePatch>;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewrite {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match?: pulumi.Input<string>;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite?: pulumi.Input<string>;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewritePatch {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match?: pulumi.Input<string>;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpRoute {
            destination?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteDestination>;
            headers?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeaders>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpRouteHeaders {
            request?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersRequest>;
            response?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersResponse>;
        }
        interface VirtualServiceSpecHttpRouteHeadersPatch {
            request?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersRequestPatch>;
            response?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersResponsePatch>;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequest {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequestPatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersResponse {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersResponsePatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteDestinationPatch>;
            headers?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpecPatch {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecHttpPatch>[]>;
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpPatch>[]>;
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsPatch>[]>;
        }
        interface VirtualServiceSpecTcp {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpMatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpRoute>[]>;
        }
        interface VirtualServiceSpecTcpMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            sourceSubnet?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTcpMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            sourceSubnet?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTcpPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpMatchPatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpRoutePatch>[]>;
        }
        interface VirtualServiceSpecTcpRoute {
            destination?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpRouteDestination>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTcpRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTcpRouteDestinationPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTls {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsMatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsRoute>[]>;
        }
        interface VirtualServiceSpecTlsMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTlsMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTlsPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsMatchPatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsRoutePatch>[]>;
        }
        interface VirtualServiceSpecTlsRoute {
            destination?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsRouteDestination>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTlsRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1alpha3.VirtualServiceSpecTlsRouteDestinationPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        interface WorkloadEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1alpha3">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"WorkloadEntry">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1alpha3.WorkloadEntrySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpec {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpecPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        interface WorkloadGroup {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1alpha3">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"WorkloadGroup">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpec {
            metadata?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecMetadata>;
            probe?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbe>;
            template?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecTemplate>;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpecPatch {
            metadata?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecMetadataPatch>;
            probe?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbePatch>;
            template?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecTemplatePatch>;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbe {
            exec?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeExec>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeGrpc>;
            httpGet?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeHttpGet>;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeTcpSocket>;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExec {
            /**
             * Command to run.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExecPatch {
            /**
             * Command to run.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpc {
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpcPatch {
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeHttpGetHttpHeaders>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            scheme?: pulumi.Input<string>;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeHttpGetHttpHeadersPatch>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            scheme?: pulumi.Input<string>;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbePatch {
            exec?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeExecPatch>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeHttpGetPatch>;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.networking.v1alpha3.WorkloadGroupSpecProbeTcpSocketPatch>;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number>;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number>;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplate {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplatePatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
    }
    namespace v1beta1 {
        interface DestinationRule {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"DestinationRule">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpec {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsets>[]>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicy>;
            workloadSelector?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecWorkloadSelector>;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpecPatch {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsPatch>[]>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPatch>;
            workloadSelector?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecWorkloadSelectorPatch>;
        }
        interface DestinationRuleSpecSubsets {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Name of the subset.
             */
            name?: pulumi.Input<string>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicy>;
        }
        interface DestinationRuleSpecSubsetsPatch {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Name of the subset.
             */
            name?: pulumi.Input<string>;
            trafficPolicy?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPatch>;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicy {
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol>;
            tls?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyTls>;
            tunnel?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyTunnel>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPool {
            http?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch>;
            tls?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyTlsPatch>;
            tunnel?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings {
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection>;
            port?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort>;
            tls?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool {
            http?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch>;
            port?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicy {
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyOutlierDetection>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettings>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyProxyProtocol>;
            tls?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyTls>;
            tunnel?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyTunnel>;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPool {
            http?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicyPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyOutlierDetectionPatch>;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch>[]>;
            proxyProtocol?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyProxyProtocolPatch>;
            tls?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyTlsPatch>;
            tunnel?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyTunnelPatch>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettings {
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool>;
            loadBalancer?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer>;
            outlierDetection?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection>;
            port?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPort>;
            tls?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsTls>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool {
            http?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name?: pulumi.Input<string>;
            /**
             * Path to set for the cookie.
             */
            path?: pulumi.Input<string>;
            /**
             * Lifetime of the cookie.
             */
            ttl?: pulumi.Input<string>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch>;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: pulumi.Input<string>;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: pulumi.Input<string>;
            maglev?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch>;
            /**
             * Deprecated.
             */
            minimumRingSize?: pulumi.Input<number>;
            ringHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch>;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: pulumi.Input<boolean>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: pulumi.Input<string>;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from?: pulumi.Input<string>;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to?: pulumi.Input<string>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch>[]>;
            /**
             * Enable locality load balancing.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch>[]>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch>;
            localityLbSetting?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch>;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple?: pulumi.Input<string>;
            warmup?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch>;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs?: pulumi.Input<string>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression?: pulumi.Input<number>;
            duration?: pulumi.Input<string>;
            minimumPercent?: pulumi.Input<number>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: pulumi.Input<string>;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: pulumi.Input<number>;
            consecutiveErrors?: pulumi.Input<number>;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: pulumi.Input<number>;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures?: pulumi.Input<number>;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent?: pulumi.Input<number>;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent?: pulumi.Input<number>;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: pulumi.Input<boolean>;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch {
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch>;
            loadBalancer?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch>;
            outlierDetection?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch>;
            port?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecTrafficPolicyProxyProtocol {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * The upstream PROXY protocol settings.
         */
        interface DestinationRuleSpecTrafficPolicyProxyProtocolPatch {
            /**
             * The PROXY protocol version to use.
             *
             * Valid Options: V1, V2
             */
            version?: pulumi.Input<string>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: pulumi.Input<string>;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify?: pulumi.Input<boolean>;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol?: pulumi.Input<string>;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost?: pulumi.Input<string>;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface Gateway {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Gateway">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1beta1.GatewaySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpec {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * A list of server specifications.
             */
            servers?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.GatewaySpecServers>[]>;
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpecPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * A list of server specifications.
             */
            servers?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.GatewaySpecServersPatch>[]>;
        }
        interface GatewaySpecServers {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            defaultEndpoint?: pulumi.Input<string>;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.GatewaySpecServersPort>;
            tls?: pulumi.Input<inputs.networking.v1beta1.GatewaySpecServersTls>;
        }
        interface GatewaySpecServersPatch {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            defaultEndpoint?: pulumi.Input<string>;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.GatewaySpecServersPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1beta1.GatewaySpecServersTlsPatch>;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface ProxyConfig {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"ProxyConfig">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1beta1.ProxyConfigSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Provides configuration for individual workloads. See more details at: https://istio.io/docs/reference/config/networking/proxy-config.html
         */
        interface ProxyConfigSpec {
            /**
             * The number of worker threads to run.
             */
            concurrency?: pulumi.Input<number>;
            /**
             * Additional environment variables for the proxy.
             */
            environmentVariables?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            image?: pulumi.Input<inputs.networking.v1beta1.ProxyConfigSpecImage>;
            selector?: pulumi.Input<inputs.networking.v1beta1.ProxyConfigSpecSelector>;
        }
        /**
         * Specifies the details of the proxy image.
         */
        interface ProxyConfigSpecImage {
            /**
             * The image type of the image.
             */
            imageType?: pulumi.Input<string>;
        }
        /**
         * Specifies the details of the proxy image.
         */
        interface ProxyConfigSpecImagePatch {
            /**
             * The image type of the image.
             */
            imageType?: pulumi.Input<string>;
        }
        /**
         * Provides configuration for individual workloads. See more details at: https://istio.io/docs/reference/config/networking/proxy-config.html
         */
        interface ProxyConfigSpecPatch {
            /**
             * The number of worker threads to run.
             */
            concurrency?: pulumi.Input<number>;
            /**
             * Additional environment variables for the proxy.
             */
            environmentVariables?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            image?: pulumi.Input<inputs.networking.v1beta1.ProxyConfigSpecImagePatch>;
            selector?: pulumi.Input<inputs.networking.v1beta1.ProxyConfigSpecSelectorPatch>;
        }
        /**
         * Optional.
         */
        interface ProxyConfigSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Optional.
         */
        interface ProxyConfigSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface ServiceEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"ServiceEntry">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1beta1.ServiceEntrySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpec {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more endpoints associated with the service.
             */
            endpoints?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.ServiceEntrySpecEndpoints>[]>;
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location?: pulumi.Input<string>;
            /**
             * The ports associated with the external service.
             */
            ports?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.ServiceEntrySpecPorts>[]>;
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution?: pulumi.Input<string>;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            workloadSelector?: pulumi.Input<inputs.networking.v1beta1.ServiceEntrySpecWorkloadSelector>;
        }
        interface ServiceEntrySpecEndpoints {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        interface ServiceEntrySpecEndpointsPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpecPatch {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more endpoints associated with the service.
             */
            endpoints?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.ServiceEntrySpecEndpointsPatch>[]>;
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location?: pulumi.Input<string>;
            /**
             * The ports associated with the external service.
             */
            ports?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.ServiceEntrySpecPortsPatch>[]>;
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution?: pulumi.Input<string>;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            workloadSelector?: pulumi.Input<inputs.networking.v1beta1.ServiceEntrySpecWorkloadSelectorPatch>;
        }
        interface ServiceEntrySpecPorts {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort?: pulumi.Input<number>;
        }
        interface ServiceEntrySpecPortsPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface Sidecar {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Sidecar">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1beta1.SidecarSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpec {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.SidecarSpecEgress>[]>;
            inboundConnectionPool?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecInboundConnectionPool>;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngress>[]>;
            outboundTrafficPolicy?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicy>;
            workloadSelector?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecWorkloadSelector>;
        }
        interface SidecarSpecEgress {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            port?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecEgressPort>;
        }
        interface SidecarSpecEgressPatch {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind?: pulumi.Input<string>;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            port?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecEgressPortPatch>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPool {
            http?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecInboundConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecInboundConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecInboundConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecInboundConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecInboundConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecInboundConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecInboundConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        interface SidecarSpecIngress {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind?: pulumi.Input<string>;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressConnectionPool>;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressPort>;
            tls?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressTls>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPool {
            http?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressConnectionPoolHttp>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressConnectionPoolTcp>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecIngressConnectionPoolHttp {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * HTTP connection pool settings.
         */
        interface SidecarSpecIngressConnectionPoolHttpPatch {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: pulumi.Input<string>;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: pulumi.Input<number>;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: pulumi.Input<number>;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: pulumi.Input<number>;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: pulumi.Input<number>;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: pulumi.Input<number>;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: pulumi.Input<boolean>;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPoolPatch {
            http?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressConnectionPoolHttpPatch>;
            tcp?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressConnectionPoolTcpPatch>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressConnectionPoolTcpTcpKeepalive>;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: pulumi.Input<string>;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: pulumi.Input<string>;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: pulumi.Input<string>;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: pulumi.Input<number>;
            tcpKeepalive?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: pulumi.Input<string>;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: pulumi.Input<number>;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: pulumi.Input<string>;
        }
        interface SidecarSpecIngressPatch {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind?: pulumi.Input<string>;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode?: pulumi.Input<string>;
            connectionPool?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressConnectionPoolPatch>;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressPortPatch>;
            tls?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressTlsPatch>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPort {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPortPatch {
            /**
             * Label assigned to the port.
             */
            name?: pulumi.Input<string>;
            /**
             * A valid non-negative integer port number.
             */
            number?: pulumi.Input<number>;
            /**
             * The protocol exposed on the port.
             */
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number>;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates?: pulumi.Input<string>;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl?: pulumi.Input<string>;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName?: pulumi.Input<string>;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect?: pulumi.Input<boolean>;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion?: pulumi.Input<string>;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate?: pulumi.Input<string>;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicy {
            egressProxy?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyEgressProxy>;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode?: pulumi.Input<string>;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxy {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyEgressProxyPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch {
            number?: pulumi.Input<number>;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicyPatch {
            egressProxy?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyEgressProxyPatch>;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpecPatch {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.SidecarSpecEgressPatch>[]>;
            inboundConnectionPool?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecInboundConnectionPoolPatch>;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.SidecarSpecIngressPatch>[]>;
            outboundTrafficPolicy?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyPatch>;
            workloadSelector?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecWorkloadSelectorPatch>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualService {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"VirtualService">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpec {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttp>[]>;
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcp>[]>;
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTls>[]>;
        }
        interface VirtualServiceSpecHttp {
            corsPolicy?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpCorsPolicy>;
            delegate?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpDelegate>;
            directResponse?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpDirectResponse>;
            fault?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFault>;
            headers?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpHeaders>;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatch>[]>;
            mirror?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirror>;
            mirrorPercent?: pulumi.Input<number>;
            mirrorPercentage?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPercentage>;
            mirror_percent?: pulumi.Input<number>;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrors>[]>;
            /**
             * The name assigned to the route for debugging purposes.
             */
            name?: pulumi.Input<string>;
            redirect?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRedirect>;
            retries?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRetries>;
            rewrite?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRewrite>;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRoute>[]>;
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout?: pulumi.Input<string>;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicy {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods?: pulumi.Input<pulumi.Input<string>[]>;
            allowOrigin?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpCorsPolicyAllowOrigins>[]>;
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge?: pulumi.Input<string>;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOrigins {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicyPatch {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods?: pulumi.Input<pulumi.Input<string>[]>;
            allowOrigin?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch>[]>;
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge?: pulumi.Input<string>;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights?: pulumi.Input<string>;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegate {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegatePatch {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponse {
            body?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpDirectResponseBody>;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status?: pulumi.Input<number>;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBody {
            /**
             * response body as base64 encoded bytes.
             */
            bytes?: pulumi.Input<string>;
            string?: pulumi.Input<string>;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBodyPatch {
            /**
             * response body as base64 encoded bytes.
             */
            bytes?: pulumi.Input<string>;
            string?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponsePatch {
            body?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpDirectResponseBodyPatch>;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status?: pulumi.Input<number>;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFault {
            abort?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultAbort>;
            delay?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultDelay>;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbort {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus?: pulumi.Input<string>;
            http2Error?: pulumi.Input<string>;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultAbortPercentage>;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbortPatch {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus?: pulumi.Input<string>;
            http2Error?: pulumi.Input<string>;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultAbortPercentagePatch>;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelay {
            exponentialDelay?: pulumi.Input<string>;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay?: pulumi.Input<string>;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultDelayPercentage>;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelayPatch {
            exponentialDelay?: pulumi.Input<string>;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay?: pulumi.Input<string>;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent?: pulumi.Input<number>;
            percentage?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultDelayPercentagePatch>;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFaultPatch {
            abort?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultAbortPatch>;
            delay?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultDelayPatch>;
        }
        interface VirtualServiceSpecHttpHeaders {
            request?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpHeadersRequest>;
            response?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpHeadersResponse>;
        }
        interface VirtualServiceSpecHttpHeadersPatch {
            request?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpHeadersRequestPatch>;
            response?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpHeadersResponsePatch>;
        }
        interface VirtualServiceSpecHttpHeadersRequest {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersRequestPatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersResponse {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpHeadersResponsePatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpMatch {
            authority?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchAuthority>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase?: pulumi.Input<boolean>;
            method?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchMethod>;
            /**
             * The name assigned to a match.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * Query parameters for matching.
             */
            queryParams?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            scheme?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchScheme>;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix?: pulumi.Input<string>;
            uri?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchUri>;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthority {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthorityPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethod {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethodPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpMatchPatch {
            authority?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchAuthorityPatch>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase?: pulumi.Input<boolean>;
            method?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchMethodPatch>;
            /**
             * The name assigned to a match.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * Query parameters for matching.
             */
            queryParams?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            scheme?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchSchemePatch>;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix?: pulumi.Input<string>;
            uri?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchUriPatch>;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchScheme {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchSchemePatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUri {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUriPatch {
            exact?: pulumi.Input<string>;
            prefix?: pulumi.Input<string>;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex?: pulumi.Input<string>;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirror {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirrorPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentagePatch {
            value?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpMirrors {
            destination?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsDestination>;
            percentage?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsPercentage>;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpMirrorsPatch {
            destination?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsDestinationPatch>;
            percentage?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsPercentagePatch>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentage {
            value?: pulumi.Input<number>;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentagePatch {
            value?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpPatch {
            corsPolicy?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpCorsPolicyPatch>;
            delegate?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpDelegatePatch>;
            directResponse?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpDirectResponsePatch>;
            fault?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpFaultPatch>;
            headers?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpHeadersPatch>;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMatchPatch>[]>;
            mirror?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPatch>;
            mirrorPercent?: pulumi.Input<number>;
            mirrorPercentage?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPercentagePatch>;
            mirror_percent?: pulumi.Input<number>;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsPatch>[]>;
            /**
             * The name assigned to the route for debugging purposes.
             */
            name?: pulumi.Input<string>;
            redirect?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRedirectPatch>;
            retries?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRetriesPatch>;
            rewrite?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRewritePatch>;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRoutePatch>[]>;
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirect {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port?: pulumi.Input<number>;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode?: pulumi.Input<number>;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirectPatch {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port?: pulumi.Input<number>;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode?: pulumi.Input<number>;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme?: pulumi.Input<string>;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri?: pulumi.Input<string>;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetries {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts?: pulumi.Input<number>;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout?: pulumi.Input<string>;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn?: pulumi.Input<string>;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities?: pulumi.Input<boolean>;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetriesPatch {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts?: pulumi.Input<number>;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout?: pulumi.Input<string>;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn?: pulumi.Input<string>;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities?: pulumi.Input<boolean>;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewrite {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri?: pulumi.Input<string>;
            uriRegexRewrite?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRewriteUriRegexRewrite>;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewritePatch {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority?: pulumi.Input<string>;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri?: pulumi.Input<string>;
            uriRegexRewrite?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRewriteUriRegexRewritePatch>;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewrite {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match?: pulumi.Input<string>;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite?: pulumi.Input<string>;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewritePatch {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match?: pulumi.Input<string>;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecHttpRoute {
            destination?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteDestination>;
            headers?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeaders>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecHttpRouteHeaders {
            request?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersRequest>;
            response?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersResponse>;
        }
        interface VirtualServiceSpecHttpRouteHeadersPatch {
            request?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersRequestPatch>;
            response?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersResponsePatch>;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequest {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequestPatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersResponse {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRouteHeadersResponsePatch {
            add?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            set?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface VirtualServiceSpecHttpRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteDestinationPatch>;
            headers?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpecPatch {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecHttpPatch>[]>;
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpPatch>[]>;
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsPatch>[]>;
        }
        interface VirtualServiceSpecTcp {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpMatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpRoute>[]>;
        }
        interface VirtualServiceSpecTcpMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            sourceSubnet?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTcpMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
            sourceSubnet?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTcpPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpMatchPatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpRoutePatch>[]>;
        }
        interface VirtualServiceSpecTcpRoute {
            destination?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpRouteDestination>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTcpRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTcpRouteDestinationPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTls {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsMatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsRoute>[]>;
        }
        interface VirtualServiceSpecTlsMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTlsMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the port on the host that is being addressed.
             */
            port?: pulumi.Input<number>;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace?: pulumi.Input<string>;
        }
        interface VirtualServiceSpecTlsPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsMatchPatch>[]>;
            /**
             * The destination to which the connection should be forwarded to.
             */
            route?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsRoutePatch>[]>;
        }
        interface VirtualServiceSpecTlsRoute {
            destination?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsRouteDestination>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsRouteDestinationPort>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host?: pulumi.Input<string>;
            port?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsRouteDestinationPortPatch>;
            /**
             * The name of a subset within the service.
             */
            subset?: pulumi.Input<string>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPort {
            number?: pulumi.Input<number>;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPortPatch {
            number?: pulumi.Input<number>;
        }
        interface VirtualServiceSpecTlsRoutePatch {
            destination?: pulumi.Input<inputs.networking.v1beta1.VirtualServiceSpecTlsRouteDestinationPatch>;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight?: pulumi.Input<number>;
        }
        interface WorkloadEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"WorkloadEntry">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1beta1.WorkloadEntrySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpec {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpecPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        interface WorkloadGroup {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"WorkloadGroup">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpec {
            metadata?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecMetadata>;
            probe?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbe>;
            template?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecTemplate>;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpecPatch {
            metadata?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecMetadataPatch>;
            probe?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbePatch>;
            template?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecTemplatePatch>;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbe {
            exec?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeExec>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeGrpc>;
            httpGet?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeHttpGet>;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeTcpSocket>;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExec {
            /**
             * Command to run.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExecPatch {
            /**
             * Command to run.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpc {
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpcPatch {
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeHttpGetHttpHeaders>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            scheme?: pulumi.Input<string>;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host?: pulumi.Input<string>;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeHttpGetHttpHeadersPatch>[]>;
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Port on which the endpoint lives.
             */
            port?: pulumi.Input<number>;
            scheme?: pulumi.Input<string>;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbePatch {
            exec?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeExecPatch>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeHttpGetPatch>;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.networking.v1beta1.WorkloadGroupSpecProbeTcpSocketPatch>;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number>;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number>;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplate {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplatePatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address?: pulumi.Input<string>;
            /**
             * One or more labels associated with the endpoint.
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * The locality associated with the endpoint.
             */
            locality?: pulumi.Input<string>;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network?: pulumi.Input<string>;
            /**
             * Set of ports associated with the endpoint.
             */
            ports?: pulumi.Input<{
                [key: string]: pulumi.Input<number>;
            }>;
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount?: pulumi.Input<string>;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight?: pulumi.Input<number>;
        }
    }
}
export declare namespace security {
    namespace v1 {
        interface AuthorizationPolicy {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"security.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"AuthorizationPolicy">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
         */
        interface AuthorizationPolicySpec {
            /**
             * Optional.
             *
             * Valid Options: ALLOW, DENY, AUDIT, CUSTOM
             */
            action?: pulumi.Input<string>;
            provider?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecProvider>;
            /**
             * Optional.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRules>[]>;
            selector?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecSelector>;
            targetRef?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecTargetRef>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecTargetRefs>[]>;
        }
        /**
         * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
         */
        interface AuthorizationPolicySpecPatch {
            /**
             * Optional.
             *
             * Valid Options: ALLOW, DENY, AUDIT, CUSTOM
             */
            action?: pulumi.Input<string>;
            provider?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecProviderPatch>;
            /**
             * Optional.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesPatch>[]>;
            selector?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecSelectorPatch>;
            targetRef?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecTargetRefPatch>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecTargetRefsPatch>[]>;
        }
        /**
         * Specifies detailed configuration of the CUSTOM action.
         */
        interface AuthorizationPolicySpecProvider {
            /**
             * Specifies the name of the extension provider.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Specifies detailed configuration of the CUSTOM action.
         */
        interface AuthorizationPolicySpecProviderPatch {
            /**
             * Specifies the name of the extension provider.
             */
            name?: pulumi.Input<string>;
        }
        interface AuthorizationPolicySpecRules {
            /**
             * Optional.
             */
            from?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesFrom>[]>;
            /**
             * Optional.
             */
            to?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesTo>[]>;
            /**
             * Optional.
             */
            when?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesWhen>[]>;
        }
        interface AuthorizationPolicySpecRulesFrom {
            source?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesFromSource>;
        }
        interface AuthorizationPolicySpecRulesFromPatch {
            source?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesFromSourcePatch>;
        }
        /**
         * Source specifies the source of a request.
         */
        interface AuthorizationPolicySpecRulesFromSource {
            /**
             * Optional.
             */
            ipBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notRemoteIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notRequestPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notServiceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            principals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            remoteIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            requestPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            serviceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Source specifies the source of a request.
         */
        interface AuthorizationPolicySpecRulesFromSourcePatch {
            /**
             * Optional.
             */
            ipBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notRemoteIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notRequestPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notServiceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            principals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            remoteIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            requestPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            serviceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface AuthorizationPolicySpecRulesPatch {
            /**
             * Optional.
             */
            from?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesFromPatch>[]>;
            /**
             * Optional.
             */
            to?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesToPatch>[]>;
            /**
             * Optional.
             */
            when?: pulumi.Input<pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesWhenPatch>[]>;
        }
        interface AuthorizationPolicySpecRulesTo {
            operation?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesToOperation>;
        }
        /**
         * Operation specifies the operation of a request.
         */
        interface AuthorizationPolicySpecRulesToOperation {
            /**
             * Optional.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            methods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPorts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            paths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            ports?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Operation specifies the operation of a request.
         */
        interface AuthorizationPolicySpecRulesToOperationPatch {
            /**
             * Optional.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            methods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPorts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            paths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            ports?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface AuthorizationPolicySpecRulesToPatch {
            operation?: pulumi.Input<inputs.security.v1.AuthorizationPolicySpecRulesToOperationPatch>;
        }
        interface AuthorizationPolicySpecRulesWhen {
            /**
             * The name of an Istio attribute.
             */
            key?: pulumi.Input<string>;
            /**
             * Optional.
             */
            notValues?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface AuthorizationPolicySpecRulesWhenPatch {
            /**
             * The name of an Istio attribute.
             */
            key?: pulumi.Input<string>;
            /**
             * Optional.
             */
            notValues?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Optional.
         */
        interface AuthorizationPolicySpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Optional.
         */
        interface AuthorizationPolicySpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface AuthorizationPolicySpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface AuthorizationPolicySpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface AuthorizationPolicySpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface AuthorizationPolicySpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface PeerAuthentication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"security.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"PeerAuthentication">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.security.v1.PeerAuthenticationSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
         */
        interface PeerAuthenticationSpec {
            mtls?: pulumi.Input<inputs.security.v1.PeerAuthenticationSpecMtls>;
            /**
             * Port specific mutual TLS settings.
             */
            portLevelMtls?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            selector?: pulumi.Input<inputs.security.v1.PeerAuthenticationSpecSelector>;
        }
        /**
         * Mutual TLS settings for workload.
         */
        interface PeerAuthenticationSpecMtls {
            /**
             * Defines the mTLS mode used for peer authentication.
             *
             * Valid Options: DISABLE, PERMISSIVE, STRICT
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Mutual TLS settings for workload.
         */
        interface PeerAuthenticationSpecMtlsPatch {
            /**
             * Defines the mTLS mode used for peer authentication.
             *
             * Valid Options: DISABLE, PERMISSIVE, STRICT
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
         */
        interface PeerAuthenticationSpecPatch {
            mtls?: pulumi.Input<inputs.security.v1.PeerAuthenticationSpecMtlsPatch>;
            /**
             * Port specific mutual TLS settings.
             */
            portLevelMtls?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            selector?: pulumi.Input<inputs.security.v1.PeerAuthenticationSpecSelectorPatch>;
        }
        /**
         * The selector determines the workloads to apply the PeerAuthentication on.
         */
        interface PeerAuthenticationSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * The selector determines the workloads to apply the PeerAuthentication on.
         */
        interface PeerAuthenticationSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RequestAuthentication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"security.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"RequestAuthentication">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.security.v1.RequestAuthenticationSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
         */
        interface RequestAuthenticationSpec {
            /**
             * Define the list of JWTs that can be validated at the selected workloads' proxy.
             */
            jwtRules?: pulumi.Input<pulumi.Input<inputs.security.v1.RequestAuthenticationSpecJwtRules>[]>;
            selector?: pulumi.Input<inputs.security.v1.RequestAuthenticationSpecSelector>;
            targetRef?: pulumi.Input<inputs.security.v1.RequestAuthenticationSpecTargetRef>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.security.v1.RequestAuthenticationSpecTargetRefs>[]>;
        }
        interface RequestAuthenticationSpecJwtRules {
            /**
             * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
             */
            audiences?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            forwardOriginalToken?: pulumi.Input<boolean>;
            /**
             * List of cookie names from which JWT is expected.
             */
            fromCookies?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of header locations from which JWT is expected.
             */
            fromHeaders?: pulumi.Input<pulumi.Input<inputs.security.v1.RequestAuthenticationSpecJwtRulesFromHeaders>[]>;
            /**
             * List of query parameters from which JWT is expected.
             */
            fromParams?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Identifies the issuer that issued the JWT.
             */
            issuer?: pulumi.Input<string>;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            jwks?: pulumi.Input<string>;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwksUri?: pulumi.Input<string>;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwks_uri?: pulumi.Input<string>;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            outputClaimToHeaders?: pulumi.Input<pulumi.Input<inputs.security.v1.RequestAuthenticationSpecJwtRulesOutputClaimToHeaders>[]>;
            /**
             * This field specifies the header name to output a successfully verified JWT payload to the backend.
             */
            outputPayloadToHeader?: pulumi.Input<string>;
            /**
             * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
             */
            timeout?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesFromHeaders {
            /**
             * The HTTP header name.
             */
            name?: pulumi.Input<string>;
            /**
             * The prefix that should be stripped before decoding the token.
             */
            prefix?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesFromHeadersPatch {
            /**
             * The HTTP header name.
             */
            name?: pulumi.Input<string>;
            /**
             * The prefix that should be stripped before decoding the token.
             */
            prefix?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesOutputClaimToHeaders {
            /**
             * The name of the claim to be copied from.
             */
            claim?: pulumi.Input<string>;
            /**
             * The name of the header to be created.
             */
            header?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesOutputClaimToHeadersPatch {
            /**
             * The name of the claim to be copied from.
             */
            claim?: pulumi.Input<string>;
            /**
             * The name of the header to be created.
             */
            header?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesPatch {
            /**
             * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
             */
            audiences?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            forwardOriginalToken?: pulumi.Input<boolean>;
            /**
             * List of cookie names from which JWT is expected.
             */
            fromCookies?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of header locations from which JWT is expected.
             */
            fromHeaders?: pulumi.Input<pulumi.Input<inputs.security.v1.RequestAuthenticationSpecJwtRulesFromHeadersPatch>[]>;
            /**
             * List of query parameters from which JWT is expected.
             */
            fromParams?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Identifies the issuer that issued the JWT.
             */
            issuer?: pulumi.Input<string>;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            jwks?: pulumi.Input<string>;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwksUri?: pulumi.Input<string>;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwks_uri?: pulumi.Input<string>;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            outputClaimToHeaders?: pulumi.Input<pulumi.Input<inputs.security.v1.RequestAuthenticationSpecJwtRulesOutputClaimToHeadersPatch>[]>;
            /**
             * This field specifies the header name to output a successfully verified JWT payload to the backend.
             */
            outputPayloadToHeader?: pulumi.Input<string>;
            /**
             * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
             */
            timeout?: pulumi.Input<string>;
        }
        /**
         * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
         */
        interface RequestAuthenticationSpecPatch {
            /**
             * Define the list of JWTs that can be validated at the selected workloads' proxy.
             */
            jwtRules?: pulumi.Input<pulumi.Input<inputs.security.v1.RequestAuthenticationSpecJwtRulesPatch>[]>;
            selector?: pulumi.Input<inputs.security.v1.RequestAuthenticationSpecSelectorPatch>;
            targetRef?: pulumi.Input<inputs.security.v1.RequestAuthenticationSpecTargetRefPatch>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.security.v1.RequestAuthenticationSpecTargetRefsPatch>[]>;
        }
        /**
         * Optional.
         */
        interface RequestAuthenticationSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Optional.
         */
        interface RequestAuthenticationSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RequestAuthenticationSpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
    }
    namespace v1beta1 {
        interface AuthorizationPolicy {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"security.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"AuthorizationPolicy">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
         */
        interface AuthorizationPolicySpec {
            /**
             * Optional.
             *
             * Valid Options: ALLOW, DENY, AUDIT, CUSTOM
             */
            action?: pulumi.Input<string>;
            provider?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecProvider>;
            /**
             * Optional.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRules>[]>;
            selector?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecSelector>;
            targetRef?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecTargetRef>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecTargetRefs>[]>;
        }
        /**
         * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
         */
        interface AuthorizationPolicySpecPatch {
            /**
             * Optional.
             *
             * Valid Options: ALLOW, DENY, AUDIT, CUSTOM
             */
            action?: pulumi.Input<string>;
            provider?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecProviderPatch>;
            /**
             * Optional.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesPatch>[]>;
            selector?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecSelectorPatch>;
            targetRef?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecTargetRefPatch>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecTargetRefsPatch>[]>;
        }
        /**
         * Specifies detailed configuration of the CUSTOM action.
         */
        interface AuthorizationPolicySpecProvider {
            /**
             * Specifies the name of the extension provider.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Specifies detailed configuration of the CUSTOM action.
         */
        interface AuthorizationPolicySpecProviderPatch {
            /**
             * Specifies the name of the extension provider.
             */
            name?: pulumi.Input<string>;
        }
        interface AuthorizationPolicySpecRules {
            /**
             * Optional.
             */
            from?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesFrom>[]>;
            /**
             * Optional.
             */
            to?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesTo>[]>;
            /**
             * Optional.
             */
            when?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesWhen>[]>;
        }
        interface AuthorizationPolicySpecRulesFrom {
            source?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesFromSource>;
        }
        interface AuthorizationPolicySpecRulesFromPatch {
            source?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesFromSourcePatch>;
        }
        /**
         * Source specifies the source of a request.
         */
        interface AuthorizationPolicySpecRulesFromSource {
            /**
             * Optional.
             */
            ipBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notRemoteIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notRequestPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notServiceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            principals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            remoteIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            requestPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            serviceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Source specifies the source of a request.
         */
        interface AuthorizationPolicySpecRulesFromSourcePatch {
            /**
             * Optional.
             */
            ipBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notRemoteIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notRequestPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notServiceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            principals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            remoteIpBlocks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            requestPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            serviceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface AuthorizationPolicySpecRulesPatch {
            /**
             * Optional.
             */
            from?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesFromPatch>[]>;
            /**
             * Optional.
             */
            to?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesToPatch>[]>;
            /**
             * Optional.
             */
            when?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesWhenPatch>[]>;
        }
        interface AuthorizationPolicySpecRulesTo {
            operation?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesToOperation>;
        }
        /**
         * Operation specifies the operation of a request.
         */
        interface AuthorizationPolicySpecRulesToOperation {
            /**
             * Optional.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            methods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPorts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            paths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            ports?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Operation specifies the operation of a request.
         */
        interface AuthorizationPolicySpecRulesToOperationPatch {
            /**
             * Optional.
             */
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            methods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notHosts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            notPorts?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            paths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            ports?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface AuthorizationPolicySpecRulesToPatch {
            operation?: pulumi.Input<inputs.security.v1beta1.AuthorizationPolicySpecRulesToOperationPatch>;
        }
        interface AuthorizationPolicySpecRulesWhen {
            /**
             * The name of an Istio attribute.
             */
            key?: pulumi.Input<string>;
            /**
             * Optional.
             */
            notValues?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface AuthorizationPolicySpecRulesWhenPatch {
            /**
             * The name of an Istio attribute.
             */
            key?: pulumi.Input<string>;
            /**
             * Optional.
             */
            notValues?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Optional.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * Optional.
         */
        interface AuthorizationPolicySpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Optional.
         */
        interface AuthorizationPolicySpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface AuthorizationPolicySpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface AuthorizationPolicySpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface AuthorizationPolicySpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface AuthorizationPolicySpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface PeerAuthentication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"security.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"PeerAuthentication">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.security.v1beta1.PeerAuthenticationSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
         */
        interface PeerAuthenticationSpec {
            mtls?: pulumi.Input<inputs.security.v1beta1.PeerAuthenticationSpecMtls>;
            /**
             * Port specific mutual TLS settings.
             */
            portLevelMtls?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            selector?: pulumi.Input<inputs.security.v1beta1.PeerAuthenticationSpecSelector>;
        }
        /**
         * Mutual TLS settings for workload.
         */
        interface PeerAuthenticationSpecMtls {
            /**
             * Defines the mTLS mode used for peer authentication.
             *
             * Valid Options: DISABLE, PERMISSIVE, STRICT
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Mutual TLS settings for workload.
         */
        interface PeerAuthenticationSpecMtlsPatch {
            /**
             * Defines the mTLS mode used for peer authentication.
             *
             * Valid Options: DISABLE, PERMISSIVE, STRICT
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
         */
        interface PeerAuthenticationSpecPatch {
            mtls?: pulumi.Input<inputs.security.v1beta1.PeerAuthenticationSpecMtlsPatch>;
            /**
             * Port specific mutual TLS settings.
             */
            portLevelMtls?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            selector?: pulumi.Input<inputs.security.v1beta1.PeerAuthenticationSpecSelectorPatch>;
        }
        /**
         * The selector determines the workloads to apply the PeerAuthentication on.
         */
        interface PeerAuthenticationSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * The selector determines the workloads to apply the PeerAuthentication on.
         */
        interface PeerAuthenticationSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RequestAuthentication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"security.istio.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"RequestAuthentication">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
         */
        interface RequestAuthenticationSpec {
            /**
             * Define the list of JWTs that can be validated at the selected workloads' proxy.
             */
            jwtRules?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecJwtRules>[]>;
            selector?: pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecSelector>;
            targetRef?: pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecTargetRef>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecTargetRefs>[]>;
        }
        interface RequestAuthenticationSpecJwtRules {
            /**
             * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
             */
            audiences?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            forwardOriginalToken?: pulumi.Input<boolean>;
            /**
             * List of cookie names from which JWT is expected.
             */
            fromCookies?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of header locations from which JWT is expected.
             */
            fromHeaders?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecJwtRulesFromHeaders>[]>;
            /**
             * List of query parameters from which JWT is expected.
             */
            fromParams?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Identifies the issuer that issued the JWT.
             */
            issuer?: pulumi.Input<string>;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            jwks?: pulumi.Input<string>;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwksUri?: pulumi.Input<string>;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwks_uri?: pulumi.Input<string>;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            outputClaimToHeaders?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecJwtRulesOutputClaimToHeaders>[]>;
            /**
             * This field specifies the header name to output a successfully verified JWT payload to the backend.
             */
            outputPayloadToHeader?: pulumi.Input<string>;
            /**
             * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
             */
            timeout?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesFromHeaders {
            /**
             * The HTTP header name.
             */
            name?: pulumi.Input<string>;
            /**
             * The prefix that should be stripped before decoding the token.
             */
            prefix?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesFromHeadersPatch {
            /**
             * The HTTP header name.
             */
            name?: pulumi.Input<string>;
            /**
             * The prefix that should be stripped before decoding the token.
             */
            prefix?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesOutputClaimToHeaders {
            /**
             * The name of the claim to be copied from.
             */
            claim?: pulumi.Input<string>;
            /**
             * The name of the header to be created.
             */
            header?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesOutputClaimToHeadersPatch {
            /**
             * The name of the claim to be copied from.
             */
            claim?: pulumi.Input<string>;
            /**
             * The name of the header to be created.
             */
            header?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecJwtRulesPatch {
            /**
             * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
             */
            audiences?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            forwardOriginalToken?: pulumi.Input<boolean>;
            /**
             * List of cookie names from which JWT is expected.
             */
            fromCookies?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of header locations from which JWT is expected.
             */
            fromHeaders?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecJwtRulesFromHeadersPatch>[]>;
            /**
             * List of query parameters from which JWT is expected.
             */
            fromParams?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Identifies the issuer that issued the JWT.
             */
            issuer?: pulumi.Input<string>;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            jwks?: pulumi.Input<string>;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwksUri?: pulumi.Input<string>;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwks_uri?: pulumi.Input<string>;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            outputClaimToHeaders?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecJwtRulesOutputClaimToHeadersPatch>[]>;
            /**
             * This field specifies the header name to output a successfully verified JWT payload to the backend.
             */
            outputPayloadToHeader?: pulumi.Input<string>;
            /**
             * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
             */
            timeout?: pulumi.Input<string>;
        }
        /**
         * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
         */
        interface RequestAuthenticationSpecPatch {
            /**
             * Define the list of JWTs that can be validated at the selected workloads' proxy.
             */
            jwtRules?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecJwtRulesPatch>[]>;
            selector?: pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecSelectorPatch>;
            targetRef?: pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecTargetRefPatch>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.security.v1beta1.RequestAuthenticationSpecTargetRefsPatch>[]>;
        }
        /**
         * Optional.
         */
        interface RequestAuthenticationSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Optional.
         */
        interface RequestAuthenticationSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RequestAuthenticationSpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface RequestAuthenticationSpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
    }
}
export declare namespace telemetry {
    namespace v1 {
        interface Telemetry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"telemetry.istio.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Telemetry">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.telemetry.v1.TelemetrySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
         */
        interface TelemetrySpec {
            /**
             * Optional.
             */
            accessLogging?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecAccessLogging>[]>;
            /**
             * Optional.
             */
            metrics?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecMetrics>[]>;
            selector?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecSelector>;
            targetRef?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecTargetRef>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecTargetRefs>[]>;
            /**
             * Optional.
             */
            tracing?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecTracing>[]>;
        }
        interface TelemetrySpecAccessLogging {
            /**
             * Controls logging.
             */
            disabled?: pulumi.Input<boolean>;
            filter?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecAccessLoggingFilter>;
            match?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecAccessLoggingMatch>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecAccessLoggingProviders>[]>;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecAccessLoggingFilter {
            /**
             * CEL expression for selecting when requests/connections should be logged.
             */
            expression?: pulumi.Input<string>;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecAccessLoggingFilterPatch {
            /**
             * CEL expression for selecting when requests/connections should be logged.
             */
            expression?: pulumi.Input<string>;
        }
        /**
         * Allows tailoring of logging behavior to specific conditions.
         */
        interface TelemetrySpecAccessLoggingMatch {
            /**
             * This determines whether or not to apply the access logging configuration based on the direction of traffic relative to the proxied workload.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Allows tailoring of logging behavior to specific conditions.
         */
        interface TelemetrySpecAccessLoggingMatchPatch {
            /**
             * This determines whether or not to apply the access logging configuration based on the direction of traffic relative to the proxied workload.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        interface TelemetrySpecAccessLoggingPatch {
            /**
             * Controls logging.
             */
            disabled?: pulumi.Input<boolean>;
            filter?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecAccessLoggingFilterPatch>;
            match?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecAccessLoggingMatchPatch>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecAccessLoggingProvidersPatch>[]>;
        }
        interface TelemetrySpecAccessLoggingProviders {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        interface TelemetrySpecAccessLoggingProvidersPatch {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetrics {
            /**
             * Optional.
             */
            overrides?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecMetricsOverrides>[]>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecMetricsProviders>[]>;
            /**
             * Optional.
             */
            reportingInterval?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetricsOverrides {
            /**
             * Optional.
             */
            disabled?: pulumi.Input<boolean>;
            match?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecMetricsOverridesMatch>;
            /**
             * Optional.
             */
            tagOverrides?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * Match allows providing the scope of the override.
         */
        interface TelemetrySpecMetricsOverridesMatch {
            /**
             * Allows free-form specification of a metric.
             */
            customMetric?: pulumi.Input<string>;
            /**
             * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/).
             *
             * Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
             */
            metric?: pulumi.Input<string>;
            /**
             * Controls which mode of metrics generation is selected: `CLIENT`, `SERVER`, or `CLIENT_AND_SERVER`.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Match allows providing the scope of the override.
         */
        interface TelemetrySpecMetricsOverridesMatchPatch {
            /**
             * Allows free-form specification of a metric.
             */
            customMetric?: pulumi.Input<string>;
            /**
             * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/).
             *
             * Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
             */
            metric?: pulumi.Input<string>;
            /**
             * Controls which mode of metrics generation is selected: `CLIENT`, `SERVER`, or `CLIENT_AND_SERVER`.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetricsOverridesPatch {
            /**
             * Optional.
             */
            disabled?: pulumi.Input<boolean>;
            match?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecMetricsOverridesMatchPatch>;
            /**
             * Optional.
             */
            tagOverrides?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        interface TelemetrySpecMetricsPatch {
            /**
             * Optional.
             */
            overrides?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecMetricsOverridesPatch>[]>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecMetricsProvidersPatch>[]>;
            /**
             * Optional.
             */
            reportingInterval?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetricsProviders {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetricsProvidersPatch {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
         */
        interface TelemetrySpecPatch {
            /**
             * Optional.
             */
            accessLogging?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecAccessLoggingPatch>[]>;
            /**
             * Optional.
             */
            metrics?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecMetricsPatch>[]>;
            selector?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecSelectorPatch>;
            targetRef?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecTargetRefPatch>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecTargetRefsPatch>[]>;
            /**
             * Optional.
             */
            tracing?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecTracingPatch>[]>;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface TelemetrySpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface TelemetrySpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface TelemetrySpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface TelemetrySpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface TelemetrySpecTracing {
            /**
             * Optional.
             */
            customTags?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Controls span reporting.
             */
            disableSpanReporting?: pulumi.Input<boolean>;
            /**
             * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
             */
            enableIstioTags?: pulumi.Input<boolean>;
            match?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecTracingMatch>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecTracingProviders>[]>;
            /**
             * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
             */
            randomSamplingPercentage?: pulumi.Input<number>;
            useRequestIdForTraceSampling?: pulumi.Input<boolean>;
        }
        /**
         * Allows tailoring of behavior to specific conditions.
         */
        interface TelemetrySpecTracingMatch {
            /**
             * This determines whether or not to apply the tracing configuration based on the direction of traffic relative to the proxied workload.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Allows tailoring of behavior to specific conditions.
         */
        interface TelemetrySpecTracingMatchPatch {
            /**
             * This determines whether or not to apply the tracing configuration based on the direction of traffic relative to the proxied workload.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        interface TelemetrySpecTracingPatch {
            /**
             * Optional.
             */
            customTags?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Controls span reporting.
             */
            disableSpanReporting?: pulumi.Input<boolean>;
            /**
             * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
             */
            enableIstioTags?: pulumi.Input<boolean>;
            match?: pulumi.Input<inputs.telemetry.v1.TelemetrySpecTracingMatchPatch>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1.TelemetrySpecTracingProvidersPatch>[]>;
            /**
             * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
             */
            randomSamplingPercentage?: pulumi.Input<number>;
            useRequestIdForTraceSampling?: pulumi.Input<boolean>;
        }
        interface TelemetrySpecTracingProviders {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        interface TelemetrySpecTracingProvidersPatch {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
    }
    namespace v1alpha1 {
        interface Telemetry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"telemetry.istio.io/v1alpha1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Telemetry">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpec>;
            status?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        /**
         * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
         */
        interface TelemetrySpec {
            /**
             * Optional.
             */
            accessLogging?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecAccessLogging>[]>;
            /**
             * Optional.
             */
            metrics?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecMetrics>[]>;
            selector?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecSelector>;
            targetRef?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTargetRef>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTargetRefs>[]>;
            /**
             * Optional.
             */
            tracing?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTracing>[]>;
        }
        interface TelemetrySpecAccessLogging {
            /**
             * Controls logging.
             */
            disabled?: pulumi.Input<boolean>;
            filter?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingFilter>;
            match?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingMatch>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingProviders>[]>;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecAccessLoggingFilter {
            /**
             * CEL expression for selecting when requests/connections should be logged.
             */
            expression?: pulumi.Input<string>;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecAccessLoggingFilterPatch {
            /**
             * CEL expression for selecting when requests/connections should be logged.
             */
            expression?: pulumi.Input<string>;
        }
        /**
         * Allows tailoring of logging behavior to specific conditions.
         */
        interface TelemetrySpecAccessLoggingMatch {
            /**
             * This determines whether or not to apply the access logging configuration based on the direction of traffic relative to the proxied workload.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Allows tailoring of logging behavior to specific conditions.
         */
        interface TelemetrySpecAccessLoggingMatchPatch {
            /**
             * This determines whether or not to apply the access logging configuration based on the direction of traffic relative to the proxied workload.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        interface TelemetrySpecAccessLoggingPatch {
            /**
             * Controls logging.
             */
            disabled?: pulumi.Input<boolean>;
            filter?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingFilterPatch>;
            match?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingMatchPatch>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingProvidersPatch>[]>;
        }
        interface TelemetrySpecAccessLoggingProviders {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        interface TelemetrySpecAccessLoggingProvidersPatch {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetrics {
            /**
             * Optional.
             */
            overrides?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecMetricsOverrides>[]>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecMetricsProviders>[]>;
            /**
             * Optional.
             */
            reportingInterval?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetricsOverrides {
            /**
             * Optional.
             */
            disabled?: pulumi.Input<boolean>;
            match?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecMetricsOverridesMatch>;
            /**
             * Optional.
             */
            tagOverrides?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        /**
         * Match allows providing the scope of the override.
         */
        interface TelemetrySpecMetricsOverridesMatch {
            /**
             * Allows free-form specification of a metric.
             */
            customMetric?: pulumi.Input<string>;
            /**
             * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/).
             *
             * Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
             */
            metric?: pulumi.Input<string>;
            /**
             * Controls which mode of metrics generation is selected: `CLIENT`, `SERVER`, or `CLIENT_AND_SERVER`.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Match allows providing the scope of the override.
         */
        interface TelemetrySpecMetricsOverridesMatchPatch {
            /**
             * Allows free-form specification of a metric.
             */
            customMetric?: pulumi.Input<string>;
            /**
             * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/).
             *
             * Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
             */
            metric?: pulumi.Input<string>;
            /**
             * Controls which mode of metrics generation is selected: `CLIENT`, `SERVER`, or `CLIENT_AND_SERVER`.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetricsOverridesPatch {
            /**
             * Optional.
             */
            disabled?: pulumi.Input<boolean>;
            match?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecMetricsOverridesMatchPatch>;
            /**
             * Optional.
             */
            tagOverrides?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
        }
        interface TelemetrySpecMetricsPatch {
            /**
             * Optional.
             */
            overrides?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecMetricsOverridesPatch>[]>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecMetricsProvidersPatch>[]>;
            /**
             * Optional.
             */
            reportingInterval?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetricsProviders {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        interface TelemetrySpecMetricsProvidersPatch {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
         */
        interface TelemetrySpecPatch {
            /**
             * Optional.
             */
            accessLogging?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingPatch>[]>;
            /**
             * Optional.
             */
            metrics?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecMetricsPatch>[]>;
            selector?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecSelectorPatch>;
            targetRef?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTargetRefPatch>;
            /**
             * Optional.
             */
            targetRefs?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTargetRefsPatch>[]>;
            /**
             * Optional.
             */
            tracing?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTracingPatch>[]>;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface TelemetrySpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface TelemetrySpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface TelemetrySpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface TelemetrySpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group?: pulumi.Input<string>;
            /**
             * kind is kind of the target resource.
             */
            kind?: pulumi.Input<string>;
            /**
             * name is the name of the target resource.
             */
            name?: pulumi.Input<string>;
            /**
             * namespace is the namespace of the referent.
             */
            namespace?: pulumi.Input<string>;
        }
        interface TelemetrySpecTracing {
            /**
             * Optional.
             */
            customTags?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Controls span reporting.
             */
            disableSpanReporting?: pulumi.Input<boolean>;
            /**
             * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
             */
            enableIstioTags?: pulumi.Input<boolean>;
            match?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTracingMatch>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTracingProviders>[]>;
            /**
             * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
             */
            randomSamplingPercentage?: pulumi.Input<number>;
            useRequestIdForTraceSampling?: pulumi.Input<boolean>;
        }
        /**
         * Allows tailoring of behavior to specific conditions.
         */
        interface TelemetrySpecTracingMatch {
            /**
             * This determines whether or not to apply the tracing configuration based on the direction of traffic relative to the proxied workload.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        /**
         * Allows tailoring of behavior to specific conditions.
         */
        interface TelemetrySpecTracingMatchPatch {
            /**
             * This determines whether or not to apply the tracing configuration based on the direction of traffic relative to the proxied workload.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode?: pulumi.Input<string>;
        }
        interface TelemetrySpecTracingPatch {
            /**
             * Optional.
             */
            customTags?: pulumi.Input<{
                [key: string]: pulumi.Input<{
                    [key: string]: pulumi.Input<string>;
                }>;
            }>;
            /**
             * Controls span reporting.
             */
            disableSpanReporting?: pulumi.Input<boolean>;
            /**
             * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
             */
            enableIstioTags?: pulumi.Input<boolean>;
            match?: pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTracingMatchPatch>;
            /**
             * Optional.
             */
            providers?: pulumi.Input<pulumi.Input<inputs.telemetry.v1alpha1.TelemetrySpecTracingProvidersPatch>[]>;
            /**
             * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
             */
            randomSamplingPercentage?: pulumi.Input<number>;
            useRequestIdForTraceSampling?: pulumi.Input<boolean>;
        }
        interface TelemetrySpecTracingProviders {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
        interface TelemetrySpecTracingProvidersPatch {
            /**
             * Required.
             */
            name?: pulumi.Input<string>;
        }
    }
}
