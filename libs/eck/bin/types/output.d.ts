import * as outputs from "../types/output";
export declare namespace agent {
    namespace v1alpha1 {
        /**
         * Agent is the Schema for the Agents API.
         */
        interface Agent {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "agent.k8s.elastic.co/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Agent";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.agent.v1alpha1.AgentSpec;
            status: outputs.agent.v1alpha1.AgentStatus;
        }
        /**
         * AgentSpec defines the desired state of the Agent
         */
        interface AgentSpec {
            /**
             * Config holds the Agent configuration. At most one of [`Config`, `ConfigRef`] can be specified.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.agent.v1alpha1.AgentSpecConfigRef;
            daemonSet: outputs.agent.v1alpha1.AgentSpecDaemonSet;
            deployment: outputs.agent.v1alpha1.AgentSpecDeployment;
            /**
             * ElasticsearchRefs is a reference to a list of Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single ES cluster is currently supported.
             */
            elasticsearchRefs: outputs.agent.v1alpha1.AgentSpecElasticsearchRefs[];
            /**
             * FleetServerEnabled determines whether this Agent will launch Fleet Server. Don't set unless `mode` is set to `fleet`.
             */
            fleetServerEnabled: boolean;
            fleetServerRef: outputs.agent.v1alpha1.AgentSpecFleetServerRef;
            http: outputs.agent.v1alpha1.AgentSpecHttp;
            /**
             * Image is the Agent Docker image to deploy. Version has to match the Agent in the image.
             */
            image: string;
            kibanaRef: outputs.agent.v1alpha1.AgentSpecKibanaRef;
            /**
             * Mode specifies the source of configuration for the Agent. The configuration can be specified locally through `config` or `configRef` (`standalone` mode), or come from Fleet during runtime (`fleet` mode). Defaults to `standalone` mode.
             */
            mode: string;
            /**
             * PolicyID determines into which Agent Policy this Agent will be enrolled. This field will become mandatory in a future release, default policies are deprecated since 8.1.0.
             */
            policyID: string;
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying DaemonSet or Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes Secrets containing sensitive configuration options for the Agent. Secrets data can be then referenced in the Agent config using the Secret's keys or as specified in `Entries` field of each SecureSetting.
             */
            secureSettings: outputs.agent.v1alpha1.AgentSpecSecureSettings[];
            /**
             * ServiceAccountName is used to check access from the current resource to an Elasticsearch resource in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of the Agent.
             */
            version: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Agent configuration. Agent settings must be specified as yaml, under a single "agent.yml" entry. At most one of [`Config`, `ConfigRef`] can be specified.
         */
        interface AgentSpecConfigRef {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Agent configuration. Agent settings must be specified as yaml, under a single "agent.yml" entry. At most one of [`Config`, `ConfigRef`] can be specified.
         */
        interface AgentSpecConfigRefPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * DaemonSet specifies the Agent should be deployed as a DaemonSet, and allows providing its spec. Cannot be used along with `deployment`.
         */
        interface AgentSpecDaemonSet {
            /**
             * PodTemplateSpec describes the data a pod should have when created from a template
             */
            podTemplate: {
                [key: string]: any;
            };
            updateStrategy: outputs.agent.v1alpha1.AgentSpecDaemonSetUpdateStrategy;
        }
        /**
         * DaemonSet specifies the Agent should be deployed as a DaemonSet, and allows providing its spec. Cannot be used along with `deployment`.
         */
        interface AgentSpecDaemonSetPatch {
            /**
             * PodTemplateSpec describes the data a pod should have when created from a template
             */
            podTemplate: {
                [key: string]: any;
            };
            updateStrategy: outputs.agent.v1alpha1.AgentSpecDaemonSetUpdateStrategyPatch;
        }
        /**
         * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
         */
        interface AgentSpecDaemonSetUpdateStrategy {
            rollingUpdate: outputs.agent.v1alpha1.AgentSpecDaemonSetUpdateStrategyRollingUpdate;
            /**
             * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
             */
            type: string;
        }
        /**
         * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
         */
        interface AgentSpecDaemonSetUpdateStrategyPatch {
            rollingUpdate: outputs.agent.v1alpha1.AgentSpecDaemonSetUpdateStrategyRollingUpdatePatch;
            /**
             * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
             */
            type: string;
        }
        /**
         * Rolling update config params. Present only if type = "RollingUpdate". --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be. Same as Deployment `strategy.rollingUpdate`. See https://github.com/kubernetes/kubernetes/issues/35345
         */
        interface AgentSpecDaemonSetUpdateStrategyRollingUpdate {
            /**
             * The maximum number of nodes with an existing available DaemonSet pod that can have an updated DaemonSet pod during during an update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up to a minimum of 1. Default value is 0. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their a new pod created before the old pod is marked as deleted. The update starts by launching new pods on 30% of nodes. Once an updated pod is available (Ready for at least minReadySeconds) the old DaemonSet pod on that node is marked deleted. If the old pod becomes unavailable for any reason (Ready transitions to false, is evicted, or is drained) an updated pod is immediatedly created on that node without considering surge limits. Allowing surge implies the possibility that the resources consumed by the daemonset on any given node can double if the readiness check fails, and so resource intensive daemonsets should take into account that they may cause evictions during disruption.
             */
            maxSurge: number | string;
            /**
             * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0 if MaxSurge is 0 Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
             */
            maxUnavailable: number | string;
        }
        /**
         * Rolling update config params. Present only if type = "RollingUpdate". --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be. Same as Deployment `strategy.rollingUpdate`. See https://github.com/kubernetes/kubernetes/issues/35345
         */
        interface AgentSpecDaemonSetUpdateStrategyRollingUpdatePatch {
            /**
             * The maximum number of nodes with an existing available DaemonSet pod that can have an updated DaemonSet pod during during an update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up to a minimum of 1. Default value is 0. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their a new pod created before the old pod is marked as deleted. The update starts by launching new pods on 30% of nodes. Once an updated pod is available (Ready for at least minReadySeconds) the old DaemonSet pod on that node is marked deleted. If the old pod becomes unavailable for any reason (Ready transitions to false, is evicted, or is drained) an updated pod is immediatedly created on that node without considering surge limits. Allowing surge implies the possibility that the resources consumed by the daemonset on any given node can double if the readiness check fails, and so resource intensive daemonsets should take into account that they may cause evictions during disruption.
             */
            maxSurge: number | string;
            /**
             * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0 if MaxSurge is 0 Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
             */
            maxUnavailable: number | string;
        }
        /**
         * Deployment specifies the Agent should be deployed as a Deployment, and allows providing its spec. Cannot be used along with `daemonSet`.
         */
        interface AgentSpecDeployment {
            /**
             * PodTemplateSpec describes the data a pod should have when created from a template
             */
            podTemplate: {
                [key: string]: any;
            };
            replicas: number;
            strategy: outputs.agent.v1alpha1.AgentSpecDeploymentStrategy;
        }
        /**
         * Deployment specifies the Agent should be deployed as a Deployment, and allows providing its spec. Cannot be used along with `daemonSet`.
         */
        interface AgentSpecDeploymentPatch {
            /**
             * PodTemplateSpec describes the data a pod should have when created from a template
             */
            podTemplate: {
                [key: string]: any;
            };
            replicas: number;
            strategy: outputs.agent.v1alpha1.AgentSpecDeploymentStrategyPatch;
        }
        /**
         * DeploymentStrategy describes how to replace existing pods with new ones.
         */
        interface AgentSpecDeploymentStrategy {
            rollingUpdate: outputs.agent.v1alpha1.AgentSpecDeploymentStrategyRollingUpdate;
            /**
             * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
             */
            type: string;
        }
        /**
         * DeploymentStrategy describes how to replace existing pods with new ones.
         */
        interface AgentSpecDeploymentStrategyPatch {
            rollingUpdate: outputs.agent.v1alpha1.AgentSpecDeploymentStrategyRollingUpdatePatch;
            /**
             * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
             */
            type: string;
        }
        /**
         * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
         */
        interface AgentSpecDeploymentStrategyRollingUpdate {
            /**
             * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
             */
            maxSurge: number | string;
            /**
             * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
             */
            maxUnavailable: number | string;
        }
        /**
         * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
         */
        interface AgentSpecDeploymentStrategyRollingUpdatePatch {
            /**
             * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
             */
            maxSurge: number | string;
            /**
             * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
             */
            maxUnavailable: number | string;
        }
        interface AgentSpecElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            outputName: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        interface AgentSpecElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            outputName: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * FleetServerRef is a reference to Fleet Server that this Agent should connect to to obtain it's configuration. Don't set unless `mode` is set to `fleet`.
         */
        interface AgentSpecFleetServerRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * FleetServerRef is a reference to Fleet Server that this Agent should connect to to obtain it's configuration. Don't set unless `mode` is set to `fleet`.
         */
        interface AgentSpecFleetServerRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * HTTP holds the HTTP layer configuration for the Agent in Fleet mode with Fleet Server enabled.
         */
        interface AgentSpecHttp {
            service: outputs.agent.v1alpha1.AgentSpecHttpService;
            tls: outputs.agent.v1alpha1.AgentSpecHttpTls;
        }
        /**
         * HTTP holds the HTTP layer configuration for the Agent in Fleet mode with Fleet Server enabled.
         */
        interface AgentSpecHttpPatch {
            service: outputs.agent.v1alpha1.AgentSpecHttpServicePatch;
            tls: outputs.agent.v1alpha1.AgentSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface AgentSpecHttpService {
            metadata: outputs.agent.v1alpha1.AgentSpecHttpServiceMetadata;
            spec: outputs.agent.v1alpha1.AgentSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface AgentSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface AgentSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface AgentSpecHttpServicePatch {
            metadata: outputs.agent.v1alpha1.AgentSpecHttpServiceMetadataPatch;
            spec: outputs.agent.v1alpha1.AgentSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface AgentSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.agent.v1alpha1.AgentSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.agent.v1alpha1.AgentSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface AgentSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.agent.v1alpha1.AgentSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.agent.v1alpha1.AgentSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface AgentSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface AgentSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface AgentSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.agent.v1alpha1.AgentSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface AgentSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface AgentSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface AgentSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.agent.v1alpha1.AgentSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface AgentSpecHttpTls {
            certificate: outputs.agent.v1alpha1.AgentSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.agent.v1alpha1.AgentSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface AgentSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface AgentSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface AgentSpecHttpTlsPatch {
            certificate: outputs.agent.v1alpha1.AgentSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.agent.v1alpha1.AgentSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface AgentSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.agent.v1alpha1.AgentSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface AgentSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.agent.v1alpha1.AgentSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface AgentSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface AgentSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * KibanaRef is a reference to Kibana where Fleet should be set up and this Agent should be enrolled. Don't set unless `mode` is set to `fleet`.
         */
        interface AgentSpecKibanaRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * KibanaRef is a reference to Kibana where Fleet should be set up and this Agent should be enrolled. Don't set unless `mode` is set to `fleet`.
         */
        interface AgentSpecKibanaRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * AgentSpec defines the desired state of the Agent
         */
        interface AgentSpecPatch {
            /**
             * Config holds the Agent configuration. At most one of [`Config`, `ConfigRef`] can be specified.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.agent.v1alpha1.AgentSpecConfigRefPatch;
            daemonSet: outputs.agent.v1alpha1.AgentSpecDaemonSetPatch;
            deployment: outputs.agent.v1alpha1.AgentSpecDeploymentPatch;
            /**
             * ElasticsearchRefs is a reference to a list of Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single ES cluster is currently supported.
             */
            elasticsearchRefs: outputs.agent.v1alpha1.AgentSpecElasticsearchRefsPatch[];
            /**
             * FleetServerEnabled determines whether this Agent will launch Fleet Server. Don't set unless `mode` is set to `fleet`.
             */
            fleetServerEnabled: boolean;
            fleetServerRef: outputs.agent.v1alpha1.AgentSpecFleetServerRefPatch;
            http: outputs.agent.v1alpha1.AgentSpecHttpPatch;
            /**
             * Image is the Agent Docker image to deploy. Version has to match the Agent in the image.
             */
            image: string;
            kibanaRef: outputs.agent.v1alpha1.AgentSpecKibanaRefPatch;
            /**
             * Mode specifies the source of configuration for the Agent. The configuration can be specified locally through `config` or `configRef` (`standalone` mode), or come from Fleet during runtime (`fleet` mode). Defaults to `standalone` mode.
             */
            mode: string;
            /**
             * PolicyID determines into which Agent Policy this Agent will be enrolled. This field will become mandatory in a future release, default policies are deprecated since 8.1.0.
             */
            policyID: string;
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying DaemonSet or Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes Secrets containing sensitive configuration options for the Agent. Secrets data can be then referenced in the Agent config using the Secret's keys or as specified in `Entries` field of each SecureSetting.
             */
            secureSettings: outputs.agent.v1alpha1.AgentSpecSecureSettingsPatch[];
            /**
             * ServiceAccountName is used to check access from the current resource to an Elasticsearch resource in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of the Agent.
             */
            version: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface AgentSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.agent.v1alpha1.AgentSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface AgentSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface AgentSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface AgentSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.agent.v1alpha1.AgentSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * AgentStatus defines the observed state of the Agent
         */
        interface AgentStatus {
            availableNodes: number;
            /**
             * AssociationStatusMap is the map of association's namespaced name string to its AssociationStatus. For resources that have a single Association of a given type (for ex. single ES reference), this map contains a single entry.
             */
            elasticsearchAssociationsStatus: {
                [key: string]: string;
            };
            expectedNodes: number;
            /**
             * AssociationStatus is the status of an association resource.
             */
            fleetServerAssociationStatus: string;
            health: string;
            /**
             * AssociationStatus is the status of an association resource.
             */
            kibanaAssociationStatus: string;
            /**
             * ObservedGeneration is the most recent generation observed for this Elastic Agent. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Elastic Agent controller has not yet processed the changes contained in the Elastic Agent specification.
             */
            observedGeneration: number;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * AgentStatus defines the observed state of the Agent
         */
        interface AgentStatusPatch {
            availableNodes: number;
            /**
             * AssociationStatusMap is the map of association's namespaced name string to its AssociationStatus. For resources that have a single Association of a given type (for ex. single ES reference), this map contains a single entry.
             */
            elasticsearchAssociationsStatus: {
                [key: string]: string;
            };
            expectedNodes: number;
            /**
             * AssociationStatus is the status of an association resource.
             */
            fleetServerAssociationStatus: string;
            health: string;
            /**
             * AssociationStatus is the status of an association resource.
             */
            kibanaAssociationStatus: string;
            /**
             * ObservedGeneration is the most recent generation observed for this Elastic Agent. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Elastic Agent controller has not yet processed the changes contained in the Elastic Agent specification.
             */
            observedGeneration: number;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
    }
}
export declare namespace apm {
    namespace v1 {
        /**
         * ApmServer represents an APM Server resource in a Kubernetes cluster.
         */
        interface ApmServer {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "apm.k8s.elastic.co/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ApmServer";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.apm.v1.ApmServerSpec;
            status: outputs.apm.v1.ApmServerStatus;
        }
        /**
         * ApmServerSpec holds the specification of an APM Server.
         */
        interface ApmServerSpec {
            /**
             * Config holds the APM Server configuration. See: https://www.elastic.co/guide/en/apm/server/current/configuring-howto-apm-server.html
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of APM Server instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.apm.v1.ApmServerSpecElasticsearchRef;
            http: outputs.apm.v1.ApmServerSpecHttp;
            /**
             * Image is the APM Server Docker image to deploy.
             */
            image: string;
            kibanaRef: outputs.apm.v1.ApmServerSpecKibanaRef;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the APM Server pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for APM Server.
             */
            secureSettings: outputs.apm.v1.ApmServerSpecSecureSettings[];
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of the APM Server.
             */
            version: string;
        }
        /**
         * ElasticsearchRef is a reference to the output Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface ApmServerSpecElasticsearchRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ElasticsearchRef is a reference to the output Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface ApmServerSpecElasticsearchRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * HTTP holds the HTTP layer configuration for the APM Server resource.
         */
        interface ApmServerSpecHttp {
            service: outputs.apm.v1.ApmServerSpecHttpService;
            tls: outputs.apm.v1.ApmServerSpecHttpTls;
        }
        /**
         * HTTP holds the HTTP layer configuration for the APM Server resource.
         */
        interface ApmServerSpecHttpPatch {
            service: outputs.apm.v1.ApmServerSpecHttpServicePatch;
            tls: outputs.apm.v1.ApmServerSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ApmServerSpecHttpService {
            metadata: outputs.apm.v1.ApmServerSpecHttpServiceMetadata;
            spec: outputs.apm.v1.ApmServerSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ApmServerSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ApmServerSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ApmServerSpecHttpServicePatch {
            metadata: outputs.apm.v1.ApmServerSpecHttpServiceMetadataPatch;
            spec: outputs.apm.v1.ApmServerSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ApmServerSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.apm.v1.ApmServerSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.apm.v1.ApmServerSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ApmServerSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.apm.v1.ApmServerSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.apm.v1.ApmServerSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ApmServerSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ApmServerSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ApmServerSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.apm.v1.ApmServerSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ApmServerSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ApmServerSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ApmServerSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.apm.v1.ApmServerSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ApmServerSpecHttpTls {
            certificate: outputs.apm.v1.ApmServerSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.apm.v1.ApmServerSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ApmServerSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ApmServerSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ApmServerSpecHttpTlsPatch {
            certificate: outputs.apm.v1.ApmServerSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.apm.v1.ApmServerSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ApmServerSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.apm.v1.ApmServerSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ApmServerSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.apm.v1.ApmServerSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ApmServerSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ApmServerSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * KibanaRef is a reference to a Kibana instance running in the same Kubernetes cluster. It allows APM agent central configuration management in Kibana.
         */
        interface ApmServerSpecKibanaRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * KibanaRef is a reference to a Kibana instance running in the same Kubernetes cluster. It allows APM agent central configuration management in Kibana.
         */
        interface ApmServerSpecKibanaRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ApmServerSpec holds the specification of an APM Server.
         */
        interface ApmServerSpecPatch {
            /**
             * Config holds the APM Server configuration. See: https://www.elastic.co/guide/en/apm/server/current/configuring-howto-apm-server.html
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of APM Server instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.apm.v1.ApmServerSpecElasticsearchRefPatch;
            http: outputs.apm.v1.ApmServerSpecHttpPatch;
            /**
             * Image is the APM Server Docker image to deploy.
             */
            image: string;
            kibanaRef: outputs.apm.v1.ApmServerSpecKibanaRefPatch;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the APM Server pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for APM Server.
             */
            secureSettings: outputs.apm.v1.ApmServerSpecSecureSettingsPatch[];
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of the APM Server.
             */
            version: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface ApmServerSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.apm.v1.ApmServerSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface ApmServerSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface ApmServerSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface ApmServerSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.apm.v1.ApmServerSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ApmServerStatus defines the observed state of ApmServer
         */
        interface ApmServerStatus {
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * ElasticsearchAssociationStatus is the status of any auto-linking to Elasticsearch clusters.
             */
            elasticsearchAssociationStatus: string;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * KibanaAssociationStatus is the status of any auto-linking to Kibana.
             */
            kibanaAssociationStatus: string;
            /**
             * ObservedGeneration represents the .metadata.generation that the status is based upon. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the APM Server controller has not yet processed the changes contained in the APM Server specification.
             */
            observedGeneration: number;
            /**
             * SecretTokenSecretName is the name of the Secret that contains the secret token
             */
            secretTokenSecret: string;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * ExternalService is the name of the service the agents should connect to.
             */
            service: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * ApmServerStatus defines the observed state of ApmServer
         */
        interface ApmServerStatusPatch {
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * ElasticsearchAssociationStatus is the status of any auto-linking to Elasticsearch clusters.
             */
            elasticsearchAssociationStatus: string;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * KibanaAssociationStatus is the status of any auto-linking to Kibana.
             */
            kibanaAssociationStatus: string;
            /**
             * ObservedGeneration represents the .metadata.generation that the status is based upon. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the APM Server controller has not yet processed the changes contained in the APM Server specification.
             */
            observedGeneration: number;
            /**
             * SecretTokenSecretName is the name of the Secret that contains the secret token
             */
            secretTokenSecret: string;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * ExternalService is the name of the service the agents should connect to.
             */
            service: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
    }
    namespace v1alpha1 {
        /**
         * to not break compatibility when upgrading from previous versions of the CRD
         */
        interface ApmServer {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "apm.k8s.elastic.co/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ApmServer";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
        }
    }
    namespace v1beta1 {
        /**
         * ApmServer represents an APM Server resource in a Kubernetes cluster.
         */
        interface ApmServer {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "apm.k8s.elastic.co/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ApmServer";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.apm.v1beta1.ApmServerSpec;
            status: outputs.apm.v1beta1.ApmServerStatus;
        }
        /**
         * ApmServerSpec holds the specification of an APM Server.
         */
        interface ApmServerSpec {
            /**
             * Config holds the APM Server configuration. See: https://www.elastic.co/guide/en/apm/server/current/configuring-howto-apm-server.html
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of APM Server instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.apm.v1beta1.ApmServerSpecElasticsearchRef;
            http: outputs.apm.v1beta1.ApmServerSpecHttp;
            /**
             * Image is the APM Server Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the APM Server pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for APM Server.
             */
            secureSettings: outputs.apm.v1beta1.ApmServerSpecSecureSettings[];
            /**
             * Version of the APM Server.
             */
            version: string;
        }
        /**
         * ElasticsearchRef is a reference to the output Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface ApmServerSpecElasticsearchRef {
            /**
             * Name of the Kubernetes object.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
        }
        /**
         * ElasticsearchRef is a reference to the output Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface ApmServerSpecElasticsearchRefPatch {
            /**
             * Name of the Kubernetes object.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
        }
        /**
         * HTTP holds the HTTP layer configuration for the APM Server resource.
         */
        interface ApmServerSpecHttp {
            service: outputs.apm.v1beta1.ApmServerSpecHttpService;
            tls: outputs.apm.v1beta1.ApmServerSpecHttpTls;
        }
        /**
         * HTTP holds the HTTP layer configuration for the APM Server resource.
         */
        interface ApmServerSpecHttpPatch {
            service: outputs.apm.v1beta1.ApmServerSpecHttpServicePatch;
            tls: outputs.apm.v1beta1.ApmServerSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ApmServerSpecHttpService {
            metadata: outputs.apm.v1beta1.ApmServerSpecHttpServiceMetadata;
            spec: outputs.apm.v1beta1.ApmServerSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ApmServerSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ApmServerSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ApmServerSpecHttpServicePatch {
            metadata: outputs.apm.v1beta1.ApmServerSpecHttpServiceMetadataPatch;
            spec: outputs.apm.v1beta1.ApmServerSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ApmServerSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.apm.v1beta1.ApmServerSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.apm.v1beta1.ApmServerSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ApmServerSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.apm.v1beta1.ApmServerSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.apm.v1beta1.ApmServerSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ApmServerSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ApmServerSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ApmServerSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.apm.v1beta1.ApmServerSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ApmServerSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ApmServerSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ApmServerSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.apm.v1beta1.ApmServerSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ApmServerSpecHttpTls {
            certificate: outputs.apm.v1beta1.ApmServerSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.apm.v1beta1.ApmServerSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ApmServerSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ApmServerSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ApmServerSpecHttpTlsPatch {
            certificate: outputs.apm.v1beta1.ApmServerSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.apm.v1beta1.ApmServerSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ApmServerSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.apm.v1beta1.ApmServerSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ApmServerSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.apm.v1beta1.ApmServerSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ApmServerSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ApmServerSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * ApmServerSpec holds the specification of an APM Server.
         */
        interface ApmServerSpecPatch {
            /**
             * Config holds the APM Server configuration. See: https://www.elastic.co/guide/en/apm/server/current/configuring-howto-apm-server.html
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of APM Server instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.apm.v1beta1.ApmServerSpecElasticsearchRefPatch;
            http: outputs.apm.v1beta1.ApmServerSpecHttpPatch;
            /**
             * Image is the APM Server Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the APM Server pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for APM Server.
             */
            secureSettings: outputs.apm.v1beta1.ApmServerSpecSecureSettingsPatch[];
            /**
             * Version of the APM Server.
             */
            version: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface ApmServerSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.apm.v1beta1.ApmServerSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface ApmServerSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface ApmServerSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface ApmServerSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.apm.v1beta1.ApmServerSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ApmServerStatus defines the observed state of ApmServer
         */
        interface ApmServerStatus {
            /**
             * Association is the status of any auto-linking to Elasticsearch clusters.
             */
            associationStatus: string;
            availableNodes: number;
            /**
             * ApmServerHealth expresses the status of the Apm Server instances.
             */
            health: string;
            /**
             * SecretTokenSecretName is the name of the Secret that contains the secret token
             */
            secretTokenSecret: string;
            /**
             * ExternalService is the name of the service the agents should connect to.
             */
            service: string;
        }
        /**
         * ApmServerStatus defines the observed state of ApmServer
         */
        interface ApmServerStatusPatch {
            /**
             * Association is the status of any auto-linking to Elasticsearch clusters.
             */
            associationStatus: string;
            availableNodes: number;
            /**
             * ApmServerHealth expresses the status of the Apm Server instances.
             */
            health: string;
            /**
             * SecretTokenSecretName is the name of the Secret that contains the secret token
             */
            secretTokenSecret: string;
            /**
             * ExternalService is the name of the service the agents should connect to.
             */
            service: string;
        }
    }
}
export declare namespace autoscaling {
    namespace v1 {
    }
    namespace v1alpha1 {
        /**
         * ElasticsearchAutoscaler represents an ElasticsearchAutoscaler resource in a Kubernetes cluster.
         */
        interface ElasticsearchAutoscaler {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "autoscaling.k8s.elastic.co/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ElasticsearchAutoscaler";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpec;
            status: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatus;
        }
        /**
         * ElasticsearchAutoscalerSpec holds the specification of an Elasticsearch autoscaler resource.
         */
        interface ElasticsearchAutoscalerSpec {
            elasticsearchRef: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecElasticsearchRef;
            policies: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPolicies[];
            /**
             * PollingPeriod is the period at which to synchronize with the Elasticsearch autoscaling API.
             */
            pollingPeriod: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster that exists in the same namespace.
         */
        interface ElasticsearchAutoscalerSpecElasticsearchRef {
            /**
             * Name is the name of the Elasticsearch resource to scale automatically.
             */
            name: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster that exists in the same namespace.
         */
        interface ElasticsearchAutoscalerSpecElasticsearchRefPatch {
            /**
             * Name is the name of the Elasticsearch resource to scale automatically.
             */
            name: string;
        }
        /**
         * ElasticsearchAutoscalerSpec holds the specification of an Elasticsearch autoscaler resource.
         */
        interface ElasticsearchAutoscalerSpecPatch {
            elasticsearchRef: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecElasticsearchRefPatch;
            policies: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesPatch[];
            /**
             * PollingPeriod is the period at which to synchronize with the Elasticsearch autoscaling API.
             */
            pollingPeriod: string;
        }
        /**
         * AutoscalingPolicySpec holds a named autoscaling policy and the associated resources limits (cpu, memory, storage).
         */
        interface ElasticsearchAutoscalerSpecPolicies {
            /**
             * Deciders allow the user to override default settings for autoscaling deciders.
             */
            deciders: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Name identifies the autoscaling policy in the autoscaling specification.
             */
            name: string;
            resources: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResources;
            /**
             * An autoscaling policy must target a unique set of roles.
             */
            roles: string[];
        }
        /**
         * AutoscalingPolicySpec holds a named autoscaling policy and the associated resources limits (cpu, memory, storage).
         */
        interface ElasticsearchAutoscalerSpecPoliciesPatch {
            /**
             * Deciders allow the user to override default settings for autoscaling deciders.
             */
            deciders: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Name identifies the autoscaling policy in the autoscaling specification.
             */
            name: string;
            resources: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesPatch;
            /**
             * An autoscaling policy must target a unique set of roles.
             */
            roles: string[];
        }
        /**
         * AutoscalingResources model the limits, submitted by the user, for the supported resources in an autoscaling policy. Only the node count range is mandatory. For other resources, a limit range is required only if the Elasticsearch autoscaling capacity API returns a requirement for a given resource. For example, the memory limit range is only required if the autoscaling API response contains a memory requirement. If there is no limit range for a resource, and if that resource is not mandatory, then the resources in the NodeSets managed by the autoscaling policy are left untouched.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResources {
            cpu: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesCpu;
            memory: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesMemory;
            nodeCount: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesNodeCount;
            storage: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesStorage;
        }
        /**
         * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesCpu {
            /**
             * Max represents the upper limit for the resources managed by the autoscaler.
             */
            max: number | string;
            /**
             * Min represents the lower limit for the resources managed by the autoscaler.
             */
            min: number | string;
            /**
             * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
             */
            requestsToLimitsRatio: number | string;
        }
        /**
         * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesCpuPatch {
            /**
             * Max represents the upper limit for the resources managed by the autoscaler.
             */
            max: number | string;
            /**
             * Min represents the lower limit for the resources managed by the autoscaler.
             */
            min: number | string;
            /**
             * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
             */
            requestsToLimitsRatio: number | string;
        }
        /**
         * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesMemory {
            /**
             * Max represents the upper limit for the resources managed by the autoscaler.
             */
            max: number | string;
            /**
             * Min represents the lower limit for the resources managed by the autoscaler.
             */
            min: number | string;
            /**
             * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
             */
            requestsToLimitsRatio: number | string;
        }
        /**
         * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesMemoryPatch {
            /**
             * Max represents the upper limit for the resources managed by the autoscaler.
             */
            max: number | string;
            /**
             * Min represents the lower limit for the resources managed by the autoscaler.
             */
            min: number | string;
            /**
             * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
             */
            requestsToLimitsRatio: number | string;
        }
        /**
         * NodeCountRange is used to model the minimum and the maximum number of nodes over all the NodeSets managed by the same autoscaling policy.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesNodeCount {
            /**
             * Max represents the maximum number of nodes in a tier.
             */
            max: number;
            /**
             * Min represents the minimum number of nodes in a tier.
             */
            min: number;
        }
        /**
         * NodeCountRange is used to model the minimum and the maximum number of nodes over all the NodeSets managed by the same autoscaling policy.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesNodeCountPatch {
            /**
             * Max represents the maximum number of nodes in a tier.
             */
            max: number;
            /**
             * Min represents the minimum number of nodes in a tier.
             */
            min: number;
        }
        /**
         * AutoscalingResources model the limits, submitted by the user, for the supported resources in an autoscaling policy. Only the node count range is mandatory. For other resources, a limit range is required only if the Elasticsearch autoscaling capacity API returns a requirement for a given resource. For example, the memory limit range is only required if the autoscaling API response contains a memory requirement. If there is no limit range for a resource, and if that resource is not mandatory, then the resources in the NodeSets managed by the autoscaling policy are left untouched.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesPatch {
            cpu: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesCpuPatch;
            memory: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesMemoryPatch;
            nodeCount: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesNodeCountPatch;
            storage: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerSpecPoliciesResourcesStoragePatch;
        }
        /**
         * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesStorage {
            /**
             * Max represents the upper limit for the resources managed by the autoscaler.
             */
            max: number | string;
            /**
             * Min represents the lower limit for the resources managed by the autoscaler.
             */
            min: number | string;
            /**
             * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
             */
            requestsToLimitsRatio: number | string;
        }
        /**
         * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
         */
        interface ElasticsearchAutoscalerSpecPoliciesResourcesStoragePatch {
            /**
             * Max represents the upper limit for the resources managed by the autoscaler.
             */
            max: number | string;
            /**
             * Min represents the lower limit for the resources managed by the autoscaler.
             */
            min: number | string;
            /**
             * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
             */
            requestsToLimitsRatio: number | string;
        }
        interface ElasticsearchAutoscalerStatus {
            /**
             * Conditions holds the current service state of the autoscaling controller.
             */
            conditions: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusConditions[];
            /**
             * ObservedGeneration is the last observed generation by the controller.
             */
            observedGeneration: number;
            /**
             * AutoscalingPolicyStatuses is used to expose state messages to user or external system.
             */
            policies: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusPolicies[];
        }
        /**
         * Condition represents Elasticsearch resource's condition. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchAutoscalerStatusConditions {
            lastTransitionTime: string;
            message: string;
            status: string;
            /**
             * ConditionType defines the condition of an Elasticsearch resource.
             */
            type: string;
        }
        /**
         * Condition represents Elasticsearch resource's condition. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchAutoscalerStatusConditionsPatch {
            lastTransitionTime: string;
            message: string;
            status: string;
            /**
             * ConditionType defines the condition of an Elasticsearch resource.
             */
            type: string;
        }
        interface ElasticsearchAutoscalerStatusPatch {
            /**
             * Conditions holds the current service state of the autoscaling controller.
             */
            conditions: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusConditionsPatch[];
            /**
             * ObservedGeneration is the last observed generation by the controller.
             */
            observedGeneration: number;
            /**
             * AutoscalingPolicyStatuses is used to expose state messages to user or external system.
             */
            policies: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusPoliciesPatch[];
        }
        interface ElasticsearchAutoscalerStatusPolicies {
            /**
             * LastModificationTime is the last time the resources have been updated, used by the cooldown algorithm.
             */
            lastModificationTime: string;
            /**
             * Name is the name of the autoscaling policy
             */
            name: string;
            /**
             * NodeSetNodeCount holds the number of nodes for each nodeSet.
             */
            nodeSets: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusPoliciesNodeSets[];
            resources: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusPoliciesResources;
            /**
             * PolicyStates may contain various messages regarding the current state of this autoscaling policy.
             */
            state: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusPoliciesState[];
        }
        /**
         * NodeSetNodeCount models the number of nodes expected in a given NodeSet.
         */
        interface ElasticsearchAutoscalerStatusPoliciesNodeSets {
            /**
             * Name of the Nodeset.
             */
            name: string;
            /**
             * NodeCount is the number of nodes, as computed by the autoscaler, expected in this NodeSet.
             */
            nodeCount: number;
        }
        /**
         * NodeSetNodeCount models the number of nodes expected in a given NodeSet.
         */
        interface ElasticsearchAutoscalerStatusPoliciesNodeSetsPatch {
            /**
             * Name of the Nodeset.
             */
            name: string;
            /**
             * NodeCount is the number of nodes, as computed by the autoscaler, expected in this NodeSet.
             */
            nodeCount: number;
        }
        interface ElasticsearchAutoscalerStatusPoliciesPatch {
            /**
             * LastModificationTime is the last time the resources have been updated, used by the cooldown algorithm.
             */
            lastModificationTime: string;
            /**
             * Name is the name of the autoscaling policy
             */
            name: string;
            /**
             * NodeSetNodeCount holds the number of nodes for each nodeSet.
             */
            nodeSets: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusPoliciesNodeSetsPatch[];
            resources: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusPoliciesResourcesPatch;
            /**
             * PolicyStates may contain various messages regarding the current state of this autoscaling policy.
             */
            state: outputs.autoscaling.v1alpha1.ElasticsearchAutoscalerStatusPoliciesStatePatch[];
        }
        /**
         * ResourcesSpecification holds the resource values common to all the nodeSets managed by a same autoscaling policy. Only the resources managed by the autoscaling controller are saved in the Status.
         */
        interface ElasticsearchAutoscalerStatusPoliciesResources {
            /**
             * ResourceList is a set of (resource name, quantity) pairs.
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * ResourceList is a set of (resource name, quantity) pairs.
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * ResourcesSpecification holds the resource values common to all the nodeSets managed by a same autoscaling policy. Only the resources managed by the autoscaling controller are saved in the Status.
         */
        interface ElasticsearchAutoscalerStatusPoliciesResourcesPatch {
            /**
             * ResourceList is a set of (resource name, quantity) pairs.
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * ResourceList is a set of (resource name, quantity) pairs.
             */
            requests: {
                [key: string]: number | string;
            };
        }
        interface ElasticsearchAutoscalerStatusPoliciesState {
            messages: string[];
            type: string;
        }
        interface ElasticsearchAutoscalerStatusPoliciesStatePatch {
            messages: string[];
            type: string;
        }
    }
}
export declare namespace beat {
    namespace v1beta1 {
        /**
         * Beat is the Schema for the Beats API.
         */
        interface Beat {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "beat.k8s.elastic.co/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Beat";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.beat.v1beta1.BeatSpec;
            status: outputs.beat.v1beta1.BeatStatus;
        }
        /**
         * BeatSpec defines the desired state of a Beat.
         */
        interface BeatSpec {
            /**
             * Config holds the Beat configuration. At most one of [`Config`, `ConfigRef`] can be specified.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.beat.v1beta1.BeatSpecConfigRef;
            daemonSet: outputs.beat.v1beta1.BeatSpecDaemonSet;
            deployment: outputs.beat.v1beta1.BeatSpecDeployment;
            elasticsearchRef: outputs.beat.v1beta1.BeatSpecElasticsearchRef;
            /**
             * Image is the Beat Docker image to deploy. Version and Type have to match the Beat in the image.
             */
            image: string;
            kibanaRef: outputs.beat.v1beta1.BeatSpecKibanaRef;
            monitoring: outputs.beat.v1beta1.BeatSpecMonitoring;
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying DaemonSet or Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes Secrets containing sensitive configuration options for the Beat. Secrets data can be then referenced in the Beat config using the Secret's keys or as specified in `Entries` field of each SecureSetting.
             */
            secureSettings: outputs.beat.v1beta1.BeatSpecSecureSettings[];
            /**
             * ServiceAccountName is used to check access from the current resource to Elasticsearch resource in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Type is the type of the Beat to deploy (filebeat, metricbeat, heartbeat, auditbeat, journalbeat, packetbeat, and so on). Any string can be used, but well-known types will have the image field defaulted and have the appropriate Elasticsearch roles created automatically. It also allows for dashboard setup when combined with a `KibanaRef`.
             */
            type: string;
            /**
             * Version of the Beat.
             */
            version: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Beat configuration. Beat settings must be specified as yaml, under a single "beat.yml" entry. At most one of [`Config`, `ConfigRef`] can be specified.
         */
        interface BeatSpecConfigRef {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Beat configuration. Beat settings must be specified as yaml, under a single "beat.yml" entry. At most one of [`Config`, `ConfigRef`] can be specified.
         */
        interface BeatSpecConfigRefPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * DaemonSet specifies the Beat should be deployed as a DaemonSet, and allows providing its spec. Cannot be used along with `deployment`. If both are absent a default for the Type is used.
         */
        interface BeatSpecDaemonSet {
            /**
             * PodTemplateSpec describes the data a pod should have when created from a template
             */
            podTemplate: {
                [key: string]: any;
            };
            updateStrategy: outputs.beat.v1beta1.BeatSpecDaemonSetUpdateStrategy;
        }
        /**
         * DaemonSet specifies the Beat should be deployed as a DaemonSet, and allows providing its spec. Cannot be used along with `deployment`. If both are absent a default for the Type is used.
         */
        interface BeatSpecDaemonSetPatch {
            /**
             * PodTemplateSpec describes the data a pod should have when created from a template
             */
            podTemplate: {
                [key: string]: any;
            };
            updateStrategy: outputs.beat.v1beta1.BeatSpecDaemonSetUpdateStrategyPatch;
        }
        /**
         * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
         */
        interface BeatSpecDaemonSetUpdateStrategy {
            rollingUpdate: outputs.beat.v1beta1.BeatSpecDaemonSetUpdateStrategyRollingUpdate;
            /**
             * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
             */
            type: string;
        }
        /**
         * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
         */
        interface BeatSpecDaemonSetUpdateStrategyPatch {
            rollingUpdate: outputs.beat.v1beta1.BeatSpecDaemonSetUpdateStrategyRollingUpdatePatch;
            /**
             * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
             */
            type: string;
        }
        /**
         * Rolling update config params. Present only if type = "RollingUpdate". --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be. Same as Deployment `strategy.rollingUpdate`. See https://github.com/kubernetes/kubernetes/issues/35345
         */
        interface BeatSpecDaemonSetUpdateStrategyRollingUpdate {
            /**
             * The maximum number of nodes with an existing available DaemonSet pod that can have an updated DaemonSet pod during during an update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up to a minimum of 1. Default value is 0. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their a new pod created before the old pod is marked as deleted. The update starts by launching new pods on 30% of nodes. Once an updated pod is available (Ready for at least minReadySeconds) the old DaemonSet pod on that node is marked deleted. If the old pod becomes unavailable for any reason (Ready transitions to false, is evicted, or is drained) an updated pod is immediatedly created on that node without considering surge limits. Allowing surge implies the possibility that the resources consumed by the daemonset on any given node can double if the readiness check fails, and so resource intensive daemonsets should take into account that they may cause evictions during disruption.
             */
            maxSurge: number | string;
            /**
             * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0 if MaxSurge is 0 Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
             */
            maxUnavailable: number | string;
        }
        /**
         * Rolling update config params. Present only if type = "RollingUpdate". --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be. Same as Deployment `strategy.rollingUpdate`. See https://github.com/kubernetes/kubernetes/issues/35345
         */
        interface BeatSpecDaemonSetUpdateStrategyRollingUpdatePatch {
            /**
             * The maximum number of nodes with an existing available DaemonSet pod that can have an updated DaemonSet pod during during an update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up to a minimum of 1. Default value is 0. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their a new pod created before the old pod is marked as deleted. The update starts by launching new pods on 30% of nodes. Once an updated pod is available (Ready for at least minReadySeconds) the old DaemonSet pod on that node is marked deleted. If the old pod becomes unavailable for any reason (Ready transitions to false, is evicted, or is drained) an updated pod is immediatedly created on that node without considering surge limits. Allowing surge implies the possibility that the resources consumed by the daemonset on any given node can double if the readiness check fails, and so resource intensive daemonsets should take into account that they may cause evictions during disruption.
             */
            maxSurge: number | string;
            /**
             * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0 if MaxSurge is 0 Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
             */
            maxUnavailable: number | string;
        }
        /**
         * Deployment specifies the Beat should be deployed as a Deployment, and allows providing its spec. Cannot be used along with `daemonSet`. If both are absent a default for the Type is used.
         */
        interface BeatSpecDeployment {
            /**
             * PodTemplateSpec describes the data a pod should have when created from a template
             */
            podTemplate: {
                [key: string]: any;
            };
            replicas: number;
            strategy: outputs.beat.v1beta1.BeatSpecDeploymentStrategy;
        }
        /**
         * Deployment specifies the Beat should be deployed as a Deployment, and allows providing its spec. Cannot be used along with `daemonSet`. If both are absent a default for the Type is used.
         */
        interface BeatSpecDeploymentPatch {
            /**
             * PodTemplateSpec describes the data a pod should have when created from a template
             */
            podTemplate: {
                [key: string]: any;
            };
            replicas: number;
            strategy: outputs.beat.v1beta1.BeatSpecDeploymentStrategyPatch;
        }
        /**
         * DeploymentStrategy describes how to replace existing pods with new ones.
         */
        interface BeatSpecDeploymentStrategy {
            rollingUpdate: outputs.beat.v1beta1.BeatSpecDeploymentStrategyRollingUpdate;
            /**
             * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
             */
            type: string;
        }
        /**
         * DeploymentStrategy describes how to replace existing pods with new ones.
         */
        interface BeatSpecDeploymentStrategyPatch {
            rollingUpdate: outputs.beat.v1beta1.BeatSpecDeploymentStrategyRollingUpdatePatch;
            /**
             * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
             */
            type: string;
        }
        /**
         * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
         */
        interface BeatSpecDeploymentStrategyRollingUpdate {
            /**
             * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
             */
            maxSurge: number | string;
            /**
             * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
             */
            maxUnavailable: number | string;
        }
        /**
         * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
         */
        interface BeatSpecDeploymentStrategyRollingUpdatePatch {
            /**
             * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
             */
            maxSurge: number | string;
            /**
             * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
             */
            maxUnavailable: number | string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface BeatSpecElasticsearchRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface BeatSpecElasticsearchRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * KibanaRef is a reference to a Kibana instance running in the same Kubernetes cluster. It allows automatic setup of dashboards and visualizations.
         */
        interface BeatSpecKibanaRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * KibanaRef is a reference to a Kibana instance running in the same Kubernetes cluster. It allows automatic setup of dashboards and visualizations.
         */
        interface BeatSpecKibanaRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Monitoring enables you to collect and ship logs and metrics for this Beat. Metricbeat and/or Filebeat sidecars are configured and send monitoring data to an Elasticsearch monitoring cluster running in the same Kubernetes cluster.
         */
        interface BeatSpecMonitoring {
            logs: outputs.beat.v1beta1.BeatSpecMonitoringLogs;
            metrics: outputs.beat.v1beta1.BeatSpecMonitoringMetrics;
        }
        /**
         * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
         */
        interface BeatSpecMonitoringLogs {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.beat.v1beta1.BeatSpecMonitoringLogsElasticsearchRefs[];
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface BeatSpecMonitoringLogsElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface BeatSpecMonitoringLogsElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
         */
        interface BeatSpecMonitoringLogsPatch {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.beat.v1beta1.BeatSpecMonitoringLogsElasticsearchRefsPatch[];
        }
        /**
         * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
         */
        interface BeatSpecMonitoringMetrics {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.beat.v1beta1.BeatSpecMonitoringMetricsElasticsearchRefs[];
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface BeatSpecMonitoringMetricsElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface BeatSpecMonitoringMetricsElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
         */
        interface BeatSpecMonitoringMetricsPatch {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.beat.v1beta1.BeatSpecMonitoringMetricsElasticsearchRefsPatch[];
        }
        /**
         * Monitoring enables you to collect and ship logs and metrics for this Beat. Metricbeat and/or Filebeat sidecars are configured and send monitoring data to an Elasticsearch monitoring cluster running in the same Kubernetes cluster.
         */
        interface BeatSpecMonitoringPatch {
            logs: outputs.beat.v1beta1.BeatSpecMonitoringLogsPatch;
            metrics: outputs.beat.v1beta1.BeatSpecMonitoringMetricsPatch;
        }
        /**
         * BeatSpec defines the desired state of a Beat.
         */
        interface BeatSpecPatch {
            /**
             * Config holds the Beat configuration. At most one of [`Config`, `ConfigRef`] can be specified.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.beat.v1beta1.BeatSpecConfigRefPatch;
            daemonSet: outputs.beat.v1beta1.BeatSpecDaemonSetPatch;
            deployment: outputs.beat.v1beta1.BeatSpecDeploymentPatch;
            elasticsearchRef: outputs.beat.v1beta1.BeatSpecElasticsearchRefPatch;
            /**
             * Image is the Beat Docker image to deploy. Version and Type have to match the Beat in the image.
             */
            image: string;
            kibanaRef: outputs.beat.v1beta1.BeatSpecKibanaRefPatch;
            monitoring: outputs.beat.v1beta1.BeatSpecMonitoringPatch;
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying DaemonSet or Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes Secrets containing sensitive configuration options for the Beat. Secrets data can be then referenced in the Beat config using the Secret's keys or as specified in `Entries` field of each SecureSetting.
             */
            secureSettings: outputs.beat.v1beta1.BeatSpecSecureSettingsPatch[];
            /**
             * ServiceAccountName is used to check access from the current resource to Elasticsearch resource in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Type is the type of the Beat to deploy (filebeat, metricbeat, heartbeat, auditbeat, journalbeat, packetbeat, and so on). Any string can be used, but well-known types will have the image field defaulted and have the appropriate Elasticsearch roles created automatically. It also allows for dashboard setup when combined with a `KibanaRef`.
             */
            type: string;
            /**
             * Version of the Beat.
             */
            version: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface BeatSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.beat.v1beta1.BeatSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface BeatSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface BeatSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface BeatSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.beat.v1beta1.BeatSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * BeatStatus defines the observed state of a Beat.
         */
        interface BeatStatus {
            availableNodes: number;
            /**
             * AssociationStatus is the status of an association resource.
             */
            elasticsearchAssociationStatus: string;
            expectedNodes: number;
            health: string;
            /**
             * AssociationStatus is the status of an association resource.
             */
            kibanaAssociationStatus: string;
            /**
             * AssociationStatusMap is the map of association's namespaced name string to its AssociationStatus. For resources that have a single Association of a given type (for ex. single ES reference), this map contains a single entry.
             */
            monitoringAssociationStatus: {
                [key: string]: string;
            };
            /**
             * ObservedGeneration represents the .metadata.generation that the status is based upon. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Beats controller has not yet processed the changes contained in the Beats specification.
             */
            observedGeneration: number;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * BeatStatus defines the observed state of a Beat.
         */
        interface BeatStatusPatch {
            availableNodes: number;
            /**
             * AssociationStatus is the status of an association resource.
             */
            elasticsearchAssociationStatus: string;
            expectedNodes: number;
            health: string;
            /**
             * AssociationStatus is the status of an association resource.
             */
            kibanaAssociationStatus: string;
            /**
             * AssociationStatusMap is the map of association's namespaced name string to its AssociationStatus. For resources that have a single Association of a given type (for ex. single ES reference), this map contains a single entry.
             */
            monitoringAssociationStatus: {
                [key: string]: string;
            };
            /**
             * ObservedGeneration represents the .metadata.generation that the status is based upon. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Beats controller has not yet processed the changes contained in the Beats specification.
             */
            observedGeneration: number;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
    }
}
export declare namespace elasticsearch {
    namespace v1 {
        /**
         * Elasticsearch represents an Elasticsearch resource in a Kubernetes cluster.
         */
        interface Elasticsearch {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "elasticsearch.k8s.elastic.co/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Elasticsearch";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.elasticsearch.v1.ElasticsearchSpec;
            status: outputs.elasticsearch.v1.ElasticsearchStatus;
        }
        /**
         * ElasticsearchSpec holds the specification of an Elasticsearch cluster.
         */
        interface ElasticsearchSpec {
            auth: outputs.elasticsearch.v1.ElasticsearchSpecAuth;
            http: outputs.elasticsearch.v1.ElasticsearchSpecHttp;
            /**
             * Image is the Elasticsearch Docker image to deploy.
             */
            image: string;
            monitoring: outputs.elasticsearch.v1.ElasticsearchSpecMonitoring;
            /**
             * NodeSets allow specifying groups of Elasticsearch nodes sharing the same configuration and Pod templates.
             */
            nodeSets: outputs.elasticsearch.v1.ElasticsearchSpecNodeSets[];
            podDisruptionBudget: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudget;
            /**
             * RemoteClusters enables you to establish uni-directional connections to a remote Elasticsearch cluster.
             */
            remoteClusters: outputs.elasticsearch.v1.ElasticsearchSpecRemoteClusters[];
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying StatefulSets.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Elasticsearch.
             */
            secureSettings: outputs.elasticsearch.v1.ElasticsearchSpecSecureSettings[];
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. a remote Elasticsearch cluster) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            transport: outputs.elasticsearch.v1.ElasticsearchSpecTransport;
            updateStrategy: outputs.elasticsearch.v1.ElasticsearchSpecUpdateStrategy;
            /**
             * Version of Elasticsearch.
             */
            version: string;
            /**
             * VolumeClaimDeletePolicy sets the policy for handling deletion of PersistentVolumeClaims for all NodeSets. Possible values are DeleteOnScaledownOnly and DeleteOnScaledownAndClusterDeletion. Defaults to DeleteOnScaledownAndClusterDeletion.
             */
            volumeClaimDeletePolicy: string;
        }
        /**
         * Auth contains user authentication and authorization security settings for Elasticsearch.
         */
        interface ElasticsearchSpecAuth {
            /**
             * FileRealm to propagate to the Elasticsearch cluster.
             */
            fileRealm: outputs.elasticsearch.v1.ElasticsearchSpecAuthFileRealm[];
            /**
             * Roles to propagate to the Elasticsearch cluster.
             */
            roles: outputs.elasticsearch.v1.ElasticsearchSpecAuthRoles[];
        }
        /**
         * FileRealmSource references users to create in the Elasticsearch cluster.
         */
        interface ElasticsearchSpecAuthFileRealm {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * FileRealmSource references users to create in the Elasticsearch cluster.
         */
        interface ElasticsearchSpecAuthFileRealmPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Auth contains user authentication and authorization security settings for Elasticsearch.
         */
        interface ElasticsearchSpecAuthPatch {
            /**
             * FileRealm to propagate to the Elasticsearch cluster.
             */
            fileRealm: outputs.elasticsearch.v1.ElasticsearchSpecAuthFileRealmPatch[];
            /**
             * Roles to propagate to the Elasticsearch cluster.
             */
            roles: outputs.elasticsearch.v1.ElasticsearchSpecAuthRolesPatch[];
        }
        /**
         * RoleSource references roles to create in the Elasticsearch cluster.
         */
        interface ElasticsearchSpecAuthRoles {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * RoleSource references roles to create in the Elasticsearch cluster.
         */
        interface ElasticsearchSpecAuthRolesPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * HTTP holds HTTP layer settings for Elasticsearch.
         */
        interface ElasticsearchSpecHttp {
            service: outputs.elasticsearch.v1.ElasticsearchSpecHttpService;
            tls: outputs.elasticsearch.v1.ElasticsearchSpecHttpTls;
        }
        /**
         * HTTP holds HTTP layer settings for Elasticsearch.
         */
        interface ElasticsearchSpecHttpPatch {
            service: outputs.elasticsearch.v1.ElasticsearchSpecHttpServicePatch;
            tls: outputs.elasticsearch.v1.ElasticsearchSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ElasticsearchSpecHttpService {
            metadata: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceMetadata;
            spec: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ElasticsearchSpecHttpServicePatch {
            metadata: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceMetadataPatch;
            spec: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ElasticsearchSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ElasticsearchSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ElasticsearchSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ElasticsearchSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ElasticsearchSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ElasticsearchSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ElasticsearchSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ElasticsearchSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.elasticsearch.v1.ElasticsearchSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ElasticsearchSpecHttpTls {
            certificate: outputs.elasticsearch.v1.ElasticsearchSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.elasticsearch.v1.ElasticsearchSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ElasticsearchSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ElasticsearchSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ElasticsearchSpecHttpTlsPatch {
            certificate: outputs.elasticsearch.v1.ElasticsearchSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.elasticsearch.v1.ElasticsearchSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ElasticsearchSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.elasticsearch.v1.ElasticsearchSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ElasticsearchSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.elasticsearch.v1.ElasticsearchSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ElasticsearchSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ElasticsearchSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * Monitoring enables you to collect and ship log and monitoring data of this Elasticsearch cluster. See https://www.elastic.co/guide/en/elasticsearch/reference/current/monitor-elasticsearch-cluster.html. Metricbeat and Filebeat are deployed in the same Pod as sidecars and each one sends data to one or two different Elasticsearch monitoring clusters running in the same Kubernetes cluster.
         */
        interface ElasticsearchSpecMonitoring {
            logs: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringLogs;
            metrics: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringMetrics;
        }
        /**
         * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
         */
        interface ElasticsearchSpecMonitoringLogs {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringLogsElasticsearchRefs[];
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface ElasticsearchSpecMonitoringLogsElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface ElasticsearchSpecMonitoringLogsElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
         */
        interface ElasticsearchSpecMonitoringLogsPatch {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringLogsElasticsearchRefsPatch[];
        }
        /**
         * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
         */
        interface ElasticsearchSpecMonitoringMetrics {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringMetricsElasticsearchRefs[];
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface ElasticsearchSpecMonitoringMetricsElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface ElasticsearchSpecMonitoringMetricsElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
         */
        interface ElasticsearchSpecMonitoringMetricsPatch {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringMetricsElasticsearchRefsPatch[];
        }
        /**
         * Monitoring enables you to collect and ship log and monitoring data of this Elasticsearch cluster. See https://www.elastic.co/guide/en/elasticsearch/reference/current/monitor-elasticsearch-cluster.html. Metricbeat and Filebeat are deployed in the same Pod as sidecars and each one sends data to one or two different Elasticsearch monitoring clusters running in the same Kubernetes cluster.
         */
        interface ElasticsearchSpecMonitoringPatch {
            logs: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringLogsPatch;
            metrics: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringMetricsPatch;
        }
        /**
         * NodeSet is the specification for a group of Elasticsearch nodes sharing the same configuration and a Pod template.
         */
        interface ElasticsearchSpecNodeSets {
            /**
             * Config holds the Elasticsearch configuration.
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of Elasticsearch nodes to deploy. If the node set is managed by an autoscaling policy the initial value is automatically set by the autoscaling controller.
             */
            count: number;
            /**
             * Name of this set of nodes. Becomes a part of the Elasticsearch node.name setting.
             */
            name: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Pods belonging to this NodeSet.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * VolumeClaimTemplates is a list of persistent volume claims to be used by each Pod in this NodeSet. Every claim in this list must have a matching volumeMount in one of the containers defined in the PodTemplate. Items defined here take precedence over any default claims added by the operator with the same name.
             */
            volumeClaimTemplates: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplates[];
        }
        /**
         * NodeSet is the specification for a group of Elasticsearch nodes sharing the same configuration and a Pod template.
         */
        interface ElasticsearchSpecNodeSetsPatch {
            /**
             * Config holds the Elasticsearch configuration.
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of Elasticsearch nodes to deploy. If the node set is managed by an autoscaling policy the initial value is automatically set by the autoscaling controller.
             */
            count: number;
            /**
             * Name of this set of nodes. Becomes a part of the Elasticsearch node.name setting.
             */
            name: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Pods belonging to this NodeSet.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * VolumeClaimTemplates is a list of persistent volume claims to be used by each Pod in this NodeSet. Every claim in this list must have a matching volumeMount in one of the containers defined in the PodTemplate. Items defined here take precedence over any default claims added by the operator with the same name.
             */
            volumeClaimTemplates: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesPatch[];
        }
        /**
         * PersistentVolumeClaim is a user's request for and claim to a persistent volume
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplates {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: string;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            metadata: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesMetadata;
            spec: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpec;
        }
        /**
         * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * PersistentVolumeClaim is a user's request for and claim to a persistent volume
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesPatch {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: string;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            metadata: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesMetadataPatch;
            spec: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecPatch;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpec {
            /**
             * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes: string[];
            dataSource: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSource;
            dataSourceRef: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourceRef;
            resources: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResources;
            selector: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelector;
            /**
             * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName: string;
            /**
             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName: string;
        }
        /**
         * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSource {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
        }
        /**
         * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourcePatch {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourceRef {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace: string;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourceRefPatch {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace: string;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecPatch {
            /**
             * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes: string[];
            dataSource: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourcePatch;
            dataSourceRef: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourceRefPatch;
            resources: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesPatch;
            selector: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorPatch;
            /**
             * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName: string;
            /**
             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName: string;
        }
        /**
         * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *  This field is immutable. It can only be set for containers.
             */
            claims: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesClaims[];
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesClaims {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
             */
            name: string;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesClaimsPatch {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
             */
            name: string;
        }
        /**
         * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *  This field is immutable. It can only be set for containers.
             */
            claims: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesClaimsPatch[];
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * ElasticsearchSpec holds the specification of an Elasticsearch cluster.
         */
        interface ElasticsearchSpecPatch {
            auth: outputs.elasticsearch.v1.ElasticsearchSpecAuthPatch;
            http: outputs.elasticsearch.v1.ElasticsearchSpecHttpPatch;
            /**
             * Image is the Elasticsearch Docker image to deploy.
             */
            image: string;
            monitoring: outputs.elasticsearch.v1.ElasticsearchSpecMonitoringPatch;
            /**
             * NodeSets allow specifying groups of Elasticsearch nodes sharing the same configuration and Pod templates.
             */
            nodeSets: outputs.elasticsearch.v1.ElasticsearchSpecNodeSetsPatch[];
            podDisruptionBudget: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetPatch;
            /**
             * RemoteClusters enables you to establish uni-directional connections to a remote Elasticsearch cluster.
             */
            remoteClusters: outputs.elasticsearch.v1.ElasticsearchSpecRemoteClustersPatch[];
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying StatefulSets.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Elasticsearch.
             */
            secureSettings: outputs.elasticsearch.v1.ElasticsearchSpecSecureSettingsPatch[];
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. a remote Elasticsearch cluster) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            transport: outputs.elasticsearch.v1.ElasticsearchSpecTransportPatch;
            updateStrategy: outputs.elasticsearch.v1.ElasticsearchSpecUpdateStrategyPatch;
            /**
             * Version of Elasticsearch.
             */
            version: string;
            /**
             * VolumeClaimDeletePolicy sets the policy for handling deletion of PersistentVolumeClaims for all NodeSets. Possible values are DeleteOnScaledownOnly and DeleteOnScaledownAndClusterDeletion. Defaults to DeleteOnScaledownAndClusterDeletion.
             */
            volumeClaimDeletePolicy: string;
        }
        /**
         * PodDisruptionBudget provides access to the default Pod disruption budget for the Elasticsearch cluster. The default budget doesn't allow any Pod to be removed in case the cluster is not green or if there is only one node of type `data` or `master`. In all other cases the default PodDisruptionBudget sets `minUnavailable` equal to the total number of nodes minus 1. To disable, set `PodDisruptionBudget` to the empty value (`{}` in YAML).
         */
        interface ElasticsearchSpecPodDisruptionBudget {
            metadata: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetMetadata;
            spec: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetSpec;
        }
        /**
         * ObjectMeta is the metadata of the PDB. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecPodDisruptionBudgetMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the PDB. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecPodDisruptionBudgetMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * PodDisruptionBudget provides access to the default Pod disruption budget for the Elasticsearch cluster. The default budget doesn't allow any Pod to be removed in case the cluster is not green or if there is only one node of type `data` or `master`. In all other cases the default PodDisruptionBudget sets `minUnavailable` equal to the total number of nodes minus 1. To disable, set `PodDisruptionBudget` to the empty value (`{}` in YAML).
         */
        interface ElasticsearchSpecPodDisruptionBudgetPatch {
            metadata: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetMetadataPatch;
            spec: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetSpecPatch;
        }
        /**
         * Spec is the specification of the PDB.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpec {
            /**
             * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
             */
            maxUnavailable: number | string;
            /**
             * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
             */
            minAvailable: number | string;
            selector: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetSpecSelector;
            /**
             * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".
             *  Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.
             *  IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
             *  AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
             *  Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.
             *  This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
             */
            unhealthyPodEvictionPolicy: string;
        }
        /**
         * Spec is the specification of the PDB.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecPatch {
            /**
             * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
             */
            maxUnavailable: number | string;
            /**
             * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
             */
            minAvailable: number | string;
            selector: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetSpecSelectorPatch;
            /**
             * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".
             *  Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.
             *  IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
             *  AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
             *  Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.
             *  This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
             */
            unhealthyPodEvictionPolicy: string;
        }
        /**
         * Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetSpecSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.elasticsearch.v1.ElasticsearchSpecPodDisruptionBudgetSpecSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * RemoteCluster declares a remote Elasticsearch cluster connection.
         */
        interface ElasticsearchSpecRemoteClusters {
            elasticsearchRef: outputs.elasticsearch.v1.ElasticsearchSpecRemoteClustersElasticsearchRef;
            /**
             * Name is the name of the remote cluster as it is set in the Elasticsearch settings. The name is expected to be unique for each remote clusters.
             */
            name: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running within the same k8s cluster.
         */
        interface ElasticsearchSpecRemoteClustersElasticsearchRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running within the same k8s cluster.
         */
        interface ElasticsearchSpecRemoteClustersElasticsearchRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * RemoteCluster declares a remote Elasticsearch cluster connection.
         */
        interface ElasticsearchSpecRemoteClustersPatch {
            elasticsearchRef: outputs.elasticsearch.v1.ElasticsearchSpecRemoteClustersElasticsearchRefPatch;
            /**
             * Name is the name of the remote cluster as it is set in the Elasticsearch settings. The name is expected to be unique for each remote clusters.
             */
            name: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface ElasticsearchSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.elasticsearch.v1.ElasticsearchSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface ElasticsearchSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface ElasticsearchSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface ElasticsearchSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.elasticsearch.v1.ElasticsearchSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Transport holds transport layer settings for Elasticsearch.
         */
        interface ElasticsearchSpecTransport {
            service: outputs.elasticsearch.v1.ElasticsearchSpecTransportService;
            tls: outputs.elasticsearch.v1.ElasticsearchSpecTransportTls;
        }
        /**
         * Transport holds transport layer settings for Elasticsearch.
         */
        interface ElasticsearchSpecTransportPatch {
            service: outputs.elasticsearch.v1.ElasticsearchSpecTransportServicePatch;
            tls: outputs.elasticsearch.v1.ElasticsearchSpecTransportTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ElasticsearchSpecTransportService {
            metadata: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceMetadata;
            spec: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecTransportServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecTransportServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ElasticsearchSpecTransportServicePatch {
            metadata: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceMetadataPatch;
            spec: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ElasticsearchSpecTransportServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ElasticsearchSpecTransportServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ElasticsearchSpecTransportServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ElasticsearchSpecTransportServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ElasticsearchSpecTransportServiceSpecSessionAffinityConfig {
            clientIP: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ElasticsearchSpecTransportServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ElasticsearchSpecTransportServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ElasticsearchSpecTransportServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.elasticsearch.v1.ElasticsearchSpecTransportServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS on the transport layer.
         */
        interface ElasticsearchSpecTransportTls {
            certificate: outputs.elasticsearch.v1.ElasticsearchSpecTransportTlsCertificate;
            certificateAuthorities: outputs.elasticsearch.v1.ElasticsearchSpecTransportTlsCertificateAuthorities;
            /**
             * OtherNameSuffix when defined will be prefixed with the Pod name and used as the common name, and the first DNSName, as well as an OtherName required by Elasticsearch in the Subject Alternative Name extension of each Elasticsearch node's transport TLS certificate. Example: if set to "node.cluster.local", the generated certificate will have its otherName set to "<pod_name>.node.cluster.local".
             */
            otherNameSuffix: string;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated node transport TLS certificates.
             */
            subjectAltNames: outputs.elasticsearch.v1.ElasticsearchSpecTransportTlsSubjectAltNames[];
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the CA certificate and private key for generating node certificates. The referenced secret should contain the following:
         *  - `ca.crt`: The CA certificate in PEM format. - `ca.key`: The private key for the CA certificate in PEM format.
         */
        interface ElasticsearchSpecTransportTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * CertificateAuthorities is a reference to a config map that contains one or more x509 certificates for trusted authorities in PEM format. The certificates need to be in a file called `ca.crt`.
         */
        interface ElasticsearchSpecTransportTlsCertificateAuthorities {
            configMapName: string;
        }
        /**
         * CertificateAuthorities is a reference to a config map that contains one or more x509 certificates for trusted authorities in PEM format. The certificates need to be in a file called `ca.crt`.
         */
        interface ElasticsearchSpecTransportTlsCertificateAuthoritiesPatch {
            configMapName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the CA certificate and private key for generating node certificates. The referenced secret should contain the following:
         *  - `ca.crt`: The CA certificate in PEM format. - `ca.key`: The private key for the CA certificate in PEM format.
         */
        interface ElasticsearchSpecTransportTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS on the transport layer.
         */
        interface ElasticsearchSpecTransportTlsPatch {
            certificate: outputs.elasticsearch.v1.ElasticsearchSpecTransportTlsCertificatePatch;
            certificateAuthorities: outputs.elasticsearch.v1.ElasticsearchSpecTransportTlsCertificateAuthoritiesPatch;
            /**
             * OtherNameSuffix when defined will be prefixed with the Pod name and used as the common name, and the first DNSName, as well as an OtherName required by Elasticsearch in the Subject Alternative Name extension of each Elasticsearch node's transport TLS certificate. Example: if set to "node.cluster.local", the generated certificate will have its otherName set to "<pod_name>.node.cluster.local".
             */
            otherNameSuffix: string;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated node transport TLS certificates.
             */
            subjectAltNames: outputs.elasticsearch.v1.ElasticsearchSpecTransportTlsSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ElasticsearchSpecTransportTlsSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ElasticsearchSpecTransportTlsSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * UpdateStrategy specifies how updates to the cluster should be performed.
         */
        interface ElasticsearchSpecUpdateStrategy {
            changeBudget: outputs.elasticsearch.v1.ElasticsearchSpecUpdateStrategyChangeBudget;
        }
        /**
         * ChangeBudget defines the constraints to consider when applying changes to the Elasticsearch cluster.
         */
        interface ElasticsearchSpecUpdateStrategyChangeBudget {
            /**
             * MaxSurge is the maximum number of new Pods that can be created exceeding the original number of Pods defined in the specification. MaxSurge is only taken into consideration when scaling up. Setting a negative value will disable the restriction. Defaults to unbounded if not specified.
             */
            maxSurge: number;
            /**
             * MaxUnavailable is the maximum number of Pods that can be unavailable (not ready) during the update due to circumstances under the control of the operator. Setting a negative value will disable this restriction. Defaults to 1 if not specified.
             */
            maxUnavailable: number;
        }
        /**
         * ChangeBudget defines the constraints to consider when applying changes to the Elasticsearch cluster.
         */
        interface ElasticsearchSpecUpdateStrategyChangeBudgetPatch {
            /**
             * MaxSurge is the maximum number of new Pods that can be created exceeding the original number of Pods defined in the specification. MaxSurge is only taken into consideration when scaling up. Setting a negative value will disable the restriction. Defaults to unbounded if not specified.
             */
            maxSurge: number;
            /**
             * MaxUnavailable is the maximum number of Pods that can be unavailable (not ready) during the update due to circumstances under the control of the operator. Setting a negative value will disable this restriction. Defaults to 1 if not specified.
             */
            maxUnavailable: number;
        }
        /**
         * UpdateStrategy specifies how updates to the cluster should be performed.
         */
        interface ElasticsearchSpecUpdateStrategyPatch {
            changeBudget: outputs.elasticsearch.v1.ElasticsearchSpecUpdateStrategyChangeBudgetPatch;
        }
        /**
         * ElasticsearchStatus represents the observed state of Elasticsearch.
         */
        interface ElasticsearchStatus {
            /**
             * AvailableNodes is the number of available instances.
             */
            availableNodes: number;
            /**
             * Conditions holds the current service state of an Elasticsearch cluster. **This API is in technical preview and may be changed or removed in a future release.**
             */
            conditions: outputs.elasticsearch.v1.ElasticsearchStatusConditions[];
            /**
             * ElasticsearchHealth is the health of the cluster as returned by the health API.
             */
            health: string;
            inProgressOperations: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperations;
            /**
             * AssociationStatusMap is the map of association's namespaced name string to its AssociationStatus. For resources that have a single Association of a given type (for ex. single ES reference), this map contains a single entry.
             */
            monitoringAssociationStatus: {
                [key: string]: string;
            };
            /**
             * ObservedGeneration is the most recent generation observed for this Elasticsearch cluster. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Elasticsearch controller has not yet processed the changes contained in the Elasticsearch specification.
             */
            observedGeneration: number;
            /**
             * ElasticsearchOrchestrationPhase is the phase Elasticsearch is in from the controller point of view.
             */
            phase: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * Condition represents Elasticsearch resource's condition. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusConditions {
            lastTransitionTime: string;
            message: string;
            status: string;
            /**
             * ConditionType defines the condition of an Elasticsearch resource.
             */
            type: string;
        }
        /**
         * Condition represents Elasticsearch resource's condition. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusConditionsPatch {
            lastTransitionTime: string;
            message: string;
            status: string;
            /**
             * ConditionType defines the condition of an Elasticsearch resource.
             */
            type: string;
        }
        /**
         * InProgressOperations represents changes being applied by the operator to the Elasticsearch cluster. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperations {
            downscale: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsDownscale;
            upgrade: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsUpgrade;
            upscale: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsUpscale;
        }
        /**
         * DownscaleOperation provides details about in progress downscale operations. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsDownscale {
            lastUpdatedTime: string;
            /**
             * Nodes which are scheduled to be removed from the cluster.
             */
            nodes: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsDownscaleNodes[];
            /**
             * Stalled represents a state where no progress can be made. It is only available for clusters managed with the Elasticsearch shutdown API.
             */
            stalled: boolean;
        }
        /**
         * DownscaledNode provides an overview of in progress changes applied by the operator to remove Elasticsearch nodes from the cluster. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsDownscaleNodes {
            /**
             * Explanation provides details about an in progress node shutdown. It is only available for clusters managed with the Elasticsearch shutdown API.
             */
            explanation: string;
            /**
             * Name of the Elasticsearch node that should be removed.
             */
            name: string;
            /**
             * Shutdown status as returned by the Elasticsearch shutdown API. If the Elasticsearch shutdown API is not available, the shutdown status is then inferred from the remaining shards on the nodes, as observed by the operator.
             */
            shutdownStatus: string;
        }
        /**
         * DownscaledNode provides an overview of in progress changes applied by the operator to remove Elasticsearch nodes from the cluster. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsDownscaleNodesPatch {
            /**
             * Explanation provides details about an in progress node shutdown. It is only available for clusters managed with the Elasticsearch shutdown API.
             */
            explanation: string;
            /**
             * Name of the Elasticsearch node that should be removed.
             */
            name: string;
            /**
             * Shutdown status as returned by the Elasticsearch shutdown API. If the Elasticsearch shutdown API is not available, the shutdown status is then inferred from the remaining shards on the nodes, as observed by the operator.
             */
            shutdownStatus: string;
        }
        /**
         * DownscaleOperation provides details about in progress downscale operations. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsDownscalePatch {
            lastUpdatedTime: string;
            /**
             * Nodes which are scheduled to be removed from the cluster.
             */
            nodes: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsDownscaleNodesPatch[];
            /**
             * Stalled represents a state where no progress can be made. It is only available for clusters managed with the Elasticsearch shutdown API.
             */
            stalled: boolean;
        }
        /**
         * InProgressOperations represents changes being applied by the operator to the Elasticsearch cluster. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsPatch {
            downscale: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsDownscalePatch;
            upgrade: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsUpgradePatch;
            upscale: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsUpscalePatch;
        }
        /**
         * UpgradeOperation provides an overview of the pending or in progress changes applied by the operator to update the Elasticsearch nodes in the cluster. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsUpgrade {
            lastUpdatedTime: string;
            /**
             * Nodes that must be restarted for upgrade.
             */
            nodes: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsUpgradeNodes[];
        }
        /**
         * UpgradedNode provides details about the status of nodes which are expected to be updated. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsUpgradeNodes {
            /**
             * Optional message to explain why a node may not be immediately restarted for upgrade.
             */
            message: string;
            /**
             * Name of the Elasticsearch node that should be upgraded.
             */
            name: string;
            /**
             * Predicate is the name of the predicate currently preventing this node from being deleted for an upgrade.
             */
            predicate: string;
            /**
             * Status states if the node is either in the process of being deleted for an upgrade, or blocked by a predicate or another condition stated in the message field.
             */
            status: string;
        }
        /**
         * UpgradedNode provides details about the status of nodes which are expected to be updated. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsUpgradeNodesPatch {
            /**
             * Optional message to explain why a node may not be immediately restarted for upgrade.
             */
            message: string;
            /**
             * Name of the Elasticsearch node that should be upgraded.
             */
            name: string;
            /**
             * Predicate is the name of the predicate currently preventing this node from being deleted for an upgrade.
             */
            predicate: string;
            /**
             * Status states if the node is either in the process of being deleted for an upgrade, or blocked by a predicate or another condition stated in the message field.
             */
            status: string;
        }
        /**
         * UpgradeOperation provides an overview of the pending or in progress changes applied by the operator to update the Elasticsearch nodes in the cluster. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsUpgradePatch {
            lastUpdatedTime: string;
            /**
             * Nodes that must be restarted for upgrade.
             */
            nodes: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsUpgradeNodesPatch[];
        }
        /**
         * UpscaleOperation provides an overview of in progress changes applied by the operator to add Elasticsearch nodes to the cluster. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsUpscale {
            lastUpdatedTime: string;
            /**
             * Nodes expected to be added by the operator.
             */
            nodes: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsUpscaleNodes[];
        }
        interface ElasticsearchStatusInProgressOperationsUpscaleNodes {
            /**
             * Optional message to explain why a node may not be immediately added.
             */
            message: string;
            /**
             * Name of the Elasticsearch node that should be added to the cluster.
             */
            name: string;
            /**
             * NewNodeStatus states if a new node is being created, or if the upscale is delayed.
             */
            status: string;
        }
        interface ElasticsearchStatusInProgressOperationsUpscaleNodesPatch {
            /**
             * Optional message to explain why a node may not be immediately added.
             */
            message: string;
            /**
             * Name of the Elasticsearch node that should be added to the cluster.
             */
            name: string;
            /**
             * NewNodeStatus states if a new node is being created, or if the upscale is delayed.
             */
            status: string;
        }
        /**
         * UpscaleOperation provides an overview of in progress changes applied by the operator to add Elasticsearch nodes to the cluster. **This API is in technical preview and may be changed or removed in a future release.**
         */
        interface ElasticsearchStatusInProgressOperationsUpscalePatch {
            lastUpdatedTime: string;
            /**
             * Nodes expected to be added by the operator.
             */
            nodes: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsUpscaleNodesPatch[];
        }
        /**
         * ElasticsearchStatus represents the observed state of Elasticsearch.
         */
        interface ElasticsearchStatusPatch {
            /**
             * AvailableNodes is the number of available instances.
             */
            availableNodes: number;
            /**
             * Conditions holds the current service state of an Elasticsearch cluster. **This API is in technical preview and may be changed or removed in a future release.**
             */
            conditions: outputs.elasticsearch.v1.ElasticsearchStatusConditionsPatch[];
            /**
             * ElasticsearchHealth is the health of the cluster as returned by the health API.
             */
            health: string;
            inProgressOperations: outputs.elasticsearch.v1.ElasticsearchStatusInProgressOperationsPatch;
            /**
             * AssociationStatusMap is the map of association's namespaced name string to its AssociationStatus. For resources that have a single Association of a given type (for ex. single ES reference), this map contains a single entry.
             */
            monitoringAssociationStatus: {
                [key: string]: string;
            };
            /**
             * ObservedGeneration is the most recent generation observed for this Elasticsearch cluster. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Elasticsearch controller has not yet processed the changes contained in the Elasticsearch specification.
             */
            observedGeneration: number;
            /**
             * ElasticsearchOrchestrationPhase is the phase Elasticsearch is in from the controller point of view.
             */
            phase: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
    }
    namespace v1alpha1 {
        /**
         * to not break compatibility when upgrading from previous versions of the CRD
         */
        interface Elasticsearch {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "elasticsearch.k8s.elastic.co/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Elasticsearch";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
        }
    }
    namespace v1beta1 {
        /**
         * Elasticsearch represents an Elasticsearch resource in a Kubernetes cluster.
         */
        interface Elasticsearch {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "elasticsearch.k8s.elastic.co/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Elasticsearch";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.elasticsearch.v1beta1.ElasticsearchSpec;
            status: outputs.elasticsearch.v1beta1.ElasticsearchStatus;
        }
        /**
         * ElasticsearchSpec holds the specification of an Elasticsearch cluster.
         */
        interface ElasticsearchSpec {
            http: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttp;
            /**
             * Image is the Elasticsearch Docker image to deploy.
             */
            image: string;
            /**
             * NodeSets allow specifying groups of Elasticsearch nodes sharing the same configuration and Pod templates.
             */
            nodeSets: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSets[];
            podDisruptionBudget: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudget;
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Elasticsearch.
             */
            secureSettings: outputs.elasticsearch.v1beta1.ElasticsearchSpecSecureSettings[];
            updateStrategy: outputs.elasticsearch.v1beta1.ElasticsearchSpecUpdateStrategy;
            /**
             * Version of Elasticsearch.
             */
            version: string;
        }
        /**
         * HTTP holds HTTP layer settings for Elasticsearch.
         */
        interface ElasticsearchSpecHttp {
            service: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpService;
            tls: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpTls;
        }
        /**
         * HTTP holds HTTP layer settings for Elasticsearch.
         */
        interface ElasticsearchSpecHttpPatch {
            service: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServicePatch;
            tls: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ElasticsearchSpecHttpService {
            metadata: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceMetadata;
            spec: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ElasticsearchSpecHttpServicePatch {
            metadata: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceMetadataPatch;
            spec: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ElasticsearchSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ElasticsearchSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ElasticsearchSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ElasticsearchSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ElasticsearchSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ElasticsearchSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ElasticsearchSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ElasticsearchSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ElasticsearchSpecHttpTls {
            certificate: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ElasticsearchSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ElasticsearchSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ElasticsearchSpecHttpTlsPatch {
            certificate: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ElasticsearchSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ElasticsearchSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ElasticsearchSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ElasticsearchSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * NodeSet is the specification for a group of Elasticsearch nodes sharing the same configuration and a Pod template.
         */
        interface ElasticsearchSpecNodeSets {
            /**
             * Config holds the Elasticsearch configuration.
             */
            config: {
                [key: string]: string;
            };
            /**
             * Count of Elasticsearch nodes to deploy.
             */
            count: number;
            /**
             * Name of this set of nodes. Becomes a part of the Elasticsearch node.name setting.
             */
            name: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Pods belonging to this NodeSet.
             */
            podTemplate: {
                [key: string]: string;
            };
            /**
             * VolumeClaimTemplates is a list of persistent volume claims to be used by each Pod in this NodeSet. Every claim in this list must have a matching volumeMount in one of the containers defined in the PodTemplate. Items defined here take precedence over any default claims added by the operator with the same name.
             */
            volumeClaimTemplates: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplates[];
        }
        /**
         * NodeSet is the specification for a group of Elasticsearch nodes sharing the same configuration and a Pod template.
         */
        interface ElasticsearchSpecNodeSetsPatch {
            /**
             * Config holds the Elasticsearch configuration.
             */
            config: {
                [key: string]: string;
            };
            /**
             * Count of Elasticsearch nodes to deploy.
             */
            count: number;
            /**
             * Name of this set of nodes. Becomes a part of the Elasticsearch node.name setting.
             */
            name: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Pods belonging to this NodeSet.
             */
            podTemplate: {
                [key: string]: string;
            };
            /**
             * VolumeClaimTemplates is a list of persistent volume claims to be used by each Pod in this NodeSet. Every claim in this list must have a matching volumeMount in one of the containers defined in the PodTemplate. Items defined here take precedence over any default claims added by the operator with the same name.
             */
            volumeClaimTemplates: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesPatch[];
        }
        /**
         * PersistentVolumeClaim is a user's request for and claim to a persistent volume
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplates {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: string;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            metadata: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesMetadata;
            spec: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpec;
        }
        /**
         * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * PersistentVolumeClaim is a user's request for and claim to a persistent volume
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesPatch {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: string;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            metadata: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesMetadataPatch;
            spec: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecPatch;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpec {
            /**
             * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes: string[];
            dataSource: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSource;
            dataSourceRef: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourceRef;
            resources: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResources;
            selector: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelector;
            /**
             * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName: string;
            /**
             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName: string;
        }
        /**
         * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSource {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
        }
        /**
         * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourcePatch {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourceRef {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace: string;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourceRefPatch {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace: string;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecPatch {
            /**
             * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes: string[];
            dataSource: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourcePatch;
            dataSourceRef: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecDataSourceRefPatch;
            resources: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesPatch;
            selector: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorPatch;
            /**
             * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName: string;
            /**
             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName: string;
        }
        /**
         * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *  This field is immutable. It can only be set for containers.
             */
            claims: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesClaims[];
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesClaims {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
             */
            name: string;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesClaimsPatch {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
             */
            name: string;
        }
        /**
         * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *  This field is immutable. It can only be set for containers.
             */
            claims: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecResourcesClaimsPatch[];
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * ElasticsearchSpec holds the specification of an Elasticsearch cluster.
         */
        interface ElasticsearchSpecPatch {
            http: outputs.elasticsearch.v1beta1.ElasticsearchSpecHttpPatch;
            /**
             * Image is the Elasticsearch Docker image to deploy.
             */
            image: string;
            /**
             * NodeSets allow specifying groups of Elasticsearch nodes sharing the same configuration and Pod templates.
             */
            nodeSets: outputs.elasticsearch.v1beta1.ElasticsearchSpecNodeSetsPatch[];
            podDisruptionBudget: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetPatch;
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Elasticsearch.
             */
            secureSettings: outputs.elasticsearch.v1beta1.ElasticsearchSpecSecureSettingsPatch[];
            updateStrategy: outputs.elasticsearch.v1beta1.ElasticsearchSpecUpdateStrategyPatch;
            /**
             * Version of Elasticsearch.
             */
            version: string;
        }
        /**
         * PodDisruptionBudget provides access to the default pod disruption budget for the Elasticsearch cluster. The default budget selects all cluster pods and sets `maxUnavailable` to 1. To disable, set `PodDisruptionBudget` to the empty value (`{}` in YAML).
         */
        interface ElasticsearchSpecPodDisruptionBudget {
            metadata: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetMetadata;
            spec: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetSpec;
        }
        /**
         * ObjectMeta is the metadata of the PDB. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecPodDisruptionBudgetMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the PDB. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticsearchSpecPodDisruptionBudgetMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * PodDisruptionBudget provides access to the default pod disruption budget for the Elasticsearch cluster. The default budget selects all cluster pods and sets `maxUnavailable` to 1. To disable, set `PodDisruptionBudget` to the empty value (`{}` in YAML).
         */
        interface ElasticsearchSpecPodDisruptionBudgetPatch {
            metadata: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetMetadataPatch;
            spec: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetSpecPatch;
        }
        /**
         * Spec is the specification of the PDB.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpec {
            /**
             * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
             */
            maxUnavailable: number | string;
            /**
             * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
             */
            minAvailable: number | string;
            selector: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetSpecSelector;
            /**
             * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".
             *  Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.
             *  IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
             *  AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
             *  Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.
             *  This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
             */
            unhealthyPodEvictionPolicy: string;
        }
        /**
         * Spec is the specification of the PDB.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecPatch {
            /**
             * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
             */
            maxUnavailable: number | string;
            /**
             * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
             */
            minAvailable: number | string;
            selector: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetSpecSelectorPatch;
            /**
             * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".
             *  Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.
             *  IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
             *  AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
             *  Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.
             *  This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
             */
            unhealthyPodEvictionPolicy: string;
        }
        /**
         * Label query over pods whose evictions are managed by the disruption budget. A null selector selects no pods. An empty selector ({}) also selects no pods, which differs from standard behavior of selecting all pods. In policy/v1, an empty selector will select all pods in the namespace.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetSpecSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * Label query over pods whose evictions are managed by the disruption budget. A null selector selects no pods. An empty selector ({}) also selects no pods, which differs from standard behavior of selecting all pods. In policy/v1, an empty selector will select all pods in the namespace.
         */
        interface ElasticsearchSpecPodDisruptionBudgetSpecSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.elasticsearch.v1beta1.ElasticsearchSpecPodDisruptionBudgetSpecSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface ElasticsearchSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.elasticsearch.v1beta1.ElasticsearchSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface ElasticsearchSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface ElasticsearchSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface ElasticsearchSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.elasticsearch.v1beta1.ElasticsearchSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * UpdateStrategy specifies how updates to the cluster should be performed.
         */
        interface ElasticsearchSpecUpdateStrategy {
            changeBudget: outputs.elasticsearch.v1beta1.ElasticsearchSpecUpdateStrategyChangeBudget;
        }
        /**
         * ChangeBudget defines the constraints to consider when applying changes to the Elasticsearch cluster.
         */
        interface ElasticsearchSpecUpdateStrategyChangeBudget {
            /**
             * MaxSurge is the maximum number of new pods that can be created exceeding the original number of pods defined in the specification. MaxSurge is only taken into consideration when scaling up. Setting a negative value will disable the restriction. Defaults to unbounded if not specified.
             */
            maxSurge: number;
            /**
             * MaxUnavailable is the maximum number of pods that can be unavailable (not ready) during the update due to circumstances under the control of the operator. Setting a negative value will disable this restriction. Defaults to 1 if not specified.
             */
            maxUnavailable: number;
        }
        /**
         * ChangeBudget defines the constraints to consider when applying changes to the Elasticsearch cluster.
         */
        interface ElasticsearchSpecUpdateStrategyChangeBudgetPatch {
            /**
             * MaxSurge is the maximum number of new pods that can be created exceeding the original number of pods defined in the specification. MaxSurge is only taken into consideration when scaling up. Setting a negative value will disable the restriction. Defaults to unbounded if not specified.
             */
            maxSurge: number;
            /**
             * MaxUnavailable is the maximum number of pods that can be unavailable (not ready) during the update due to circumstances under the control of the operator. Setting a negative value will disable this restriction. Defaults to 1 if not specified.
             */
            maxUnavailable: number;
        }
        /**
         * UpdateStrategy specifies how updates to the cluster should be performed.
         */
        interface ElasticsearchSpecUpdateStrategyPatch {
            changeBudget: outputs.elasticsearch.v1beta1.ElasticsearchSpecUpdateStrategyChangeBudgetPatch;
        }
        /**
         * ElasticsearchStatus defines the observed state of Elasticsearch
         */
        interface ElasticsearchStatus {
            availableNodes: number;
            /**
             * ElasticsearchHealth is the health of the cluster as returned by the health API.
             */
            health: string;
            /**
             * ElasticsearchOrchestrationPhase is the phase Elasticsearch is in from the controller point of view.
             */
            phase: string;
        }
        /**
         * ElasticsearchStatus defines the observed state of Elasticsearch
         */
        interface ElasticsearchStatusPatch {
            availableNodes: number;
            /**
             * ElasticsearchHealth is the health of the cluster as returned by the health API.
             */
            health: string;
            /**
             * ElasticsearchOrchestrationPhase is the phase Elasticsearch is in from the controller point of view.
             */
            phase: string;
        }
    }
}
export declare namespace enterprisesearch {
    namespace v1 {
        /**
         * EnterpriseSearch is a Kubernetes CRD to represent Enterprise Search.
         */
        interface EnterpriseSearch {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "enterprisesearch.k8s.elastic.co/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "EnterpriseSearch";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.enterprisesearch.v1.EnterpriseSearchSpec;
            status: outputs.enterprisesearch.v1.EnterpriseSearchStatus;
        }
        /**
         * EnterpriseSearchSpec holds the specification of an Enterprise Search resource.
         */
        interface EnterpriseSearchSpec {
            /**
             * Config holds the Enterprise Search configuration.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.enterprisesearch.v1.EnterpriseSearchSpecConfigRef;
            /**
             * Count of Enterprise Search instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.enterprisesearch.v1.EnterpriseSearchSpecElasticsearchRef;
            http: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttp;
            /**
             * Image is the Enterprise Search Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Enterprise Search pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of Enterprise Search.
             */
            version: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Enterprise Search configuration. Configuration settings are merged and have precedence over settings specified in `config`.
         */
        interface EnterpriseSearchSpecConfigRef {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Enterprise Search configuration. Configuration settings are merged and have precedence over settings specified in `config`.
         */
        interface EnterpriseSearchSpecConfigRefPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ElasticsearchRef is a reference to the Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface EnterpriseSearchSpecElasticsearchRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ElasticsearchRef is a reference to the Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface EnterpriseSearchSpecElasticsearchRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * HTTP holds the HTTP layer configuration for Enterprise Search resource.
         */
        interface EnterpriseSearchSpecHttp {
            service: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpService;
            tls: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpTls;
        }
        /**
         * HTTP holds the HTTP layer configuration for Enterprise Search resource.
         */
        interface EnterpriseSearchSpecHttpPatch {
            service: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServicePatch;
            tls: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface EnterpriseSearchSpecHttpService {
            metadata: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceMetadata;
            spec: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface EnterpriseSearchSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface EnterpriseSearchSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface EnterpriseSearchSpecHttpServicePatch {
            metadata: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceMetadataPatch;
            spec: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface EnterpriseSearchSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface EnterpriseSearchSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface EnterpriseSearchSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface EnterpriseSearchSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface EnterpriseSearchSpecHttpTls {
            certificate: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface EnterpriseSearchSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface EnterpriseSearchSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface EnterpriseSearchSpecHttpTlsPatch {
            certificate: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface EnterpriseSearchSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface EnterpriseSearchSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface EnterpriseSearchSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface EnterpriseSearchSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * EnterpriseSearchSpec holds the specification of an Enterprise Search resource.
         */
        interface EnterpriseSearchSpecPatch {
            /**
             * Config holds the Enterprise Search configuration.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.enterprisesearch.v1.EnterpriseSearchSpecConfigRefPatch;
            /**
             * Count of Enterprise Search instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.enterprisesearch.v1.EnterpriseSearchSpecElasticsearchRefPatch;
            http: outputs.enterprisesearch.v1.EnterpriseSearchSpecHttpPatch;
            /**
             * Image is the Enterprise Search Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Enterprise Search pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of Enterprise Search.
             */
            version: string;
        }
        /**
         * EnterpriseSearchStatus defines the observed state of EnterpriseSearch
         */
        interface EnterpriseSearchStatus {
            /**
             * Association is the status of any auto-linking to Elasticsearch clusters.
             */
            associationStatus: string;
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * ObservedGeneration represents the .metadata.generation that the status is based upon. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Enterprise Search controller has not yet processed the changes contained in the Enterprise Search specification.
             */
            observedGeneration: number;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * ExternalService is the name of the service associated to the Enterprise Search Pods.
             */
            service: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * EnterpriseSearchStatus defines the observed state of EnterpriseSearch
         */
        interface EnterpriseSearchStatusPatch {
            /**
             * Association is the status of any auto-linking to Elasticsearch clusters.
             */
            associationStatus: string;
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * ObservedGeneration represents the .metadata.generation that the status is based upon. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Enterprise Search controller has not yet processed the changes contained in the Enterprise Search specification.
             */
            observedGeneration: number;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * ExternalService is the name of the service associated to the Enterprise Search Pods.
             */
            service: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
    }
    namespace v1beta1 {
        /**
         * EnterpriseSearch is a Kubernetes CRD to represent Enterprise Search.
         */
        interface EnterpriseSearch {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "enterprisesearch.k8s.elastic.co/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "EnterpriseSearch";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpec;
            status: outputs.enterprisesearch.v1beta1.EnterpriseSearchStatus;
        }
        /**
         * EnterpriseSearchSpec holds the specification of an Enterprise Search resource.
         */
        interface EnterpriseSearchSpec {
            /**
             * Config holds the Enterprise Search configuration.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecConfigRef;
            /**
             * Count of Enterprise Search instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecElasticsearchRef;
            http: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttp;
            /**
             * Image is the Enterprise Search Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Enterprise Search pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of Enterprise Search.
             */
            version: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Enterprise Search configuration. Configuration settings are merged and have precedence over settings specified in `config`.
         */
        interface EnterpriseSearchSpecConfigRef {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Enterprise Search configuration. Configuration settings are merged and have precedence over settings specified in `config`.
         */
        interface EnterpriseSearchSpecConfigRefPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ElasticsearchRef is a reference to the Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface EnterpriseSearchSpecElasticsearchRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ElasticsearchRef is a reference to the Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface EnterpriseSearchSpecElasticsearchRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * HTTP holds the HTTP layer configuration for Enterprise Search resource.
         */
        interface EnterpriseSearchSpecHttp {
            service: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpService;
            tls: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpTls;
        }
        /**
         * HTTP holds the HTTP layer configuration for Enterprise Search resource.
         */
        interface EnterpriseSearchSpecHttpPatch {
            service: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServicePatch;
            tls: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface EnterpriseSearchSpecHttpService {
            metadata: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceMetadata;
            spec: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface EnterpriseSearchSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface EnterpriseSearchSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface EnterpriseSearchSpecHttpServicePatch {
            metadata: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceMetadataPatch;
            spec: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface EnterpriseSearchSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface EnterpriseSearchSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface EnterpriseSearchSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface EnterpriseSearchSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface EnterpriseSearchSpecHttpTls {
            certificate: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface EnterpriseSearchSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface EnterpriseSearchSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface EnterpriseSearchSpecHttpTlsPatch {
            certificate: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface EnterpriseSearchSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface EnterpriseSearchSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface EnterpriseSearchSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface EnterpriseSearchSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * EnterpriseSearchSpec holds the specification of an Enterprise Search resource.
         */
        interface EnterpriseSearchSpecPatch {
            /**
             * Config holds the Enterprise Search configuration.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecConfigRefPatch;
            /**
             * Count of Enterprise Search instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecElasticsearchRefPatch;
            http: outputs.enterprisesearch.v1beta1.EnterpriseSearchSpecHttpPatch;
            /**
             * Image is the Enterprise Search Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Enterprise Search pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of Enterprise Search.
             */
            version: string;
        }
        /**
         * EnterpriseSearchStatus defines the observed state of EnterpriseSearch
         */
        interface EnterpriseSearchStatus {
            /**
             * Association is the status of any auto-linking to Elasticsearch clusters.
             */
            associationStatus: string;
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * ExternalService is the name of the service associated to the Enterprise Search Pods.
             */
            service: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * EnterpriseSearchStatus defines the observed state of EnterpriseSearch
         */
        interface EnterpriseSearchStatusPatch {
            /**
             * Association is the status of any auto-linking to Elasticsearch clusters.
             */
            associationStatus: string;
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * ExternalService is the name of the service associated to the Enterprise Search Pods.
             */
            service: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
    }
}
export declare namespace kibana {
    namespace v1 {
        /**
         * Kibana represents a Kibana resource in a Kubernetes cluster.
         */
        interface Kibana {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "kibana.k8s.elastic.co/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Kibana";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.kibana.v1.KibanaSpec;
            status: outputs.kibana.v1.KibanaStatus;
        }
        /**
         * KibanaSpec holds the specification of a Kibana instance.
         */
        interface KibanaSpec {
            /**
             * Config holds the Kibana configuration. See: https://www.elastic.co/guide/en/kibana/current/settings.html
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of Kibana instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.kibana.v1.KibanaSpecElasticsearchRef;
            enterpriseSearchRef: outputs.kibana.v1.KibanaSpecEnterpriseSearchRef;
            http: outputs.kibana.v1.KibanaSpecHttp;
            /**
             * Image is the Kibana Docker image to deploy.
             */
            image: string;
            monitoring: outputs.kibana.v1.KibanaSpecMonitoring;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Kibana pods
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Kibana.
             */
            secureSettings: outputs.kibana.v1.KibanaSpecSecureSettings[];
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of Kibana.
             */
            version: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface KibanaSpecElasticsearchRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface KibanaSpecElasticsearchRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * EnterpriseSearchRef is a reference to an EnterpriseSearch running in the same Kubernetes cluster. Kibana provides the default Enterprise Search UI starting version 7.14.
         */
        interface KibanaSpecEnterpriseSearchRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * EnterpriseSearchRef is a reference to an EnterpriseSearch running in the same Kubernetes cluster. Kibana provides the default Enterprise Search UI starting version 7.14.
         */
        interface KibanaSpecEnterpriseSearchRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * HTTP holds the HTTP layer configuration for Kibana.
         */
        interface KibanaSpecHttp {
            service: outputs.kibana.v1.KibanaSpecHttpService;
            tls: outputs.kibana.v1.KibanaSpecHttpTls;
        }
        /**
         * HTTP holds the HTTP layer configuration for Kibana.
         */
        interface KibanaSpecHttpPatch {
            service: outputs.kibana.v1.KibanaSpecHttpServicePatch;
            tls: outputs.kibana.v1.KibanaSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface KibanaSpecHttpService {
            metadata: outputs.kibana.v1.KibanaSpecHttpServiceMetadata;
            spec: outputs.kibana.v1.KibanaSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface KibanaSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface KibanaSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface KibanaSpecHttpServicePatch {
            metadata: outputs.kibana.v1.KibanaSpecHttpServiceMetadataPatch;
            spec: outputs.kibana.v1.KibanaSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface KibanaSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.kibana.v1.KibanaSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.kibana.v1.KibanaSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface KibanaSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.kibana.v1.KibanaSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.kibana.v1.KibanaSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface KibanaSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface KibanaSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface KibanaSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.kibana.v1.KibanaSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface KibanaSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface KibanaSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface KibanaSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.kibana.v1.KibanaSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface KibanaSpecHttpTls {
            certificate: outputs.kibana.v1.KibanaSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.kibana.v1.KibanaSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface KibanaSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface KibanaSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface KibanaSpecHttpTlsPatch {
            certificate: outputs.kibana.v1.KibanaSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.kibana.v1.KibanaSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface KibanaSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.kibana.v1.KibanaSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface KibanaSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.kibana.v1.KibanaSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface KibanaSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface KibanaSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * Monitoring enables you to collect and ship log and monitoring data of this Kibana. See https://www.elastic.co/guide/en/kibana/current/xpack-monitoring.html. Metricbeat and Filebeat are deployed in the same Pod as sidecars and each one sends data to one or two different Elasticsearch monitoring clusters running in the same Kubernetes cluster.
         */
        interface KibanaSpecMonitoring {
            logs: outputs.kibana.v1.KibanaSpecMonitoringLogs;
            metrics: outputs.kibana.v1.KibanaSpecMonitoringMetrics;
        }
        /**
         * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
         */
        interface KibanaSpecMonitoringLogs {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.kibana.v1.KibanaSpecMonitoringLogsElasticsearchRefs[];
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface KibanaSpecMonitoringLogsElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface KibanaSpecMonitoringLogsElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
         */
        interface KibanaSpecMonitoringLogsPatch {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.kibana.v1.KibanaSpecMonitoringLogsElasticsearchRefsPatch[];
        }
        /**
         * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
         */
        interface KibanaSpecMonitoringMetrics {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.kibana.v1.KibanaSpecMonitoringMetricsElasticsearchRefs[];
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface KibanaSpecMonitoringMetricsElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface KibanaSpecMonitoringMetricsElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
         */
        interface KibanaSpecMonitoringMetricsPatch {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.kibana.v1.KibanaSpecMonitoringMetricsElasticsearchRefsPatch[];
        }
        /**
         * Monitoring enables you to collect and ship log and monitoring data of this Kibana. See https://www.elastic.co/guide/en/kibana/current/xpack-monitoring.html. Metricbeat and Filebeat are deployed in the same Pod as sidecars and each one sends data to one or two different Elasticsearch monitoring clusters running in the same Kubernetes cluster.
         */
        interface KibanaSpecMonitoringPatch {
            logs: outputs.kibana.v1.KibanaSpecMonitoringLogsPatch;
            metrics: outputs.kibana.v1.KibanaSpecMonitoringMetricsPatch;
        }
        /**
         * KibanaSpec holds the specification of a Kibana instance.
         */
        interface KibanaSpecPatch {
            /**
             * Config holds the Kibana configuration. See: https://www.elastic.co/guide/en/kibana/current/settings.html
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of Kibana instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.kibana.v1.KibanaSpecElasticsearchRefPatch;
            enterpriseSearchRef: outputs.kibana.v1.KibanaSpecEnterpriseSearchRefPatch;
            http: outputs.kibana.v1.KibanaSpecHttpPatch;
            /**
             * Image is the Kibana Docker image to deploy.
             */
            image: string;
            monitoring: outputs.kibana.v1.KibanaSpecMonitoringPatch;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Kibana pods
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Kibana.
             */
            secureSettings: outputs.kibana.v1.KibanaSpecSecureSettingsPatch[];
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of Kibana.
             */
            version: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface KibanaSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.kibana.v1.KibanaSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface KibanaSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface KibanaSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface KibanaSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.kibana.v1.KibanaSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KibanaStatus defines the observed state of Kibana
         */
        interface KibanaStatus {
            /**
             * AssociationStatus is the status of any auto-linking to Elasticsearch clusters. This field is deprecated and will be removed in a future release. Use ElasticsearchAssociationStatus instead.
             */
            associationStatus: string;
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * ElasticsearchAssociationStatus is the status of any auto-linking to Elasticsearch clusters.
             */
            elasticsearchAssociationStatus: string;
            /**
             * EnterpriseSearchAssociationStatus is the status of any auto-linking to Enterprise Search.
             */
            enterpriseSearchAssociationStatus: string;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * MonitoringAssociationStatus is the status of any auto-linking to monitoring Elasticsearch clusters.
             */
            monitoringAssociationStatus: {
                [key: string]: string;
            };
            /**
             * ObservedGeneration is the most recent generation observed for this Kibana instance. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Kibana controller has not yet processed the changes contained in the Kibana specification.
             */
            observedGeneration: number;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * KibanaStatus defines the observed state of Kibana
         */
        interface KibanaStatusPatch {
            /**
             * AssociationStatus is the status of any auto-linking to Elasticsearch clusters. This field is deprecated and will be removed in a future release. Use ElasticsearchAssociationStatus instead.
             */
            associationStatus: string;
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * ElasticsearchAssociationStatus is the status of any auto-linking to Elasticsearch clusters.
             */
            elasticsearchAssociationStatus: string;
            /**
             * EnterpriseSearchAssociationStatus is the status of any auto-linking to Enterprise Search.
             */
            enterpriseSearchAssociationStatus: string;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * MonitoringAssociationStatus is the status of any auto-linking to monitoring Elasticsearch clusters.
             */
            monitoringAssociationStatus: {
                [key: string]: string;
            };
            /**
             * ObservedGeneration is the most recent generation observed for this Kibana instance. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Kibana controller has not yet processed the changes contained in the Kibana specification.
             */
            observedGeneration: number;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
    }
    namespace v1alpha1 {
        /**
         * to not break compatibility when upgrading from previous versions of the CRD
         */
        interface Kibana {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "kibana.k8s.elastic.co/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Kibana";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
        }
    }
    namespace v1beta1 {
        /**
         * Kibana represents a Kibana resource in a Kubernetes cluster.
         */
        interface Kibana {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "kibana.k8s.elastic.co/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Kibana";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.kibana.v1beta1.KibanaSpec;
            status: outputs.kibana.v1beta1.KibanaStatus;
        }
        /**
         * KibanaSpec holds the specification of a Kibana instance.
         */
        interface KibanaSpec {
            /**
             * Config holds the Kibana configuration. See: https://www.elastic.co/guide/en/kibana/current/settings.html
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of Kibana instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.kibana.v1beta1.KibanaSpecElasticsearchRef;
            http: outputs.kibana.v1beta1.KibanaSpecHttp;
            /**
             * Image is the Kibana Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Kibana pods
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Kibana.
             */
            secureSettings: outputs.kibana.v1beta1.KibanaSpecSecureSettings[];
            /**
             * Version of Kibana.
             */
            version: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface KibanaSpecElasticsearchRef {
            /**
             * Name of the Kubernetes object.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface KibanaSpecElasticsearchRefPatch {
            /**
             * Name of the Kubernetes object.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
        }
        /**
         * HTTP holds the HTTP layer configuration for Kibana.
         */
        interface KibanaSpecHttp {
            service: outputs.kibana.v1beta1.KibanaSpecHttpService;
            tls: outputs.kibana.v1beta1.KibanaSpecHttpTls;
        }
        /**
         * HTTP holds the HTTP layer configuration for Kibana.
         */
        interface KibanaSpecHttpPatch {
            service: outputs.kibana.v1beta1.KibanaSpecHttpServicePatch;
            tls: outputs.kibana.v1beta1.KibanaSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface KibanaSpecHttpService {
            metadata: outputs.kibana.v1beta1.KibanaSpecHttpServiceMetadata;
            spec: outputs.kibana.v1beta1.KibanaSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface KibanaSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface KibanaSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface KibanaSpecHttpServicePatch {
            metadata: outputs.kibana.v1beta1.KibanaSpecHttpServiceMetadataPatch;
            spec: outputs.kibana.v1beta1.KibanaSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface KibanaSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.kibana.v1beta1.KibanaSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.kibana.v1beta1.KibanaSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface KibanaSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.kibana.v1beta1.KibanaSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.kibana.v1beta1.KibanaSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface KibanaSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface KibanaSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface KibanaSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.kibana.v1beta1.KibanaSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface KibanaSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface KibanaSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface KibanaSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.kibana.v1beta1.KibanaSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface KibanaSpecHttpTls {
            certificate: outputs.kibana.v1beta1.KibanaSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.kibana.v1beta1.KibanaSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface KibanaSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface KibanaSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface KibanaSpecHttpTlsPatch {
            certificate: outputs.kibana.v1beta1.KibanaSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.kibana.v1beta1.KibanaSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface KibanaSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.kibana.v1beta1.KibanaSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface KibanaSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.kibana.v1beta1.KibanaSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface KibanaSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface KibanaSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * KibanaSpec holds the specification of a Kibana instance.
         */
        interface KibanaSpecPatch {
            /**
             * Config holds the Kibana configuration. See: https://www.elastic.co/guide/en/kibana/current/settings.html
             */
            config: {
                [key: string]: any;
            };
            /**
             * Count of Kibana instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.kibana.v1beta1.KibanaSpecElasticsearchRefPatch;
            http: outputs.kibana.v1beta1.KibanaSpecHttpPatch;
            /**
             * Image is the Kibana Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Kibana pods
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Kibana.
             */
            secureSettings: outputs.kibana.v1beta1.KibanaSpecSecureSettingsPatch[];
            /**
             * Version of Kibana.
             */
            version: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface KibanaSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.kibana.v1beta1.KibanaSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface KibanaSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface KibanaSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface KibanaSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.kibana.v1beta1.KibanaSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KibanaStatus defines the observed state of Kibana
         */
        interface KibanaStatus {
            /**
             * AssociationStatus is the status of an association resource.
             */
            associationStatus: string;
            availableNodes: number;
            /**
             * KibanaHealth expresses the status of the Kibana instances.
             */
            health: string;
        }
        /**
         * KibanaStatus defines the observed state of Kibana
         */
        interface KibanaStatusPatch {
            /**
             * AssociationStatus is the status of an association resource.
             */
            associationStatus: string;
            availableNodes: number;
            /**
             * KibanaHealth expresses the status of the Kibana instances.
             */
            health: string;
        }
    }
}
export declare namespace logstash {
    namespace v1alpha1 {
        /**
         * Logstash is the Schema for the logstashes API
         */
        interface Logstash {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "logstash.k8s.elastic.co/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Logstash";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.logstash.v1alpha1.LogstashSpec;
            status: outputs.logstash.v1alpha1.LogstashStatus;
        }
        /**
         * LogstashSpec defines the desired state of Logstash
         */
        interface LogstashSpec {
            /**
             * Config holds the Logstash configuration. At most one of [`Config`, `ConfigRef`] can be specified.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.logstash.v1alpha1.LogstashSpecConfigRef;
            count: number;
            /**
             * ElasticsearchRefs are references to Elasticsearch clusters running in the same Kubernetes cluster.
             */
            elasticsearchRefs: outputs.logstash.v1alpha1.LogstashSpecElasticsearchRefs[];
            /**
             * Image is the Logstash Docker image to deploy. Version and Type have to match the Logstash in the image.
             */
            image: string;
            monitoring: outputs.logstash.v1alpha1.LogstashSpecMonitoring;
            /**
             * Pipelines holds the Logstash Pipelines. At most one of [`Pipelines`, `PipelinesRef`] can be specified.
             */
            pipelines: {
                [key: string]: any;
            };
            pipelinesRef: outputs.logstash.v1alpha1.LogstashSpecPipelinesRef;
            /**
             * PodTemplate provides customisation options for the Logstash pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying StatefulSet.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes Secrets containing sensitive configuration options for the Logstash. Secrets data can be then referenced in the Logstash config using the Secret's keys or as specified in `Entries` field of each SecureSetting.
             */
            secureSettings: outputs.logstash.v1alpha1.LogstashSpecSecureSettings[];
            /**
             * ServiceAccountName is used to check access from the current resource to Elasticsearch resource in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Services contains details of services that Logstash should expose - similar to the HTTP layer configuration for the rest of the stack, but also applicable for more use cases than the metrics API, as logstash may need to be opened up for other services: Beats, TCP, UDP, etc, inputs.
             */
            services: outputs.logstash.v1alpha1.LogstashSpecServices[];
            /**
             * Version of the Logstash.
             */
            version: string;
            /**
             * VolumeClaimTemplates is a list of persistent volume claims to be used by each Pod. Every claim in this list must have a matching volumeMount in one of the containers defined in the PodTemplate. Items defined here take precedence over any default claims added by the operator with the same name.
             */
            volumeClaimTemplates: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplates[];
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Logstash configuration. Logstash settings must be specified as yaml, under a single "logstash.yml" entry. At most one of [`Config`, `ConfigRef`] can be specified.
         */
        interface LogstashSpecConfigRef {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Logstash configuration. Logstash settings must be specified as yaml, under a single "logstash.yml" entry. At most one of [`Config`, `ConfigRef`] can be specified.
         */
        interface LogstashSpecConfigRefPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ElasticsearchCluster is a named reference to an Elasticsearch cluster which can be used in a Logstash pipeline.
         */
        interface LogstashSpecElasticsearchRefs {
            /**
             * ClusterName is an alias for the cluster to be used to refer to the Elasticsearch cluster in Logstash configuration files, and will be used to identify "named clusters" in Logstash
             */
            clusterName: string;
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ElasticsearchCluster is a named reference to an Elasticsearch cluster which can be used in a Logstash pipeline.
         */
        interface LogstashSpecElasticsearchRefsPatch {
            /**
             * ClusterName is an alias for the cluster to be used to refer to the Elasticsearch cluster in Logstash configuration files, and will be used to identify "named clusters" in Logstash
             */
            clusterName: string;
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Monitoring enables you to collect and ship log and monitoring data of this Logstash. Metricbeat and Filebeat are deployed in the same Pod as sidecars and each one sends data to one or two different Elasticsearch monitoring clusters running in the same Kubernetes cluster.
         */
        interface LogstashSpecMonitoring {
            logs: outputs.logstash.v1alpha1.LogstashSpecMonitoringLogs;
            metrics: outputs.logstash.v1alpha1.LogstashSpecMonitoringMetrics;
        }
        /**
         * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
         */
        interface LogstashSpecMonitoringLogs {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.logstash.v1alpha1.LogstashSpecMonitoringLogsElasticsearchRefs[];
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface LogstashSpecMonitoringLogsElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface LogstashSpecMonitoringLogsElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
         */
        interface LogstashSpecMonitoringLogsPatch {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.logstash.v1alpha1.LogstashSpecMonitoringLogsElasticsearchRefsPatch[];
        }
        /**
         * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
         */
        interface LogstashSpecMonitoringMetrics {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.logstash.v1alpha1.LogstashSpecMonitoringMetricsElasticsearchRefs[];
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface LogstashSpecMonitoringMetricsElasticsearchRefs {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ObjectSelector defines a reference to a Kubernetes object which can be an Elastic resource managed by the operator or a Secret describing an external Elastic resource not managed by the operator.
         */
        interface LogstashSpecMonitoringMetricsElasticsearchRefsPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
         */
        interface LogstashSpecMonitoringMetricsPatch {
            /**
             * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
             */
            elasticsearchRefs: outputs.logstash.v1alpha1.LogstashSpecMonitoringMetricsElasticsearchRefsPatch[];
        }
        /**
         * Monitoring enables you to collect and ship log and monitoring data of this Logstash. Metricbeat and Filebeat are deployed in the same Pod as sidecars and each one sends data to one or two different Elasticsearch monitoring clusters running in the same Kubernetes cluster.
         */
        interface LogstashSpecMonitoringPatch {
            logs: outputs.logstash.v1alpha1.LogstashSpecMonitoringLogsPatch;
            metrics: outputs.logstash.v1alpha1.LogstashSpecMonitoringMetricsPatch;
        }
        /**
         * LogstashSpec defines the desired state of Logstash
         */
        interface LogstashSpecPatch {
            /**
             * Config holds the Logstash configuration. At most one of [`Config`, `ConfigRef`] can be specified.
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.logstash.v1alpha1.LogstashSpecConfigRefPatch;
            count: number;
            /**
             * ElasticsearchRefs are references to Elasticsearch clusters running in the same Kubernetes cluster.
             */
            elasticsearchRefs: outputs.logstash.v1alpha1.LogstashSpecElasticsearchRefsPatch[];
            /**
             * Image is the Logstash Docker image to deploy. Version and Type have to match the Logstash in the image.
             */
            image: string;
            monitoring: outputs.logstash.v1alpha1.LogstashSpecMonitoringPatch;
            /**
             * Pipelines holds the Logstash Pipelines. At most one of [`Pipelines`, `PipelinesRef`] can be specified.
             */
            pipelines: {
                [key: string]: any;
            };
            pipelinesRef: outputs.logstash.v1alpha1.LogstashSpecPipelinesRefPatch;
            /**
             * PodTemplate provides customisation options for the Logstash pods.
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying StatefulSet.
             */
            revisionHistoryLimit: number;
            /**
             * SecureSettings is a list of references to Kubernetes Secrets containing sensitive configuration options for the Logstash. Secrets data can be then referenced in the Logstash config using the Secret's keys or as specified in `Entries` field of each SecureSetting.
             */
            secureSettings: outputs.logstash.v1alpha1.LogstashSpecSecureSettingsPatch[];
            /**
             * ServiceAccountName is used to check access from the current resource to Elasticsearch resource in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Services contains details of services that Logstash should expose - similar to the HTTP layer configuration for the rest of the stack, but also applicable for more use cases than the metrics API, as logstash may need to be opened up for other services: Beats, TCP, UDP, etc, inputs.
             */
            services: outputs.logstash.v1alpha1.LogstashSpecServicesPatch[];
            /**
             * Version of the Logstash.
             */
            version: string;
            /**
             * VolumeClaimTemplates is a list of persistent volume claims to be used by each Pod. Every claim in this list must have a matching volumeMount in one of the containers defined in the PodTemplate. Items defined here take precedence over any default claims added by the operator with the same name.
             */
            volumeClaimTemplates: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesPatch[];
        }
        /**
         * PipelinesRef contains a reference to an existing Kubernetes Secret holding the Logstash Pipelines. Logstash pipelines must be specified as yaml, under a single "pipelines.yml" entry. At most one of [`Pipelines`, `PipelinesRef`] can be specified.
         */
        interface LogstashSpecPipelinesRef {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * PipelinesRef contains a reference to an existing Kubernetes Secret holding the Logstash Pipelines. Logstash pipelines must be specified as yaml, under a single "pipelines.yml" entry. At most one of [`Pipelines`, `PipelinesRef`] can be specified.
         */
        interface LogstashSpecPipelinesRefPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface LogstashSpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.logstash.v1alpha1.LogstashSpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface LogstashSpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface LogstashSpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface LogstashSpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.logstash.v1alpha1.LogstashSpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        interface LogstashSpecServices {
            name: string;
            service: outputs.logstash.v1alpha1.LogstashSpecServicesService;
            tls: outputs.logstash.v1alpha1.LogstashSpecServicesTls;
        }
        interface LogstashSpecServicesPatch {
            name: string;
            service: outputs.logstash.v1alpha1.LogstashSpecServicesServicePatch;
            tls: outputs.logstash.v1alpha1.LogstashSpecServicesTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface LogstashSpecServicesService {
            metadata: outputs.logstash.v1alpha1.LogstashSpecServicesServiceMetadata;
            spec: outputs.logstash.v1alpha1.LogstashSpecServicesServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface LogstashSpecServicesServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface LogstashSpecServicesServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface LogstashSpecServicesServicePatch {
            metadata: outputs.logstash.v1alpha1.LogstashSpecServicesServiceMetadataPatch;
            spec: outputs.logstash.v1alpha1.LogstashSpecServicesServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface LogstashSpecServicesServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.logstash.v1alpha1.LogstashSpecServicesServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.logstash.v1alpha1.LogstashSpecServicesServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface LogstashSpecServicesServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.logstash.v1alpha1.LogstashSpecServicesServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.logstash.v1alpha1.LogstashSpecServicesServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface LogstashSpecServicesServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface LogstashSpecServicesServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface LogstashSpecServicesServiceSpecSessionAffinityConfig {
            clientIP: outputs.logstash.v1alpha1.LogstashSpecServicesServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface LogstashSpecServicesServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface LogstashSpecServicesServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface LogstashSpecServicesServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.logstash.v1alpha1.LogstashSpecServicesServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface LogstashSpecServicesTls {
            certificate: outputs.logstash.v1alpha1.LogstashSpecServicesTlsCertificate;
            selfSignedCertificate: outputs.logstash.v1alpha1.LogstashSpecServicesTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface LogstashSpecServicesTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface LogstashSpecServicesTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface LogstashSpecServicesTlsPatch {
            certificate: outputs.logstash.v1alpha1.LogstashSpecServicesTlsCertificatePatch;
            selfSignedCertificate: outputs.logstash.v1alpha1.LogstashSpecServicesTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface LogstashSpecServicesTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.logstash.v1alpha1.LogstashSpecServicesTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface LogstashSpecServicesTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.logstash.v1alpha1.LogstashSpecServicesTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface LogstashSpecServicesTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface LogstashSpecServicesTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * PersistentVolumeClaim is a user's request for and claim to a persistent volume
         */
        interface LogstashSpecVolumeClaimTemplates {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: string;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            metadata: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesMetadata;
            spec: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpec;
            status: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesStatus;
        }
        /**
         * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface LogstashSpecVolumeClaimTemplatesMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        interface LogstashSpecVolumeClaimTemplatesMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * PersistentVolumeClaim is a user's request for and claim to a persistent volume
         */
        interface LogstashSpecVolumeClaimTemplatesPatch {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: string;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            metadata: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesMetadataPatch;
            spec: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecPatch;
            status: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesStatusPatch;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface LogstashSpecVolumeClaimTemplatesSpec {
            /**
             * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes: string[];
            dataSource: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecDataSource;
            dataSourceRef: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecDataSourceRef;
            resources: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecResources;
            selector: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecSelector;
            /**
             * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName: string;
            /**
             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName: string;
        }
        /**
         * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecDataSource {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
        }
        /**
         * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecDataSourcePatch {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecDataSourceRef {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace: string;
        }
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecDataSourceRefPatch {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            apiGroup: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace: string;
        }
        /**
         * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface LogstashSpecVolumeClaimTemplatesSpecPatch {
            /**
             * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes: string[];
            dataSource: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecDataSourcePatch;
            dataSourceRef: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecDataSourceRefPatch;
            resources: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecResourcesPatch;
            selector: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecSelectorPatch;
            /**
             * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName: string;
            /**
             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName: string;
        }
        /**
         * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface LogstashSpecVolumeClaimTemplatesSpecResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *  This field is immutable. It can only be set for containers.
             */
            claims: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecResourcesClaims[];
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecResourcesClaims {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
             */
            name: string;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecResourcesClaimsPatch {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
             */
            name: string;
        }
        /**
         * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        interface LogstashSpecVolumeClaimTemplatesSpecResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *  This field is immutable. It can only be set for containers.
             */
            claims: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecResourcesClaimsPatch[];
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * selector is a label query over volumes to consider for binding.
         */
        interface LogstashSpecVolumeClaimTemplatesSpecSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface LogstashSpecVolumeClaimTemplatesStatus {
            /**
             * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes: string[];
            /**
             * allocatedResourceStatuses stores status of resource being resized for the given PVC. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource" Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.
             *  ClaimResourceStatus can be in any of following states: - ControllerResizeInProgress: State set when resize controller starts resizing the volume in control-plane. - ControllerResizeFailed: State set when resize has failed in resize controller with a terminal error. - NodeResizePending: State set when resize controller has finished resizing the volume but further resizing of volume is needed on the node. - NodeResizeInProgress: State set when kubelet starts resizing the volume. - NodeResizeFailed: State set when resizing has failed in kubelet with a terminal error. Transient errors don't set NodeResizeFailed. For example: if expanding a PVC for more capacity - this field can be one of the following states: - pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeInProgress" - pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeFailed" - pvc.status.allocatedResourceStatus['storage'] = "NodeResizePending" - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeInProgress" - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeFailed" When this field is not set, it means that no resize operation is in progress for the given PVC.
             *  A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.
             *  This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
             */
            allocatedResourceStatuses: {
                [key: string]: string;
            };
            /**
             * allocatedResources tracks the resources allocated to a PVC including its capacity. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource" Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.
             *  Capacity reported here may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity.
             *  A controller that receives PVC update with previously unknown resourceName should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.
             *  This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
             */
            allocatedResources: {
                [key: string]: number | string;
            };
            /**
             * capacity represents the actual resources of the underlying volume.
             */
            capacity: {
                [key: string]: number | string;
            };
            /**
             * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
             */
            conditions: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesStatusConditions[];
            /**
             * phase represents the current phase of PersistentVolumeClaim.
             */
            phase: string;
        }
        /**
         * PersistentVolumeClaimCondition contains details about state of pvc
         */
        interface LogstashSpecVolumeClaimTemplatesStatusConditions {
            /**
             * lastProbeTime is the time we probed the condition.
             */
            lastProbeTime: string;
            /**
             * lastTransitionTime is the time the condition transitioned from one status to another.
             */
            lastTransitionTime: string;
            /**
             * message is the human-readable message indicating details about last transition.
             */
            message: string;
            /**
             * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
             */
            reason: string;
            status: string;
            /**
             * PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type
             */
            type: string;
        }
        /**
         * PersistentVolumeClaimCondition contains details about state of pvc
         */
        interface LogstashSpecVolumeClaimTemplatesStatusConditionsPatch {
            /**
             * lastProbeTime is the time we probed the condition.
             */
            lastProbeTime: string;
            /**
             * lastTransitionTime is the time the condition transitioned from one status to another.
             */
            lastTransitionTime: string;
            /**
             * message is the human-readable message indicating details about last transition.
             */
            message: string;
            /**
             * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
             */
            reason: string;
            status: string;
            /**
             * PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type
             */
            type: string;
        }
        /**
         * status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        interface LogstashSpecVolumeClaimTemplatesStatusPatch {
            /**
             * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes: string[];
            /**
             * allocatedResourceStatuses stores status of resource being resized for the given PVC. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource" Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.
             *  ClaimResourceStatus can be in any of following states: - ControllerResizeInProgress: State set when resize controller starts resizing the volume in control-plane. - ControllerResizeFailed: State set when resize has failed in resize controller with a terminal error. - NodeResizePending: State set when resize controller has finished resizing the volume but further resizing of volume is needed on the node. - NodeResizeInProgress: State set when kubelet starts resizing the volume. - NodeResizeFailed: State set when resizing has failed in kubelet with a terminal error. Transient errors don't set NodeResizeFailed. For example: if expanding a PVC for more capacity - this field can be one of the following states: - pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeInProgress" - pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeFailed" - pvc.status.allocatedResourceStatus['storage'] = "NodeResizePending" - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeInProgress" - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeFailed" When this field is not set, it means that no resize operation is in progress for the given PVC.
             *  A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.
             *  This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
             */
            allocatedResourceStatuses: {
                [key: string]: string;
            };
            /**
             * allocatedResources tracks the resources allocated to a PVC including its capacity. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource" Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.
             *  Capacity reported here may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity.
             *  A controller that receives PVC update with previously unknown resourceName should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.
             *  This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
             */
            allocatedResources: {
                [key: string]: number | string;
            };
            /**
             * capacity represents the actual resources of the underlying volume.
             */
            capacity: {
                [key: string]: number | string;
            };
            /**
             * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
             */
            conditions: outputs.logstash.v1alpha1.LogstashSpecVolumeClaimTemplatesStatusConditionsPatch[];
            /**
             * phase represents the current phase of PersistentVolumeClaim.
             */
            phase: string;
        }
        /**
         * LogstashStatus defines the observed state of Logstash
         */
        interface LogstashStatus {
            availableNodes: number;
            /**
             * ElasticsearchAssociationStatus is the status of any auto-linking to Elasticsearch clusters.
             */
            elasticsearchAssociationsStatus: {
                [key: string]: string;
            };
            expectedNodes: number;
            /**
             * MonitoringAssociationStatus is the status of any auto-linking to monitoring Elasticsearch clusters.
             */
            monitoringAssociationStatus: {
                [key: string]: string;
            };
            /**
             * ObservedGeneration is the most recent generation observed for this Logstash instance. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Logstash controller has not yet processed the changes contained in the Logstash specification.
             */
            observedGeneration: number;
            selector: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * LogstashStatus defines the observed state of Logstash
         */
        interface LogstashStatusPatch {
            availableNodes: number;
            /**
             * ElasticsearchAssociationStatus is the status of any auto-linking to Elasticsearch clusters.
             */
            elasticsearchAssociationsStatus: {
                [key: string]: string;
            };
            expectedNodes: number;
            /**
             * MonitoringAssociationStatus is the status of any auto-linking to monitoring Elasticsearch clusters.
             */
            monitoringAssociationStatus: {
                [key: string]: string;
            };
            /**
             * ObservedGeneration is the most recent generation observed for this Logstash instance. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Logstash controller has not yet processed the changes contained in the Logstash specification.
             */
            observedGeneration: number;
            selector: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
    }
}
export declare namespace maps {
    namespace v1alpha1 {
        /**
         * ElasticMapsServer represents an Elastic Map Server resource in a Kubernetes cluster.
         */
        interface ElasticMapsServer {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "maps.k8s.elastic.co/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ElasticMapsServer";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.maps.v1alpha1.ElasticMapsServerSpec;
            status: outputs.maps.v1alpha1.ElasticMapsServerStatus;
        }
        /**
         * MapsSpec holds the specification of an Elastic Maps Server instance.
         */
        interface ElasticMapsServerSpec {
            /**
             * Config holds the ElasticMapsServer configuration. See: https://www.elastic.co/guide/en/kibana/current/maps-connect-to-ems.html#elastic-maps-server-configuration
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.maps.v1alpha1.ElasticMapsServerSpecConfigRef;
            /**
             * Count of Elastic Maps Server instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.maps.v1alpha1.ElasticMapsServerSpecElasticsearchRef;
            http: outputs.maps.v1alpha1.ElasticMapsServerSpecHttp;
            /**
             * Image is the Elastic Maps Server Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Elastic Maps Server pods
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of Elastic Maps Server.
             */
            version: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Elastic Maps Server configuration. Configuration settings are merged and have precedence over settings specified in `config`.
         */
        interface ElasticMapsServerSpecConfigRef {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Elastic Maps Server configuration. Configuration settings are merged and have precedence over settings specified in `config`.
         */
        interface ElasticMapsServerSpecConfigRefPatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface ElasticMapsServerSpecElasticsearchRef {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
         */
        interface ElasticMapsServerSpecElasticsearchRefPatch {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            name: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            namespace: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            secretName: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            serviceName: string;
        }
        /**
         * HTTP holds the HTTP layer configuration for Elastic Maps Server.
         */
        interface ElasticMapsServerSpecHttp {
            service: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpService;
            tls: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpTls;
        }
        /**
         * HTTP holds the HTTP layer configuration for Elastic Maps Server.
         */
        interface ElasticMapsServerSpecHttpPatch {
            service: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServicePatch;
            tls: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpTlsPatch;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ElasticMapsServerSpecHttpService {
            metadata: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceMetadata;
            spec: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceSpec;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticMapsServerSpecHttpServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
         */
        interface ElasticMapsServerSpecHttpServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            finalizers: string[];
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        /**
         * Service defines the template for the associated Kubernetes Service object.
         */
        interface ElasticMapsServerSpecHttpServicePatch {
            metadata: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceMetadataPatch;
            spec: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceSpecPatch;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ElasticMapsServerSpecHttpServiceSpec {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceSpecPorts[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceSpecSessionAffinityConfig;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * Spec is the specification of the service.
         */
        interface ElasticMapsServerSpecHttpServiceSpecPatch {
            /**
             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
             */
            allocateLoadBalancerNodePorts: boolean;
            /**
             * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIP: string;
            /**
             * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
             *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            clusterIPs: string[];
            /**
             * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
             */
            externalIPs: string[];
            /**
             * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
             */
            externalName: string;
            /**
             * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
             */
            externalTrafficPolicy: string;
            /**
             * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
             */
            healthCheckNodePort: number;
            /**
             * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
             */
            internalTrafficPolicy: string;
            /**
             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
             *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
             */
            ipFamilies: string[];
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
             */
            ipFamilyPolicy: string;
            /**
             * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
             */
            loadBalancerClass: string;
            /**
             * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
             */
            loadBalancerIP: string;
            /**
             * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
             */
            loadBalancerSourceRanges: string[];
            /**
             * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            ports: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceSpecPortsPatch[];
            /**
             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
             */
            publishNotReadyAddresses: boolean;
            /**
             * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            selector: {
                [key: string]: string;
            };
            /**
             * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
             */
            sessionAffinity: string;
            sessionAffinityConfig: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceSpecSessionAffinityConfigPatch;
            /**
             * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
             */
            type: string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ElasticMapsServerSpecHttpServiceSpecPorts {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * ServicePort contains information on service's port.
         */
        interface ElasticMapsServerSpecHttpServiceSpecPortsPatch {
            /**
             * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
             *  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
             *  * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
             *  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
             */
            appProtocol: string;
            /**
             * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
             */
            name: string;
            /**
             * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
             */
            nodePort: number;
            /**
             * The port that will be exposed by this service.
             */
            port: number;
            /**
             * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
             */
            protocol: string;
            /**
             * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
             */
            targetPort: number | string;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ElasticMapsServerSpecHttpServiceSpecSessionAffinityConfig {
            clientIP: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceSpecSessionAffinityConfigClientIP;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ElasticMapsServerSpecHttpServiceSpecSessionAffinityConfigClientIP {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * clientIP contains the configurations of Client IP based session affinity.
         */
        interface ElasticMapsServerSpecHttpServiceSpecSessionAffinityConfigClientIPPatch {
            /**
             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
             */
            timeoutSeconds: number;
        }
        /**
         * sessionAffinityConfig contains the configurations of session affinity.
         */
        interface ElasticMapsServerSpecHttpServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpServiceSpecSessionAffinityConfigClientIPPatch;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ElasticMapsServerSpecHttpTls {
            certificate: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpTlsCertificate;
            selfSignedCertificate: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpTlsSelfSignedCertificate;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ElasticMapsServerSpecHttpTlsCertificate {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
         *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
         */
        interface ElasticMapsServerSpecHttpTlsCertificatePatch {
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * TLS defines options for configuring TLS for HTTP.
         */
        interface ElasticMapsServerSpecHttpTlsPatch {
            certificate: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpTlsCertificatePatch;
            selfSignedCertificate: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpTlsSelfSignedCertificatePatch;
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ElasticMapsServerSpecHttpTlsSelfSignedCertificate {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpTlsSelfSignedCertificateSubjectAltNames[];
        }
        /**
         * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
         */
        interface ElasticMapsServerSpecHttpTlsSelfSignedCertificatePatch {
            /**
             * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
             */
            disabled: boolean;
            /**
             * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
             */
            subjectAltNames: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch[];
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ElasticMapsServerSpecHttpTlsSelfSignedCertificateSubjectAltNames {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * SubjectAlternativeName represents a SAN entry in a x509 certificate.
         */
        interface ElasticMapsServerSpecHttpTlsSelfSignedCertificateSubjectAltNamesPatch {
            /**
             * DNS is the DNS name of the subject.
             */
            dns: string;
            /**
             * IP is the IP address of the subject.
             */
            ip: string;
        }
        /**
         * MapsSpec holds the specification of an Elastic Maps Server instance.
         */
        interface ElasticMapsServerSpecPatch {
            /**
             * Config holds the ElasticMapsServer configuration. See: https://www.elastic.co/guide/en/kibana/current/maps-connect-to-ems.html#elastic-maps-server-configuration
             */
            config: {
                [key: string]: any;
            };
            configRef: outputs.maps.v1alpha1.ElasticMapsServerSpecConfigRefPatch;
            /**
             * Count of Elastic Maps Server instances to deploy.
             */
            count: number;
            elasticsearchRef: outputs.maps.v1alpha1.ElasticMapsServerSpecElasticsearchRefPatch;
            http: outputs.maps.v1alpha1.ElasticMapsServerSpecHttpPatch;
            /**
             * Image is the Elastic Maps Server Docker image to deploy.
             */
            image: string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Elastic Maps Server pods
             */
            podTemplate: {
                [key: string]: any;
            };
            /**
             * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
             */
            revisionHistoryLimit: number;
            /**
             * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
             */
            serviceAccountName: string;
            /**
             * Version of Elastic Maps Server.
             */
            version: string;
        }
        /**
         * MapsStatus defines the observed state of Elastic Maps Server
         */
        interface ElasticMapsServerStatus {
            /**
             * AssociationStatus is the status of an association resource.
             */
            associationStatus: string;
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * ObservedGeneration is the most recent generation observed for this Elastic Maps Server. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Elastic Maps controller has not yet processed the changes contained in the Elastic Maps specification.
             */
            observedGeneration: number;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
        }
        /**
         * MapsStatus defines the observed state of Elastic Maps Server
         */
        interface ElasticMapsServerStatusPatch {
            /**
             * AssociationStatus is the status of an association resource.
             */
            associationStatus: string;
            /**
             * AvailableNodes is the number of available replicas in the deployment.
             */
            availableNodes: number;
            /**
             * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
             */
            count: number;
            /**
             * Health of the deployment.
             */
            health: string;
            /**
             * ObservedGeneration is the most recent generation observed for this Elastic Maps Server. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Elastic Maps controller has not yet processed the changes contained in the Elastic Maps specification.
             */
            observedGeneration: number;
            /**
             * Selector is the label selector used to find all pods.
             */
            selector: string;
            /**
             * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
             */
            version: string;
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
export declare namespace stackconfigpolicy {
    namespace v1alpha1 {
        /**
         * StackConfigPolicy represents a StackConfigPolicy resource in a Kubernetes cluster.
         */
        interface StackConfigPolicy {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "stackconfigpolicy.k8s.elastic.co/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "StackConfigPolicy";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpec;
            status: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicyStatus;
        }
        interface StackConfigPolicySpec {
            elasticsearch: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecElasticsearch;
            resourceSelector: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecResourceSelector;
            secureSettings: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecSecureSettings[];
        }
        interface StackConfigPolicySpecElasticsearch {
            /**
             * ClusterSettings holds the Elasticsearch cluster settings (/_cluster/settings)
             */
            clusterSettings: {
                [key: string]: any;
            };
            /**
             * IndexLifecyclePolicies holds the Index Lifecycle policies settings (/_ilm/policy)
             */
            indexLifecyclePolicies: {
                [key: string]: any;
            };
            /**
             * IndexTemplates holds the Index and Component Templates settings
             */
            indexTemplates: {
                [key: string]: any;
            };
            /**
             * IngestPipelines holds the Ingest Pipelines settings (/_ingest/pipeline)
             */
            ingestPipelines: {
                [key: string]: any;
            };
            /**
             * SecurityRoleMappings holds the Role Mappings settings (/_security/role_mapping)
             */
            securityRoleMappings: {
                [key: string]: any;
            };
            /**
             * SnapshotLifecyclePolicies holds the Snapshot Lifecycle Policies settings (/_slm/policy)
             */
            snapshotLifecyclePolicies: {
                [key: string]: any;
            };
            /**
             * SnapshotRepositories holds the Snapshot Repositories settings (/_snapshot)
             */
            snapshotRepositories: {
                [key: string]: any;
            };
        }
        interface StackConfigPolicySpecElasticsearchPatch {
            /**
             * ClusterSettings holds the Elasticsearch cluster settings (/_cluster/settings)
             */
            clusterSettings: {
                [key: string]: any;
            };
            /**
             * IndexLifecyclePolicies holds the Index Lifecycle policies settings (/_ilm/policy)
             */
            indexLifecyclePolicies: {
                [key: string]: any;
            };
            /**
             * IndexTemplates holds the Index and Component Templates settings
             */
            indexTemplates: {
                [key: string]: any;
            };
            /**
             * IngestPipelines holds the Ingest Pipelines settings (/_ingest/pipeline)
             */
            ingestPipelines: {
                [key: string]: any;
            };
            /**
             * SecurityRoleMappings holds the Role Mappings settings (/_security/role_mapping)
             */
            securityRoleMappings: {
                [key: string]: any;
            };
            /**
             * SnapshotLifecyclePolicies holds the Snapshot Lifecycle Policies settings (/_slm/policy)
             */
            snapshotLifecyclePolicies: {
                [key: string]: any;
            };
            /**
             * SnapshotRepositories holds the Snapshot Repositories settings (/_snapshot)
             */
            snapshotRepositories: {
                [key: string]: any;
            };
        }
        interface StackConfigPolicySpecPatch {
            elasticsearch: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecElasticsearchPatch;
            resourceSelector: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecResourceSelectorPatch;
            secureSettings: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecSecureSettingsPatch[];
        }
        /**
         * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
         */
        interface StackConfigPolicySpecResourceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecResourceSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface StackConfigPolicySpecResourceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface StackConfigPolicySpecResourceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
         */
        interface StackConfigPolicySpecResourceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecResourceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface StackConfigPolicySpecSecureSettings {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecSecureSettingsEntries[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface StackConfigPolicySpecSecureSettingsEntries {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * KeyToPath defines how to map a key in a Secret object to a filesystem path.
         */
        interface StackConfigPolicySpecSecureSettingsEntriesPatch {
            /**
             * Key is the key contained in the secret.
             */
            key: string;
            /**
             * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
             */
            path: string;
        }
        /**
         * SecretSource defines a data source based on a Kubernetes Secret.
         */
        interface StackConfigPolicySpecSecureSettingsPatch {
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            entries: outputs.stackconfigpolicy.v1alpha1.StackConfigPolicySpecSecureSettingsEntriesPatch[];
            /**
             * SecretName is the name of the secret.
             */
            secretName: string;
        }
        interface StackConfigPolicyStatus {
            /**
             * Errors is the number of resources which have an incorrect configuration
             */
            errors: number;
            /**
             * ObservedGeneration is the most recent generation observed for this StackConfigPolicy.
             */
            observedGeneration: number;
            /**
             * Phase is the phase of the StackConfigPolicy.
             */
            phase: string;
            /**
             * Ready is the number of resources successfully configured.
             */
            ready: number;
            /**
             * ReadyCount is a human representation of the number of resources successfully configured.
             */
            readyCount: string;
            /**
             * Resources is the number of resources to be configured.
             */
            resources: number;
            /**
             * ResourcesStatuses holds the status for each resource to be configured.
             */
            resourcesStatuses: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        interface StackConfigPolicyStatusPatch {
            /**
             * Errors is the number of resources which have an incorrect configuration
             */
            errors: number;
            /**
             * ObservedGeneration is the most recent generation observed for this StackConfigPolicy.
             */
            observedGeneration: number;
            /**
             * Phase is the phase of the StackConfigPolicy.
             */
            phase: string;
            /**
             * Ready is the number of resources successfully configured.
             */
            ready: number;
            /**
             * ReadyCount is a human representation of the number of resources successfully configured.
             */
            readyCount: string;
            /**
             * Resources is the number of resources to be configured.
             */
            resources: number;
            /**
             * ResourcesStatuses holds the status for each resource to be configured.
             */
            resourcesStatuses: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
    }
}
