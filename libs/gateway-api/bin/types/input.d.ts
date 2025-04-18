import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export declare namespace gateway {
    namespace v1 {
        /**
         * GRPCRoute provides a way to route gRPC requests. This includes the capability
         * to match requests by hostname, gRPC service, gRPC method, or HTTP/2 header.
         * Filters can be used to specify additional processing steps. Backends specify
         * where matching requests will be routed.
         *
         * GRPCRoute falls under extended support within the Gateway API. Within the
         * following specification, the word "MUST" indicates that an implementation
         * supporting GRPCRoute must conform to the indicated requirement, but an
         * implementation not supporting this route type need not follow the requirement
         * unless explicitly indicated.
         *
         * Implementations supporting `GRPCRoute` with the `HTTPS` `ProtocolType` MUST
         * accept HTTP/2 connections without an initial upgrade from HTTP/1.1, i.e. via
         * ALPN. If the implementation does not support this, then it MUST set the
         * "Accepted" condition to "False" for the affected listener with a reason of
         * "UnsupportedProtocol".  Implementations MAY also accept HTTP/2 connections
         * with an upgrade from HTTP/1.
         *
         * Implementations supporting `GRPCRoute` with the `HTTP` `ProtocolType` MUST
         * support HTTP/2 over cleartext TCP (h2c,
         * https://www.rfc-editor.org/rfc/rfc7540#section-3.1) without an initial
         * upgrade from HTTP/1.1, i.e. with prior knowledge
         * (https://www.rfc-editor.org/rfc/rfc7540#section-3.4). If the implementation
         * does not support this, then it MUST set the "Accepted" condition to "False"
         * for the affected listener with a reason of "UnsupportedProtocol".
         * Implementations MAY also accept HTTP/2 connections with an upgrade from
         * HTTP/1, i.e. without prior knowledge.
         */
        interface GRPCRoute {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"GRPCRoute">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpec>;
            status?: pulumi.Input<inputs.gateway.v1.GRPCRouteStatus>;
        }
        /**
         * Spec defines the desired state of GRPCRoute.
         */
        interface GRPCRouteSpec {
            /**
             * Hostnames defines a set of hostnames to match against the GRPC
             * Host header to select a GRPCRoute to process the request. This matches
             * the RFC 1123 definition of a hostname with 2 notable exceptions:
             *
             * 1. IPs are not allowed.
             * 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
             *    label MUST appear by itself as the first label.
             *
             * If a hostname is specified by both the Listener and GRPCRoute, there
             * MUST be at least one intersecting hostname for the GRPCRoute to be
             * attached to the Listener. For example:
             *
             * * A Listener with `test.example.com` as the hostname matches GRPCRoutes
             *   that have either not specified any hostnames, or have specified at
             *   least one of `test.example.com` or `*.example.com`.
             * * A Listener with `*.example.com` as the hostname matches GRPCRoutes
             *   that have either not specified any hostnames or have specified at least
             *   one hostname that matches the Listener hostname. For example,
             *   `test.example.com` and `*.example.com` would both match. On the other
             *   hand, `example.com` and `test.example.net` would not match.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * If both the Listener and GRPCRoute have specified hostnames, any
             * GRPCRoute hostnames that do not match the Listener hostname MUST be
             * ignored. For example, if a Listener specified `*.example.com`, and the
             * GRPCRoute specified `test.example.com` and `test.example.net`,
             * `test.example.net` MUST NOT be considered for a match.
             *
             * If both the Listener and GRPCRoute have specified hostnames, and none
             * match with the criteria above, then the GRPCRoute MUST NOT be accepted by
             * the implementation. The implementation MUST raise an 'Accepted' Condition
             * with a status of `False` in the corresponding RouteParentStatus.
             *
             * If a Route (A) of type HTTPRoute or GRPCRoute is attached to a
             * Listener and that listener already has another Route (B) of the other
             * type attached and the intersection of the hostnames of A and B is
             * non-empty, then the implementation MUST accept exactly one of these two
             * routes, determined by the following criteria, in order:
             *
             * * The oldest Route based on creation timestamp.
             * * The Route appearing first in alphabetical order by
             *   "{namespace}/{name}".
             *
             * The rejected Route MUST raise an 'Accepted' condition with a status of
             * 'False' in the corresponding RouteParentStatus.
             *
             * Support: Core
             */
            hostnames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * ParentRefs references the resources (usually Gateways) that a Route wants
             * to be attached to. Note that the referenced parent resource needs to
             * allow this for the attachment to be complete. For Gateways, that means
             * the Gateway needs to allow attachment from Routes of this kind and
             * namespace. For Services, that means the Service must either be in the same
             * namespace for a "producer" route, or the mesh implementation must support
             * and allow "consumer" routes for the referenced Service. ReferenceGrant is
             * not applicable for governing ParentRefs to Services - it is not possible to
             * create a "producer" route for a Service in a different namespace from the
             * Route.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * This API may be extended in the future to support additional kinds of parent
             * resources.
             *
             * ParentRefs must be _distinct_. This means either that:
             *
             * * They select different objects.  If this is the case, then parentRef
             *   entries are distinct. In terms of fields, this means that the
             *   multi-part key defined by `group`, `kind`, `namespace`, and `name` must
             *   be unique across all parentRef entries in the Route.
             * * They do not select different objects, but for each optional field used,
             *   each ParentRef that selects the same object must set the same set of
             *   optional fields to different values. If one ParentRef sets a
             *   combination of optional fields, all must set the same combination.
             *
             * Some examples:
             *
             * * If one ParentRef sets `sectionName`, all ParentRefs referencing the
             *   same object must also set `sectionName`.
             * * If one ParentRef sets `port`, all ParentRefs referencing the same
             *   object must also set `port`.
             * * If one ParentRef sets `sectionName` and `port`, all ParentRefs
             *   referencing the same object must also set `sectionName` and `port`.
             *
             * It is possible to separately reference multiple distinct objects that may
             * be collapsed by an implementation. For example, some implementations may
             * choose to merge compatible Gateway Listeners together. If that is the
             * case, the list of routes attached to those resources should also be
             * merged.
             *
             * Note that for ParentRefs that cross namespace boundaries, there are specific
             * rules. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example,
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable other kinds of cross-namespace reference.
             */
            parentRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecParentRefs>[]>;
            /**
             * Rules are a list of GRPC matchers, filters and actions.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRules>[]>;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered
         * a parent of this resource (usually a route). There are two kinds of parent resources
         * with "Core" support:
         *
         * * Gateway (Gateway conformance profile)
         * * Service (Mesh conformance profile, ClusterIP Services only)
         *
         * This API may be extended in the future to support additional kinds of parent
         * resources.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         */
        interface GRPCRouteSpecParentRefs {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered
         * a parent of this resource (usually a route). There are two kinds of parent resources
         * with "Core" support:
         *
         * * Gateway (Gateway conformance profile)
         * * Service (Mesh conformance profile, ClusterIP Services only)
         *
         * This API may be extended in the future to support additional kinds of parent
         * resources.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         */
        interface GRPCRouteSpecParentRefsPatch {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
        /**
         * Spec defines the desired state of GRPCRoute.
         */
        interface GRPCRouteSpecPatch {
            /**
             * Hostnames defines a set of hostnames to match against the GRPC
             * Host header to select a GRPCRoute to process the request. This matches
             * the RFC 1123 definition of a hostname with 2 notable exceptions:
             *
             * 1. IPs are not allowed.
             * 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
             *    label MUST appear by itself as the first label.
             *
             * If a hostname is specified by both the Listener and GRPCRoute, there
             * MUST be at least one intersecting hostname for the GRPCRoute to be
             * attached to the Listener. For example:
             *
             * * A Listener with `test.example.com` as the hostname matches GRPCRoutes
             *   that have either not specified any hostnames, or have specified at
             *   least one of `test.example.com` or `*.example.com`.
             * * A Listener with `*.example.com` as the hostname matches GRPCRoutes
             *   that have either not specified any hostnames or have specified at least
             *   one hostname that matches the Listener hostname. For example,
             *   `test.example.com` and `*.example.com` would both match. On the other
             *   hand, `example.com` and `test.example.net` would not match.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * If both the Listener and GRPCRoute have specified hostnames, any
             * GRPCRoute hostnames that do not match the Listener hostname MUST be
             * ignored. For example, if a Listener specified `*.example.com`, and the
             * GRPCRoute specified `test.example.com` and `test.example.net`,
             * `test.example.net` MUST NOT be considered for a match.
             *
             * If both the Listener and GRPCRoute have specified hostnames, and none
             * match with the criteria above, then the GRPCRoute MUST NOT be accepted by
             * the implementation. The implementation MUST raise an 'Accepted' Condition
             * with a status of `False` in the corresponding RouteParentStatus.
             *
             * If a Route (A) of type HTTPRoute or GRPCRoute is attached to a
             * Listener and that listener already has another Route (B) of the other
             * type attached and the intersection of the hostnames of A and B is
             * non-empty, then the implementation MUST accept exactly one of these two
             * routes, determined by the following criteria, in order:
             *
             * * The oldest Route based on creation timestamp.
             * * The Route appearing first in alphabetical order by
             *   "{namespace}/{name}".
             *
             * The rejected Route MUST raise an 'Accepted' condition with a status of
             * 'False' in the corresponding RouteParentStatus.
             *
             * Support: Core
             */
            hostnames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * ParentRefs references the resources (usually Gateways) that a Route wants
             * to be attached to. Note that the referenced parent resource needs to
             * allow this for the attachment to be complete. For Gateways, that means
             * the Gateway needs to allow attachment from Routes of this kind and
             * namespace. For Services, that means the Service must either be in the same
             * namespace for a "producer" route, or the mesh implementation must support
             * and allow "consumer" routes for the referenced Service. ReferenceGrant is
             * not applicable for governing ParentRefs to Services - it is not possible to
             * create a "producer" route for a Service in a different namespace from the
             * Route.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * This API may be extended in the future to support additional kinds of parent
             * resources.
             *
             * ParentRefs must be _distinct_. This means either that:
             *
             * * They select different objects.  If this is the case, then parentRef
             *   entries are distinct. In terms of fields, this means that the
             *   multi-part key defined by `group`, `kind`, `namespace`, and `name` must
             *   be unique across all parentRef entries in the Route.
             * * They do not select different objects, but for each optional field used,
             *   each ParentRef that selects the same object must set the same set of
             *   optional fields to different values. If one ParentRef sets a
             *   combination of optional fields, all must set the same combination.
             *
             * Some examples:
             *
             * * If one ParentRef sets `sectionName`, all ParentRefs referencing the
             *   same object must also set `sectionName`.
             * * If one ParentRef sets `port`, all ParentRefs referencing the same
             *   object must also set `port`.
             * * If one ParentRef sets `sectionName` and `port`, all ParentRefs
             *   referencing the same object must also set `sectionName` and `port`.
             *
             * It is possible to separately reference multiple distinct objects that may
             * be collapsed by an implementation. For example, some implementations may
             * choose to merge compatible Gateway Listeners together. If that is the
             * case, the list of routes attached to those resources should also be
             * merged.
             *
             * Note that for ParentRefs that cross namespace boundaries, there are specific
             * rules. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example,
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable other kinds of cross-namespace reference.
             */
            parentRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecParentRefsPatch>[]>;
            /**
             * Rules are a list of GRPC matchers, filters and actions.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesPatch>[]>;
        }
        /**
         * GRPCRouteRule defines the semantics for matching a gRPC request based on
         * conditions (matches), processing it (filters), and forwarding the request to
         * an API object (backendRefs).
         */
        interface GRPCRouteSpecRules {
            /**
             * BackendRefs defines the backend(s) where matching requests should be
             * sent.
             *
             * Failure behavior here depends on how many BackendRefs are specified and
             * how many are invalid.
             *
             * If *all* entries in BackendRefs are invalid, and there are also no filters
             * specified in this route rule, *all* traffic which matches this rule MUST
             * receive an `UNAVAILABLE` status.
             *
             * See the GRPCBackendRef definition for the rules about what makes a single
             * GRPCBackendRef invalid.
             *
             * When a GRPCBackendRef is invalid, `UNAVAILABLE` statuses MUST be returned for
             * requests that would have otherwise been routed to an invalid backend. If
             * multiple backends are specified, and some are invalid, the proportion of
             * requests that would otherwise have been routed to an invalid backend
             * MUST receive an `UNAVAILABLE` status.
             *
             * For example, if two backends are specified with equal weights, and one is
             * invalid, 50 percent of traffic MUST receive an `UNAVAILABLE` status.
             * Implementations may choose how that 50 percent is determined.
             *
             * Support: Core for Kubernetes Service
             *
             * Support: Implementation-specific for any other resource
             *
             * Support for weight: Core
             */
            backendRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefs>[]>;
            /**
             * Filters define the filters that are applied to requests that match
             * this rule.
             *
             * The effects of ordering of multiple behaviors are currently unspecified.
             * This can change in the future based on feedback during the alpha stage.
             *
             * Conformance-levels at this level are defined based on the type of filter:
             *
             * - ALL core filters MUST be supported by all implementations that support
             *   GRPCRoute.
             * - Implementers are encouraged to support extended filters.
             * - Implementation-specific custom filters have no API guarantees across
             *   implementations.
             *
             * Specifying the same filter multiple times is not supported unless explicitly
             * indicated in the filter.
             *
             * If an implementation can not support a combination of filters, it must clearly
             * document that limitation. In cases where incompatible or unsupported
             * filters are specified and cause the `Accepted` condition to be set to status
             * `False`, implementations may use the `IncompatibleFilters` reason to specify
             * this configuration error.
             *
             * Support: Core
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFilters>[]>;
            /**
             * Matches define conditions used for matching the rule against incoming
             * gRPC requests. Each match is independent, i.e. this rule will be matched
             * if **any** one of the matches is satisfied.
             *
             * For example, take the following matches configuration:
             *
             * ```
             * matches:
             * - method:
             *     service: foo.bar
             *   headers:
             *     values:
             *       version: 2
             * - method:
             *     service: foo.bar.v2
             * ```
             *
             * For a request to match against this rule, it MUST satisfy
             * EITHER of the two conditions:
             *
             * - service of foo.bar AND contains the header `version: 2`
             * - service of foo.bar.v2
             *
             * See the documentation for GRPCRouteMatch on how to specify multiple
             * match conditions to be ANDed together.
             *
             * If no matches are specified, the implementation MUST match every gRPC request.
             *
             * Proxy or Load Balancer routing configuration generated from GRPCRoutes
             * MUST prioritize rules based on the following criteria, continuing on
             * ties. Merging MUST not be done between GRPCRoutes and HTTPRoutes.
             * Precedence MUST be given to the rule with the largest number of:
             *
             * * Characters in a matching non-wildcard hostname.
             * * Characters in a matching hostname.
             * * Characters in a matching service.
             * * Characters in a matching method.
             * * Header matches.
             *
             * If ties still exist across multiple Routes, matching precedence MUST be
             * determined in order of the following criteria, continuing on ties:
             *
             * * The oldest Route based on creation timestamp.
             * * The Route appearing first in alphabetical order by
             *   "{namespace}/{name}".
             *
             * If ties still exist within the Route that has been given precedence,
             * matching precedence MUST be granted to the first matching rule meeting
             * the above criteria.
             */
            matches?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesMatches>[]>;
        }
        /**
         * GRPCBackendRef defines how a GRPCRoute forwards a gRPC request.
         *
         * Note that when a namespace different than the local namespace is specified, a
         * ReferenceGrant object is required in the referent namespace to allow that
         * namespace's owner to accept the reference. See the ReferenceGrant
         * documentation for details.
         *
         * <gateway:experimental:description>
         *
         * When the BackendRef points to a Kubernetes Service, implementations SHOULD
         * honor the appProtocol field if it is set for the target Service Port.
         *
         * Implementations supporting appProtocol SHOULD recognize the Kubernetes
         * Standard Application Protocols defined in KEP-3726.
         *
         * If a Service appProtocol isn't specified, an implementation MAY infer the
         * backend protocol through its own means. Implementations MAY infer the
         * protocol from the Route type referring to the backend Service.
         *
         * If a Route is not able to send traffic to the backend using the specified
         * protocol then the backend is considered invalid. Implementations MUST set the
         * "ResolvedRefs" condition to "False" with the "UnsupportedProtocol" reason.
         *
         * </gateway:experimental:description>
         */
        interface GRPCRouteSpecRulesBackendRefs {
            /**
             * Filters defined at this level MUST be executed if and only if the
             * request is being forwarded to the backend defined here.
             *
             * Support: Implementation-specific (For broader support of filters, use the
             * Filters field in GRPCRouteRule.)
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFilters>[]>;
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
            /**
             * Weight specifies the proportion of requests forwarded to the referenced
             * backend. This is computed as weight/(sum of all weights in this
             * BackendRefs list). For non-zero values, there may be some epsilon from
             * the exact proportion defined here depending on the precision an
             * implementation supports. Weight is not a percentage and the sum of
             * weights does not need to equal 100.
             *
             * If only one backend is specified and it has a weight greater than 0, 100%
             * of the traffic is forwarded to that backend. If weight is set to 0, no
             * traffic should be forwarded for this entry. If unspecified, weight
             * defaults to 1.
             *
             * Support for this field varies based on the context where used.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * GRPCRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. GRPCRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface GRPCRouteSpecRulesBackendRefsFilters {
            extensionRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersExtensionRef>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifier>;
            requestMirror?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestMirror>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifier>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations supporting GRPCRoute MUST support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` MUST be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * Support: Implementation-specific
         *
         * This filter can be used multiple times within the same rule.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersExtensionRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * Support: Implementation-specific
         *
         * This filter can be used multiple times within the same rule.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersExtensionRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * GRPCRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. GRPCRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersPatch {
            extensionRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersExtensionRefPatch>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierPatch>;
            requestMirror?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestMirrorPatch>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierPatch>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations supporting GRPCRoute MUST support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` MUST be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestMirror {
            backendRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRef>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersRequestMirrorPatch {
            backendRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRefPatch>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * GRPCBackendRef defines how a GRPCRoute forwards a gRPC request.
         *
         * Note that when a namespace different than the local namespace is specified, a
         * ReferenceGrant object is required in the referent namespace to allow that
         * namespace's owner to accept the reference. See the ReferenceGrant
         * documentation for details.
         *
         * <gateway:experimental:description>
         *
         * When the BackendRef points to a Kubernetes Service, implementations SHOULD
         * honor the appProtocol field if it is set for the target Service Port.
         *
         * Implementations supporting appProtocol SHOULD recognize the Kubernetes
         * Standard Application Protocols defined in KEP-3726.
         *
         * If a Service appProtocol isn't specified, an implementation MAY infer the
         * backend protocol through its own means. Implementations MAY infer the
         * protocol from the Route type referring to the backend Service.
         *
         * If a Route is not able to send traffic to the backend using the specified
         * protocol then the backend is considered invalid. Implementations MUST set the
         * "ResolvedRefs" condition to "False" with the "UnsupportedProtocol" reason.
         *
         * </gateway:experimental:description>
         */
        interface GRPCRouteSpecRulesBackendRefsPatch {
            /**
             * Filters defined at this level MUST be executed if and only if the
             * request is being forwarded to the backend defined here.
             *
             * Support: Implementation-specific (For broader support of filters, use the
             * Filters field in GRPCRouteRule.)
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsFiltersPatch>[]>;
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
            /**
             * Weight specifies the proportion of requests forwarded to the referenced
             * backend. This is computed as weight/(sum of all weights in this
             * BackendRefs list). For non-zero values, there may be some epsilon from
             * the exact proportion defined here depending on the precision an
             * implementation supports. Weight is not a percentage and the sum of
             * weights does not need to equal 100.
             *
             * If only one backend is specified and it has a weight greater than 0, 100%
             * of the traffic is forwarded to that backend. If weight is set to 0, no
             * traffic should be forwarded for this entry. If unspecified, weight
             * defaults to 1.
             *
             * Support for this field varies based on the context where used.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * GRPCRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. GRPCRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface GRPCRouteSpecRulesFilters {
            extensionRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersExtensionRef>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestHeaderModifier>;
            requestMirror?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestMirror>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersResponseHeaderModifier>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations supporting GRPCRoute MUST support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` MUST be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * Support: Implementation-specific
         *
         * This filter can be used multiple times within the same rule.
         */
        interface GRPCRouteSpecRulesFiltersExtensionRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * Support: Implementation-specific
         *
         * This filter can be used multiple times within the same rule.
         */
        interface GRPCRouteSpecRulesFiltersExtensionRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * GRPCRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. GRPCRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface GRPCRouteSpecRulesFiltersPatch {
            extensionRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersExtensionRefPatch>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestHeaderModifierPatch>;
            requestMirror?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestMirrorPatch>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersResponseHeaderModifierPatch>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations supporting GRPCRoute MUST support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` MUST be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface GRPCRouteSpecRulesFiltersRequestHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesFiltersRequestHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesFiltersRequestHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface GRPCRouteSpecRulesFiltersRequestHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesFiltersRequestHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesFiltersRequestHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface GRPCRouteSpecRulesFiltersRequestMirror {
            backendRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestMirrorBackendRef>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface GRPCRouteSpecRulesFiltersRequestMirrorBackendRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface GRPCRouteSpecRulesFiltersRequestMirrorBackendRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface GRPCRouteSpecRulesFiltersRequestMirrorPatch {
            backendRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersRequestMirrorBackendRefPatch>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface GRPCRouteSpecRulesFiltersResponseHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersResponseHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersResponseHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesFiltersResponseHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesFiltersResponseHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface GRPCRouteSpecRulesFiltersResponseHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersResponseHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersResponseHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesFiltersResponseHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface GRPCRouteSpecRulesFiltersResponseHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * GRPCRouteMatch defines the predicate used to match requests to a given
         * action. Multiple match types are ANDed together, i.e. the match will
         * evaluate to true only if all conditions are satisfied.
         *
         * For example, the match below will match a gRPC request only if its service
         * is `foo` AND it contains the `version: v1` header:
         *
         * ```
         * matches:
         *   - method:
         *     type: Exact
         *     service: "foo"
         *     headers:
         *   - name: "version"
         *     value "v1"
         *
         * ```
         */
        interface GRPCRouteSpecRulesMatches {
            /**
             * Headers specifies gRPC request header matchers. Multiple match values are
             * ANDed together, meaning, a request MUST match all the specified headers
             * to select the route.
             */
            headers?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesMatchesHeaders>[]>;
            method?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesMatchesMethod>;
        }
        /**
         * GRPCHeaderMatch describes how to select a gRPC route by matching gRPC request
         * headers.
         */
        interface GRPCRouteSpecRulesMatchesHeaders {
            /**
             * Name is the name of the gRPC Header to be matched.
             *
             * If multiple entries specify equivalent header names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the header.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of the gRPC Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * GRPCHeaderMatch describes how to select a gRPC route by matching gRPC request
         * headers.
         */
        interface GRPCRouteSpecRulesMatchesHeadersPatch {
            /**
             * Name is the name of the gRPC Header to be matched.
             *
             * If multiple entries specify equivalent header names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the header.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of the gRPC Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Method specifies a gRPC request service/method matcher. If this field is
         * not specified, all services and methods will match.
         */
        interface GRPCRouteSpecRulesMatchesMethod {
            /**
             * Value of the method to match against. If left empty or omitted, will
             * match all services.
             *
             * At least one of Service and Method MUST be a non-empty string.
             */
            method?: pulumi.Input<string>;
            /**
             * Value of the service to match against. If left empty or omitted, will
             * match any service.
             *
             * At least one of Service and Method MUST be a non-empty string.
             */
            service?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the service and/or method.
             * Support: Core (Exact with service and method specified)
             *
             * Support: Implementation-specific (Exact with method specified but no service specified)
             *
             * Support: Implementation-specific (RegularExpression)
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Method specifies a gRPC request service/method matcher. If this field is
         * not specified, all services and methods will match.
         */
        interface GRPCRouteSpecRulesMatchesMethodPatch {
            /**
             * Value of the method to match against. If left empty or omitted, will
             * match all services.
             *
             * At least one of Service and Method MUST be a non-empty string.
             */
            method?: pulumi.Input<string>;
            /**
             * Value of the service to match against. If left empty or omitted, will
             * match any service.
             *
             * At least one of Service and Method MUST be a non-empty string.
             */
            service?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the service and/or method.
             * Support: Core (Exact with service and method specified)
             *
             * Support: Implementation-specific (Exact with method specified but no service specified)
             *
             * Support: Implementation-specific (RegularExpression)
             */
            type?: pulumi.Input<string>;
        }
        /**
         * GRPCRouteMatch defines the predicate used to match requests to a given
         * action. Multiple match types are ANDed together, i.e. the match will
         * evaluate to true only if all conditions are satisfied.
         *
         * For example, the match below will match a gRPC request only if its service
         * is `foo` AND it contains the `version: v1` header:
         *
         * ```
         * matches:
         *   - method:
         *     type: Exact
         *     service: "foo"
         *     headers:
         *   - name: "version"
         *     value "v1"
         *
         * ```
         */
        interface GRPCRouteSpecRulesMatchesPatch {
            /**
             * Headers specifies gRPC request header matchers. Multiple match values are
             * ANDed together, meaning, a request MUST match all the specified headers
             * to select the route.
             */
            headers?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesMatchesHeadersPatch>[]>;
            method?: pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesMatchesMethodPatch>;
        }
        /**
         * GRPCRouteRule defines the semantics for matching a gRPC request based on
         * conditions (matches), processing it (filters), and forwarding the request to
         * an API object (backendRefs).
         */
        interface GRPCRouteSpecRulesPatch {
            /**
             * BackendRefs defines the backend(s) where matching requests should be
             * sent.
             *
             * Failure behavior here depends on how many BackendRefs are specified and
             * how many are invalid.
             *
             * If *all* entries in BackendRefs are invalid, and there are also no filters
             * specified in this route rule, *all* traffic which matches this rule MUST
             * receive an `UNAVAILABLE` status.
             *
             * See the GRPCBackendRef definition for the rules about what makes a single
             * GRPCBackendRef invalid.
             *
             * When a GRPCBackendRef is invalid, `UNAVAILABLE` statuses MUST be returned for
             * requests that would have otherwise been routed to an invalid backend. If
             * multiple backends are specified, and some are invalid, the proportion of
             * requests that would otherwise have been routed to an invalid backend
             * MUST receive an `UNAVAILABLE` status.
             *
             * For example, if two backends are specified with equal weights, and one is
             * invalid, 50 percent of traffic MUST receive an `UNAVAILABLE` status.
             * Implementations may choose how that 50 percent is determined.
             *
             * Support: Core for Kubernetes Service
             *
             * Support: Implementation-specific for any other resource
             *
             * Support for weight: Core
             */
            backendRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesBackendRefsPatch>[]>;
            /**
             * Filters define the filters that are applied to requests that match
             * this rule.
             *
             * The effects of ordering of multiple behaviors are currently unspecified.
             * This can change in the future based on feedback during the alpha stage.
             *
             * Conformance-levels at this level are defined based on the type of filter:
             *
             * - ALL core filters MUST be supported by all implementations that support
             *   GRPCRoute.
             * - Implementers are encouraged to support extended filters.
             * - Implementation-specific custom filters have no API guarantees across
             *   implementations.
             *
             * Specifying the same filter multiple times is not supported unless explicitly
             * indicated in the filter.
             *
             * If an implementation can not support a combination of filters, it must clearly
             * document that limitation. In cases where incompatible or unsupported
             * filters are specified and cause the `Accepted` condition to be set to status
             * `False`, implementations may use the `IncompatibleFilters` reason to specify
             * this configuration error.
             *
             * Support: Core
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesFiltersPatch>[]>;
            /**
             * Matches define conditions used for matching the rule against incoming
             * gRPC requests. Each match is independent, i.e. this rule will be matched
             * if **any** one of the matches is satisfied.
             *
             * For example, take the following matches configuration:
             *
             * ```
             * matches:
             * - method:
             *     service: foo.bar
             *   headers:
             *     values:
             *       version: 2
             * - method:
             *     service: foo.bar.v2
             * ```
             *
             * For a request to match against this rule, it MUST satisfy
             * EITHER of the two conditions:
             *
             * - service of foo.bar AND contains the header `version: 2`
             * - service of foo.bar.v2
             *
             * See the documentation for GRPCRouteMatch on how to specify multiple
             * match conditions to be ANDed together.
             *
             * If no matches are specified, the implementation MUST match every gRPC request.
             *
             * Proxy or Load Balancer routing configuration generated from GRPCRoutes
             * MUST prioritize rules based on the following criteria, continuing on
             * ties. Merging MUST not be done between GRPCRoutes and HTTPRoutes.
             * Precedence MUST be given to the rule with the largest number of:
             *
             * * Characters in a matching non-wildcard hostname.
             * * Characters in a matching hostname.
             * * Characters in a matching service.
             * * Characters in a matching method.
             * * Header matches.
             *
             * If ties still exist across multiple Routes, matching precedence MUST be
             * determined in order of the following criteria, continuing on ties:
             *
             * * The oldest Route based on creation timestamp.
             * * The Route appearing first in alphabetical order by
             *   "{namespace}/{name}".
             *
             * If ties still exist within the Route that has been given precedence,
             * matching precedence MUST be granted to the first matching rule meeting
             * the above criteria.
             */
            matches?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteSpecRulesMatchesPatch>[]>;
        }
        /**
         * Status defines the current state of GRPCRoute.
         */
        interface GRPCRouteStatus {
            /**
             * Parents is a list of parent resources (usually Gateways) that are
             * associated with the route, and the status of the route with respect to
             * each parent. When this route attaches to a parent, the controller that
             * manages the parent must add an entry to this list when the controller
             * first sees the route and should update the entry as appropriate when the
             * route or gateway is modified.
             *
             * Note that parent references that cannot be resolved by an implementation
             * of this API will not be added to this list. Implementations of this API
             * can only populate Route status for the Gateways/parent resources they are
             * responsible for.
             *
             * A maximum of 32 Gateways will be represented in this list. An empty list
             * means the route has not been attached to any Gateway.
             */
            parents?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteStatusParents>[]>;
        }
        /**
         * RouteParentStatus describes the status of a route with respect to an
         * associated Parent.
         */
        interface GRPCRouteStatusParents {
            /**
             * Conditions describes the status of the route with respect to the Gateway.
             * Note that the route's availability is also subject to the Gateway's own
             * status conditions and listener status.
             *
             * If the Route's ParentRef specifies an existing Gateway that supports
             * Routes of this kind AND that Gateway's controller has sufficient access,
             * then that Gateway's controller MUST set the "Accepted" condition on the
             * Route, to indicate whether the route has been accepted or rejected by the
             * Gateway, and why.
             *
             * A Route MUST be considered "Accepted" if at least one of the Route's
             * rules is implemented by the Gateway.
             *
             * There are a number of cases where the "Accepted" condition may not be set
             * due to lack of controller visibility, that includes when:
             *
             * * The Route refers to a non-existent parent.
             * * The Route is of a type that the controller does not support.
             * * The Route is in a namespace the controller does not have access to.
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GRPCRouteStatusParentsConditions>[]>;
            /**
             * ControllerName is a domain/path string that indicates the name of the
             * controller that wrote this status. This corresponds with the
             * controllerName field on GatewayClass.
             *
             * Example: "example.net/gateway-controller".
             *
             * The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are
             * valid Kubernetes names
             * (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
             *
             * Controllers MUST populate this field when writing status. Controllers should ensure that
             * entries to status populated with their ControllerName are cleaned up when they are no
             * longer necessary.
             */
            controllerName?: pulumi.Input<string>;
            parentRef?: pulumi.Input<inputs.gateway.v1.GRPCRouteStatusParentsParentRef>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface GRPCRouteStatusParentsConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ParentRef corresponds with a ParentRef in the spec that this
         * RouteParentStatus struct describes the status of.
         */
        interface GRPCRouteStatusParentsParentRef {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
        /**
         * Gateway represents an instance of a service-traffic handling infrastructure
         * by binding Listeners to a set of IP addresses.
         */
        interface Gateway {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Gateway">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.gateway.v1.GatewaySpec>;
            status?: pulumi.Input<inputs.gateway.v1.GatewayStatus>;
        }
        /**
         * GatewayClass describes a class of Gateways available to the user for creating
         * Gateway resources.
         *
         * It is recommended that this resource be used as a template for Gateways. This
         * means that a Gateway is based on the state of the GatewayClass at the time it
         * was created and changes to the GatewayClass or associated parameters are not
         * propagated down to existing Gateways. This recommendation is intended to
         * limit the blast radius of changes to GatewayClass or associated parameters.
         * If implementations choose to propagate GatewayClass changes to existing
         * Gateways, that MUST be clearly documented by the implementation.
         *
         * Whenever one or more Gateways are using a GatewayClass, implementations SHOULD
         * add the `gateway-exists-finalizer.gateway.networking.k8s.io` finalizer on the
         * associated GatewayClass. This ensures that a GatewayClass associated with a
         * Gateway is not deleted while in use.
         *
         * GatewayClass is a Cluster level resource.
         */
        interface GatewayClass {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"GatewayClass">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.gateway.v1.GatewayClassSpec>;
            status?: pulumi.Input<inputs.gateway.v1.GatewayClassStatus>;
        }
        /**
         * Spec defines the desired state of GatewayClass.
         */
        interface GatewayClassSpec {
            /**
             * ControllerName is the name of the controller that is managing Gateways of
             * this class. The value of this field MUST be a domain prefixed path.
             *
             * Example: "example.net/gateway-controller".
             *
             * This field is not mutable and cannot be empty.
             *
             * Support: Core
             */
            controllerName?: pulumi.Input<string>;
            /**
             * Description helps describe a GatewayClass with more details.
             */
            description?: pulumi.Input<string>;
            parametersRef?: pulumi.Input<inputs.gateway.v1.GatewayClassSpecParametersRef>;
        }
        /**
         * ParametersRef is a reference to a resource that contains the configuration
         * parameters corresponding to the GatewayClass. This is optional if the
         * controller does not require any additional configuration.
         *
         * ParametersRef can reference a standard Kubernetes resource, i.e. ConfigMap,
         * or an implementation-specific custom resource. The resource can be
         * cluster-scoped or namespace-scoped.
         *
         * If the referent cannot be found, refers to an unsupported kind, or when
         * the data within that resource is malformed, the GatewayClass SHOULD be
         * rejected with the "Accepted" status condition set to "False" and an
         * "InvalidParameters" reason.
         *
         * A Gateway for this GatewayClass may provide its own `parametersRef`. When both are specified,
         * the merging behavior is implementation specific.
         * It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         * Support: Implementation-specific
         */
        interface GatewayClassSpecParametersRef {
            /**
             * Group is the group of the referent.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent.
             * This field is required when referring to a Namespace-scoped resource and
             * MUST be unset when referring to a Cluster-scoped resource.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * ParametersRef is a reference to a resource that contains the configuration
         * parameters corresponding to the GatewayClass. This is optional if the
         * controller does not require any additional configuration.
         *
         * ParametersRef can reference a standard Kubernetes resource, i.e. ConfigMap,
         * or an implementation-specific custom resource. The resource can be
         * cluster-scoped or namespace-scoped.
         *
         * If the referent cannot be found, refers to an unsupported kind, or when
         * the data within that resource is malformed, the GatewayClass SHOULD be
         * rejected with the "Accepted" status condition set to "False" and an
         * "InvalidParameters" reason.
         *
         * A Gateway for this GatewayClass may provide its own `parametersRef`. When both are specified,
         * the merging behavior is implementation specific.
         * It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         * Support: Implementation-specific
         */
        interface GatewayClassSpecParametersRefPatch {
            /**
             * Group is the group of the referent.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent.
             * This field is required when referring to a Namespace-scoped resource and
             * MUST be unset when referring to a Cluster-scoped resource.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Spec defines the desired state of GatewayClass.
         */
        interface GatewayClassSpecPatch {
            /**
             * ControllerName is the name of the controller that is managing Gateways of
             * this class. The value of this field MUST be a domain prefixed path.
             *
             * Example: "example.net/gateway-controller".
             *
             * This field is not mutable and cannot be empty.
             *
             * Support: Core
             */
            controllerName?: pulumi.Input<string>;
            /**
             * Description helps describe a GatewayClass with more details.
             */
            description?: pulumi.Input<string>;
            parametersRef?: pulumi.Input<inputs.gateway.v1.GatewayClassSpecParametersRefPatch>;
        }
        /**
         * Status defines the current state of GatewayClass.
         *
         * Implementations MUST populate status on all GatewayClass resources which
         * specify their controller name.
         */
        interface GatewayClassStatus {
            /**
             * Conditions is the current status from the controller for
             * this GatewayClass.
             *
             * Controllers should prefer to publish conditions using values
             * of GatewayClassConditionType for the type of each Condition.
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewayClassStatusConditions>[]>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface GatewayClassStatusConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Spec defines the desired state of Gateway.
         */
        interface GatewaySpec {
            /**
             * Addresses requested for this Gateway. This is optional and behavior can
             * depend on the implementation. If a value is set in the spec and the
             * requested address is invalid or unavailable, the implementation MUST
             * indicate this in the associated entry in GatewayStatus.Addresses.
             *
             * The Addresses field represents a request for the address(es) on the
             * "outside of the Gateway", that traffic bound for this Gateway will use.
             * This could be the IP address or hostname of an external load balancer or
             * other networking infrastructure, or some other address that traffic will
             * be sent to.
             *
             * If no Addresses are specified, the implementation MAY schedule the
             * Gateway in an implementation-specific manner, assigning an appropriate
             * set of Addresses.
             *
             * The implementation MUST bind all Listeners to every GatewayAddress that
             * it assigns to the Gateway and add a corresponding entry in
             * GatewayStatus.Addresses.
             *
             * Support: Extended
             */
            addresses?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecAddresses>[]>;
            /**
             * GatewayClassName used for this Gateway. This is the name of a
             * GatewayClass resource.
             */
            gatewayClassName?: pulumi.Input<string>;
            infrastructure?: pulumi.Input<inputs.gateway.v1.GatewaySpecInfrastructure>;
            /**
             * Listeners associated with this Gateway. Listeners define
             * logical endpoints that are bound on this Gateway's addresses.
             * At least one Listener MUST be specified.
             *
             * Each Listener in a set of Listeners (for example, in a single Gateway)
             * MUST be _distinct_, in that a traffic flow MUST be able to be assigned to
             * exactly one listener. (This section uses "set of Listeners" rather than
             * "Listeners in a single Gateway" because implementations MAY merge configuration
             * from multiple Gateways onto a single data plane, and these rules _also_
             * apply in that case).
             *
             * Practically, this means that each listener in a set MUST have a unique
             * combination of Port, Protocol, and, if supported by the protocol, Hostname.
             *
             * Some combinations of port, protocol, and TLS settings are considered
             * Core support and MUST be supported by implementations based on their
             * targeted conformance profile:
             *
             * HTTP Profile
             *
             * 1. HTTPRoute, Port: 80, Protocol: HTTP
             * 2. HTTPRoute, Port: 443, Protocol: HTTPS, TLS Mode: Terminate, TLS keypair provided
             *
             * TLS Profile
             *
             * 1. TLSRoute, Port: 443, Protocol: TLS, TLS Mode: Passthrough
             *
             * "Distinct" Listeners have the following property:
             *
             * The implementation can match inbound requests to a single distinct
             * Listener. When multiple Listeners share values for fields (for
             * example, two Listeners with the same Port value), the implementation
             * can match requests to only one of the Listeners using other
             * Listener fields.
             *
             * For example, the following Listener scenarios are distinct:
             *
             * 1. Multiple Listeners with the same Port that all use the "HTTP"
             *    Protocol that all have unique Hostname values.
             * 2. Multiple Listeners with the same Port that use either the "HTTPS" or
             *    "TLS" Protocol that all have unique Hostname values.
             * 3. A mixture of "TCP" and "UDP" Protocol Listeners, where no Listener
             *    with the same Protocol has the same Port value.
             *
             * Some fields in the Listener struct have possible values that affect
             * whether the Listener is distinct. Hostname is particularly relevant
             * for HTTP or HTTPS protocols.
             *
             * When using the Hostname value to select between same-Port, same-Protocol
             * Listeners, the Hostname value must be different on each Listener for the
             * Listener to be distinct.
             *
             * When the Listeners are distinct based on Hostname, inbound request
             * hostnames MUST match from the most specific to least specific Hostname
             * values to choose the correct Listener and its associated set of Routes.
             *
             * Exact matches must be processed before wildcard matches, and wildcard
             * matches must be processed before fallback (empty Hostname value)
             * matches. For example, `"foo.example.com"` takes precedence over
             * `"*.example.com"`, and `"*.example.com"` takes precedence over `""`.
             *
             * Additionally, if there are multiple wildcard entries, more specific
             * wildcard entries must be processed before less specific wildcard entries.
             * For example, `"*.foo.example.com"` takes precedence over `"*.example.com"`.
             * The precise definition here is that the higher the number of dots in the
             * hostname to the right of the wildcard character, the higher the precedence.
             *
             * The wildcard character will match any number of characters _and dots_ to
             * the left, however, so `"*.example.com"` will match both
             * `"foo.bar.example.com"` _and_ `"bar.example.com"`.
             *
             * If a set of Listeners contains Listeners that are not distinct, then those
             * Listeners are Conflicted, and the implementation MUST set the "Conflicted"
             * condition in the Listener Status to "True".
             *
             * Implementations MAY choose to accept a Gateway with some Conflicted
             * Listeners only if they only accept the partial Listener set that contains
             * no Conflicted Listeners. To put this another way, implementations may
             * accept a partial Listener set only if they throw out *all* the conflicting
             * Listeners. No picking one of the conflicting listeners as the winner.
             * This also means that the Gateway must have at least one non-conflicting
             * Listener in this case, otherwise it violates the requirement that at
             * least one Listener must be present.
             *
             * The implementation MUST set a "ListenersNotValid" condition on the
             * Gateway Status when the Gateway contains Conflicted Listeners whether or
             * not they accept the Gateway. That Condition SHOULD clearly
             * indicate in the Message which Listeners are conflicted, and which are
             * Accepted. Additionally, the Listener status for those listeners SHOULD
             * indicate which Listeners are conflicted and not Accepted.
             *
             * A Gateway's Listeners are considered "compatible" if:
             *
             * 1. They are distinct.
             * 2. The implementation can serve them in compliance with the Addresses
             *    requirement that all Listeners are available on all assigned
             *    addresses.
             *
             * Compatible combinations in Extended support are expected to vary across
             * implementations. A combination that is compatible for one implementation
             * may not be compatible for another.
             *
             * For example, an implementation that cannot serve both TCP and UDP listeners
             * on the same address, or cannot mix HTTPS and generic TLS listens on the same port
             * would not consider those cases compatible, even though they are distinct.
             *
             * Note that requests SHOULD match at most one Listener. For example, if
             * Listeners are defined for "foo.example.com" and "*.example.com", a
             * request to "foo.example.com" SHOULD only be routed using routes attached
             * to the "foo.example.com" Listener (and not the "*.example.com" Listener).
             * This concept is known as "Listener Isolation". Implementations that do
             * not support Listener Isolation MUST clearly document this.
             *
             * Implementations MAY merge separate Gateways onto a single set of
             * Addresses if all Listeners across all Gateways are compatible.
             *
             * Support: Core
             */
            listeners?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecListeners>[]>;
        }
        /**
         * GatewayAddress describes an address that can be bound to a Gateway.
         */
        interface GatewaySpecAddresses {
            /**
             * Type of the address.
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the address. The validity of the values will depend
             * on the type and support by the controller.
             *
             * Examples: `1.2.3.4`, `128::1`, `my-ip-address`.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * GatewayAddress describes an address that can be bound to a Gateway.
         */
        interface GatewaySpecAddressesPatch {
            /**
             * Type of the address.
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the address. The validity of the values will depend
             * on the type and support by the controller.
             *
             * Examples: `1.2.3.4`, `128::1`, `my-ip-address`.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Infrastructure defines infrastructure level attributes about this Gateway instance.
         *
         * Support: Extended
         */
        interface GatewaySpecInfrastructure {
            /**
             * Annotations that SHOULD be applied to any resources created in response to this Gateway.
             *
             * For implementations creating other Kubernetes objects, this should be the `metadata.annotations` field on resources.
             * For other implementations, this refers to any relevant (implementation specific) "annotations" concepts.
             *
             * An implementation may chose to add additional implementation-specific annotations as they see fit.
             *
             * Support: Extended
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Labels that SHOULD be applied to any resources created in response to this Gateway.
             *
             * For implementations creating other Kubernetes objects, this should be the `metadata.labels` field on resources.
             * For other implementations, this refers to any relevant (implementation specific) "labels" concepts.
             *
             * An implementation may chose to add additional implementation-specific labels as they see fit.
             *
             * If an implementation maps these labels to Pods, or any other resource that would need to be recreated when labels
             * change, it SHOULD clearly warn about this behavior in documentation.
             *
             * Support: Extended
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            parametersRef?: pulumi.Input<inputs.gateway.v1.GatewaySpecInfrastructureParametersRef>;
        }
        /**
         * ParametersRef is a reference to a resource that contains the configuration
         * parameters corresponding to the Gateway. This is optional if the
         * controller does not require any additional configuration.
         *
         * This follows the same semantics as GatewayClass's `parametersRef`, but on a per-Gateway basis
         *
         * The Gateway's GatewayClass may provide its own `parametersRef`. When both are specified,
         * the merging behavior is implementation specific.
         * It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         * Support: Implementation-specific
         */
        interface GatewaySpecInfrastructureParametersRef {
            /**
             * Group is the group of the referent.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ParametersRef is a reference to a resource that contains the configuration
         * parameters corresponding to the Gateway. This is optional if the
         * controller does not require any additional configuration.
         *
         * This follows the same semantics as GatewayClass's `parametersRef`, but on a per-Gateway basis
         *
         * The Gateway's GatewayClass may provide its own `parametersRef`. When both are specified,
         * the merging behavior is implementation specific.
         * It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         * Support: Implementation-specific
         */
        interface GatewaySpecInfrastructureParametersRefPatch {
            /**
             * Group is the group of the referent.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Infrastructure defines infrastructure level attributes about this Gateway instance.
         *
         * Support: Extended
         */
        interface GatewaySpecInfrastructurePatch {
            /**
             * Annotations that SHOULD be applied to any resources created in response to this Gateway.
             *
             * For implementations creating other Kubernetes objects, this should be the `metadata.annotations` field on resources.
             * For other implementations, this refers to any relevant (implementation specific) "annotations" concepts.
             *
             * An implementation may chose to add additional implementation-specific annotations as they see fit.
             *
             * Support: Extended
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Labels that SHOULD be applied to any resources created in response to this Gateway.
             *
             * For implementations creating other Kubernetes objects, this should be the `metadata.labels` field on resources.
             * For other implementations, this refers to any relevant (implementation specific) "labels" concepts.
             *
             * An implementation may chose to add additional implementation-specific labels as they see fit.
             *
             * If an implementation maps these labels to Pods, or any other resource that would need to be recreated when labels
             * change, it SHOULD clearly warn about this behavior in documentation.
             *
             * Support: Extended
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            parametersRef?: pulumi.Input<inputs.gateway.v1.GatewaySpecInfrastructureParametersRefPatch>;
        }
        /**
         * Listener embodies the concept of a logical endpoint where a Gateway accepts
         * network connections.
         */
        interface GatewaySpecListeners {
            allowedRoutes?: pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutes>;
            /**
             * Hostname specifies the virtual hostname to match for protocol types that
             * define this concept. When unspecified, all hostnames are matched. This
             * field is ignored for protocols that don't require hostname based
             * matching.
             *
             * Implementations MUST apply Hostname matching appropriately for each of
             * the following protocols:
             *
             * * TLS: The Listener Hostname MUST match the SNI.
             * * HTTP: The Listener Hostname MUST match the Host header of the request.
             * * HTTPS: The Listener Hostname SHOULD match at both the TLS and HTTP
             *   protocol layers as described above. If an implementation does not
             *   ensure that both the SNI and Host header match the Listener hostname,
             *   it MUST clearly document that.
             *
             * For HTTPRoute and TLSRoute resources, there is an interaction with the
             * `spec.hostnames` array. When both listener and route specify hostnames,
             * there MUST be an intersection between the values for a Route to be
             * accepted. For more information, refer to the Route specific Hostnames
             * documentation.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            /**
             * Name is the name of the Listener. This name MUST be unique within a
             * Gateway.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Port is the network port. Multiple listeners may use the
             * same port, subject to the Listener compatibility rules.
             *
             * Support: Core
             */
            port?: pulumi.Input<number>;
            /**
             * Protocol specifies the network protocol this listener expects to receive.
             *
             * Support: Core
             */
            protocol?: pulumi.Input<string>;
            tls?: pulumi.Input<inputs.gateway.v1.GatewaySpecListenersTls>;
        }
        /**
         * AllowedRoutes defines the types of routes that MAY be attached to a
         * Listener and the trusted namespaces where those Route resources MAY be
         * present.
         *
         * Although a client request may match multiple route rules, only one rule
         * may ultimately receive the request. Matching precedence MUST be
         * determined in order of the following criteria:
         *
         * * The most specific match as defined by the Route type.
         * * The oldest Route based on creation timestamp. For example, a Route with
         *   a creation timestamp of "2020-09-08 01:02:03" is given precedence over
         *   a Route with a creation timestamp of "2020-09-08 01:02:04".
         * * If everything else is equivalent, the Route appearing first in
         *   alphabetical order (namespace/name) should be given precedence. For
         *   example, foo/bar is given precedence over foo/baz.
         *
         * All valid rules within a Route attached to this Listener should be
         * implemented. Invalid Route rules can be ignored (sometimes that will mean
         * the full Route). If a Route rule transitions from valid to invalid,
         * support for that Route rule should be dropped to ensure consistency. For
         * example, even if a filter specified by a Route rule is invalid, the rest
         * of the rules within that Route should still be supported.
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutes {
            /**
             * Kinds specifies the groups and kinds of Routes that are allowed to bind
             * to this Gateway Listener. When unspecified or empty, the kinds of Routes
             * selected are determined using the Listener protocol.
             *
             * A RouteGroupKind MUST correspond to kinds of Routes that are compatible
             * with the application protocol specified in the Listener's Protocol field.
             * If an implementation does not support or recognize this resource type, it
             * MUST set the "ResolvedRefs" condition to False for this Listener with the
             * "InvalidRouteKinds" reason.
             *
             * Support: Core
             */
            kinds?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesKinds>[]>;
            namespaces?: pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesNamespaces>;
        }
        /**
         * RouteGroupKind indicates the group and kind of a Route resource.
         */
        interface GatewaySpecListenersAllowedRoutesKinds {
            /**
             * Group is the group of the Route.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the Route.
             */
            kind?: pulumi.Input<string>;
        }
        /**
         * RouteGroupKind indicates the group and kind of a Route resource.
         */
        interface GatewaySpecListenersAllowedRoutesKindsPatch {
            /**
             * Group is the group of the Route.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the Route.
             */
            kind?: pulumi.Input<string>;
        }
        /**
         * Namespaces indicates namespaces from which Routes may be attached to this
         * Listener. This is restricted to the namespace of this Gateway by default.
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesNamespaces {
            /**
             * From indicates where Routes will be selected for this Gateway. Possible
             * values are:
             *
             * * All: Routes in all namespaces may be used by this Gateway.
             * * Selector: Routes in namespaces selected by the selector may be used by
             *   this Gateway.
             * * Same: Only Routes in the same namespace may be used by this Gateway.
             *
             * Support: Core
             */
            from?: pulumi.Input<string>;
            selector?: pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesNamespacesSelector>;
        }
        /**
         * Namespaces indicates namespaces from which Routes may be attached to this
         * Listener. This is restricted to the namespace of this Gateway by default.
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesNamespacesPatch {
            /**
             * From indicates where Routes will be selected for this Gateway. Possible
             * values are:
             *
             * * All: Routes in all namespaces may be used by this Gateway.
             * * Selector: Routes in namespaces selected by the selector may be used by
             *   this Gateway.
             * * Same: Only Routes in the same namespace may be used by this Gateway.
             *
             * Support: Core
             */
            from?: pulumi.Input<string>;
            selector?: pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesNamespacesSelectorPatch>;
        }
        /**
         * Selector must be specified when From is set to "Selector". In that case,
         * only Routes in Namespaces matching this Selector will be selected by this
         * Gateway. This field is ignored for other values of "From".
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesNamespacesSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesNamespacesSelectorMatchExpressions>[]>;
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
        interface GatewaySpecListenersAllowedRoutesNamespacesSelectorMatchExpressions {
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
        interface GatewaySpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsPatch {
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
         * Selector must be specified when From is set to "Selector". In that case,
         * only Routes in Namespaces matching this Selector will be selected by this
         * Gateway. This field is ignored for other values of "From".
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesNamespacesSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsPatch>[]>;
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
         * AllowedRoutes defines the types of routes that MAY be attached to a
         * Listener and the trusted namespaces where those Route resources MAY be
         * present.
         *
         * Although a client request may match multiple route rules, only one rule
         * may ultimately receive the request. Matching precedence MUST be
         * determined in order of the following criteria:
         *
         * * The most specific match as defined by the Route type.
         * * The oldest Route based on creation timestamp. For example, a Route with
         *   a creation timestamp of "2020-09-08 01:02:03" is given precedence over
         *   a Route with a creation timestamp of "2020-09-08 01:02:04".
         * * If everything else is equivalent, the Route appearing first in
         *   alphabetical order (namespace/name) should be given precedence. For
         *   example, foo/bar is given precedence over foo/baz.
         *
         * All valid rules within a Route attached to this Listener should be
         * implemented. Invalid Route rules can be ignored (sometimes that will mean
         * the full Route). If a Route rule transitions from valid to invalid,
         * support for that Route rule should be dropped to ensure consistency. For
         * example, even if a filter specified by a Route rule is invalid, the rest
         * of the rules within that Route should still be supported.
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesPatch {
            /**
             * Kinds specifies the groups and kinds of Routes that are allowed to bind
             * to this Gateway Listener. When unspecified or empty, the kinds of Routes
             * selected are determined using the Listener protocol.
             *
             * A RouteGroupKind MUST correspond to kinds of Routes that are compatible
             * with the application protocol specified in the Listener's Protocol field.
             * If an implementation does not support or recognize this resource type, it
             * MUST set the "ResolvedRefs" condition to False for this Listener with the
             * "InvalidRouteKinds" reason.
             *
             * Support: Core
             */
            kinds?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesKindsPatch>[]>;
            namespaces?: pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesNamespacesPatch>;
        }
        /**
         * Listener embodies the concept of a logical endpoint where a Gateway accepts
         * network connections.
         */
        interface GatewaySpecListenersPatch {
            allowedRoutes?: pulumi.Input<inputs.gateway.v1.GatewaySpecListenersAllowedRoutesPatch>;
            /**
             * Hostname specifies the virtual hostname to match for protocol types that
             * define this concept. When unspecified, all hostnames are matched. This
             * field is ignored for protocols that don't require hostname based
             * matching.
             *
             * Implementations MUST apply Hostname matching appropriately for each of
             * the following protocols:
             *
             * * TLS: The Listener Hostname MUST match the SNI.
             * * HTTP: The Listener Hostname MUST match the Host header of the request.
             * * HTTPS: The Listener Hostname SHOULD match at both the TLS and HTTP
             *   protocol layers as described above. If an implementation does not
             *   ensure that both the SNI and Host header match the Listener hostname,
             *   it MUST clearly document that.
             *
             * For HTTPRoute and TLSRoute resources, there is an interaction with the
             * `spec.hostnames` array. When both listener and route specify hostnames,
             * there MUST be an intersection between the values for a Route to be
             * accepted. For more information, refer to the Route specific Hostnames
             * documentation.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            /**
             * Name is the name of the Listener. This name MUST be unique within a
             * Gateway.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Port is the network port. Multiple listeners may use the
             * same port, subject to the Listener compatibility rules.
             *
             * Support: Core
             */
            port?: pulumi.Input<number>;
            /**
             * Protocol specifies the network protocol this listener expects to receive.
             *
             * Support: Core
             */
            protocol?: pulumi.Input<string>;
            tls?: pulumi.Input<inputs.gateway.v1.GatewaySpecListenersTlsPatch>;
        }
        /**
         * TLS is the TLS configuration for the Listener. This field is required if
         * the Protocol field is "HTTPS" or "TLS". It is invalid to set this field
         * if the Protocol field is "HTTP", "TCP", or "UDP".
         *
         * The association of SNIs to Certificate defined in GatewayTLSConfig is
         * defined based on the Hostname field for this listener.
         *
         * The GatewayClass MUST use the longest matching SNI out of all
         * available certificates for any TLS handshake.
         *
         * Support: Core
         */
        interface GatewaySpecListenersTls {
            /**
             * CertificateRefs contains a series of references to Kubernetes objects that
             * contains TLS certificates and private keys. These certificates are used to
             * establish a TLS handshake for requests that match the hostname of the
             * associated listener.
             *
             * A single CertificateRef to a Kubernetes Secret has "Core" support.
             * Implementations MAY choose to support attaching multiple certificates to
             * a Listener, but this behavior is implementation-specific.
             *
             * References to a resource in different namespace are invalid UNLESS there
             * is a ReferenceGrant in the target namespace that allows the certificate
             * to be attached. If a ReferenceGrant does not allow this reference, the
             * "ResolvedRefs" condition MUST be set to False for this listener with the
             * "RefNotPermitted" reason.
             *
             * This field is required to have at least one element when the mode is set
             * to "Terminate" (default) and is optional otherwise.
             *
             * CertificateRefs can reference to standard Kubernetes resources, i.e.
             * Secret, or implementation-specific custom resources.
             *
             * Support: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls
             *
             * Support: Implementation-specific (More than one reference or other resource types)
             */
            certificateRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecListenersTlsCertificateRefs>[]>;
            /**
             * Mode defines the TLS behavior for the TLS session initiated by the client.
             * There are two possible modes:
             *
             * - Terminate: The TLS session between the downstream client and the
             *   Gateway is terminated at the Gateway. This mode requires certificates
             *   to be specified in some way, such as populating the certificateRefs
             *   field.
             * - Passthrough: The TLS session is NOT terminated by the Gateway. This
             *   implies that the Gateway can't decipher the TLS stream except for
             *   the ClientHello message of the TLS protocol. The certificateRefs field
             *   is ignored in this mode.
             *
             * Support: Core
             */
            mode?: pulumi.Input<string>;
            /**
             * Options are a list of key/value pairs to enable extended TLS
             * configuration for each implementation. For example, configuring the
             * minimum TLS version or supported cipher suites.
             *
             * A set of common keys MAY be defined by the API in the future. To avoid
             * any ambiguity, implementation-specific definitions MUST use
             * domain-prefixed names, such as `example.com/my-custom-option`.
             * Un-prefixed names are reserved for key names defined by Gateway API.
             *
             * Support: Implementation-specific
             */
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * SecretObjectReference identifies an API object including its namespace,
         * defaulting to Secret.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         *
         * References to objects with invalid Group and Kind are not valid, and must
         * be rejected by the implementation, with appropriate Conditions set
         * on the containing object.
         */
        interface GatewaySpecListenersTlsCertificateRefs {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "Secret".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referenced object. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * SecretObjectReference identifies an API object including its namespace,
         * defaulting to Secret.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         *
         * References to objects with invalid Group and Kind are not valid, and must
         * be rejected by the implementation, with appropriate Conditions set
         * on the containing object.
         */
        interface GatewaySpecListenersTlsCertificateRefsPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "Secret".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referenced object. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * TLS is the TLS configuration for the Listener. This field is required if
         * the Protocol field is "HTTPS" or "TLS". It is invalid to set this field
         * if the Protocol field is "HTTP", "TCP", or "UDP".
         *
         * The association of SNIs to Certificate defined in GatewayTLSConfig is
         * defined based on the Hostname field for this listener.
         *
         * The GatewayClass MUST use the longest matching SNI out of all
         * available certificates for any TLS handshake.
         *
         * Support: Core
         */
        interface GatewaySpecListenersTlsPatch {
            /**
             * CertificateRefs contains a series of references to Kubernetes objects that
             * contains TLS certificates and private keys. These certificates are used to
             * establish a TLS handshake for requests that match the hostname of the
             * associated listener.
             *
             * A single CertificateRef to a Kubernetes Secret has "Core" support.
             * Implementations MAY choose to support attaching multiple certificates to
             * a Listener, but this behavior is implementation-specific.
             *
             * References to a resource in different namespace are invalid UNLESS there
             * is a ReferenceGrant in the target namespace that allows the certificate
             * to be attached. If a ReferenceGrant does not allow this reference, the
             * "ResolvedRefs" condition MUST be set to False for this listener with the
             * "RefNotPermitted" reason.
             *
             * This field is required to have at least one element when the mode is set
             * to "Terminate" (default) and is optional otherwise.
             *
             * CertificateRefs can reference to standard Kubernetes resources, i.e.
             * Secret, or implementation-specific custom resources.
             *
             * Support: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls
             *
             * Support: Implementation-specific (More than one reference or other resource types)
             */
            certificateRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecListenersTlsCertificateRefsPatch>[]>;
            /**
             * Mode defines the TLS behavior for the TLS session initiated by the client.
             * There are two possible modes:
             *
             * - Terminate: The TLS session between the downstream client and the
             *   Gateway is terminated at the Gateway. This mode requires certificates
             *   to be specified in some way, such as populating the certificateRefs
             *   field.
             * - Passthrough: The TLS session is NOT terminated by the Gateway. This
             *   implies that the Gateway can't decipher the TLS stream except for
             *   the ClientHello message of the TLS protocol. The certificateRefs field
             *   is ignored in this mode.
             *
             * Support: Core
             */
            mode?: pulumi.Input<string>;
            /**
             * Options are a list of key/value pairs to enable extended TLS
             * configuration for each implementation. For example, configuring the
             * minimum TLS version or supported cipher suites.
             *
             * A set of common keys MAY be defined by the API in the future. To avoid
             * any ambiguity, implementation-specific definitions MUST use
             * domain-prefixed names, such as `example.com/my-custom-option`.
             * Un-prefixed names are reserved for key names defined by Gateway API.
             *
             * Support: Implementation-specific
             */
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Spec defines the desired state of Gateway.
         */
        interface GatewaySpecPatch {
            /**
             * Addresses requested for this Gateway. This is optional and behavior can
             * depend on the implementation. If a value is set in the spec and the
             * requested address is invalid or unavailable, the implementation MUST
             * indicate this in the associated entry in GatewayStatus.Addresses.
             *
             * The Addresses field represents a request for the address(es) on the
             * "outside of the Gateway", that traffic bound for this Gateway will use.
             * This could be the IP address or hostname of an external load balancer or
             * other networking infrastructure, or some other address that traffic will
             * be sent to.
             *
             * If no Addresses are specified, the implementation MAY schedule the
             * Gateway in an implementation-specific manner, assigning an appropriate
             * set of Addresses.
             *
             * The implementation MUST bind all Listeners to every GatewayAddress that
             * it assigns to the Gateway and add a corresponding entry in
             * GatewayStatus.Addresses.
             *
             * Support: Extended
             */
            addresses?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecAddressesPatch>[]>;
            /**
             * GatewayClassName used for this Gateway. This is the name of a
             * GatewayClass resource.
             */
            gatewayClassName?: pulumi.Input<string>;
            infrastructure?: pulumi.Input<inputs.gateway.v1.GatewaySpecInfrastructurePatch>;
            /**
             * Listeners associated with this Gateway. Listeners define
             * logical endpoints that are bound on this Gateway's addresses.
             * At least one Listener MUST be specified.
             *
             * Each Listener in a set of Listeners (for example, in a single Gateway)
             * MUST be _distinct_, in that a traffic flow MUST be able to be assigned to
             * exactly one listener. (This section uses "set of Listeners" rather than
             * "Listeners in a single Gateway" because implementations MAY merge configuration
             * from multiple Gateways onto a single data plane, and these rules _also_
             * apply in that case).
             *
             * Practically, this means that each listener in a set MUST have a unique
             * combination of Port, Protocol, and, if supported by the protocol, Hostname.
             *
             * Some combinations of port, protocol, and TLS settings are considered
             * Core support and MUST be supported by implementations based on their
             * targeted conformance profile:
             *
             * HTTP Profile
             *
             * 1. HTTPRoute, Port: 80, Protocol: HTTP
             * 2. HTTPRoute, Port: 443, Protocol: HTTPS, TLS Mode: Terminate, TLS keypair provided
             *
             * TLS Profile
             *
             * 1. TLSRoute, Port: 443, Protocol: TLS, TLS Mode: Passthrough
             *
             * "Distinct" Listeners have the following property:
             *
             * The implementation can match inbound requests to a single distinct
             * Listener. When multiple Listeners share values for fields (for
             * example, two Listeners with the same Port value), the implementation
             * can match requests to only one of the Listeners using other
             * Listener fields.
             *
             * For example, the following Listener scenarios are distinct:
             *
             * 1. Multiple Listeners with the same Port that all use the "HTTP"
             *    Protocol that all have unique Hostname values.
             * 2. Multiple Listeners with the same Port that use either the "HTTPS" or
             *    "TLS" Protocol that all have unique Hostname values.
             * 3. A mixture of "TCP" and "UDP" Protocol Listeners, where no Listener
             *    with the same Protocol has the same Port value.
             *
             * Some fields in the Listener struct have possible values that affect
             * whether the Listener is distinct. Hostname is particularly relevant
             * for HTTP or HTTPS protocols.
             *
             * When using the Hostname value to select between same-Port, same-Protocol
             * Listeners, the Hostname value must be different on each Listener for the
             * Listener to be distinct.
             *
             * When the Listeners are distinct based on Hostname, inbound request
             * hostnames MUST match from the most specific to least specific Hostname
             * values to choose the correct Listener and its associated set of Routes.
             *
             * Exact matches must be processed before wildcard matches, and wildcard
             * matches must be processed before fallback (empty Hostname value)
             * matches. For example, `"foo.example.com"` takes precedence over
             * `"*.example.com"`, and `"*.example.com"` takes precedence over `""`.
             *
             * Additionally, if there are multiple wildcard entries, more specific
             * wildcard entries must be processed before less specific wildcard entries.
             * For example, `"*.foo.example.com"` takes precedence over `"*.example.com"`.
             * The precise definition here is that the higher the number of dots in the
             * hostname to the right of the wildcard character, the higher the precedence.
             *
             * The wildcard character will match any number of characters _and dots_ to
             * the left, however, so `"*.example.com"` will match both
             * `"foo.bar.example.com"` _and_ `"bar.example.com"`.
             *
             * If a set of Listeners contains Listeners that are not distinct, then those
             * Listeners are Conflicted, and the implementation MUST set the "Conflicted"
             * condition in the Listener Status to "True".
             *
             * Implementations MAY choose to accept a Gateway with some Conflicted
             * Listeners only if they only accept the partial Listener set that contains
             * no Conflicted Listeners. To put this another way, implementations may
             * accept a partial Listener set only if they throw out *all* the conflicting
             * Listeners. No picking one of the conflicting listeners as the winner.
             * This also means that the Gateway must have at least one non-conflicting
             * Listener in this case, otherwise it violates the requirement that at
             * least one Listener must be present.
             *
             * The implementation MUST set a "ListenersNotValid" condition on the
             * Gateway Status when the Gateway contains Conflicted Listeners whether or
             * not they accept the Gateway. That Condition SHOULD clearly
             * indicate in the Message which Listeners are conflicted, and which are
             * Accepted. Additionally, the Listener status for those listeners SHOULD
             * indicate which Listeners are conflicted and not Accepted.
             *
             * A Gateway's Listeners are considered "compatible" if:
             *
             * 1. They are distinct.
             * 2. The implementation can serve them in compliance with the Addresses
             *    requirement that all Listeners are available on all assigned
             *    addresses.
             *
             * Compatible combinations in Extended support are expected to vary across
             * implementations. A combination that is compatible for one implementation
             * may not be compatible for another.
             *
             * For example, an implementation that cannot serve both TCP and UDP listeners
             * on the same address, or cannot mix HTTPS and generic TLS listens on the same port
             * would not consider those cases compatible, even though they are distinct.
             *
             * Note that requests SHOULD match at most one Listener. For example, if
             * Listeners are defined for "foo.example.com" and "*.example.com", a
             * request to "foo.example.com" SHOULD only be routed using routes attached
             * to the "foo.example.com" Listener (and not the "*.example.com" Listener).
             * This concept is known as "Listener Isolation". Implementations that do
             * not support Listener Isolation MUST clearly document this.
             *
             * Implementations MAY merge separate Gateways onto a single set of
             * Addresses if all Listeners across all Gateways are compatible.
             *
             * Support: Core
             */
            listeners?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewaySpecListenersPatch>[]>;
        }
        /**
         * Status defines the current state of Gateway.
         */
        interface GatewayStatus {
            /**
             * Addresses lists the network addresses that have been bound to the
             * Gateway.
             *
             * This list may differ from the addresses provided in the spec under some
             * conditions:
             *
             *   * no addresses are specified, all addresses are dynamically assigned
             *   * a combination of specified and dynamic addresses are assigned
             *   * a specified address was unusable (e.g. already in use)
             */
            addresses?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewayStatusAddresses>[]>;
            /**
             * Conditions describe the current conditions of the Gateway.
             *
             * Implementations should prefer to express Gateway conditions
             * using the `GatewayConditionType` and `GatewayConditionReason`
             * constants so that operators and tools can converge on a common
             * vocabulary to describe Gateway state.
             *
             * Known condition types are:
             *
             * * "Accepted"
             * * "Programmed"
             * * "Ready"
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewayStatusConditions>[]>;
            /**
             * Listeners provide status for each unique listener port defined in the Spec.
             */
            listeners?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewayStatusListeners>[]>;
        }
        /**
         * GatewayStatusAddress describes a network address that is bound to a Gateway.
         */
        interface GatewayStatusAddresses {
            /**
             * Type of the address.
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the address. The validity of the values will depend
             * on the type and support by the controller.
             *
             * Examples: `1.2.3.4`, `128::1`, `my-ip-address`.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface GatewayStatusConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ListenerStatus is the status associated with a Listener.
         */
        interface GatewayStatusListeners {
            /**
             * AttachedRoutes represents the total number of Routes that have been
             * successfully attached to this Listener.
             *
             * Successful attachment of a Route to a Listener is based solely on the
             * combination of the AllowedRoutes field on the corresponding Listener
             * and the Route's ParentRefs field. A Route is successfully attached to
             * a Listener when it is selected by the Listener's AllowedRoutes field
             * AND the Route has a valid ParentRef selecting the whole Gateway
             * resource or a specific Listener as a parent resource (more detail on
             * attachment semantics can be found in the documentation on the various
             * Route kinds ParentRefs fields). Listener or Route status does not impact
             * successful attachment, i.e. the AttachedRoutes field count MUST be set
             * for Listeners with condition Accepted: false and MUST count successfully
             * attached Routes that may themselves have Accepted: false conditions.
             *
             * Uses for this field include troubleshooting Route attachment and
             * measuring blast radius/impact of changes to a Listener.
             */
            attachedRoutes?: pulumi.Input<number>;
            /**
             * Conditions describe the current condition of this listener.
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewayStatusListenersConditions>[]>;
            /**
             * Name is the name of the Listener that this status corresponds to.
             */
            name?: pulumi.Input<string>;
            /**
             * SupportedKinds is the list indicating the Kinds supported by this
             * listener. This MUST represent the kinds an implementation supports for
             * that Listener configuration.
             *
             * If kinds are specified in Spec that are not supported, they MUST NOT
             * appear in this list and an implementation MUST set the "ResolvedRefs"
             * condition to "False" with the "InvalidRouteKinds" reason. If both valid
             * and invalid Route kinds are specified, the implementation MUST
             * reference the valid Route kinds that have been specified.
             */
            supportedKinds?: pulumi.Input<pulumi.Input<inputs.gateway.v1.GatewayStatusListenersSupportedKinds>[]>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface GatewayStatusListenersConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * RouteGroupKind indicates the group and kind of a Route resource.
         */
        interface GatewayStatusListenersSupportedKinds {
            /**
             * Group is the group of the Route.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the Route.
             */
            kind?: pulumi.Input<string>;
        }
        /**
         * HTTPRoute provides a way to route HTTP requests. This includes the capability
         * to match requests by hostname, path, header, or query param. Filters can be
         * used to specify additional processing steps. Backends specify where matching
         * requests should be routed.
         */
        interface HTTPRoute {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"HTTPRoute">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpec>;
            status?: pulumi.Input<inputs.gateway.v1.HTTPRouteStatus>;
        }
        /**
         * Spec defines the desired state of HTTPRoute.
         */
        interface HTTPRouteSpec {
            /**
             * Hostnames defines a set of hostnames that should match against the HTTP Host
             * header to select a HTTPRoute used to process the request. Implementations
             * MUST ignore any port value specified in the HTTP Host header while
             * performing a match and (absent of any applicable header modification
             * configuration) MUST forward this header unmodified to the backend.
             *
             * Valid values for Hostnames are determined by RFC 1123 definition of a
             * hostname with 2 notable exceptions:
             *
             * 1. IPs are not allowed.
             * 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
             *    label must appear by itself as the first label.
             *
             * If a hostname is specified by both the Listener and HTTPRoute, there
             * must be at least one intersecting hostname for the HTTPRoute to be
             * attached to the Listener. For example:
             *
             * * A Listener with `test.example.com` as the hostname matches HTTPRoutes
             *   that have either not specified any hostnames, or have specified at
             *   least one of `test.example.com` or `*.example.com`.
             * * A Listener with `*.example.com` as the hostname matches HTTPRoutes
             *   that have either not specified any hostnames or have specified at least
             *   one hostname that matches the Listener hostname. For example,
             *   `*.example.com`, `test.example.com`, and `foo.test.example.com` would
             *   all match. On the other hand, `example.com` and `test.example.net` would
             *   not match.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * If both the Listener and HTTPRoute have specified hostnames, any
             * HTTPRoute hostnames that do not match the Listener hostname MUST be
             * ignored. For example, if a Listener specified `*.example.com`, and the
             * HTTPRoute specified `test.example.com` and `test.example.net`,
             * `test.example.net` must not be considered for a match.
             *
             * If both the Listener and HTTPRoute have specified hostnames, and none
             * match with the criteria above, then the HTTPRoute is not accepted. The
             * implementation must raise an 'Accepted' Condition with a status of
             * `False` in the corresponding RouteParentStatus.
             *
             * In the event that multiple HTTPRoutes specify intersecting hostnames (e.g.
             * overlapping wildcard matching and exact matching hostnames), precedence must
             * be given to rules from the HTTPRoute with the largest number of:
             *
             * * Characters in a matching non-wildcard hostname.
             * * Characters in a matching hostname.
             *
             * If ties exist across multiple Routes, the matching precedence rules for
             * HTTPRouteMatches takes over.
             *
             * Support: Core
             */
            hostnames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * ParentRefs references the resources (usually Gateways) that a Route wants
             * to be attached to. Note that the referenced parent resource needs to
             * allow this for the attachment to be complete. For Gateways, that means
             * the Gateway needs to allow attachment from Routes of this kind and
             * namespace. For Services, that means the Service must either be in the same
             * namespace for a "producer" route, or the mesh implementation must support
             * and allow "consumer" routes for the referenced Service. ReferenceGrant is
             * not applicable for governing ParentRefs to Services - it is not possible to
             * create a "producer" route for a Service in a different namespace from the
             * Route.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * This API may be extended in the future to support additional kinds of parent
             * resources.
             *
             * ParentRefs must be _distinct_. This means either that:
             *
             * * They select different objects.  If this is the case, then parentRef
             *   entries are distinct. In terms of fields, this means that the
             *   multi-part key defined by `group`, `kind`, `namespace`, and `name` must
             *   be unique across all parentRef entries in the Route.
             * * They do not select different objects, but for each optional field used,
             *   each ParentRef that selects the same object must set the same set of
             *   optional fields to different values. If one ParentRef sets a
             *   combination of optional fields, all must set the same combination.
             *
             * Some examples:
             *
             * * If one ParentRef sets `sectionName`, all ParentRefs referencing the
             *   same object must also set `sectionName`.
             * * If one ParentRef sets `port`, all ParentRefs referencing the same
             *   object must also set `port`.
             * * If one ParentRef sets `sectionName` and `port`, all ParentRefs
             *   referencing the same object must also set `sectionName` and `port`.
             *
             * It is possible to separately reference multiple distinct objects that may
             * be collapsed by an implementation. For example, some implementations may
             * choose to merge compatible Gateway Listeners together. If that is the
             * case, the list of routes attached to those resources should also be
             * merged.
             *
             * Note that for ParentRefs that cross namespace boundaries, there are specific
             * rules. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example,
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable other kinds of cross-namespace reference.
             */
            parentRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecParentRefs>[]>;
            /**
             * Rules are a list of HTTP matchers, filters and actions.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRules>[]>;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered
         * a parent of this resource (usually a route). There are two kinds of parent resources
         * with "Core" support:
         *
         * * Gateway (Gateway conformance profile)
         * * Service (Mesh conformance profile, ClusterIP Services only)
         *
         * This API may be extended in the future to support additional kinds of parent
         * resources.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         */
        interface HTTPRouteSpecParentRefs {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered
         * a parent of this resource (usually a route). There are two kinds of parent resources
         * with "Core" support:
         *
         * * Gateway (Gateway conformance profile)
         * * Service (Mesh conformance profile, ClusterIP Services only)
         *
         * This API may be extended in the future to support additional kinds of parent
         * resources.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         */
        interface HTTPRouteSpecParentRefsPatch {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
        /**
         * Spec defines the desired state of HTTPRoute.
         */
        interface HTTPRouteSpecPatch {
            /**
             * Hostnames defines a set of hostnames that should match against the HTTP Host
             * header to select a HTTPRoute used to process the request. Implementations
             * MUST ignore any port value specified in the HTTP Host header while
             * performing a match and (absent of any applicable header modification
             * configuration) MUST forward this header unmodified to the backend.
             *
             * Valid values for Hostnames are determined by RFC 1123 definition of a
             * hostname with 2 notable exceptions:
             *
             * 1. IPs are not allowed.
             * 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
             *    label must appear by itself as the first label.
             *
             * If a hostname is specified by both the Listener and HTTPRoute, there
             * must be at least one intersecting hostname for the HTTPRoute to be
             * attached to the Listener. For example:
             *
             * * A Listener with `test.example.com` as the hostname matches HTTPRoutes
             *   that have either not specified any hostnames, or have specified at
             *   least one of `test.example.com` or `*.example.com`.
             * * A Listener with `*.example.com` as the hostname matches HTTPRoutes
             *   that have either not specified any hostnames or have specified at least
             *   one hostname that matches the Listener hostname. For example,
             *   `*.example.com`, `test.example.com`, and `foo.test.example.com` would
             *   all match. On the other hand, `example.com` and `test.example.net` would
             *   not match.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * If both the Listener and HTTPRoute have specified hostnames, any
             * HTTPRoute hostnames that do not match the Listener hostname MUST be
             * ignored. For example, if a Listener specified `*.example.com`, and the
             * HTTPRoute specified `test.example.com` and `test.example.net`,
             * `test.example.net` must not be considered for a match.
             *
             * If both the Listener and HTTPRoute have specified hostnames, and none
             * match with the criteria above, then the HTTPRoute is not accepted. The
             * implementation must raise an 'Accepted' Condition with a status of
             * `False` in the corresponding RouteParentStatus.
             *
             * In the event that multiple HTTPRoutes specify intersecting hostnames (e.g.
             * overlapping wildcard matching and exact matching hostnames), precedence must
             * be given to rules from the HTTPRoute with the largest number of:
             *
             * * Characters in a matching non-wildcard hostname.
             * * Characters in a matching hostname.
             *
             * If ties exist across multiple Routes, the matching precedence rules for
             * HTTPRouteMatches takes over.
             *
             * Support: Core
             */
            hostnames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * ParentRefs references the resources (usually Gateways) that a Route wants
             * to be attached to. Note that the referenced parent resource needs to
             * allow this for the attachment to be complete. For Gateways, that means
             * the Gateway needs to allow attachment from Routes of this kind and
             * namespace. For Services, that means the Service must either be in the same
             * namespace for a "producer" route, or the mesh implementation must support
             * and allow "consumer" routes for the referenced Service. ReferenceGrant is
             * not applicable for governing ParentRefs to Services - it is not possible to
             * create a "producer" route for a Service in a different namespace from the
             * Route.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * This API may be extended in the future to support additional kinds of parent
             * resources.
             *
             * ParentRefs must be _distinct_. This means either that:
             *
             * * They select different objects.  If this is the case, then parentRef
             *   entries are distinct. In terms of fields, this means that the
             *   multi-part key defined by `group`, `kind`, `namespace`, and `name` must
             *   be unique across all parentRef entries in the Route.
             * * They do not select different objects, but for each optional field used,
             *   each ParentRef that selects the same object must set the same set of
             *   optional fields to different values. If one ParentRef sets a
             *   combination of optional fields, all must set the same combination.
             *
             * Some examples:
             *
             * * If one ParentRef sets `sectionName`, all ParentRefs referencing the
             *   same object must also set `sectionName`.
             * * If one ParentRef sets `port`, all ParentRefs referencing the same
             *   object must also set `port`.
             * * If one ParentRef sets `sectionName` and `port`, all ParentRefs
             *   referencing the same object must also set `sectionName` and `port`.
             *
             * It is possible to separately reference multiple distinct objects that may
             * be collapsed by an implementation. For example, some implementations may
             * choose to merge compatible Gateway Listeners together. If that is the
             * case, the list of routes attached to those resources should also be
             * merged.
             *
             * Note that for ParentRefs that cross namespace boundaries, there are specific
             * rules. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example,
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable other kinds of cross-namespace reference.
             */
            parentRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecParentRefsPatch>[]>;
            /**
             * Rules are a list of HTTP matchers, filters and actions.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesPatch>[]>;
        }
        /**
         * HTTPRouteRule defines semantics for matching an HTTP request based on
         * conditions (matches), processing it (filters), and forwarding the request to
         * an API object (backendRefs).
         */
        interface HTTPRouteSpecRules {
            /**
             * BackendRefs defines the backend(s) where matching requests should be
             * sent.
             *
             * Failure behavior here depends on how many BackendRefs are specified and
             * how many are invalid.
             *
             * If *all* entries in BackendRefs are invalid, and there are also no filters
             * specified in this route rule, *all* traffic which matches this rule MUST
             * receive a 500 status code.
             *
             * See the HTTPBackendRef definition for the rules about what makes a single
             * HTTPBackendRef invalid.
             *
             * When a HTTPBackendRef is invalid, 500 status codes MUST be returned for
             * requests that would have otherwise been routed to an invalid backend. If
             * multiple backends are specified, and some are invalid, the proportion of
             * requests that would otherwise have been routed to an invalid backend
             * MUST receive a 500 status code.
             *
             * For example, if two backends are specified with equal weights, and one is
             * invalid, 50 percent of traffic must receive a 500. Implementations may
             * choose how that 50 percent is determined.
             *
             * When a HTTPBackendRef refers to a Service that has no ready endpoints,
             * implementations SHOULD return a 503 for requests to that backend instead.
             * If an implementation chooses to do this, all of the above rules for 500 responses
             * MUST also apply for responses that return a 503.
             *
             * Support: Core for Kubernetes Service
             *
             * Support: Extended for Kubernetes ServiceImport
             *
             * Support: Implementation-specific for any other resource
             *
             * Support for weight: Core
             */
            backendRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefs>[]>;
            /**
             * Filters define the filters that are applied to requests that match
             * this rule.
             *
             * Wherever possible, implementations SHOULD implement filters in the order
             * they are specified.
             *
             * Implementations MAY choose to implement this ordering strictly, rejecting
             * any combination or order of filters that can not be supported. If implementations
             * choose a strict interpretation of filter ordering, they MUST clearly document
             * that behavior.
             *
             * To reject an invalid combination or order of filters, implementations SHOULD
             * consider the Route Rules with this configuration invalid. If all Route Rules
             * in a Route are invalid, the entire Route would be considered invalid. If only
             * a portion of Route Rules are invalid, implementations MUST set the
             * "PartiallyInvalid" condition for the Route.
             *
             * Conformance-levels at this level are defined based on the type of filter:
             *
             * - ALL core filters MUST be supported by all implementations.
             * - Implementers are encouraged to support extended filters.
             * - Implementation-specific custom filters have no API guarantees across
             *   implementations.
             *
             * Specifying the same filter multiple times is not supported unless explicitly
             * indicated in the filter.
             *
             * All filters are expected to be compatible with each other except for the
             * URLRewrite and RequestRedirect filters, which may not be combined. If an
             * implementation can not support other combinations of filters, they must clearly
             * document that limitation. In cases where incompatible or unsupported
             * filters are specified and cause the `Accepted` condition to be set to status
             * `False`, implementations may use the `IncompatibleFilters` reason to specify
             * this configuration error.
             *
             * Support: Core
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFilters>[]>;
            /**
             * Matches define conditions used for matching the rule against incoming
             * HTTP requests. Each match is independent, i.e. this rule will be matched
             * if **any** one of the matches is satisfied.
             *
             * For example, take the following matches configuration:
             *
             * ```
             * matches:
             * - path:
             *     value: "/foo"
             *   headers:
             *   - name: "version"
             *     value: "v2"
             * - path:
             *     value: "/v2/foo"
             * ```
             *
             * For a request to match against this rule, a request must satisfy
             * EITHER of the two conditions:
             *
             * - path prefixed with `/foo` AND contains the header `version: v2`
             * - path prefix of `/v2/foo`
             *
             * See the documentation for HTTPRouteMatch on how to specify multiple
             * match conditions that should be ANDed together.
             *
             * If no matches are specified, the default is a prefix
             * path match on "/", which has the effect of matching every
             * HTTP request.
             *
             * Proxy or Load Balancer routing configuration generated from HTTPRoutes
             * MUST prioritize matches based on the following criteria, continuing on
             * ties. Across all rules specified on applicable Routes, precedence must be
             * given to the match having:
             *
             * * "Exact" path match.
             * * "Prefix" path match with largest number of characters.
             * * Method match.
             * * Largest number of header matches.
             * * Largest number of query param matches.
             *
             * Note: The precedence of RegularExpression path matches are implementation-specific.
             *
             * If ties still exist across multiple Routes, matching precedence MUST be
             * determined in order of the following criteria, continuing on ties:
             *
             * * The oldest Route based on creation timestamp.
             * * The Route appearing first in alphabetical order by
             *   "{namespace}/{name}".
             *
             * If ties still exist within an HTTPRoute, matching precedence MUST be granted
             * to the FIRST matching rule (in list order) with a match meeting the above
             * criteria.
             *
             * When no rules matching a request have been successfully attached to the
             * parent a request is coming from, a HTTP 404 status code MUST be returned.
             */
            matches?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesMatches>[]>;
            timeouts?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesTimeouts>;
        }
        /**
         * HTTPBackendRef defines how a HTTPRoute forwards a HTTP request.
         *
         * Note that when a namespace different than the local namespace is specified, a
         * ReferenceGrant object is required in the referent namespace to allow that
         * namespace's owner to accept the reference. See the ReferenceGrant
         * documentation for details.
         *
         * <gateway:experimental:description>
         *
         * When the BackendRef points to a Kubernetes Service, implementations SHOULD
         * honor the appProtocol field if it is set for the target Service Port.
         *
         * Implementations supporting appProtocol SHOULD recognize the Kubernetes
         * Standard Application Protocols defined in KEP-3726.
         *
         * If a Service appProtocol isn't specified, an implementation MAY infer the
         * backend protocol through its own means. Implementations MAY infer the
         * protocol from the Route type referring to the backend Service.
         *
         * If a Route is not able to send traffic to the backend using the specified
         * protocol then the backend is considered invalid. Implementations MUST set the
         * "ResolvedRefs" condition to "False" with the "UnsupportedProtocol" reason.
         *
         * </gateway:experimental:description>
         */
        interface HTTPRouteSpecRulesBackendRefs {
            /**
             * Filters defined at this level should be executed if and only if the
             * request is being forwarded to the backend defined here.
             *
             * Support: Implementation-specific (For broader support of filters, use the
             * Filters field in HTTPRouteRule.)
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFilters>[]>;
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
            /**
             * Weight specifies the proportion of requests forwarded to the referenced
             * backend. This is computed as weight/(sum of all weights in this
             * BackendRefs list). For non-zero values, there may be some epsilon from
             * the exact proportion defined here depending on the precision an
             * implementation supports. Weight is not a percentage and the sum of
             * weights does not need to equal 100.
             *
             * If only one backend is specified and it has a weight greater than 0, 100%
             * of the traffic is forwarded to that backend. If weight is set to 0, no
             * traffic should be forwarded for this entry. If unspecified, weight
             * defaults to 1.
             *
             * Support for this field varies based on the context where used.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * HTTPRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. HTTPRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface HTTPRouteSpecRulesBackendRefsFilters {
            extensionRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersExtensionRef>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifier>;
            requestMirror?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestMirror>;
            requestRedirect?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestRedirect>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifier>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations must support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by
             *   specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` should be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
            urlRewrite?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersUrlRewrite>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * This filter can be used multiple times within the same rule.
         *
         * Support: Implementation-specific
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersExtensionRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * This filter can be used multiple times within the same rule.
         *
         * Support: Implementation-specific
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersExtensionRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. HTTPRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersPatch {
            extensionRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersExtensionRefPatch>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierPatch>;
            requestMirror?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorPatch>;
            requestRedirect?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPatch>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierPatch>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations must support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by
             *   specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` should be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
            urlRewrite?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePatch>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestMirror {
            backendRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRef>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorPatch {
            backendRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRefPatch>;
        }
        /**
         * RequestRedirect defines a schema for a filter that responds to the
         * request with an HTTP redirection.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestRedirect {
            /**
             * Hostname is the hostname to be used in the value of the `Location`
             * header in the response.
             * When empty, the hostname in the `Host` header of the request is used.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPath>;
            /**
             * Port is the port to be used in the value of the `Location`
             * header in the response.
             *
             * If no port is specified, the redirect port MUST be derived using the
             * following rules:
             *
             * * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *   port associated with the redirect scheme. Specifically "http" to port 80
             *   and "https" to port 443. If the redirect scheme does not have a
             *   well-known port, the listener port of the Gateway SHOULD be used.
             * * If redirect scheme is empty, the redirect port MUST be the Gateway
             *   Listener port.
             *
             * Implementations SHOULD NOT add the port number in the 'Location'
             * header in the following cases:
             *
             * * A Location header that will use HTTP (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 80.
             * * A Location header that will use HTTPS (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 443.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in
             * the response. When empty, the scheme of the request is used.
             *
             * Scheme redirects can affect the port of the redirect, for more information,
             * refer to the documentation for the port field of this filter.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Extended
             */
            scheme?: pulumi.Input<string>;
            /**
             * StatusCode is the HTTP status code to be used in response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Core
             */
            statusCode?: pulumi.Input<number>;
        }
        /**
         * RequestRedirect defines a schema for a filter that responds to the
         * request with an HTTP redirection.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPatch {
            /**
             * Hostname is the hostname to be used in the value of the `Location`
             * header in the response.
             * When empty, the hostname in the `Host` header of the request is used.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPathPatch>;
            /**
             * Port is the port to be used in the value of the `Location`
             * header in the response.
             *
             * If no port is specified, the redirect port MUST be derived using the
             * following rules:
             *
             * * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *   port associated with the redirect scheme. Specifically "http" to port 80
             *   and "https" to port 443. If the redirect scheme does not have a
             *   well-known port, the listener port of the Gateway SHOULD be used.
             * * If redirect scheme is empty, the redirect port MUST be the Gateway
             *   Listener port.
             *
             * Implementations SHOULD NOT add the port number in the 'Location'
             * header in the following cases:
             *
             * * A Location header that will use HTTP (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 80.
             * * A Location header that will use HTTPS (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 443.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in
             * the response. When empty, the scheme of the request is used.
             *
             * Scheme redirects can affect the port of the redirect, for more information,
             * refer to the documentation for the port field of this filter.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Extended
             */
            scheme?: pulumi.Input<string>;
            /**
             * StatusCode is the HTTP status code to be used in response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Core
             */
            statusCode?: pulumi.Input<number>;
        }
        /**
         * Path defines parameters used to modify the path of the incoming request.
         * The modified path is then used to construct the `Location` header. When
         * empty, the request path is used as-is.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPath {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Path defines parameters used to modify the path of the incoming request.
         * The modified path is then used to construct the `Location` header. When
         * empty, the request path is used as-is.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPathPatch {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * URLRewrite defines a schema for a filter that modifies a request during forwarding.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersUrlRewrite {
            /**
             * Hostname is the value to be used to replace the Host header value during
             * forwarding.
             *
             * Support: Extended
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePath>;
        }
        /**
         * URLRewrite defines a schema for a filter that modifies a request during forwarding.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePatch {
            /**
             * Hostname is the value to be used to replace the Host header value during
             * forwarding.
             *
             * Support: Extended
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePathPatch>;
        }
        /**
         * Path defines a path rewrite.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePath {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Path defines a path rewrite.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePathPatch {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * HTTPBackendRef defines how a HTTPRoute forwards a HTTP request.
         *
         * Note that when a namespace different than the local namespace is specified, a
         * ReferenceGrant object is required in the referent namespace to allow that
         * namespace's owner to accept the reference. See the ReferenceGrant
         * documentation for details.
         *
         * <gateway:experimental:description>
         *
         * When the BackendRef points to a Kubernetes Service, implementations SHOULD
         * honor the appProtocol field if it is set for the target Service Port.
         *
         * Implementations supporting appProtocol SHOULD recognize the Kubernetes
         * Standard Application Protocols defined in KEP-3726.
         *
         * If a Service appProtocol isn't specified, an implementation MAY infer the
         * backend protocol through its own means. Implementations MAY infer the
         * protocol from the Route type referring to the backend Service.
         *
         * If a Route is not able to send traffic to the backend using the specified
         * protocol then the backend is considered invalid. Implementations MUST set the
         * "ResolvedRefs" condition to "False" with the "UnsupportedProtocol" reason.
         *
         * </gateway:experimental:description>
         */
        interface HTTPRouteSpecRulesBackendRefsPatch {
            /**
             * Filters defined at this level should be executed if and only if the
             * request is being forwarded to the backend defined here.
             *
             * Support: Implementation-specific (For broader support of filters, use the
             * Filters field in HTTPRouteRule.)
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsFiltersPatch>[]>;
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
            /**
             * Weight specifies the proportion of requests forwarded to the referenced
             * backend. This is computed as weight/(sum of all weights in this
             * BackendRefs list). For non-zero values, there may be some epsilon from
             * the exact proportion defined here depending on the precision an
             * implementation supports. Weight is not a percentage and the sum of
             * weights does not need to equal 100.
             *
             * If only one backend is specified and it has a weight greater than 0, 100%
             * of the traffic is forwarded to that backend. If weight is set to 0, no
             * traffic should be forwarded for this entry. If unspecified, weight
             * defaults to 1.
             *
             * Support for this field varies based on the context where used.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * HTTPRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. HTTPRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface HTTPRouteSpecRulesFilters {
            extensionRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersExtensionRef>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestHeaderModifier>;
            requestMirror?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestMirror>;
            requestRedirect?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestRedirect>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersResponseHeaderModifier>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations must support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by
             *   specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` should be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
            urlRewrite?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersUrlRewrite>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * This filter can be used multiple times within the same rule.
         *
         * Support: Implementation-specific
         */
        interface HTTPRouteSpecRulesFiltersExtensionRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * This filter can be used multiple times within the same rule.
         *
         * Support: Implementation-specific
         */
        interface HTTPRouteSpecRulesFiltersExtensionRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. HTTPRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface HTTPRouteSpecRulesFiltersPatch {
            extensionRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersExtensionRefPatch>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestHeaderModifierPatch>;
            requestMirror?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestMirrorPatch>;
            requestRedirect?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestRedirectPatch>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersResponseHeaderModifierPatch>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations must support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by
             *   specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` should be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
            urlRewrite?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersUrlRewritePatch>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersRequestMirror {
            backendRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestMirrorBackendRef>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface HTTPRouteSpecRulesFiltersRequestMirrorBackendRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface HTTPRouteSpecRulesFiltersRequestMirrorBackendRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersRequestMirrorPatch {
            backendRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestMirrorBackendRefPatch>;
        }
        /**
         * RequestRedirect defines a schema for a filter that responds to the
         * request with an HTTP redirection.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesFiltersRequestRedirect {
            /**
             * Hostname is the hostname to be used in the value of the `Location`
             * header in the response.
             * When empty, the hostname in the `Host` header of the request is used.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestRedirectPath>;
            /**
             * Port is the port to be used in the value of the `Location`
             * header in the response.
             *
             * If no port is specified, the redirect port MUST be derived using the
             * following rules:
             *
             * * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *   port associated with the redirect scheme. Specifically "http" to port 80
             *   and "https" to port 443. If the redirect scheme does not have a
             *   well-known port, the listener port of the Gateway SHOULD be used.
             * * If redirect scheme is empty, the redirect port MUST be the Gateway
             *   Listener port.
             *
             * Implementations SHOULD NOT add the port number in the 'Location'
             * header in the following cases:
             *
             * * A Location header that will use HTTP (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 80.
             * * A Location header that will use HTTPS (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 443.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in
             * the response. When empty, the scheme of the request is used.
             *
             * Scheme redirects can affect the port of the redirect, for more information,
             * refer to the documentation for the port field of this filter.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Extended
             */
            scheme?: pulumi.Input<string>;
            /**
             * StatusCode is the HTTP status code to be used in response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Core
             */
            statusCode?: pulumi.Input<number>;
        }
        /**
         * RequestRedirect defines a schema for a filter that responds to the
         * request with an HTTP redirection.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesFiltersRequestRedirectPatch {
            /**
             * Hostname is the hostname to be used in the value of the `Location`
             * header in the response.
             * When empty, the hostname in the `Host` header of the request is used.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersRequestRedirectPathPatch>;
            /**
             * Port is the port to be used in the value of the `Location`
             * header in the response.
             *
             * If no port is specified, the redirect port MUST be derived using the
             * following rules:
             *
             * * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *   port associated with the redirect scheme. Specifically "http" to port 80
             *   and "https" to port 443. If the redirect scheme does not have a
             *   well-known port, the listener port of the Gateway SHOULD be used.
             * * If redirect scheme is empty, the redirect port MUST be the Gateway
             *   Listener port.
             *
             * Implementations SHOULD NOT add the port number in the 'Location'
             * header in the following cases:
             *
             * * A Location header that will use HTTP (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 80.
             * * A Location header that will use HTTPS (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 443.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in
             * the response. When empty, the scheme of the request is used.
             *
             * Scheme redirects can affect the port of the redirect, for more information,
             * refer to the documentation for the port field of this filter.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Extended
             */
            scheme?: pulumi.Input<string>;
            /**
             * StatusCode is the HTTP status code to be used in response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Core
             */
            statusCode?: pulumi.Input<number>;
        }
        /**
         * Path defines parameters used to modify the path of the incoming request.
         * The modified path is then used to construct the `Location` header. When
         * empty, the request path is used as-is.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersRequestRedirectPath {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Path defines parameters used to modify the path of the incoming request.
         * The modified path is then used to construct the `Location` header. When
         * empty, the request path is used as-is.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersRequestRedirectPathPatch {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersResponseHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersResponseHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersResponseHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersResponseHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * URLRewrite defines a schema for a filter that modifies a request during forwarding.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersUrlRewrite {
            /**
             * Hostname is the value to be used to replace the Host header value during
             * forwarding.
             *
             * Support: Extended
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersUrlRewritePath>;
        }
        /**
         * URLRewrite defines a schema for a filter that modifies a request during forwarding.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersUrlRewritePatch {
            /**
             * Hostname is the value to be used to replace the Host header value during
             * forwarding.
             *
             * Support: Extended
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersUrlRewritePathPatch>;
        }
        /**
         * Path defines a path rewrite.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersUrlRewritePath {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Path defines a path rewrite.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersUrlRewritePathPatch {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteMatch defines the predicate used to match requests to a given
         * action. Multiple match types are ANDed together, i.e. the match will
         * evaluate to true only if all conditions are satisfied.
         *
         * For example, the match below will match a HTTP request only if its path
         * starts with `/foo` AND it contains the `version: v1` header:
         *
         * ```
         * match:
         *
         * 	path:
         * 	  value: "/foo"
         * 	headers:
         * 	- name: "version"
         * 	  value "v1"
         *
         * ```
         */
        interface HTTPRouteSpecRulesMatches {
            /**
             * Headers specifies HTTP request header matchers. Multiple match values are
             * ANDed together, meaning, a request must match all the specified headers
             * to select the route.
             */
            headers?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesMatchesHeaders>[]>;
            /**
             * Method specifies HTTP method matcher.
             * When specified, this route will be matched only if the request has the
             * specified method.
             *
             * Support: Extended
             */
            method?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesMatchesPath>;
            /**
             * QueryParams specifies HTTP query parameter matchers. Multiple match
             * values are ANDed together, meaning, a request must match all the
             * specified query parameters to select the route.
             *
             * Support: Extended
             */
            queryParams?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesMatchesQueryParams>[]>;
        }
        /**
         * HTTPHeaderMatch describes how to select a HTTP route by matching HTTP request
         * headers.
         */
        interface HTTPRouteSpecRulesMatchesHeaders {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             *
             * When a header is repeated in an HTTP request, it is
             * implementation-specific behavior as to how this is represented.
             * Generally, proxies should follow the guidance from the RFC:
             * https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding
             * processing a repeated header, with special handling for "Set-Cookie".
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the header.
             *
             * Support: Core (Exact)
             *
             * Support: Implementation-specific (RegularExpression)
             *
             * Since RegularExpression HeaderMatchType has implementation-specific
             * conformance, implementations can support POSIX, PCRE or any other dialects
             * of regular expressions. Please read the implementation's documentation to
             * determine the supported dialect.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeaderMatch describes how to select a HTTP route by matching HTTP request
         * headers.
         */
        interface HTTPRouteSpecRulesMatchesHeadersPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             *
             * When a header is repeated in an HTTP request, it is
             * implementation-specific behavior as to how this is represented.
             * Generally, proxies should follow the guidance from the RFC:
             * https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding
             * processing a repeated header, with special handling for "Set-Cookie".
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the header.
             *
             * Support: Core (Exact)
             *
             * Support: Implementation-specific (RegularExpression)
             *
             * Since RegularExpression HeaderMatchType has implementation-specific
             * conformance, implementations can support POSIX, PCRE or any other dialects
             * of regular expressions. Please read the implementation's documentation to
             * determine the supported dialect.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteMatch defines the predicate used to match requests to a given
         * action. Multiple match types are ANDed together, i.e. the match will
         * evaluate to true only if all conditions are satisfied.
         *
         * For example, the match below will match a HTTP request only if its path
         * starts with `/foo` AND it contains the `version: v1` header:
         *
         * ```
         * match:
         *
         * 	path:
         * 	  value: "/foo"
         * 	headers:
         * 	- name: "version"
         * 	  value "v1"
         *
         * ```
         */
        interface HTTPRouteSpecRulesMatchesPatch {
            /**
             * Headers specifies HTTP request header matchers. Multiple match values are
             * ANDed together, meaning, a request must match all the specified headers
             * to select the route.
             */
            headers?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesMatchesHeadersPatch>[]>;
            /**
             * Method specifies HTTP method matcher.
             * When specified, this route will be matched only if the request has the
             * specified method.
             *
             * Support: Extended
             */
            method?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesMatchesPathPatch>;
            /**
             * QueryParams specifies HTTP query parameter matchers. Multiple match
             * values are ANDed together, meaning, a request must match all the
             * specified query parameters to select the route.
             *
             * Support: Extended
             */
            queryParams?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesMatchesQueryParamsPatch>[]>;
        }
        /**
         * Path specifies a HTTP request path matcher. If this field is not
         * specified, a default prefix match on the "/" path is provided.
         */
        interface HTTPRouteSpecRulesMatchesPath {
            /**
             * Type specifies how to match against the path Value.
             *
             * Support: Core (Exact, PathPrefix)
             *
             * Support: Implementation-specific (RegularExpression)
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the HTTP path to match against.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Path specifies a HTTP request path matcher. If this field is not
         * specified, a default prefix match on the "/" path is provided.
         */
        interface HTTPRouteSpecRulesMatchesPathPatch {
            /**
             * Type specifies how to match against the path Value.
             *
             * Support: Core (Exact, PathPrefix)
             *
             * Support: Implementation-specific (RegularExpression)
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the HTTP path to match against.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPQueryParamMatch describes how to select a HTTP route by matching HTTP
         * query parameters.
         */
        interface HTTPRouteSpecRulesMatchesQueryParams {
            /**
             * Name is the name of the HTTP query param to be matched. This must be an
             * exact string match. (See
             * https://tools.ietf.org/html/rfc7230#section-2.7.3).
             *
             * If multiple entries specify equivalent query param names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent query param name MUST be ignored.
             *
             * If a query param is repeated in an HTTP request, the behavior is
             * purposely left undefined, since different data planes have different
             * capabilities. However, it is *recommended* that implementations should
             * match against the first value of the param if the data plane supports it,
             * as this behavior is expected in other load balancing contexts outside of
             * the Gateway API.
             *
             * Users SHOULD NOT route traffic based on repeated query params to guard
             * themselves against potential differences in the implementations.
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the query parameter.
             *
             * Support: Extended (Exact)
             *
             * Support: Implementation-specific (RegularExpression)
             *
             * Since RegularExpression QueryParamMatchType has Implementation-specific
             * conformance, implementations can support POSIX, PCRE or any other
             * dialects of regular expressions. Please read the implementation's
             * documentation to determine the supported dialect.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP query param to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPQueryParamMatch describes how to select a HTTP route by matching HTTP
         * query parameters.
         */
        interface HTTPRouteSpecRulesMatchesQueryParamsPatch {
            /**
             * Name is the name of the HTTP query param to be matched. This must be an
             * exact string match. (See
             * https://tools.ietf.org/html/rfc7230#section-2.7.3).
             *
             * If multiple entries specify equivalent query param names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent query param name MUST be ignored.
             *
             * If a query param is repeated in an HTTP request, the behavior is
             * purposely left undefined, since different data planes have different
             * capabilities. However, it is *recommended* that implementations should
             * match against the first value of the param if the data plane supports it,
             * as this behavior is expected in other load balancing contexts outside of
             * the Gateway API.
             *
             * Users SHOULD NOT route traffic based on repeated query params to guard
             * themselves against potential differences in the implementations.
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the query parameter.
             *
             * Support: Extended (Exact)
             *
             * Support: Implementation-specific (RegularExpression)
             *
             * Since RegularExpression QueryParamMatchType has Implementation-specific
             * conformance, implementations can support POSIX, PCRE or any other
             * dialects of regular expressions. Please read the implementation's
             * documentation to determine the supported dialect.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP query param to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteRule defines semantics for matching an HTTP request based on
         * conditions (matches), processing it (filters), and forwarding the request to
         * an API object (backendRefs).
         */
        interface HTTPRouteSpecRulesPatch {
            /**
             * BackendRefs defines the backend(s) where matching requests should be
             * sent.
             *
             * Failure behavior here depends on how many BackendRefs are specified and
             * how many are invalid.
             *
             * If *all* entries in BackendRefs are invalid, and there are also no filters
             * specified in this route rule, *all* traffic which matches this rule MUST
             * receive a 500 status code.
             *
             * See the HTTPBackendRef definition for the rules about what makes a single
             * HTTPBackendRef invalid.
             *
             * When a HTTPBackendRef is invalid, 500 status codes MUST be returned for
             * requests that would have otherwise been routed to an invalid backend. If
             * multiple backends are specified, and some are invalid, the proportion of
             * requests that would otherwise have been routed to an invalid backend
             * MUST receive a 500 status code.
             *
             * For example, if two backends are specified with equal weights, and one is
             * invalid, 50 percent of traffic must receive a 500. Implementations may
             * choose how that 50 percent is determined.
             *
             * When a HTTPBackendRef refers to a Service that has no ready endpoints,
             * implementations SHOULD return a 503 for requests to that backend instead.
             * If an implementation chooses to do this, all of the above rules for 500 responses
             * MUST also apply for responses that return a 503.
             *
             * Support: Core for Kubernetes Service
             *
             * Support: Extended for Kubernetes ServiceImport
             *
             * Support: Implementation-specific for any other resource
             *
             * Support for weight: Core
             */
            backendRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesBackendRefsPatch>[]>;
            /**
             * Filters define the filters that are applied to requests that match
             * this rule.
             *
             * Wherever possible, implementations SHOULD implement filters in the order
             * they are specified.
             *
             * Implementations MAY choose to implement this ordering strictly, rejecting
             * any combination or order of filters that can not be supported. If implementations
             * choose a strict interpretation of filter ordering, they MUST clearly document
             * that behavior.
             *
             * To reject an invalid combination or order of filters, implementations SHOULD
             * consider the Route Rules with this configuration invalid. If all Route Rules
             * in a Route are invalid, the entire Route would be considered invalid. If only
             * a portion of Route Rules are invalid, implementations MUST set the
             * "PartiallyInvalid" condition for the Route.
             *
             * Conformance-levels at this level are defined based on the type of filter:
             *
             * - ALL core filters MUST be supported by all implementations.
             * - Implementers are encouraged to support extended filters.
             * - Implementation-specific custom filters have no API guarantees across
             *   implementations.
             *
             * Specifying the same filter multiple times is not supported unless explicitly
             * indicated in the filter.
             *
             * All filters are expected to be compatible with each other except for the
             * URLRewrite and RequestRedirect filters, which may not be combined. If an
             * implementation can not support other combinations of filters, they must clearly
             * document that limitation. In cases where incompatible or unsupported
             * filters are specified and cause the `Accepted` condition to be set to status
             * `False`, implementations may use the `IncompatibleFilters` reason to specify
             * this configuration error.
             *
             * Support: Core
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesFiltersPatch>[]>;
            /**
             * Matches define conditions used for matching the rule against incoming
             * HTTP requests. Each match is independent, i.e. this rule will be matched
             * if **any** one of the matches is satisfied.
             *
             * For example, take the following matches configuration:
             *
             * ```
             * matches:
             * - path:
             *     value: "/foo"
             *   headers:
             *   - name: "version"
             *     value: "v2"
             * - path:
             *     value: "/v2/foo"
             * ```
             *
             * For a request to match against this rule, a request must satisfy
             * EITHER of the two conditions:
             *
             * - path prefixed with `/foo` AND contains the header `version: v2`
             * - path prefix of `/v2/foo`
             *
             * See the documentation for HTTPRouteMatch on how to specify multiple
             * match conditions that should be ANDed together.
             *
             * If no matches are specified, the default is a prefix
             * path match on "/", which has the effect of matching every
             * HTTP request.
             *
             * Proxy or Load Balancer routing configuration generated from HTTPRoutes
             * MUST prioritize matches based on the following criteria, continuing on
             * ties. Across all rules specified on applicable Routes, precedence must be
             * given to the match having:
             *
             * * "Exact" path match.
             * * "Prefix" path match with largest number of characters.
             * * Method match.
             * * Largest number of header matches.
             * * Largest number of query param matches.
             *
             * Note: The precedence of RegularExpression path matches are implementation-specific.
             *
             * If ties still exist across multiple Routes, matching precedence MUST be
             * determined in order of the following criteria, continuing on ties:
             *
             * * The oldest Route based on creation timestamp.
             * * The Route appearing first in alphabetical order by
             *   "{namespace}/{name}".
             *
             * If ties still exist within an HTTPRoute, matching precedence MUST be granted
             * to the FIRST matching rule (in list order) with a match meeting the above
             * criteria.
             *
             * When no rules matching a request have been successfully attached to the
             * parent a request is coming from, a HTTP 404 status code MUST be returned.
             */
            matches?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesMatchesPatch>[]>;
            timeouts?: pulumi.Input<inputs.gateway.v1.HTTPRouteSpecRulesTimeoutsPatch>;
        }
        /**
         * Timeouts defines the timeouts that can be configured for an HTTP request.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesTimeouts {
            /**
             * BackendRequest specifies a timeout for an individual request from the gateway
             * to a backend. This covers the time from when the request first starts being
             * sent from the gateway to when the full response has been received from the backend.
             *
             * Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             * completely. Implementations that cannot completely disable the timeout MUST
             * instead interpret the zero duration as the longest possible value to which
             * the timeout can be set.
             *
             * An entire client HTTP transaction with a gateway, covered by the Request timeout,
             * may result in more than one call from the gateway to the destination backend,
             * for example, if automatic retries are supported.
             *
             * The value of BackendRequest must be a Gateway API Duration string as defined by
             * GEP-2257.  When this field is unspecified, its behavior is implementation-specific;
             * when specified, the value of BackendRequest must be no more than the value of the
             * Request timeout (since the Request timeout encompasses the BackendRequest timeout).
             *
             * Support: Extended
             */
            backendRequest?: pulumi.Input<string>;
            /**
             * Request specifies the maximum duration for a gateway to respond to an HTTP request.
             * If the gateway has not been able to respond before this deadline is met, the gateway
             * MUST return a timeout error.
             *
             * For example, setting the `rules.timeouts.request` field to the value `10s` in an
             * `HTTPRoute` will cause a timeout if a client request is taking longer than 10 seconds
             * to complete.
             *
             * Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             * completely. Implementations that cannot completely disable the timeout MUST
             * instead interpret the zero duration as the longest possible value to which
             * the timeout can be set.
             *
             * This timeout is intended to cover as close to the whole request-response transaction
             * as possible although an implementation MAY choose to start the timeout after the entire
             * request stream has been received instead of immediately after the transaction is
             * initiated by the client.
             *
             * The value of Request is a Gateway API Duration string as defined by GEP-2257. When this
             * field is unspecified, request timeout behavior is implementation-specific.
             *
             * Support: Extended
             */
            request?: pulumi.Input<string>;
        }
        /**
         * Timeouts defines the timeouts that can be configured for an HTTP request.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesTimeoutsPatch {
            /**
             * BackendRequest specifies a timeout for an individual request from the gateway
             * to a backend. This covers the time from when the request first starts being
             * sent from the gateway to when the full response has been received from the backend.
             *
             * Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             * completely. Implementations that cannot completely disable the timeout MUST
             * instead interpret the zero duration as the longest possible value to which
             * the timeout can be set.
             *
             * An entire client HTTP transaction with a gateway, covered by the Request timeout,
             * may result in more than one call from the gateway to the destination backend,
             * for example, if automatic retries are supported.
             *
             * The value of BackendRequest must be a Gateway API Duration string as defined by
             * GEP-2257.  When this field is unspecified, its behavior is implementation-specific;
             * when specified, the value of BackendRequest must be no more than the value of the
             * Request timeout (since the Request timeout encompasses the BackendRequest timeout).
             *
             * Support: Extended
             */
            backendRequest?: pulumi.Input<string>;
            /**
             * Request specifies the maximum duration for a gateway to respond to an HTTP request.
             * If the gateway has not been able to respond before this deadline is met, the gateway
             * MUST return a timeout error.
             *
             * For example, setting the `rules.timeouts.request` field to the value `10s` in an
             * `HTTPRoute` will cause a timeout if a client request is taking longer than 10 seconds
             * to complete.
             *
             * Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             * completely. Implementations that cannot completely disable the timeout MUST
             * instead interpret the zero duration as the longest possible value to which
             * the timeout can be set.
             *
             * This timeout is intended to cover as close to the whole request-response transaction
             * as possible although an implementation MAY choose to start the timeout after the entire
             * request stream has been received instead of immediately after the transaction is
             * initiated by the client.
             *
             * The value of Request is a Gateway API Duration string as defined by GEP-2257. When this
             * field is unspecified, request timeout behavior is implementation-specific.
             *
             * Support: Extended
             */
            request?: pulumi.Input<string>;
        }
        /**
         * Status defines the current state of HTTPRoute.
         */
        interface HTTPRouteStatus {
            /**
             * Parents is a list of parent resources (usually Gateways) that are
             * associated with the route, and the status of the route with respect to
             * each parent. When this route attaches to a parent, the controller that
             * manages the parent must add an entry to this list when the controller
             * first sees the route and should update the entry as appropriate when the
             * route or gateway is modified.
             *
             * Note that parent references that cannot be resolved by an implementation
             * of this API will not be added to this list. Implementations of this API
             * can only populate Route status for the Gateways/parent resources they are
             * responsible for.
             *
             * A maximum of 32 Gateways will be represented in this list. An empty list
             * means the route has not been attached to any Gateway.
             */
            parents?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteStatusParents>[]>;
        }
        /**
         * RouteParentStatus describes the status of a route with respect to an
         * associated Parent.
         */
        interface HTTPRouteStatusParents {
            /**
             * Conditions describes the status of the route with respect to the Gateway.
             * Note that the route's availability is also subject to the Gateway's own
             * status conditions and listener status.
             *
             * If the Route's ParentRef specifies an existing Gateway that supports
             * Routes of this kind AND that Gateway's controller has sufficient access,
             * then that Gateway's controller MUST set the "Accepted" condition on the
             * Route, to indicate whether the route has been accepted or rejected by the
             * Gateway, and why.
             *
             * A Route MUST be considered "Accepted" if at least one of the Route's
             * rules is implemented by the Gateway.
             *
             * There are a number of cases where the "Accepted" condition may not be set
             * due to lack of controller visibility, that includes when:
             *
             * * The Route refers to a non-existent parent.
             * * The Route is of a type that the controller does not support.
             * * The Route is in a namespace the controller does not have access to.
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1.HTTPRouteStatusParentsConditions>[]>;
            /**
             * ControllerName is a domain/path string that indicates the name of the
             * controller that wrote this status. This corresponds with the
             * controllerName field on GatewayClass.
             *
             * Example: "example.net/gateway-controller".
             *
             * The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are
             * valid Kubernetes names
             * (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
             *
             * Controllers MUST populate this field when writing status. Controllers should ensure that
             * entries to status populated with their ControllerName are cleaned up when they are no
             * longer necessary.
             */
            controllerName?: pulumi.Input<string>;
            parentRef?: pulumi.Input<inputs.gateway.v1.HTTPRouteStatusParentsParentRef>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface HTTPRouteStatusParentsConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ParentRef corresponds with a ParentRef in the spec that this
         * RouteParentStatus struct describes the status of.
         */
        interface HTTPRouteStatusParentsParentRef {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
    }
    namespace v1beta1 {
        /**
         * Gateway represents an instance of a service-traffic handling infrastructure
         * by binding Listeners to a set of IP addresses.
         */
        interface Gateway {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Gateway">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpec>;
            status?: pulumi.Input<inputs.gateway.v1beta1.GatewayStatus>;
        }
        /**
         * GatewayClass describes a class of Gateways available to the user for creating
         * Gateway resources.
         *
         * It is recommended that this resource be used as a template for Gateways. This
         * means that a Gateway is based on the state of the GatewayClass at the time it
         * was created and changes to the GatewayClass or associated parameters are not
         * propagated down to existing Gateways. This recommendation is intended to
         * limit the blast radius of changes to GatewayClass or associated parameters.
         * If implementations choose to propagate GatewayClass changes to existing
         * Gateways, that MUST be clearly documented by the implementation.
         *
         * Whenever one or more Gateways are using a GatewayClass, implementations SHOULD
         * add the `gateway-exists-finalizer.gateway.networking.k8s.io` finalizer on the
         * associated GatewayClass. This ensures that a GatewayClass associated with a
         * Gateway is not deleted while in use.
         *
         * GatewayClass is a Cluster level resource.
         */
        interface GatewayClass {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"GatewayClass">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.gateway.v1beta1.GatewayClassSpec>;
            status?: pulumi.Input<inputs.gateway.v1beta1.GatewayClassStatus>;
        }
        /**
         * Spec defines the desired state of GatewayClass.
         */
        interface GatewayClassSpec {
            /**
             * ControllerName is the name of the controller that is managing Gateways of
             * this class. The value of this field MUST be a domain prefixed path.
             *
             * Example: "example.net/gateway-controller".
             *
             * This field is not mutable and cannot be empty.
             *
             * Support: Core
             */
            controllerName?: pulumi.Input<string>;
            /**
             * Description helps describe a GatewayClass with more details.
             */
            description?: pulumi.Input<string>;
            parametersRef?: pulumi.Input<inputs.gateway.v1beta1.GatewayClassSpecParametersRef>;
        }
        /**
         * ParametersRef is a reference to a resource that contains the configuration
         * parameters corresponding to the GatewayClass. This is optional if the
         * controller does not require any additional configuration.
         *
         * ParametersRef can reference a standard Kubernetes resource, i.e. ConfigMap,
         * or an implementation-specific custom resource. The resource can be
         * cluster-scoped or namespace-scoped.
         *
         * If the referent cannot be found, refers to an unsupported kind, or when
         * the data within that resource is malformed, the GatewayClass SHOULD be
         * rejected with the "Accepted" status condition set to "False" and an
         * "InvalidParameters" reason.
         *
         * A Gateway for this GatewayClass may provide its own `parametersRef`. When both are specified,
         * the merging behavior is implementation specific.
         * It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         * Support: Implementation-specific
         */
        interface GatewayClassSpecParametersRef {
            /**
             * Group is the group of the referent.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent.
             * This field is required when referring to a Namespace-scoped resource and
             * MUST be unset when referring to a Cluster-scoped resource.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * ParametersRef is a reference to a resource that contains the configuration
         * parameters corresponding to the GatewayClass. This is optional if the
         * controller does not require any additional configuration.
         *
         * ParametersRef can reference a standard Kubernetes resource, i.e. ConfigMap,
         * or an implementation-specific custom resource. The resource can be
         * cluster-scoped or namespace-scoped.
         *
         * If the referent cannot be found, refers to an unsupported kind, or when
         * the data within that resource is malformed, the GatewayClass SHOULD be
         * rejected with the "Accepted" status condition set to "False" and an
         * "InvalidParameters" reason.
         *
         * A Gateway for this GatewayClass may provide its own `parametersRef`. When both are specified,
         * the merging behavior is implementation specific.
         * It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         * Support: Implementation-specific
         */
        interface GatewayClassSpecParametersRefPatch {
            /**
             * Group is the group of the referent.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent.
             * This field is required when referring to a Namespace-scoped resource and
             * MUST be unset when referring to a Cluster-scoped resource.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Spec defines the desired state of GatewayClass.
         */
        interface GatewayClassSpecPatch {
            /**
             * ControllerName is the name of the controller that is managing Gateways of
             * this class. The value of this field MUST be a domain prefixed path.
             *
             * Example: "example.net/gateway-controller".
             *
             * This field is not mutable and cannot be empty.
             *
             * Support: Core
             */
            controllerName?: pulumi.Input<string>;
            /**
             * Description helps describe a GatewayClass with more details.
             */
            description?: pulumi.Input<string>;
            parametersRef?: pulumi.Input<inputs.gateway.v1beta1.GatewayClassSpecParametersRefPatch>;
        }
        /**
         * Status defines the current state of GatewayClass.
         *
         * Implementations MUST populate status on all GatewayClass resources which
         * specify their controller name.
         */
        interface GatewayClassStatus {
            /**
             * Conditions is the current status from the controller for
             * this GatewayClass.
             *
             * Controllers should prefer to publish conditions using values
             * of GatewayClassConditionType for the type of each Condition.
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewayClassStatusConditions>[]>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface GatewayClassStatusConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Spec defines the desired state of Gateway.
         */
        interface GatewaySpec {
            /**
             * Addresses requested for this Gateway. This is optional and behavior can
             * depend on the implementation. If a value is set in the spec and the
             * requested address is invalid or unavailable, the implementation MUST
             * indicate this in the associated entry in GatewayStatus.Addresses.
             *
             * The Addresses field represents a request for the address(es) on the
             * "outside of the Gateway", that traffic bound for this Gateway will use.
             * This could be the IP address or hostname of an external load balancer or
             * other networking infrastructure, or some other address that traffic will
             * be sent to.
             *
             * If no Addresses are specified, the implementation MAY schedule the
             * Gateway in an implementation-specific manner, assigning an appropriate
             * set of Addresses.
             *
             * The implementation MUST bind all Listeners to every GatewayAddress that
             * it assigns to the Gateway and add a corresponding entry in
             * GatewayStatus.Addresses.
             *
             * Support: Extended
             */
            addresses?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecAddresses>[]>;
            /**
             * GatewayClassName used for this Gateway. This is the name of a
             * GatewayClass resource.
             */
            gatewayClassName?: pulumi.Input<string>;
            infrastructure?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecInfrastructure>;
            /**
             * Listeners associated with this Gateway. Listeners define
             * logical endpoints that are bound on this Gateway's addresses.
             * At least one Listener MUST be specified.
             *
             * Each Listener in a set of Listeners (for example, in a single Gateway)
             * MUST be _distinct_, in that a traffic flow MUST be able to be assigned to
             * exactly one listener. (This section uses "set of Listeners" rather than
             * "Listeners in a single Gateway" because implementations MAY merge configuration
             * from multiple Gateways onto a single data plane, and these rules _also_
             * apply in that case).
             *
             * Practically, this means that each listener in a set MUST have a unique
             * combination of Port, Protocol, and, if supported by the protocol, Hostname.
             *
             * Some combinations of port, protocol, and TLS settings are considered
             * Core support and MUST be supported by implementations based on their
             * targeted conformance profile:
             *
             * HTTP Profile
             *
             * 1. HTTPRoute, Port: 80, Protocol: HTTP
             * 2. HTTPRoute, Port: 443, Protocol: HTTPS, TLS Mode: Terminate, TLS keypair provided
             *
             * TLS Profile
             *
             * 1. TLSRoute, Port: 443, Protocol: TLS, TLS Mode: Passthrough
             *
             * "Distinct" Listeners have the following property:
             *
             * The implementation can match inbound requests to a single distinct
             * Listener. When multiple Listeners share values for fields (for
             * example, two Listeners with the same Port value), the implementation
             * can match requests to only one of the Listeners using other
             * Listener fields.
             *
             * For example, the following Listener scenarios are distinct:
             *
             * 1. Multiple Listeners with the same Port that all use the "HTTP"
             *    Protocol that all have unique Hostname values.
             * 2. Multiple Listeners with the same Port that use either the "HTTPS" or
             *    "TLS" Protocol that all have unique Hostname values.
             * 3. A mixture of "TCP" and "UDP" Protocol Listeners, where no Listener
             *    with the same Protocol has the same Port value.
             *
             * Some fields in the Listener struct have possible values that affect
             * whether the Listener is distinct. Hostname is particularly relevant
             * for HTTP or HTTPS protocols.
             *
             * When using the Hostname value to select between same-Port, same-Protocol
             * Listeners, the Hostname value must be different on each Listener for the
             * Listener to be distinct.
             *
             * When the Listeners are distinct based on Hostname, inbound request
             * hostnames MUST match from the most specific to least specific Hostname
             * values to choose the correct Listener and its associated set of Routes.
             *
             * Exact matches must be processed before wildcard matches, and wildcard
             * matches must be processed before fallback (empty Hostname value)
             * matches. For example, `"foo.example.com"` takes precedence over
             * `"*.example.com"`, and `"*.example.com"` takes precedence over `""`.
             *
             * Additionally, if there are multiple wildcard entries, more specific
             * wildcard entries must be processed before less specific wildcard entries.
             * For example, `"*.foo.example.com"` takes precedence over `"*.example.com"`.
             * The precise definition here is that the higher the number of dots in the
             * hostname to the right of the wildcard character, the higher the precedence.
             *
             * The wildcard character will match any number of characters _and dots_ to
             * the left, however, so `"*.example.com"` will match both
             * `"foo.bar.example.com"` _and_ `"bar.example.com"`.
             *
             * If a set of Listeners contains Listeners that are not distinct, then those
             * Listeners are Conflicted, and the implementation MUST set the "Conflicted"
             * condition in the Listener Status to "True".
             *
             * Implementations MAY choose to accept a Gateway with some Conflicted
             * Listeners only if they only accept the partial Listener set that contains
             * no Conflicted Listeners. To put this another way, implementations may
             * accept a partial Listener set only if they throw out *all* the conflicting
             * Listeners. No picking one of the conflicting listeners as the winner.
             * This also means that the Gateway must have at least one non-conflicting
             * Listener in this case, otherwise it violates the requirement that at
             * least one Listener must be present.
             *
             * The implementation MUST set a "ListenersNotValid" condition on the
             * Gateway Status when the Gateway contains Conflicted Listeners whether or
             * not they accept the Gateway. That Condition SHOULD clearly
             * indicate in the Message which Listeners are conflicted, and which are
             * Accepted. Additionally, the Listener status for those listeners SHOULD
             * indicate which Listeners are conflicted and not Accepted.
             *
             * A Gateway's Listeners are considered "compatible" if:
             *
             * 1. They are distinct.
             * 2. The implementation can serve them in compliance with the Addresses
             *    requirement that all Listeners are available on all assigned
             *    addresses.
             *
             * Compatible combinations in Extended support are expected to vary across
             * implementations. A combination that is compatible for one implementation
             * may not be compatible for another.
             *
             * For example, an implementation that cannot serve both TCP and UDP listeners
             * on the same address, or cannot mix HTTPS and generic TLS listens on the same port
             * would not consider those cases compatible, even though they are distinct.
             *
             * Note that requests SHOULD match at most one Listener. For example, if
             * Listeners are defined for "foo.example.com" and "*.example.com", a
             * request to "foo.example.com" SHOULD only be routed using routes attached
             * to the "foo.example.com" Listener (and not the "*.example.com" Listener).
             * This concept is known as "Listener Isolation". Implementations that do
             * not support Listener Isolation MUST clearly document this.
             *
             * Implementations MAY merge separate Gateways onto a single set of
             * Addresses if all Listeners across all Gateways are compatible.
             *
             * Support: Core
             */
            listeners?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListeners>[]>;
        }
        /**
         * GatewayAddress describes an address that can be bound to a Gateway.
         */
        interface GatewaySpecAddresses {
            /**
             * Type of the address.
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the address. The validity of the values will depend
             * on the type and support by the controller.
             *
             * Examples: `1.2.3.4`, `128::1`, `my-ip-address`.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * GatewayAddress describes an address that can be bound to a Gateway.
         */
        interface GatewaySpecAddressesPatch {
            /**
             * Type of the address.
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the address. The validity of the values will depend
             * on the type and support by the controller.
             *
             * Examples: `1.2.3.4`, `128::1`, `my-ip-address`.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Infrastructure defines infrastructure level attributes about this Gateway instance.
         *
         * Support: Extended
         */
        interface GatewaySpecInfrastructure {
            /**
             * Annotations that SHOULD be applied to any resources created in response to this Gateway.
             *
             * For implementations creating other Kubernetes objects, this should be the `metadata.annotations` field on resources.
             * For other implementations, this refers to any relevant (implementation specific) "annotations" concepts.
             *
             * An implementation may chose to add additional implementation-specific annotations as they see fit.
             *
             * Support: Extended
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Labels that SHOULD be applied to any resources created in response to this Gateway.
             *
             * For implementations creating other Kubernetes objects, this should be the `metadata.labels` field on resources.
             * For other implementations, this refers to any relevant (implementation specific) "labels" concepts.
             *
             * An implementation may chose to add additional implementation-specific labels as they see fit.
             *
             * If an implementation maps these labels to Pods, or any other resource that would need to be recreated when labels
             * change, it SHOULD clearly warn about this behavior in documentation.
             *
             * Support: Extended
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            parametersRef?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecInfrastructureParametersRef>;
        }
        /**
         * ParametersRef is a reference to a resource that contains the configuration
         * parameters corresponding to the Gateway. This is optional if the
         * controller does not require any additional configuration.
         *
         * This follows the same semantics as GatewayClass's `parametersRef`, but on a per-Gateway basis
         *
         * The Gateway's GatewayClass may provide its own `parametersRef`. When both are specified,
         * the merging behavior is implementation specific.
         * It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         * Support: Implementation-specific
         */
        interface GatewaySpecInfrastructureParametersRef {
            /**
             * Group is the group of the referent.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ParametersRef is a reference to a resource that contains the configuration
         * parameters corresponding to the Gateway. This is optional if the
         * controller does not require any additional configuration.
         *
         * This follows the same semantics as GatewayClass's `parametersRef`, but on a per-Gateway basis
         *
         * The Gateway's GatewayClass may provide its own `parametersRef`. When both are specified,
         * the merging behavior is implementation specific.
         * It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         * Support: Implementation-specific
         */
        interface GatewaySpecInfrastructureParametersRefPatch {
            /**
             * Group is the group of the referent.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Infrastructure defines infrastructure level attributes about this Gateway instance.
         *
         * Support: Extended
         */
        interface GatewaySpecInfrastructurePatch {
            /**
             * Annotations that SHOULD be applied to any resources created in response to this Gateway.
             *
             * For implementations creating other Kubernetes objects, this should be the `metadata.annotations` field on resources.
             * For other implementations, this refers to any relevant (implementation specific) "annotations" concepts.
             *
             * An implementation may chose to add additional implementation-specific annotations as they see fit.
             *
             * Support: Extended
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Labels that SHOULD be applied to any resources created in response to this Gateway.
             *
             * For implementations creating other Kubernetes objects, this should be the `metadata.labels` field on resources.
             * For other implementations, this refers to any relevant (implementation specific) "labels" concepts.
             *
             * An implementation may chose to add additional implementation-specific labels as they see fit.
             *
             * If an implementation maps these labels to Pods, or any other resource that would need to be recreated when labels
             * change, it SHOULD clearly warn about this behavior in documentation.
             *
             * Support: Extended
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            parametersRef?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecInfrastructureParametersRefPatch>;
        }
        /**
         * Listener embodies the concept of a logical endpoint where a Gateway accepts
         * network connections.
         */
        interface GatewaySpecListeners {
            allowedRoutes?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutes>;
            /**
             * Hostname specifies the virtual hostname to match for protocol types that
             * define this concept. When unspecified, all hostnames are matched. This
             * field is ignored for protocols that don't require hostname based
             * matching.
             *
             * Implementations MUST apply Hostname matching appropriately for each of
             * the following protocols:
             *
             * * TLS: The Listener Hostname MUST match the SNI.
             * * HTTP: The Listener Hostname MUST match the Host header of the request.
             * * HTTPS: The Listener Hostname SHOULD match at both the TLS and HTTP
             *   protocol layers as described above. If an implementation does not
             *   ensure that both the SNI and Host header match the Listener hostname,
             *   it MUST clearly document that.
             *
             * For HTTPRoute and TLSRoute resources, there is an interaction with the
             * `spec.hostnames` array. When both listener and route specify hostnames,
             * there MUST be an intersection between the values for a Route to be
             * accepted. For more information, refer to the Route specific Hostnames
             * documentation.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            /**
             * Name is the name of the Listener. This name MUST be unique within a
             * Gateway.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Port is the network port. Multiple listeners may use the
             * same port, subject to the Listener compatibility rules.
             *
             * Support: Core
             */
            port?: pulumi.Input<number>;
            /**
             * Protocol specifies the network protocol this listener expects to receive.
             *
             * Support: Core
             */
            protocol?: pulumi.Input<string>;
            tls?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersTls>;
        }
        /**
         * AllowedRoutes defines the types of routes that MAY be attached to a
         * Listener and the trusted namespaces where those Route resources MAY be
         * present.
         *
         * Although a client request may match multiple route rules, only one rule
         * may ultimately receive the request. Matching precedence MUST be
         * determined in order of the following criteria:
         *
         * * The most specific match as defined by the Route type.
         * * The oldest Route based on creation timestamp. For example, a Route with
         *   a creation timestamp of "2020-09-08 01:02:03" is given precedence over
         *   a Route with a creation timestamp of "2020-09-08 01:02:04".
         * * If everything else is equivalent, the Route appearing first in
         *   alphabetical order (namespace/name) should be given precedence. For
         *   example, foo/bar is given precedence over foo/baz.
         *
         * All valid rules within a Route attached to this Listener should be
         * implemented. Invalid Route rules can be ignored (sometimes that will mean
         * the full Route). If a Route rule transitions from valid to invalid,
         * support for that Route rule should be dropped to ensure consistency. For
         * example, even if a filter specified by a Route rule is invalid, the rest
         * of the rules within that Route should still be supported.
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutes {
            /**
             * Kinds specifies the groups and kinds of Routes that are allowed to bind
             * to this Gateway Listener. When unspecified or empty, the kinds of Routes
             * selected are determined using the Listener protocol.
             *
             * A RouteGroupKind MUST correspond to kinds of Routes that are compatible
             * with the application protocol specified in the Listener's Protocol field.
             * If an implementation does not support or recognize this resource type, it
             * MUST set the "ResolvedRefs" condition to False for this Listener with the
             * "InvalidRouteKinds" reason.
             *
             * Support: Core
             */
            kinds?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesKinds>[]>;
            namespaces?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesNamespaces>;
        }
        /**
         * RouteGroupKind indicates the group and kind of a Route resource.
         */
        interface GatewaySpecListenersAllowedRoutesKinds {
            /**
             * Group is the group of the Route.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the Route.
             */
            kind?: pulumi.Input<string>;
        }
        /**
         * RouteGroupKind indicates the group and kind of a Route resource.
         */
        interface GatewaySpecListenersAllowedRoutesKindsPatch {
            /**
             * Group is the group of the Route.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the Route.
             */
            kind?: pulumi.Input<string>;
        }
        /**
         * Namespaces indicates namespaces from which Routes may be attached to this
         * Listener. This is restricted to the namespace of this Gateway by default.
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesNamespaces {
            /**
             * From indicates where Routes will be selected for this Gateway. Possible
             * values are:
             *
             * * All: Routes in all namespaces may be used by this Gateway.
             * * Selector: Routes in namespaces selected by the selector may be used by
             *   this Gateway.
             * * Same: Only Routes in the same namespace may be used by this Gateway.
             *
             * Support: Core
             */
            from?: pulumi.Input<string>;
            selector?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesNamespacesSelector>;
        }
        /**
         * Namespaces indicates namespaces from which Routes may be attached to this
         * Listener. This is restricted to the namespace of this Gateway by default.
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesNamespacesPatch {
            /**
             * From indicates where Routes will be selected for this Gateway. Possible
             * values are:
             *
             * * All: Routes in all namespaces may be used by this Gateway.
             * * Selector: Routes in namespaces selected by the selector may be used by
             *   this Gateway.
             * * Same: Only Routes in the same namespace may be used by this Gateway.
             *
             * Support: Core
             */
            from?: pulumi.Input<string>;
            selector?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesNamespacesSelectorPatch>;
        }
        /**
         * Selector must be specified when From is set to "Selector". In that case,
         * only Routes in Namespaces matching this Selector will be selected by this
         * Gateway. This field is ignored for other values of "From".
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesNamespacesSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesNamespacesSelectorMatchExpressions>[]>;
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
        interface GatewaySpecListenersAllowedRoutesNamespacesSelectorMatchExpressions {
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
        interface GatewaySpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsPatch {
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
         * Selector must be specified when From is set to "Selector". In that case,
         * only Routes in Namespaces matching this Selector will be selected by this
         * Gateway. This field is ignored for other values of "From".
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesNamespacesSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsPatch>[]>;
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
         * AllowedRoutes defines the types of routes that MAY be attached to a
         * Listener and the trusted namespaces where those Route resources MAY be
         * present.
         *
         * Although a client request may match multiple route rules, only one rule
         * may ultimately receive the request. Matching precedence MUST be
         * determined in order of the following criteria:
         *
         * * The most specific match as defined by the Route type.
         * * The oldest Route based on creation timestamp. For example, a Route with
         *   a creation timestamp of "2020-09-08 01:02:03" is given precedence over
         *   a Route with a creation timestamp of "2020-09-08 01:02:04".
         * * If everything else is equivalent, the Route appearing first in
         *   alphabetical order (namespace/name) should be given precedence. For
         *   example, foo/bar is given precedence over foo/baz.
         *
         * All valid rules within a Route attached to this Listener should be
         * implemented. Invalid Route rules can be ignored (sometimes that will mean
         * the full Route). If a Route rule transitions from valid to invalid,
         * support for that Route rule should be dropped to ensure consistency. For
         * example, even if a filter specified by a Route rule is invalid, the rest
         * of the rules within that Route should still be supported.
         *
         * Support: Core
         */
        interface GatewaySpecListenersAllowedRoutesPatch {
            /**
             * Kinds specifies the groups and kinds of Routes that are allowed to bind
             * to this Gateway Listener. When unspecified or empty, the kinds of Routes
             * selected are determined using the Listener protocol.
             *
             * A RouteGroupKind MUST correspond to kinds of Routes that are compatible
             * with the application protocol specified in the Listener's Protocol field.
             * If an implementation does not support or recognize this resource type, it
             * MUST set the "ResolvedRefs" condition to False for this Listener with the
             * "InvalidRouteKinds" reason.
             *
             * Support: Core
             */
            kinds?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesKindsPatch>[]>;
            namespaces?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesNamespacesPatch>;
        }
        /**
         * Listener embodies the concept of a logical endpoint where a Gateway accepts
         * network connections.
         */
        interface GatewaySpecListenersPatch {
            allowedRoutes?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersAllowedRoutesPatch>;
            /**
             * Hostname specifies the virtual hostname to match for protocol types that
             * define this concept. When unspecified, all hostnames are matched. This
             * field is ignored for protocols that don't require hostname based
             * matching.
             *
             * Implementations MUST apply Hostname matching appropriately for each of
             * the following protocols:
             *
             * * TLS: The Listener Hostname MUST match the SNI.
             * * HTTP: The Listener Hostname MUST match the Host header of the request.
             * * HTTPS: The Listener Hostname SHOULD match at both the TLS and HTTP
             *   protocol layers as described above. If an implementation does not
             *   ensure that both the SNI and Host header match the Listener hostname,
             *   it MUST clearly document that.
             *
             * For HTTPRoute and TLSRoute resources, there is an interaction with the
             * `spec.hostnames` array. When both listener and route specify hostnames,
             * there MUST be an intersection between the values for a Route to be
             * accepted. For more information, refer to the Route specific Hostnames
             * documentation.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            /**
             * Name is the name of the Listener. This name MUST be unique within a
             * Gateway.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Port is the network port. Multiple listeners may use the
             * same port, subject to the Listener compatibility rules.
             *
             * Support: Core
             */
            port?: pulumi.Input<number>;
            /**
             * Protocol specifies the network protocol this listener expects to receive.
             *
             * Support: Core
             */
            protocol?: pulumi.Input<string>;
            tls?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersTlsPatch>;
        }
        /**
         * TLS is the TLS configuration for the Listener. This field is required if
         * the Protocol field is "HTTPS" or "TLS". It is invalid to set this field
         * if the Protocol field is "HTTP", "TCP", or "UDP".
         *
         * The association of SNIs to Certificate defined in GatewayTLSConfig is
         * defined based on the Hostname field for this listener.
         *
         * The GatewayClass MUST use the longest matching SNI out of all
         * available certificates for any TLS handshake.
         *
         * Support: Core
         */
        interface GatewaySpecListenersTls {
            /**
             * CertificateRefs contains a series of references to Kubernetes objects that
             * contains TLS certificates and private keys. These certificates are used to
             * establish a TLS handshake for requests that match the hostname of the
             * associated listener.
             *
             * A single CertificateRef to a Kubernetes Secret has "Core" support.
             * Implementations MAY choose to support attaching multiple certificates to
             * a Listener, but this behavior is implementation-specific.
             *
             * References to a resource in different namespace are invalid UNLESS there
             * is a ReferenceGrant in the target namespace that allows the certificate
             * to be attached. If a ReferenceGrant does not allow this reference, the
             * "ResolvedRefs" condition MUST be set to False for this listener with the
             * "RefNotPermitted" reason.
             *
             * This field is required to have at least one element when the mode is set
             * to "Terminate" (default) and is optional otherwise.
             *
             * CertificateRefs can reference to standard Kubernetes resources, i.e.
             * Secret, or implementation-specific custom resources.
             *
             * Support: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls
             *
             * Support: Implementation-specific (More than one reference or other resource types)
             */
            certificateRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersTlsCertificateRefs>[]>;
            /**
             * Mode defines the TLS behavior for the TLS session initiated by the client.
             * There are two possible modes:
             *
             * - Terminate: The TLS session between the downstream client and the
             *   Gateway is terminated at the Gateway. This mode requires certificates
             *   to be specified in some way, such as populating the certificateRefs
             *   field.
             * - Passthrough: The TLS session is NOT terminated by the Gateway. This
             *   implies that the Gateway can't decipher the TLS stream except for
             *   the ClientHello message of the TLS protocol. The certificateRefs field
             *   is ignored in this mode.
             *
             * Support: Core
             */
            mode?: pulumi.Input<string>;
            /**
             * Options are a list of key/value pairs to enable extended TLS
             * configuration for each implementation. For example, configuring the
             * minimum TLS version or supported cipher suites.
             *
             * A set of common keys MAY be defined by the API in the future. To avoid
             * any ambiguity, implementation-specific definitions MUST use
             * domain-prefixed names, such as `example.com/my-custom-option`.
             * Un-prefixed names are reserved for key names defined by Gateway API.
             *
             * Support: Implementation-specific
             */
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * SecretObjectReference identifies an API object including its namespace,
         * defaulting to Secret.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         *
         * References to objects with invalid Group and Kind are not valid, and must
         * be rejected by the implementation, with appropriate Conditions set
         * on the containing object.
         */
        interface GatewaySpecListenersTlsCertificateRefs {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "Secret".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referenced object. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * SecretObjectReference identifies an API object including its namespace,
         * defaulting to Secret.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         *
         * References to objects with invalid Group and Kind are not valid, and must
         * be rejected by the implementation, with appropriate Conditions set
         * on the containing object.
         */
        interface GatewaySpecListenersTlsCertificateRefsPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "Secret".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referenced object. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * TLS is the TLS configuration for the Listener. This field is required if
         * the Protocol field is "HTTPS" or "TLS". It is invalid to set this field
         * if the Protocol field is "HTTP", "TCP", or "UDP".
         *
         * The association of SNIs to Certificate defined in GatewayTLSConfig is
         * defined based on the Hostname field for this listener.
         *
         * The GatewayClass MUST use the longest matching SNI out of all
         * available certificates for any TLS handshake.
         *
         * Support: Core
         */
        interface GatewaySpecListenersTlsPatch {
            /**
             * CertificateRefs contains a series of references to Kubernetes objects that
             * contains TLS certificates and private keys. These certificates are used to
             * establish a TLS handshake for requests that match the hostname of the
             * associated listener.
             *
             * A single CertificateRef to a Kubernetes Secret has "Core" support.
             * Implementations MAY choose to support attaching multiple certificates to
             * a Listener, but this behavior is implementation-specific.
             *
             * References to a resource in different namespace are invalid UNLESS there
             * is a ReferenceGrant in the target namespace that allows the certificate
             * to be attached. If a ReferenceGrant does not allow this reference, the
             * "ResolvedRefs" condition MUST be set to False for this listener with the
             * "RefNotPermitted" reason.
             *
             * This field is required to have at least one element when the mode is set
             * to "Terminate" (default) and is optional otherwise.
             *
             * CertificateRefs can reference to standard Kubernetes resources, i.e.
             * Secret, or implementation-specific custom resources.
             *
             * Support: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls
             *
             * Support: Implementation-specific (More than one reference or other resource types)
             */
            certificateRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersTlsCertificateRefsPatch>[]>;
            /**
             * Mode defines the TLS behavior for the TLS session initiated by the client.
             * There are two possible modes:
             *
             * - Terminate: The TLS session between the downstream client and the
             *   Gateway is terminated at the Gateway. This mode requires certificates
             *   to be specified in some way, such as populating the certificateRefs
             *   field.
             * - Passthrough: The TLS session is NOT terminated by the Gateway. This
             *   implies that the Gateway can't decipher the TLS stream except for
             *   the ClientHello message of the TLS protocol. The certificateRefs field
             *   is ignored in this mode.
             *
             * Support: Core
             */
            mode?: pulumi.Input<string>;
            /**
             * Options are a list of key/value pairs to enable extended TLS
             * configuration for each implementation. For example, configuring the
             * minimum TLS version or supported cipher suites.
             *
             * A set of common keys MAY be defined by the API in the future. To avoid
             * any ambiguity, implementation-specific definitions MUST use
             * domain-prefixed names, such as `example.com/my-custom-option`.
             * Un-prefixed names are reserved for key names defined by Gateway API.
             *
             * Support: Implementation-specific
             */
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Spec defines the desired state of Gateway.
         */
        interface GatewaySpecPatch {
            /**
             * Addresses requested for this Gateway. This is optional and behavior can
             * depend on the implementation. If a value is set in the spec and the
             * requested address is invalid or unavailable, the implementation MUST
             * indicate this in the associated entry in GatewayStatus.Addresses.
             *
             * The Addresses field represents a request for the address(es) on the
             * "outside of the Gateway", that traffic bound for this Gateway will use.
             * This could be the IP address or hostname of an external load balancer or
             * other networking infrastructure, or some other address that traffic will
             * be sent to.
             *
             * If no Addresses are specified, the implementation MAY schedule the
             * Gateway in an implementation-specific manner, assigning an appropriate
             * set of Addresses.
             *
             * The implementation MUST bind all Listeners to every GatewayAddress that
             * it assigns to the Gateway and add a corresponding entry in
             * GatewayStatus.Addresses.
             *
             * Support: Extended
             */
            addresses?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecAddressesPatch>[]>;
            /**
             * GatewayClassName used for this Gateway. This is the name of a
             * GatewayClass resource.
             */
            gatewayClassName?: pulumi.Input<string>;
            infrastructure?: pulumi.Input<inputs.gateway.v1beta1.GatewaySpecInfrastructurePatch>;
            /**
             * Listeners associated with this Gateway. Listeners define
             * logical endpoints that are bound on this Gateway's addresses.
             * At least one Listener MUST be specified.
             *
             * Each Listener in a set of Listeners (for example, in a single Gateway)
             * MUST be _distinct_, in that a traffic flow MUST be able to be assigned to
             * exactly one listener. (This section uses "set of Listeners" rather than
             * "Listeners in a single Gateway" because implementations MAY merge configuration
             * from multiple Gateways onto a single data plane, and these rules _also_
             * apply in that case).
             *
             * Practically, this means that each listener in a set MUST have a unique
             * combination of Port, Protocol, and, if supported by the protocol, Hostname.
             *
             * Some combinations of port, protocol, and TLS settings are considered
             * Core support and MUST be supported by implementations based on their
             * targeted conformance profile:
             *
             * HTTP Profile
             *
             * 1. HTTPRoute, Port: 80, Protocol: HTTP
             * 2. HTTPRoute, Port: 443, Protocol: HTTPS, TLS Mode: Terminate, TLS keypair provided
             *
             * TLS Profile
             *
             * 1. TLSRoute, Port: 443, Protocol: TLS, TLS Mode: Passthrough
             *
             * "Distinct" Listeners have the following property:
             *
             * The implementation can match inbound requests to a single distinct
             * Listener. When multiple Listeners share values for fields (for
             * example, two Listeners with the same Port value), the implementation
             * can match requests to only one of the Listeners using other
             * Listener fields.
             *
             * For example, the following Listener scenarios are distinct:
             *
             * 1. Multiple Listeners with the same Port that all use the "HTTP"
             *    Protocol that all have unique Hostname values.
             * 2. Multiple Listeners with the same Port that use either the "HTTPS" or
             *    "TLS" Protocol that all have unique Hostname values.
             * 3. A mixture of "TCP" and "UDP" Protocol Listeners, where no Listener
             *    with the same Protocol has the same Port value.
             *
             * Some fields in the Listener struct have possible values that affect
             * whether the Listener is distinct. Hostname is particularly relevant
             * for HTTP or HTTPS protocols.
             *
             * When using the Hostname value to select between same-Port, same-Protocol
             * Listeners, the Hostname value must be different on each Listener for the
             * Listener to be distinct.
             *
             * When the Listeners are distinct based on Hostname, inbound request
             * hostnames MUST match from the most specific to least specific Hostname
             * values to choose the correct Listener and its associated set of Routes.
             *
             * Exact matches must be processed before wildcard matches, and wildcard
             * matches must be processed before fallback (empty Hostname value)
             * matches. For example, `"foo.example.com"` takes precedence over
             * `"*.example.com"`, and `"*.example.com"` takes precedence over `""`.
             *
             * Additionally, if there are multiple wildcard entries, more specific
             * wildcard entries must be processed before less specific wildcard entries.
             * For example, `"*.foo.example.com"` takes precedence over `"*.example.com"`.
             * The precise definition here is that the higher the number of dots in the
             * hostname to the right of the wildcard character, the higher the precedence.
             *
             * The wildcard character will match any number of characters _and dots_ to
             * the left, however, so `"*.example.com"` will match both
             * `"foo.bar.example.com"` _and_ `"bar.example.com"`.
             *
             * If a set of Listeners contains Listeners that are not distinct, then those
             * Listeners are Conflicted, and the implementation MUST set the "Conflicted"
             * condition in the Listener Status to "True".
             *
             * Implementations MAY choose to accept a Gateway with some Conflicted
             * Listeners only if they only accept the partial Listener set that contains
             * no Conflicted Listeners. To put this another way, implementations may
             * accept a partial Listener set only if they throw out *all* the conflicting
             * Listeners. No picking one of the conflicting listeners as the winner.
             * This also means that the Gateway must have at least one non-conflicting
             * Listener in this case, otherwise it violates the requirement that at
             * least one Listener must be present.
             *
             * The implementation MUST set a "ListenersNotValid" condition on the
             * Gateway Status when the Gateway contains Conflicted Listeners whether or
             * not they accept the Gateway. That Condition SHOULD clearly
             * indicate in the Message which Listeners are conflicted, and which are
             * Accepted. Additionally, the Listener status for those listeners SHOULD
             * indicate which Listeners are conflicted and not Accepted.
             *
             * A Gateway's Listeners are considered "compatible" if:
             *
             * 1. They are distinct.
             * 2. The implementation can serve them in compliance with the Addresses
             *    requirement that all Listeners are available on all assigned
             *    addresses.
             *
             * Compatible combinations in Extended support are expected to vary across
             * implementations. A combination that is compatible for one implementation
             * may not be compatible for another.
             *
             * For example, an implementation that cannot serve both TCP and UDP listeners
             * on the same address, or cannot mix HTTPS and generic TLS listens on the same port
             * would not consider those cases compatible, even though they are distinct.
             *
             * Note that requests SHOULD match at most one Listener. For example, if
             * Listeners are defined for "foo.example.com" and "*.example.com", a
             * request to "foo.example.com" SHOULD only be routed using routes attached
             * to the "foo.example.com" Listener (and not the "*.example.com" Listener).
             * This concept is known as "Listener Isolation". Implementations that do
             * not support Listener Isolation MUST clearly document this.
             *
             * Implementations MAY merge separate Gateways onto a single set of
             * Addresses if all Listeners across all Gateways are compatible.
             *
             * Support: Core
             */
            listeners?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewaySpecListenersPatch>[]>;
        }
        /**
         * Status defines the current state of Gateway.
         */
        interface GatewayStatus {
            /**
             * Addresses lists the network addresses that have been bound to the
             * Gateway.
             *
             * This list may differ from the addresses provided in the spec under some
             * conditions:
             *
             *   * no addresses are specified, all addresses are dynamically assigned
             *   * a combination of specified and dynamic addresses are assigned
             *   * a specified address was unusable (e.g. already in use)
             */
            addresses?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewayStatusAddresses>[]>;
            /**
             * Conditions describe the current conditions of the Gateway.
             *
             * Implementations should prefer to express Gateway conditions
             * using the `GatewayConditionType` and `GatewayConditionReason`
             * constants so that operators and tools can converge on a common
             * vocabulary to describe Gateway state.
             *
             * Known condition types are:
             *
             * * "Accepted"
             * * "Programmed"
             * * "Ready"
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewayStatusConditions>[]>;
            /**
             * Listeners provide status for each unique listener port defined in the Spec.
             */
            listeners?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewayStatusListeners>[]>;
        }
        /**
         * GatewayStatusAddress describes a network address that is bound to a Gateway.
         */
        interface GatewayStatusAddresses {
            /**
             * Type of the address.
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the address. The validity of the values will depend
             * on the type and support by the controller.
             *
             * Examples: `1.2.3.4`, `128::1`, `my-ip-address`.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface GatewayStatusConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ListenerStatus is the status associated with a Listener.
         */
        interface GatewayStatusListeners {
            /**
             * AttachedRoutes represents the total number of Routes that have been
             * successfully attached to this Listener.
             *
             * Successful attachment of a Route to a Listener is based solely on the
             * combination of the AllowedRoutes field on the corresponding Listener
             * and the Route's ParentRefs field. A Route is successfully attached to
             * a Listener when it is selected by the Listener's AllowedRoutes field
             * AND the Route has a valid ParentRef selecting the whole Gateway
             * resource or a specific Listener as a parent resource (more detail on
             * attachment semantics can be found in the documentation on the various
             * Route kinds ParentRefs fields). Listener or Route status does not impact
             * successful attachment, i.e. the AttachedRoutes field count MUST be set
             * for Listeners with condition Accepted: false and MUST count successfully
             * attached Routes that may themselves have Accepted: false conditions.
             *
             * Uses for this field include troubleshooting Route attachment and
             * measuring blast radius/impact of changes to a Listener.
             */
            attachedRoutes?: pulumi.Input<number>;
            /**
             * Conditions describe the current condition of this listener.
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewayStatusListenersConditions>[]>;
            /**
             * Name is the name of the Listener that this status corresponds to.
             */
            name?: pulumi.Input<string>;
            /**
             * SupportedKinds is the list indicating the Kinds supported by this
             * listener. This MUST represent the kinds an implementation supports for
             * that Listener configuration.
             *
             * If kinds are specified in Spec that are not supported, they MUST NOT
             * appear in this list and an implementation MUST set the "ResolvedRefs"
             * condition to "False" with the "InvalidRouteKinds" reason. If both valid
             * and invalid Route kinds are specified, the implementation MUST
             * reference the valid Route kinds that have been specified.
             */
            supportedKinds?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.GatewayStatusListenersSupportedKinds>[]>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface GatewayStatusListenersConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * RouteGroupKind indicates the group and kind of a Route resource.
         */
        interface GatewayStatusListenersSupportedKinds {
            /**
             * Group is the group of the Route.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the Route.
             */
            kind?: pulumi.Input<string>;
        }
        /**
         * HTTPRoute provides a way to route HTTP requests. This includes the capability
         * to match requests by hostname, path, header, or query param. Filters can be
         * used to specify additional processing steps. Backends specify where matching
         * requests should be routed.
         */
        interface HTTPRoute {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"HTTPRoute">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpec>;
            status?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteStatus>;
        }
        /**
         * Spec defines the desired state of HTTPRoute.
         */
        interface HTTPRouteSpec {
            /**
             * Hostnames defines a set of hostnames that should match against the HTTP Host
             * header to select a HTTPRoute used to process the request. Implementations
             * MUST ignore any port value specified in the HTTP Host header while
             * performing a match and (absent of any applicable header modification
             * configuration) MUST forward this header unmodified to the backend.
             *
             * Valid values for Hostnames are determined by RFC 1123 definition of a
             * hostname with 2 notable exceptions:
             *
             * 1. IPs are not allowed.
             * 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
             *    label must appear by itself as the first label.
             *
             * If a hostname is specified by both the Listener and HTTPRoute, there
             * must be at least one intersecting hostname for the HTTPRoute to be
             * attached to the Listener. For example:
             *
             * * A Listener with `test.example.com` as the hostname matches HTTPRoutes
             *   that have either not specified any hostnames, or have specified at
             *   least one of `test.example.com` or `*.example.com`.
             * * A Listener with `*.example.com` as the hostname matches HTTPRoutes
             *   that have either not specified any hostnames or have specified at least
             *   one hostname that matches the Listener hostname. For example,
             *   `*.example.com`, `test.example.com`, and `foo.test.example.com` would
             *   all match. On the other hand, `example.com` and `test.example.net` would
             *   not match.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * If both the Listener and HTTPRoute have specified hostnames, any
             * HTTPRoute hostnames that do not match the Listener hostname MUST be
             * ignored. For example, if a Listener specified `*.example.com`, and the
             * HTTPRoute specified `test.example.com` and `test.example.net`,
             * `test.example.net` must not be considered for a match.
             *
             * If both the Listener and HTTPRoute have specified hostnames, and none
             * match with the criteria above, then the HTTPRoute is not accepted. The
             * implementation must raise an 'Accepted' Condition with a status of
             * `False` in the corresponding RouteParentStatus.
             *
             * In the event that multiple HTTPRoutes specify intersecting hostnames (e.g.
             * overlapping wildcard matching and exact matching hostnames), precedence must
             * be given to rules from the HTTPRoute with the largest number of:
             *
             * * Characters in a matching non-wildcard hostname.
             * * Characters in a matching hostname.
             *
             * If ties exist across multiple Routes, the matching precedence rules for
             * HTTPRouteMatches takes over.
             *
             * Support: Core
             */
            hostnames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * ParentRefs references the resources (usually Gateways) that a Route wants
             * to be attached to. Note that the referenced parent resource needs to
             * allow this for the attachment to be complete. For Gateways, that means
             * the Gateway needs to allow attachment from Routes of this kind and
             * namespace. For Services, that means the Service must either be in the same
             * namespace for a "producer" route, or the mesh implementation must support
             * and allow "consumer" routes for the referenced Service. ReferenceGrant is
             * not applicable for governing ParentRefs to Services - it is not possible to
             * create a "producer" route for a Service in a different namespace from the
             * Route.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * This API may be extended in the future to support additional kinds of parent
             * resources.
             *
             * ParentRefs must be _distinct_. This means either that:
             *
             * * They select different objects.  If this is the case, then parentRef
             *   entries are distinct. In terms of fields, this means that the
             *   multi-part key defined by `group`, `kind`, `namespace`, and `name` must
             *   be unique across all parentRef entries in the Route.
             * * They do not select different objects, but for each optional field used,
             *   each ParentRef that selects the same object must set the same set of
             *   optional fields to different values. If one ParentRef sets a
             *   combination of optional fields, all must set the same combination.
             *
             * Some examples:
             *
             * * If one ParentRef sets `sectionName`, all ParentRefs referencing the
             *   same object must also set `sectionName`.
             * * If one ParentRef sets `port`, all ParentRefs referencing the same
             *   object must also set `port`.
             * * If one ParentRef sets `sectionName` and `port`, all ParentRefs
             *   referencing the same object must also set `sectionName` and `port`.
             *
             * It is possible to separately reference multiple distinct objects that may
             * be collapsed by an implementation. For example, some implementations may
             * choose to merge compatible Gateway Listeners together. If that is the
             * case, the list of routes attached to those resources should also be
             * merged.
             *
             * Note that for ParentRefs that cross namespace boundaries, there are specific
             * rules. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example,
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable other kinds of cross-namespace reference.
             */
            parentRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecParentRefs>[]>;
            /**
             * Rules are a list of HTTP matchers, filters and actions.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRules>[]>;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered
         * a parent of this resource (usually a route). There are two kinds of parent resources
         * with "Core" support:
         *
         * * Gateway (Gateway conformance profile)
         * * Service (Mesh conformance profile, ClusterIP Services only)
         *
         * This API may be extended in the future to support additional kinds of parent
         * resources.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         */
        interface HTTPRouteSpecParentRefs {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered
         * a parent of this resource (usually a route). There are two kinds of parent resources
         * with "Core" support:
         *
         * * Gateway (Gateway conformance profile)
         * * Service (Mesh conformance profile, ClusterIP Services only)
         *
         * This API may be extended in the future to support additional kinds of parent
         * resources.
         *
         * The API object must be valid in the cluster; the Group and Kind must
         * be registered in the cluster for this reference to be valid.
         */
        interface HTTPRouteSpecParentRefsPatch {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
        /**
         * Spec defines the desired state of HTTPRoute.
         */
        interface HTTPRouteSpecPatch {
            /**
             * Hostnames defines a set of hostnames that should match against the HTTP Host
             * header to select a HTTPRoute used to process the request. Implementations
             * MUST ignore any port value specified in the HTTP Host header while
             * performing a match and (absent of any applicable header modification
             * configuration) MUST forward this header unmodified to the backend.
             *
             * Valid values for Hostnames are determined by RFC 1123 definition of a
             * hostname with 2 notable exceptions:
             *
             * 1. IPs are not allowed.
             * 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
             *    label must appear by itself as the first label.
             *
             * If a hostname is specified by both the Listener and HTTPRoute, there
             * must be at least one intersecting hostname for the HTTPRoute to be
             * attached to the Listener. For example:
             *
             * * A Listener with `test.example.com` as the hostname matches HTTPRoutes
             *   that have either not specified any hostnames, or have specified at
             *   least one of `test.example.com` or `*.example.com`.
             * * A Listener with `*.example.com` as the hostname matches HTTPRoutes
             *   that have either not specified any hostnames or have specified at least
             *   one hostname that matches the Listener hostname. For example,
             *   `*.example.com`, `test.example.com`, and `foo.test.example.com` would
             *   all match. On the other hand, `example.com` and `test.example.net` would
             *   not match.
             *
             * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
             * as a suffix match. That means that a match for `*.example.com` would match
             * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
             *
             * If both the Listener and HTTPRoute have specified hostnames, any
             * HTTPRoute hostnames that do not match the Listener hostname MUST be
             * ignored. For example, if a Listener specified `*.example.com`, and the
             * HTTPRoute specified `test.example.com` and `test.example.net`,
             * `test.example.net` must not be considered for a match.
             *
             * If both the Listener and HTTPRoute have specified hostnames, and none
             * match with the criteria above, then the HTTPRoute is not accepted. The
             * implementation must raise an 'Accepted' Condition with a status of
             * `False` in the corresponding RouteParentStatus.
             *
             * In the event that multiple HTTPRoutes specify intersecting hostnames (e.g.
             * overlapping wildcard matching and exact matching hostnames), precedence must
             * be given to rules from the HTTPRoute with the largest number of:
             *
             * * Characters in a matching non-wildcard hostname.
             * * Characters in a matching hostname.
             *
             * If ties exist across multiple Routes, the matching precedence rules for
             * HTTPRouteMatches takes over.
             *
             * Support: Core
             */
            hostnames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * ParentRefs references the resources (usually Gateways) that a Route wants
             * to be attached to. Note that the referenced parent resource needs to
             * allow this for the attachment to be complete. For Gateways, that means
             * the Gateway needs to allow attachment from Routes of this kind and
             * namespace. For Services, that means the Service must either be in the same
             * namespace for a "producer" route, or the mesh implementation must support
             * and allow "consumer" routes for the referenced Service. ReferenceGrant is
             * not applicable for governing ParentRefs to Services - it is not possible to
             * create a "producer" route for a Service in a different namespace from the
             * Route.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * This API may be extended in the future to support additional kinds of parent
             * resources.
             *
             * ParentRefs must be _distinct_. This means either that:
             *
             * * They select different objects.  If this is the case, then parentRef
             *   entries are distinct. In terms of fields, this means that the
             *   multi-part key defined by `group`, `kind`, `namespace`, and `name` must
             *   be unique across all parentRef entries in the Route.
             * * They do not select different objects, but for each optional field used,
             *   each ParentRef that selects the same object must set the same set of
             *   optional fields to different values. If one ParentRef sets a
             *   combination of optional fields, all must set the same combination.
             *
             * Some examples:
             *
             * * If one ParentRef sets `sectionName`, all ParentRefs referencing the
             *   same object must also set `sectionName`.
             * * If one ParentRef sets `port`, all ParentRefs referencing the same
             *   object must also set `port`.
             * * If one ParentRef sets `sectionName` and `port`, all ParentRefs
             *   referencing the same object must also set `sectionName` and `port`.
             *
             * It is possible to separately reference multiple distinct objects that may
             * be collapsed by an implementation. For example, some implementations may
             * choose to merge compatible Gateway Listeners together. If that is the
             * case, the list of routes attached to those resources should also be
             * merged.
             *
             * Note that for ParentRefs that cross namespace boundaries, there are specific
             * rules. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example,
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable other kinds of cross-namespace reference.
             */
            parentRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecParentRefsPatch>[]>;
            /**
             * Rules are a list of HTTP matchers, filters and actions.
             */
            rules?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesPatch>[]>;
        }
        /**
         * HTTPRouteRule defines semantics for matching an HTTP request based on
         * conditions (matches), processing it (filters), and forwarding the request to
         * an API object (backendRefs).
         */
        interface HTTPRouteSpecRules {
            /**
             * BackendRefs defines the backend(s) where matching requests should be
             * sent.
             *
             * Failure behavior here depends on how many BackendRefs are specified and
             * how many are invalid.
             *
             * If *all* entries in BackendRefs are invalid, and there are also no filters
             * specified in this route rule, *all* traffic which matches this rule MUST
             * receive a 500 status code.
             *
             * See the HTTPBackendRef definition for the rules about what makes a single
             * HTTPBackendRef invalid.
             *
             * When a HTTPBackendRef is invalid, 500 status codes MUST be returned for
             * requests that would have otherwise been routed to an invalid backend. If
             * multiple backends are specified, and some are invalid, the proportion of
             * requests that would otherwise have been routed to an invalid backend
             * MUST receive a 500 status code.
             *
             * For example, if two backends are specified with equal weights, and one is
             * invalid, 50 percent of traffic must receive a 500. Implementations may
             * choose how that 50 percent is determined.
             *
             * When a HTTPBackendRef refers to a Service that has no ready endpoints,
             * implementations SHOULD return a 503 for requests to that backend instead.
             * If an implementation chooses to do this, all of the above rules for 500 responses
             * MUST also apply for responses that return a 503.
             *
             * Support: Core for Kubernetes Service
             *
             * Support: Extended for Kubernetes ServiceImport
             *
             * Support: Implementation-specific for any other resource
             *
             * Support for weight: Core
             */
            backendRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefs>[]>;
            /**
             * Filters define the filters that are applied to requests that match
             * this rule.
             *
             * Wherever possible, implementations SHOULD implement filters in the order
             * they are specified.
             *
             * Implementations MAY choose to implement this ordering strictly, rejecting
             * any combination or order of filters that can not be supported. If implementations
             * choose a strict interpretation of filter ordering, they MUST clearly document
             * that behavior.
             *
             * To reject an invalid combination or order of filters, implementations SHOULD
             * consider the Route Rules with this configuration invalid. If all Route Rules
             * in a Route are invalid, the entire Route would be considered invalid. If only
             * a portion of Route Rules are invalid, implementations MUST set the
             * "PartiallyInvalid" condition for the Route.
             *
             * Conformance-levels at this level are defined based on the type of filter:
             *
             * - ALL core filters MUST be supported by all implementations.
             * - Implementers are encouraged to support extended filters.
             * - Implementation-specific custom filters have no API guarantees across
             *   implementations.
             *
             * Specifying the same filter multiple times is not supported unless explicitly
             * indicated in the filter.
             *
             * All filters are expected to be compatible with each other except for the
             * URLRewrite and RequestRedirect filters, which may not be combined. If an
             * implementation can not support other combinations of filters, they must clearly
             * document that limitation. In cases where incompatible or unsupported
             * filters are specified and cause the `Accepted` condition to be set to status
             * `False`, implementations may use the `IncompatibleFilters` reason to specify
             * this configuration error.
             *
             * Support: Core
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFilters>[]>;
            /**
             * Matches define conditions used for matching the rule against incoming
             * HTTP requests. Each match is independent, i.e. this rule will be matched
             * if **any** one of the matches is satisfied.
             *
             * For example, take the following matches configuration:
             *
             * ```
             * matches:
             * - path:
             *     value: "/foo"
             *   headers:
             *   - name: "version"
             *     value: "v2"
             * - path:
             *     value: "/v2/foo"
             * ```
             *
             * For a request to match against this rule, a request must satisfy
             * EITHER of the two conditions:
             *
             * - path prefixed with `/foo` AND contains the header `version: v2`
             * - path prefix of `/v2/foo`
             *
             * See the documentation for HTTPRouteMatch on how to specify multiple
             * match conditions that should be ANDed together.
             *
             * If no matches are specified, the default is a prefix
             * path match on "/", which has the effect of matching every
             * HTTP request.
             *
             * Proxy or Load Balancer routing configuration generated from HTTPRoutes
             * MUST prioritize matches based on the following criteria, continuing on
             * ties. Across all rules specified on applicable Routes, precedence must be
             * given to the match having:
             *
             * * "Exact" path match.
             * * "Prefix" path match with largest number of characters.
             * * Method match.
             * * Largest number of header matches.
             * * Largest number of query param matches.
             *
             * Note: The precedence of RegularExpression path matches are implementation-specific.
             *
             * If ties still exist across multiple Routes, matching precedence MUST be
             * determined in order of the following criteria, continuing on ties:
             *
             * * The oldest Route based on creation timestamp.
             * * The Route appearing first in alphabetical order by
             *   "{namespace}/{name}".
             *
             * If ties still exist within an HTTPRoute, matching precedence MUST be granted
             * to the FIRST matching rule (in list order) with a match meeting the above
             * criteria.
             *
             * When no rules matching a request have been successfully attached to the
             * parent a request is coming from, a HTTP 404 status code MUST be returned.
             */
            matches?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesMatches>[]>;
            timeouts?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesTimeouts>;
        }
        /**
         * HTTPBackendRef defines how a HTTPRoute forwards a HTTP request.
         *
         * Note that when a namespace different than the local namespace is specified, a
         * ReferenceGrant object is required in the referent namespace to allow that
         * namespace's owner to accept the reference. See the ReferenceGrant
         * documentation for details.
         *
         * <gateway:experimental:description>
         *
         * When the BackendRef points to a Kubernetes Service, implementations SHOULD
         * honor the appProtocol field if it is set for the target Service Port.
         *
         * Implementations supporting appProtocol SHOULD recognize the Kubernetes
         * Standard Application Protocols defined in KEP-3726.
         *
         * If a Service appProtocol isn't specified, an implementation MAY infer the
         * backend protocol through its own means. Implementations MAY infer the
         * protocol from the Route type referring to the backend Service.
         *
         * If a Route is not able to send traffic to the backend using the specified
         * protocol then the backend is considered invalid. Implementations MUST set the
         * "ResolvedRefs" condition to "False" with the "UnsupportedProtocol" reason.
         *
         * </gateway:experimental:description>
         */
        interface HTTPRouteSpecRulesBackendRefs {
            /**
             * Filters defined at this level should be executed if and only if the
             * request is being forwarded to the backend defined here.
             *
             * Support: Implementation-specific (For broader support of filters, use the
             * Filters field in HTTPRouteRule.)
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFilters>[]>;
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
            /**
             * Weight specifies the proportion of requests forwarded to the referenced
             * backend. This is computed as weight/(sum of all weights in this
             * BackendRefs list). For non-zero values, there may be some epsilon from
             * the exact proportion defined here depending on the precision an
             * implementation supports. Weight is not a percentage and the sum of
             * weights does not need to equal 100.
             *
             * If only one backend is specified and it has a weight greater than 0, 100%
             * of the traffic is forwarded to that backend. If weight is set to 0, no
             * traffic should be forwarded for this entry. If unspecified, weight
             * defaults to 1.
             *
             * Support for this field varies based on the context where used.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * HTTPRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. HTTPRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface HTTPRouteSpecRulesBackendRefsFilters {
            extensionRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersExtensionRef>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifier>;
            requestMirror?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestMirror>;
            requestRedirect?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestRedirect>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifier>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations must support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by
             *   specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` should be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
            urlRewrite?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersUrlRewrite>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * This filter can be used multiple times within the same rule.
         *
         * Support: Implementation-specific
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersExtensionRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * This filter can be used multiple times within the same rule.
         *
         * Support: Implementation-specific
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersExtensionRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. HTTPRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersPatch {
            extensionRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersExtensionRefPatch>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierPatch>;
            requestMirror?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorPatch>;
            requestRedirect?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPatch>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierPatch>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations must support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by
             *   specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` should be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
            urlRewrite?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePatch>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestMirror {
            backendRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRef>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorPatch {
            backendRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestMirrorBackendRefPatch>;
        }
        /**
         * RequestRedirect defines a schema for a filter that responds to the
         * request with an HTTP redirection.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestRedirect {
            /**
             * Hostname is the hostname to be used in the value of the `Location`
             * header in the response.
             * When empty, the hostname in the `Host` header of the request is used.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPath>;
            /**
             * Port is the port to be used in the value of the `Location`
             * header in the response.
             *
             * If no port is specified, the redirect port MUST be derived using the
             * following rules:
             *
             * * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *   port associated with the redirect scheme. Specifically "http" to port 80
             *   and "https" to port 443. If the redirect scheme does not have a
             *   well-known port, the listener port of the Gateway SHOULD be used.
             * * If redirect scheme is empty, the redirect port MUST be the Gateway
             *   Listener port.
             *
             * Implementations SHOULD NOT add the port number in the 'Location'
             * header in the following cases:
             *
             * * A Location header that will use HTTP (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 80.
             * * A Location header that will use HTTPS (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 443.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in
             * the response. When empty, the scheme of the request is used.
             *
             * Scheme redirects can affect the port of the redirect, for more information,
             * refer to the documentation for the port field of this filter.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Extended
             */
            scheme?: pulumi.Input<string>;
            /**
             * StatusCode is the HTTP status code to be used in response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Core
             */
            statusCode?: pulumi.Input<number>;
        }
        /**
         * RequestRedirect defines a schema for a filter that responds to the
         * request with an HTTP redirection.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPatch {
            /**
             * Hostname is the hostname to be used in the value of the `Location`
             * header in the response.
             * When empty, the hostname in the `Host` header of the request is used.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPathPatch>;
            /**
             * Port is the port to be used in the value of the `Location`
             * header in the response.
             *
             * If no port is specified, the redirect port MUST be derived using the
             * following rules:
             *
             * * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *   port associated with the redirect scheme. Specifically "http" to port 80
             *   and "https" to port 443. If the redirect scheme does not have a
             *   well-known port, the listener port of the Gateway SHOULD be used.
             * * If redirect scheme is empty, the redirect port MUST be the Gateway
             *   Listener port.
             *
             * Implementations SHOULD NOT add the port number in the 'Location'
             * header in the following cases:
             *
             * * A Location header that will use HTTP (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 80.
             * * A Location header that will use HTTPS (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 443.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in
             * the response. When empty, the scheme of the request is used.
             *
             * Scheme redirects can affect the port of the redirect, for more information,
             * refer to the documentation for the port field of this filter.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Extended
             */
            scheme?: pulumi.Input<string>;
            /**
             * StatusCode is the HTTP status code to be used in response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Core
             */
            statusCode?: pulumi.Input<number>;
        }
        /**
         * Path defines parameters used to modify the path of the incoming request.
         * The modified path is then used to construct the `Location` header. When
         * empty, the request path is used as-is.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPath {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Path defines parameters used to modify the path of the incoming request.
         * The modified path is then used to construct the `Location` header. When
         * empty, the request path is used as-is.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersRequestRedirectPathPatch {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersResponseHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * URLRewrite defines a schema for a filter that modifies a request during forwarding.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersUrlRewrite {
            /**
             * Hostname is the value to be used to replace the Host header value during
             * forwarding.
             *
             * Support: Extended
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePath>;
        }
        /**
         * URLRewrite defines a schema for a filter that modifies a request during forwarding.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePatch {
            /**
             * Hostname is the value to be used to replace the Host header value during
             * forwarding.
             *
             * Support: Extended
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePathPatch>;
        }
        /**
         * Path defines a path rewrite.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePath {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Path defines a path rewrite.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesBackendRefsFiltersUrlRewritePathPatch {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * HTTPBackendRef defines how a HTTPRoute forwards a HTTP request.
         *
         * Note that when a namespace different than the local namespace is specified, a
         * ReferenceGrant object is required in the referent namespace to allow that
         * namespace's owner to accept the reference. See the ReferenceGrant
         * documentation for details.
         *
         * <gateway:experimental:description>
         *
         * When the BackendRef points to a Kubernetes Service, implementations SHOULD
         * honor the appProtocol field if it is set for the target Service Port.
         *
         * Implementations supporting appProtocol SHOULD recognize the Kubernetes
         * Standard Application Protocols defined in KEP-3726.
         *
         * If a Service appProtocol isn't specified, an implementation MAY infer the
         * backend protocol through its own means. Implementations MAY infer the
         * protocol from the Route type referring to the backend Service.
         *
         * If a Route is not able to send traffic to the backend using the specified
         * protocol then the backend is considered invalid. Implementations MUST set the
         * "ResolvedRefs" condition to "False" with the "UnsupportedProtocol" reason.
         *
         * </gateway:experimental:description>
         */
        interface HTTPRouteSpecRulesBackendRefsPatch {
            /**
             * Filters defined at this level should be executed if and only if the
             * request is being forwarded to the backend defined here.
             *
             * Support: Implementation-specific (For broader support of filters, use the
             * Filters field in HTTPRouteRule.)
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsFiltersPatch>[]>;
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
            /**
             * Weight specifies the proportion of requests forwarded to the referenced
             * backend. This is computed as weight/(sum of all weights in this
             * BackendRefs list). For non-zero values, there may be some epsilon from
             * the exact proportion defined here depending on the precision an
             * implementation supports. Weight is not a percentage and the sum of
             * weights does not need to equal 100.
             *
             * If only one backend is specified and it has a weight greater than 0, 100%
             * of the traffic is forwarded to that backend. If weight is set to 0, no
             * traffic should be forwarded for this entry. If unspecified, weight
             * defaults to 1.
             *
             * Support for this field varies based on the context where used.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * HTTPRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. HTTPRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface HTTPRouteSpecRulesFilters {
            extensionRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersExtensionRef>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestHeaderModifier>;
            requestMirror?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestMirror>;
            requestRedirect?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestRedirect>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersResponseHeaderModifier>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations must support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by
             *   specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` should be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
            urlRewrite?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersUrlRewrite>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * This filter can be used multiple times within the same rule.
         *
         * Support: Implementation-specific
         */
        interface HTTPRouteSpecRulesFiltersExtensionRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ExtensionRef is an optional, implementation-specific extension to the
         * "filter" behavior.  For example, resource "myroutefilter" in group
         * "networking.example.net"). ExtensionRef MUST NOT be used for core and
         * extended filters.
         *
         * This filter can be used multiple times within the same rule.
         *
         * Support: Implementation-specific
         */
        interface HTTPRouteSpecRulesFiltersExtensionRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent. For example "HTTPRoute" or "Service".
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteFilter defines processing steps that must be completed during the
         * request or response lifecycle. HTTPRouteFilters are meant as an extension
         * point to express processing that may be done in Gateway implementations. Some
         * examples include request or response modification, implementing
         * authentication strategies, rate-limiting, and traffic shaping. API
         * guarantee/conformance is defined based on the type of the filter.
         */
        interface HTTPRouteSpecRulesFiltersPatch {
            extensionRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersExtensionRefPatch>;
            requestHeaderModifier?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestHeaderModifierPatch>;
            requestMirror?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestMirrorPatch>;
            requestRedirect?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestRedirectPatch>;
            responseHeaderModifier?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersResponseHeaderModifierPatch>;
            /**
             * Type identifies the type of filter to apply. As with other API fields,
             * types are classified into three conformance levels:
             *
             * - Core: Filter types and their corresponding configuration defined by
             *   "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *   implementations must support core filters.
             *
             * - Extended: Filter types and their corresponding configuration defined by
             *   "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *   are encouraged to support extended filters.
             *
             * - Implementation-specific: Filters that are defined and supported by
             *   specific vendors.
             *   In the future, filters showing convergence in behavior across multiple
             *   implementations will be considered for inclusion in extended or core
             *   conformance levels. Filter-specific configuration for such filters
             *   is specified using the ExtensionRef field. `Type` should be set to
             *   "ExtensionRef" for custom filters.
             *
             * Implementers are encouraged to define custom implementation types to
             * extend the core API with implementation-specific behavior.
             *
             * If a reference to a custom filter type cannot be resolved, the filter
             * MUST NOT be skipped. Instead, requests that would have been processed by
             * that filter MUST receive a HTTP error response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
            urlRewrite?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersUrlRewritePatch>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request
         * headers.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersRequestHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersRequestMirror {
            backendRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestMirrorBackendRef>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface HTTPRouteSpecRulesFiltersRequestMirrorBackendRef {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * BackendRef references a resource where mirrored requests are sent.
         *
         * Mirrored requests must be sent only to a single destination endpoint
         * within this BackendRef, irrespective of how many endpoints are present
         * within this BackendRef.
         *
         * If the referent cannot be found, this BackendRef is invalid and must be
         * dropped from the Gateway. The controller must ensure the "ResolvedRefs"
         * condition on the Route status is set to `status: False` and not configure
         * this backend in the underlying implementation.
         *
         * If there is a cross-namespace reference to an *existing* object
         * that is not allowed by a ReferenceGrant, the controller must ensure the
         * "ResolvedRefs"  condition on the Route is set to `status: False`,
         * with the "RefNotPermitted" reason and not configure this backend in the
         * underlying implementation.
         *
         * In either error case, the Message of the `ResolvedRefs` Condition
         * should be used to provide more detail about the problem.
         *
         * Support: Extended for Kubernetes Service
         *
         * Support: Implementation-specific for any other resource
         */
        interface HTTPRouteSpecRulesFiltersRequestMirrorBackendRefPatch {
            /**
             * Group is the group of the referent. For example, "gateway.networking.k8s.io".
             * When unspecified or empty string, core API group is inferred.
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the Kubernetes resource kind of the referent. For example
             * "Service".
             *
             * Defaults to "Service" when not specified.
             *
             * ExternalName services can refer to CNAME DNS records that may live
             * outside of the cluster and as such are difficult to reason about in
             * terms of conformance. They also may not be safe to forward to (see
             * CVE-2021-25740 for more information). Implementations SHOULD NOT
             * support ExternalName Services.
             *
             * Support: Core (Services with a type other than ExternalName)
             *
             * Support: Implementation-specific (Services with type ExternalName)
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the backend. When unspecified, the local
             * namespace is inferred.
             *
             * Note that when a namespace different than the local namespace is specified,
             * a ReferenceGrant object is required in the referent namespace to allow that
             * namespace's owner to accept the reference. See the ReferenceGrant
             * documentation for details.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port specifies the destination port number to use for this resource.
             * Port is required when the referent is a Kubernetes Service. In this
             * case, the port number is the service port number, not the target port.
             * For other resources, destination port might be derived from the referent
             * resource or this field.
             */
            port?: pulumi.Input<number>;
        }
        /**
         * RequestMirror defines a schema for a filter that mirrors requests.
         * Requests are sent to the specified destination, but responses from
         * that destination are ignored.
         *
         * This filter can be used multiple times within the same rule. Note that
         * not all implementations will be able to support mirroring to multiple
         * backends.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersRequestMirrorPatch {
            backendRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestMirrorBackendRefPatch>;
        }
        /**
         * RequestRedirect defines a schema for a filter that responds to the
         * request with an HTTP redirection.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesFiltersRequestRedirect {
            /**
             * Hostname is the hostname to be used in the value of the `Location`
             * header in the response.
             * When empty, the hostname in the `Host` header of the request is used.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestRedirectPath>;
            /**
             * Port is the port to be used in the value of the `Location`
             * header in the response.
             *
             * If no port is specified, the redirect port MUST be derived using the
             * following rules:
             *
             * * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *   port associated with the redirect scheme. Specifically "http" to port 80
             *   and "https" to port 443. If the redirect scheme does not have a
             *   well-known port, the listener port of the Gateway SHOULD be used.
             * * If redirect scheme is empty, the redirect port MUST be the Gateway
             *   Listener port.
             *
             * Implementations SHOULD NOT add the port number in the 'Location'
             * header in the following cases:
             *
             * * A Location header that will use HTTP (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 80.
             * * A Location header that will use HTTPS (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 443.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in
             * the response. When empty, the scheme of the request is used.
             *
             * Scheme redirects can affect the port of the redirect, for more information,
             * refer to the documentation for the port field of this filter.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Extended
             */
            scheme?: pulumi.Input<string>;
            /**
             * StatusCode is the HTTP status code to be used in response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Core
             */
            statusCode?: pulumi.Input<number>;
        }
        /**
         * RequestRedirect defines a schema for a filter that responds to the
         * request with an HTTP redirection.
         *
         * Support: Core
         */
        interface HTTPRouteSpecRulesFiltersRequestRedirectPatch {
            /**
             * Hostname is the hostname to be used in the value of the `Location`
             * header in the response.
             * When empty, the hostname in the `Host` header of the request is used.
             *
             * Support: Core
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersRequestRedirectPathPatch>;
            /**
             * Port is the port to be used in the value of the `Location`
             * header in the response.
             *
             * If no port is specified, the redirect port MUST be derived using the
             * following rules:
             *
             * * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *   port associated with the redirect scheme. Specifically "http" to port 80
             *   and "https" to port 443. If the redirect scheme does not have a
             *   well-known port, the listener port of the Gateway SHOULD be used.
             * * If redirect scheme is empty, the redirect port MUST be the Gateway
             *   Listener port.
             *
             * Implementations SHOULD NOT add the port number in the 'Location'
             * header in the following cases:
             *
             * * A Location header that will use HTTP (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 80.
             * * A Location header that will use HTTPS (whether that is determined via
             *   the Listener protocol or the Scheme field) _and_ use port 443.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in
             * the response. When empty, the scheme of the request is used.
             *
             * Scheme redirects can affect the port of the redirect, for more information,
             * refer to the documentation for the port field of this filter.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Extended
             */
            scheme?: pulumi.Input<string>;
            /**
             * StatusCode is the HTTP status code to be used in response.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             *
             * Support: Core
             */
            statusCode?: pulumi.Input<number>;
        }
        /**
         * Path defines parameters used to modify the path of the incoming request.
         * The modified path is then used to construct the `Location` header. When
         * empty, the request path is used as-is.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersRequestRedirectPath {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Path defines parameters used to modify the path of the incoming request.
         * The modified path is then used to construct the `Location` header. When
         * empty, the request path is used as-is.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersRequestRedirectPathPatch {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifier {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersResponseHeaderModifierAdd>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersResponseHeaderModifierSet>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierAdd {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierAddPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * ResponseHeaderModifier defines a schema for a filter that modifies response
         * headers.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierPatch {
            /**
             * Add adds the given header(s) (name, value) to the request
             * before the action. It appends to any existing values associated
             * with the header name.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   add:
             *   - name: "my-header"
             *     value: "bar,baz"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: foo,bar,baz
             */
            add?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersResponseHeaderModifierAddPatch>[]>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The
             * value of Remove is a list of HTTP header names. Note that the header
             * names are case-insensitive (see
             * https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header1: foo
             *   my-header2: bar
             *   my-header3: baz
             *
             * Config:
             *   remove: ["my-header1", "my-header3"]
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header2: bar
             */
            remove?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Set overwrites the request with the given header (name, value)
             * before the action.
             *
             * Input:
             *   GET /foo HTTP/1.1
             *   my-header: foo
             *
             * Config:
             *   set:
             *   - name: "my-header"
             *     value: "bar"
             *
             * Output:
             *   GET /foo HTTP/1.1
             *   my-header: bar
             */
            set?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersResponseHeaderModifierSetPatch>[]>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierSet {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.
         */
        interface HTTPRouteSpecRulesFiltersResponseHeaderModifierSetPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, the first entry with
             * an equivalent name MUST be considered for a match. Subsequent entries
             * with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             */
            name?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * URLRewrite defines a schema for a filter that modifies a request during forwarding.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersUrlRewrite {
            /**
             * Hostname is the value to be used to replace the Host header value during
             * forwarding.
             *
             * Support: Extended
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersUrlRewritePath>;
        }
        /**
         * URLRewrite defines a schema for a filter that modifies a request during forwarding.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersUrlRewritePatch {
            /**
             * Hostname is the value to be used to replace the Host header value during
             * forwarding.
             *
             * Support: Extended
             */
            hostname?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersUrlRewritePathPatch>;
        }
        /**
         * Path defines a path rewrite.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersUrlRewritePath {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Path defines a path rewrite.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesFiltersUrlRewritePathPatch {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path
             * of a request during a rewrite or redirect.
             */
            replaceFullPath?: pulumi.Input<string>;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix
             * match of a request during a rewrite or redirect. For example, a request
             * to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
             * of "/xyz" would be modified to "/xyz/bar".
             *
             * Note that this matches the behavior of the PathPrefix match type. This
             * matches full path elements. A path element refers to the list of labels
             * in the path split by the `/` separator. When specified, a trailing `/` is
             * ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
             * match the prefix `/abc`, but the path `/abcd` would not.
             *
             * ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
             * Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
             * the implementation setting the Accepted Condition for the Route to `status: False`.
             *
             * Request Path | Prefix Match | Replace Prefix | Modified Path
             */
            replacePrefixMatch?: pulumi.Input<string>;
            /**
             * Type defines the type of path modifier. Additional types may be
             * added in a future release of the API.
             *
             * Note that values may be added to this enum, implementations
             * must ensure that unknown values will not cause a crash.
             *
             * Unknown values here must result in the implementation setting the
             * Accepted Condition for the Route to `status: False`, with a
             * Reason of `UnsupportedValue`.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteMatch defines the predicate used to match requests to a given
         * action. Multiple match types are ANDed together, i.e. the match will
         * evaluate to true only if all conditions are satisfied.
         *
         * For example, the match below will match a HTTP request only if its path
         * starts with `/foo` AND it contains the `version: v1` header:
         *
         * ```
         * match:
         *
         * 	path:
         * 	  value: "/foo"
         * 	headers:
         * 	- name: "version"
         * 	  value "v1"
         *
         * ```
         */
        interface HTTPRouteSpecRulesMatches {
            /**
             * Headers specifies HTTP request header matchers. Multiple match values are
             * ANDed together, meaning, a request must match all the specified headers
             * to select the route.
             */
            headers?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesMatchesHeaders>[]>;
            /**
             * Method specifies HTTP method matcher.
             * When specified, this route will be matched only if the request has the
             * specified method.
             *
             * Support: Extended
             */
            method?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesMatchesPath>;
            /**
             * QueryParams specifies HTTP query parameter matchers. Multiple match
             * values are ANDed together, meaning, a request must match all the
             * specified query parameters to select the route.
             *
             * Support: Extended
             */
            queryParams?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesMatchesQueryParams>[]>;
        }
        /**
         * HTTPHeaderMatch describes how to select a HTTP route by matching HTTP request
         * headers.
         */
        interface HTTPRouteSpecRulesMatchesHeaders {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             *
             * When a header is repeated in an HTTP request, it is
             * implementation-specific behavior as to how this is represented.
             * Generally, proxies should follow the guidance from the RFC:
             * https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding
             * processing a repeated header, with special handling for "Set-Cookie".
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the header.
             *
             * Support: Core (Exact)
             *
             * Support: Implementation-specific (RegularExpression)
             *
             * Since RegularExpression HeaderMatchType has implementation-specific
             * conformance, implementations can support POSIX, PCRE or any other dialects
             * of regular expressions. Please read the implementation's documentation to
             * determine the supported dialect.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPHeaderMatch describes how to select a HTTP route by matching HTTP request
         * headers.
         */
        interface HTTPRouteSpecRulesMatchesHeadersPatch {
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be
             * case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             * If multiple entries specify equivalent header names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent header name MUST be ignored. Due to the
             * case-insensitivity of header names, "foo" and "Foo" are considered
             * equivalent.
             *
             * When a header is repeated in an HTTP request, it is
             * implementation-specific behavior as to how this is represented.
             * Generally, proxies should follow the guidance from the RFC:
             * https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding
             * processing a repeated header, with special handling for "Set-Cookie".
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the header.
             *
             * Support: Core (Exact)
             *
             * Support: Implementation-specific (RegularExpression)
             *
             * Since RegularExpression HeaderMatchType has implementation-specific
             * conformance, implementations can support POSIX, PCRE or any other dialects
             * of regular expressions. Please read the implementation's documentation to
             * determine the supported dialect.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteMatch defines the predicate used to match requests to a given
         * action. Multiple match types are ANDed together, i.e. the match will
         * evaluate to true only if all conditions are satisfied.
         *
         * For example, the match below will match a HTTP request only if its path
         * starts with `/foo` AND it contains the `version: v1` header:
         *
         * ```
         * match:
         *
         * 	path:
         * 	  value: "/foo"
         * 	headers:
         * 	- name: "version"
         * 	  value "v1"
         *
         * ```
         */
        interface HTTPRouteSpecRulesMatchesPatch {
            /**
             * Headers specifies HTTP request header matchers. Multiple match values are
             * ANDed together, meaning, a request must match all the specified headers
             * to select the route.
             */
            headers?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesMatchesHeadersPatch>[]>;
            /**
             * Method specifies HTTP method matcher.
             * When specified, this route will be matched only if the request has the
             * specified method.
             *
             * Support: Extended
             */
            method?: pulumi.Input<string>;
            path?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesMatchesPathPatch>;
            /**
             * QueryParams specifies HTTP query parameter matchers. Multiple match
             * values are ANDed together, meaning, a request must match all the
             * specified query parameters to select the route.
             *
             * Support: Extended
             */
            queryParams?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesMatchesQueryParamsPatch>[]>;
        }
        /**
         * Path specifies a HTTP request path matcher. If this field is not
         * specified, a default prefix match on the "/" path is provided.
         */
        interface HTTPRouteSpecRulesMatchesPath {
            /**
             * Type specifies how to match against the path Value.
             *
             * Support: Core (Exact, PathPrefix)
             *
             * Support: Implementation-specific (RegularExpression)
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the HTTP path to match against.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Path specifies a HTTP request path matcher. If this field is not
         * specified, a default prefix match on the "/" path is provided.
         */
        interface HTTPRouteSpecRulesMatchesPathPatch {
            /**
             * Type specifies how to match against the path Value.
             *
             * Support: Core (Exact, PathPrefix)
             *
             * Support: Implementation-specific (RegularExpression)
             */
            type?: pulumi.Input<string>;
            /**
             * Value of the HTTP path to match against.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPQueryParamMatch describes how to select a HTTP route by matching HTTP
         * query parameters.
         */
        interface HTTPRouteSpecRulesMatchesQueryParams {
            /**
             * Name is the name of the HTTP query param to be matched. This must be an
             * exact string match. (See
             * https://tools.ietf.org/html/rfc7230#section-2.7.3).
             *
             * If multiple entries specify equivalent query param names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent query param name MUST be ignored.
             *
             * If a query param is repeated in an HTTP request, the behavior is
             * purposely left undefined, since different data planes have different
             * capabilities. However, it is *recommended* that implementations should
             * match against the first value of the param if the data plane supports it,
             * as this behavior is expected in other load balancing contexts outside of
             * the Gateway API.
             *
             * Users SHOULD NOT route traffic based on repeated query params to guard
             * themselves against potential differences in the implementations.
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the query parameter.
             *
             * Support: Extended (Exact)
             *
             * Support: Implementation-specific (RegularExpression)
             *
             * Since RegularExpression QueryParamMatchType has Implementation-specific
             * conformance, implementations can support POSIX, PCRE or any other
             * dialects of regular expressions. Please read the implementation's
             * documentation to determine the supported dialect.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP query param to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPQueryParamMatch describes how to select a HTTP route by matching HTTP
         * query parameters.
         */
        interface HTTPRouteSpecRulesMatchesQueryParamsPatch {
            /**
             * Name is the name of the HTTP query param to be matched. This must be an
             * exact string match. (See
             * https://tools.ietf.org/html/rfc7230#section-2.7.3).
             *
             * If multiple entries specify equivalent query param names, only the first
             * entry with an equivalent name MUST be considered for a match. Subsequent
             * entries with an equivalent query param name MUST be ignored.
             *
             * If a query param is repeated in an HTTP request, the behavior is
             * purposely left undefined, since different data planes have different
             * capabilities. However, it is *recommended* that implementations should
             * match against the first value of the param if the data plane supports it,
             * as this behavior is expected in other load balancing contexts outside of
             * the Gateway API.
             *
             * Users SHOULD NOT route traffic based on repeated query params to guard
             * themselves against potential differences in the implementations.
             */
            name?: pulumi.Input<string>;
            /**
             * Type specifies how to match against the value of the query parameter.
             *
             * Support: Extended (Exact)
             *
             * Support: Implementation-specific (RegularExpression)
             *
             * Since RegularExpression QueryParamMatchType has Implementation-specific
             * conformance, implementations can support POSIX, PCRE or any other
             * dialects of regular expressions. Please read the implementation's
             * documentation to determine the supported dialect.
             */
            type?: pulumi.Input<string>;
            /**
             * Value is the value of HTTP query param to be matched.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * HTTPRouteRule defines semantics for matching an HTTP request based on
         * conditions (matches), processing it (filters), and forwarding the request to
         * an API object (backendRefs).
         */
        interface HTTPRouteSpecRulesPatch {
            /**
             * BackendRefs defines the backend(s) where matching requests should be
             * sent.
             *
             * Failure behavior here depends on how many BackendRefs are specified and
             * how many are invalid.
             *
             * If *all* entries in BackendRefs are invalid, and there are also no filters
             * specified in this route rule, *all* traffic which matches this rule MUST
             * receive a 500 status code.
             *
             * See the HTTPBackendRef definition for the rules about what makes a single
             * HTTPBackendRef invalid.
             *
             * When a HTTPBackendRef is invalid, 500 status codes MUST be returned for
             * requests that would have otherwise been routed to an invalid backend. If
             * multiple backends are specified, and some are invalid, the proportion of
             * requests that would otherwise have been routed to an invalid backend
             * MUST receive a 500 status code.
             *
             * For example, if two backends are specified with equal weights, and one is
             * invalid, 50 percent of traffic must receive a 500. Implementations may
             * choose how that 50 percent is determined.
             *
             * When a HTTPBackendRef refers to a Service that has no ready endpoints,
             * implementations SHOULD return a 503 for requests to that backend instead.
             * If an implementation chooses to do this, all of the above rules for 500 responses
             * MUST also apply for responses that return a 503.
             *
             * Support: Core for Kubernetes Service
             *
             * Support: Extended for Kubernetes ServiceImport
             *
             * Support: Implementation-specific for any other resource
             *
             * Support for weight: Core
             */
            backendRefs?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesBackendRefsPatch>[]>;
            /**
             * Filters define the filters that are applied to requests that match
             * this rule.
             *
             * Wherever possible, implementations SHOULD implement filters in the order
             * they are specified.
             *
             * Implementations MAY choose to implement this ordering strictly, rejecting
             * any combination or order of filters that can not be supported. If implementations
             * choose a strict interpretation of filter ordering, they MUST clearly document
             * that behavior.
             *
             * To reject an invalid combination or order of filters, implementations SHOULD
             * consider the Route Rules with this configuration invalid. If all Route Rules
             * in a Route are invalid, the entire Route would be considered invalid. If only
             * a portion of Route Rules are invalid, implementations MUST set the
             * "PartiallyInvalid" condition for the Route.
             *
             * Conformance-levels at this level are defined based on the type of filter:
             *
             * - ALL core filters MUST be supported by all implementations.
             * - Implementers are encouraged to support extended filters.
             * - Implementation-specific custom filters have no API guarantees across
             *   implementations.
             *
             * Specifying the same filter multiple times is not supported unless explicitly
             * indicated in the filter.
             *
             * All filters are expected to be compatible with each other except for the
             * URLRewrite and RequestRedirect filters, which may not be combined. If an
             * implementation can not support other combinations of filters, they must clearly
             * document that limitation. In cases where incompatible or unsupported
             * filters are specified and cause the `Accepted` condition to be set to status
             * `False`, implementations may use the `IncompatibleFilters` reason to specify
             * this configuration error.
             *
             * Support: Core
             */
            filters?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesFiltersPatch>[]>;
            /**
             * Matches define conditions used for matching the rule against incoming
             * HTTP requests. Each match is independent, i.e. this rule will be matched
             * if **any** one of the matches is satisfied.
             *
             * For example, take the following matches configuration:
             *
             * ```
             * matches:
             * - path:
             *     value: "/foo"
             *   headers:
             *   - name: "version"
             *     value: "v2"
             * - path:
             *     value: "/v2/foo"
             * ```
             *
             * For a request to match against this rule, a request must satisfy
             * EITHER of the two conditions:
             *
             * - path prefixed with `/foo` AND contains the header `version: v2`
             * - path prefix of `/v2/foo`
             *
             * See the documentation for HTTPRouteMatch on how to specify multiple
             * match conditions that should be ANDed together.
             *
             * If no matches are specified, the default is a prefix
             * path match on "/", which has the effect of matching every
             * HTTP request.
             *
             * Proxy or Load Balancer routing configuration generated from HTTPRoutes
             * MUST prioritize matches based on the following criteria, continuing on
             * ties. Across all rules specified on applicable Routes, precedence must be
             * given to the match having:
             *
             * * "Exact" path match.
             * * "Prefix" path match with largest number of characters.
             * * Method match.
             * * Largest number of header matches.
             * * Largest number of query param matches.
             *
             * Note: The precedence of RegularExpression path matches are implementation-specific.
             *
             * If ties still exist across multiple Routes, matching precedence MUST be
             * determined in order of the following criteria, continuing on ties:
             *
             * * The oldest Route based on creation timestamp.
             * * The Route appearing first in alphabetical order by
             *   "{namespace}/{name}".
             *
             * If ties still exist within an HTTPRoute, matching precedence MUST be granted
             * to the FIRST matching rule (in list order) with a match meeting the above
             * criteria.
             *
             * When no rules matching a request have been successfully attached to the
             * parent a request is coming from, a HTTP 404 status code MUST be returned.
             */
            matches?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesMatchesPatch>[]>;
            timeouts?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteSpecRulesTimeoutsPatch>;
        }
        /**
         * Timeouts defines the timeouts that can be configured for an HTTP request.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesTimeouts {
            /**
             * BackendRequest specifies a timeout for an individual request from the gateway
             * to a backend. This covers the time from when the request first starts being
             * sent from the gateway to when the full response has been received from the backend.
             *
             * Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             * completely. Implementations that cannot completely disable the timeout MUST
             * instead interpret the zero duration as the longest possible value to which
             * the timeout can be set.
             *
             * An entire client HTTP transaction with a gateway, covered by the Request timeout,
             * may result in more than one call from the gateway to the destination backend,
             * for example, if automatic retries are supported.
             *
             * The value of BackendRequest must be a Gateway API Duration string as defined by
             * GEP-2257.  When this field is unspecified, its behavior is implementation-specific;
             * when specified, the value of BackendRequest must be no more than the value of the
             * Request timeout (since the Request timeout encompasses the BackendRequest timeout).
             *
             * Support: Extended
             */
            backendRequest?: pulumi.Input<string>;
            /**
             * Request specifies the maximum duration for a gateway to respond to an HTTP request.
             * If the gateway has not been able to respond before this deadline is met, the gateway
             * MUST return a timeout error.
             *
             * For example, setting the `rules.timeouts.request` field to the value `10s` in an
             * `HTTPRoute` will cause a timeout if a client request is taking longer than 10 seconds
             * to complete.
             *
             * Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             * completely. Implementations that cannot completely disable the timeout MUST
             * instead interpret the zero duration as the longest possible value to which
             * the timeout can be set.
             *
             * This timeout is intended to cover as close to the whole request-response transaction
             * as possible although an implementation MAY choose to start the timeout after the entire
             * request stream has been received instead of immediately after the transaction is
             * initiated by the client.
             *
             * The value of Request is a Gateway API Duration string as defined by GEP-2257. When this
             * field is unspecified, request timeout behavior is implementation-specific.
             *
             * Support: Extended
             */
            request?: pulumi.Input<string>;
        }
        /**
         * Timeouts defines the timeouts that can be configured for an HTTP request.
         *
         * Support: Extended
         */
        interface HTTPRouteSpecRulesTimeoutsPatch {
            /**
             * BackendRequest specifies a timeout for an individual request from the gateway
             * to a backend. This covers the time from when the request first starts being
             * sent from the gateway to when the full response has been received from the backend.
             *
             * Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             * completely. Implementations that cannot completely disable the timeout MUST
             * instead interpret the zero duration as the longest possible value to which
             * the timeout can be set.
             *
             * An entire client HTTP transaction with a gateway, covered by the Request timeout,
             * may result in more than one call from the gateway to the destination backend,
             * for example, if automatic retries are supported.
             *
             * The value of BackendRequest must be a Gateway API Duration string as defined by
             * GEP-2257.  When this field is unspecified, its behavior is implementation-specific;
             * when specified, the value of BackendRequest must be no more than the value of the
             * Request timeout (since the Request timeout encompasses the BackendRequest timeout).
             *
             * Support: Extended
             */
            backendRequest?: pulumi.Input<string>;
            /**
             * Request specifies the maximum duration for a gateway to respond to an HTTP request.
             * If the gateway has not been able to respond before this deadline is met, the gateway
             * MUST return a timeout error.
             *
             * For example, setting the `rules.timeouts.request` field to the value `10s` in an
             * `HTTPRoute` will cause a timeout if a client request is taking longer than 10 seconds
             * to complete.
             *
             * Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             * completely. Implementations that cannot completely disable the timeout MUST
             * instead interpret the zero duration as the longest possible value to which
             * the timeout can be set.
             *
             * This timeout is intended to cover as close to the whole request-response transaction
             * as possible although an implementation MAY choose to start the timeout after the entire
             * request stream has been received instead of immediately after the transaction is
             * initiated by the client.
             *
             * The value of Request is a Gateway API Duration string as defined by GEP-2257. When this
             * field is unspecified, request timeout behavior is implementation-specific.
             *
             * Support: Extended
             */
            request?: pulumi.Input<string>;
        }
        /**
         * Status defines the current state of HTTPRoute.
         */
        interface HTTPRouteStatus {
            /**
             * Parents is a list of parent resources (usually Gateways) that are
             * associated with the route, and the status of the route with respect to
             * each parent. When this route attaches to a parent, the controller that
             * manages the parent must add an entry to this list when the controller
             * first sees the route and should update the entry as appropriate when the
             * route or gateway is modified.
             *
             * Note that parent references that cannot be resolved by an implementation
             * of this API will not be added to this list. Implementations of this API
             * can only populate Route status for the Gateways/parent resources they are
             * responsible for.
             *
             * A maximum of 32 Gateways will be represented in this list. An empty list
             * means the route has not been attached to any Gateway.
             */
            parents?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteStatusParents>[]>;
        }
        /**
         * RouteParentStatus describes the status of a route with respect to an
         * associated Parent.
         */
        interface HTTPRouteStatusParents {
            /**
             * Conditions describes the status of the route with respect to the Gateway.
             * Note that the route's availability is also subject to the Gateway's own
             * status conditions and listener status.
             *
             * If the Route's ParentRef specifies an existing Gateway that supports
             * Routes of this kind AND that Gateway's controller has sufficient access,
             * then that Gateway's controller MUST set the "Accepted" condition on the
             * Route, to indicate whether the route has been accepted or rejected by the
             * Gateway, and why.
             *
             * A Route MUST be considered "Accepted" if at least one of the Route's
             * rules is implemented by the Gateway.
             *
             * There are a number of cases where the "Accepted" condition may not be set
             * due to lack of controller visibility, that includes when:
             *
             * * The Route refers to a non-existent parent.
             * * The Route is of a type that the controller does not support.
             * * The Route is in a namespace the controller does not have access to.
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.HTTPRouteStatusParentsConditions>[]>;
            /**
             * ControllerName is a domain/path string that indicates the name of the
             * controller that wrote this status. This corresponds with the
             * controllerName field on GatewayClass.
             *
             * Example: "example.net/gateway-controller".
             *
             * The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are
             * valid Kubernetes names
             * (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
             *
             * Controllers MUST populate this field when writing status. Controllers should ensure that
             * entries to status populated with their ControllerName are cleaned up when they are no
             * longer necessary.
             */
            controllerName?: pulumi.Input<string>;
            parentRef?: pulumi.Input<inputs.gateway.v1beta1.HTTPRouteStatusParentsParentRef>;
        }
        /**
         * Condition contains details for one aspect of the current state of this API Resource.
         */
        interface HTTPRouteStatusParentsConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message?: pulumi.Input<string>;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason?: pulumi.Input<string>;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status?: pulumi.Input<string>;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * ParentRef corresponds with a ParentRef in the spec that this
         * RouteParentStatus struct describes the status of.
         */
        interface HTTPRouteStatusParentsParentRef {
            /**
             * Group is the group of the referent.
             * When unspecified, "gateway.networking.k8s.io" is inferred.
             * To set the core API group (such as for a "Service" kind referent),
             * Group must be explicitly set to "" (empty string).
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is kind of the referent.
             *
             * There are two kinds of parent resources with "Core" support:
             *
             * * Gateway (Gateway conformance profile)
             * * Service (Mesh conformance profile, ClusterIP Services only)
             *
             * Support for other resources is Implementation-Specific.
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent.
             *
             * Support: Core
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers
             * to the local namespace of the Route.
             *
             * Note that there are specific rules for ParentRefs which cross namespace
             * boundaries. Cross-namespace references are only valid if they are explicitly
             * allowed by something in the namespace they are referring to. For example:
             * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             * generic way to enable any other kind of cross-namespace reference.
             *
             *
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
            /**
             * Port is the network port this Route targets. It can be interpreted
             * differently based on the type of parent resource.
             *
             * When the parent resource is a Gateway, this targets all listeners
             * listening on the specified port that also support this kind of Route(and
             * select this Route). It's not recommended to set `Port` unless the
             * networking behaviors specified in a Route must apply to a specific port
             * as opposed to a listener(s) whose port(s) may be changed. When both Port
             * and SectionName are specified, the name and port of the selected listener
             * must match both specified values.
             *
             *
             *
             * Implementations MAY choose to support other parent resources.
             * Implementations supporting other types of parent resources MUST clearly
             * document how/if Port is interpreted.
             *
             * For the purpose of status, an attachment is considered successful as
             * long as the parent resource accepts it partially. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             * from the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route,
             * the Route MUST be considered detached from the Gateway.
             *
             * Support: Extended
             */
            port?: pulumi.Input<number>;
            /**
             * SectionName is the name of a section within the target resource. In the
             * following resources, SectionName is interpreted as the following:
             *
             * * Gateway: Listener name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             * * Service: Port name. When both Port (experimental) and SectionName
             * are specified, the name and port of the selected listener must match
             * both specified values.
             *
             * Implementations MAY choose to support attaching Routes to other resources.
             * If that is the case, they MUST clearly document how SectionName is
             * interpreted.
             *
             * When unspecified (empty string), this will reference the entire resource.
             * For the purpose of status, an attachment is considered successful if at
             * least one section in the parent resource accepts it. For example, Gateway
             * listeners can restrict which Routes can attach to them by Route kind,
             * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             * the referencing Route, the Route MUST be considered successfully
             * attached. If no Gateway listeners accept attachment from this Route, the
             * Route MUST be considered detached from the Gateway.
             *
             * Support: Core
             */
            sectionName?: pulumi.Input<string>;
        }
        /**
         * ReferenceGrant identifies kinds of resources in other namespaces that are
         * trusted to reference the specified kinds of resources in the same namespace
         * as the policy.
         *
         * Each ReferenceGrant can be used to represent a unique trust relationship.
         * Additional Reference Grants can be used to add to the set of trusted
         * sources of inbound references for the namespace they are defined within.
         *
         * All cross-namespace references in Gateway API (with the exception of cross-namespace
         * Gateway-route attachment) require a ReferenceGrant.
         *
         * ReferenceGrant is a form of runtime verification allowing users to assert
         * which cross-namespace object references are permitted. Implementations that
         * support ReferenceGrant MUST NOT permit cross-namespace references which have
         * no grant, and MUST respond to the removal of a grant by revoking the access
         * that the grant allowed.
         */
        interface ReferenceGrant {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"gateway.networking.k8s.io/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"ReferenceGrant">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.gateway.v1beta1.ReferenceGrantSpec>;
        }
        /**
         * Spec defines the desired state of ReferenceGrant.
         */
        interface ReferenceGrantSpec {
            /**
             * From describes the trusted namespaces and kinds that can reference the
             * resources described in "To". Each entry in this list MUST be considered
             * to be an additional place that references can be valid from, or to put
             * this another way, entries MUST be combined using OR.
             *
             * Support: Core
             */
            from?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.ReferenceGrantSpecFrom>[]>;
            /**
             * To describes the resources that may be referenced by the resources
             * described in "From". Each entry in this list MUST be considered to be an
             * additional place that references can be valid to, or to put this another
             * way, entries MUST be combined using OR.
             *
             * Support: Core
             */
            to?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.ReferenceGrantSpecTo>[]>;
        }
        /**
         * ReferenceGrantFrom describes trusted namespaces and kinds.
         */
        interface ReferenceGrantSpecFrom {
            /**
             * Group is the group of the referent.
             * When empty, the Kubernetes core API group is inferred.
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the referent. Although implementations may support
             * additional resources, the following types are part of the "Core"
             * support level for this field.
             *
             * When used to permit a SecretObjectReference:
             *
             * * Gateway
             *
             * When used to permit a BackendObjectReference:
             *
             * * GRPCRoute
             * * HTTPRoute
             * * TCPRoute
             * * TLSRoute
             * * UDPRoute
             */
            kind?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * ReferenceGrantFrom describes trusted namespaces and kinds.
         */
        interface ReferenceGrantSpecFromPatch {
            /**
             * Group is the group of the referent.
             * When empty, the Kubernetes core API group is inferred.
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the referent. Although implementations may support
             * additional resources, the following types are part of the "Core"
             * support level for this field.
             *
             * When used to permit a SecretObjectReference:
             *
             * * Gateway
             *
             * When used to permit a BackendObjectReference:
             *
             * * GRPCRoute
             * * HTTPRoute
             * * TCPRoute
             * * TLSRoute
             * * UDPRoute
             */
            kind?: pulumi.Input<string>;
            /**
             * Namespace is the namespace of the referent.
             *
             * Support: Core
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Spec defines the desired state of ReferenceGrant.
         */
        interface ReferenceGrantSpecPatch {
            /**
             * From describes the trusted namespaces and kinds that can reference the
             * resources described in "To". Each entry in this list MUST be considered
             * to be an additional place that references can be valid from, or to put
             * this another way, entries MUST be combined using OR.
             *
             * Support: Core
             */
            from?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.ReferenceGrantSpecFromPatch>[]>;
            /**
             * To describes the resources that may be referenced by the resources
             * described in "From". Each entry in this list MUST be considered to be an
             * additional place that references can be valid to, or to put this another
             * way, entries MUST be combined using OR.
             *
             * Support: Core
             */
            to?: pulumi.Input<pulumi.Input<inputs.gateway.v1beta1.ReferenceGrantSpecToPatch>[]>;
        }
        /**
         * ReferenceGrantTo describes what Kinds are allowed as targets of the
         * references.
         */
        interface ReferenceGrantSpecTo {
            /**
             * Group is the group of the referent.
             * When empty, the Kubernetes core API group is inferred.
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the referent. Although implementations may support
             * additional resources, the following types are part of the "Core"
             * support level for this field:
             *
             * * Secret when used to permit a SecretObjectReference
             * * Service when used to permit a BackendObjectReference
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent. When unspecified, this policy
             * refers to all resources of the specified Group and Kind in the local
             * namespace.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * ReferenceGrantTo describes what Kinds are allowed as targets of the
         * references.
         */
        interface ReferenceGrantSpecToPatch {
            /**
             * Group is the group of the referent.
             * When empty, the Kubernetes core API group is inferred.
             *
             * Support: Core
             */
            group?: pulumi.Input<string>;
            /**
             * Kind is the kind of the referent. Although implementations may support
             * additional resources, the following types are part of the "Core"
             * support level for this field:
             *
             * * Secret when used to permit a SecretObjectReference
             * * Service when used to permit a BackendObjectReference
             */
            kind?: pulumi.Input<string>;
            /**
             * Name is the name of the referent. When unspecified, this policy
             * refers to all resources of the specified Group and Kind in the local
             * namespace.
             */
            name?: pulumi.Input<string>;
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
