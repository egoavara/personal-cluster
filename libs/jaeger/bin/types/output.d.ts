import * as outputs from "../types/output";
export declare namespace jaegertracing {
    namespace v1 {
        interface Jaeger {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "jaegertracing.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Jaeger";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.jaegertracing.v1.JaegerSpec;
            status: outputs.jaegertracing.v1.JaegerStatus;
        }
        interface JaegerSpec {
            affinity: outputs.jaegertracing.v1.JaegerSpecAffinity;
            agent: outputs.jaegertracing.v1.JaegerSpecAgent;
            allInOne: outputs.jaegertracing.v1.JaegerSpecAllInOne;
            annotations: {
                [key: string]: string;
            };
            collector: outputs.jaegertracing.v1.JaegerSpecCollector;
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContext;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecImagePullSecrets[];
            ingester: outputs.jaegertracing.v1.JaegerSpecIngester;
            ingress: outputs.jaegertracing.v1.JaegerSpecIngress;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecLivenessProbe;
            query: outputs.jaegertracing.v1.JaegerSpecQuery;
            resources: outputs.jaegertracing.v1.JaegerSpecResources;
            sampling: outputs.jaegertracing.v1.JaegerSpecSampling;
            securityContext: outputs.jaegertracing.v1.JaegerSpecSecurityContext;
            serviceAccount: string;
            storage: outputs.jaegertracing.v1.JaegerSpecStorage;
            strategy: string;
            tolerations: outputs.jaegertracing.v1.JaegerSpecTolerations[];
            ui: outputs.jaegertracing.v1.JaegerSpecUi;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecVolumes[];
        }
        interface JaegerSpecAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinity;
        }
        interface JaegerSpecAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgent {
            affinity: outputs.jaegertracing.v1.JaegerSpecAgentAffinity;
            annotations: {
                [key: string]: string;
            };
            config: {
                [key: string]: any;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContext;
            dnsPolicy: string;
            hostNetwork: boolean;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecAgentImagePullSecrets[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbe;
            options: {
                [key: string]: any;
            };
            priorityClassName: string;
            resources: outputs.jaegertracing.v1.JaegerSpecAgentResources;
            securityContext: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContext;
            serviceAccount: string;
            sidecarSecurityContext: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContext;
            strategy: string;
            tolerations: outputs.jaegertracing.v1.JaegerSpecAgentTolerations[];
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecAgentVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecAgentVolumes[];
        }
        interface JaegerSpecAgentAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinity;
        }
        interface JaegerSpecAgentAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecAgentAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecAgentAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecAgentAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAgentContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecAgentContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecAgentContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecAgentContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecAgentContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAgentContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAgentContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAgentContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAgentContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAgentContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAgentImagePullSecrets {
            name: string;
        }
        interface JaegerSpecAgentImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecAgentLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecAgentLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecAgentLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecAgentLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecAgentLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecAgentLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecAgentLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecAgentLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecAgentLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecAgentLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecAgentLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecAgentLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecAgentPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecAgentAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            config: {
                [key: string]: any;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextPatch;
            dnsPolicy: string;
            hostNetwork: boolean;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecAgentImagePullSecretsPatch[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecAgentLivenessProbePatch;
            options: {
                [key: string]: any;
            };
            priorityClassName: string;
            resources: outputs.jaegertracing.v1.JaegerSpecAgentResourcesPatch;
            securityContext: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextPatch;
            serviceAccount: string;
            sidecarSecurityContext: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextPatch;
            strategy: string;
            tolerations: outputs.jaegertracing.v1.JaegerSpecAgentTolerationsPatch[];
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecAgentVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecAgentVolumesPatch[];
        }
        interface JaegerSpecAgentResources {
            claims: outputs.jaegertracing.v1.JaegerSpecAgentResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecAgentResourcesClaims {
            name: string;
        }
        interface JaegerSpecAgentResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecAgentResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecAgentResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecAgentSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextWindowsOptions;
        }
        interface JaegerSpecAgentSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAgentSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecAgentSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAgentSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAgentSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAgentSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAgentSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecAgentSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecAgentSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAgentSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAgentSidecarSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextWindowsOptions;
        }
        interface JaegerSpecAgentSidecarSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecAgentSidecarSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecAgentSidecarSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecAgentSidecarSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAgentSidecarSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAgentSidecarSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAgentSidecarSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAgentSidecarSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAgentSidecarSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAgentTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecAgentTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecAgentVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecAgentVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecAgentVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecAgentVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecAgentVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecAgentVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecAgentVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecAgentVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecAgentVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecAgentVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecAgentVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecAgentVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecAgentVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecAgentVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecAgentVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecAgentVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecAgentVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecAgentVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecAgentVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecAgentVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecAgentVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecAgentVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecAgentVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecAgentVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecAgentVolumesVsphereVolume;
        }
        interface JaegerSpecAgentVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecAgentVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecAgentVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecAgentVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecAgentVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecAgentVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecAgentVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecAgentVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecAgentVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecAgentVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecAgentVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecAgentVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecAgentVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAgentVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAgentVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecAgentVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItems[];
        }
        interface JaegerSpecAgentVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecAgentVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecAgentVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecAgentVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecAgentVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecAgentVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAgentVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecAgentVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecAgentVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecAgentVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecAgentVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecAgentVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecAgentVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecAgentVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecAgentVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecAgentVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecAgentVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecAgentVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecAgentVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecAgentVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecAgentVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecAgentVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecAgentVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecAgentVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecAgentVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecAgentVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecAgentVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecAgentVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecAgentVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecAgentVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecAgentVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecAgentVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecAgentVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecAgentVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecAgentVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecAgentVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecAgentVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecAgentVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecAgentVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecAgentVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecAgentVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecAgentVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecAgentVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecAgentVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecAgentVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecAgentVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecAgentVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecAgentVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecAgentVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecAgentVolumesVsphereVolumePatch;
        }
        interface JaegerSpecAgentVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecAgentVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecAgentVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecAgentVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecAgentVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecAgentVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecAgentVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSources[];
        }
        interface JaegerSpecAgentVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecAgentVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecAgentVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecAgentVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecAgentVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecAgentVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecAgentVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecAgentVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecAgentVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecAgentVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecAgentVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecAgentVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAgentVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAgentVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecAgentVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecAgentVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAgentVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecAgentVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecAgentVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAgentVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecAgentVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecAllInOne {
            affinity: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinity;
            annotations: {
                [key: string]: string;
            };
            config: {
                [key: string]: any;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContext;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecAllInOneImagePullSecrets[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbe;
            metricsStorage: outputs.jaegertracing.v1.JaegerSpecAllInOneMetricsStorage;
            options: {
                [key: string]: any;
            };
            priorityClassName: string;
            resources: outputs.jaegertracing.v1.JaegerSpecAllInOneResources;
            securityContext: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContext;
            serviceAccount: string;
            strategy: outputs.jaegertracing.v1.JaegerSpecAllInOneStrategy;
            tolerations: outputs.jaegertracing.v1.JaegerSpecAllInOneTolerations[];
            tracingEnabled: boolean;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumes[];
        }
        interface JaegerSpecAllInOneAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinity;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecAllInOneAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecAllInOneAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecAllInOneContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecAllInOneContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecAllInOneContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecAllInOneContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecAllInOneContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAllInOneContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAllInOneContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAllInOneContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAllInOneContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAllInOneContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAllInOneImagePullSecrets {
            name: string;
        }
        interface JaegerSpecAllInOneImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecAllInOneLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecAllInOneLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecAllInOneLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecAllInOneLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecAllInOneLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecAllInOneLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecAllInOneLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecAllInOneLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecAllInOneLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecAllInOneLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecAllInOneLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecAllInOneLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecAllInOneMetricsStorage {
            type: string;
        }
        interface JaegerSpecAllInOneMetricsStoragePatch {
            type: string;
        }
        interface JaegerSpecAllInOnePatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            config: {
                [key: string]: any;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextPatch;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecAllInOneImagePullSecretsPatch[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbePatch;
            metricsStorage: outputs.jaegertracing.v1.JaegerSpecAllInOneMetricsStoragePatch;
            options: {
                [key: string]: any;
            };
            priorityClassName: string;
            resources: outputs.jaegertracing.v1.JaegerSpecAllInOneResourcesPatch;
            securityContext: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextPatch;
            serviceAccount: string;
            strategy: outputs.jaegertracing.v1.JaegerSpecAllInOneStrategyPatch;
            tolerations: outputs.jaegertracing.v1.JaegerSpecAllInOneTolerationsPatch[];
            tracingEnabled: boolean;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPatch[];
        }
        interface JaegerSpecAllInOneResources {
            claims: outputs.jaegertracing.v1.JaegerSpecAllInOneResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecAllInOneResourcesClaims {
            name: string;
        }
        interface JaegerSpecAllInOneResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecAllInOneResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecAllInOneResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecAllInOneSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextWindowsOptions;
        }
        interface JaegerSpecAllInOneSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecAllInOneSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAllInOneSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecAllInOneSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAllInOneSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecAllInOneSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecAllInOneSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecAllInOneSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAllInOneSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecAllInOneStrategy {
            rollingUpdate: outputs.jaegertracing.v1.JaegerSpecAllInOneStrategyRollingUpdate;
            type: string;
        }
        interface JaegerSpecAllInOneStrategyPatch {
            rollingUpdate: outputs.jaegertracing.v1.JaegerSpecAllInOneStrategyRollingUpdatePatch;
            type: string;
        }
        interface JaegerSpecAllInOneStrategyRollingUpdate {
            maxSurge: number | string;
            maxUnavailable: number | string;
        }
        interface JaegerSpecAllInOneStrategyRollingUpdatePatch {
            maxSurge: number | string;
            maxUnavailable: number | string;
        }
        interface JaegerSpecAllInOneTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecAllInOneTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecAllInOneVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecAllInOneVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecAllInOneVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesVsphereVolume;
        }
        interface JaegerSpecAllInOneVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecAllInOneVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecAllInOneVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecAllInOneVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecAllInOneVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecAllInOneVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecAllInOneVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecAllInOneVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecAllInOneVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecAllInOneVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecAllInOneVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAllInOneVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAllInOneVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItems[];
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecAllInOneVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecAllInOneVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecAllInOneVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecAllInOneVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecAllInOneVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecAllInOneVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecAllInOneVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecAllInOneVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecAllInOneVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecAllInOneVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecAllInOneVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecAllInOneVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecAllInOneVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecAllInOneVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecAllInOneVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecAllInOneVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecAllInOneVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecAllInOneVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecAllInOneVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecAllInOneVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecAllInOneVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecAllInOneVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecAllInOneVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesVsphereVolumePatch;
        }
        interface JaegerSpecAllInOneVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecAllInOneVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecAllInOneVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecAllInOneVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecAllInOneVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecAllInOneVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecAllInOneVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSources[];
        }
        interface JaegerSpecAllInOneVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecAllInOneVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecAllInOneVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecAllInOneVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecAllInOneVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecAllInOneVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecAllInOneVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecAllInOneVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecAllInOneVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecAllInOneVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecAllInOneVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecAllInOneVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecAllInOneVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecAllInOneVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecAllInOneVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecAllInOneVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecCollector {
            affinity: outputs.jaegertracing.v1.JaegerSpecCollectorAffinity;
            annotations: {
                [key: string]: string;
            };
            autoscale: boolean;
            config: {
                [key: string]: any;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContext;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecCollectorImagePullSecrets[];
            kafkaSecretName: string;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbe;
            maxReplicas: number;
            minReplicas: number;
            nodeSelector: {
                [key: string]: string;
            };
            options: {
                [key: string]: any;
            };
            priorityClassName: string;
            replicas: number;
            resources: outputs.jaegertracing.v1.JaegerSpecCollectorResources;
            securityContext: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContext;
            serviceAccount: string;
            serviceType: string;
            strategy: outputs.jaegertracing.v1.JaegerSpecCollectorStrategy;
            tolerations: outputs.jaegertracing.v1.JaegerSpecCollectorTolerations[];
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecCollectorVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecCollectorVolumes[];
        }
        interface JaegerSpecCollectorAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinity;
        }
        interface JaegerSpecCollectorAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecCollectorAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecCollectorAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecCollectorContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecCollectorContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecCollectorContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecCollectorContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecCollectorContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecCollectorContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecCollectorContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecCollectorContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecCollectorContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecCollectorContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecCollectorImagePullSecrets {
            name: string;
        }
        interface JaegerSpecCollectorImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecCollectorLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecCollectorLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecCollectorLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecCollectorLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecCollectorLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecCollectorLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecCollectorLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecCollectorLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecCollectorLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecCollectorLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecCollectorLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecCollectorLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecCollectorPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecCollectorAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            autoscale: boolean;
            config: {
                [key: string]: any;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextPatch;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecCollectorImagePullSecretsPatch[];
            kafkaSecretName: string;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbePatch;
            maxReplicas: number;
            minReplicas: number;
            nodeSelector: {
                [key: string]: string;
            };
            options: {
                [key: string]: any;
            };
            priorityClassName: string;
            replicas: number;
            resources: outputs.jaegertracing.v1.JaegerSpecCollectorResourcesPatch;
            securityContext: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextPatch;
            serviceAccount: string;
            serviceType: string;
            strategy: outputs.jaegertracing.v1.JaegerSpecCollectorStrategyPatch;
            tolerations: outputs.jaegertracing.v1.JaegerSpecCollectorTolerationsPatch[];
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecCollectorVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesPatch[];
        }
        interface JaegerSpecCollectorResources {
            claims: outputs.jaegertracing.v1.JaegerSpecCollectorResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecCollectorResourcesClaims {
            name: string;
        }
        interface JaegerSpecCollectorResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecCollectorResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecCollectorResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecCollectorSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextWindowsOptions;
        }
        interface JaegerSpecCollectorSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecCollectorSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecCollectorSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecCollectorSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecCollectorSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecCollectorSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecCollectorSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecCollectorSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecCollectorSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecCollectorStrategy {
            rollingUpdate: outputs.jaegertracing.v1.JaegerSpecCollectorStrategyRollingUpdate;
            type: string;
        }
        interface JaegerSpecCollectorStrategyPatch {
            rollingUpdate: outputs.jaegertracing.v1.JaegerSpecCollectorStrategyRollingUpdatePatch;
            type: string;
        }
        interface JaegerSpecCollectorStrategyRollingUpdate {
            maxSurge: number | string;
            maxUnavailable: number | string;
        }
        interface JaegerSpecCollectorStrategyRollingUpdatePatch {
            maxSurge: number | string;
            maxUnavailable: number | string;
        }
        interface JaegerSpecCollectorTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecCollectorTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecCollectorVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecCollectorVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecCollectorVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesVsphereVolume;
        }
        interface JaegerSpecCollectorVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecCollectorVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecCollectorVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecCollectorVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecCollectorVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecCollectorVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecCollectorVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecCollectorVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecCollectorVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecCollectorVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecCollectorVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecCollectorVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecCollectorVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecCollectorVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecCollectorVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecCollectorVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItems[];
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecCollectorVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecCollectorVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecCollectorVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecCollectorVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecCollectorVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecCollectorVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecCollectorVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecCollectorVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecCollectorVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecCollectorVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecCollectorVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecCollectorVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecCollectorVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecCollectorVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecCollectorVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecCollectorVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecCollectorVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecCollectorVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecCollectorVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecCollectorVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecCollectorVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecCollectorVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecCollectorVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecCollectorVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecCollectorVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesVsphereVolumePatch;
        }
        interface JaegerSpecCollectorVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecCollectorVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecCollectorVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecCollectorVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecCollectorVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecCollectorVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecCollectorVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSources[];
        }
        interface JaegerSpecCollectorVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecCollectorVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecCollectorVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecCollectorVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecCollectorVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecCollectorVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecCollectorVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecCollectorVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecCollectorVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecCollectorVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecCollectorVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecCollectorVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecCollectorVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecCollectorVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecCollectorVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecCollectorVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecCollectorVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecCollectorVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecCollectorVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecImagePullSecrets {
            name: string;
        }
        interface JaegerSpecImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecIngester {
            affinity: outputs.jaegertracing.v1.JaegerSpecIngesterAffinity;
            annotations: {
                [key: string]: string;
            };
            autoscale: boolean;
            config: {
                [key: string]: any;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContext;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecIngesterImagePullSecrets[];
            kafkaSecretName: string;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbe;
            maxReplicas: number;
            minReplicas: number;
            nodeSelector: {
                [key: string]: string;
            };
            options: {
                [key: string]: any;
            };
            replicas: number;
            resources: outputs.jaegertracing.v1.JaegerSpecIngesterResources;
            securityContext: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContext;
            serviceAccount: string;
            strategy: outputs.jaegertracing.v1.JaegerSpecIngesterStrategy;
            tolerations: outputs.jaegertracing.v1.JaegerSpecIngesterTolerations[];
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecIngesterVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecIngesterVolumes[];
        }
        interface JaegerSpecIngesterAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinity;
        }
        interface JaegerSpecIngesterAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecIngesterAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecIngesterAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngesterContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecIngesterContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecIngesterContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecIngesterContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecIngesterContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecIngesterContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecIngesterContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecIngesterContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecIngesterContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecIngesterContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecIngesterImagePullSecrets {
            name: string;
        }
        interface JaegerSpecIngesterImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecIngesterLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecIngesterLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecIngesterLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecIngesterLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecIngesterLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecIngesterLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecIngesterLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecIngesterLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecIngesterLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecIngesterLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecIngesterLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecIngesterLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecIngesterPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecIngesterAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            autoscale: boolean;
            config: {
                [key: string]: any;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextPatch;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecIngesterImagePullSecretsPatch[];
            kafkaSecretName: string;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbePatch;
            maxReplicas: number;
            minReplicas: number;
            nodeSelector: {
                [key: string]: string;
            };
            options: {
                [key: string]: any;
            };
            replicas: number;
            resources: outputs.jaegertracing.v1.JaegerSpecIngesterResourcesPatch;
            securityContext: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextPatch;
            serviceAccount: string;
            strategy: outputs.jaegertracing.v1.JaegerSpecIngesterStrategyPatch;
            tolerations: outputs.jaegertracing.v1.JaegerSpecIngesterTolerationsPatch[];
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecIngesterVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesPatch[];
        }
        interface JaegerSpecIngesterResources {
            claims: outputs.jaegertracing.v1.JaegerSpecIngesterResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecIngesterResourcesClaims {
            name: string;
        }
        interface JaegerSpecIngesterResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecIngesterResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecIngesterResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecIngesterSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextWindowsOptions;
        }
        interface JaegerSpecIngesterSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecIngesterSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecIngesterSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecIngesterSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecIngesterSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecIngesterSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecIngesterSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecIngesterSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecIngesterSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecIngesterStrategy {
            rollingUpdate: outputs.jaegertracing.v1.JaegerSpecIngesterStrategyRollingUpdate;
            type: string;
        }
        interface JaegerSpecIngesterStrategyPatch {
            rollingUpdate: outputs.jaegertracing.v1.JaegerSpecIngesterStrategyRollingUpdatePatch;
            type: string;
        }
        interface JaegerSpecIngesterStrategyRollingUpdate {
            maxSurge: number | string;
            maxUnavailable: number | string;
        }
        interface JaegerSpecIngesterStrategyRollingUpdatePatch {
            maxSurge: number | string;
            maxUnavailable: number | string;
        }
        interface JaegerSpecIngesterTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecIngesterTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecIngesterVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecIngesterVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecIngesterVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesVsphereVolume;
        }
        interface JaegerSpecIngesterVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecIngesterVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecIngesterVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngesterVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngesterVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecIngesterVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecIngesterVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecIngesterVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecIngesterVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecIngesterVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecIngesterVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecIngesterVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecIngesterVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngesterVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngesterVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecIngesterVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItems[];
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecIngesterVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecIngesterVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecIngesterVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecIngesterVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngesterVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecIngesterVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecIngesterVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecIngesterVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecIngesterVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecIngesterVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecIngesterVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecIngesterVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngesterVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngesterVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecIngesterVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecIngesterVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngesterVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngesterVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecIngesterVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecIngesterVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecIngesterVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecIngesterVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecIngesterVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecIngesterVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecIngesterVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesVsphereVolumePatch;
        }
        interface JaegerSpecIngesterVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngesterVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngesterVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecIngesterVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecIngesterVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecIngesterVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecIngesterVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSources[];
        }
        interface JaegerSpecIngesterVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecIngesterVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecIngesterVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecIngesterVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecIngesterVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecIngesterVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecIngesterVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecIngesterVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecIngesterVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecIngesterVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecIngesterVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngesterVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecIngesterVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecIngesterVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngesterVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecIngesterVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecIngesterVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngesterVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecIngesterVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecIngress {
            affinity: outputs.jaegertracing.v1.JaegerSpecIngressAffinity;
            annotations: {
                [key: string]: string;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContext;
            enabled: boolean;
            hosts: string[];
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecIngressImagePullSecrets[];
            ingressClassName: string;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbe;
            openshift: outputs.jaegertracing.v1.JaegerSpecIngressOpenshift;
            options: {
                [key: string]: any;
            };
            pathType: string;
            resources: outputs.jaegertracing.v1.JaegerSpecIngressResources;
            secretName: string;
            security: string;
            securityContext: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContext;
            serviceAccount: string;
            tls: outputs.jaegertracing.v1.JaegerSpecIngressTls[];
            tolerations: outputs.jaegertracing.v1.JaegerSpecIngressTolerations[];
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecIngressVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecIngressVolumes[];
        }
        interface JaegerSpecIngressAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinity;
        }
        interface JaegerSpecIngressAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecIngressAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecIngressAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecIngressAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecIngressContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecIngressContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecIngressContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecIngressContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecIngressContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecIngressContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecIngressContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecIngressContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecIngressContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecIngressContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecIngressImagePullSecrets {
            name: string;
        }
        interface JaegerSpecIngressImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecIngressLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecIngressLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecIngressLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecIngressLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecIngressLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecIngressLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecIngressLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecIngressLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecIngressLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecIngressLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecIngressLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecIngressLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecIngressOpenshift {
            delegateUrls: string;
            htpasswdFile: string;
            sar: string;
            skipLogout: boolean;
        }
        interface JaegerSpecIngressOpenshiftPatch {
            delegateUrls: string;
            htpasswdFile: string;
            sar: string;
            skipLogout: boolean;
        }
        interface JaegerSpecIngressPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecIngressAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextPatch;
            enabled: boolean;
            hosts: string[];
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecIngressImagePullSecretsPatch[];
            ingressClassName: string;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecIngressLivenessProbePatch;
            openshift: outputs.jaegertracing.v1.JaegerSpecIngressOpenshiftPatch;
            options: {
                [key: string]: any;
            };
            pathType: string;
            resources: outputs.jaegertracing.v1.JaegerSpecIngressResourcesPatch;
            secretName: string;
            security: string;
            securityContext: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextPatch;
            serviceAccount: string;
            tls: outputs.jaegertracing.v1.JaegerSpecIngressTlsPatch[];
            tolerations: outputs.jaegertracing.v1.JaegerSpecIngressTolerationsPatch[];
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecIngressVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecIngressVolumesPatch[];
        }
        interface JaegerSpecIngressResources {
            claims: outputs.jaegertracing.v1.JaegerSpecIngressResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecIngressResourcesClaims {
            name: string;
        }
        interface JaegerSpecIngressResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecIngressResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecIngressResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecIngressSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextWindowsOptions;
        }
        interface JaegerSpecIngressSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecIngressSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecIngressSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecIngressSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecIngressSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecIngressSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecIngressSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecIngressSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecIngressSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecIngressSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecIngressTls {
            hosts: string[];
            secretName: string;
        }
        interface JaegerSpecIngressTlsPatch {
            hosts: string[];
            secretName: string;
        }
        interface JaegerSpecIngressTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecIngressTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecIngressVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecIngressVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecIngressVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecIngressVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecIngressVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecIngressVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecIngressVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecIngressVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecIngressVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecIngressVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecIngressVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecIngressVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecIngressVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecIngressVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecIngressVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecIngressVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecIngressVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecIngressVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecIngressVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecIngressVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecIngressVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecIngressVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecIngressVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecIngressVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecIngressVolumesVsphereVolume;
        }
        interface JaegerSpecIngressVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecIngressVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecIngressVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngressVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngressVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecIngressVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecIngressVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecIngressVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecIngressVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecIngressVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecIngressVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecIngressVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecIngressVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngressVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngressVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecIngressVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItems[];
        }
        interface JaegerSpecIngressVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecIngressVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecIngressVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecIngressVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecIngressVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecIngressVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecIngressVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecIngressVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecIngressVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecIngressVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecIngressVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecIngressVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecIngressVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecIngressVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngressVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngressVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecIngressVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecIngressVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngressVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngressVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecIngressVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecIngressVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecIngressVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecIngressVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecIngressVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecIngressVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecIngressVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecIngressVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecIngressVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecIngressVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecIngressVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecIngressVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecIngressVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecIngressVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecIngressVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecIngressVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecIngressVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecIngressVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecIngressVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecIngressVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecIngressVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecIngressVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecIngressVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecIngressVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecIngressVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecIngressVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecIngressVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecIngressVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecIngressVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecIngressVolumesVsphereVolumePatch;
        }
        interface JaegerSpecIngressVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngressVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecIngressVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecIngressVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecIngressVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecIngressVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecIngressVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSources[];
        }
        interface JaegerSpecIngressVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecIngressVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecIngressVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecIngressVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecIngressVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecIngressVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecIngressVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecIngressVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecIngressVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecIngressVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecIngressVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecIngressVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecIngressVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecIngressVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecIngressVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecIngressVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecIngressVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecIngressVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecIngressVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecIngressVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecIngressVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecAffinityPatch;
            agent: outputs.jaegertracing.v1.JaegerSpecAgentPatch;
            allInOne: outputs.jaegertracing.v1.JaegerSpecAllInOnePatch;
            annotations: {
                [key: string]: string;
            };
            collector: outputs.jaegertracing.v1.JaegerSpecCollectorPatch;
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecContainerSecurityContextPatch;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecImagePullSecretsPatch[];
            ingester: outputs.jaegertracing.v1.JaegerSpecIngesterPatch;
            ingress: outputs.jaegertracing.v1.JaegerSpecIngressPatch;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecLivenessProbePatch;
            query: outputs.jaegertracing.v1.JaegerSpecQueryPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecResourcesPatch;
            sampling: outputs.jaegertracing.v1.JaegerSpecSamplingPatch;
            securityContext: outputs.jaegertracing.v1.JaegerSpecSecurityContextPatch;
            serviceAccount: string;
            storage: outputs.jaegertracing.v1.JaegerSpecStoragePatch;
            strategy: string;
            tolerations: outputs.jaegertracing.v1.JaegerSpecTolerationsPatch[];
            ui: outputs.jaegertracing.v1.JaegerSpecUiPatch;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecVolumesPatch[];
        }
        interface JaegerSpecQuery {
            affinity: outputs.jaegertracing.v1.JaegerSpecQueryAffinity;
            annotations: {
                [key: string]: string;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContext;
            grpcNodePort: number;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecQueryImagePullSecrets[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbe;
            metricsStorage: outputs.jaegertracing.v1.JaegerSpecQueryMetricsStorage;
            nodePort: number;
            nodeSelector: {
                [key: string]: string;
            };
            options: {
                [key: string]: any;
            };
            priorityClassName: string;
            replicas: number;
            resources: outputs.jaegertracing.v1.JaegerSpecQueryResources;
            securityContext: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContext;
            serviceAccount: string;
            serviceType: string;
            strategy: outputs.jaegertracing.v1.JaegerSpecQueryStrategy;
            tolerations: outputs.jaegertracing.v1.JaegerSpecQueryTolerations[];
            tracingEnabled: boolean;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecQueryVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecQueryVolumes[];
        }
        interface JaegerSpecQueryAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinity;
        }
        interface JaegerSpecQueryAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecQueryAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecQueryAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecQueryAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecQueryContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecQueryContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecQueryContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecQueryContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecQueryContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecQueryContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecQueryContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecQueryContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecQueryContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecQueryContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecQueryImagePullSecrets {
            name: string;
        }
        interface JaegerSpecQueryImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecQueryLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecQueryLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecQueryLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecQueryLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecQueryLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecQueryLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecQueryLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecQueryLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecQueryLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecQueryLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecQueryLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecQueryLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecQueryMetricsStorage {
            type: string;
        }
        interface JaegerSpecQueryMetricsStoragePatch {
            type: string;
        }
        interface JaegerSpecQueryPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecQueryAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextPatch;
            grpcNodePort: number;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecQueryImagePullSecretsPatch[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecQueryLivenessProbePatch;
            metricsStorage: outputs.jaegertracing.v1.JaegerSpecQueryMetricsStoragePatch;
            nodePort: number;
            nodeSelector: {
                [key: string]: string;
            };
            options: {
                [key: string]: any;
            };
            priorityClassName: string;
            replicas: number;
            resources: outputs.jaegertracing.v1.JaegerSpecQueryResourcesPatch;
            securityContext: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextPatch;
            serviceAccount: string;
            serviceType: string;
            strategy: outputs.jaegertracing.v1.JaegerSpecQueryStrategyPatch;
            tolerations: outputs.jaegertracing.v1.JaegerSpecQueryTolerationsPatch[];
            tracingEnabled: boolean;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecQueryVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecQueryVolumesPatch[];
        }
        interface JaegerSpecQueryResources {
            claims: outputs.jaegertracing.v1.JaegerSpecQueryResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecQueryResourcesClaims {
            name: string;
        }
        interface JaegerSpecQueryResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecQueryResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecQueryResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecQuerySecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextWindowsOptions;
        }
        interface JaegerSpecQuerySecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecQuerySecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecQuerySecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecQuerySecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecQuerySecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecQuerySecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecQuerySecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecQuerySecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecQuerySecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecQuerySecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecQueryStrategy {
            rollingUpdate: outputs.jaegertracing.v1.JaegerSpecQueryStrategyRollingUpdate;
            type: string;
        }
        interface JaegerSpecQueryStrategyPatch {
            rollingUpdate: outputs.jaegertracing.v1.JaegerSpecQueryStrategyRollingUpdatePatch;
            type: string;
        }
        interface JaegerSpecQueryStrategyRollingUpdate {
            maxSurge: number | string;
            maxUnavailable: number | string;
        }
        interface JaegerSpecQueryStrategyRollingUpdatePatch {
            maxSurge: number | string;
            maxUnavailable: number | string;
        }
        interface JaegerSpecQueryTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecQueryTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecQueryVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecQueryVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecQueryVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecQueryVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecQueryVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecQueryVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecQueryVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecQueryVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecQueryVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecQueryVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecQueryVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecQueryVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecQueryVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecQueryVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecQueryVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecQueryVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecQueryVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecQueryVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecQueryVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecQueryVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecQueryVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecQueryVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecQueryVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecQueryVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecQueryVolumesVsphereVolume;
        }
        interface JaegerSpecQueryVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecQueryVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecQueryVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecQueryVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecQueryVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecQueryVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecQueryVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecQueryVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecQueryVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecQueryVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecQueryVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecQueryVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecQueryVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecQueryVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecQueryVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecQueryVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItems[];
        }
        interface JaegerSpecQueryVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecQueryVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecQueryVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecQueryVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecQueryVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecQueryVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecQueryVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecQueryVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecQueryVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecQueryVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecQueryVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecQueryVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecQueryVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecQueryVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecQueryVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecQueryVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecQueryVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecQueryVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecQueryVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecQueryVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecQueryVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecQueryVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecQueryVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecQueryVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecQueryVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecQueryVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecQueryVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecQueryVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecQueryVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecQueryVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecQueryVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecQueryVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecQueryVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecQueryVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecQueryVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecQueryVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecQueryVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecQueryVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecQueryVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecQueryVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecQueryVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecQueryVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecQueryVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecQueryVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecQueryVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecQueryVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecQueryVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecQueryVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecQueryVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecQueryVolumesVsphereVolumePatch;
        }
        interface JaegerSpecQueryVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecQueryVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecQueryVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecQueryVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecQueryVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecQueryVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecQueryVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSources[];
        }
        interface JaegerSpecQueryVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecQueryVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecQueryVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecQueryVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecQueryVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecQueryVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecQueryVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecQueryVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecQueryVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecQueryVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecQueryVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecQueryVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecQueryVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecQueryVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecQueryVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecQueryVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecQueryVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecQueryVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecQueryVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecQueryVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecQueryVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecSampling {
            options: {
                [key: string]: any;
            };
        }
        interface JaegerSpecSamplingPatch {
            options: {
                [key: string]: any;
            };
        }
        interface JaegerSpecSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecSecurityContextWindowsOptions;
        }
        interface JaegerSpecSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorage {
            cassandraCreateSchema: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchema;
            dependencies: outputs.jaegertracing.v1.JaegerSpecStorageDependencies;
            elasticsearch: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearch;
            esIndexCleaner: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleaner;
            esRollover: outputs.jaegertracing.v1.JaegerSpecStorageEsRollover;
            grpcPlugin: outputs.jaegertracing.v1.JaegerSpecStorageGrpcPlugin;
            options: {
                [key: string]: any;
            };
            secretName: string;
            type: string;
        }
        interface JaegerSpecStorageCassandraCreateSchema {
            affinity: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinity;
            datacenter: string;
            enabled: boolean;
            image: string;
            mode: string;
            timeout: string;
            traceTTL: string;
            ttlSecondsAfterFinished: number;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinity;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageCassandraCreateSchemaPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPatch;
            datacenter: string;
            enabled: boolean;
            image: string;
            mode: string;
            timeout: string;
            traceTTL: string;
            ttlSecondsAfterFinished: number;
        }
        interface JaegerSpecStorageDependencies {
            affinity: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinity;
            annotations: {
                [key: string]: string;
            };
            backoffLimit: number;
            cassandraClientAuthEnabled: boolean;
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContext;
            elasticsearchClientNodeOnly: boolean;
            elasticsearchNodesWanOnly: boolean;
            elasticsearchTimeRange: string;
            enabled: boolean;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesImagePullSecrets[];
            javaOpts: string;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbe;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesResources;
            schedule: string;
            securityContext: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContext;
            serviceAccount: string;
            sparkMaster: string;
            successfulJobsHistoryLimit: number;
            tolerations: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesTolerations[];
            ttlSecondsAfterFinished: number;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumes[];
        }
        interface JaegerSpecStorageDependenciesAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinity;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecStorageDependenciesAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageDependenciesImagePullSecrets {
            name: string;
        }
        interface JaegerSpecStorageDependenciesImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecStorageDependenciesLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecStorageDependenciesLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecStorageDependenciesLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecStorageDependenciesPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            backoffLimit: number;
            cassandraClientAuthEnabled: boolean;
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextPatch;
            elasticsearchClientNodeOnly: boolean;
            elasticsearchNodesWanOnly: boolean;
            elasticsearchTimeRange: string;
            enabled: boolean;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesImagePullSecretsPatch[];
            javaOpts: string;
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbePatch;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesResourcesPatch;
            schedule: string;
            securityContext: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextPatch;
            serviceAccount: string;
            sparkMaster: string;
            successfulJobsHistoryLimit: number;
            tolerations: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesTolerationsPatch[];
            ttlSecondsAfterFinished: number;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPatch[];
        }
        interface JaegerSpecStorageDependenciesResources {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageDependenciesResourcesClaims {
            name: string;
        }
        interface JaegerSpecStorageDependenciesResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageDependenciesSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextWindowsOptions;
        }
        interface JaegerSpecStorageDependenciesSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageDependenciesSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageDependenciesSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageDependenciesTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecStorageDependenciesTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecStorageDependenciesVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecStorageDependenciesVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecStorageDependenciesVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesVsphereVolume;
        }
        interface JaegerSpecStorageDependenciesVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecStorageDependenciesVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItems[];
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecStorageDependenciesVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecStorageDependenciesVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageDependenciesVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecStorageDependenciesVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecStorageDependenciesVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecStorageDependenciesVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecStorageDependenciesVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecStorageDependenciesVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecStorageDependenciesVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecStorageDependenciesVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecStorageDependenciesVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecStorageDependenciesVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecStorageDependenciesVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecStorageDependenciesVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecStorageDependenciesVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesVsphereVolumePatch;
        }
        interface JaegerSpecStorageDependenciesVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSources[];
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecStorageDependenciesVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecStorageDependenciesVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecStorageDependenciesVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecStorageDependenciesVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecStorageDependenciesVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecStorageDependenciesVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecStorageDependenciesVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageDependenciesVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecStorageDependenciesVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecStorageDependenciesVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecStorageDependenciesVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageDependenciesVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecStorageDependenciesVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecStorageElasticsearch {
            doNotProvision: boolean;
            image: string;
            name: string;
            nodeCount: number;
            nodeSelector: {
                [key: string]: string;
            };
            proxyResources: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchProxyResources;
            redundancyPolicy: string;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchResources;
            storage: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchStorage;
            tolerations: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchTolerations[];
            useCertManagement: boolean;
        }
        interface JaegerSpecStorageElasticsearchPatch {
            doNotProvision: boolean;
            image: string;
            name: string;
            nodeCount: number;
            nodeSelector: {
                [key: string]: string;
            };
            proxyResources: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchProxyResourcesPatch;
            redundancyPolicy: string;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchResourcesPatch;
            storage: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchStoragePatch;
            tolerations: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchTolerationsPatch[];
            useCertManagement: boolean;
        }
        interface JaegerSpecStorageElasticsearchProxyResources {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchProxyResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageElasticsearchProxyResourcesClaims {
            name: string;
        }
        interface JaegerSpecStorageElasticsearchProxyResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecStorageElasticsearchProxyResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchProxyResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageElasticsearchResources {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageElasticsearchResourcesClaims {
            name: string;
        }
        interface JaegerSpecStorageElasticsearchResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecStorageElasticsearchResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageElasticsearchStorage {
            size: number | string;
            storageClassName: string;
        }
        interface JaegerSpecStorageElasticsearchStoragePatch {
            size: number | string;
            storageClassName: string;
        }
        interface JaegerSpecStorageElasticsearchTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecStorageElasticsearchTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecStorageEsIndexCleaner {
            affinity: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinity;
            annotations: {
                [key: string]: string;
            };
            backoffLimit: number;
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContext;
            enabled: boolean;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerImagePullSecrets[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbe;
            numberOfDays: number;
            priorityClassName: string;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerResources;
            schedule: string;
            securityContext: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContext;
            serviceAccount: string;
            successfulJobsHistoryLimit: number;
            tolerations: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerTolerations[];
            ttlSecondsAfterFinished: number;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumes[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinity;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerImagePullSecrets {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecStorageEsIndexCleanerPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            backoffLimit: number;
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextPatch;
            enabled: boolean;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerImagePullSecretsPatch[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbePatch;
            numberOfDays: number;
            priorityClassName: string;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerResourcesPatch;
            schedule: string;
            securityContext: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextPatch;
            serviceAccount: string;
            successfulJobsHistoryLimit: number;
            tolerations: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerTolerationsPatch[];
            ttlSecondsAfterFinished: number;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerResources {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerResourcesClaims {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextWindowsOptions;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecStorageEsIndexCleanerTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesVsphereVolume;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItems[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesVsphereVolumePatch;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSources[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecStorageEsRollover {
            affinity: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinity;
            annotations: {
                [key: string]: string;
            };
            backoffLimit: number;
            conditions: string;
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContext;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverImagePullSecrets[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbe;
            readTTL: string;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverResources;
            schedule: string;
            securityContext: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContext;
            serviceAccount: string;
            successfulJobsHistoryLimit: number;
            tolerations: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverTolerations[];
            ttlSecondsAfterFinished: number;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumeMounts[];
            volumes: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumes[];
        }
        interface JaegerSpecStorageEsRolloverAffinity {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinity;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinity;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinity;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPatch {
            nodeAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPatch;
            podAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPatch;
            podAntiAffinity: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPatch;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            namespaceSelector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContext {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextSeccompProfile;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextWindowsOptions;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            capabilities: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageEsRolloverImagePullSecrets {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverImagePullSecretsPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbe {
            exec: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeGrpc;
            httpGet: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeExec {
            command: string[];
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeExecPatch {
            command: string[];
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbePatch {
            exec: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeGrpcPatch;
            httpGet: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface JaegerSpecStorageEsRolloverPatch {
            affinity: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPatch;
            annotations: {
                [key: string]: string;
            };
            backoffLimit: number;
            conditions: string;
            containerSecurityContext: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextPatch;
            image: string;
            imagePullPolicy: string;
            imagePullSecrets: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverImagePullSecretsPatch[];
            labels: {
                [key: string]: string;
            };
            livenessProbe: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbePatch;
            readTTL: string;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverResourcesPatch;
            schedule: string;
            securityContext: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextPatch;
            serviceAccount: string;
            successfulJobsHistoryLimit: number;
            tolerations: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverTolerationsPatch[];
            ttlSecondsAfterFinished: number;
            volumeMounts: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumeMountsPatch[];
            volumes: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPatch[];
        }
        interface JaegerSpecStorageEsRolloverResources {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageEsRolloverResourcesClaims {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageEsRolloverSecurityContext {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSeLinuxOptions;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSeccompProfile;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSysctls[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextWindowsOptions;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextPatch {
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            sysctls: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSysctlsPatch[];
            windowsOptions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextWindowsOptionsPatch;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface JaegerSpecStorageEsRolloverTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecStorageEsRolloverTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecStorageEsRolloverVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecStorageEsRolloverVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecStorageEsRolloverVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesVsphereVolume;
        }
        interface JaegerSpecStorageEsRolloverVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItems[];
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecStorageEsRolloverVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecStorageEsRolloverVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecStorageEsRolloverVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecStorageEsRolloverVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesVsphereVolumePatch;
        }
        interface JaegerSpecStorageEsRolloverVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSources[];
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecStorageEsRolloverVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecStorageGrpcPlugin {
            image: string;
        }
        interface JaegerSpecStorageGrpcPluginPatch {
            image: string;
        }
        interface JaegerSpecStoragePatch {
            cassandraCreateSchema: outputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaPatch;
            dependencies: outputs.jaegertracing.v1.JaegerSpecStorageDependenciesPatch;
            elasticsearch: outputs.jaegertracing.v1.JaegerSpecStorageElasticsearchPatch;
            esIndexCleaner: outputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerPatch;
            esRollover: outputs.jaegertracing.v1.JaegerSpecStorageEsRolloverPatch;
            grpcPlugin: outputs.jaegertracing.v1.JaegerSpecStorageGrpcPluginPatch;
            options: {
                [key: string]: any;
            };
            secretName: string;
            type: string;
        }
        interface JaegerSpecTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface JaegerSpecUi {
            options: {
                [key: string]: any;
            };
        }
        interface JaegerSpecUiPatch {
            options: {
                [key: string]: any;
            };
        }
        interface JaegerSpecVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            subPath: string;
            subPathExpr: string;
        }
        interface JaegerSpecVolumes {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecVolumesAwsElasticBlockStore;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecVolumesAzureDisk;
            azureFile: outputs.jaegertracing.v1.JaegerSpecVolumesAzureFile;
            cephfs: outputs.jaegertracing.v1.JaegerSpecVolumesCephfs;
            cinder: outputs.jaegertracing.v1.JaegerSpecVolumesCinder;
            configMap: outputs.jaegertracing.v1.JaegerSpecVolumesConfigMap;
            csi: outputs.jaegertracing.v1.JaegerSpecVolumesCsi;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPI;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecVolumesEmptyDir;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeral;
            fc: outputs.jaegertracing.v1.JaegerSpecVolumesFc;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecVolumesFlexVolume;
            flocker: outputs.jaegertracing.v1.JaegerSpecVolumesFlocker;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecVolumesGcePersistentDisk;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecVolumesGitRepo;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecVolumesGlusterfs;
            hostPath: outputs.jaegertracing.v1.JaegerSpecVolumesHostPath;
            iscsi: outputs.jaegertracing.v1.JaegerSpecVolumesIscsi;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecVolumesNfs;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecVolumesPhotonPersistentDisk;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecVolumesPortworxVolume;
            projected: outputs.jaegertracing.v1.JaegerSpecVolumesProjected;
            quobyte: outputs.jaegertracing.v1.JaegerSpecVolumesQuobyte;
            rbd: outputs.jaegertracing.v1.JaegerSpecVolumesRbd;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecVolumesScaleIO;
            secret: outputs.jaegertracing.v1.JaegerSpecVolumesSecret;
            storageos: outputs.jaegertracing.v1.JaegerSpecVolumesStorageos;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecVolumesVsphereVolume;
        }
        interface JaegerSpecVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface JaegerSpecVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface JaegerSpecVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesCephfsSecretRef;
            user: string;
        }
        interface JaegerSpecVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface JaegerSpecVolumesCephfsSecretRef {
            name: string;
        }
        interface JaegerSpecVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface JaegerSpecVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesCinderSecretRef;
            volumeID: string;
        }
        interface JaegerSpecVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface JaegerSpecVolumesCinderSecretRef {
            name: string;
        }
        interface JaegerSpecVolumesCinderSecretRefPatch {
            name: string;
        }
        interface JaegerSpecVolumesConfigMap {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface JaegerSpecVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface JaegerSpecVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.jaegertracing.v1.JaegerSpecVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface JaegerSpecVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItems[];
        }
        interface JaegerSpecVolumesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface JaegerSpecVolumesEphemeral {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplate;
        }
        interface JaegerSpecVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplate {
            metadata: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateMetadata;
            spec: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateMetadataPatch;
            spec: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name: string;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name: string;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface JaegerSpecVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface JaegerSpecVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesFlexVolumeSecretRef;
        }
        interface JaegerSpecVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesFlexVolumeSecretRefPatch;
        }
        interface JaegerSpecVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface JaegerSpecVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface JaegerSpecVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface JaegerSpecVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface JaegerSpecVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface JaegerSpecVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface JaegerSpecVolumesHostPath {
            path: string;
            type: string;
        }
        interface JaegerSpecVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface JaegerSpecVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface JaegerSpecVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface JaegerSpecVolumesIscsiSecretRef {
            name: string;
        }
        interface JaegerSpecVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface JaegerSpecVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface JaegerSpecVolumesPatch {
            awsElasticBlockStore: outputs.jaegertracing.v1.JaegerSpecVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.jaegertracing.v1.JaegerSpecVolumesAzureDiskPatch;
            azureFile: outputs.jaegertracing.v1.JaegerSpecVolumesAzureFilePatch;
            cephfs: outputs.jaegertracing.v1.JaegerSpecVolumesCephfsPatch;
            cinder: outputs.jaegertracing.v1.JaegerSpecVolumesCinderPatch;
            configMap: outputs.jaegertracing.v1.JaegerSpecVolumesConfigMapPatch;
            csi: outputs.jaegertracing.v1.JaegerSpecVolumesCsiPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIPatch;
            emptyDir: outputs.jaegertracing.v1.JaegerSpecVolumesEmptyDirPatch;
            ephemeral: outputs.jaegertracing.v1.JaegerSpecVolumesEphemeralPatch;
            fc: outputs.jaegertracing.v1.JaegerSpecVolumesFcPatch;
            flexVolume: outputs.jaegertracing.v1.JaegerSpecVolumesFlexVolumePatch;
            flocker: outputs.jaegertracing.v1.JaegerSpecVolumesFlockerPatch;
            gcePersistentDisk: outputs.jaegertracing.v1.JaegerSpecVolumesGcePersistentDiskPatch;
            gitRepo: outputs.jaegertracing.v1.JaegerSpecVolumesGitRepoPatch;
            glusterfs: outputs.jaegertracing.v1.JaegerSpecVolumesGlusterfsPatch;
            hostPath: outputs.jaegertracing.v1.JaegerSpecVolumesHostPathPatch;
            iscsi: outputs.jaegertracing.v1.JaegerSpecVolumesIscsiPatch;
            name: string;
            nfs: outputs.jaegertracing.v1.JaegerSpecVolumesNfsPatch;
            persistentVolumeClaim: outputs.jaegertracing.v1.JaegerSpecVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.jaegertracing.v1.JaegerSpecVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.jaegertracing.v1.JaegerSpecVolumesPortworxVolumePatch;
            projected: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedPatch;
            quobyte: outputs.jaegertracing.v1.JaegerSpecVolumesQuobytePatch;
            rbd: outputs.jaegertracing.v1.JaegerSpecVolumesRbdPatch;
            scaleIO: outputs.jaegertracing.v1.JaegerSpecVolumesScaleIOPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecVolumesSecretPatch;
            storageos: outputs.jaegertracing.v1.JaegerSpecVolumesStorageosPatch;
            vsphereVolume: outputs.jaegertracing.v1.JaegerSpecVolumesVsphereVolumePatch;
        }
        interface JaegerSpecVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface JaegerSpecVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface JaegerSpecVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface JaegerSpecVolumesProjected {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSources[];
        }
        interface JaegerSpecVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesPatch[];
        }
        interface JaegerSpecVolumesProjectedSources {
            configMap: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPI;
            secret: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesServiceAccountToken;
        }
        interface JaegerSpecVolumesProjectedSourcesConfigMap {
            items: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecVolumesProjectedSourcesConfigMapPatch {
            items: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPI {
            items: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface JaegerSpecVolumesProjectedSourcesPatch {
            configMap: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface JaegerSpecVolumesProjectedSourcesSecret {
            items: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecVolumesProjectedSourcesSecretPatch {
            items: outputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface JaegerSpecVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface JaegerSpecVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface JaegerSpecVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesRbdSecretRef;
            user: string;
        }
        interface JaegerSpecVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesRbdSecretRefPatch;
            user: string;
        }
        interface JaegerSpecVolumesRbdSecretRef {
            name: string;
        }
        interface JaegerSpecVolumesRbdSecretRefPatch {
            name: string;
        }
        interface JaegerSpecVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface JaegerSpecVolumesScaleIOSecretRef {
            name: string;
        }
        interface JaegerSpecVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface JaegerSpecVolumesSecret {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface JaegerSpecVolumesSecretPatch {
            defaultMode: number;
            items: outputs.jaegertracing.v1.JaegerSpecVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface JaegerSpecVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.jaegertracing.v1.JaegerSpecVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface JaegerSpecVolumesStorageosSecretRef {
            name: string;
        }
        interface JaegerSpecVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface JaegerSpecVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerSpecVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface JaegerStatus {
            phase: string;
            version: string;
        }
        interface JaegerStatusPatch {
            phase: string;
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
