import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export declare namespace jaegertracing {
    namespace v1 {
        interface Jaeger {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"jaegertracing.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Jaeger">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpec>;
            status?: pulumi.Input<inputs.jaegertracing.v1.JaegerStatus>;
        }
        interface JaegerSpec {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinity>;
            agent?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgent>;
            allInOne?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOne>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            collector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollector>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContext>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecImagePullSecrets>[]>;
            ingester?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngester>;
            ingress?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngress>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbe>;
            query?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuery>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecResources>;
            sampling?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSampling>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            storage?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorage>;
            strategy?: pulumi.Input<string>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecTolerations>[]>;
            ui?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecUi>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumes>[]>;
        }
        interface JaegerSpecAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinity>;
        }
        interface JaegerSpecAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgent {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContext>;
            dnsPolicy?: pulumi.Input<string>;
            hostNetwork?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentImagePullSecrets>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbe>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            priorityClassName?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentResources>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            sidecarSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContext>;
            strategy?: pulumi.Input<string>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentTolerations>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumes>[]>;
        }
        interface JaegerSpecAgentAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinity>;
        }
        interface JaegerSpecAgentAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecAgentAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecAgentAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecAgentContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecAgentContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecAgentLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecAgentLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAgentLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAgentPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentContainerSecurityContextPatch>;
            dnsPolicy?: pulumi.Input<string>;
            hostNetwork?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentImagePullSecretsPatch>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentLivenessProbePatch>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            priorityClassName?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentResourcesPatch>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            sidecarSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextPatch>;
            strategy?: pulumi.Input<string>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentTolerationsPatch>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesPatch>[]>;
        }
        interface JaegerSpecAgentResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecAgentResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecAgentSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextWindowsOptions>;
        }
        interface JaegerSpecAgentSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecAgentSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSidecarSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextWindowsOptions>;
        }
        interface JaegerSpecAgentSidecarSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentSidecarSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentSidecarSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentSidecarSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecAgentSidecarSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSidecarSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSidecarSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSidecarSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSidecarSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentSidecarSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesVsphereVolume>;
        }
        interface JaegerSpecAgentVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecAgentVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAgentVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAgentVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecAgentVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAgentVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAgentVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecAgentVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecAgentVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecAgentVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSources>[]>;
        }
        interface JaegerSpecAgentVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecAgentVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecAgentVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOne {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContext>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneImagePullSecrets>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbe>;
            metricsStorage?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneMetricsStorage>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            priorityClassName?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneResources>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            strategy?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneStrategy>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneTolerations>[]>;
            tracingEnabled?: pulumi.Input<boolean>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumes>[]>;
        }
        interface JaegerSpecAllInOneAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinity>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecAllInOneAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecAllInOneLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecAllInOneLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAllInOneLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAllInOneMetricsStorage {
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneMetricsStoragePatch {
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOnePatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneContainerSecurityContextPatch>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneImagePullSecretsPatch>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneLivenessProbePatch>;
            metricsStorage?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneMetricsStoragePatch>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            priorityClassName?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneResourcesPatch>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            strategy?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneStrategyPatch>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneTolerationsPatch>[]>;
            tracingEnabled?: pulumi.Input<boolean>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPatch>[]>;
        }
        interface JaegerSpecAllInOneResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecAllInOneResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecAllInOneSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextWindowsOptions>;
        }
        interface JaegerSpecAllInOneSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecAllInOneSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneStrategy {
            rollingUpdate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneStrategyRollingUpdate>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneStrategyPatch {
            rollingUpdate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneStrategyRollingUpdatePatch>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneStrategyRollingUpdate {
            maxSurge?: pulumi.Input<number | string>;
            maxUnavailable?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAllInOneStrategyRollingUpdatePatch {
            maxSurge?: pulumi.Input<number | string>;
            maxUnavailable?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAllInOneTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesVsphereVolume>;
        }
        interface JaegerSpecAllInOneVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecAllInOneVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAllInOneVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecAllInOneVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecAllInOneVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecAllInOneVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecAllInOneVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecAllInOneVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSources>[]>;
        }
        interface JaegerSpecAllInOneVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOneVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecAllInOneVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecCollector {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            autoscale?: pulumi.Input<boolean>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContext>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorImagePullSecrets>[]>;
            kafkaSecretName?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbe>;
            maxReplicas?: pulumi.Input<number>;
            minReplicas?: pulumi.Input<number>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            priorityClassName?: pulumi.Input<string>;
            replicas?: pulumi.Input<number>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorResources>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            serviceType?: pulumi.Input<string>;
            strategy?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorStrategy>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorTolerations>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumes>[]>;
        }
        interface JaegerSpecCollectorAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinity>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecCollectorAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecCollectorAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecCollectorContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecCollectorContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecCollectorLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecCollectorLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecCollectorLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecCollectorPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            autoscale?: pulumi.Input<boolean>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorContainerSecurityContextPatch>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorImagePullSecretsPatch>[]>;
            kafkaSecretName?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorLivenessProbePatch>;
            maxReplicas?: pulumi.Input<number>;
            minReplicas?: pulumi.Input<number>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            priorityClassName?: pulumi.Input<string>;
            replicas?: pulumi.Input<number>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorResourcesPatch>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            serviceType?: pulumi.Input<string>;
            strategy?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorStrategyPatch>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorTolerationsPatch>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesPatch>[]>;
        }
        interface JaegerSpecCollectorResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecCollectorResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecCollectorSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextWindowsOptions>;
        }
        interface JaegerSpecCollectorSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecCollectorSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorStrategy {
            rollingUpdate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorStrategyRollingUpdate>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorStrategyPatch {
            rollingUpdate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorStrategyRollingUpdatePatch>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorStrategyRollingUpdate {
            maxSurge?: pulumi.Input<number | string>;
            maxUnavailable?: pulumi.Input<number | string>;
        }
        interface JaegerSpecCollectorStrategyRollingUpdatePatch {
            maxSurge?: pulumi.Input<number | string>;
            maxUnavailable?: pulumi.Input<number | string>;
        }
        interface JaegerSpecCollectorTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesVsphereVolume>;
        }
        interface JaegerSpecCollectorVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecCollectorVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecCollectorVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecCollectorVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecCollectorVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecCollectorVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecCollectorVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecCollectorVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecCollectorVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecCollectorVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSources>[]>;
        }
        interface JaegerSpecCollectorVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecCollectorVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecCollectorVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngester {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            autoscale?: pulumi.Input<boolean>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContext>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterImagePullSecrets>[]>;
            kafkaSecretName?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbe>;
            maxReplicas?: pulumi.Input<number>;
            minReplicas?: pulumi.Input<number>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            replicas?: pulumi.Input<number>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterResources>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            strategy?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterStrategy>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterTolerations>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumes>[]>;
        }
        interface JaegerSpecIngesterAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinity>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecIngesterAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecIngesterAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecIngesterContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecIngesterContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecIngesterLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecIngesterLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngesterLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngesterPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            autoscale?: pulumi.Input<boolean>;
            config?: pulumi.Input<{
                [key: string]: any;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterContainerSecurityContextPatch>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterImagePullSecretsPatch>[]>;
            kafkaSecretName?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterLivenessProbePatch>;
            maxReplicas?: pulumi.Input<number>;
            minReplicas?: pulumi.Input<number>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            replicas?: pulumi.Input<number>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterResourcesPatch>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            strategy?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterStrategyPatch>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterTolerationsPatch>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesPatch>[]>;
        }
        interface JaegerSpecIngesterResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecIngesterResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecIngesterSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextWindowsOptions>;
        }
        interface JaegerSpecIngesterSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecIngesterSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterStrategy {
            rollingUpdate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterStrategyRollingUpdate>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterStrategyPatch {
            rollingUpdate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterStrategyRollingUpdatePatch>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterStrategyRollingUpdate {
            maxSurge?: pulumi.Input<number | string>;
            maxUnavailable?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngesterStrategyRollingUpdatePatch {
            maxSurge?: pulumi.Input<number | string>;
            maxUnavailable?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngesterTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesVsphereVolume>;
        }
        interface JaegerSpecIngesterVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecIngesterVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngesterVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngesterVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecIngesterVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngesterVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngesterVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecIngesterVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecIngesterVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecIngesterVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSources>[]>;
        }
        interface JaegerSpecIngesterVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecIngesterVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngesterVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngress {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContext>;
            enabled?: pulumi.Input<boolean>;
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressImagePullSecrets>[]>;
            ingressClassName?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbe>;
            openshift?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressOpenshift>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            pathType?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressResources>;
            secretName?: pulumi.Input<string>;
            security?: pulumi.Input<string>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            tls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressTls>[]>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressTolerations>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumes>[]>;
        }
        interface JaegerSpecIngressAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinity>;
        }
        interface JaegerSpecIngressAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecIngressAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecIngressAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecIngressContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecIngressContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecIngressLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecIngressLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngressLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngressOpenshift {
            delegateUrls?: pulumi.Input<string>;
            htpasswdFile?: pulumi.Input<string>;
            sar?: pulumi.Input<string>;
            skipLogout?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressOpenshiftPatch {
            delegateUrls?: pulumi.Input<string>;
            htpasswdFile?: pulumi.Input<string>;
            sar?: pulumi.Input<string>;
            skipLogout?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressContainerSecurityContextPatch>;
            enabled?: pulumi.Input<boolean>;
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressImagePullSecretsPatch>[]>;
            ingressClassName?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressLivenessProbePatch>;
            openshift?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressOpenshiftPatch>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            pathType?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressResourcesPatch>;
            secretName?: pulumi.Input<string>;
            security?: pulumi.Input<string>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            tls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressTlsPatch>[]>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressTolerationsPatch>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesPatch>[]>;
        }
        interface JaegerSpecIngressResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecIngressResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecIngressSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextWindowsOptions>;
        }
        interface JaegerSpecIngressSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecIngressSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressTls {
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressTlsPatch {
            hosts?: pulumi.Input<pulumi.Input<string>[]>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesVsphereVolume>;
        }
        interface JaegerSpecIngressVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecIngressVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngressVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecIngressVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecIngressVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecIngressVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecIngressVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecIngressVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecIngressVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecIngressVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSources>[]>;
        }
        interface JaegerSpecIngressVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecIngressVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecIngressVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAffinityPatch>;
            agent?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAgentPatch>;
            allInOne?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecAllInOnePatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            collector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecCollectorPatch>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecContainerSecurityContextPatch>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecImagePullSecretsPatch>[]>;
            ingester?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngesterPatch>;
            ingress?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecIngressPatch>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecLivenessProbePatch>;
            query?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecResourcesPatch>;
            sampling?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSamplingPatch>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            storage?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStoragePatch>;
            strategy?: pulumi.Input<string>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecTolerationsPatch>[]>;
            ui?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecUiPatch>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesPatch>[]>;
        }
        interface JaegerSpecQuery {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContext>;
            grpcNodePort?: pulumi.Input<number>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryImagePullSecrets>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbe>;
            metricsStorage?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryMetricsStorage>;
            nodePort?: pulumi.Input<number>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            priorityClassName?: pulumi.Input<string>;
            replicas?: pulumi.Input<number>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryResources>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            serviceType?: pulumi.Input<string>;
            strategy?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryStrategy>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryTolerations>[]>;
            tracingEnabled?: pulumi.Input<boolean>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumes>[]>;
        }
        interface JaegerSpecQueryAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinity>;
        }
        interface JaegerSpecQueryAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecQueryAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecQueryAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecQueryContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecQueryContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecQueryLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecQueryLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecQueryLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecQueryMetricsStorage {
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryMetricsStoragePatch {
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryContainerSecurityContextPatch>;
            grpcNodePort?: pulumi.Input<number>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryImagePullSecretsPatch>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryLivenessProbePatch>;
            metricsStorage?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryMetricsStoragePatch>;
            nodePort?: pulumi.Input<number>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            priorityClassName?: pulumi.Input<string>;
            replicas?: pulumi.Input<number>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryResourcesPatch>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            serviceType?: pulumi.Input<string>;
            strategy?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryStrategyPatch>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryTolerationsPatch>[]>;
            tracingEnabled?: pulumi.Input<boolean>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesPatch>[]>;
        }
        interface JaegerSpecQueryResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecQueryResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecQuerySecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextWindowsOptions>;
        }
        interface JaegerSpecQuerySecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQuerySecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecQuerySecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecQuerySecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecQuerySecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQuerySecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQuerySecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecQuerySecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecQuerySecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecQuerySecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryStrategy {
            rollingUpdate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryStrategyRollingUpdate>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryStrategyPatch {
            rollingUpdate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryStrategyRollingUpdatePatch>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryStrategyRollingUpdate {
            maxSurge?: pulumi.Input<number | string>;
            maxUnavailable?: pulumi.Input<number | string>;
        }
        interface JaegerSpecQueryStrategyRollingUpdatePatch {
            maxSurge?: pulumi.Input<number | string>;
            maxUnavailable?: pulumi.Input<number | string>;
        }
        interface JaegerSpecQueryTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesVsphereVolume>;
        }
        interface JaegerSpecQueryVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecQueryVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecQueryVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecQueryVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecQueryVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecQueryVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecQueryVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecQueryVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecQueryVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecQueryVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSources>[]>;
        }
        interface JaegerSpecQueryVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecQueryVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecQueryVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecQueryVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecSampling {
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        interface JaegerSpecSamplingPatch {
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        interface JaegerSpecSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextWindowsOptions>;
        }
        interface JaegerSpecSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorage {
            cassandraCreateSchema?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchema>;
            dependencies?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependencies>;
            elasticsearch?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearch>;
            esIndexCleaner?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleaner>;
            esRollover?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRollover>;
            grpcPlugin?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageGrpcPlugin>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            secretName?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchema {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinity>;
            datacenter?: pulumi.Input<string>;
            enabled?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            mode?: pulumi.Input<string>;
            timeout?: pulumi.Input<string>;
            traceTTL?: pulumi.Input<string>;
            ttlSecondsAfterFinished?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinity>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageCassandraCreateSchemaPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaAffinityPatch>;
            datacenter?: pulumi.Input<string>;
            enabled?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            mode?: pulumi.Input<string>;
            timeout?: pulumi.Input<string>;
            traceTTL?: pulumi.Input<string>;
            ttlSecondsAfterFinished?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependencies {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            backoffLimit?: pulumi.Input<number>;
            cassandraClientAuthEnabled?: pulumi.Input<boolean>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContext>;
            elasticsearchClientNodeOnly?: pulumi.Input<boolean>;
            elasticsearchNodesWanOnly?: pulumi.Input<boolean>;
            elasticsearchTimeRange?: pulumi.Input<string>;
            enabled?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesImagePullSecrets>[]>;
            javaOpts?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbe>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesResources>;
            schedule?: pulumi.Input<string>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            sparkMaster?: pulumi.Input<string>;
            successfulJobsHistoryLimit?: pulumi.Input<number>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesTolerations>[]>;
            ttlSecondsAfterFinished?: pulumi.Input<number>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumes>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinity>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageDependenciesLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageDependenciesPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            backoffLimit?: pulumi.Input<number>;
            cassandraClientAuthEnabled?: pulumi.Input<boolean>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesContainerSecurityContextPatch>;
            elasticsearchClientNodeOnly?: pulumi.Input<boolean>;
            elasticsearchNodesWanOnly?: pulumi.Input<boolean>;
            elasticsearchTimeRange?: pulumi.Input<string>;
            enabled?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesImagePullSecretsPatch>[]>;
            javaOpts?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesLivenessProbePatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesResourcesPatch>;
            schedule?: pulumi.Input<string>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            sparkMaster?: pulumi.Input<string>;
            successfulJobsHistoryLimit?: pulumi.Input<number>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesTolerationsPatch>[]>;
            ttlSecondsAfterFinished?: pulumi.Input<number>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextWindowsOptions>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesVsphereVolume>;
        }
        interface JaegerSpecStorageDependenciesVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageDependenciesVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecStorageDependenciesVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecStorageDependenciesVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecStorageDependenciesVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSources>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageDependenciesVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageElasticsearch {
            doNotProvision?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            nodeCount?: pulumi.Input<number>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            proxyResources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchProxyResources>;
            redundancyPolicy?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchResources>;
            storage?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchStorage>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchTolerations>[]>;
            useCertManagement?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageElasticsearchPatch {
            doNotProvision?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            nodeCount?: pulumi.Input<number>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            proxyResources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchProxyResourcesPatch>;
            redundancyPolicy?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchResourcesPatch>;
            storage?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchStoragePatch>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchTolerationsPatch>[]>;
            useCertManagement?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageElasticsearchProxyResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchProxyResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageElasticsearchProxyResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageElasticsearchProxyResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageElasticsearchProxyResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchProxyResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageElasticsearchResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageElasticsearchResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageElasticsearchResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageElasticsearchResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageElasticsearchStorage {
            size?: pulumi.Input<number | string>;
            storageClassName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageElasticsearchStoragePatch {
            size?: pulumi.Input<number | string>;
            storageClassName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageElasticsearchTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageElasticsearchTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleaner {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            backoffLimit?: pulumi.Input<number>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContext>;
            enabled?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerImagePullSecrets>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbe>;
            numberOfDays?: pulumi.Input<number>;
            priorityClassName?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerResources>;
            schedule?: pulumi.Input<string>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            successfulJobsHistoryLimit?: pulumi.Input<number>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerTolerations>[]>;
            ttlSecondsAfterFinished?: pulumi.Input<number>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumes>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinity>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageEsIndexCleanerLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageEsIndexCleanerPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            backoffLimit?: pulumi.Input<number>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerContainerSecurityContextPatch>;
            enabled?: pulumi.Input<boolean>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerImagePullSecretsPatch>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerLivenessProbePatch>;
            numberOfDays?: pulumi.Input<number>;
            priorityClassName?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerResourcesPatch>;
            schedule?: pulumi.Input<string>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            successfulJobsHistoryLimit?: pulumi.Input<number>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerTolerationsPatch>[]>;
            ttlSecondsAfterFinished?: pulumi.Input<number>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesVsphereVolume>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSources>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsIndexCleanerVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRollover {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinity>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            backoffLimit?: pulumi.Input<number>;
            conditions?: pulumi.Input<string>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContext>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverImagePullSecrets>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbe>;
            readTTL?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverResources>;
            schedule?: pulumi.Input<string>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            successfulJobsHistoryLimit?: pulumi.Input<number>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverTolerations>[]>;
            ttlSecondsAfterFinished?: pulumi.Input<number>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumeMounts>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumes>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinity {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinity>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPatch>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            namespaceSelector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextWindowsOptions>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            capabilities?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverContainerSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbe {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbePatch {
            exec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageEsRolloverLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageEsRolloverPatch {
            affinity?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverAffinityPatch>;
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            backoffLimit?: pulumi.Input<number>;
            conditions?: pulumi.Input<string>;
            containerSecurityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverContainerSecurityContextPatch>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverImagePullSecretsPatch>[]>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            livenessProbe?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverLivenessProbePatch>;
            readTTL?: pulumi.Input<string>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverResourcesPatch>;
            schedule?: pulumi.Input<string>;
            securityContext?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            successfulJobsHistoryLimit?: pulumi.Input<number>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverTolerationsPatch>[]>;
            ttlSecondsAfterFinished?: pulumi.Input<number>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumeMountsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContext {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextWindowsOptions>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextPatch {
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverSecurityContextWindowsOptionsPatch>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesVsphereVolume>;
        }
        interface JaegerSpecStorageEsRolloverVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecStorageEsRolloverVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecStorageEsRolloverVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSources>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageEsRolloverVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageGrpcPlugin {
            image?: pulumi.Input<string>;
        }
        interface JaegerSpecStorageGrpcPluginPatch {
            image?: pulumi.Input<string>;
        }
        interface JaegerSpecStoragePatch {
            cassandraCreateSchema?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageCassandraCreateSchemaPatch>;
            dependencies?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageDependenciesPatch>;
            elasticsearch?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageElasticsearchPatch>;
            esIndexCleaner?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsIndexCleanerPatch>;
            esRollover?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageEsRolloverPatch>;
            grpcPlugin?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecStorageGrpcPluginPatch>;
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
            secretName?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface JaegerSpecUi {
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        interface JaegerSpecUiPatch {
            options?: pulumi.Input<{
                [key: string]: any;
            }>;
        }
        interface JaegerSpecVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCephfs>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCinder>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesConfigMap>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeral>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesFc>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesHostPath>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjected>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesScaleIO>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesSecret>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesVsphereVolume>;
        }
        interface JaegerSpecVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItems>[]>;
        }
        interface JaegerSpecVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface JaegerSpecVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplate>;
        }
        interface JaegerSpecVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateMetadata>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateMetadata {
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
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateMetadataPatch {
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
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface JaegerSpecVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface JaegerSpecVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesFlexVolumeSecretRef>;
        }
        interface JaegerSpecVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesFlexVolumeSecretRefPatch>;
        }
        interface JaegerSpecVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesHostPathPatch>;
            iscsi?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesVsphereVolumePatch>;
        }
        interface JaegerSpecVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSources>[]>;
        }
        interface JaegerSpecVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesPatch>[]>;
        }
        interface JaegerSpecVolumesProjectedSources {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPI>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesServiceAccountToken>;
        }
        interface JaegerSpecVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface JaegerSpecVolumesProjectedSourcesPatch {
            configMap?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesDownwardAPIPatch>;
            secret?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface JaegerSpecVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface JaegerSpecVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.jaegertracing.v1.JaegerSpecVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerSpecVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface JaegerStatus {
            phase?: pulumi.Input<string>;
            version?: pulumi.Input<string>;
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
