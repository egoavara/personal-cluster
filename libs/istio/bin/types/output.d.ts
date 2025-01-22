import * as outputs from "../types/output";
export declare namespace extensions {
    namespace v1alpha1 {
        interface WasmPlugin {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "extensions.istio.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "WasmPlugin";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.extensions.v1alpha1.WasmPluginSpec;
            status: {
                [key: string]: any;
            };
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
            failStrategy: string;
            /**
             * The pull behaviour to be applied when fetching Wasm module by either OCI image or `http/https`.
             *
             * Valid Options: IfNotPresent, Always
             */
            imagePullPolicy: string;
            /**
             * Credentials to use for OCI image pulling.
             */
            imagePullSecret: string;
            /**
             * Specifies the criteria to determine which traffic is passed to WasmPlugin.
             */
            match: outputs.extensions.v1alpha1.WasmPluginSpecMatch[];
            /**
             * Determines where in the filter chain this `WasmPlugin` is to be injected.
             *
             * Valid Options: AUTHN, AUTHZ, STATS
             */
            phase: string;
            /**
             * The configuration that will be passed on to the plugin.
             */
            pluginConfig: {
                [key: string]: any;
            };
            /**
             * The plugin name to be used in the Envoy configuration (used to be called `rootID`).
             */
            pluginName: string;
            /**
             * Determines ordering of `WasmPlugins` in the same `phase`.
             */
            priority: number;
            selector: outputs.extensions.v1alpha1.WasmPluginSpecSelector;
            /**
             * SHA256 checksum that will be used to verify Wasm module or OCI container.
             */
            sha256: string;
            targetRef: outputs.extensions.v1alpha1.WasmPluginSpecTargetRef;
            /**
             * Optional.
             */
            targetRefs: outputs.extensions.v1alpha1.WasmPluginSpecTargetRefs[];
            /**
             * Specifies the type of Wasm Extension to be used.
             *
             * Valid Options: HTTP, NETWORK
             */
            type: string;
            /**
             * URL of a Wasm module or OCI container.
             */
            url: string;
            verificationKey: string;
            vmConfig: outputs.extensions.v1alpha1.WasmPluginSpecVmConfig;
        }
        interface WasmPluginSpecMatch {
            /**
             * Criteria for selecting traffic by their direction.
             *
             * Valid Options: CLIENT, SERVER, CLIENT_AND_SERVER
             */
            mode: string;
            /**
             * Criteria for selecting traffic by their destination port.
             */
            ports: outputs.extensions.v1alpha1.WasmPluginSpecMatchPorts[];
        }
        interface WasmPluginSpecMatchPatch {
            /**
             * Criteria for selecting traffic by their direction.
             *
             * Valid Options: CLIENT, SERVER, CLIENT_AND_SERVER
             */
            mode: string;
            /**
             * Criteria for selecting traffic by their destination port.
             */
            ports: outputs.extensions.v1alpha1.WasmPluginSpecMatchPortsPatch[];
        }
        interface WasmPluginSpecMatchPorts {
            number: number;
        }
        interface WasmPluginSpecMatchPortsPatch {
            number: number;
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
            failStrategy: string;
            /**
             * The pull behaviour to be applied when fetching Wasm module by either OCI image or `http/https`.
             *
             * Valid Options: IfNotPresent, Always
             */
            imagePullPolicy: string;
            /**
             * Credentials to use for OCI image pulling.
             */
            imagePullSecret: string;
            /**
             * Specifies the criteria to determine which traffic is passed to WasmPlugin.
             */
            match: outputs.extensions.v1alpha1.WasmPluginSpecMatchPatch[];
            /**
             * Determines where in the filter chain this `WasmPlugin` is to be injected.
             *
             * Valid Options: AUTHN, AUTHZ, STATS
             */
            phase: string;
            /**
             * The configuration that will be passed on to the plugin.
             */
            pluginConfig: {
                [key: string]: any;
            };
            /**
             * The plugin name to be used in the Envoy configuration (used to be called `rootID`).
             */
            pluginName: string;
            /**
             * Determines ordering of `WasmPlugins` in the same `phase`.
             */
            priority: number;
            selector: outputs.extensions.v1alpha1.WasmPluginSpecSelectorPatch;
            /**
             * SHA256 checksum that will be used to verify Wasm module or OCI container.
             */
            sha256: string;
            targetRef: outputs.extensions.v1alpha1.WasmPluginSpecTargetRefPatch;
            /**
             * Optional.
             */
            targetRefs: outputs.extensions.v1alpha1.WasmPluginSpecTargetRefsPatch[];
            /**
             * Specifies the type of Wasm Extension to be used.
             *
             * Valid Options: HTTP, NETWORK
             */
            type: string;
            /**
             * URL of a Wasm module or OCI container.
             */
            url: string;
            verificationKey: string;
            vmConfig: outputs.extensions.v1alpha1.WasmPluginSpecVmConfigPatch;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this plugin configuration should be applied.
         */
        interface WasmPluginSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this plugin configuration should be applied.
         */
        interface WasmPluginSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface WasmPluginSpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface WasmPluginSpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface WasmPluginSpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface WasmPluginSpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        /**
         * Configuration for a Wasm VM.
         */
        interface WasmPluginSpecVmConfig {
            /**
             * Specifies environment variables to be injected to this VM.
             */
            env: outputs.extensions.v1alpha1.WasmPluginSpecVmConfigEnv[];
        }
        interface WasmPluginSpecVmConfigEnv {
            /**
             * Name of the environment variable.
             */
            name: string;
            /**
             * Value for the environment variable.
             */
            value: string;
            /**
             * Source for the environment variable's value.
             *
             * Valid Options: INLINE, HOST
             */
            valueFrom: string;
        }
        interface WasmPluginSpecVmConfigEnvPatch {
            /**
             * Name of the environment variable.
             */
            name: string;
            /**
             * Value for the environment variable.
             */
            value: string;
            /**
             * Source for the environment variable's value.
             *
             * Valid Options: INLINE, HOST
             */
            valueFrom: string;
        }
        /**
         * Configuration for a Wasm VM.
         */
        interface WasmPluginSpecVmConfigPatch {
            /**
             * Specifies environment variables to be injected to this VM.
             */
            env: outputs.extensions.v1alpha1.WasmPluginSpecVmConfigEnvPatch[];
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
            continue: string;
            /**
             * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
             */
            remainingItemCount: number;
            /**
             * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntry {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion: string;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType: string;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager: string;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation: string;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource: string;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time: string;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntryPatch {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion: string;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType: string;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager: string;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation: string;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource: string;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time: string;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMeta {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp: string;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds: number;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp: string;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers: string[];
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName: string;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation: number;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels: {
                [key: string]: string;
            };
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields: outputs.meta.v1.ManagedFieldsEntry[];
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace: string;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences: outputs.meta.v1.OwnerReference[];
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMetaPatch {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp: string;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds: number;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp: string;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers: string[];
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName: string;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation: number;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels: {
                [key: string]: string;
            };
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields: outputs.meta.v1.ManagedFieldsEntryPatch[];
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace: string;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences: outputs.meta.v1.OwnerReferencePatch[];
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReference {
            /**
             * API version of the referent.
             */
            apiVersion: string;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion: boolean;
            /**
             * If true, this reference points to the managing controller.
             */
            controller: boolean;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReferencePatch {
            /**
             * API version of the referent.
             */
            apiVersion: string;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion: boolean;
            /**
             * If true, this reference points to the managing controller.
             */
            controller: boolean;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
    }
}
export declare namespace networking {
    namespace v1 {
        interface DestinationRule {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "DestinationRule";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1.DestinationRuleSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpec {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo: string[];
            /**
             * The name of a service from the service registry.
             */
            host: string;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets: outputs.networking.v1.DestinationRuleSpecSubsets[];
            trafficPolicy: outputs.networking.v1.DestinationRuleSpecTrafficPolicy;
            workloadSelector: outputs.networking.v1.DestinationRuleSpecWorkloadSelector;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpecPatch {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo: string[];
            /**
             * The name of a service from the service registry.
             */
            host: string;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets: outputs.networking.v1.DestinationRuleSpecSubsetsPatch[];
            trafficPolicy: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPatch;
            workloadSelector: outputs.networking.v1.DestinationRuleSpecWorkloadSelectorPatch;
        }
        interface DestinationRuleSpecSubsets {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * Name of the subset.
             */
            name: string;
            trafficPolicy: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicy;
        }
        interface DestinationRuleSpecSubsetsPatch {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * Name of the subset.
             */
            name: string;
            trafficPolicy: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPatch;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicy {
            connectionPool: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPool;
            loadBalancer: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer;
            outlierDetection: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings[];
            proxyProtocol: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol;
            tls: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyTls;
            tunnel: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyTunnel;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPool {
            http: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp;
            tcp: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch {
            http: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch;
            tcp: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer {
            consistentHash: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch {
            consistentHash: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPatch {
            connectionPool: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch;
            loadBalancer: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch;
            outlierDetection: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch[];
            proxyProtocol: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch;
            tls: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyTlsPatch;
            tunnel: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings {
            connectionPool: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool;
            loadBalancer: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer;
            outlierDetection: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection;
            port: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort;
            tls: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool {
            http: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp;
            tcp: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch;
            tcp: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch {
            connectionPool: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch;
            loadBalancer: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch;
            outlierDetection: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch;
            port: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch;
            tls: outputs.networking.v1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort {
            number: number;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch {
            number: number;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
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
            version: string;
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
            version: string;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicy {
            connectionPool: outputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPool;
            loadBalancer: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancer;
            outlierDetection: outputs.networking.v1.DestinationRuleSpecTrafficPolicyOutlierDetection;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettings[];
            proxyProtocol: outputs.networking.v1.DestinationRuleSpecTrafficPolicyProxyProtocol;
            tls: outputs.networking.v1.DestinationRuleSpecTrafficPolicyTls;
            tunnel: outputs.networking.v1.DestinationRuleSpecTrafficPolicyTunnel;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPool {
            http: outputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolHttp;
            tcp: outputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPoolPatch {
            http: outputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch;
            tcp: outputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancer {
            consistentHash: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerPatch {
            consistentHash: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicyPatch {
            connectionPool: outputs.networking.v1.DestinationRuleSpecTrafficPolicyConnectionPoolPatch;
            loadBalancer: outputs.networking.v1.DestinationRuleSpecTrafficPolicyLoadBalancerPatch;
            outlierDetection: outputs.networking.v1.DestinationRuleSpecTrafficPolicyOutlierDetectionPatch;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch[];
            proxyProtocol: outputs.networking.v1.DestinationRuleSpecTrafficPolicyProxyProtocolPatch;
            tls: outputs.networking.v1.DestinationRuleSpecTrafficPolicyTlsPatch;
            tunnel: outputs.networking.v1.DestinationRuleSpecTrafficPolicyTunnelPatch;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettings {
            connectionPool: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool;
            loadBalancer: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer;
            outlierDetection: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection;
            port: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPort;
            tls: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsTls;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool {
            http: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp;
            tcp: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch;
            tcp: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch {
            connectionPool: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch;
            loadBalancer: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch;
            outlierDetection: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch;
            port: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch;
            tls: outputs.networking.v1.DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPort {
            number: number;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch {
            number: number;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
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
            version: string;
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
            version: string;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface Gateway {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Gateway";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1.GatewaySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpec {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector: {
                [key: string]: string;
            };
            /**
             * A list of server specifications.
             */
            servers: outputs.networking.v1.GatewaySpecServers[];
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpecPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector: {
                [key: string]: string;
            };
            /**
             * A list of server specifications.
             */
            servers: outputs.networking.v1.GatewaySpecServersPatch[];
        }
        interface GatewaySpecServers {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            defaultEndpoint: string;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts: string[];
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name: string;
            port: outputs.networking.v1.GatewaySpecServersPort;
            tls: outputs.networking.v1.GatewaySpecServersTls;
        }
        interface GatewaySpecServersPatch {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            defaultEndpoint: string;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts: string[];
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name: string;
            port: outputs.networking.v1.GatewaySpecServersPortPatch;
            tls: outputs.networking.v1.GatewaySpecServersTlsPatch;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        interface ServiceEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ServiceEntry";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1.ServiceEntrySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpec {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses: string[];
            /**
             * One or more endpoints associated with the service.
             */
            endpoints: outputs.networking.v1.ServiceEntrySpecEndpoints[];
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo: string[];
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts: string[];
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location: string;
            /**
             * The ports associated with the external service.
             */
            ports: outputs.networking.v1.ServiceEntrySpecPorts[];
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution: string;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames: string[];
            workloadSelector: outputs.networking.v1.ServiceEntrySpecWorkloadSelector;
        }
        interface ServiceEntrySpecEndpoints {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        interface ServiceEntrySpecEndpointsPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpecPatch {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses: string[];
            /**
             * One or more endpoints associated with the service.
             */
            endpoints: outputs.networking.v1.ServiceEntrySpecEndpointsPatch[];
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo: string[];
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts: string[];
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location: string;
            /**
             * The ports associated with the external service.
             */
            ports: outputs.networking.v1.ServiceEntrySpecPortsPatch[];
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution: string;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames: string[];
            workloadSelector: outputs.networking.v1.ServiceEntrySpecWorkloadSelectorPatch;
        }
        interface ServiceEntrySpecPorts {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort: number;
        }
        interface ServiceEntrySpecPortsPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort: number;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        interface Sidecar {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Sidecar";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1.SidecarSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpec {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress: outputs.networking.v1.SidecarSpecEgress[];
            inboundConnectionPool: outputs.networking.v1.SidecarSpecInboundConnectionPool;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress: outputs.networking.v1.SidecarSpecIngress[];
            outboundTrafficPolicy: outputs.networking.v1.SidecarSpecOutboundTrafficPolicy;
            workloadSelector: outputs.networking.v1.SidecarSpecWorkloadSelector;
        }
        interface SidecarSpecEgress {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts: string[];
            port: outputs.networking.v1.SidecarSpecEgressPort;
        }
        interface SidecarSpecEgressPatch {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts: string[];
            port: outputs.networking.v1.SidecarSpecEgressPortPatch;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPool {
            http: outputs.networking.v1.SidecarSpecInboundConnectionPoolHttp;
            tcp: outputs.networking.v1.SidecarSpecInboundConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPoolPatch {
            http: outputs.networking.v1.SidecarSpecInboundConnectionPoolHttpPatch;
            tcp: outputs.networking.v1.SidecarSpecInboundConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.SidecarSpecInboundConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        interface SidecarSpecIngress {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind: string;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            connectionPool: outputs.networking.v1.SidecarSpecIngressConnectionPool;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint: string;
            port: outputs.networking.v1.SidecarSpecIngressPort;
            tls: outputs.networking.v1.SidecarSpecIngressTls;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPool {
            http: outputs.networking.v1.SidecarSpecIngressConnectionPoolHttp;
            tcp: outputs.networking.v1.SidecarSpecIngressConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPoolPatch {
            http: outputs.networking.v1.SidecarSpecIngressConnectionPoolHttpPatch;
            tcp: outputs.networking.v1.SidecarSpecIngressConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.SidecarSpecIngressConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1.SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        interface SidecarSpecIngressPatch {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind: string;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            connectionPool: outputs.networking.v1.SidecarSpecIngressConnectionPoolPatch;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint: string;
            port: outputs.networking.v1.SidecarSpecIngressPortPatch;
            tls: outputs.networking.v1.SidecarSpecIngressTlsPatch;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicy {
            egressProxy: outputs.networking.v1.SidecarSpecOutboundTrafficPolicyEgressProxy;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode: string;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxy {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.SidecarSpecOutboundTrafficPolicyEgressProxyPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch {
            number: number;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicyPatch {
            egressProxy: outputs.networking.v1.SidecarSpecOutboundTrafficPolicyEgressProxyPatch;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode: string;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpecPatch {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress: outputs.networking.v1.SidecarSpecEgressPatch[];
            inboundConnectionPool: outputs.networking.v1.SidecarSpecInboundConnectionPoolPatch;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress: outputs.networking.v1.SidecarSpecIngressPatch[];
            outboundTrafficPolicy: outputs.networking.v1.SidecarSpecOutboundTrafficPolicyPatch;
            workloadSelector: outputs.networking.v1.SidecarSpecWorkloadSelectorPatch;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        interface VirtualService {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "VirtualService";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1.VirtualServiceSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpec {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo: string[];
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways: string[];
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts: string[];
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http: outputs.networking.v1.VirtualServiceSpecHttp[];
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp: outputs.networking.v1.VirtualServiceSpecTcp[];
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls: outputs.networking.v1.VirtualServiceSpecTls[];
        }
        interface VirtualServiceSpecHttp {
            corsPolicy: outputs.networking.v1.VirtualServiceSpecHttpCorsPolicy;
            delegate: outputs.networking.v1.VirtualServiceSpecHttpDelegate;
            directResponse: outputs.networking.v1.VirtualServiceSpecHttpDirectResponse;
            fault: outputs.networking.v1.VirtualServiceSpecHttpFault;
            headers: outputs.networking.v1.VirtualServiceSpecHttpHeaders;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1.VirtualServiceSpecHttpMatch[];
            mirror: outputs.networking.v1.VirtualServiceSpecHttpMirror;
            mirrorPercent: number;
            mirrorPercentage: outputs.networking.v1.VirtualServiceSpecHttpMirrorPercentage;
            mirror_percent: number;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors: outputs.networking.v1.VirtualServiceSpecHttpMirrors[];
            /**
             * The name assigned to the route for debugging purposes.
             */
            name: string;
            redirect: outputs.networking.v1.VirtualServiceSpecHttpRedirect;
            retries: outputs.networking.v1.VirtualServiceSpecHttpRetries;
            rewrite: outputs.networking.v1.VirtualServiceSpecHttpRewrite;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route: outputs.networking.v1.VirtualServiceSpecHttpRoute[];
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout: string;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicy {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials: boolean;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders: string[];
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods: string[];
            allowOrigin: string[];
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins: outputs.networking.v1.VirtualServiceSpecHttpCorsPolicyAllowOrigins[];
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders: string[];
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge: string;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights: string;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOrigins {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicyPatch {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials: boolean;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders: string[];
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods: string[];
            allowOrigin: string[];
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins: outputs.networking.v1.VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch[];
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders: string[];
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge: string;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights: string;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegate {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name: string;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace: string;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegatePatch {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name: string;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponse {
            body: outputs.networking.v1.VirtualServiceSpecHttpDirectResponseBody;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status: number;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBody {
            /**
             * response body as base64 encoded bytes.
             */
            bytes: string;
            string: string;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBodyPatch {
            /**
             * response body as base64 encoded bytes.
             */
            bytes: string;
            string: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponsePatch {
            body: outputs.networking.v1.VirtualServiceSpecHttpDirectResponseBodyPatch;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status: number;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFault {
            abort: outputs.networking.v1.VirtualServiceSpecHttpFaultAbort;
            delay: outputs.networking.v1.VirtualServiceSpecHttpFaultDelay;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbort {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus: string;
            http2Error: string;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus: number;
            percentage: outputs.networking.v1.VirtualServiceSpecHttpFaultAbortPercentage;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbortPatch {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus: string;
            http2Error: string;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus: number;
            percentage: outputs.networking.v1.VirtualServiceSpecHttpFaultAbortPercentagePatch;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentage {
            value: number;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentagePatch {
            value: number;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelay {
            exponentialDelay: string;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay: string;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent: number;
            percentage: outputs.networking.v1.VirtualServiceSpecHttpFaultDelayPercentage;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelayPatch {
            exponentialDelay: string;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay: string;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent: number;
            percentage: outputs.networking.v1.VirtualServiceSpecHttpFaultDelayPercentagePatch;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentage {
            value: number;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentagePatch {
            value: number;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFaultPatch {
            abort: outputs.networking.v1.VirtualServiceSpecHttpFaultAbortPatch;
            delay: outputs.networking.v1.VirtualServiceSpecHttpFaultDelayPatch;
        }
        interface VirtualServiceSpecHttpHeaders {
            request: outputs.networking.v1.VirtualServiceSpecHttpHeadersRequest;
            response: outputs.networking.v1.VirtualServiceSpecHttpHeadersResponse;
        }
        interface VirtualServiceSpecHttpHeadersPatch {
            request: outputs.networking.v1.VirtualServiceSpecHttpHeadersRequestPatch;
            response: outputs.networking.v1.VirtualServiceSpecHttpHeadersResponsePatch;
        }
        interface VirtualServiceSpecHttpHeadersRequest {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersRequestPatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersResponse {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersResponsePatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpMatch {
            authority: outputs.networking.v1.VirtualServiceSpecHttpMatchAuthority;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase: boolean;
            method: outputs.networking.v1.VirtualServiceSpecHttpMatchMethod;
            /**
             * The name assigned to a match.
             */
            name: string;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port: number;
            /**
             * Query parameters for matching.
             */
            queryParams: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            scheme: outputs.networking.v1.VirtualServiceSpecHttpMatchScheme;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix: string;
            uri: outputs.networking.v1.VirtualServiceSpecHttpMatchUri;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthority {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthorityPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethod {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethodPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        interface VirtualServiceSpecHttpMatchPatch {
            authority: outputs.networking.v1.VirtualServiceSpecHttpMatchAuthorityPatch;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase: boolean;
            method: outputs.networking.v1.VirtualServiceSpecHttpMatchMethodPatch;
            /**
             * The name assigned to a match.
             */
            name: string;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port: number;
            /**
             * Query parameters for matching.
             */
            queryParams: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            scheme: outputs.networking.v1.VirtualServiceSpecHttpMatchSchemePatch;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix: string;
            uri: outputs.networking.v1.VirtualServiceSpecHttpMatchUriPatch;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchScheme {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchSchemePatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUri {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUriPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirror {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecHttpMirrorPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirrorPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecHttpMirrorPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentage {
            value: number;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentagePatch {
            value: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpMirrors {
            destination: outputs.networking.v1.VirtualServiceSpecHttpMirrorsDestination;
            percentage: outputs.networking.v1.VirtualServiceSpecHttpMirrorsPercentage;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecHttpMirrorsDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecHttpMirrorsDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpMirrorsPatch {
            destination: outputs.networking.v1.VirtualServiceSpecHttpMirrorsDestinationPatch;
            percentage: outputs.networking.v1.VirtualServiceSpecHttpMirrorsPercentagePatch;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentage {
            value: number;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentagePatch {
            value: number;
        }
        interface VirtualServiceSpecHttpPatch {
            corsPolicy: outputs.networking.v1.VirtualServiceSpecHttpCorsPolicyPatch;
            delegate: outputs.networking.v1.VirtualServiceSpecHttpDelegatePatch;
            directResponse: outputs.networking.v1.VirtualServiceSpecHttpDirectResponsePatch;
            fault: outputs.networking.v1.VirtualServiceSpecHttpFaultPatch;
            headers: outputs.networking.v1.VirtualServiceSpecHttpHeadersPatch;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1.VirtualServiceSpecHttpMatchPatch[];
            mirror: outputs.networking.v1.VirtualServiceSpecHttpMirrorPatch;
            mirrorPercent: number;
            mirrorPercentage: outputs.networking.v1.VirtualServiceSpecHttpMirrorPercentagePatch;
            mirror_percent: number;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors: outputs.networking.v1.VirtualServiceSpecHttpMirrorsPatch[];
            /**
             * The name assigned to the route for debugging purposes.
             */
            name: string;
            redirect: outputs.networking.v1.VirtualServiceSpecHttpRedirectPatch;
            retries: outputs.networking.v1.VirtualServiceSpecHttpRetriesPatch;
            rewrite: outputs.networking.v1.VirtualServiceSpecHttpRewritePatch;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route: outputs.networking.v1.VirtualServiceSpecHttpRoutePatch[];
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirect {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority: string;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort: string;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port: number;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode: number;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme: string;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirectPatch {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority: string;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort: string;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port: number;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode: number;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme: string;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri: string;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetries {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts: number;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout: string;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn: string;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities: boolean;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetriesPatch {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts: number;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout: string;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn: string;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities: boolean;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewrite {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority: string;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri: string;
            uriRegexRewrite: outputs.networking.v1.VirtualServiceSpecHttpRewriteUriRegexRewrite;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewritePatch {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority: string;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri: string;
            uriRegexRewrite: outputs.networking.v1.VirtualServiceSpecHttpRewriteUriRegexRewritePatch;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewrite {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match: string;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite: string;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewritePatch {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match: string;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite: string;
        }
        interface VirtualServiceSpecHttpRoute {
            destination: outputs.networking.v1.VirtualServiceSpecHttpRouteDestination;
            headers: outputs.networking.v1.VirtualServiceSpecHttpRouteHeaders;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecHttpRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecHttpRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpRouteHeaders {
            request: outputs.networking.v1.VirtualServiceSpecHttpRouteHeadersRequest;
            response: outputs.networking.v1.VirtualServiceSpecHttpRouteHeadersResponse;
        }
        interface VirtualServiceSpecHttpRouteHeadersPatch {
            request: outputs.networking.v1.VirtualServiceSpecHttpRouteHeadersRequestPatch;
            response: outputs.networking.v1.VirtualServiceSpecHttpRouteHeadersResponsePatch;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequest {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersRequestPatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersResponse {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersResponsePatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRoutePatch {
            destination: outputs.networking.v1.VirtualServiceSpecHttpRouteDestinationPatch;
            headers: outputs.networking.v1.VirtualServiceSpecHttpRouteHeadersPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpecPatch {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo: string[];
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways: string[];
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts: string[];
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http: outputs.networking.v1.VirtualServiceSpecHttpPatch[];
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp: outputs.networking.v1.VirtualServiceSpecTcpPatch[];
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls: outputs.networking.v1.VirtualServiceSpecTlsPatch[];
        }
        interface VirtualServiceSpecTcp {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1.VirtualServiceSpecTcpMatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1.VirtualServiceSpecTcpRoute[];
        }
        interface VirtualServiceSpecTcpMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            sourceSubnet: string;
        }
        interface VirtualServiceSpecTcpMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            sourceSubnet: string;
        }
        interface VirtualServiceSpecTcpPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1.VirtualServiceSpecTcpMatchPatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1.VirtualServiceSpecTcpRoutePatch[];
        }
        interface VirtualServiceSpecTcpRoute {
            destination: outputs.networking.v1.VirtualServiceSpecTcpRouteDestination;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecTcpRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecTcpRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecTcpRoutePatch {
            destination: outputs.networking.v1.VirtualServiceSpecTcpRouteDestinationPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        interface VirtualServiceSpecTls {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1.VirtualServiceSpecTlsMatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1.VirtualServiceSpecTlsRoute[];
        }
        interface VirtualServiceSpecTlsMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts: string[];
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
        }
        interface VirtualServiceSpecTlsMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts: string[];
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
        }
        interface VirtualServiceSpecTlsPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1.VirtualServiceSpecTlsMatchPatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1.VirtualServiceSpecTlsRoutePatch[];
        }
        interface VirtualServiceSpecTlsRoute {
            destination: outputs.networking.v1.VirtualServiceSpecTlsRouteDestination;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecTlsRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1.VirtualServiceSpecTlsRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecTlsRoutePatch {
            destination: outputs.networking.v1.VirtualServiceSpecTlsRouteDestinationPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        interface WorkloadEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "WorkloadEntry";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1.WorkloadEntrySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpec {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpecPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        interface WorkloadGroup {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "WorkloadGroup";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1.WorkloadGroupSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpec {
            metadata: outputs.networking.v1.WorkloadGroupSpecMetadata;
            probe: outputs.networking.v1.WorkloadGroupSpecProbe;
            template: outputs.networking.v1.WorkloadGroupSpecTemplate;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadata {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpecPatch {
            metadata: outputs.networking.v1.WorkloadGroupSpecMetadataPatch;
            probe: outputs.networking.v1.WorkloadGroupSpecProbePatch;
            template: outputs.networking.v1.WorkloadGroupSpecTemplatePatch;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbe {
            exec: outputs.networking.v1.WorkloadGroupSpecProbeExec;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold: number;
            grpc: outputs.networking.v1.WorkloadGroupSpecProbeGrpc;
            httpGet: outputs.networking.v1.WorkloadGroupSpecProbeHttpGet;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold: number;
            tcpSocket: outputs.networking.v1.WorkloadGroupSpecProbeTcpSocket;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds: number;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExec {
            /**
             * Command to run.
             */
            command: string[];
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExecPatch {
            /**
             * Command to run.
             */
            command: string[];
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpc {
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            service: string;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpcPatch {
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            service: string;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host: string;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders: outputs.networking.v1.WorkloadGroupSpecProbeHttpGetHttpHeaders[];
            /**
             * Path to access on the HTTP server.
             */
            path: string;
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            scheme: string;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host: string;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders: outputs.networking.v1.WorkloadGroupSpecProbeHttpGetHttpHeadersPatch[];
            /**
             * Path to access on the HTTP server.
             */
            path: string;
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            scheme: string;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbePatch {
            exec: outputs.networking.v1.WorkloadGroupSpecProbeExecPatch;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold: number;
            grpc: outputs.networking.v1.WorkloadGroupSpecProbeGrpcPatch;
            httpGet: outputs.networking.v1.WorkloadGroupSpecProbeHttpGetPatch;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold: number;
            tcpSocket: outputs.networking.v1.WorkloadGroupSpecProbeTcpSocketPatch;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds: number;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocket {
            host: string;
            port: number;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocketPatch {
            host: string;
            port: number;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplate {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplatePatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
    }
    namespace v1alpha3 {
        interface DestinationRule {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1alpha3";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "DestinationRule";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1alpha3.DestinationRuleSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpec {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo: string[];
            /**
             * The name of a service from the service registry.
             */
            host: string;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets: outputs.networking.v1alpha3.DestinationRuleSpecSubsets[];
            trafficPolicy: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicy;
            workloadSelector: outputs.networking.v1alpha3.DestinationRuleSpecWorkloadSelector;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpecPatch {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo: string[];
            /**
             * The name of a service from the service registry.
             */
            host: string;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsPatch[];
            trafficPolicy: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPatch;
            workloadSelector: outputs.networking.v1alpha3.DestinationRuleSpecWorkloadSelectorPatch;
        }
        interface DestinationRuleSpecSubsets {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * Name of the subset.
             */
            name: string;
            trafficPolicy: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicy;
        }
        interface DestinationRuleSpecSubsetsPatch {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * Name of the subset.
             */
            name: string;
            trafficPolicy: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPatch;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicy {
            connectionPool: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPool;
            loadBalancer: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer;
            outlierDetection: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings[];
            proxyProtocol: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol;
            tls: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyTls;
            tunnel: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyTunnel;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPool {
            http: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp;
            tcp: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch {
            http: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch;
            tcp: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer {
            consistentHash: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch {
            consistentHash: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPatch {
            connectionPool: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch;
            loadBalancer: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch;
            outlierDetection: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch[];
            proxyProtocol: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch;
            tls: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyTlsPatch;
            tunnel: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings {
            connectionPool: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool;
            loadBalancer: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer;
            outlierDetection: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection;
            port: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort;
            tls: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool {
            http: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp;
            tcp: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch;
            tcp: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch {
            connectionPool: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch;
            loadBalancer: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch;
            outlierDetection: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch;
            port: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch;
            tls: outputs.networking.v1alpha3.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort {
            number: number;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch {
            number: number;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
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
            version: string;
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
            version: string;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicy {
            connectionPool: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPool;
            loadBalancer: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancer;
            outlierDetection: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyOutlierDetection;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettings[];
            proxyProtocol: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyProxyProtocol;
            tls: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyTls;
            tunnel: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyTunnel;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPool {
            http: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolHttp;
            tcp: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPoolPatch {
            http: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch;
            tcp: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancer {
            consistentHash: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerPatch {
            consistentHash: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicyPatch {
            connectionPool: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyConnectionPoolPatch;
            loadBalancer: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyLoadBalancerPatch;
            outlierDetection: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyOutlierDetectionPatch;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch[];
            proxyProtocol: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyProxyProtocolPatch;
            tls: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyTlsPatch;
            tunnel: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyTunnelPatch;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettings {
            connectionPool: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool;
            loadBalancer: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer;
            outlierDetection: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection;
            port: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsPort;
            tls: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsTls;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool {
            http: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp;
            tcp: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch;
            tcp: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch {
            connectionPool: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch;
            loadBalancer: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch;
            outlierDetection: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch;
            port: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch;
            tls: outputs.networking.v1alpha3.DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPort {
            number: number;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch {
            number: number;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
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
            version: string;
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
            version: string;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface EnvoyFilter {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1alpha3";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "EnvoyFilter";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1alpha3.EnvoyFilterSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Customizing Envoy configuration generated by Istio. See more details at: https://istio.io/docs/reference/config/networking/envoy-filter.html
         */
        interface EnvoyFilterSpec {
            /**
             * One or more patches with match conditions.
             */
            configPatches: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatches[];
            /**
             * Priority defines the order in which patch sets are applied within a context.
             */
            priority: number;
            /**
             * Optional.
             */
            targetRefs: outputs.networking.v1alpha3.EnvoyFilterSpecTargetRefs[];
            workloadSelector: outputs.networking.v1alpha3.EnvoyFilterSpecWorkloadSelector;
        }
        interface EnvoyFilterSpecConfigPatches {
            /**
             * Specifies where in the Envoy configuration, the patch should be applied.
             *
             * Valid Options: LISTENER, FILTER_CHAIN, NETWORK_FILTER, HTTP_FILTER, ROUTE_CONFIGURATION, VIRTUAL_HOST, HTTP_ROUTE, CLUSTER, EXTENSION_CONFIG, BOOTSTRAP, LISTENER_FILTER
             */
            applyTo: string;
            match: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatch;
            patch: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesPatch;
        }
        /**
         * Match on listener/route configuration/cluster.
         */
        interface EnvoyFilterSpecConfigPatchesMatch {
            cluster: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchCluster;
            /**
             * The specific config generation context to match on.
             *
             * Valid Options: ANY, SIDECAR_INBOUND, SIDECAR_OUTBOUND, GATEWAY
             */
            context: string;
            listener: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchListener;
            proxy: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchProxy;
            routeConfiguration: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchRouteConfiguration;
        }
        /**
         * Match on envoy cluster attributes.
         */
        interface EnvoyFilterSpecConfigPatchesMatchCluster {
            /**
             * The exact name of the cluster to match.
             */
            name: string;
            /**
             * The service port for which this cluster was generated.
             */
            portNumber: number;
            /**
             * The fully qualified service name for this cluster.
             */
            service: string;
            /**
             * The subset associated with the service.
             */
            subset: string;
        }
        /**
         * Match on envoy listener attributes.
         */
        interface EnvoyFilterSpecConfigPatchesMatchListener {
            filterChain: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchListenerFilterChain;
            /**
             * Match a specific listener filter.
             */
            listenerFilter: string;
            /**
             * Match a specific listener by its name.
             */
            name: string;
            portName: string;
            /**
             * The service port/gateway port to which traffic is being sent/received.
             */
            portNumber: number;
        }
        /**
         * Match a specific filter chain in a listener.
         */
        interface EnvoyFilterSpecConfigPatchesMatchListenerFilterChain {
            /**
             * Applies only to sidecars.
             */
            applicationProtocols: string;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            destinationPort: number;
            filter: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchListenerFilterChainFilter;
            /**
             * The name assigned to the filter chain.
             */
            name: string;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            sni: string;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            transportProtocol: string;
        }
        /**
         * The name of a specific filter to apply the patch to.
         */
        interface EnvoyFilterSpecConfigPatchesMatchListenerFilterChainFilter {
            /**
             * The filter name to match on.
             */
            name: string;
            subFilter: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchListenerFilterChainFilterSubFilter;
        }
        /**
         * The next level filter within this filter to match upon.
         */
        interface EnvoyFilterSpecConfigPatchesMatchListenerFilterChainFilterSubFilter {
            /**
             * The filter name to match on.
             */
            name: string;
        }
        /**
         * Match on properties associated with a proxy.
         */
        interface EnvoyFilterSpecConfigPatchesMatchProxy {
            /**
             * Match on the node metadata supplied by a proxy when connecting to istiod.
             */
            metadata: {
                [key: string]: string;
            };
            /**
             * A regular expression in golang regex format (RE2) that can be used to select proxies using a specific version of istio proxy.
             */
            proxyVersion: string;
        }
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        interface EnvoyFilterSpecConfigPatchesMatchRouteConfiguration {
            /**
             * The Istio gateway config's namespace/name for which this route configuration was generated.
             */
            gateway: string;
            /**
             * Route configuration name to match on.
             */
            name: string;
            /**
             * Applicable only for GATEWAY context.
             */
            portName: string;
            /**
             * The service port number or gateway server port number for which this route configuration was generated.
             */
            portNumber: number;
            vhost: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchRouteConfigurationVhost;
        }
        /**
         * Match a specific virtual host in a route configuration and apply the patch to the virtual host.
         */
        interface EnvoyFilterSpecConfigPatchesMatchRouteConfigurationVhost {
            /**
             * The VirtualHosts objects generated by Istio are named as host:port, where the host typically corresponds to the VirtualService's host field or the hostname of a service in the registry.
             */
            name: string;
            route: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesMatchRouteConfigurationVhostRoute;
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
            action: string;
            /**
             * The Route objects generated by default are named as default.
             */
            name: string;
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
            filterClass: string;
            /**
             * Determines how the patch should be applied.
             *
             * Valid Options: MERGE, ADD, REMOVE, INSERT_BEFORE, INSERT_AFTER, INSERT_FIRST, REPLACE
             */
            operation: string;
            /**
             * The JSON config of the object being patched.
             */
            value: {
                [key: string]: any;
            };
        }
        /**
         * Customizing Envoy configuration generated by Istio. See more details at: https://istio.io/docs/reference/config/networking/envoy-filter.html
         */
        interface EnvoyFilterSpecPatch {
            /**
             * One or more patches with match conditions.
             */
            configPatches: outputs.networking.v1alpha3.EnvoyFilterSpecConfigPatchesPatch[];
            /**
             * Priority defines the order in which patch sets are applied within a context.
             */
            priority: number;
            /**
             * Optional.
             */
            targetRefs: outputs.networking.v1alpha3.EnvoyFilterSpecTargetRefsPatch[];
            workloadSelector: outputs.networking.v1alpha3.EnvoyFilterSpecWorkloadSelectorPatch;
        }
        interface EnvoyFilterSpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface EnvoyFilterSpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this patch configuration should be applied.
         */
        interface EnvoyFilterSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this patch configuration should be applied.
         */
        interface EnvoyFilterSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        interface Gateway {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1alpha3";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Gateway";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1alpha3.GatewaySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpec {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector: {
                [key: string]: string;
            };
            /**
             * A list of server specifications.
             */
            servers: outputs.networking.v1alpha3.GatewaySpecServers[];
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpecPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector: {
                [key: string]: string;
            };
            /**
             * A list of server specifications.
             */
            servers: outputs.networking.v1alpha3.GatewaySpecServersPatch[];
        }
        interface GatewaySpecServers {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            defaultEndpoint: string;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts: string[];
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name: string;
            port: outputs.networking.v1alpha3.GatewaySpecServersPort;
            tls: outputs.networking.v1alpha3.GatewaySpecServersTls;
        }
        interface GatewaySpecServersPatch {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            defaultEndpoint: string;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts: string[];
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name: string;
            port: outputs.networking.v1alpha3.GatewaySpecServersPortPatch;
            tls: outputs.networking.v1alpha3.GatewaySpecServersTlsPatch;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        interface ServiceEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1alpha3";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ServiceEntry";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1alpha3.ServiceEntrySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpec {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses: string[];
            /**
             * One or more endpoints associated with the service.
             */
            endpoints: outputs.networking.v1alpha3.ServiceEntrySpecEndpoints[];
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo: string[];
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts: string[];
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location: string;
            /**
             * The ports associated with the external service.
             */
            ports: outputs.networking.v1alpha3.ServiceEntrySpecPorts[];
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution: string;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames: string[];
            workloadSelector: outputs.networking.v1alpha3.ServiceEntrySpecWorkloadSelector;
        }
        interface ServiceEntrySpecEndpoints {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        interface ServiceEntrySpecEndpointsPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpecPatch {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses: string[];
            /**
             * One or more endpoints associated with the service.
             */
            endpoints: outputs.networking.v1alpha3.ServiceEntrySpecEndpointsPatch[];
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo: string[];
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts: string[];
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location: string;
            /**
             * The ports associated with the external service.
             */
            ports: outputs.networking.v1alpha3.ServiceEntrySpecPortsPatch[];
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution: string;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames: string[];
            workloadSelector: outputs.networking.v1alpha3.ServiceEntrySpecWorkloadSelectorPatch;
        }
        interface ServiceEntrySpecPorts {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort: number;
        }
        interface ServiceEntrySpecPortsPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort: number;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        interface Sidecar {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1alpha3";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Sidecar";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1alpha3.SidecarSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpec {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress: outputs.networking.v1alpha3.SidecarSpecEgress[];
            inboundConnectionPool: outputs.networking.v1alpha3.SidecarSpecInboundConnectionPool;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress: outputs.networking.v1alpha3.SidecarSpecIngress[];
            outboundTrafficPolicy: outputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicy;
            workloadSelector: outputs.networking.v1alpha3.SidecarSpecWorkloadSelector;
        }
        interface SidecarSpecEgress {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts: string[];
            port: outputs.networking.v1alpha3.SidecarSpecEgressPort;
        }
        interface SidecarSpecEgressPatch {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts: string[];
            port: outputs.networking.v1alpha3.SidecarSpecEgressPortPatch;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPool {
            http: outputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolHttp;
            tcp: outputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPoolPatch {
            http: outputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolHttpPatch;
            tcp: outputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        interface SidecarSpecIngress {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind: string;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            connectionPool: outputs.networking.v1alpha3.SidecarSpecIngressConnectionPool;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint: string;
            port: outputs.networking.v1alpha3.SidecarSpecIngressPort;
            tls: outputs.networking.v1alpha3.SidecarSpecIngressTls;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPool {
            http: outputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolHttp;
            tcp: outputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPoolPatch {
            http: outputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolHttpPatch;
            tcp: outputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        interface SidecarSpecIngressPatch {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind: string;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            connectionPool: outputs.networking.v1alpha3.SidecarSpecIngressConnectionPoolPatch;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint: string;
            port: outputs.networking.v1alpha3.SidecarSpecIngressPortPatch;
            tls: outputs.networking.v1alpha3.SidecarSpecIngressTlsPatch;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicy {
            egressProxy: outputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyEgressProxy;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode: string;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxy {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyEgressProxyPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch {
            number: number;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicyPatch {
            egressProxy: outputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyEgressProxyPatch;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode: string;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpecPatch {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress: outputs.networking.v1alpha3.SidecarSpecEgressPatch[];
            inboundConnectionPool: outputs.networking.v1alpha3.SidecarSpecInboundConnectionPoolPatch;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress: outputs.networking.v1alpha3.SidecarSpecIngressPatch[];
            outboundTrafficPolicy: outputs.networking.v1alpha3.SidecarSpecOutboundTrafficPolicyPatch;
            workloadSelector: outputs.networking.v1alpha3.SidecarSpecWorkloadSelectorPatch;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        interface VirtualService {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1alpha3";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "VirtualService";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1alpha3.VirtualServiceSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpec {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo: string[];
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways: string[];
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts: string[];
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http: outputs.networking.v1alpha3.VirtualServiceSpecHttp[];
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp: outputs.networking.v1alpha3.VirtualServiceSpecTcp[];
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls: outputs.networking.v1alpha3.VirtualServiceSpecTls[];
        }
        interface VirtualServiceSpecHttp {
            corsPolicy: outputs.networking.v1alpha3.VirtualServiceSpecHttpCorsPolicy;
            delegate: outputs.networking.v1alpha3.VirtualServiceSpecHttpDelegate;
            directResponse: outputs.networking.v1alpha3.VirtualServiceSpecHttpDirectResponse;
            fault: outputs.networking.v1alpha3.VirtualServiceSpecHttpFault;
            headers: outputs.networking.v1alpha3.VirtualServiceSpecHttpHeaders;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatch[];
            mirror: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirror;
            mirrorPercent: number;
            mirrorPercentage: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPercentage;
            mirror_percent: number;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrors[];
            /**
             * The name assigned to the route for debugging purposes.
             */
            name: string;
            redirect: outputs.networking.v1alpha3.VirtualServiceSpecHttpRedirect;
            retries: outputs.networking.v1alpha3.VirtualServiceSpecHttpRetries;
            rewrite: outputs.networking.v1alpha3.VirtualServiceSpecHttpRewrite;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route: outputs.networking.v1alpha3.VirtualServiceSpecHttpRoute[];
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout: string;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicy {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials: boolean;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders: string[];
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods: string[];
            allowOrigin: string[];
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins: outputs.networking.v1alpha3.VirtualServiceSpecHttpCorsPolicyAllowOrigins[];
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders: string[];
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge: string;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights: string;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOrigins {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicyPatch {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials: boolean;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders: string[];
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods: string[];
            allowOrigin: string[];
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins: outputs.networking.v1alpha3.VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch[];
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders: string[];
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge: string;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights: string;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegate {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name: string;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace: string;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegatePatch {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name: string;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponse {
            body: outputs.networking.v1alpha3.VirtualServiceSpecHttpDirectResponseBody;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status: number;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBody {
            /**
             * response body as base64 encoded bytes.
             */
            bytes: string;
            string: string;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBodyPatch {
            /**
             * response body as base64 encoded bytes.
             */
            bytes: string;
            string: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponsePatch {
            body: outputs.networking.v1alpha3.VirtualServiceSpecHttpDirectResponseBodyPatch;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status: number;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFault {
            abort: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultAbort;
            delay: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultDelay;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbort {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus: string;
            http2Error: string;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus: number;
            percentage: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultAbortPercentage;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbortPatch {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus: string;
            http2Error: string;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus: number;
            percentage: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultAbortPercentagePatch;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentage {
            value: number;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentagePatch {
            value: number;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelay {
            exponentialDelay: string;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay: string;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent: number;
            percentage: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultDelayPercentage;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelayPatch {
            exponentialDelay: string;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay: string;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent: number;
            percentage: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultDelayPercentagePatch;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentage {
            value: number;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentagePatch {
            value: number;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFaultPatch {
            abort: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultAbortPatch;
            delay: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultDelayPatch;
        }
        interface VirtualServiceSpecHttpHeaders {
            request: outputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersRequest;
            response: outputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersResponse;
        }
        interface VirtualServiceSpecHttpHeadersPatch {
            request: outputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersRequestPatch;
            response: outputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersResponsePatch;
        }
        interface VirtualServiceSpecHttpHeadersRequest {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersRequestPatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersResponse {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersResponsePatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpMatch {
            authority: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchAuthority;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase: boolean;
            method: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchMethod;
            /**
             * The name assigned to a match.
             */
            name: string;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port: number;
            /**
             * Query parameters for matching.
             */
            queryParams: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            scheme: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchScheme;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix: string;
            uri: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchUri;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthority {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthorityPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethod {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethodPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        interface VirtualServiceSpecHttpMatchPatch {
            authority: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchAuthorityPatch;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase: boolean;
            method: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchMethodPatch;
            /**
             * The name assigned to a match.
             */
            name: string;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port: number;
            /**
             * Query parameters for matching.
             */
            queryParams: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            scheme: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchSchemePatch;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix: string;
            uri: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchUriPatch;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchScheme {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchSchemePatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUri {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUriPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirror {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirrorPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentage {
            value: number;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentagePatch {
            value: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpMirrors {
            destination: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsDestination;
            percentage: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsPercentage;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpMirrorsPatch {
            destination: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsDestinationPatch;
            percentage: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsPercentagePatch;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentage {
            value: number;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentagePatch {
            value: number;
        }
        interface VirtualServiceSpecHttpPatch {
            corsPolicy: outputs.networking.v1alpha3.VirtualServiceSpecHttpCorsPolicyPatch;
            delegate: outputs.networking.v1alpha3.VirtualServiceSpecHttpDelegatePatch;
            directResponse: outputs.networking.v1alpha3.VirtualServiceSpecHttpDirectResponsePatch;
            fault: outputs.networking.v1alpha3.VirtualServiceSpecHttpFaultPatch;
            headers: outputs.networking.v1alpha3.VirtualServiceSpecHttpHeadersPatch;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1alpha3.VirtualServiceSpecHttpMatchPatch[];
            mirror: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPatch;
            mirrorPercent: number;
            mirrorPercentage: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorPercentagePatch;
            mirror_percent: number;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors: outputs.networking.v1alpha3.VirtualServiceSpecHttpMirrorsPatch[];
            /**
             * The name assigned to the route for debugging purposes.
             */
            name: string;
            redirect: outputs.networking.v1alpha3.VirtualServiceSpecHttpRedirectPatch;
            retries: outputs.networking.v1alpha3.VirtualServiceSpecHttpRetriesPatch;
            rewrite: outputs.networking.v1alpha3.VirtualServiceSpecHttpRewritePatch;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route: outputs.networking.v1alpha3.VirtualServiceSpecHttpRoutePatch[];
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirect {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority: string;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort: string;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port: number;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode: number;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme: string;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirectPatch {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority: string;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort: string;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port: number;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode: number;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme: string;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri: string;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetries {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts: number;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout: string;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn: string;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities: boolean;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetriesPatch {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts: number;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout: string;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn: string;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities: boolean;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewrite {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority: string;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri: string;
            uriRegexRewrite: outputs.networking.v1alpha3.VirtualServiceSpecHttpRewriteUriRegexRewrite;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewritePatch {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority: string;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri: string;
            uriRegexRewrite: outputs.networking.v1alpha3.VirtualServiceSpecHttpRewriteUriRegexRewritePatch;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewrite {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match: string;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite: string;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewritePatch {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match: string;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite: string;
        }
        interface VirtualServiceSpecHttpRoute {
            destination: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteDestination;
            headers: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeaders;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpRouteHeaders {
            request: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersRequest;
            response: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersResponse;
        }
        interface VirtualServiceSpecHttpRouteHeadersPatch {
            request: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersRequestPatch;
            response: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersResponsePatch;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequest {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersRequestPatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersResponse {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersResponsePatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRoutePatch {
            destination: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteDestinationPatch;
            headers: outputs.networking.v1alpha3.VirtualServiceSpecHttpRouteHeadersPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpecPatch {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo: string[];
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways: string[];
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts: string[];
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http: outputs.networking.v1alpha3.VirtualServiceSpecHttpPatch[];
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp: outputs.networking.v1alpha3.VirtualServiceSpecTcpPatch[];
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls: outputs.networking.v1alpha3.VirtualServiceSpecTlsPatch[];
        }
        interface VirtualServiceSpecTcp {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1alpha3.VirtualServiceSpecTcpMatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1alpha3.VirtualServiceSpecTcpRoute[];
        }
        interface VirtualServiceSpecTcpMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            sourceSubnet: string;
        }
        interface VirtualServiceSpecTcpMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            sourceSubnet: string;
        }
        interface VirtualServiceSpecTcpPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1alpha3.VirtualServiceSpecTcpMatchPatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1alpha3.VirtualServiceSpecTcpRoutePatch[];
        }
        interface VirtualServiceSpecTcpRoute {
            destination: outputs.networking.v1alpha3.VirtualServiceSpecTcpRouteDestination;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecTcpRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecTcpRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecTcpRoutePatch {
            destination: outputs.networking.v1alpha3.VirtualServiceSpecTcpRouteDestinationPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        interface VirtualServiceSpecTls {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1alpha3.VirtualServiceSpecTlsMatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1alpha3.VirtualServiceSpecTlsRoute[];
        }
        interface VirtualServiceSpecTlsMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts: string[];
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
        }
        interface VirtualServiceSpecTlsMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts: string[];
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
        }
        interface VirtualServiceSpecTlsPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1alpha3.VirtualServiceSpecTlsMatchPatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1alpha3.VirtualServiceSpecTlsRoutePatch[];
        }
        interface VirtualServiceSpecTlsRoute {
            destination: outputs.networking.v1alpha3.VirtualServiceSpecTlsRouteDestination;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecTlsRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1alpha3.VirtualServiceSpecTlsRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecTlsRoutePatch {
            destination: outputs.networking.v1alpha3.VirtualServiceSpecTlsRouteDestinationPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        interface WorkloadEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1alpha3";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "WorkloadEntry";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1alpha3.WorkloadEntrySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpec {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpecPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        interface WorkloadGroup {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1alpha3";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "WorkloadGroup";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1alpha3.WorkloadGroupSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpec {
            metadata: outputs.networking.v1alpha3.WorkloadGroupSpecMetadata;
            probe: outputs.networking.v1alpha3.WorkloadGroupSpecProbe;
            template: outputs.networking.v1alpha3.WorkloadGroupSpecTemplate;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadata {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpecPatch {
            metadata: outputs.networking.v1alpha3.WorkloadGroupSpecMetadataPatch;
            probe: outputs.networking.v1alpha3.WorkloadGroupSpecProbePatch;
            template: outputs.networking.v1alpha3.WorkloadGroupSpecTemplatePatch;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbe {
            exec: outputs.networking.v1alpha3.WorkloadGroupSpecProbeExec;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold: number;
            grpc: outputs.networking.v1alpha3.WorkloadGroupSpecProbeGrpc;
            httpGet: outputs.networking.v1alpha3.WorkloadGroupSpecProbeHttpGet;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold: number;
            tcpSocket: outputs.networking.v1alpha3.WorkloadGroupSpecProbeTcpSocket;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds: number;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExec {
            /**
             * Command to run.
             */
            command: string[];
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExecPatch {
            /**
             * Command to run.
             */
            command: string[];
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpc {
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            service: string;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpcPatch {
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            service: string;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host: string;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders: outputs.networking.v1alpha3.WorkloadGroupSpecProbeHttpGetHttpHeaders[];
            /**
             * Path to access on the HTTP server.
             */
            path: string;
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            scheme: string;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host: string;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders: outputs.networking.v1alpha3.WorkloadGroupSpecProbeHttpGetHttpHeadersPatch[];
            /**
             * Path to access on the HTTP server.
             */
            path: string;
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            scheme: string;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbePatch {
            exec: outputs.networking.v1alpha3.WorkloadGroupSpecProbeExecPatch;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold: number;
            grpc: outputs.networking.v1alpha3.WorkloadGroupSpecProbeGrpcPatch;
            httpGet: outputs.networking.v1alpha3.WorkloadGroupSpecProbeHttpGetPatch;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold: number;
            tcpSocket: outputs.networking.v1alpha3.WorkloadGroupSpecProbeTcpSocketPatch;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds: number;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocket {
            host: string;
            port: number;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocketPatch {
            host: string;
            port: number;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplate {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplatePatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
    }
    namespace v1beta1 {
        interface DestinationRule {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "DestinationRule";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1beta1.DestinationRuleSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpec {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo: string[];
            /**
             * The name of a service from the service registry.
             */
            host: string;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets: outputs.networking.v1beta1.DestinationRuleSpecSubsets[];
            trafficPolicy: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicy;
            workloadSelector: outputs.networking.v1beta1.DestinationRuleSpecWorkloadSelector;
        }
        /**
         * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
         */
        interface DestinationRuleSpecPatch {
            /**
             * A list of namespaces to which this destination rule is exported.
             */
            exportTo: string[];
            /**
             * The name of a service from the service registry.
             */
            host: string;
            /**
             * One or more named sets that represent individual versions of a service.
             */
            subsets: outputs.networking.v1beta1.DestinationRuleSpecSubsetsPatch[];
            trafficPolicy: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPatch;
            workloadSelector: outputs.networking.v1beta1.DestinationRuleSpecWorkloadSelectorPatch;
        }
        interface DestinationRuleSpecSubsets {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * Name of the subset.
             */
            name: string;
            trafficPolicy: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicy;
        }
        interface DestinationRuleSpecSubsetsPatch {
            /**
             * Labels apply a filter over the endpoints of a service in the service registry.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * Name of the subset.
             */
            name: string;
            trafficPolicy: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPatch;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicy {
            connectionPool: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPool;
            loadBalancer: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer;
            outlierDetection: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings[];
            proxyProtocol: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocol;
            tls: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyTls;
            tunnel: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyTunnel;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPool {
            http: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttp;
            tcp: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch {
            http: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolHttpPatch;
            tcp: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancer {
            consistentHash: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch {
            consistentHash: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        /**
         * Traffic policies that apply to this subset.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPatch {
            connectionPool: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyConnectionPoolPatch;
            loadBalancer: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyLoadBalancerPatch;
            outlierDetection: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyOutlierDetectionPatch;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch[];
            proxyProtocol: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyProxyProtocolPatch;
            tls: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyTlsPatch;
            tunnel: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettings {
            connectionPool: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool;
            loadBalancer: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer;
            outlierDetection: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection;
            port: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort;
            tls: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool {
            http: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp;
            tcp: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch;
            tcp: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPatch {
            connectionPool: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolPatch;
            loadBalancer: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerPatch;
            outlierDetection: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionPatch;
            port: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch;
            tls: outputs.networking.v1beta1.DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPort {
            number: number;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsPortPatch {
            number: number;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
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
            version: string;
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
            version: string;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecSubsetsTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicy {
            connectionPool: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPool;
            loadBalancer: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancer;
            outlierDetection: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyOutlierDetection;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettings[];
            proxyProtocol: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyProxyProtocol;
            tls: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyTls;
            tunnel: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyTunnel;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPool {
            http: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolHttp;
            tcp: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyConnectionPoolPatch {
            http: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolHttpPatch;
            tcp: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancer {
            consistentHash: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerPatch {
            consistentHash: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        /**
         * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
         */
        interface DestinationRuleSpecTrafficPolicyPatch {
            connectionPool: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyConnectionPoolPatch;
            loadBalancer: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyLoadBalancerPatch;
            outlierDetection: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyOutlierDetectionPatch;
            /**
             * Traffic policies specific to individual ports.
             */
            portLevelSettings: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch[];
            proxyProtocol: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyProxyProtocolPatch;
            tls: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyTlsPatch;
            tunnel: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyTunnelPatch;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettings {
            connectionPool: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool;
            loadBalancer: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer;
            outlierDetection: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection;
            port: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPort;
            tls: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsTls;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPool {
            http: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp;
            tcp: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch {
            http: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpPatch;
            tcp: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancer {
            consistentHash: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash;
            localityLbSetting: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
            httpCookie: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * Hash based on HTTP cookie.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch {
            /**
             * Name of the cookie.
             */
            name: string;
            /**
             * Path to set for the cookie.
             */
            path: string;
            /**
             * Lifetime of the cookie.
             */
            ttl: string;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        /**
         * The Maglev load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch {
            /**
             * The table size for Maglev hashing.
             */
            tableSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch {
            httpCookie: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookiePatch;
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName: string;
            maglev: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevPatch;
            /**
             * Deprecated.
             */
            minimumRingSize: number;
            ringHash: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch;
            /**
             * Hash based on the source IP address.
             */
            useSourceIp: boolean;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        /**
         * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashPatch {
            /**
             * The minimum number of virtual nodes to use for the hash ring.
             */
            minimumRingSize: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch {
            /**
             * Originating locality, '/' separated, e.g.
             */
            from: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to: {
                [key: string]: number;
            };
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch {
            /**
             * Originating region.
             */
            from: string;
            /**
             * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
             */
            to: string;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributePatch[];
            /**
             * Enable locality load balancing.
             */
            enabled: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverPatch[];
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority: string[];
        }
        /**
         * Settings controlling the load balancer algorithms.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch {
            consistentHash: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashPatch;
            localityLbSetting: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingPatch;
            /**
             *
             *
             * Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
             */
            simple: string;
            warmup: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch;
            /**
             * Deprecated: use `warmup` instead.
             */
            warmupDurationSecs: string;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmup {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        /**
         * Represents the warmup configuration of Service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerWarmupPatch {
            /**
             * This parameter controls the speed of traffic increase over the warmup duration.
             */
            aggression: number;
            duration: string;
            minimumPercent: number;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetection {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors: number;
            consecutiveErrors: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors: number;
            /**
             * The number of consecutive locally originated failures before ejection occurs.
             */
            consecutiveLocalOriginFailures: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval: string;
            /**
             * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
             */
            maxEjectionPercent: number;
            /**
             * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
             */
            minHealthPercent: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors: boolean;
        }
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPatch {
            connectionPool: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsConnectionPoolPatch;
            loadBalancer: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsLoadBalancerPatch;
            outlierDetection: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsOutlierDetectionPatch;
            port: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch;
            tls: outputs.networking.v1beta1.DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPort {
            number: number;
        }
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsPortPatch {
            number: number;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyPortLevelSettingsTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
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
            version: string;
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
            version: string;
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTls {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * TLS related settings for connections to the upstream service.
         */
        interface DestinationRuleSpecTrafficPolicyTlsPatch {
            /**
             * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
             */
            caCrl: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate: string;
            /**
             * The name of the secret that holds the TLS certs for the client including the CA certificates.
             */
            credentialName: string;
            /**
             * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
             */
            insecureSkipVerify: boolean;
            /**
             * Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate.
             */
            subjectAltNames: string[];
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnel {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
         */
        interface DestinationRuleSpecTrafficPolicyTunnelPatch {
            /**
             * Specifies which protocol to use for tunneling the downstream connection.
             */
            protocol: string;
            /**
             * Specifies a host to which the downstream connection is tunneled.
             */
            targetHost: string;
            /**
             * Specifies a port to which the downstream connection is tunneled.
             */
            targetPort: number;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
         */
        interface DestinationRuleSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface Gateway {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Gateway";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1beta1.GatewaySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpec {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector: {
                [key: string]: string;
            };
            /**
             * A list of server specifications.
             */
            servers: outputs.networking.v1beta1.GatewaySpecServers[];
        }
        /**
         * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
         */
        interface GatewaySpecPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
             */
            selector: {
                [key: string]: string;
            };
            /**
             * A list of server specifications.
             */
            servers: outputs.networking.v1beta1.GatewaySpecServersPatch[];
        }
        interface GatewaySpecServers {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            defaultEndpoint: string;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts: string[];
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name: string;
            port: outputs.networking.v1beta1.GatewaySpecServersPort;
            tls: outputs.networking.v1beta1.GatewaySpecServersTls;
        }
        interface GatewaySpecServersPatch {
            /**
             * The ip or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            defaultEndpoint: string;
            /**
             * One or more hosts exposed by this gateway.
             */
            hosts: string[];
            /**
             * An optional name of the server, when set must be unique across all servers.
             */
            name: string;
            port: outputs.networking.v1beta1.GatewaySpecServersPortPatch;
            tls: outputs.networking.v1beta1.GatewaySpecServersTlsPatch;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The Port on which the proxy should listen for incoming connections.
         */
        interface GatewaySpecServersPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set of TLS related options that govern the server's behavior.
         */
        interface GatewaySpecServersTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        interface ProxyConfig {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ProxyConfig";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1beta1.ProxyConfigSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Provides configuration for individual workloads. See more details at: https://istio.io/docs/reference/config/networking/proxy-config.html
         */
        interface ProxyConfigSpec {
            /**
             * The number of worker threads to run.
             */
            concurrency: number;
            /**
             * Additional environment variables for the proxy.
             */
            environmentVariables: {
                [key: string]: string;
            };
            image: outputs.networking.v1beta1.ProxyConfigSpecImage;
            selector: outputs.networking.v1beta1.ProxyConfigSpecSelector;
        }
        /**
         * Specifies the details of the proxy image.
         */
        interface ProxyConfigSpecImage {
            /**
             * The image type of the image.
             */
            imageType: string;
        }
        /**
         * Specifies the details of the proxy image.
         */
        interface ProxyConfigSpecImagePatch {
            /**
             * The image type of the image.
             */
            imageType: string;
        }
        /**
         * Provides configuration for individual workloads. See more details at: https://istio.io/docs/reference/config/networking/proxy-config.html
         */
        interface ProxyConfigSpecPatch {
            /**
             * The number of worker threads to run.
             */
            concurrency: number;
            /**
             * Additional environment variables for the proxy.
             */
            environmentVariables: {
                [key: string]: string;
            };
            image: outputs.networking.v1beta1.ProxyConfigSpecImagePatch;
            selector: outputs.networking.v1beta1.ProxyConfigSpecSelectorPatch;
        }
        /**
         * Optional.
         */
        interface ProxyConfigSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Optional.
         */
        interface ProxyConfigSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface ServiceEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ServiceEntry";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1beta1.ServiceEntrySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpec {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses: string[];
            /**
             * One or more endpoints associated with the service.
             */
            endpoints: outputs.networking.v1beta1.ServiceEntrySpecEndpoints[];
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo: string[];
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts: string[];
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location: string;
            /**
             * The ports associated with the external service.
             */
            ports: outputs.networking.v1beta1.ServiceEntrySpecPorts[];
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution: string;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames: string[];
            workloadSelector: outputs.networking.v1beta1.ServiceEntrySpecWorkloadSelector;
        }
        interface ServiceEntrySpecEndpoints {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        interface ServiceEntrySpecEndpointsPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
         */
        interface ServiceEntrySpecPatch {
            /**
             * The virtual IP addresses associated with the service.
             */
            addresses: string[];
            /**
             * One or more endpoints associated with the service.
             */
            endpoints: outputs.networking.v1beta1.ServiceEntrySpecEndpointsPatch[];
            /**
             * A list of namespaces to which this service is exported.
             */
            exportTo: string[];
            /**
             * The hosts associated with the ServiceEntry.
             */
            hosts: string[];
            /**
             * Specify whether the service should be considered external to the mesh or part of the mesh.
             *
             * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
             */
            location: string;
            /**
             * The ports associated with the external service.
             */
            ports: outputs.networking.v1beta1.ServiceEntrySpecPortsPatch[];
            /**
             * Service resolution mode for the hosts.
             *
             * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN
             */
            resolution: string;
            /**
             * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
             */
            subjectAltNames: string[];
            workloadSelector: outputs.networking.v1beta1.ServiceEntrySpecWorkloadSelectorPatch;
        }
        interface ServiceEntrySpecPorts {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort: number;
        }
        interface ServiceEntrySpecPortsPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            /**
             * The port number on the endpoint where the traffic will be received.
             */
            targetPort: number;
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Applicable only for MESH_INTERNAL services.
         */
        interface ServiceEntrySpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        interface Sidecar {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Sidecar";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1beta1.SidecarSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpec {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress: outputs.networking.v1beta1.SidecarSpecEgress[];
            inboundConnectionPool: outputs.networking.v1beta1.SidecarSpecInboundConnectionPool;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress: outputs.networking.v1beta1.SidecarSpecIngress[];
            outboundTrafficPolicy: outputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicy;
            workloadSelector: outputs.networking.v1beta1.SidecarSpecWorkloadSelector;
        }
        interface SidecarSpecEgress {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts: string[];
            port: outputs.networking.v1beta1.SidecarSpecEgressPort;
        }
        interface SidecarSpecEgressPatch {
            /**
             * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
             */
            bind: string;
            /**
             * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            /**
             * One or more service hosts exposed by the listener in `namespace/dnsName` format.
             */
            hosts: string[];
            port: outputs.networking.v1beta1.SidecarSpecEgressPortPatch;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecEgressPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPool {
            http: outputs.networking.v1beta1.SidecarSpecInboundConnectionPoolHttp;
            tcp: outputs.networking.v1beta1.SidecarSpecInboundConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecInboundConnectionPoolPatch {
            http: outputs.networking.v1beta1.SidecarSpecInboundConnectionPoolHttpPatch;
            tcp: outputs.networking.v1beta1.SidecarSpecInboundConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.SidecarSpecInboundConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecInboundConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecInboundConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        interface SidecarSpecIngress {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind: string;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            connectionPool: outputs.networking.v1beta1.SidecarSpecIngressConnectionPool;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint: string;
            port: outputs.networking.v1beta1.SidecarSpecIngressPort;
            tls: outputs.networking.v1beta1.SidecarSpecIngressTls;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPool {
            http: outputs.networking.v1beta1.SidecarSpecIngressConnectionPoolHttp;
            tcp: outputs.networking.v1beta1.SidecarSpecIngressConnectionPoolTcp;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
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
            h2UpgradePolicy: string;
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol: boolean;
        }
        /**
         * Settings controlling the volume of connections Envoy will accept from the network.
         */
        interface SidecarSpecIngressConnectionPoolPatch {
            http: outputs.networking.v1beta1.SidecarSpecIngressConnectionPoolHttpPatch;
            tcp: outputs.networking.v1beta1.SidecarSpecIngressConnectionPoolTcpPatch;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcp {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.SidecarSpecIngressConnectionPoolTcpTcpKeepalive;
        }
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        interface SidecarSpecIngressConnectionPoolTcpPatch {
            /**
             * TCP connection timeout.
             */
            connectTimeout: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections: number;
            tcpKeepalive: outputs.networking.v1beta1.SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalive {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        interface SidecarSpecIngressConnectionPoolTcpTcpKeepalivePatch {
            /**
             * The time duration between keep-alive probes.
             */
            interval: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time: string;
        }
        interface SidecarSpecIngressPatch {
            /**
             * The IP(IPv4 or IPv6) to which the listener should be bound.
             */
            bind: string;
            /**
             * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
             *
             * Valid Options: DEFAULT, IPTABLES, NONE
             */
            captureMode: string;
            connectionPool: outputs.networking.v1beta1.SidecarSpecIngressConnectionPoolPatch;
            /**
             * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
             */
            defaultEndpoint: string;
            port: outputs.networking.v1beta1.SidecarSpecIngressPortPatch;
            tls: outputs.networking.v1beta1.SidecarSpecIngressTlsPatch;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPort {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * The port associated with the listener.
         */
        interface SidecarSpecIngressPortPatch {
            /**
             * Label assigned to the port.
             */
            name: string;
            /**
             * A valid non-negative integer port number.
             */
            number: number;
            /**
             * The protocol exposed on the port.
             */
            protocol: string;
            targetPort: number;
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTls {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
         */
        interface SidecarSpecIngressTlsPatch {
            /**
             * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
             */
            caCertificates: string;
            /**
             * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
             */
            caCrl: string;
            /**
             * Optional: If specified, only support the specified cipher list.
             */
            cipherSuites: string[];
            /**
             * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
             */
            credentialName: string;
            /**
             * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
             */
            httpsRedirect: boolean;
            /**
             * Optional: Maximum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            maxProtocolVersion: string;
            /**
             * Optional: Minimum TLS protocol version.
             *
             * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
             */
            minProtocolVersion: string;
            /**
             * Optional: Indicates whether connections to this port should be secured using TLS.
             *
             * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
             */
            mode: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            privateKey: string;
            /**
             * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
             */
            serverCertificate: string;
            /**
             * A list of alternate names to verify the subject identity in the certificate presented by the client.
             */
            subjectAltNames: string[];
            /**
             * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
             */
            verifyCertificateHash: string[];
            /**
             * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
             */
            verifyCertificateSpki: string[];
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicy {
            egressProxy: outputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyEgressProxy;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode: string;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxy {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyEgressProxyPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface SidecarSpecOutboundTrafficPolicyEgressProxyPortPatch {
            number: number;
        }
        /**
         * Set the default behavior of the sidecar for handling outbound traffic from the application.
         */
        interface SidecarSpecOutboundTrafficPolicyPatch {
            egressProxy: outputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyEgressProxyPatch;
            /**
             *
             *
             * Valid Options: REGISTRY_ONLY, ALLOW_ANY
             */
            mode: string;
        }
        /**
         * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
         */
        interface SidecarSpecPatch {
            /**
             * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
             */
            egress: outputs.networking.v1beta1.SidecarSpecEgressPatch[];
            inboundConnectionPool: outputs.networking.v1beta1.SidecarSpecInboundConnectionPoolPatch;
            /**
             * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
             */
            ingress: outputs.networking.v1beta1.SidecarSpecIngressPatch[];
            outboundTrafficPolicy: outputs.networking.v1beta1.SidecarSpecOutboundTrafficPolicyPatch;
            workloadSelector: outputs.networking.v1beta1.SidecarSpecWorkloadSelectorPatch;
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
         */
        interface SidecarSpecWorkloadSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
             */
            labels: {
                [key: string]: string;
            };
        }
        interface VirtualService {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "VirtualService";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1beta1.VirtualServiceSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpec {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo: string[];
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways: string[];
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts: string[];
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http: outputs.networking.v1beta1.VirtualServiceSpecHttp[];
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp: outputs.networking.v1beta1.VirtualServiceSpecTcp[];
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls: outputs.networking.v1beta1.VirtualServiceSpecTls[];
        }
        interface VirtualServiceSpecHttp {
            corsPolicy: outputs.networking.v1beta1.VirtualServiceSpecHttpCorsPolicy;
            delegate: outputs.networking.v1beta1.VirtualServiceSpecHttpDelegate;
            directResponse: outputs.networking.v1beta1.VirtualServiceSpecHttpDirectResponse;
            fault: outputs.networking.v1beta1.VirtualServiceSpecHttpFault;
            headers: outputs.networking.v1beta1.VirtualServiceSpecHttpHeaders;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1beta1.VirtualServiceSpecHttpMatch[];
            mirror: outputs.networking.v1beta1.VirtualServiceSpecHttpMirror;
            mirrorPercent: number;
            mirrorPercentage: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPercentage;
            mirror_percent: number;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrors[];
            /**
             * The name assigned to the route for debugging purposes.
             */
            name: string;
            redirect: outputs.networking.v1beta1.VirtualServiceSpecHttpRedirect;
            retries: outputs.networking.v1beta1.VirtualServiceSpecHttpRetries;
            rewrite: outputs.networking.v1beta1.VirtualServiceSpecHttpRewrite;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route: outputs.networking.v1beta1.VirtualServiceSpecHttpRoute[];
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout: string;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicy {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials: boolean;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders: string[];
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods: string[];
            allowOrigin: string[];
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins: outputs.networking.v1beta1.VirtualServiceSpecHttpCorsPolicyAllowOrigins[];
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders: string[];
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge: string;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights: string;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOrigins {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        interface VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * Cross-Origin Resource Sharing policy (CORS).
         */
        interface VirtualServiceSpecHttpCorsPolicyPatch {
            /**
             * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
             */
            allowCredentials: boolean;
            /**
             * List of HTTP headers that can be used when requesting the resource.
             */
            allowHeaders: string[];
            /**
             * List of HTTP methods allowed to access the resource.
             */
            allowMethods: string[];
            allowOrigin: string[];
            /**
             * String patterns that match allowed origins.
             */
            allowOrigins: outputs.networking.v1beta1.VirtualServiceSpecHttpCorsPolicyAllowOriginsPatch[];
            /**
             * A list of HTTP headers that the browsers are allowed to access.
             */
            exposeHeaders: string[];
            /**
             * Specifies how long the results of a preflight request can be cached.
             */
            maxAge: string;
            /**
             * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
             *
             * Valid Options: FORWARD, IGNORE
             */
            unmatchedPreflights: string;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegate {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name: string;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace: string;
        }
        /**
         * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
         */
        interface VirtualServiceSpecHttpDelegatePatch {
            /**
             * Name specifies the name of the delegate VirtualService.
             */
            name: string;
            /**
             * Namespace specifies the namespace where the delegate VirtualService resides.
             */
            namespace: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponse {
            body: outputs.networking.v1beta1.VirtualServiceSpecHttpDirectResponseBody;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status: number;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBody {
            /**
             * response body as base64 encoded bytes.
             */
            bytes: string;
            string: string;
        }
        /**
         * Specifies the content of the response body.
         */
        interface VirtualServiceSpecHttpDirectResponseBodyPatch {
            /**
             * response body as base64 encoded bytes.
             */
            bytes: string;
            string: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpDirectResponsePatch {
            body: outputs.networking.v1beta1.VirtualServiceSpecHttpDirectResponseBodyPatch;
            /**
             * Specifies the HTTP response status to be returned.
             */
            status: number;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFault {
            abort: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultAbort;
            delay: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultDelay;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbort {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus: string;
            http2Error: string;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus: number;
            percentage: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultAbortPercentage;
        }
        /**
         * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
         */
        interface VirtualServiceSpecHttpFaultAbortPatch {
            /**
             * GRPC status code to use to abort the request.
             */
            grpcStatus: string;
            http2Error: string;
            /**
             * HTTP status code to use to abort the Http request.
             */
            httpStatus: number;
            percentage: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultAbortPercentagePatch;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentage {
            value: number;
        }
        /**
         * Percentage of requests to be aborted with the error code provided.
         */
        interface VirtualServiceSpecHttpFaultAbortPercentagePatch {
            value: number;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelay {
            exponentialDelay: string;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay: string;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent: number;
            percentage: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultDelayPercentage;
        }
        /**
         * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
         */
        interface VirtualServiceSpecHttpFaultDelayPatch {
            exponentialDelay: string;
            /**
             * Add a fixed delay before forwarding the request.
             */
            fixedDelay: string;
            /**
             * Percentage of requests on which the delay will be injected (0-100).
             */
            percent: number;
            percentage: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultDelayPercentagePatch;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentage {
            value: number;
        }
        /**
         * Percentage of requests on which the delay will be injected.
         */
        interface VirtualServiceSpecHttpFaultDelayPercentagePatch {
            value: number;
        }
        /**
         * Fault injection policy to apply on HTTP traffic at the client side.
         */
        interface VirtualServiceSpecHttpFaultPatch {
            abort: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultAbortPatch;
            delay: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultDelayPatch;
        }
        interface VirtualServiceSpecHttpHeaders {
            request: outputs.networking.v1beta1.VirtualServiceSpecHttpHeadersRequest;
            response: outputs.networking.v1beta1.VirtualServiceSpecHttpHeadersResponse;
        }
        interface VirtualServiceSpecHttpHeadersPatch {
            request: outputs.networking.v1beta1.VirtualServiceSpecHttpHeadersRequestPatch;
            response: outputs.networking.v1beta1.VirtualServiceSpecHttpHeadersResponsePatch;
        }
        interface VirtualServiceSpecHttpHeadersRequest {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersRequestPatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersResponse {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpHeadersResponsePatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpMatch {
            authority: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchAuthority;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase: boolean;
            method: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchMethod;
            /**
             * The name assigned to a match.
             */
            name: string;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port: number;
            /**
             * Query parameters for matching.
             */
            queryParams: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            scheme: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchScheme;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix: string;
            uri: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchUri;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthority {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchAuthorityPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethod {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchMethodPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        interface VirtualServiceSpecHttpMatchPatch {
            authority: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchAuthorityPatch;
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * The header keys must be lowercase and use hyphen as the separator, e.g.
             */
            headers: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Flag to specify whether the URI matching should be case-insensitive.
             */
            ignoreUriCase: boolean;
            method: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchMethodPatch;
            /**
             * The name assigned to a match.
             */
            name: string;
            /**
             * Specifies the ports on the host that is being addressed.
             */
            port: number;
            /**
             * Query parameters for matching.
             */
            queryParams: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            scheme: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchSchemePatch;
            /**
             * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            /**
             * The human readable prefix to use when emitting statistics for this route.
             */
            statPrefix: string;
            uri: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchUriPatch;
            /**
             * withoutHeader has the same syntax with the header, but has opposite meaning.
             */
            withoutHeaders: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchScheme {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchSchemePatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUri {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        interface VirtualServiceSpecHttpMatchUriPatch {
            exact: string;
            prefix: string;
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            regex: string;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirror {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
         */
        interface VirtualServiceSpecHttpMirrorPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentage {
            value: number;
        }
        /**
         * Percentage of the traffic to be mirrored by the `mirror` field.
         */
        interface VirtualServiceSpecHttpMirrorPercentagePatch {
            value: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpMirrors {
            destination: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsDestination;
            percentage: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsPercentage;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination specifies the target of the mirror operation.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpMirrorsDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpMirrorsPatch {
            destination: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsDestinationPatch;
            percentage: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsPercentagePatch;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentage {
            value: number;
        }
        /**
         * Percentage of the traffic to be mirrored by the `destination` field.
         */
        interface VirtualServiceSpecHttpMirrorsPercentagePatch {
            value: number;
        }
        interface VirtualServiceSpecHttpPatch {
            corsPolicy: outputs.networking.v1beta1.VirtualServiceSpecHttpCorsPolicyPatch;
            delegate: outputs.networking.v1beta1.VirtualServiceSpecHttpDelegatePatch;
            directResponse: outputs.networking.v1beta1.VirtualServiceSpecHttpDirectResponsePatch;
            fault: outputs.networking.v1beta1.VirtualServiceSpecHttpFaultPatch;
            headers: outputs.networking.v1beta1.VirtualServiceSpecHttpHeadersPatch;
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1beta1.VirtualServiceSpecHttpMatchPatch[];
            mirror: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPatch;
            mirrorPercent: number;
            mirrorPercentage: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorPercentagePatch;
            mirror_percent: number;
            /**
             * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
             */
            mirrors: outputs.networking.v1beta1.VirtualServiceSpecHttpMirrorsPatch[];
            /**
             * The name assigned to the route for debugging purposes.
             */
            name: string;
            redirect: outputs.networking.v1beta1.VirtualServiceSpecHttpRedirectPatch;
            retries: outputs.networking.v1beta1.VirtualServiceSpecHttpRetriesPatch;
            rewrite: outputs.networking.v1beta1.VirtualServiceSpecHttpRewritePatch;
            /**
             * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
             */
            route: outputs.networking.v1beta1.VirtualServiceSpecHttpRoutePatch[];
            /**
             * Timeout for HTTP requests, default is disabled.
             */
            timeout: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirect {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority: string;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort: string;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port: number;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode: number;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme: string;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri: string;
        }
        /**
         * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
         */
        interface VirtualServiceSpecHttpRedirectPatch {
            /**
             * On a redirect, overwrite the Authority/Host portion of the URL with this value.
             */
            authority: string;
            /**
             * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80 for HTTP and 443 for HTTPS.
             *
             * Valid Options: FROM_PROTOCOL_DEFAULT, FROM_REQUEST_PORT
             */
            derivePort: string;
            /**
             * On a redirect, overwrite the port portion of the URL with this value.
             */
            port: number;
            /**
             * On a redirect, Specifies the HTTP status code to use in the redirect response.
             */
            redirectCode: number;
            /**
             * On a redirect, overwrite the scheme portion of the URL with this value.
             */
            scheme: string;
            /**
             * On a redirect, overwrite the Path portion of the URL with this value.
             */
            uri: string;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetries {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts: number;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout: string;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn: string;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities: boolean;
        }
        /**
         * Retry policy for HTTP requests.
         */
        interface VirtualServiceSpecHttpRetriesPatch {
            /**
             * Number of retries to be allowed for a given request.
             */
            attempts: number;
            /**
             * Timeout per attempt for a given request, including the initial call and any retries.
             */
            perTryTimeout: string;
            /**
             * Specifies the conditions under which retry takes place.
             */
            retryOn: string;
            /**
             * Flag to specify whether the retries should retry to other localities.
             */
            retryRemoteLocalities: boolean;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewrite {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority: string;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri: string;
            uriRegexRewrite: outputs.networking.v1beta1.VirtualServiceSpecHttpRewriteUriRegexRewrite;
        }
        /**
         * Rewrite HTTP URIs and Authority headers.
         */
        interface VirtualServiceSpecHttpRewritePatch {
            /**
             * rewrite the Authority/Host header with this value.
             */
            authority: string;
            /**
             * rewrite the path (or the prefix) portion of the URI with this value.
             */
            uri: string;
            uriRegexRewrite: outputs.networking.v1beta1.VirtualServiceSpecHttpRewriteUriRegexRewritePatch;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewrite {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match: string;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite: string;
        }
        /**
         * rewrite the path portion of the URI with the specified regex.
         */
        interface VirtualServiceSpecHttpRewriteUriRegexRewritePatch {
            /**
             * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
             */
            match: string;
            /**
             * The string that should replace into matching portions of original URI.
             */
            rewrite: string;
        }
        interface VirtualServiceSpecHttpRoute {
            destination: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteDestination;
            headers: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeaders;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecHttpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecHttpRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecHttpRouteHeaders {
            request: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersRequest;
            response: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersResponse;
        }
        interface VirtualServiceSpecHttpRouteHeadersPatch {
            request: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersRequestPatch;
            response: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersResponsePatch;
        }
        interface VirtualServiceSpecHttpRouteHeadersRequest {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersRequestPatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersResponse {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRouteHeadersResponsePatch {
            add: {
                [key: string]: string;
            };
            remove: string[];
            set: {
                [key: string]: string;
            };
        }
        interface VirtualServiceSpecHttpRoutePatch {
            destination: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteDestinationPatch;
            headers: outputs.networking.v1beta1.VirtualServiceSpecHttpRouteHeadersPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
         */
        interface VirtualServiceSpecPatch {
            /**
             * A list of namespaces to which this virtual service is exported.
             */
            exportTo: string[];
            /**
             * The names of gateways and sidecars that should apply these routes.
             */
            gateways: string[];
            /**
             * The destination hosts to which traffic is being sent.
             */
            hosts: string[];
            /**
             * An ordered list of route rules for HTTP traffic.
             */
            http: outputs.networking.v1beta1.VirtualServiceSpecHttpPatch[];
            /**
             * An ordered list of route rules for opaque TCP traffic.
             */
            tcp: outputs.networking.v1beta1.VirtualServiceSpecTcpPatch[];
            /**
             * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
             */
            tls: outputs.networking.v1beta1.VirtualServiceSpecTlsPatch[];
        }
        interface VirtualServiceSpecTcp {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1beta1.VirtualServiceSpecTcpMatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1beta1.VirtualServiceSpecTcpRoute[];
        }
        interface VirtualServiceSpecTcpMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            sourceSubnet: string;
        }
        interface VirtualServiceSpecTcpMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
            sourceSubnet: string;
        }
        interface VirtualServiceSpecTcpPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1beta1.VirtualServiceSpecTcpMatchPatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1beta1.VirtualServiceSpecTcpRoutePatch[];
        }
        interface VirtualServiceSpecTcpRoute {
            destination: outputs.networking.v1beta1.VirtualServiceSpecTcpRouteDestination;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecTcpRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTcpRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecTcpRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTcpRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecTcpRoutePatch {
            destination: outputs.networking.v1beta1.VirtualServiceSpecTcpRouteDestinationPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        interface VirtualServiceSpecTls {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1beta1.VirtualServiceSpecTlsMatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1beta1.VirtualServiceSpecTlsRoute[];
        }
        interface VirtualServiceSpecTlsMatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts: string[];
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
        }
        interface VirtualServiceSpecTlsMatchPatch {
            /**
             * IPv4 or IPv6 ip addresses of destination with optional subnet.
             */
            destinationSubnets: string[];
            /**
             * Names of gateways where the rule should be applied.
             */
            gateways: string[];
            /**
             * Specifies the port on the host that is being addressed.
             */
            port: number;
            /**
             * SNI (server name indicator) to match on.
             */
            sniHosts: string[];
            /**
             * One or more labels that constrain the applicability of a rule to workloads with the given labels.
             */
            sourceLabels: {
                [key: string]: string;
            };
            /**
             * Source namespace constraining the applicability of a rule to workloads in that namespace.
             */
            sourceNamespace: string;
        }
        interface VirtualServiceSpecTlsPatch {
            /**
             * Match conditions to be satisfied for the rule to be activated.
             */
            match: outputs.networking.v1beta1.VirtualServiceSpecTlsMatchPatch[];
            /**
             * The destination to which the connection should be forwarded to.
             */
            route: outputs.networking.v1beta1.VirtualServiceSpecTlsRoutePatch[];
        }
        interface VirtualServiceSpecTlsRoute {
            destination: outputs.networking.v1beta1.VirtualServiceSpecTlsRouteDestination;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestination {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecTlsRouteDestinationPort;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
         */
        interface VirtualServiceSpecTlsRouteDestinationPatch {
            /**
             * The name of a service from the service registry.
             */
            host: string;
            port: outputs.networking.v1beta1.VirtualServiceSpecTlsRouteDestinationPortPatch;
            /**
             * The name of a subset within the service.
             */
            subset: string;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPort {
            number: number;
        }
        /**
         * Specifies the port on the host that is being addressed.
         */
        interface VirtualServiceSpecTlsRouteDestinationPortPatch {
            number: number;
        }
        interface VirtualServiceSpecTlsRoutePatch {
            destination: outputs.networking.v1beta1.VirtualServiceSpecTlsRouteDestinationPatch;
            /**
             * Weight specifies the relative proportion of traffic to be forwarded to the destination.
             */
            weight: number;
        }
        interface WorkloadEntry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "WorkloadEntry";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1beta1.WorkloadEntrySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpec {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
         */
        interface WorkloadEntrySpecPatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        interface WorkloadGroup {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "networking.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "WorkloadGroup";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.networking.v1beta1.WorkloadGroupSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpec {
            metadata: outputs.networking.v1beta1.WorkloadGroupSpecMetadata;
            probe: outputs.networking.v1beta1.WorkloadGroupSpecProbe;
            template: outputs.networking.v1beta1.WorkloadGroupSpecTemplate;
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadata {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        interface WorkloadGroupSpecMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
         */
        interface WorkloadGroupSpecPatch {
            metadata: outputs.networking.v1beta1.WorkloadGroupSpecMetadataPatch;
            probe: outputs.networking.v1beta1.WorkloadGroupSpecProbePatch;
            template: outputs.networking.v1beta1.WorkloadGroupSpecTemplatePatch;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbe {
            exec: outputs.networking.v1beta1.WorkloadGroupSpecProbeExec;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold: number;
            grpc: outputs.networking.v1beta1.WorkloadGroupSpecProbeGrpc;
            httpGet: outputs.networking.v1beta1.WorkloadGroupSpecProbeHttpGet;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold: number;
            tcpSocket: outputs.networking.v1beta1.WorkloadGroupSpecProbeTcpSocket;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds: number;
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExec {
            /**
             * Command to run.
             */
            command: string[];
        }
        /**
         * Health is determined by how the command that is executed exited.
         */
        interface WorkloadGroupSpecProbeExecPatch {
            /**
             * Command to run.
             */
            command: string[];
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpc {
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            service: string;
        }
        /**
         * GRPC call is made and response/error is used to determine health.
         */
        interface WorkloadGroupSpecProbeGrpcPatch {
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            service: string;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGet {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host: string;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders: outputs.networking.v1beta1.WorkloadGroupSpecProbeHttpGetHttpHeaders[];
            /**
             * Path to access on the HTTP server.
             */
            path: string;
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            scheme: string;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface WorkloadGroupSpecProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        /**
         * `httpGet` is performed to a given endpoint and the status/able to connect determines health.
         */
        interface WorkloadGroupSpecProbeHttpGetPatch {
            /**
             * Host name to connect to, defaults to the pod IP.
             */
            host: string;
            /**
             * Headers the proxy will pass on to make the request.
             */
            httpHeaders: outputs.networking.v1beta1.WorkloadGroupSpecProbeHttpGetHttpHeadersPatch[];
            /**
             * Path to access on the HTTP server.
             */
            path: string;
            /**
             * Port on which the endpoint lives.
             */
            port: number;
            scheme: string;
        }
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        interface WorkloadGroupSpecProbePatch {
            exec: outputs.networking.v1beta1.WorkloadGroupSpecProbeExecPatch;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            failureThreshold: number;
            grpc: outputs.networking.v1beta1.WorkloadGroupSpecProbeGrpcPatch;
            httpGet: outputs.networking.v1beta1.WorkloadGroupSpecProbeHttpGetPatch;
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            initialDelaySeconds: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            periodSeconds: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            successThreshold: number;
            tcpSocket: outputs.networking.v1beta1.WorkloadGroupSpecProbeTcpSocketPatch;
            /**
             * Number of seconds after which the probe times out.
             */
            timeoutSeconds: number;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocket {
            host: string;
            port: number;
        }
        /**
         * Health is determined by if the proxy is able to connect.
         */
        interface WorkloadGroupSpecProbeTcpSocketPatch {
            host: string;
            port: number;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplate {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        interface WorkloadGroupSpecTemplatePatch {
            /**
             * Address associated with the network endpoint without the port.
             */
            address: string;
            /**
             * One or more labels associated with the endpoint.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            locality: string;
            /**
             * Network enables Istio to group endpoints resident in the same L3 domain/network.
             */
            network: string;
            /**
             * Set of ports associated with the endpoint.
             */
            ports: {
                [key: string]: number;
            };
            /**
             * The service account associated with the workload if a sidecar is present in the workload.
             */
            serviceAccount: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            weight: number;
        }
    }
}
export declare namespace security {
    namespace v1 {
        interface AuthorizationPolicy {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "security.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "AuthorizationPolicy";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.security.v1.AuthorizationPolicySpec;
            status: {
                [key: string]: any;
            };
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
            action: string;
            provider: outputs.security.v1.AuthorizationPolicySpecProvider;
            /**
             * Optional.
             */
            rules: outputs.security.v1.AuthorizationPolicySpecRules[];
            selector: outputs.security.v1.AuthorizationPolicySpecSelector;
            targetRef: outputs.security.v1.AuthorizationPolicySpecTargetRef;
            /**
             * Optional.
             */
            targetRefs: outputs.security.v1.AuthorizationPolicySpecTargetRefs[];
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
            action: string;
            provider: outputs.security.v1.AuthorizationPolicySpecProviderPatch;
            /**
             * Optional.
             */
            rules: outputs.security.v1.AuthorizationPolicySpecRulesPatch[];
            selector: outputs.security.v1.AuthorizationPolicySpecSelectorPatch;
            targetRef: outputs.security.v1.AuthorizationPolicySpecTargetRefPatch;
            /**
             * Optional.
             */
            targetRefs: outputs.security.v1.AuthorizationPolicySpecTargetRefsPatch[];
        }
        /**
         * Specifies detailed configuration of the CUSTOM action.
         */
        interface AuthorizationPolicySpecProvider {
            /**
             * Specifies the name of the extension provider.
             */
            name: string;
        }
        /**
         * Specifies detailed configuration of the CUSTOM action.
         */
        interface AuthorizationPolicySpecProviderPatch {
            /**
             * Specifies the name of the extension provider.
             */
            name: string;
        }
        interface AuthorizationPolicySpecRules {
            /**
             * Optional.
             */
            from: outputs.security.v1.AuthorizationPolicySpecRulesFrom[];
            /**
             * Optional.
             */
            to: outputs.security.v1.AuthorizationPolicySpecRulesTo[];
            /**
             * Optional.
             */
            when: outputs.security.v1.AuthorizationPolicySpecRulesWhen[];
        }
        interface AuthorizationPolicySpecRulesFrom {
            source: outputs.security.v1.AuthorizationPolicySpecRulesFromSource;
        }
        interface AuthorizationPolicySpecRulesFromPatch {
            source: outputs.security.v1.AuthorizationPolicySpecRulesFromSourcePatch;
        }
        /**
         * Source specifies the source of a request.
         */
        interface AuthorizationPolicySpecRulesFromSource {
            /**
             * Optional.
             */
            ipBlocks: string[];
            /**
             * Optional.
             */
            namespaces: string[];
            /**
             * Optional.
             */
            notIpBlocks: string[];
            /**
             * Optional.
             */
            notNamespaces: string[];
            /**
             * Optional.
             */
            notPrincipals: string[];
            /**
             * Optional.
             */
            notRemoteIpBlocks: string[];
            /**
             * Optional.
             */
            notRequestPrincipals: string[];
            /**
             * Optional.
             */
            notServiceAccounts: string[];
            /**
             * Optional.
             */
            principals: string[];
            /**
             * Optional.
             */
            remoteIpBlocks: string[];
            /**
             * Optional.
             */
            requestPrincipals: string[];
            /**
             * Optional.
             */
            serviceAccounts: string[];
        }
        /**
         * Source specifies the source of a request.
         */
        interface AuthorizationPolicySpecRulesFromSourcePatch {
            /**
             * Optional.
             */
            ipBlocks: string[];
            /**
             * Optional.
             */
            namespaces: string[];
            /**
             * Optional.
             */
            notIpBlocks: string[];
            /**
             * Optional.
             */
            notNamespaces: string[];
            /**
             * Optional.
             */
            notPrincipals: string[];
            /**
             * Optional.
             */
            notRemoteIpBlocks: string[];
            /**
             * Optional.
             */
            notRequestPrincipals: string[];
            /**
             * Optional.
             */
            notServiceAccounts: string[];
            /**
             * Optional.
             */
            principals: string[];
            /**
             * Optional.
             */
            remoteIpBlocks: string[];
            /**
             * Optional.
             */
            requestPrincipals: string[];
            /**
             * Optional.
             */
            serviceAccounts: string[];
        }
        interface AuthorizationPolicySpecRulesPatch {
            /**
             * Optional.
             */
            from: outputs.security.v1.AuthorizationPolicySpecRulesFromPatch[];
            /**
             * Optional.
             */
            to: outputs.security.v1.AuthorizationPolicySpecRulesToPatch[];
            /**
             * Optional.
             */
            when: outputs.security.v1.AuthorizationPolicySpecRulesWhenPatch[];
        }
        interface AuthorizationPolicySpecRulesTo {
            operation: outputs.security.v1.AuthorizationPolicySpecRulesToOperation;
        }
        /**
         * Operation specifies the operation of a request.
         */
        interface AuthorizationPolicySpecRulesToOperation {
            /**
             * Optional.
             */
            hosts: string[];
            /**
             * Optional.
             */
            methods: string[];
            /**
             * Optional.
             */
            notHosts: string[];
            /**
             * Optional.
             */
            notMethods: string[];
            /**
             * Optional.
             */
            notPaths: string[];
            /**
             * Optional.
             */
            notPorts: string[];
            /**
             * Optional.
             */
            paths: string[];
            /**
             * Optional.
             */
            ports: string[];
        }
        /**
         * Operation specifies the operation of a request.
         */
        interface AuthorizationPolicySpecRulesToOperationPatch {
            /**
             * Optional.
             */
            hosts: string[];
            /**
             * Optional.
             */
            methods: string[];
            /**
             * Optional.
             */
            notHosts: string[];
            /**
             * Optional.
             */
            notMethods: string[];
            /**
             * Optional.
             */
            notPaths: string[];
            /**
             * Optional.
             */
            notPorts: string[];
            /**
             * Optional.
             */
            paths: string[];
            /**
             * Optional.
             */
            ports: string[];
        }
        interface AuthorizationPolicySpecRulesToPatch {
            operation: outputs.security.v1.AuthorizationPolicySpecRulesToOperationPatch;
        }
        interface AuthorizationPolicySpecRulesWhen {
            /**
             * The name of an Istio attribute.
             */
            key: string;
            /**
             * Optional.
             */
            notValues: string[];
            /**
             * Optional.
             */
            values: string[];
        }
        interface AuthorizationPolicySpecRulesWhenPatch {
            /**
             * The name of an Istio attribute.
             */
            key: string;
            /**
             * Optional.
             */
            notValues: string[];
            /**
             * Optional.
             */
            values: string[];
        }
        /**
         * Optional.
         */
        interface AuthorizationPolicySpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Optional.
         */
        interface AuthorizationPolicySpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface AuthorizationPolicySpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface AuthorizationPolicySpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface AuthorizationPolicySpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface AuthorizationPolicySpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface PeerAuthentication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "security.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "PeerAuthentication";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.security.v1.PeerAuthenticationSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
         */
        interface PeerAuthenticationSpec {
            mtls: outputs.security.v1.PeerAuthenticationSpecMtls;
            /**
             * Port specific mutual TLS settings.
             */
            portLevelMtls: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            selector: outputs.security.v1.PeerAuthenticationSpecSelector;
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
            mode: string;
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
            mode: string;
        }
        /**
         * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
         */
        interface PeerAuthenticationSpecPatch {
            mtls: outputs.security.v1.PeerAuthenticationSpecMtlsPatch;
            /**
             * Port specific mutual TLS settings.
             */
            portLevelMtls: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            selector: outputs.security.v1.PeerAuthenticationSpecSelectorPatch;
        }
        /**
         * The selector determines the workloads to apply the PeerAuthentication on.
         */
        interface PeerAuthenticationSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * The selector determines the workloads to apply the PeerAuthentication on.
         */
        interface PeerAuthenticationSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RequestAuthentication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "security.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "RequestAuthentication";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.security.v1.RequestAuthenticationSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
         */
        interface RequestAuthenticationSpec {
            /**
             * Define the list of JWTs that can be validated at the selected workloads' proxy.
             */
            jwtRules: outputs.security.v1.RequestAuthenticationSpecJwtRules[];
            selector: outputs.security.v1.RequestAuthenticationSpecSelector;
            targetRef: outputs.security.v1.RequestAuthenticationSpecTargetRef;
            /**
             * Optional.
             */
            targetRefs: outputs.security.v1.RequestAuthenticationSpecTargetRefs[];
        }
        interface RequestAuthenticationSpecJwtRules {
            /**
             * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
             */
            audiences: string[];
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            forwardOriginalToken: boolean;
            /**
             * List of cookie names from which JWT is expected.
             */
            fromCookies: string[];
            /**
             * List of header locations from which JWT is expected.
             */
            fromHeaders: outputs.security.v1.RequestAuthenticationSpecJwtRulesFromHeaders[];
            /**
             * List of query parameters from which JWT is expected.
             */
            fromParams: string[];
            /**
             * Identifies the issuer that issued the JWT.
             */
            issuer: string;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            jwks: string;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwksUri: string;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwks_uri: string;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            outputClaimToHeaders: outputs.security.v1.RequestAuthenticationSpecJwtRulesOutputClaimToHeaders[];
            /**
             * This field specifies the header name to output a successfully verified JWT payload to the backend.
             */
            outputPayloadToHeader: string;
            /**
             * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
             */
            timeout: string;
        }
        interface RequestAuthenticationSpecJwtRulesFromHeaders {
            /**
             * The HTTP header name.
             */
            name: string;
            /**
             * The prefix that should be stripped before decoding the token.
             */
            prefix: string;
        }
        interface RequestAuthenticationSpecJwtRulesFromHeadersPatch {
            /**
             * The HTTP header name.
             */
            name: string;
            /**
             * The prefix that should be stripped before decoding the token.
             */
            prefix: string;
        }
        interface RequestAuthenticationSpecJwtRulesOutputClaimToHeaders {
            /**
             * The name of the claim to be copied from.
             */
            claim: string;
            /**
             * The name of the header to be created.
             */
            header: string;
        }
        interface RequestAuthenticationSpecJwtRulesOutputClaimToHeadersPatch {
            /**
             * The name of the claim to be copied from.
             */
            claim: string;
            /**
             * The name of the header to be created.
             */
            header: string;
        }
        interface RequestAuthenticationSpecJwtRulesPatch {
            /**
             * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
             */
            audiences: string[];
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            forwardOriginalToken: boolean;
            /**
             * List of cookie names from which JWT is expected.
             */
            fromCookies: string[];
            /**
             * List of header locations from which JWT is expected.
             */
            fromHeaders: outputs.security.v1.RequestAuthenticationSpecJwtRulesFromHeadersPatch[];
            /**
             * List of query parameters from which JWT is expected.
             */
            fromParams: string[];
            /**
             * Identifies the issuer that issued the JWT.
             */
            issuer: string;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            jwks: string;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwksUri: string;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwks_uri: string;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            outputClaimToHeaders: outputs.security.v1.RequestAuthenticationSpecJwtRulesOutputClaimToHeadersPatch[];
            /**
             * This field specifies the header name to output a successfully verified JWT payload to the backend.
             */
            outputPayloadToHeader: string;
            /**
             * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
             */
            timeout: string;
        }
        /**
         * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
         */
        interface RequestAuthenticationSpecPatch {
            /**
             * Define the list of JWTs that can be validated at the selected workloads' proxy.
             */
            jwtRules: outputs.security.v1.RequestAuthenticationSpecJwtRulesPatch[];
            selector: outputs.security.v1.RequestAuthenticationSpecSelectorPatch;
            targetRef: outputs.security.v1.RequestAuthenticationSpecTargetRefPatch;
            /**
             * Optional.
             */
            targetRefs: outputs.security.v1.RequestAuthenticationSpecTargetRefsPatch[];
        }
        /**
         * Optional.
         */
        interface RequestAuthenticationSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Optional.
         */
        interface RequestAuthenticationSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RequestAuthenticationSpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface RequestAuthenticationSpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface RequestAuthenticationSpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface RequestAuthenticationSpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
    }
    namespace v1beta1 {
        interface AuthorizationPolicy {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "security.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "AuthorizationPolicy";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.security.v1beta1.AuthorizationPolicySpec;
            status: {
                [key: string]: any;
            };
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
            action: string;
            provider: outputs.security.v1beta1.AuthorizationPolicySpecProvider;
            /**
             * Optional.
             */
            rules: outputs.security.v1beta1.AuthorizationPolicySpecRules[];
            selector: outputs.security.v1beta1.AuthorizationPolicySpecSelector;
            targetRef: outputs.security.v1beta1.AuthorizationPolicySpecTargetRef;
            /**
             * Optional.
             */
            targetRefs: outputs.security.v1beta1.AuthorizationPolicySpecTargetRefs[];
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
            action: string;
            provider: outputs.security.v1beta1.AuthorizationPolicySpecProviderPatch;
            /**
             * Optional.
             */
            rules: outputs.security.v1beta1.AuthorizationPolicySpecRulesPatch[];
            selector: outputs.security.v1beta1.AuthorizationPolicySpecSelectorPatch;
            targetRef: outputs.security.v1beta1.AuthorizationPolicySpecTargetRefPatch;
            /**
             * Optional.
             */
            targetRefs: outputs.security.v1beta1.AuthorizationPolicySpecTargetRefsPatch[];
        }
        /**
         * Specifies detailed configuration of the CUSTOM action.
         */
        interface AuthorizationPolicySpecProvider {
            /**
             * Specifies the name of the extension provider.
             */
            name: string;
        }
        /**
         * Specifies detailed configuration of the CUSTOM action.
         */
        interface AuthorizationPolicySpecProviderPatch {
            /**
             * Specifies the name of the extension provider.
             */
            name: string;
        }
        interface AuthorizationPolicySpecRules {
            /**
             * Optional.
             */
            from: outputs.security.v1beta1.AuthorizationPolicySpecRulesFrom[];
            /**
             * Optional.
             */
            to: outputs.security.v1beta1.AuthorizationPolicySpecRulesTo[];
            /**
             * Optional.
             */
            when: outputs.security.v1beta1.AuthorizationPolicySpecRulesWhen[];
        }
        interface AuthorizationPolicySpecRulesFrom {
            source: outputs.security.v1beta1.AuthorizationPolicySpecRulesFromSource;
        }
        interface AuthorizationPolicySpecRulesFromPatch {
            source: outputs.security.v1beta1.AuthorizationPolicySpecRulesFromSourcePatch;
        }
        /**
         * Source specifies the source of a request.
         */
        interface AuthorizationPolicySpecRulesFromSource {
            /**
             * Optional.
             */
            ipBlocks: string[];
            /**
             * Optional.
             */
            namespaces: string[];
            /**
             * Optional.
             */
            notIpBlocks: string[];
            /**
             * Optional.
             */
            notNamespaces: string[];
            /**
             * Optional.
             */
            notPrincipals: string[];
            /**
             * Optional.
             */
            notRemoteIpBlocks: string[];
            /**
             * Optional.
             */
            notRequestPrincipals: string[];
            /**
             * Optional.
             */
            notServiceAccounts: string[];
            /**
             * Optional.
             */
            principals: string[];
            /**
             * Optional.
             */
            remoteIpBlocks: string[];
            /**
             * Optional.
             */
            requestPrincipals: string[];
            /**
             * Optional.
             */
            serviceAccounts: string[];
        }
        /**
         * Source specifies the source of a request.
         */
        interface AuthorizationPolicySpecRulesFromSourcePatch {
            /**
             * Optional.
             */
            ipBlocks: string[];
            /**
             * Optional.
             */
            namespaces: string[];
            /**
             * Optional.
             */
            notIpBlocks: string[];
            /**
             * Optional.
             */
            notNamespaces: string[];
            /**
             * Optional.
             */
            notPrincipals: string[];
            /**
             * Optional.
             */
            notRemoteIpBlocks: string[];
            /**
             * Optional.
             */
            notRequestPrincipals: string[];
            /**
             * Optional.
             */
            notServiceAccounts: string[];
            /**
             * Optional.
             */
            principals: string[];
            /**
             * Optional.
             */
            remoteIpBlocks: string[];
            /**
             * Optional.
             */
            requestPrincipals: string[];
            /**
             * Optional.
             */
            serviceAccounts: string[];
        }
        interface AuthorizationPolicySpecRulesPatch {
            /**
             * Optional.
             */
            from: outputs.security.v1beta1.AuthorizationPolicySpecRulesFromPatch[];
            /**
             * Optional.
             */
            to: outputs.security.v1beta1.AuthorizationPolicySpecRulesToPatch[];
            /**
             * Optional.
             */
            when: outputs.security.v1beta1.AuthorizationPolicySpecRulesWhenPatch[];
        }
        interface AuthorizationPolicySpecRulesTo {
            operation: outputs.security.v1beta1.AuthorizationPolicySpecRulesToOperation;
        }
        /**
         * Operation specifies the operation of a request.
         */
        interface AuthorizationPolicySpecRulesToOperation {
            /**
             * Optional.
             */
            hosts: string[];
            /**
             * Optional.
             */
            methods: string[];
            /**
             * Optional.
             */
            notHosts: string[];
            /**
             * Optional.
             */
            notMethods: string[];
            /**
             * Optional.
             */
            notPaths: string[];
            /**
             * Optional.
             */
            notPorts: string[];
            /**
             * Optional.
             */
            paths: string[];
            /**
             * Optional.
             */
            ports: string[];
        }
        /**
         * Operation specifies the operation of a request.
         */
        interface AuthorizationPolicySpecRulesToOperationPatch {
            /**
             * Optional.
             */
            hosts: string[];
            /**
             * Optional.
             */
            methods: string[];
            /**
             * Optional.
             */
            notHosts: string[];
            /**
             * Optional.
             */
            notMethods: string[];
            /**
             * Optional.
             */
            notPaths: string[];
            /**
             * Optional.
             */
            notPorts: string[];
            /**
             * Optional.
             */
            paths: string[];
            /**
             * Optional.
             */
            ports: string[];
        }
        interface AuthorizationPolicySpecRulesToPatch {
            operation: outputs.security.v1beta1.AuthorizationPolicySpecRulesToOperationPatch;
        }
        interface AuthorizationPolicySpecRulesWhen {
            /**
             * The name of an Istio attribute.
             */
            key: string;
            /**
             * Optional.
             */
            notValues: string[];
            /**
             * Optional.
             */
            values: string[];
        }
        interface AuthorizationPolicySpecRulesWhenPatch {
            /**
             * The name of an Istio attribute.
             */
            key: string;
            /**
             * Optional.
             */
            notValues: string[];
            /**
             * Optional.
             */
            values: string[];
        }
        /**
         * Optional.
         */
        interface AuthorizationPolicySpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Optional.
         */
        interface AuthorizationPolicySpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface AuthorizationPolicySpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface AuthorizationPolicySpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface AuthorizationPolicySpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface AuthorizationPolicySpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface PeerAuthentication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "security.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "PeerAuthentication";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.security.v1beta1.PeerAuthenticationSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
         */
        interface PeerAuthenticationSpec {
            mtls: outputs.security.v1beta1.PeerAuthenticationSpecMtls;
            /**
             * Port specific mutual TLS settings.
             */
            portLevelMtls: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            selector: outputs.security.v1beta1.PeerAuthenticationSpecSelector;
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
            mode: string;
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
            mode: string;
        }
        /**
         * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
         */
        interface PeerAuthenticationSpecPatch {
            mtls: outputs.security.v1beta1.PeerAuthenticationSpecMtlsPatch;
            /**
             * Port specific mutual TLS settings.
             */
            portLevelMtls: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            selector: outputs.security.v1beta1.PeerAuthenticationSpecSelectorPatch;
        }
        /**
         * The selector determines the workloads to apply the PeerAuthentication on.
         */
        interface PeerAuthenticationSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * The selector determines the workloads to apply the PeerAuthentication on.
         */
        interface PeerAuthenticationSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RequestAuthentication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "security.istio.io/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "RequestAuthentication";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.security.v1beta1.RequestAuthenticationSpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
         */
        interface RequestAuthenticationSpec {
            /**
             * Define the list of JWTs that can be validated at the selected workloads' proxy.
             */
            jwtRules: outputs.security.v1beta1.RequestAuthenticationSpecJwtRules[];
            selector: outputs.security.v1beta1.RequestAuthenticationSpecSelector;
            targetRef: outputs.security.v1beta1.RequestAuthenticationSpecTargetRef;
            /**
             * Optional.
             */
            targetRefs: outputs.security.v1beta1.RequestAuthenticationSpecTargetRefs[];
        }
        interface RequestAuthenticationSpecJwtRules {
            /**
             * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
             */
            audiences: string[];
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            forwardOriginalToken: boolean;
            /**
             * List of cookie names from which JWT is expected.
             */
            fromCookies: string[];
            /**
             * List of header locations from which JWT is expected.
             */
            fromHeaders: outputs.security.v1beta1.RequestAuthenticationSpecJwtRulesFromHeaders[];
            /**
             * List of query parameters from which JWT is expected.
             */
            fromParams: string[];
            /**
             * Identifies the issuer that issued the JWT.
             */
            issuer: string;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            jwks: string;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwksUri: string;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwks_uri: string;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            outputClaimToHeaders: outputs.security.v1beta1.RequestAuthenticationSpecJwtRulesOutputClaimToHeaders[];
            /**
             * This field specifies the header name to output a successfully verified JWT payload to the backend.
             */
            outputPayloadToHeader: string;
            /**
             * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
             */
            timeout: string;
        }
        interface RequestAuthenticationSpecJwtRulesFromHeaders {
            /**
             * The HTTP header name.
             */
            name: string;
            /**
             * The prefix that should be stripped before decoding the token.
             */
            prefix: string;
        }
        interface RequestAuthenticationSpecJwtRulesFromHeadersPatch {
            /**
             * The HTTP header name.
             */
            name: string;
            /**
             * The prefix that should be stripped before decoding the token.
             */
            prefix: string;
        }
        interface RequestAuthenticationSpecJwtRulesOutputClaimToHeaders {
            /**
             * The name of the claim to be copied from.
             */
            claim: string;
            /**
             * The name of the header to be created.
             */
            header: string;
        }
        interface RequestAuthenticationSpecJwtRulesOutputClaimToHeadersPatch {
            /**
             * The name of the claim to be copied from.
             */
            claim: string;
            /**
             * The name of the header to be created.
             */
            header: string;
        }
        interface RequestAuthenticationSpecJwtRulesPatch {
            /**
             * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
             */
            audiences: string[];
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            forwardOriginalToken: boolean;
            /**
             * List of cookie names from which JWT is expected.
             */
            fromCookies: string[];
            /**
             * List of header locations from which JWT is expected.
             */
            fromHeaders: outputs.security.v1beta1.RequestAuthenticationSpecJwtRulesFromHeadersPatch[];
            /**
             * List of query parameters from which JWT is expected.
             */
            fromParams: string[];
            /**
             * Identifies the issuer that issued the JWT.
             */
            issuer: string;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            jwks: string;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwksUri: string;
            /**
             * URL of the provider's public key set to validate signature of the JWT.
             */
            jwks_uri: string;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            outputClaimToHeaders: outputs.security.v1beta1.RequestAuthenticationSpecJwtRulesOutputClaimToHeadersPatch[];
            /**
             * This field specifies the header name to output a successfully verified JWT payload to the backend.
             */
            outputPayloadToHeader: string;
            /**
             * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
             */
            timeout: string;
        }
        /**
         * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
         */
        interface RequestAuthenticationSpecPatch {
            /**
             * Define the list of JWTs that can be validated at the selected workloads' proxy.
             */
            jwtRules: outputs.security.v1beta1.RequestAuthenticationSpecJwtRulesPatch[];
            selector: outputs.security.v1beta1.RequestAuthenticationSpecSelectorPatch;
            targetRef: outputs.security.v1beta1.RequestAuthenticationSpecTargetRefPatch;
            /**
             * Optional.
             */
            targetRefs: outputs.security.v1beta1.RequestAuthenticationSpecTargetRefsPatch[];
        }
        /**
         * Optional.
         */
        interface RequestAuthenticationSpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Optional.
         */
        interface RequestAuthenticationSpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RequestAuthenticationSpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface RequestAuthenticationSpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface RequestAuthenticationSpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface RequestAuthenticationSpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
    }
}
export declare namespace telemetry {
    namespace v1 {
        interface Telemetry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "telemetry.istio.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Telemetry";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.telemetry.v1.TelemetrySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
         */
        interface TelemetrySpec {
            /**
             * Optional.
             */
            accessLogging: outputs.telemetry.v1.TelemetrySpecAccessLogging[];
            /**
             * Optional.
             */
            metrics: outputs.telemetry.v1.TelemetrySpecMetrics[];
            selector: outputs.telemetry.v1.TelemetrySpecSelector;
            targetRef: outputs.telemetry.v1.TelemetrySpecTargetRef;
            /**
             * Optional.
             */
            targetRefs: outputs.telemetry.v1.TelemetrySpecTargetRefs[];
            /**
             * Optional.
             */
            tracing: outputs.telemetry.v1.TelemetrySpecTracing[];
        }
        interface TelemetrySpecAccessLogging {
            /**
             * Controls logging.
             */
            disabled: boolean;
            filter: outputs.telemetry.v1.TelemetrySpecAccessLoggingFilter;
            match: outputs.telemetry.v1.TelemetrySpecAccessLoggingMatch;
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1.TelemetrySpecAccessLoggingProviders[];
        }
        /**
         * Optional.
         */
        interface TelemetrySpecAccessLoggingFilter {
            /**
             * CEL expression for selecting when requests/connections should be logged.
             */
            expression: string;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecAccessLoggingFilterPatch {
            /**
             * CEL expression for selecting when requests/connections should be logged.
             */
            expression: string;
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
            mode: string;
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
            mode: string;
        }
        interface TelemetrySpecAccessLoggingPatch {
            /**
             * Controls logging.
             */
            disabled: boolean;
            filter: outputs.telemetry.v1.TelemetrySpecAccessLoggingFilterPatch;
            match: outputs.telemetry.v1.TelemetrySpecAccessLoggingMatchPatch;
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1.TelemetrySpecAccessLoggingProvidersPatch[];
        }
        interface TelemetrySpecAccessLoggingProviders {
            /**
             * Required.
             */
            name: string;
        }
        interface TelemetrySpecAccessLoggingProvidersPatch {
            /**
             * Required.
             */
            name: string;
        }
        interface TelemetrySpecMetrics {
            /**
             * Optional.
             */
            overrides: outputs.telemetry.v1.TelemetrySpecMetricsOverrides[];
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1.TelemetrySpecMetricsProviders[];
            /**
             * Optional.
             */
            reportingInterval: string;
        }
        interface TelemetrySpecMetricsOverrides {
            /**
             * Optional.
             */
            disabled: boolean;
            match: outputs.telemetry.v1.TelemetrySpecMetricsOverridesMatch;
            /**
             * Optional.
             */
            tagOverrides: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * Match allows providing the scope of the override.
         */
        interface TelemetrySpecMetricsOverridesMatch {
            /**
             * Allows free-form specification of a metric.
             */
            customMetric: string;
            /**
             * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/).
             *
             * Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
             */
            metric: string;
            /**
             * Controls which mode of metrics generation is selected: `CLIENT`, `SERVER`, or `CLIENT_AND_SERVER`.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode: string;
        }
        /**
         * Match allows providing the scope of the override.
         */
        interface TelemetrySpecMetricsOverridesMatchPatch {
            /**
             * Allows free-form specification of a metric.
             */
            customMetric: string;
            /**
             * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/).
             *
             * Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
             */
            metric: string;
            /**
             * Controls which mode of metrics generation is selected: `CLIENT`, `SERVER`, or `CLIENT_AND_SERVER`.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode: string;
        }
        interface TelemetrySpecMetricsOverridesPatch {
            /**
             * Optional.
             */
            disabled: boolean;
            match: outputs.telemetry.v1.TelemetrySpecMetricsOverridesMatchPatch;
            /**
             * Optional.
             */
            tagOverrides: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        interface TelemetrySpecMetricsPatch {
            /**
             * Optional.
             */
            overrides: outputs.telemetry.v1.TelemetrySpecMetricsOverridesPatch[];
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1.TelemetrySpecMetricsProvidersPatch[];
            /**
             * Optional.
             */
            reportingInterval: string;
        }
        interface TelemetrySpecMetricsProviders {
            /**
             * Required.
             */
            name: string;
        }
        interface TelemetrySpecMetricsProvidersPatch {
            /**
             * Required.
             */
            name: string;
        }
        /**
         * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
         */
        interface TelemetrySpecPatch {
            /**
             * Optional.
             */
            accessLogging: outputs.telemetry.v1.TelemetrySpecAccessLoggingPatch[];
            /**
             * Optional.
             */
            metrics: outputs.telemetry.v1.TelemetrySpecMetricsPatch[];
            selector: outputs.telemetry.v1.TelemetrySpecSelectorPatch;
            targetRef: outputs.telemetry.v1.TelemetrySpecTargetRefPatch;
            /**
             * Optional.
             */
            targetRefs: outputs.telemetry.v1.TelemetrySpecTargetRefsPatch[];
            /**
             * Optional.
             */
            tracing: outputs.telemetry.v1.TelemetrySpecTracingPatch[];
        }
        /**
         * Optional.
         */
        interface TelemetrySpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Optional.
         */
        interface TelemetrySpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface TelemetrySpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface TelemetrySpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface TelemetrySpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface TelemetrySpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface TelemetrySpecTracing {
            /**
             * Optional.
             */
            customTags: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Controls span reporting.
             */
            disableSpanReporting: boolean;
            /**
             * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
             */
            enableIstioTags: boolean;
            match: outputs.telemetry.v1.TelemetrySpecTracingMatch;
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1.TelemetrySpecTracingProviders[];
            /**
             * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
             */
            randomSamplingPercentage: number;
            useRequestIdForTraceSampling: boolean;
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
            mode: string;
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
            mode: string;
        }
        interface TelemetrySpecTracingPatch {
            /**
             * Optional.
             */
            customTags: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Controls span reporting.
             */
            disableSpanReporting: boolean;
            /**
             * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
             */
            enableIstioTags: boolean;
            match: outputs.telemetry.v1.TelemetrySpecTracingMatchPatch;
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1.TelemetrySpecTracingProvidersPatch[];
            /**
             * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
             */
            randomSamplingPercentage: number;
            useRequestIdForTraceSampling: boolean;
        }
        interface TelemetrySpecTracingProviders {
            /**
             * Required.
             */
            name: string;
        }
        interface TelemetrySpecTracingProvidersPatch {
            /**
             * Required.
             */
            name: string;
        }
    }
    namespace v1alpha1 {
        interface Telemetry {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "telemetry.istio.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Telemetry";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.telemetry.v1alpha1.TelemetrySpec;
            status: {
                [key: string]: any;
            };
        }
        /**
         * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
         */
        interface TelemetrySpec {
            /**
             * Optional.
             */
            accessLogging: outputs.telemetry.v1alpha1.TelemetrySpecAccessLogging[];
            /**
             * Optional.
             */
            metrics: outputs.telemetry.v1alpha1.TelemetrySpecMetrics[];
            selector: outputs.telemetry.v1alpha1.TelemetrySpecSelector;
            targetRef: outputs.telemetry.v1alpha1.TelemetrySpecTargetRef;
            /**
             * Optional.
             */
            targetRefs: outputs.telemetry.v1alpha1.TelemetrySpecTargetRefs[];
            /**
             * Optional.
             */
            tracing: outputs.telemetry.v1alpha1.TelemetrySpecTracing[];
        }
        interface TelemetrySpecAccessLogging {
            /**
             * Controls logging.
             */
            disabled: boolean;
            filter: outputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingFilter;
            match: outputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingMatch;
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingProviders[];
        }
        /**
         * Optional.
         */
        interface TelemetrySpecAccessLoggingFilter {
            /**
             * CEL expression for selecting when requests/connections should be logged.
             */
            expression: string;
        }
        /**
         * Optional.
         */
        interface TelemetrySpecAccessLoggingFilterPatch {
            /**
             * CEL expression for selecting when requests/connections should be logged.
             */
            expression: string;
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
            mode: string;
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
            mode: string;
        }
        interface TelemetrySpecAccessLoggingPatch {
            /**
             * Controls logging.
             */
            disabled: boolean;
            filter: outputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingFilterPatch;
            match: outputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingMatchPatch;
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingProvidersPatch[];
        }
        interface TelemetrySpecAccessLoggingProviders {
            /**
             * Required.
             */
            name: string;
        }
        interface TelemetrySpecAccessLoggingProvidersPatch {
            /**
             * Required.
             */
            name: string;
        }
        interface TelemetrySpecMetrics {
            /**
             * Optional.
             */
            overrides: outputs.telemetry.v1alpha1.TelemetrySpecMetricsOverrides[];
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1alpha1.TelemetrySpecMetricsProviders[];
            /**
             * Optional.
             */
            reportingInterval: string;
        }
        interface TelemetrySpecMetricsOverrides {
            /**
             * Optional.
             */
            disabled: boolean;
            match: outputs.telemetry.v1alpha1.TelemetrySpecMetricsOverridesMatch;
            /**
             * Optional.
             */
            tagOverrides: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * Match allows providing the scope of the override.
         */
        interface TelemetrySpecMetricsOverridesMatch {
            /**
             * Allows free-form specification of a metric.
             */
            customMetric: string;
            /**
             * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/).
             *
             * Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
             */
            metric: string;
            /**
             * Controls which mode of metrics generation is selected: `CLIENT`, `SERVER`, or `CLIENT_AND_SERVER`.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode: string;
        }
        /**
         * Match allows providing the scope of the override.
         */
        interface TelemetrySpecMetricsOverridesMatchPatch {
            /**
             * Allows free-form specification of a metric.
             */
            customMetric: string;
            /**
             * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/).
             *
             * Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
             */
            metric: string;
            /**
             * Controls which mode of metrics generation is selected: `CLIENT`, `SERVER`, or `CLIENT_AND_SERVER`.
             *
             * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
             */
            mode: string;
        }
        interface TelemetrySpecMetricsOverridesPatch {
            /**
             * Optional.
             */
            disabled: boolean;
            match: outputs.telemetry.v1alpha1.TelemetrySpecMetricsOverridesMatchPatch;
            /**
             * Optional.
             */
            tagOverrides: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        interface TelemetrySpecMetricsPatch {
            /**
             * Optional.
             */
            overrides: outputs.telemetry.v1alpha1.TelemetrySpecMetricsOverridesPatch[];
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1alpha1.TelemetrySpecMetricsProvidersPatch[];
            /**
             * Optional.
             */
            reportingInterval: string;
        }
        interface TelemetrySpecMetricsProviders {
            /**
             * Required.
             */
            name: string;
        }
        interface TelemetrySpecMetricsProvidersPatch {
            /**
             * Required.
             */
            name: string;
        }
        /**
         * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
         */
        interface TelemetrySpecPatch {
            /**
             * Optional.
             */
            accessLogging: outputs.telemetry.v1alpha1.TelemetrySpecAccessLoggingPatch[];
            /**
             * Optional.
             */
            metrics: outputs.telemetry.v1alpha1.TelemetrySpecMetricsPatch[];
            selector: outputs.telemetry.v1alpha1.TelemetrySpecSelectorPatch;
            targetRef: outputs.telemetry.v1alpha1.TelemetrySpecTargetRefPatch;
            /**
             * Optional.
             */
            targetRefs: outputs.telemetry.v1alpha1.TelemetrySpecTargetRefsPatch[];
            /**
             * Optional.
             */
            tracing: outputs.telemetry.v1alpha1.TelemetrySpecTracingPatch[];
        }
        /**
         * Optional.
         */
        interface TelemetrySpecSelector {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Optional.
         */
        interface TelemetrySpecSelectorPatch {
            /**
             * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface TelemetrySpecTargetRef {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface TelemetrySpecTargetRefPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface TelemetrySpecTargetRefs {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface TelemetrySpecTargetRefsPatch {
            /**
             * group is the group of the target resource.
             */
            group: string;
            /**
             * kind is kind of the target resource.
             */
            kind: string;
            /**
             * name is the name of the target resource.
             */
            name: string;
            /**
             * namespace is the namespace of the referent.
             */
            namespace: string;
        }
        interface TelemetrySpecTracing {
            /**
             * Optional.
             */
            customTags: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Controls span reporting.
             */
            disableSpanReporting: boolean;
            /**
             * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
             */
            enableIstioTags: boolean;
            match: outputs.telemetry.v1alpha1.TelemetrySpecTracingMatch;
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1alpha1.TelemetrySpecTracingProviders[];
            /**
             * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
             */
            randomSamplingPercentage: number;
            useRequestIdForTraceSampling: boolean;
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
            mode: string;
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
            mode: string;
        }
        interface TelemetrySpecTracingPatch {
            /**
             * Optional.
             */
            customTags: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Controls span reporting.
             */
            disableSpanReporting: boolean;
            /**
             * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
             */
            enableIstioTags: boolean;
            match: outputs.telemetry.v1alpha1.TelemetrySpecTracingMatchPatch;
            /**
             * Optional.
             */
            providers: outputs.telemetry.v1alpha1.TelemetrySpecTracingProvidersPatch[];
            /**
             * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
             */
            randomSamplingPercentage: number;
            useRequestIdForTraceSampling: boolean;
        }
        interface TelemetrySpecTracingProviders {
            /**
             * Required.
             */
            name: string;
        }
        interface TelemetrySpecTracingProvidersPatch {
            /**
             * Required.
             */
            name: string;
        }
    }
}
