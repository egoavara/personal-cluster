import * as outputs from "../types/output";
export declare namespace acme {
    namespace v1 {
        /**
         * Challenge is a type to represent a Challenge request with an ACME server
         */
        interface Challenge {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "acme.cert-manager.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Challenge";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.acme.v1.ChallengeSpec;
            status: outputs.acme.v1.ChallengeStatus;
        }
        interface ChallengeSpec {
            /**
             * The URL to the ACME Authorization resource that this challenge is a part of.
             */
            authorizationURL: string;
            /**
             * dnsName is the identifier that this challenge is for, e.g. example.com. If the requested DNSName is a 'wildcard', this field MUST be set to the non-wildcard domain, e.g. for `*.example.com`, it must be `example.com`.
             */
            dnsName: string;
            issuerRef: outputs.acme.v1.ChallengeSpecIssuerRef;
            /**
             * The ACME challenge key for this challenge For HTTP01 challenges, this is the value that must be responded with to complete the HTTP01 challenge in the format: `<private key JWK thumbprint>.<key from acme server for challenge>`. For DNS01 challenges, this is the base64 encoded SHA256 sum of the `<private key JWK thumbprint>.<key from acme server for challenge>` text that must be set as the TXT record content.
             */
            key: string;
            solver: outputs.acme.v1.ChallengeSpecSolver;
            /**
             * The ACME challenge token for this challenge. This is the raw value returned from the ACME server.
             */
            token: string;
            /**
             * The type of ACME challenge this resource represents. One of "HTTP-01" or "DNS-01".
             */
            type: string;
            /**
             * The URL of the ACME Challenge resource for this challenge. This can be used to lookup details about the status of this challenge.
             */
            url: string;
            /**
             * wildcard will be true if this challenge is for a wildcard identifier, for example '*.example.com'.
             */
            wildcard: boolean;
        }
        /**
         * References a properly configured ACME-type Issuer which should be used to create this Challenge. If the Issuer does not exist, processing will be retried. If the Issuer is not an 'ACME' Issuer, an error will be returned and the Challenge will be marked as failed.
         */
        interface ChallengeSpecIssuerRef {
            /**
             * Group of the resource being referred to.
             */
            group: string;
            /**
             * Kind of the resource being referred to.
             */
            kind: string;
            /**
             * Name of the resource being referred to.
             */
            name: string;
        }
        /**
         * References a properly configured ACME-type Issuer which should be used to create this Challenge. If the Issuer does not exist, processing will be retried. If the Issuer is not an 'ACME' Issuer, an error will be returned and the Challenge will be marked as failed.
         */
        interface ChallengeSpecIssuerRefPatch {
            /**
             * Group of the resource being referred to.
             */
            group: string;
            /**
             * Kind of the resource being referred to.
             */
            kind: string;
            /**
             * Name of the resource being referred to.
             */
            name: string;
        }
        interface ChallengeSpecPatch {
            /**
             * The URL to the ACME Authorization resource that this challenge is a part of.
             */
            authorizationURL: string;
            /**
             * dnsName is the identifier that this challenge is for, e.g. example.com. If the requested DNSName is a 'wildcard', this field MUST be set to the non-wildcard domain, e.g. for `*.example.com`, it must be `example.com`.
             */
            dnsName: string;
            issuerRef: outputs.acme.v1.ChallengeSpecIssuerRefPatch;
            /**
             * The ACME challenge key for this challenge For HTTP01 challenges, this is the value that must be responded with to complete the HTTP01 challenge in the format: `<private key JWK thumbprint>.<key from acme server for challenge>`. For DNS01 challenges, this is the base64 encoded SHA256 sum of the `<private key JWK thumbprint>.<key from acme server for challenge>` text that must be set as the TXT record content.
             */
            key: string;
            solver: outputs.acme.v1.ChallengeSpecSolverPatch;
            /**
             * The ACME challenge token for this challenge. This is the raw value returned from the ACME server.
             */
            token: string;
            /**
             * The type of ACME challenge this resource represents. One of "HTTP-01" or "DNS-01".
             */
            type: string;
            /**
             * The URL of the ACME Challenge resource for this challenge. This can be used to lookup details about the status of this challenge.
             */
            url: string;
            /**
             * wildcard will be true if this challenge is for a wildcard identifier, for example '*.example.com'.
             */
            wildcard: boolean;
        }
        /**
         * Contains the domain solving configuration that should be used to solve this challenge resource.
         */
        interface ChallengeSpecSolver {
            dns01: outputs.acme.v1.ChallengeSpecSolverDns01;
            http01: outputs.acme.v1.ChallengeSpecSolverHttp01;
            selector: outputs.acme.v1.ChallengeSpecSolverSelector;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
         */
        interface ChallengeSpecSolverDns01 {
            acmeDNS: outputs.acme.v1.ChallengeSpecSolverDns01AcmeDNS;
            akamai: outputs.acme.v1.ChallengeSpecSolverDns01Akamai;
            azureDNS: outputs.acme.v1.ChallengeSpecSolverDns01AzureDNS;
            cloudDNS: outputs.acme.v1.ChallengeSpecSolverDns01CloudDNS;
            cloudflare: outputs.acme.v1.ChallengeSpecSolverDns01Cloudflare;
            /**
             * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
             */
            cnameStrategy: string;
            digitalocean: outputs.acme.v1.ChallengeSpecSolverDns01Digitalocean;
            rfc2136: outputs.acme.v1.ChallengeSpecSolverDns01Rfc2136;
            route53: outputs.acme.v1.ChallengeSpecSolverDns01Route53;
            webhook: outputs.acme.v1.ChallengeSpecSolverDns01Webhook;
        }
        /**
         * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01AcmeDNS {
            accountSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AcmeDNSAccountSecretRef;
            host: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01AcmeDNSAccountSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01AcmeDNSAccountSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01AcmeDNSPatch {
            accountSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AcmeDNSAccountSecretRefPatch;
            host: string;
        }
        /**
         * Use the Akamai DNS zone management API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01Akamai {
            accessTokenSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AkamaiAccessTokenSecretRef;
            clientSecretSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AkamaiClientSecretSecretRef;
            clientTokenSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AkamaiClientTokenSecretRef;
            serviceConsumerDomain: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01AkamaiAccessTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01AkamaiAccessTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01AkamaiClientSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01AkamaiClientSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01AkamaiClientTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01AkamaiClientTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Akamai DNS zone management API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01AkamaiPatch {
            accessTokenSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AkamaiAccessTokenSecretRefPatch;
            clientSecretSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AkamaiClientSecretSecretRefPatch;
            clientTokenSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AkamaiClientTokenSecretRefPatch;
            serviceConsumerDomain: string;
        }
        /**
         * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01AzureDNS {
            /**
             * Auth: Azure Service Principal: The ClientID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientSecret and TenantID must also be set.
             */
            clientID: string;
            clientSecretSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AzureDNSClientSecretSecretRef;
            /**
             * name of the Azure environment (default AzurePublicCloud)
             */
            environment: string;
            /**
             * name of the DNS zone that should be used
             */
            hostedZoneName: string;
            managedIdentity: outputs.acme.v1.ChallengeSpecSolverDns01AzureDNSManagedIdentity;
            /**
             * resource group the DNS zone is located in
             */
            resourceGroupName: string;
            /**
             * ID of the Azure subscription
             */
            subscriptionID: string;
            /**
             * Auth: Azure Service Principal: The TenantID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientID and ClientSecret must also be set.
             */
            tenantID: string;
        }
        /**
         * Auth: Azure Service Principal: A reference to a Secret containing the password associated with the Service Principal. If set, ClientID and TenantID must also be set.
         */
        interface ChallengeSpecSolverDns01AzureDNSClientSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Auth: Azure Service Principal: A reference to a Secret containing the password associated with the Service Principal. If set, ClientID and TenantID must also be set.
         */
        interface ChallengeSpecSolverDns01AzureDNSClientSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Auth: Azure Workload Identity or Azure Managed Service Identity: Settings to enable Azure Workload Identity or Azure Managed Service Identity If set, ClientID, ClientSecret and TenantID must not be set.
         */
        interface ChallengeSpecSolverDns01AzureDNSManagedIdentity {
            /**
             * client ID of the managed identity, can not be used at the same time as resourceID
             */
            clientID: string;
            /**
             * resource ID of the managed identity, can not be used at the same time as clientID Cannot be used for Azure Managed Service Identity
             */
            resourceID: string;
        }
        /**
         * Auth: Azure Workload Identity or Azure Managed Service Identity: Settings to enable Azure Workload Identity or Azure Managed Service Identity If set, ClientID, ClientSecret and TenantID must not be set.
         */
        interface ChallengeSpecSolverDns01AzureDNSManagedIdentityPatch {
            /**
             * client ID of the managed identity, can not be used at the same time as resourceID
             */
            clientID: string;
            /**
             * resource ID of the managed identity, can not be used at the same time as clientID Cannot be used for Azure Managed Service Identity
             */
            resourceID: string;
        }
        /**
         * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01AzureDNSPatch {
            /**
             * Auth: Azure Service Principal: The ClientID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientSecret and TenantID must also be set.
             */
            clientID: string;
            clientSecretSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01AzureDNSClientSecretSecretRefPatch;
            /**
             * name of the Azure environment (default AzurePublicCloud)
             */
            environment: string;
            /**
             * name of the DNS zone that should be used
             */
            hostedZoneName: string;
            managedIdentity: outputs.acme.v1.ChallengeSpecSolverDns01AzureDNSManagedIdentityPatch;
            /**
             * resource group the DNS zone is located in
             */
            resourceGroupName: string;
            /**
             * ID of the Azure subscription
             */
            subscriptionID: string;
            /**
             * Auth: Azure Service Principal: The TenantID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientID and ClientSecret must also be set.
             */
            tenantID: string;
        }
        /**
         * Use the Google Cloud DNS API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01CloudDNS {
            /**
             * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
             */
            hostedZoneName: string;
            project: string;
            serviceAccountSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01CloudDNSServiceAccountSecretRef;
        }
        /**
         * Use the Google Cloud DNS API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01CloudDNSPatch {
            /**
             * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
             */
            hostedZoneName: string;
            project: string;
            serviceAccountSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01CloudDNSServiceAccountSecretRefPatch;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01CloudDNSServiceAccountSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01CloudDNSServiceAccountSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Cloudflare API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01Cloudflare {
            apiKeySecretRef: outputs.acme.v1.ChallengeSpecSolverDns01CloudflareApiKeySecretRef;
            apiTokenSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01CloudflareApiTokenSecretRef;
            /**
             * Email of the account, only required when using API key based authentication.
             */
            email: string;
        }
        /**
         * API key to use to authenticate with Cloudflare. Note: using an API token to authenticate is now the recommended method as it allows greater control of permissions.
         */
        interface ChallengeSpecSolverDns01CloudflareApiKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API key to use to authenticate with Cloudflare. Note: using an API token to authenticate is now the recommended method as it allows greater control of permissions.
         */
        interface ChallengeSpecSolverDns01CloudflareApiKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API token used to authenticate with Cloudflare.
         */
        interface ChallengeSpecSolverDns01CloudflareApiTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API token used to authenticate with Cloudflare.
         */
        interface ChallengeSpecSolverDns01CloudflareApiTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Cloudflare API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01CloudflarePatch {
            apiKeySecretRef: outputs.acme.v1.ChallengeSpecSolverDns01CloudflareApiKeySecretRefPatch;
            apiTokenSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01CloudflareApiTokenSecretRefPatch;
            /**
             * Email of the account, only required when using API key based authentication.
             */
            email: string;
        }
        /**
         * Use the DigitalOcean DNS API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01Digitalocean {
            tokenSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01DigitaloceanTokenSecretRef;
        }
        /**
         * Use the DigitalOcean DNS API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01DigitaloceanPatch {
            tokenSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01DigitaloceanTokenSecretRefPatch;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01DigitaloceanTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ChallengeSpecSolverDns01DigitaloceanTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
         */
        interface ChallengeSpecSolverDns01Patch {
            acmeDNS: outputs.acme.v1.ChallengeSpecSolverDns01AcmeDNSPatch;
            akamai: outputs.acme.v1.ChallengeSpecSolverDns01AkamaiPatch;
            azureDNS: outputs.acme.v1.ChallengeSpecSolverDns01AzureDNSPatch;
            cloudDNS: outputs.acme.v1.ChallengeSpecSolverDns01CloudDNSPatch;
            cloudflare: outputs.acme.v1.ChallengeSpecSolverDns01CloudflarePatch;
            /**
             * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
             */
            cnameStrategy: string;
            digitalocean: outputs.acme.v1.ChallengeSpecSolverDns01DigitaloceanPatch;
            rfc2136: outputs.acme.v1.ChallengeSpecSolverDns01Rfc2136Patch;
            route53: outputs.acme.v1.ChallengeSpecSolverDns01Route53Patch;
            webhook: outputs.acme.v1.ChallengeSpecSolverDns01WebhookPatch;
        }
        /**
         * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/) to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01Rfc2136 {
            /**
             * The IP address or hostname of an authoritative DNS server supporting RFC2136 in the form host:port. If the host is an IPv6 address it must be enclosed in square brackets (e.g [2001:db8::1]) ; port is optional. This field is required.
             */
            nameserver: string;
            /**
             * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
             */
            tsigAlgorithm: string;
            /**
             * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
             */
            tsigKeyName: string;
            tsigSecretSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRef;
        }
        /**
         * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/) to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01Rfc2136Patch {
            /**
             * The IP address or hostname of an authoritative DNS server supporting RFC2136 in the form host:port. If the host is an IPv6 address it must be enclosed in square brackets (e.g [2001:db8::1]) ; port is optional. This field is required.
             */
            nameserver: string;
            /**
             * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
             */
            tsigAlgorithm: string;
            /**
             * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
             */
            tsigKeyName: string;
            tsigSecretSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRefPatch;
        }
        /**
         * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
         */
        interface ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
         */
        interface ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the AWS Route53 API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01Route53 {
            /**
             * The AccessKeyID is used for authentication. Cannot be set when SecretAccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
             */
            accessKeyID: string;
            accessKeyIDSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef;
            /**
             * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
             */
            hostedZoneID: string;
            /**
             * Always set the region when using AccessKeyID and SecretAccessKey
             */
            region: string;
            /**
             * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
             */
            role: string;
            secretAccessKeySecretRef: outputs.acme.v1.ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef;
        }
        /**
         * The SecretAccessKey is used for authentication. If set, pull the AWS access key ID from a key within a Kubernetes Secret. Cannot be set when AccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The SecretAccessKey is used for authentication. If set, pull the AWS access key ID from a key within a Kubernetes Secret. Cannot be set when AccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface ChallengeSpecSolverDns01Route53AccessKeyIDSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the AWS Route53 API to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01Route53Patch {
            /**
             * The AccessKeyID is used for authentication. Cannot be set when SecretAccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
             */
            accessKeyID: string;
            accessKeyIDSecretRef: outputs.acme.v1.ChallengeSpecSolverDns01Route53AccessKeyIDSecretRefPatch;
            /**
             * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
             */
            hostedZoneID: string;
            /**
             * Always set the region when using AccessKeyID and SecretAccessKey
             */
            region: string;
            /**
             * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
             */
            role: string;
            secretAccessKeySecretRef: outputs.acme.v1.ChallengeSpecSolverDns01Route53SecretAccessKeySecretRefPatch;
        }
        /**
         * The SecretAccessKey is used for authentication. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The SecretAccessKey is used for authentication. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface ChallengeSpecSolverDns01Route53SecretAccessKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Configure an external webhook based DNS01 challenge solver to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01Webhook {
            /**
             * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
             */
            config: {
                [key: string]: any;
            };
            /**
             * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
             */
            groupName: string;
            /**
             * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
             */
            solverName: string;
        }
        /**
         * Configure an external webhook based DNS01 challenge solver to manage DNS01 challenge records.
         */
        interface ChallengeSpecSolverDns01WebhookPatch {
            /**
             * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
             */
            config: {
                [key: string]: any;
            };
            /**
             * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
             */
            groupName: string;
            /**
             * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
             */
            solverName: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the HTTP01 challenge flow. It is not possible to obtain certificates for wildcard domain names (e.g. `*.example.com`) using the HTTP01 challenge mechanism.
         */
        interface ChallengeSpecSolverHttp01 {
            gatewayHTTPRoute: outputs.acme.v1.ChallengeSpecSolverHttp01GatewayHTTPRoute;
            ingress: outputs.acme.v1.ChallengeSpecSolverHttp01Ingress;
        }
        /**
         * The Gateway API is a sig-network community API that models service networking in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will create HTTPRoutes with the specified labels in the same namespace as the challenge. This solver is experimental, and fields / behaviour may change in the future.
         */
        interface ChallengeSpecSolverHttp01GatewayHTTPRoute {
            /**
             * Custom labels that will be applied to HTTPRoutes created by cert-manager while solving HTTP-01 challenges.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * When solving an HTTP-01 challenge, cert-manager creates an HTTPRoute. cert-manager needs to know which parentRefs should be used when creating the HTTPRoute. Usually, the parentRef references a Gateway. See: https://gateway-api.sigs.k8s.io/api-types/httproute/#attaching-to-gateways
             */
            parentRefs: outputs.acme.v1.ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefs[];
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered a parent of this resource (usually a route). There are two kinds of parent resources with "Core" support:
         *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
         *  This API may be extended in the future to support additional kinds of parent resources.
         *  The API object must be valid in the cluster; the Group and Kind must be registered in the cluster for this reference to be valid.
         */
        interface ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefs {
            /**
             * Group is the group of the referent. When unspecified, "gateway.networking.k8s.io" is inferred. To set the core API group (such as for a "Service" kind referent), Group must be explicitly set to "" (empty string).
             *  Support: Core
             */
            group: string;
            /**
             * Kind is kind of the referent.
             *  There are two kinds of parent resources with "Core" support:
             *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
             *  Support for other resources is Implementation-Specific.
             */
            kind: string;
            /**
             * Name is the name of the referent.
             *  Support: Core
             */
            name: string;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route.
             *  Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference.
             *  <gateway:experimental:description> ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service.
             *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route. </gateway:experimental:description>
             *  Support: Core
             */
            namespace: string;
            /**
             * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource.
             *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
             *  <gateway:experimental:description> When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values. </gateway:experimental:description>
             *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
             *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Extended
             *  <gateway:experimental>
             */
            port: number;
            /**
             * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
             *  * Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Note that attaching Routes to Services as Parents is part of experimental Mesh support and is not supported for any other purpose.
             *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
             *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Core
             */
            sectionName: string;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered a parent of this resource (usually a route). There are two kinds of parent resources with "Core" support:
         *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
         *  This API may be extended in the future to support additional kinds of parent resources.
         *  The API object must be valid in the cluster; the Group and Kind must be registered in the cluster for this reference to be valid.
         */
        interface ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsPatch {
            /**
             * Group is the group of the referent. When unspecified, "gateway.networking.k8s.io" is inferred. To set the core API group (such as for a "Service" kind referent), Group must be explicitly set to "" (empty string).
             *  Support: Core
             */
            group: string;
            /**
             * Kind is kind of the referent.
             *  There are two kinds of parent resources with "Core" support:
             *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
             *  Support for other resources is Implementation-Specific.
             */
            kind: string;
            /**
             * Name is the name of the referent.
             *  Support: Core
             */
            name: string;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route.
             *  Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference.
             *  <gateway:experimental:description> ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service.
             *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route. </gateway:experimental:description>
             *  Support: Core
             */
            namespace: string;
            /**
             * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource.
             *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
             *  <gateway:experimental:description> When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values. </gateway:experimental:description>
             *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
             *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Extended
             *  <gateway:experimental>
             */
            port: number;
            /**
             * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
             *  * Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Note that attaching Routes to Services as Parents is part of experimental Mesh support and is not supported for any other purpose.
             *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
             *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Core
             */
            sectionName: string;
        }
        /**
         * The Gateway API is a sig-network community API that models service networking in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will create HTTPRoutes with the specified labels in the same namespace as the challenge. This solver is experimental, and fields / behaviour may change in the future.
         */
        interface ChallengeSpecSolverHttp01GatewayHTTPRoutePatch {
            /**
             * Custom labels that will be applied to HTTPRoutes created by cert-manager while solving HTTP-01 challenges.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * When solving an HTTP-01 challenge, cert-manager creates an HTTPRoute. cert-manager needs to know which parentRefs should be used when creating the HTTPRoute. Usually, the parentRef references a Gateway. See: https://gateway-api.sigs.k8s.io/api-types/httproute/#attaching-to-gateways
             */
            parentRefs: outputs.acme.v1.ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsPatch[];
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
         */
        interface ChallengeSpecSolverHttp01Ingress {
            /**
             * This field configures the annotation `kubernetes.io/ingress.class` when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            class: string;
            /**
             * This field configures the field `ingressClassName` on the created Ingress resources used to solve ACME challenges that use this challenge solver. This is the recommended way of configuring the ingress class. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            ingressClassName: string;
            ingressTemplate: outputs.acme.v1.ChallengeSpecSolverHttp01IngressIngressTemplate;
            /**
             * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            name: string;
            podTemplate: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplate;
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
         */
        interface ChallengeSpecSolverHttp01IngressIngressTemplate {
            metadata: outputs.acme.v1.ChallengeSpecSolverHttp01IngressIngressTemplateMetadata;
        }
        /**
         * ObjectMeta overrides for the ingress used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface ChallengeSpecSolverHttp01IngressIngressTemplateMetadata {
            /**
             * Annotations that should be added to the created ACME HTTP01 solver ingress.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver ingress.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * ObjectMeta overrides for the ingress used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface ChallengeSpecSolverHttp01IngressIngressTemplateMetadataPatch {
            /**
             * Annotations that should be added to the created ACME HTTP01 solver ingress.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver ingress.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
         */
        interface ChallengeSpecSolverHttp01IngressIngressTemplatePatch {
            metadata: outputs.acme.v1.ChallengeSpecSolverHttp01IngressIngressTemplateMetadataPatch;
        }
        /**
         * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
         */
        interface ChallengeSpecSolverHttp01IngressPatch {
            /**
             * This field configures the annotation `kubernetes.io/ingress.class` when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            class: string;
            /**
             * This field configures the field `ingressClassName` on the created Ingress resources used to solve ACME challenges that use this challenge solver. This is the recommended way of configuring the ingress class. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            ingressClassName: string;
            ingressTemplate: outputs.acme.v1.ChallengeSpecSolverHttp01IngressIngressTemplatePatch;
            /**
             * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            name: string;
            podTemplate: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplatePatch;
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplate {
            metadata: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateMetadata;
            spec: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpec;
        }
        /**
         * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateMetadata {
            /**
             * Annotations that should be added to the create ACME HTTP01 solver pods.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver pods.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateMetadataPatch {
            /**
             * Annotations that should be added to the create ACME HTTP01 solver pods.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver pods.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplatePatch {
            metadata: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateMetadataPatch;
            spec: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecPatch;
        }
        /**
         * PodSpec defines overrides for the HTTP01 challenge solver pod. Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields. All other fields will be ignored.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpec {
            affinity: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity;
            /**
             * If specified, the pod's imagePullSecrets
             */
            imagePullSecrets: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecImagePullSecrets[];
            /**
             * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
             */
            nodeSelector: {
                [key: string]: string;
            };
            /**
             * If specified, the pod's priorityClassName.
             */
            priorityClassName: string;
            /**
             * If specified, the pod's service account
             */
            serviceAccountName: string;
            /**
             * If specified, the pod's tolerations.
             */
            tolerations: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerations[];
        }
        /**
         * If specified, the pod's scheduling constraints
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity {
            nodeAffinity: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinity;
            podAffinity: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity;
            podAntiAffinity: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinity;
        }
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        /**
         * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        /**
         * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        /**
         * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        /**
         * If specified, the pod's scheduling constraints
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPatch {
            nodeAffinity: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPatch;
            podAffinity: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPatch;
            podAntiAffinity: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPatch;
        }
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
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
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecImagePullSecrets {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            name: string;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecImagePullSecretsPatch {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            name: string;
        }
        /**
         * PodSpec defines overrides for the HTTP01 challenge solver pod. Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields. All other fields will be ignored.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecPatch {
            affinity: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPatch;
            /**
             * If specified, the pod's imagePullSecrets
             */
            imagePullSecrets: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecImagePullSecretsPatch[];
            /**
             * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
             */
            nodeSelector: {
                [key: string]: string;
            };
            /**
             * If specified, the pod's priorityClassName.
             */
            priorityClassName: string;
            /**
             * If specified, the pod's service account
             */
            serviceAccountName: string;
            /**
             * If specified, the pod's tolerations.
             */
            tolerations: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerationsPatch[];
        }
        /**
         * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerations {
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            operator: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value: string;
        }
        /**
         * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
         */
        interface ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerationsPatch {
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            operator: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the HTTP01 challenge flow. It is not possible to obtain certificates for wildcard domain names (e.g. `*.example.com`) using the HTTP01 challenge mechanism.
         */
        interface ChallengeSpecSolverHttp01Patch {
            gatewayHTTPRoute: outputs.acme.v1.ChallengeSpecSolverHttp01GatewayHTTPRoutePatch;
            ingress: outputs.acme.v1.ChallengeSpecSolverHttp01IngressPatch;
        }
        /**
         * Contains the domain solving configuration that should be used to solve this challenge resource.
         */
        interface ChallengeSpecSolverPatch {
            dns01: outputs.acme.v1.ChallengeSpecSolverDns01Patch;
            http01: outputs.acme.v1.ChallengeSpecSolverHttp01Patch;
            selector: outputs.acme.v1.ChallengeSpecSolverSelectorPatch;
        }
        /**
         * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver. If not specified, the solver will be treated as the 'default' solver with the lowest priority, i.e. if any other solver has a more specific match, it will be used instead.
         */
        interface ChallengeSpecSolverSelector {
            /**
             * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsNames: string[];
            /**
             * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsZones: string[];
            /**
             * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver. If not specified, the solver will be treated as the 'default' solver with the lowest priority, i.e. if any other solver has a more specific match, it will be used instead.
         */
        interface ChallengeSpecSolverSelectorPatch {
            /**
             * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsNames: string[];
            /**
             * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsZones: string[];
            /**
             * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        interface ChallengeStatus {
            /**
             * presented will be set to true if the challenge values for this challenge are currently 'presented'. This *does not* imply the self check is passing. Only that the values have been 'submitted' for the appropriate challenge mechanism (i.e. the DNS01 TXT record has been presented, or the HTTP01 configuration has been configured).
             */
            presented: boolean;
            /**
             * Used to denote whether this challenge should be processed or not. This field will only be set to true by the 'scheduling' component. It will only be set to false by the 'challenges' controller, after the challenge has reached a final state or timed out. If this field is set to false, the challenge controller will not take any more action.
             */
            processing: boolean;
            /**
             * Contains human readable information on why the Challenge is in the current state.
             */
            reason: string;
            /**
             * Contains the current 'state' of the challenge. If not set, the state of the challenge is unknown.
             */
            state: string;
        }
        interface ChallengeStatusPatch {
            /**
             * presented will be set to true if the challenge values for this challenge are currently 'presented'. This *does not* imply the self check is passing. Only that the values have been 'submitted' for the appropriate challenge mechanism (i.e. the DNS01 TXT record has been presented, or the HTTP01 configuration has been configured).
             */
            presented: boolean;
            /**
             * Used to denote whether this challenge should be processed or not. This field will only be set to true by the 'scheduling' component. It will only be set to false by the 'challenges' controller, after the challenge has reached a final state or timed out. If this field is set to false, the challenge controller will not take any more action.
             */
            processing: boolean;
            /**
             * Contains human readable information on why the Challenge is in the current state.
             */
            reason: string;
            /**
             * Contains the current 'state' of the challenge. If not set, the state of the challenge is unknown.
             */
            state: string;
        }
        /**
         * Order is a type to represent an Order with an ACME server
         */
        interface Order {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "acme.cert-manager.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Order";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.acme.v1.OrderSpec;
            status: outputs.acme.v1.OrderStatus;
        }
        interface OrderSpec {
            /**
             * CommonName is the common name as specified on the DER encoded CSR. If specified, this value must also be present in `dnsNames` or `ipAddresses`. This field must match the corresponding field on the DER encoded CSR.
             */
            commonName: string;
            /**
             * DNSNames is a list of DNS names that should be included as part of the Order validation process. This field must match the corresponding field on the DER encoded CSR.
             */
            dnsNames: string[];
            /**
             * Duration is the duration for the not after date for the requested certificate. this is set on order creation as pe the ACME spec.
             */
            duration: string;
            /**
             * IPAddresses is a list of IP addresses that should be included as part of the Order validation process. This field must match the corresponding field on the DER encoded CSR.
             */
            ipAddresses: string[];
            issuerRef: outputs.acme.v1.OrderSpecIssuerRef;
            /**
             * Certificate signing request bytes in DER encoding. This will be used when finalizing the order. This field must be set on the order.
             */
            request: string;
        }
        /**
         * IssuerRef references a properly configured ACME-type Issuer which should be used to create this Order. If the Issuer does not exist, processing will be retried. If the Issuer is not an 'ACME' Issuer, an error will be returned and the Order will be marked as failed.
         */
        interface OrderSpecIssuerRef {
            /**
             * Group of the resource being referred to.
             */
            group: string;
            /**
             * Kind of the resource being referred to.
             */
            kind: string;
            /**
             * Name of the resource being referred to.
             */
            name: string;
        }
        /**
         * IssuerRef references a properly configured ACME-type Issuer which should be used to create this Order. If the Issuer does not exist, processing will be retried. If the Issuer is not an 'ACME' Issuer, an error will be returned and the Order will be marked as failed.
         */
        interface OrderSpecIssuerRefPatch {
            /**
             * Group of the resource being referred to.
             */
            group: string;
            /**
             * Kind of the resource being referred to.
             */
            kind: string;
            /**
             * Name of the resource being referred to.
             */
            name: string;
        }
        interface OrderSpecPatch {
            /**
             * CommonName is the common name as specified on the DER encoded CSR. If specified, this value must also be present in `dnsNames` or `ipAddresses`. This field must match the corresponding field on the DER encoded CSR.
             */
            commonName: string;
            /**
             * DNSNames is a list of DNS names that should be included as part of the Order validation process. This field must match the corresponding field on the DER encoded CSR.
             */
            dnsNames: string[];
            /**
             * Duration is the duration for the not after date for the requested certificate. this is set on order creation as pe the ACME spec.
             */
            duration: string;
            /**
             * IPAddresses is a list of IP addresses that should be included as part of the Order validation process. This field must match the corresponding field on the DER encoded CSR.
             */
            ipAddresses: string[];
            issuerRef: outputs.acme.v1.OrderSpecIssuerRefPatch;
            /**
             * Certificate signing request bytes in DER encoding. This will be used when finalizing the order. This field must be set on the order.
             */
            request: string;
        }
        interface OrderStatus {
            /**
             * Authorizations contains data returned from the ACME server on what authorizations must be completed in order to validate the DNS names specified on the Order.
             */
            authorizations: outputs.acme.v1.OrderStatusAuthorizations[];
            /**
             * Certificate is a copy of the PEM encoded certificate for this Order. This field will be populated after the order has been successfully finalized with the ACME server, and the order has transitioned to the 'valid' state.
             */
            certificate: string;
            /**
             * FailureTime stores the time that this order failed. This is used to influence garbage collection and back-off.
             */
            failureTime: string;
            /**
             * FinalizeURL of the Order. This is used to obtain certificates for this order once it has been completed.
             */
            finalizeURL: string;
            /**
             * Reason optionally provides more information about a why the order is in the current state.
             */
            reason: string;
            /**
             * State contains the current state of this Order resource. States 'success' and 'expired' are 'final'
             */
            state: string;
            /**
             * URL of the Order. This will initially be empty when the resource is first created. The Order controller will populate this field when the Order is first processed. This field will be immutable after it is initially set.
             */
            url: string;
        }
        /**
         * ACMEAuthorization contains data returned from the ACME server on an authorization that must be completed in order validate a DNS name on an ACME Order resource.
         */
        interface OrderStatusAuthorizations {
            /**
             * Challenges specifies the challenge types offered by the ACME server. One of these challenge types will be selected when validating the DNS name and an appropriate Challenge resource will be created to perform the ACME challenge process.
             */
            challenges: outputs.acme.v1.OrderStatusAuthorizationsChallenges[];
            /**
             * Identifier is the DNS name to be validated as part of this authorization
             */
            identifier: string;
            /**
             * InitialState is the initial state of the ACME authorization when first fetched from the ACME server. If an Authorization is already 'valid', the Order controller will not create a Challenge resource for the authorization. This will occur when working with an ACME server that enables 'authz reuse' (such as Let's Encrypt's production endpoint). If not set and 'identifier' is set, the state is assumed to be pending and a Challenge will be created.
             */
            initialState: string;
            /**
             * URL is the URL of the Authorization that must be completed
             */
            url: string;
            /**
             * Wildcard will be true if this authorization is for a wildcard DNS name. If this is true, the identifier will be the *non-wildcard* version of the DNS name. For example, if '*.example.com' is the DNS name being validated, this field will be 'true' and the 'identifier' field will be 'example.com'.
             */
            wildcard: boolean;
        }
        /**
         * Challenge specifies a challenge offered by the ACME server for an Order. An appropriate Challenge resource can be created to perform the ACME challenge process.
         */
        interface OrderStatusAuthorizationsChallenges {
            /**
             * Token is the token that must be presented for this challenge. This is used to compute the 'key' that must also be presented.
             */
            token: string;
            /**
             * Type is the type of challenge being offered, e.g. 'http-01', 'dns-01', 'tls-sni-01', etc. This is the raw value retrieved from the ACME server. Only 'http-01' and 'dns-01' are supported by cert-manager, other values will be ignored.
             */
            type: string;
            /**
             * URL is the URL of this challenge. It can be used to retrieve additional metadata about the Challenge from the ACME server.
             */
            url: string;
        }
        /**
         * Challenge specifies a challenge offered by the ACME server for an Order. An appropriate Challenge resource can be created to perform the ACME challenge process.
         */
        interface OrderStatusAuthorizationsChallengesPatch {
            /**
             * Token is the token that must be presented for this challenge. This is used to compute the 'key' that must also be presented.
             */
            token: string;
            /**
             * Type is the type of challenge being offered, e.g. 'http-01', 'dns-01', 'tls-sni-01', etc. This is the raw value retrieved from the ACME server. Only 'http-01' and 'dns-01' are supported by cert-manager, other values will be ignored.
             */
            type: string;
            /**
             * URL is the URL of this challenge. It can be used to retrieve additional metadata about the Challenge from the ACME server.
             */
            url: string;
        }
        /**
         * ACMEAuthorization contains data returned from the ACME server on an authorization that must be completed in order validate a DNS name on an ACME Order resource.
         */
        interface OrderStatusAuthorizationsPatch {
            /**
             * Challenges specifies the challenge types offered by the ACME server. One of these challenge types will be selected when validating the DNS name and an appropriate Challenge resource will be created to perform the ACME challenge process.
             */
            challenges: outputs.acme.v1.OrderStatusAuthorizationsChallengesPatch[];
            /**
             * Identifier is the DNS name to be validated as part of this authorization
             */
            identifier: string;
            /**
             * InitialState is the initial state of the ACME authorization when first fetched from the ACME server. If an Authorization is already 'valid', the Order controller will not create a Challenge resource for the authorization. This will occur when working with an ACME server that enables 'authz reuse' (such as Let's Encrypt's production endpoint). If not set and 'identifier' is set, the state is assumed to be pending and a Challenge will be created.
             */
            initialState: string;
            /**
             * URL is the URL of the Authorization that must be completed
             */
            url: string;
            /**
             * Wildcard will be true if this authorization is for a wildcard DNS name. If this is true, the identifier will be the *non-wildcard* version of the DNS name. For example, if '*.example.com' is the DNS name being validated, this field will be 'true' and the 'identifier' field will be 'example.com'.
             */
            wildcard: boolean;
        }
        interface OrderStatusPatch {
            /**
             * Authorizations contains data returned from the ACME server on what authorizations must be completed in order to validate the DNS names specified on the Order.
             */
            authorizations: outputs.acme.v1.OrderStatusAuthorizationsPatch[];
            /**
             * Certificate is a copy of the PEM encoded certificate for this Order. This field will be populated after the order has been successfully finalized with the ACME server, and the order has transitioned to the 'valid' state.
             */
            certificate: string;
            /**
             * FailureTime stores the time that this order failed. This is used to influence garbage collection and back-off.
             */
            failureTime: string;
            /**
             * FinalizeURL of the Order. This is used to obtain certificates for this order once it has been completed.
             */
            finalizeURL: string;
            /**
             * Reason optionally provides more information about a why the order is in the current state.
             */
            reason: string;
            /**
             * State contains the current state of this Order resource. States 'success' and 'expired' are 'final'
             */
            state: string;
            /**
             * URL of the Order. This will initially be empty when the resource is first created. The Order controller will populate this field when the Order is first processed. This field will be immutable after it is initially set.
             */
            url: string;
        }
    }
}
export declare namespace cert_manager {
    namespace v1 {
        /**
         * A Certificate resource should be created to ensure an up to date and signed X.509 certificate is stored in the Kubernetes Secret resource named in `spec.secretName`.
         *  The stored certificate will be renewed before it expires (as configured by `spec.renewBefore`).
         */
        interface Certificate {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "cert-manager.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Certificate";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.cert_manager.v1.CertificateSpec;
            status: outputs.cert_manager.v1.CertificateStatus;
        }
        /**
         * A CertificateRequest is used to request a signed certificate from one of the configured issuers.
         *  All fields within the CertificateRequest's `spec` are immutable after creation. A CertificateRequest will either succeed or fail, as denoted by its `Ready` status condition and its `status.failureTime` field.
         *  A CertificateRequest is a one-shot resource, meaning it represents a single point in time request for a certificate and cannot be re-used.
         */
        interface CertificateRequest {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "cert-manager.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "CertificateRequest";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.cert_manager.v1.CertificateRequestSpec;
            status: outputs.cert_manager.v1.CertificateRequestStatus;
        }
        /**
         * Specification of the desired state of the CertificateRequest resource. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface CertificateRequestSpec {
            /**
             * Requested 'duration' (i.e. lifetime) of the Certificate. Note that the issuer may choose to ignore the requested duration, just like any other requested attribute.
             */
            duration: string;
            /**
             * Extra contains extra attributes of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
             */
            extra: {
                [key: string]: string[];
            };
            /**
             * Groups contains group membership of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
             */
            groups: string[];
            /**
             * Requested basic constraints isCA value. Note that the issuer may choose to ignore the requested isCA value, just like any other requested attribute.
             *  NOTE: If the CSR in the `Request` field has a BasicConstraints extension, it must have the same isCA value as specified here.
             *  If true, this will automatically add the `cert sign` usage to the list of requested `usages`.
             */
            isCA: boolean;
            issuerRef: outputs.cert_manager.v1.CertificateRequestSpecIssuerRef;
            /**
             * The PEM-encoded X.509 certificate signing request to be submitted to the issuer for signing.
             *  If the CSR has a BasicConstraints extension, its isCA attribute must match the `isCA` value of this CertificateRequest. If the CSR has a KeyUsage extension, its key usages must match the key usages in the `usages` field of this CertificateRequest. If the CSR has a ExtKeyUsage extension, its extended key usages must match the extended key usages in the `usages` field of this CertificateRequest.
             */
            request: string;
            /**
             * UID contains the uid of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
             */
            uid: string;
            /**
             * Requested key usages and extended key usages.
             *  NOTE: If the CSR in the `Request` field has uses the KeyUsage or ExtKeyUsage extension, these extensions must have the same values as specified here without any additional values.
             *  If unset, defaults to `digital signature` and `key encipherment`.
             */
            usages: string[];
            /**
             * Username contains the name of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
             */
            username: string;
        }
        /**
         * Reference to the issuer responsible for issuing the certificate. If the issuer is namespace-scoped, it must be in the same namespace as the Certificate. If the issuer is cluster-scoped, it can be used from any namespace.
         *  The `name` field of the reference must always be specified.
         */
        interface CertificateRequestSpecIssuerRef {
            /**
             * Group of the resource being referred to.
             */
            group: string;
            /**
             * Kind of the resource being referred to.
             */
            kind: string;
            /**
             * Name of the resource being referred to.
             */
            name: string;
        }
        /**
         * Reference to the issuer responsible for issuing the certificate. If the issuer is namespace-scoped, it must be in the same namespace as the Certificate. If the issuer is cluster-scoped, it can be used from any namespace.
         *  The `name` field of the reference must always be specified.
         */
        interface CertificateRequestSpecIssuerRefPatch {
            /**
             * Group of the resource being referred to.
             */
            group: string;
            /**
             * Kind of the resource being referred to.
             */
            kind: string;
            /**
             * Name of the resource being referred to.
             */
            name: string;
        }
        /**
         * Specification of the desired state of the CertificateRequest resource. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface CertificateRequestSpecPatch {
            /**
             * Requested 'duration' (i.e. lifetime) of the Certificate. Note that the issuer may choose to ignore the requested duration, just like any other requested attribute.
             */
            duration: string;
            /**
             * Extra contains extra attributes of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
             */
            extra: {
                [key: string]: string[];
            };
            /**
             * Groups contains group membership of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
             */
            groups: string[];
            /**
             * Requested basic constraints isCA value. Note that the issuer may choose to ignore the requested isCA value, just like any other requested attribute.
             *  NOTE: If the CSR in the `Request` field has a BasicConstraints extension, it must have the same isCA value as specified here.
             *  If true, this will automatically add the `cert sign` usage to the list of requested `usages`.
             */
            isCA: boolean;
            issuerRef: outputs.cert_manager.v1.CertificateRequestSpecIssuerRefPatch;
            /**
             * The PEM-encoded X.509 certificate signing request to be submitted to the issuer for signing.
             *  If the CSR has a BasicConstraints extension, its isCA attribute must match the `isCA` value of this CertificateRequest. If the CSR has a KeyUsage extension, its key usages must match the key usages in the `usages` field of this CertificateRequest. If the CSR has a ExtKeyUsage extension, its extended key usages must match the extended key usages in the `usages` field of this CertificateRequest.
             */
            request: string;
            /**
             * UID contains the uid of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
             */
            uid: string;
            /**
             * Requested key usages and extended key usages.
             *  NOTE: If the CSR in the `Request` field has uses the KeyUsage or ExtKeyUsage extension, these extensions must have the same values as specified here without any additional values.
             *  If unset, defaults to `digital signature` and `key encipherment`.
             */
            usages: string[];
            /**
             * Username contains the name of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
             */
            username: string;
        }
        /**
         * Status of the CertificateRequest. This is set and managed automatically. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface CertificateRequestStatus {
            /**
             * The PEM encoded X.509 certificate of the signer, also known as the CA (Certificate Authority). This is set on a best-effort basis by different issuers. If not set, the CA is assumed to be unknown/not available.
             */
            ca: string;
            /**
             * The PEM encoded X.509 certificate resulting from the certificate signing request. If not set, the CertificateRequest has either not been completed or has failed. More information on failure can be found by checking the `conditions` field.
             */
            certificate: string;
            /**
             * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready`, `InvalidRequest`, `Approved` and `Denied`.
             */
            conditions: outputs.cert_manager.v1.CertificateRequestStatusConditions[];
            /**
             * FailureTime stores the time that this CertificateRequest failed. This is used to influence garbage collection and back-off.
             */
            failureTime: string;
        }
        /**
         * CertificateRequestCondition contains condition information for a CertificateRequest.
         */
        interface CertificateRequestStatusConditions {
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            lastTransitionTime: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            message: string;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            reason: string;
            /**
             * Status of the condition, one of (`True`, `False`, `Unknown`).
             */
            status: string;
            /**
             * Type of the condition, known values are (`Ready`, `InvalidRequest`, `Approved`, `Denied`).
             */
            type: string;
        }
        /**
         * CertificateRequestCondition contains condition information for a CertificateRequest.
         */
        interface CertificateRequestStatusConditionsPatch {
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            lastTransitionTime: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            message: string;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            reason: string;
            /**
             * Status of the condition, one of (`True`, `False`, `Unknown`).
             */
            status: string;
            /**
             * Type of the condition, known values are (`Ready`, `InvalidRequest`, `Approved`, `Denied`).
             */
            type: string;
        }
        /**
         * Status of the CertificateRequest. This is set and managed automatically. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface CertificateRequestStatusPatch {
            /**
             * The PEM encoded X.509 certificate of the signer, also known as the CA (Certificate Authority). This is set on a best-effort basis by different issuers. If not set, the CA is assumed to be unknown/not available.
             */
            ca: string;
            /**
             * The PEM encoded X.509 certificate resulting from the certificate signing request. If not set, the CertificateRequest has either not been completed or has failed. More information on failure can be found by checking the `conditions` field.
             */
            certificate: string;
            /**
             * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready`, `InvalidRequest`, `Approved` and `Denied`.
             */
            conditions: outputs.cert_manager.v1.CertificateRequestStatusConditionsPatch[];
            /**
             * FailureTime stores the time that this CertificateRequest failed. This is used to influence garbage collection and back-off.
             */
            failureTime: string;
        }
        /**
         * Specification of the desired state of the Certificate resource. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface CertificateSpec {
            /**
             * Defines extra output formats of the private key and signed certificate chain to be written to this Certificate's target Secret.
             *  This is an Alpha Feature and is only enabled with the `--feature-gates=AdditionalCertificateOutputFormats=true` option set on both the controller and webhook components.
             */
            additionalOutputFormats: outputs.cert_manager.v1.CertificateSpecAdditionalOutputFormats[];
            /**
             * Requested common name X509 certificate subject attribute. More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6 NOTE: TLS clients will ignore this value when any subject alternative name is set (see https://tools.ietf.org/html/rfc6125#section-6.4.4).
             *  Should have a length of 64 characters or fewer to avoid generating invalid CSRs. Cannot be set if the `literalSubject` field is set.
             */
            commonName: string;
            /**
             * Requested DNS subject alternative names.
             */
            dnsNames: string[];
            /**
             * Requested 'duration' (i.e. lifetime) of the Certificate. Note that the issuer may choose to ignore the requested duration, just like any other requested attribute.
             *  If unset, this defaults to 90 days. Minimum accepted duration is 1 hour. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration.
             */
            duration: string;
            /**
             * Requested email subject alternative names.
             */
            emailAddresses: string[];
            /**
             * Whether the KeyUsage and ExtKeyUsage extensions should be set in the encoded CSR.
             *  This option defaults to true, and should only be disabled if the target issuer does not support CSRs with these X509 KeyUsage/ ExtKeyUsage extensions.
             */
            encodeUsagesInRequest: boolean;
            /**
             * Requested IP address subject alternative names.
             */
            ipAddresses: string[];
            /**
             * Requested basic constraints isCA value. The isCA value is used to set the `isCA` field on the created CertificateRequest resources. Note that the issuer may choose to ignore the requested isCA value, just like any other requested attribute.
             *  If true, this will automatically add the `cert sign` usage to the list of requested `usages`.
             */
            isCA: boolean;
            issuerRef: outputs.cert_manager.v1.CertificateSpecIssuerRef;
            keystores: outputs.cert_manager.v1.CertificateSpecKeystores;
            /**
             * Requested X.509 certificate subject, represented using the LDAP "String Representation of a Distinguished Name" [1]. Important: the LDAP string format also specifies the order of the attributes in the subject, this is important when issuing certs for LDAP authentication. Example: `CN=foo,DC=corp,DC=example,DC=com` More info [1]: https://datatracker.ietf.org/doc/html/rfc4514 More info: https://github.com/cert-manager/cert-manager/issues/3203 More info: https://github.com/cert-manager/cert-manager/issues/4424
             *  Cannot be set if the `subject` or `commonName` field is set. This is an Alpha Feature and is only enabled with the `--feature-gates=LiteralCertificateSubject=true` option set on both the controller and webhook components.
             */
            literalSubject: string;
            nameConstraints: outputs.cert_manager.v1.CertificateSpecNameConstraints;
            /**
             * `otherNames` is an escape hatch for SAN that allows any type. We currently restrict the support to string like otherNames, cf RFC 5280 p 37 Any UTF8 String valued otherName can be passed with by setting the keys oid: x.x.x.x and UTF8Value: somevalue for `otherName`. Most commonly this would be UPN set with oid: 1.3.6.1.4.1.311.20.2.3 You should ensure that any OID passed is valid for the UTF8String type as we do not explicitly validate this.
             */
            otherNames: outputs.cert_manager.v1.CertificateSpecOtherNames[];
            privateKey: outputs.cert_manager.v1.CertificateSpecPrivateKey;
            /**
             * How long before the currently issued certificate's expiry cert-manager should renew the certificate. For example, if a certificate is valid for 60 minutes, and `renewBefore=10m`, cert-manager will begin to attempt to renew the certificate 50 minutes after it was issued (i.e. when there are 10 minutes remaining until the certificate is no longer valid).
             *  NOTE: The actual lifetime of the issued certificate is used to determine the renewal time. If an issuer returns a certificate with a different lifetime than the one requested, cert-manager will use the lifetime of the issued certificate.
             *  If unset, this defaults to 1/3 of the issued certificate's lifetime. Minimum accepted value is 5 minutes. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration.
             */
            renewBefore: string;
            /**
             * The maximum number of CertificateRequest revisions that are maintained in the Certificate's history. Each revision represents a single `CertificateRequest` created by this Certificate, either when it was created, renewed, or Spec was changed. Revisions will be removed by oldest first if the number of revisions exceeds this number.
             *  If set, revisionHistoryLimit must be a value of `1` or greater. If unset (`nil`), revisions will not be garbage collected. Default value is `nil`.
             */
            revisionHistoryLimit: number;
            /**
             * Name of the Secret resource that will be automatically created and managed by this Certificate resource. It will be populated with a private key and certificate, signed by the denoted issuer. The Secret resource lives in the same namespace as the Certificate resource.
             */
            secretName: string;
            secretTemplate: outputs.cert_manager.v1.CertificateSpecSecretTemplate;
            subject: outputs.cert_manager.v1.CertificateSpecSubject;
            /**
             * Requested URI subject alternative names.
             */
            uris: string[];
            /**
             * Requested key usages and extended key usages. These usages are used to set the `usages` field on the created CertificateRequest resources. If `encodeUsagesInRequest` is unset or set to `true`, the usages will additionally be encoded in the `request` field which contains the CSR blob.
             *  If unset, defaults to `digital signature` and `key encipherment`.
             */
            usages: string[];
        }
        /**
         * CertificateAdditionalOutputFormat defines an additional output format of a Certificate resource. These contain supplementary data formats of the signed certificate chain and paired private key.
         */
        interface CertificateSpecAdditionalOutputFormats {
            /**
             * Type is the name of the format type that should be written to the Certificate's target Secret.
             */
            type: string;
        }
        /**
         * CertificateAdditionalOutputFormat defines an additional output format of a Certificate resource. These contain supplementary data formats of the signed certificate chain and paired private key.
         */
        interface CertificateSpecAdditionalOutputFormatsPatch {
            /**
             * Type is the name of the format type that should be written to the Certificate's target Secret.
             */
            type: string;
        }
        /**
         * Reference to the issuer responsible for issuing the certificate. If the issuer is namespace-scoped, it must be in the same namespace as the Certificate. If the issuer is cluster-scoped, it can be used from any namespace.
         *  The `name` field of the reference must always be specified.
         */
        interface CertificateSpecIssuerRef {
            /**
             * Group of the resource being referred to.
             */
            group: string;
            /**
             * Kind of the resource being referred to.
             */
            kind: string;
            /**
             * Name of the resource being referred to.
             */
            name: string;
        }
        /**
         * Reference to the issuer responsible for issuing the certificate. If the issuer is namespace-scoped, it must be in the same namespace as the Certificate. If the issuer is cluster-scoped, it can be used from any namespace.
         *  The `name` field of the reference must always be specified.
         */
        interface CertificateSpecIssuerRefPatch {
            /**
             * Group of the resource being referred to.
             */
            group: string;
            /**
             * Kind of the resource being referred to.
             */
            kind: string;
            /**
             * Name of the resource being referred to.
             */
            name: string;
        }
        /**
         * Additional keystore output formats to be stored in the Certificate's Secret.
         */
        interface CertificateSpecKeystores {
            jks: outputs.cert_manager.v1.CertificateSpecKeystoresJks;
            pkcs12: outputs.cert_manager.v1.CertificateSpecKeystoresPkcs12;
        }
        /**
         * JKS configures options for storing a JKS keystore in the `spec.secretName` Secret resource.
         */
        interface CertificateSpecKeystoresJks {
            /**
             * Create enables JKS keystore creation for the Certificate. If true, a file named `keystore.jks` will be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef`. The keystore file will be updated immediately. If the issuer provided a CA certificate, a file named `truststore.jks` will also be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef` containing the issuing Certificate Authority
             */
            create: boolean;
            passwordSecretRef: outputs.cert_manager.v1.CertificateSpecKeystoresJksPasswordSecretRef;
        }
        /**
         * PasswordSecretRef is a reference to a key in a Secret resource containing the password used to encrypt the JKS keystore.
         */
        interface CertificateSpecKeystoresJksPasswordSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * PasswordSecretRef is a reference to a key in a Secret resource containing the password used to encrypt the JKS keystore.
         */
        interface CertificateSpecKeystoresJksPasswordSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * JKS configures options for storing a JKS keystore in the `spec.secretName` Secret resource.
         */
        interface CertificateSpecKeystoresJksPatch {
            /**
             * Create enables JKS keystore creation for the Certificate. If true, a file named `keystore.jks` will be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef`. The keystore file will be updated immediately. If the issuer provided a CA certificate, a file named `truststore.jks` will also be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef` containing the issuing Certificate Authority
             */
            create: boolean;
            passwordSecretRef: outputs.cert_manager.v1.CertificateSpecKeystoresJksPasswordSecretRefPatch;
        }
        /**
         * Additional keystore output formats to be stored in the Certificate's Secret.
         */
        interface CertificateSpecKeystoresPatch {
            jks: outputs.cert_manager.v1.CertificateSpecKeystoresJksPatch;
            pkcs12: outputs.cert_manager.v1.CertificateSpecKeystoresPkcs12Patch;
        }
        /**
         * PKCS12 configures options for storing a PKCS12 keystore in the `spec.secretName` Secret resource.
         */
        interface CertificateSpecKeystoresPkcs12 {
            /**
             * Create enables PKCS12 keystore creation for the Certificate. If true, a file named `keystore.p12` will be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef`. The keystore file will be updated immediately. If the issuer provided a CA certificate, a file named `truststore.p12` will also be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef` containing the issuing Certificate Authority
             */
            create: boolean;
            passwordSecretRef: outputs.cert_manager.v1.CertificateSpecKeystoresPkcs12PasswordSecretRef;
            /**
             * Profile specifies the key and certificate encryption algorithms and the HMAC algorithm used to create the PKCS12 keystore. Default value is `LegacyRC2` for backward compatibility.
             *  If provided, allowed values are: `LegacyRC2`: Deprecated. Not supported by default in OpenSSL 3 or Java 20. `LegacyDES`: Less secure algorithm. Use this option for maximal compatibility. `Modern2023`: Secure algorithm. Use this option in case you have to always use secure algorithms (eg. because of company policy). Please note that the security of the algorithm is not that important in reality, because the unencrypted certificate and private key are also stored in the Secret.
             */
            profile: string;
        }
        /**
         * PasswordSecretRef is a reference to a key in a Secret resource containing the password used to encrypt the PKCS12 keystore.
         */
        interface CertificateSpecKeystoresPkcs12PasswordSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * PasswordSecretRef is a reference to a key in a Secret resource containing the password used to encrypt the PKCS12 keystore.
         */
        interface CertificateSpecKeystoresPkcs12PasswordSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * PKCS12 configures options for storing a PKCS12 keystore in the `spec.secretName` Secret resource.
         */
        interface CertificateSpecKeystoresPkcs12Patch {
            /**
             * Create enables PKCS12 keystore creation for the Certificate. If true, a file named `keystore.p12` will be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef`. The keystore file will be updated immediately. If the issuer provided a CA certificate, a file named `truststore.p12` will also be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef` containing the issuing Certificate Authority
             */
            create: boolean;
            passwordSecretRef: outputs.cert_manager.v1.CertificateSpecKeystoresPkcs12PasswordSecretRefPatch;
            /**
             * Profile specifies the key and certificate encryption algorithms and the HMAC algorithm used to create the PKCS12 keystore. Default value is `LegacyRC2` for backward compatibility.
             *  If provided, allowed values are: `LegacyRC2`: Deprecated. Not supported by default in OpenSSL 3 or Java 20. `LegacyDES`: Less secure algorithm. Use this option for maximal compatibility. `Modern2023`: Secure algorithm. Use this option in case you have to always use secure algorithms (eg. because of company policy). Please note that the security of the algorithm is not that important in reality, because the unencrypted certificate and private key are also stored in the Secret.
             */
            profile: string;
        }
        /**
         * x.509 certificate NameConstraint extension which MUST NOT be used in a non-CA certificate. More Info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.10
         *  This is an Alpha Feature and is only enabled with the `--feature-gates=NameConstraints=true` option set on both the controller and webhook components.
         */
        interface CertificateSpecNameConstraints {
            /**
             * if true then the name constraints are marked critical.
             */
            critical: boolean;
            excluded: outputs.cert_manager.v1.CertificateSpecNameConstraintsExcluded;
            permitted: outputs.cert_manager.v1.CertificateSpecNameConstraintsPermitted;
        }
        /**
         * Excluded contains the constraints which must be disallowed. Any name matching a restriction in the excluded field is invalid regardless of information appearing in the permitted
         */
        interface CertificateSpecNameConstraintsExcluded {
            /**
             * DNSDomains is a list of DNS domains that are permitted or excluded.
             */
            dnsDomains: string[];
            /**
             * EmailAddresses is a list of Email Addresses that are permitted or excluded.
             */
            emailAddresses: string[];
            /**
             * IPRanges is a list of IP Ranges that are permitted or excluded. This should be a valid CIDR notation.
             */
            ipRanges: string[];
            /**
             * URIDomains is a list of URI domains that are permitted or excluded.
             */
            uriDomains: string[];
        }
        /**
         * Excluded contains the constraints which must be disallowed. Any name matching a restriction in the excluded field is invalid regardless of information appearing in the permitted
         */
        interface CertificateSpecNameConstraintsExcludedPatch {
            /**
             * DNSDomains is a list of DNS domains that are permitted or excluded.
             */
            dnsDomains: string[];
            /**
             * EmailAddresses is a list of Email Addresses that are permitted or excluded.
             */
            emailAddresses: string[];
            /**
             * IPRanges is a list of IP Ranges that are permitted or excluded. This should be a valid CIDR notation.
             */
            ipRanges: string[];
            /**
             * URIDomains is a list of URI domains that are permitted or excluded.
             */
            uriDomains: string[];
        }
        /**
         * x.509 certificate NameConstraint extension which MUST NOT be used in a non-CA certificate. More Info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.10
         *  This is an Alpha Feature and is only enabled with the `--feature-gates=NameConstraints=true` option set on both the controller and webhook components.
         */
        interface CertificateSpecNameConstraintsPatch {
            /**
             * if true then the name constraints are marked critical.
             */
            critical: boolean;
            excluded: outputs.cert_manager.v1.CertificateSpecNameConstraintsExcludedPatch;
            permitted: outputs.cert_manager.v1.CertificateSpecNameConstraintsPermittedPatch;
        }
        /**
         * Permitted contains the constraints in which the names must be located.
         */
        interface CertificateSpecNameConstraintsPermitted {
            /**
             * DNSDomains is a list of DNS domains that are permitted or excluded.
             */
            dnsDomains: string[];
            /**
             * EmailAddresses is a list of Email Addresses that are permitted or excluded.
             */
            emailAddresses: string[];
            /**
             * IPRanges is a list of IP Ranges that are permitted or excluded. This should be a valid CIDR notation.
             */
            ipRanges: string[];
            /**
             * URIDomains is a list of URI domains that are permitted or excluded.
             */
            uriDomains: string[];
        }
        /**
         * Permitted contains the constraints in which the names must be located.
         */
        interface CertificateSpecNameConstraintsPermittedPatch {
            /**
             * DNSDomains is a list of DNS domains that are permitted or excluded.
             */
            dnsDomains: string[];
            /**
             * EmailAddresses is a list of Email Addresses that are permitted or excluded.
             */
            emailAddresses: string[];
            /**
             * IPRanges is a list of IP Ranges that are permitted or excluded. This should be a valid CIDR notation.
             */
            ipRanges: string[];
            /**
             * URIDomains is a list of URI domains that are permitted or excluded.
             */
            uriDomains: string[];
        }
        interface CertificateSpecOtherNames {
            /**
             * OID is the object identifier for the otherName SAN. The object identifier must be expressed as a dotted string, for example, "1.2.840.113556.1.4.221".
             */
            oid: string;
            /**
             * utf8Value is the string value of the otherName SAN. The utf8Value accepts any valid UTF8 string to set as value for the otherName SAN.
             */
            utf8Value: string;
        }
        interface CertificateSpecOtherNamesPatch {
            /**
             * OID is the object identifier for the otherName SAN. The object identifier must be expressed as a dotted string, for example, "1.2.840.113556.1.4.221".
             */
            oid: string;
            /**
             * utf8Value is the string value of the otherName SAN. The utf8Value accepts any valid UTF8 string to set as value for the otherName SAN.
             */
            utf8Value: string;
        }
        /**
         * Specification of the desired state of the Certificate resource. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface CertificateSpecPatch {
            /**
             * Defines extra output formats of the private key and signed certificate chain to be written to this Certificate's target Secret.
             *  This is an Alpha Feature and is only enabled with the `--feature-gates=AdditionalCertificateOutputFormats=true` option set on both the controller and webhook components.
             */
            additionalOutputFormats: outputs.cert_manager.v1.CertificateSpecAdditionalOutputFormatsPatch[];
            /**
             * Requested common name X509 certificate subject attribute. More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6 NOTE: TLS clients will ignore this value when any subject alternative name is set (see https://tools.ietf.org/html/rfc6125#section-6.4.4).
             *  Should have a length of 64 characters or fewer to avoid generating invalid CSRs. Cannot be set if the `literalSubject` field is set.
             */
            commonName: string;
            /**
             * Requested DNS subject alternative names.
             */
            dnsNames: string[];
            /**
             * Requested 'duration' (i.e. lifetime) of the Certificate. Note that the issuer may choose to ignore the requested duration, just like any other requested attribute.
             *  If unset, this defaults to 90 days. Minimum accepted duration is 1 hour. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration.
             */
            duration: string;
            /**
             * Requested email subject alternative names.
             */
            emailAddresses: string[];
            /**
             * Whether the KeyUsage and ExtKeyUsage extensions should be set in the encoded CSR.
             *  This option defaults to true, and should only be disabled if the target issuer does not support CSRs with these X509 KeyUsage/ ExtKeyUsage extensions.
             */
            encodeUsagesInRequest: boolean;
            /**
             * Requested IP address subject alternative names.
             */
            ipAddresses: string[];
            /**
             * Requested basic constraints isCA value. The isCA value is used to set the `isCA` field on the created CertificateRequest resources. Note that the issuer may choose to ignore the requested isCA value, just like any other requested attribute.
             *  If true, this will automatically add the `cert sign` usage to the list of requested `usages`.
             */
            isCA: boolean;
            issuerRef: outputs.cert_manager.v1.CertificateSpecIssuerRefPatch;
            keystores: outputs.cert_manager.v1.CertificateSpecKeystoresPatch;
            /**
             * Requested X.509 certificate subject, represented using the LDAP "String Representation of a Distinguished Name" [1]. Important: the LDAP string format also specifies the order of the attributes in the subject, this is important when issuing certs for LDAP authentication. Example: `CN=foo,DC=corp,DC=example,DC=com` More info [1]: https://datatracker.ietf.org/doc/html/rfc4514 More info: https://github.com/cert-manager/cert-manager/issues/3203 More info: https://github.com/cert-manager/cert-manager/issues/4424
             *  Cannot be set if the `subject` or `commonName` field is set. This is an Alpha Feature and is only enabled with the `--feature-gates=LiteralCertificateSubject=true` option set on both the controller and webhook components.
             */
            literalSubject: string;
            nameConstraints: outputs.cert_manager.v1.CertificateSpecNameConstraintsPatch;
            /**
             * `otherNames` is an escape hatch for SAN that allows any type. We currently restrict the support to string like otherNames, cf RFC 5280 p 37 Any UTF8 String valued otherName can be passed with by setting the keys oid: x.x.x.x and UTF8Value: somevalue for `otherName`. Most commonly this would be UPN set with oid: 1.3.6.1.4.1.311.20.2.3 You should ensure that any OID passed is valid for the UTF8String type as we do not explicitly validate this.
             */
            otherNames: outputs.cert_manager.v1.CertificateSpecOtherNamesPatch[];
            privateKey: outputs.cert_manager.v1.CertificateSpecPrivateKeyPatch;
            /**
             * How long before the currently issued certificate's expiry cert-manager should renew the certificate. For example, if a certificate is valid for 60 minutes, and `renewBefore=10m`, cert-manager will begin to attempt to renew the certificate 50 minutes after it was issued (i.e. when there are 10 minutes remaining until the certificate is no longer valid).
             *  NOTE: The actual lifetime of the issued certificate is used to determine the renewal time. If an issuer returns a certificate with a different lifetime than the one requested, cert-manager will use the lifetime of the issued certificate.
             *  If unset, this defaults to 1/3 of the issued certificate's lifetime. Minimum accepted value is 5 minutes. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration.
             */
            renewBefore: string;
            /**
             * The maximum number of CertificateRequest revisions that are maintained in the Certificate's history. Each revision represents a single `CertificateRequest` created by this Certificate, either when it was created, renewed, or Spec was changed. Revisions will be removed by oldest first if the number of revisions exceeds this number.
             *  If set, revisionHistoryLimit must be a value of `1` or greater. If unset (`nil`), revisions will not be garbage collected. Default value is `nil`.
             */
            revisionHistoryLimit: number;
            /**
             * Name of the Secret resource that will be automatically created and managed by this Certificate resource. It will be populated with a private key and certificate, signed by the denoted issuer. The Secret resource lives in the same namespace as the Certificate resource.
             */
            secretName: string;
            secretTemplate: outputs.cert_manager.v1.CertificateSpecSecretTemplatePatch;
            subject: outputs.cert_manager.v1.CertificateSpecSubjectPatch;
            /**
             * Requested URI subject alternative names.
             */
            uris: string[];
            /**
             * Requested key usages and extended key usages. These usages are used to set the `usages` field on the created CertificateRequest resources. If `encodeUsagesInRequest` is unset or set to `true`, the usages will additionally be encoded in the `request` field which contains the CSR blob.
             *  If unset, defaults to `digital signature` and `key encipherment`.
             */
            usages: string[];
        }
        /**
         * Private key options. These include the key algorithm and size, the used encoding and the rotation policy.
         */
        interface CertificateSpecPrivateKey {
            /**
             * Algorithm is the private key algorithm of the corresponding private key for this certificate.
             *  If provided, allowed values are either `RSA`, `ECDSA` or `Ed25519`. If `algorithm` is specified and `size` is not provided, key size of 2048 will be used for `RSA` key algorithm and key size of 256 will be used for `ECDSA` key algorithm. key size is ignored when using the `Ed25519` key algorithm.
             */
            algorithm: string;
            /**
             * The private key cryptography standards (PKCS) encoding for this certificate's private key to be encoded in.
             *  If provided, allowed values are `PKCS1` and `PKCS8` standing for PKCS#1 and PKCS#8, respectively. Defaults to `PKCS1` if not specified.
             */
            encoding: string;
            /**
             * RotationPolicy controls how private keys should be regenerated when a re-issuance is being processed.
             *  If set to `Never`, a private key will only be generated if one does not already exist in the target `spec.secretName`. If one does exists but it does not have the correct algorithm or size, a warning will be raised to await user intervention. If set to `Always`, a private key matching the specified requirements will be generated whenever a re-issuance occurs. Default is `Never` for backward compatibility.
             */
            rotationPolicy: string;
            /**
             * Size is the key bit size of the corresponding private key for this certificate.
             *  If `algorithm` is set to `RSA`, valid values are `2048`, `4096` or `8192`, and will default to `2048` if not specified. If `algorithm` is set to `ECDSA`, valid values are `256`, `384` or `521`, and will default to `256` if not specified. If `algorithm` is set to `Ed25519`, Size is ignored. No other values are allowed.
             */
            size: number;
        }
        /**
         * Private key options. These include the key algorithm and size, the used encoding and the rotation policy.
         */
        interface CertificateSpecPrivateKeyPatch {
            /**
             * Algorithm is the private key algorithm of the corresponding private key for this certificate.
             *  If provided, allowed values are either `RSA`, `ECDSA` or `Ed25519`. If `algorithm` is specified and `size` is not provided, key size of 2048 will be used for `RSA` key algorithm and key size of 256 will be used for `ECDSA` key algorithm. key size is ignored when using the `Ed25519` key algorithm.
             */
            algorithm: string;
            /**
             * The private key cryptography standards (PKCS) encoding for this certificate's private key to be encoded in.
             *  If provided, allowed values are `PKCS1` and `PKCS8` standing for PKCS#1 and PKCS#8, respectively. Defaults to `PKCS1` if not specified.
             */
            encoding: string;
            /**
             * RotationPolicy controls how private keys should be regenerated when a re-issuance is being processed.
             *  If set to `Never`, a private key will only be generated if one does not already exist in the target `spec.secretName`. If one does exists but it does not have the correct algorithm or size, a warning will be raised to await user intervention. If set to `Always`, a private key matching the specified requirements will be generated whenever a re-issuance occurs. Default is `Never` for backward compatibility.
             */
            rotationPolicy: string;
            /**
             * Size is the key bit size of the corresponding private key for this certificate.
             *  If `algorithm` is set to `RSA`, valid values are `2048`, `4096` or `8192`, and will default to `2048` if not specified. If `algorithm` is set to `ECDSA`, valid values are `256`, `384` or `521`, and will default to `256` if not specified. If `algorithm` is set to `Ed25519`, Size is ignored. No other values are allowed.
             */
            size: number;
        }
        /**
         * Defines annotations and labels to be copied to the Certificate's Secret. Labels and annotations on the Secret will be changed as they appear on the SecretTemplate when added or removed. SecretTemplate annotations are added in conjunction with, and cannot overwrite, the base set of annotations cert-manager sets on the Certificate's Secret.
         */
        interface CertificateSpecSecretTemplate {
            /**
             * Annotations is a key value map to be copied to the target Kubernetes Secret.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels is a key value map to be copied to the target Kubernetes Secret.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Defines annotations and labels to be copied to the Certificate's Secret. Labels and annotations on the Secret will be changed as they appear on the SecretTemplate when added or removed. SecretTemplate annotations are added in conjunction with, and cannot overwrite, the base set of annotations cert-manager sets on the Certificate's Secret.
         */
        interface CertificateSpecSecretTemplatePatch {
            /**
             * Annotations is a key value map to be copied to the target Kubernetes Secret.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels is a key value map to be copied to the target Kubernetes Secret.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Requested set of X509 certificate subject attributes. More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6
         *  The common name attribute is specified separately in the `commonName` field. Cannot be set if the `literalSubject` field is set.
         */
        interface CertificateSpecSubject {
            /**
             * Countries to be used on the Certificate.
             */
            countries: string[];
            /**
             * Cities to be used on the Certificate.
             */
            localities: string[];
            /**
             * Organizational Units to be used on the Certificate.
             */
            organizationalUnits: string[];
            /**
             * Organizations to be used on the Certificate.
             */
            organizations: string[];
            /**
             * Postal codes to be used on the Certificate.
             */
            postalCodes: string[];
            /**
             * State/Provinces to be used on the Certificate.
             */
            provinces: string[];
            /**
             * Serial number to be used on the Certificate.
             */
            serialNumber: string;
            /**
             * Street addresses to be used on the Certificate.
             */
            streetAddresses: string[];
        }
        /**
         * Requested set of X509 certificate subject attributes. More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6
         *  The common name attribute is specified separately in the `commonName` field. Cannot be set if the `literalSubject` field is set.
         */
        interface CertificateSpecSubjectPatch {
            /**
             * Countries to be used on the Certificate.
             */
            countries: string[];
            /**
             * Cities to be used on the Certificate.
             */
            localities: string[];
            /**
             * Organizational Units to be used on the Certificate.
             */
            organizationalUnits: string[];
            /**
             * Organizations to be used on the Certificate.
             */
            organizations: string[];
            /**
             * Postal codes to be used on the Certificate.
             */
            postalCodes: string[];
            /**
             * State/Provinces to be used on the Certificate.
             */
            provinces: string[];
            /**
             * Serial number to be used on the Certificate.
             */
            serialNumber: string;
            /**
             * Street addresses to be used on the Certificate.
             */
            streetAddresses: string[];
        }
        /**
         * Status of the Certificate. This is set and managed automatically. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface CertificateStatus {
            /**
             * List of status conditions to indicate the status of certificates. Known condition types are `Ready` and `Issuing`.
             */
            conditions: outputs.cert_manager.v1.CertificateStatusConditions[];
            /**
             * The number of continuous failed issuance attempts up till now. This field gets removed (if set) on a successful issuance and gets set to 1 if unset and an issuance has failed. If an issuance has failed, the delay till the next issuance will be calculated using formula time.Hour * 2 ^ (failedIssuanceAttempts - 1).
             */
            failedIssuanceAttempts: number;
            /**
             * LastFailureTime is set only if the lastest issuance for this Certificate failed and contains the time of the failure. If an issuance has failed, the delay till the next issuance will be calculated using formula time.Hour * 2 ^ (failedIssuanceAttempts - 1). If the latest issuance has succeeded this field will be unset.
             */
            lastFailureTime: string;
            /**
             * The name of the Secret resource containing the private key to be used for the next certificate iteration. The keymanager controller will automatically set this field if the `Issuing` condition is set to `True`. It will automatically unset this field when the Issuing condition is not set or False.
             */
            nextPrivateKeySecretName: string;
            /**
             * The expiration time of the certificate stored in the secret named by this resource in `spec.secretName`.
             */
            notAfter: string;
            /**
             * The time after which the certificate stored in the secret named by this resource in `spec.secretName` is valid.
             */
            notBefore: string;
            /**
             * RenewalTime is the time at which the certificate will be next renewed. If not set, no upcoming renewal is scheduled.
             */
            renewalTime: string;
            /**
             * The current 'revision' of the certificate as issued.
             *  When a CertificateRequest resource is created, it will have the `cert-manager.io/certificate-revision` set to one greater than the current value of this field.
             *  Upon issuance, this field will be set to the value of the annotation on the CertificateRequest resource used to issue the certificate.
             *  Persisting the value on the CertificateRequest resource allows the certificates controller to know whether a request is part of an old issuance or if it is part of the ongoing revision's issuance by checking if the revision value in the annotation is greater than this field.
             */
            revision: number;
        }
        /**
         * CertificateCondition contains condition information for an Certificate.
         */
        interface CertificateStatusConditions {
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            lastTransitionTime: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            message: string;
            /**
             * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Certificate.
             */
            observedGeneration: number;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            reason: string;
            /**
             * Status of the condition, one of (`True`, `False`, `Unknown`).
             */
            status: string;
            /**
             * Type of the condition, known values are (`Ready`, `Issuing`).
             */
            type: string;
        }
        /**
         * CertificateCondition contains condition information for an Certificate.
         */
        interface CertificateStatusConditionsPatch {
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            lastTransitionTime: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            message: string;
            /**
             * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Certificate.
             */
            observedGeneration: number;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            reason: string;
            /**
             * Status of the condition, one of (`True`, `False`, `Unknown`).
             */
            status: string;
            /**
             * Type of the condition, known values are (`Ready`, `Issuing`).
             */
            type: string;
        }
        /**
         * Status of the Certificate. This is set and managed automatically. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface CertificateStatusPatch {
            /**
             * List of status conditions to indicate the status of certificates. Known condition types are `Ready` and `Issuing`.
             */
            conditions: outputs.cert_manager.v1.CertificateStatusConditionsPatch[];
            /**
             * The number of continuous failed issuance attempts up till now. This field gets removed (if set) on a successful issuance and gets set to 1 if unset and an issuance has failed. If an issuance has failed, the delay till the next issuance will be calculated using formula time.Hour * 2 ^ (failedIssuanceAttempts - 1).
             */
            failedIssuanceAttempts: number;
            /**
             * LastFailureTime is set only if the lastest issuance for this Certificate failed and contains the time of the failure. If an issuance has failed, the delay till the next issuance will be calculated using formula time.Hour * 2 ^ (failedIssuanceAttempts - 1). If the latest issuance has succeeded this field will be unset.
             */
            lastFailureTime: string;
            /**
             * The name of the Secret resource containing the private key to be used for the next certificate iteration. The keymanager controller will automatically set this field if the `Issuing` condition is set to `True`. It will automatically unset this field when the Issuing condition is not set or False.
             */
            nextPrivateKeySecretName: string;
            /**
             * The expiration time of the certificate stored in the secret named by this resource in `spec.secretName`.
             */
            notAfter: string;
            /**
             * The time after which the certificate stored in the secret named by this resource in `spec.secretName` is valid.
             */
            notBefore: string;
            /**
             * RenewalTime is the time at which the certificate will be next renewed. If not set, no upcoming renewal is scheduled.
             */
            renewalTime: string;
            /**
             * The current 'revision' of the certificate as issued.
             *  When a CertificateRequest resource is created, it will have the `cert-manager.io/certificate-revision` set to one greater than the current value of this field.
             *  Upon issuance, this field will be set to the value of the annotation on the CertificateRequest resource used to issue the certificate.
             *  Persisting the value on the CertificateRequest resource allows the certificates controller to know whether a request is part of an old issuance or if it is part of the ongoing revision's issuance by checking if the revision value in the annotation is greater than this field.
             */
            revision: number;
        }
        /**
         * A ClusterIssuer represents a certificate issuing authority which can be referenced as part of `issuerRef` fields. It is similar to an Issuer, however it is cluster-scoped and therefore can be referenced by resources that exist in *any* namespace, not just the same namespace as the referent.
         */
        interface ClusterIssuer {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "cert-manager.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ClusterIssuer";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.cert_manager.v1.ClusterIssuerSpec;
            status: outputs.cert_manager.v1.ClusterIssuerStatus;
        }
        /**
         * Desired state of the ClusterIssuer resource.
         */
        interface ClusterIssuerSpec {
            acme: outputs.cert_manager.v1.ClusterIssuerSpecAcme;
            ca: outputs.cert_manager.v1.ClusterIssuerSpecCa;
            selfSigned: outputs.cert_manager.v1.ClusterIssuerSpecSelfSigned;
            vault: outputs.cert_manager.v1.ClusterIssuerSpecVault;
            venafi: outputs.cert_manager.v1.ClusterIssuerSpecVenafi;
        }
        /**
         * ACME configures this issuer to communicate with a RFC8555 (ACME) server to obtain signed x509 certificates.
         */
        interface ClusterIssuerSpecAcme {
            /**
             * Base64-encoded bundle of PEM CAs which can be used to validate the certificate chain presented by the ACME server. Mutually exclusive with SkipTLSVerify; prefer using CABundle to prevent various kinds of security vulnerabilities. If CABundle and SkipTLSVerify are unset, the system certificate bundle inside the container is used to validate the TLS connection.
             */
            caBundle: string;
            /**
             * Enables or disables generating a new ACME account key. If true, the Issuer resource will *not* request a new account but will expect the account key to be supplied via an existing secret. If false, the cert-manager system will generate a new ACME account key for the Issuer. Defaults to false.
             */
            disableAccountKeyGeneration: boolean;
            /**
             * Email is the email address to be associated with the ACME account. This field is optional, but it is strongly recommended to be set. It will be used to contact you in case of issues with your account or certificates, including expiry notification emails. This field may be updated after the account is initially registered.
             */
            email: string;
            /**
             * Enables requesting a Not After date on certificates that matches the duration of the certificate. This is not supported by all ACME servers like Let's Encrypt. If set to true when the ACME server does not support it it will create an error on the Order. Defaults to false.
             */
            enableDurationFeature: boolean;
            externalAccountBinding: outputs.cert_manager.v1.ClusterIssuerSpecAcmeExternalAccountBinding;
            /**
             * PreferredChain is the chain to use if the ACME server outputs multiple. PreferredChain is no guarantee that this one gets delivered by the ACME endpoint. For example, for Let's Encrypt's DST crosssign you would use: "DST Root CA X3" or "ISRG Root X1" for the newer Let's Encrypt root CA. This value picks the first certificate bundle in the ACME alternative chains that has a certificate with this value as its issuer's CN
             */
            preferredChain: string;
            privateKeySecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmePrivateKeySecretRef;
            /**
             * Server is the URL used to access the ACME server's 'directory' endpoint. For example, for Let's Encrypt's staging endpoint, you would use: "https://acme-staging-v02.api.letsencrypt.org/directory". Only ACME v2 endpoints (i.e. RFC 8555) are supported.
             */
            server: string;
            /**
             * INSECURE: Enables or disables validation of the ACME server TLS certificate. If true, requests to the ACME server will not have the TLS certificate chain validated. Mutually exclusive with CABundle; prefer using CABundle to prevent various kinds of security vulnerabilities. Only enable this option in development environments. If CABundle and SkipTLSVerify are unset, the system certificate bundle inside the container is used to validate the TLS connection. Defaults to false.
             */
            skipTLSVerify: boolean;
            /**
             * Solvers is a list of challenge solvers that will be used to solve ACME challenges for the matching domains. Solver configurations must be provided in order to obtain certificates from an ACME server. For more information, see: https://cert-manager.io/docs/configuration/acme/
             */
            solvers: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolvers[];
        }
        /**
         * ExternalAccountBinding is a reference to a CA external account of the ACME server. If set, upon registration cert-manager will attempt to associate the given external account credentials with the registered ACME account.
         */
        interface ClusterIssuerSpecAcmeExternalAccountBinding {
            /**
             * Deprecated: keyAlgorithm field exists for historical compatibility reasons and should not be used. The algorithm is now hardcoded to HS256 in golang/x/crypto/acme.
             */
            keyAlgorithm: string;
            /**
             * keyID is the ID of the CA key that the External Account is bound to.
             */
            keyID: string;
            keySecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRef;
        }
        /**
         * keySecretRef is a Secret Key Selector referencing a data item in a Kubernetes Secret which holds the symmetric MAC key of the External Account Binding. The `key` is the index string that is paired with the key data in the Secret and should not be confused with the key data itself, or indeed with the External Account Binding keyID above. The secret key stored in the Secret **must** be un-padded, base64 URL encoded data.
         */
        interface ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * keySecretRef is a Secret Key Selector referencing a data item in a Kubernetes Secret which holds the symmetric MAC key of the External Account Binding. The `key` is the index string that is paired with the key data in the Secret and should not be confused with the key data itself, or indeed with the External Account Binding keyID above. The secret key stored in the Secret **must** be un-padded, base64 URL encoded data.
         */
        interface ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * ExternalAccountBinding is a reference to a CA external account of the ACME server. If set, upon registration cert-manager will attempt to associate the given external account credentials with the registered ACME account.
         */
        interface ClusterIssuerSpecAcmeExternalAccountBindingPatch {
            /**
             * Deprecated: keyAlgorithm field exists for historical compatibility reasons and should not be used. The algorithm is now hardcoded to HS256 in golang/x/crypto/acme.
             */
            keyAlgorithm: string;
            /**
             * keyID is the ID of the CA key that the External Account is bound to.
             */
            keyID: string;
            keySecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRefPatch;
        }
        /**
         * ACME configures this issuer to communicate with a RFC8555 (ACME) server to obtain signed x509 certificates.
         */
        interface ClusterIssuerSpecAcmePatch {
            /**
             * Base64-encoded bundle of PEM CAs which can be used to validate the certificate chain presented by the ACME server. Mutually exclusive with SkipTLSVerify; prefer using CABundle to prevent various kinds of security vulnerabilities. If CABundle and SkipTLSVerify are unset, the system certificate bundle inside the container is used to validate the TLS connection.
             */
            caBundle: string;
            /**
             * Enables or disables generating a new ACME account key. If true, the Issuer resource will *not* request a new account but will expect the account key to be supplied via an existing secret. If false, the cert-manager system will generate a new ACME account key for the Issuer. Defaults to false.
             */
            disableAccountKeyGeneration: boolean;
            /**
             * Email is the email address to be associated with the ACME account. This field is optional, but it is strongly recommended to be set. It will be used to contact you in case of issues with your account or certificates, including expiry notification emails. This field may be updated after the account is initially registered.
             */
            email: string;
            /**
             * Enables requesting a Not After date on certificates that matches the duration of the certificate. This is not supported by all ACME servers like Let's Encrypt. If set to true when the ACME server does not support it it will create an error on the Order. Defaults to false.
             */
            enableDurationFeature: boolean;
            externalAccountBinding: outputs.cert_manager.v1.ClusterIssuerSpecAcmeExternalAccountBindingPatch;
            /**
             * PreferredChain is the chain to use if the ACME server outputs multiple. PreferredChain is no guarantee that this one gets delivered by the ACME endpoint. For example, for Let's Encrypt's DST crosssign you would use: "DST Root CA X3" or "ISRG Root X1" for the newer Let's Encrypt root CA. This value picks the first certificate bundle in the ACME alternative chains that has a certificate with this value as its issuer's CN
             */
            preferredChain: string;
            privateKeySecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmePrivateKeySecretRefPatch;
            /**
             * Server is the URL used to access the ACME server's 'directory' endpoint. For example, for Let's Encrypt's staging endpoint, you would use: "https://acme-staging-v02.api.letsencrypt.org/directory". Only ACME v2 endpoints (i.e. RFC 8555) are supported.
             */
            server: string;
            /**
             * INSECURE: Enables or disables validation of the ACME server TLS certificate. If true, requests to the ACME server will not have the TLS certificate chain validated. Mutually exclusive with CABundle; prefer using CABundle to prevent various kinds of security vulnerabilities. Only enable this option in development environments. If CABundle and SkipTLSVerify are unset, the system certificate bundle inside the container is used to validate the TLS connection. Defaults to false.
             */
            skipTLSVerify: boolean;
            /**
             * Solvers is a list of challenge solvers that will be used to solve ACME challenges for the matching domains. Solver configurations must be provided in order to obtain certificates from an ACME server. For more information, see: https://cert-manager.io/docs/configuration/acme/
             */
            solvers: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversPatch[];
        }
        /**
         * PrivateKey is the name of a Kubernetes Secret resource that will be used to store the automatically generated ACME account private key. Optionally, a `key` may be specified to select a specific entry within the named Secret resource. If `key` is not specified, a default of `tls.key` will be used.
         */
        interface ClusterIssuerSpecAcmePrivateKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * PrivateKey is the name of a Kubernetes Secret resource that will be used to store the automatically generated ACME account private key. Optionally, a `key` may be specified to select a specific entry within the named Secret resource. If `key` is not specified, a default of `tls.key` will be used.
         */
        interface ClusterIssuerSpecAcmePrivateKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * An ACMEChallengeSolver describes how to solve ACME challenges for the issuer it is part of. A selector may be provided to use different solving strategies for different DNS names. Only one of HTTP01 or DNS01 must be provided.
         */
        interface ClusterIssuerSpecAcmeSolvers {
            dns01: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01;
            http01: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01;
            selector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversSelector;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
         */
        interface ClusterIssuerSpecAcmeSolversDns01 {
            acmeDNS: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AcmeDNS;
            akamai: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Akamai;
            azureDNS: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AzureDNS;
            cloudDNS: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudDNS;
            cloudflare: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Cloudflare;
            /**
             * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
             */
            cnameStrategy: string;
            digitalocean: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Digitalocean;
            rfc2136: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Rfc2136;
            route53: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Route53;
            webhook: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Webhook;
        }
        /**
         * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AcmeDNS {
            accountSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AcmeDNSAccountSecretRef;
            host: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AcmeDNSAccountSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AcmeDNSAccountSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AcmeDNSPatch {
            accountSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AcmeDNSAccountSecretRefPatch;
            host: string;
        }
        /**
         * Use the Akamai DNS zone management API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Akamai {
            accessTokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AkamaiAccessTokenSecretRef;
            clientSecretSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AkamaiClientSecretSecretRef;
            clientTokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AkamaiClientTokenSecretRef;
            serviceConsumerDomain: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AkamaiAccessTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AkamaiAccessTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AkamaiClientSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AkamaiClientSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AkamaiClientTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AkamaiClientTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Akamai DNS zone management API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AkamaiPatch {
            accessTokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AkamaiAccessTokenSecretRefPatch;
            clientSecretSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AkamaiClientSecretSecretRefPatch;
            clientTokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AkamaiClientTokenSecretRefPatch;
            serviceConsumerDomain: string;
        }
        /**
         * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AzureDNS {
            /**
             * Auth: Azure Service Principal: The ClientID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientSecret and TenantID must also be set.
             */
            clientID: string;
            clientSecretSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AzureDNSClientSecretSecretRef;
            /**
             * name of the Azure environment (default AzurePublicCloud)
             */
            environment: string;
            /**
             * name of the DNS zone that should be used
             */
            hostedZoneName: string;
            managedIdentity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AzureDNSManagedIdentity;
            /**
             * resource group the DNS zone is located in
             */
            resourceGroupName: string;
            /**
             * ID of the Azure subscription
             */
            subscriptionID: string;
            /**
             * Auth: Azure Service Principal: The TenantID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientID and ClientSecret must also be set.
             */
            tenantID: string;
        }
        /**
         * Auth: Azure Service Principal: A reference to a Secret containing the password associated with the Service Principal. If set, ClientID and TenantID must also be set.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AzureDNSClientSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Auth: Azure Service Principal: A reference to a Secret containing the password associated with the Service Principal. If set, ClientID and TenantID must also be set.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AzureDNSClientSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Auth: Azure Workload Identity or Azure Managed Service Identity: Settings to enable Azure Workload Identity or Azure Managed Service Identity If set, ClientID, ClientSecret and TenantID must not be set.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AzureDNSManagedIdentity {
            /**
             * client ID of the managed identity, can not be used at the same time as resourceID
             */
            clientID: string;
            /**
             * resource ID of the managed identity, can not be used at the same time as clientID Cannot be used for Azure Managed Service Identity
             */
            resourceID: string;
        }
        /**
         * Auth: Azure Workload Identity or Azure Managed Service Identity: Settings to enable Azure Workload Identity or Azure Managed Service Identity If set, ClientID, ClientSecret and TenantID must not be set.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AzureDNSManagedIdentityPatch {
            /**
             * client ID of the managed identity, can not be used at the same time as resourceID
             */
            clientID: string;
            /**
             * resource ID of the managed identity, can not be used at the same time as clientID Cannot be used for Azure Managed Service Identity
             */
            resourceID: string;
        }
        /**
         * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01AzureDNSPatch {
            /**
             * Auth: Azure Service Principal: The ClientID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientSecret and TenantID must also be set.
             */
            clientID: string;
            clientSecretSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AzureDNSClientSecretSecretRefPatch;
            /**
             * name of the Azure environment (default AzurePublicCloud)
             */
            environment: string;
            /**
             * name of the DNS zone that should be used
             */
            hostedZoneName: string;
            managedIdentity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AzureDNSManagedIdentityPatch;
            /**
             * resource group the DNS zone is located in
             */
            resourceGroupName: string;
            /**
             * ID of the Azure subscription
             */
            subscriptionID: string;
            /**
             * Auth: Azure Service Principal: The TenantID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientID and ClientSecret must also be set.
             */
            tenantID: string;
        }
        /**
         * Use the Google Cloud DNS API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudDNS {
            /**
             * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
             */
            hostedZoneName: string;
            project: string;
            serviceAccountSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudDNSServiceAccountSecretRef;
        }
        /**
         * Use the Google Cloud DNS API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudDNSPatch {
            /**
             * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
             */
            hostedZoneName: string;
            project: string;
            serviceAccountSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudDNSServiceAccountSecretRefPatch;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudDNSServiceAccountSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudDNSServiceAccountSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Cloudflare API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Cloudflare {
            apiKeySecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudflareApiKeySecretRef;
            apiTokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudflareApiTokenSecretRef;
            /**
             * Email of the account, only required when using API key based authentication.
             */
            email: string;
        }
        /**
         * API key to use to authenticate with Cloudflare. Note: using an API token to authenticate is now the recommended method as it allows greater control of permissions.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudflareApiKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API key to use to authenticate with Cloudflare. Note: using an API token to authenticate is now the recommended method as it allows greater control of permissions.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudflareApiKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API token used to authenticate with Cloudflare.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudflareApiTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API token used to authenticate with Cloudflare.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudflareApiTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Cloudflare API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01CloudflarePatch {
            apiKeySecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudflareApiKeySecretRefPatch;
            apiTokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudflareApiTokenSecretRefPatch;
            /**
             * Email of the account, only required when using API key based authentication.
             */
            email: string;
        }
        /**
         * Use the DigitalOcean DNS API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Digitalocean {
            tokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01DigitaloceanTokenSecretRef;
        }
        /**
         * Use the DigitalOcean DNS API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01DigitaloceanPatch {
            tokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01DigitaloceanTokenSecretRefPatch;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01DigitaloceanTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface ClusterIssuerSpecAcmeSolversDns01DigitaloceanTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Patch {
            acmeDNS: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AcmeDNSPatch;
            akamai: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AkamaiPatch;
            azureDNS: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01AzureDNSPatch;
            cloudDNS: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudDNSPatch;
            cloudflare: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01CloudflarePatch;
            /**
             * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
             */
            cnameStrategy: string;
            digitalocean: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01DigitaloceanPatch;
            rfc2136: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Rfc2136Patch;
            route53: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Route53Patch;
            webhook: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01WebhookPatch;
        }
        /**
         * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/) to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Rfc2136 {
            /**
             * The IP address or hostname of an authoritative DNS server supporting RFC2136 in the form host:port. If the host is an IPv6 address it must be enclosed in square brackets (e.g [2001:db8::1]) ; port is optional. This field is required.
             */
            nameserver: string;
            /**
             * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
             */
            tsigAlgorithm: string;
            /**
             * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
             */
            tsigKeyName: string;
            tsigSecretSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Rfc2136TsigSecretSecretRef;
        }
        /**
         * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/) to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Rfc2136Patch {
            /**
             * The IP address or hostname of an authoritative DNS server supporting RFC2136 in the form host:port. If the host is an IPv6 address it must be enclosed in square brackets (e.g [2001:db8::1]) ; port is optional. This field is required.
             */
            nameserver: string;
            /**
             * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
             */
            tsigAlgorithm: string;
            /**
             * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
             */
            tsigKeyName: string;
            tsigSecretSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Rfc2136TsigSecretSecretRefPatch;
        }
        /**
         * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Rfc2136TsigSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Rfc2136TsigSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the AWS Route53 API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Route53 {
            /**
             * The AccessKeyID is used for authentication. Cannot be set when SecretAccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
             */
            accessKeyID: string;
            accessKeyIDSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Route53AccessKeyIDSecretRef;
            /**
             * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
             */
            hostedZoneID: string;
            /**
             * Always set the region when using AccessKeyID and SecretAccessKey
             */
            region: string;
            /**
             * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
             */
            role: string;
            secretAccessKeySecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Route53SecretAccessKeySecretRef;
        }
        /**
         * The SecretAccessKey is used for authentication. If set, pull the AWS access key ID from a key within a Kubernetes Secret. Cannot be set when AccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface ClusterIssuerSpecAcmeSolversDns01Route53AccessKeyIDSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The SecretAccessKey is used for authentication. If set, pull the AWS access key ID from a key within a Kubernetes Secret. Cannot be set when AccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface ClusterIssuerSpecAcmeSolversDns01Route53AccessKeyIDSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the AWS Route53 API to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Route53Patch {
            /**
             * The AccessKeyID is used for authentication. Cannot be set when SecretAccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
             */
            accessKeyID: string;
            accessKeyIDSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Route53AccessKeyIDSecretRefPatch;
            /**
             * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
             */
            hostedZoneID: string;
            /**
             * Always set the region when using AccessKeyID and SecretAccessKey
             */
            region: string;
            /**
             * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
             */
            role: string;
            secretAccessKeySecretRef: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Route53SecretAccessKeySecretRefPatch;
        }
        /**
         * The SecretAccessKey is used for authentication. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface ClusterIssuerSpecAcmeSolversDns01Route53SecretAccessKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The SecretAccessKey is used for authentication. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface ClusterIssuerSpecAcmeSolversDns01Route53SecretAccessKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Configure an external webhook based DNS01 challenge solver to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01Webhook {
            /**
             * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
             */
            config: {
                [key: string]: any;
            };
            /**
             * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
             */
            groupName: string;
            /**
             * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
             */
            solverName: string;
        }
        /**
         * Configure an external webhook based DNS01 challenge solver to manage DNS01 challenge records.
         */
        interface ClusterIssuerSpecAcmeSolversDns01WebhookPatch {
            /**
             * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
             */
            config: {
                [key: string]: any;
            };
            /**
             * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
             */
            groupName: string;
            /**
             * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
             */
            solverName: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the HTTP01 challenge flow. It is not possible to obtain certificates for wildcard domain names (e.g. `*.example.com`) using the HTTP01 challenge mechanism.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01 {
            gatewayHTTPRoute: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01GatewayHTTPRoute;
            ingress: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01Ingress;
        }
        /**
         * The Gateway API is a sig-network community API that models service networking in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will create HTTPRoutes with the specified labels in the same namespace as the challenge. This solver is experimental, and fields / behaviour may change in the future.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01GatewayHTTPRoute {
            /**
             * Custom labels that will be applied to HTTPRoutes created by cert-manager while solving HTTP-01 challenges.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * When solving an HTTP-01 challenge, cert-manager creates an HTTPRoute. cert-manager needs to know which parentRefs should be used when creating the HTTPRoute. Usually, the parentRef references a Gateway. See: https://gateway-api.sigs.k8s.io/api-types/httproute/#attaching-to-gateways
             */
            parentRefs: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01GatewayHTTPRouteParentRefs[];
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered a parent of this resource (usually a route). There are two kinds of parent resources with "Core" support:
         *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
         *  This API may be extended in the future to support additional kinds of parent resources.
         *  The API object must be valid in the cluster; the Group and Kind must be registered in the cluster for this reference to be valid.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01GatewayHTTPRouteParentRefs {
            /**
             * Group is the group of the referent. When unspecified, "gateway.networking.k8s.io" is inferred. To set the core API group (such as for a "Service" kind referent), Group must be explicitly set to "" (empty string).
             *  Support: Core
             */
            group: string;
            /**
             * Kind is kind of the referent.
             *  There are two kinds of parent resources with "Core" support:
             *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
             *  Support for other resources is Implementation-Specific.
             */
            kind: string;
            /**
             * Name is the name of the referent.
             *  Support: Core
             */
            name: string;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route.
             *  Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference.
             *  <gateway:experimental:description> ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service.
             *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route. </gateway:experimental:description>
             *  Support: Core
             */
            namespace: string;
            /**
             * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource.
             *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
             *  <gateway:experimental:description> When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values. </gateway:experimental:description>
             *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
             *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Extended
             *  <gateway:experimental>
             */
            port: number;
            /**
             * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
             *  * Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Note that attaching Routes to Services as Parents is part of experimental Mesh support and is not supported for any other purpose.
             *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
             *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Core
             */
            sectionName: string;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered a parent of this resource (usually a route). There are two kinds of parent resources with "Core" support:
         *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
         *  This API may be extended in the future to support additional kinds of parent resources.
         *  The API object must be valid in the cluster; the Group and Kind must be registered in the cluster for this reference to be valid.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01GatewayHTTPRouteParentRefsPatch {
            /**
             * Group is the group of the referent. When unspecified, "gateway.networking.k8s.io" is inferred. To set the core API group (such as for a "Service" kind referent), Group must be explicitly set to "" (empty string).
             *  Support: Core
             */
            group: string;
            /**
             * Kind is kind of the referent.
             *  There are two kinds of parent resources with "Core" support:
             *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
             *  Support for other resources is Implementation-Specific.
             */
            kind: string;
            /**
             * Name is the name of the referent.
             *  Support: Core
             */
            name: string;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route.
             *  Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference.
             *  <gateway:experimental:description> ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service.
             *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route. </gateway:experimental:description>
             *  Support: Core
             */
            namespace: string;
            /**
             * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource.
             *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
             *  <gateway:experimental:description> When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values. </gateway:experimental:description>
             *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
             *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Extended
             *  <gateway:experimental>
             */
            port: number;
            /**
             * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
             *  * Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Note that attaching Routes to Services as Parents is part of experimental Mesh support and is not supported for any other purpose.
             *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
             *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Core
             */
            sectionName: string;
        }
        /**
         * The Gateway API is a sig-network community API that models service networking in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will create HTTPRoutes with the specified labels in the same namespace as the challenge. This solver is experimental, and fields / behaviour may change in the future.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01GatewayHTTPRoutePatch {
            /**
             * Custom labels that will be applied to HTTPRoutes created by cert-manager while solving HTTP-01 challenges.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * When solving an HTTP-01 challenge, cert-manager creates an HTTPRoute. cert-manager needs to know which parentRefs should be used when creating the HTTPRoute. Usually, the parentRef references a Gateway. See: https://gateway-api.sigs.k8s.io/api-types/httproute/#attaching-to-gateways
             */
            parentRefs: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01GatewayHTTPRouteParentRefsPatch[];
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01Ingress {
            /**
             * This field configures the annotation `kubernetes.io/ingress.class` when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            class: string;
            /**
             * This field configures the field `ingressClassName` on the created Ingress resources used to solve ACME challenges that use this challenge solver. This is the recommended way of configuring the ingress class. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            ingressClassName: string;
            ingressTemplate: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressIngressTemplate;
            /**
             * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            name: string;
            podTemplate: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplate;
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressIngressTemplate {
            metadata: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressIngressTemplateMetadata;
        }
        /**
         * ObjectMeta overrides for the ingress used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressIngressTemplateMetadata {
            /**
             * Annotations that should be added to the created ACME HTTP01 solver ingress.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver ingress.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * ObjectMeta overrides for the ingress used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressIngressTemplateMetadataPatch {
            /**
             * Annotations that should be added to the created ACME HTTP01 solver ingress.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver ingress.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressIngressTemplatePatch {
            metadata: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressIngressTemplateMetadataPatch;
        }
        /**
         * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPatch {
            /**
             * This field configures the annotation `kubernetes.io/ingress.class` when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            class: string;
            /**
             * This field configures the field `ingressClassName` on the created Ingress resources used to solve ACME challenges that use this challenge solver. This is the recommended way of configuring the ingress class. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            ingressClassName: string;
            ingressTemplate: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressIngressTemplatePatch;
            /**
             * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            name: string;
            podTemplate: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplatePatch;
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplate {
            metadata: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateMetadata;
            spec: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpec;
        }
        /**
         * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateMetadata {
            /**
             * Annotations that should be added to the create ACME HTTP01 solver pods.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver pods.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateMetadataPatch {
            /**
             * Annotations that should be added to the create ACME HTTP01 solver pods.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver pods.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplatePatch {
            metadata: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateMetadataPatch;
            spec: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecPatch;
        }
        /**
         * PodSpec defines overrides for the HTTP01 challenge solver pod. Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields. All other fields will be ignored.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpec {
            affinity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinity;
            /**
             * If specified, the pod's imagePullSecrets
             */
            imagePullSecrets: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecImagePullSecrets[];
            /**
             * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
             */
            nodeSelector: {
                [key: string]: string;
            };
            /**
             * If specified, the pod's priorityClassName.
             */
            priorityClassName: string;
            /**
             * If specified, the pod's service account
             */
            serviceAccountName: string;
            /**
             * If specified, the pod's tolerations.
             */
            tolerations: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecTolerations[];
        }
        /**
         * If specified, the pod's scheduling constraints
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinity {
            nodeAffinity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinity;
            podAffinity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinity;
            podAntiAffinity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinity;
        }
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        /**
         * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        /**
         * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        /**
         * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        /**
         * If specified, the pod's scheduling constraints
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPatch {
            nodeAffinity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPatch;
            podAffinity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPatch;
            podAntiAffinity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPatch;
        }
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
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
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecImagePullSecrets {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            name: string;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecImagePullSecretsPatch {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            name: string;
        }
        /**
         * PodSpec defines overrides for the HTTP01 challenge solver pod. Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields. All other fields will be ignored.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecPatch {
            affinity: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPatch;
            /**
             * If specified, the pod's imagePullSecrets
             */
            imagePullSecrets: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecImagePullSecretsPatch[];
            /**
             * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
             */
            nodeSelector: {
                [key: string]: string;
            };
            /**
             * If specified, the pod's priorityClassName.
             */
            priorityClassName: string;
            /**
             * If specified, the pod's service account
             */
            serviceAccountName: string;
            /**
             * If specified, the pod's tolerations.
             */
            tolerations: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecTolerationsPatch[];
        }
        /**
         * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecTolerations {
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            operator: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value: string;
        }
        /**
         * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01IngressPodTemplateSpecTolerationsPatch {
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            operator: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the HTTP01 challenge flow. It is not possible to obtain certificates for wildcard domain names (e.g. `*.example.com`) using the HTTP01 challenge mechanism.
         */
        interface ClusterIssuerSpecAcmeSolversHttp01Patch {
            gatewayHTTPRoute: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01GatewayHTTPRoutePatch;
            ingress: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01IngressPatch;
        }
        /**
         * An ACMEChallengeSolver describes how to solve ACME challenges for the issuer it is part of. A selector may be provided to use different solving strategies for different DNS names. Only one of HTTP01 or DNS01 must be provided.
         */
        interface ClusterIssuerSpecAcmeSolversPatch {
            dns01: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversDns01Patch;
            http01: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversHttp01Patch;
            selector: outputs.cert_manager.v1.ClusterIssuerSpecAcmeSolversSelectorPatch;
        }
        /**
         * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver. If not specified, the solver will be treated as the 'default' solver with the lowest priority, i.e. if any other solver has a more specific match, it will be used instead.
         */
        interface ClusterIssuerSpecAcmeSolversSelector {
            /**
             * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsNames: string[];
            /**
             * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsZones: string[];
            /**
             * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver. If not specified, the solver will be treated as the 'default' solver with the lowest priority, i.e. if any other solver has a more specific match, it will be used instead.
         */
        interface ClusterIssuerSpecAcmeSolversSelectorPatch {
            /**
             * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsNames: string[];
            /**
             * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsZones: string[];
            /**
             * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * CA configures this issuer to sign certificates using a signing CA keypair stored in a Secret resource. This is used to build internal PKIs that are managed by cert-manager.
         */
        interface ClusterIssuerSpecCa {
            /**
             * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set, certificates will be issued without distribution points set.
             */
            crlDistributionPoints: string[];
            /**
             * IssuingCertificateURLs is a list of URLs which this issuer should embed into certificates it creates. See https://www.rfc-editor.org/rfc/rfc5280#section-4.2.2.1 for more details. As an example, such a URL might be "http://ca.domain.com/ca.crt".
             */
            issuingCertificateURLs: string[];
            /**
             * The OCSP server list is an X.509 v3 extension that defines a list of URLs of OCSP responders. The OCSP responders can be queried for the revocation status of an issued certificate. If not set, the certificate will be issued with no OCSP servers set. For example, an OCSP server URL could be "http://ocsp.int-x3.letsencrypt.org".
             */
            ocspServers: string[];
            /**
             * SecretName is the name of the secret used to sign Certificates issued by this Issuer.
             */
            secretName: string;
        }
        /**
         * CA configures this issuer to sign certificates using a signing CA keypair stored in a Secret resource. This is used to build internal PKIs that are managed by cert-manager.
         */
        interface ClusterIssuerSpecCaPatch {
            /**
             * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set, certificates will be issued without distribution points set.
             */
            crlDistributionPoints: string[];
            /**
             * IssuingCertificateURLs is a list of URLs which this issuer should embed into certificates it creates. See https://www.rfc-editor.org/rfc/rfc5280#section-4.2.2.1 for more details. As an example, such a URL might be "http://ca.domain.com/ca.crt".
             */
            issuingCertificateURLs: string[];
            /**
             * The OCSP server list is an X.509 v3 extension that defines a list of URLs of OCSP responders. The OCSP responders can be queried for the revocation status of an issued certificate. If not set, the certificate will be issued with no OCSP servers set. For example, an OCSP server URL could be "http://ocsp.int-x3.letsencrypt.org".
             */
            ocspServers: string[];
            /**
             * SecretName is the name of the secret used to sign Certificates issued by this Issuer.
             */
            secretName: string;
        }
        /**
         * Desired state of the ClusterIssuer resource.
         */
        interface ClusterIssuerSpecPatch {
            acme: outputs.cert_manager.v1.ClusterIssuerSpecAcmePatch;
            ca: outputs.cert_manager.v1.ClusterIssuerSpecCaPatch;
            selfSigned: outputs.cert_manager.v1.ClusterIssuerSpecSelfSignedPatch;
            vault: outputs.cert_manager.v1.ClusterIssuerSpecVaultPatch;
            venafi: outputs.cert_manager.v1.ClusterIssuerSpecVenafiPatch;
        }
        /**
         * SelfSigned configures this issuer to 'self sign' certificates using the private key used to create the CertificateRequest object.
         */
        interface ClusterIssuerSpecSelfSigned {
            /**
             * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set certificate will be issued without CDP. Values are strings.
             */
            crlDistributionPoints: string[];
        }
        /**
         * SelfSigned configures this issuer to 'self sign' certificates using the private key used to create the CertificateRequest object.
         */
        interface ClusterIssuerSpecSelfSignedPatch {
            /**
             * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set certificate will be issued without CDP. Values are strings.
             */
            crlDistributionPoints: string[];
        }
        /**
         * Vault configures this issuer to sign certificates using a HashiCorp Vault PKI backend.
         */
        interface ClusterIssuerSpecVault {
            auth: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuth;
            /**
             * Base64-encoded bundle of PEM CAs which will be used to validate the certificate chain presented by Vault. Only used if using HTTPS to connect to Vault and ignored for HTTP connections. Mutually exclusive with CABundleSecretRef. If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in the cert-manager controller container is used to validate the TLS connection.
             */
            caBundle: string;
            caBundleSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultCaBundleSecretRef;
            /**
             * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows Vault environments to support Secure Multi-tenancy. e.g: "ns1" More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
             */
            namespace: string;
            /**
             * Path is the mount path of the Vault PKI backend's `sign` endpoint, e.g: "my_pki_mount/sign/my-role-name".
             */
            path: string;
            /**
             * Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200".
             */
            server: string;
        }
        /**
         * Auth configures how cert-manager authenticates with the Vault server.
         */
        interface ClusterIssuerSpecVaultAuth {
            appRole: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthAppRole;
            kubernetes: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthKubernetes;
            tokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthTokenSecretRef;
        }
        /**
         * AppRole authenticates with Vault using the App Role auth mechanism, with the role and secret stored in a Kubernetes Secret resource.
         */
        interface ClusterIssuerSpecVaultAuthAppRole {
            /**
             * Path where the App Role authentication backend is mounted in Vault, e.g: "approle"
             */
            path: string;
            /**
             * RoleID configured in the App Role authentication backend when setting up the authentication backend in Vault.
             */
            roleId: string;
            secretRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthAppRoleSecretRef;
        }
        /**
         * AppRole authenticates with Vault using the App Role auth mechanism, with the role and secret stored in a Kubernetes Secret resource.
         */
        interface ClusterIssuerSpecVaultAuthAppRolePatch {
            /**
             * Path where the App Role authentication backend is mounted in Vault, e.g: "approle"
             */
            path: string;
            /**
             * RoleID configured in the App Role authentication backend when setting up the authentication backend in Vault.
             */
            roleId: string;
            secretRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthAppRoleSecretRefPatch;
        }
        /**
         * Reference to a key in a Secret that contains the App Role secret used to authenticate with Vault. The `key` field must be specified and denotes which entry within the Secret resource is used as the app role secret.
         */
        interface ClusterIssuerSpecVaultAuthAppRoleSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Reference to a key in a Secret that contains the App Role secret used to authenticate with Vault. The `key` field must be specified and denotes which entry within the Secret resource is used as the app role secret.
         */
        interface ClusterIssuerSpecVaultAuthAppRoleSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Kubernetes authenticates with Vault by passing the ServiceAccount token stored in the named Secret resource to the Vault server.
         */
        interface ClusterIssuerSpecVaultAuthKubernetes {
            /**
             * The Vault mountPath here is the mount path to use when authenticating with Vault. For example, setting a value to `/v1/auth/foo`, will use the path `/v1/auth/foo/login` to authenticate with Vault. If unspecified, the default value "/v1/auth/kubernetes" will be used.
             */
            mountPath: string;
            /**
             * A required field containing the Vault Role to assume. A Role binds a Kubernetes ServiceAccount with a set of Vault policies.
             */
            role: string;
            secretRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthKubernetesSecretRef;
            serviceAccountRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthKubernetesServiceAccountRef;
        }
        /**
         * Kubernetes authenticates with Vault by passing the ServiceAccount token stored in the named Secret resource to the Vault server.
         */
        interface ClusterIssuerSpecVaultAuthKubernetesPatch {
            /**
             * The Vault mountPath here is the mount path to use when authenticating with Vault. For example, setting a value to `/v1/auth/foo`, will use the path `/v1/auth/foo/login` to authenticate with Vault. If unspecified, the default value "/v1/auth/kubernetes" will be used.
             */
            mountPath: string;
            /**
             * A required field containing the Vault Role to assume. A Role binds a Kubernetes ServiceAccount with a set of Vault policies.
             */
            role: string;
            secretRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthKubernetesSecretRefPatch;
            serviceAccountRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthKubernetesServiceAccountRefPatch;
        }
        /**
         * The required Secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Vault. Use of 'ambient credentials' is not supported.
         */
        interface ClusterIssuerSpecVaultAuthKubernetesSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The required Secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Vault. Use of 'ambient credentials' is not supported.
         */
        interface ClusterIssuerSpecVaultAuthKubernetesSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a service account that will be used to request a bound token (also known as "projected token"). Compared to using "secretRef", using this field means that you don't rely on statically bound tokens. To use this field, you must configure an RBAC rule to let cert-manager request a token.
         */
        interface ClusterIssuerSpecVaultAuthKubernetesServiceAccountRef {
            /**
             * Name of the ServiceAccount used to request a token.
             */
            name: string;
        }
        /**
         * A reference to a service account that will be used to request a bound token (also known as "projected token"). Compared to using "secretRef", using this field means that you don't rely on statically bound tokens. To use this field, you must configure an RBAC rule to let cert-manager request a token.
         */
        interface ClusterIssuerSpecVaultAuthKubernetesServiceAccountRefPatch {
            /**
             * Name of the ServiceAccount used to request a token.
             */
            name: string;
        }
        /**
         * Auth configures how cert-manager authenticates with the Vault server.
         */
        interface ClusterIssuerSpecVaultAuthPatch {
            appRole: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthAppRolePatch;
            kubernetes: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthKubernetesPatch;
            tokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthTokenSecretRefPatch;
        }
        /**
         * TokenSecretRef authenticates with Vault by presenting a token.
         */
        interface ClusterIssuerSpecVaultAuthTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * TokenSecretRef authenticates with Vault by presenting a token.
         */
        interface ClusterIssuerSpecVaultAuthTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Reference to a Secret containing a bundle of PEM-encoded CAs to use when verifying the certificate chain presented by Vault when using HTTPS. Mutually exclusive with CABundle. If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in the cert-manager controller container is used to validate the TLS connection. If no key for the Secret is specified, cert-manager will default to 'ca.crt'.
         */
        interface ClusterIssuerSpecVaultCaBundleSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Reference to a Secret containing a bundle of PEM-encoded CAs to use when verifying the certificate chain presented by Vault when using HTTPS. Mutually exclusive with CABundle. If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in the cert-manager controller container is used to validate the TLS connection. If no key for the Secret is specified, cert-manager will default to 'ca.crt'.
         */
        interface ClusterIssuerSpecVaultCaBundleSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Vault configures this issuer to sign certificates using a HashiCorp Vault PKI backend.
         */
        interface ClusterIssuerSpecVaultPatch {
            auth: outputs.cert_manager.v1.ClusterIssuerSpecVaultAuthPatch;
            /**
             * Base64-encoded bundle of PEM CAs which will be used to validate the certificate chain presented by Vault. Only used if using HTTPS to connect to Vault and ignored for HTTP connections. Mutually exclusive with CABundleSecretRef. If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in the cert-manager controller container is used to validate the TLS connection.
             */
            caBundle: string;
            caBundleSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecVaultCaBundleSecretRefPatch;
            /**
             * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows Vault environments to support Secure Multi-tenancy. e.g: "ns1" More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
             */
            namespace: string;
            /**
             * Path is the mount path of the Vault PKI backend's `sign` endpoint, e.g: "my_pki_mount/sign/my-role-name".
             */
            path: string;
            /**
             * Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200".
             */
            server: string;
        }
        /**
         * Venafi configures this issuer to sign certificates using a Venafi TPP or Venafi Cloud policy zone.
         */
        interface ClusterIssuerSpecVenafi {
            cloud: outputs.cert_manager.v1.ClusterIssuerSpecVenafiCloud;
            tpp: outputs.cert_manager.v1.ClusterIssuerSpecVenafiTpp;
            /**
             * Zone is the Venafi Policy Zone to use for this issuer. All requests made to the Venafi platform will be restricted by the named zone policy. This field is required.
             */
            zone: string;
        }
        /**
         * Cloud specifies the Venafi cloud configuration settings. Only one of TPP or Cloud may be specified.
         */
        interface ClusterIssuerSpecVenafiCloud {
            apiTokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecVenafiCloudApiTokenSecretRef;
            /**
             * URL is the base URL for Venafi Cloud. Defaults to "https://api.venafi.cloud/v1".
             */
            url: string;
        }
        /**
         * APITokenSecretRef is a secret key selector for the Venafi Cloud API token.
         */
        interface ClusterIssuerSpecVenafiCloudApiTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * APITokenSecretRef is a secret key selector for the Venafi Cloud API token.
         */
        interface ClusterIssuerSpecVenafiCloudApiTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Cloud specifies the Venafi cloud configuration settings. Only one of TPP or Cloud may be specified.
         */
        interface ClusterIssuerSpecVenafiCloudPatch {
            apiTokenSecretRef: outputs.cert_manager.v1.ClusterIssuerSpecVenafiCloudApiTokenSecretRefPatch;
            /**
             * URL is the base URL for Venafi Cloud. Defaults to "https://api.venafi.cloud/v1".
             */
            url: string;
        }
        /**
         * Venafi configures this issuer to sign certificates using a Venafi TPP or Venafi Cloud policy zone.
         */
        interface ClusterIssuerSpecVenafiPatch {
            cloud: outputs.cert_manager.v1.ClusterIssuerSpecVenafiCloudPatch;
            tpp: outputs.cert_manager.v1.ClusterIssuerSpecVenafiTppPatch;
            /**
             * Zone is the Venafi Policy Zone to use for this issuer. All requests made to the Venafi platform will be restricted by the named zone policy. This field is required.
             */
            zone: string;
        }
        /**
         * TPP specifies Trust Protection Platform configuration settings. Only one of TPP or Cloud may be specified.
         */
        interface ClusterIssuerSpecVenafiTpp {
            /**
             * Base64-encoded bundle of PEM CAs which will be used to validate the certificate chain presented by the TPP server. Only used if using HTTPS; ignored for HTTP. If undefined, the certificate bundle in the cert-manager controller container is used to validate the chain.
             */
            caBundle: string;
            credentialsRef: outputs.cert_manager.v1.ClusterIssuerSpecVenafiTppCredentialsRef;
            /**
             * URL is the base URL for the vedsdk endpoint of the Venafi TPP instance, for example: "https://tpp.example.com/vedsdk".
             */
            url: string;
        }
        /**
         * CredentialsRef is a reference to a Secret containing the username and password for the TPP server. The secret must contain two keys, 'username' and 'password'.
         */
        interface ClusterIssuerSpecVenafiTppCredentialsRef {
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * CredentialsRef is a reference to a Secret containing the username and password for the TPP server. The secret must contain two keys, 'username' and 'password'.
         */
        interface ClusterIssuerSpecVenafiTppCredentialsRefPatch {
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * TPP specifies Trust Protection Platform configuration settings. Only one of TPP or Cloud may be specified.
         */
        interface ClusterIssuerSpecVenafiTppPatch {
            /**
             * Base64-encoded bundle of PEM CAs which will be used to validate the certificate chain presented by the TPP server. Only used if using HTTPS; ignored for HTTP. If undefined, the certificate bundle in the cert-manager controller container is used to validate the chain.
             */
            caBundle: string;
            credentialsRef: outputs.cert_manager.v1.ClusterIssuerSpecVenafiTppCredentialsRefPatch;
            /**
             * URL is the base URL for the vedsdk endpoint of the Venafi TPP instance, for example: "https://tpp.example.com/vedsdk".
             */
            url: string;
        }
        /**
         * Status of the ClusterIssuer. This is set and managed automatically.
         */
        interface ClusterIssuerStatus {
            acme: outputs.cert_manager.v1.ClusterIssuerStatusAcme;
            /**
             * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready`.
             */
            conditions: outputs.cert_manager.v1.ClusterIssuerStatusConditions[];
        }
        /**
         * ACME specific status options. This field should only be set if the Issuer is configured to use an ACME server to issue certificates.
         */
        interface ClusterIssuerStatusAcme {
            /**
             * LastPrivateKeyHash is a hash of the private key associated with the latest registered ACME account, in order to track changes made to registered account associated with the Issuer
             */
            lastPrivateKeyHash: string;
            /**
             * LastRegisteredEmail is the email associated with the latest registered ACME account, in order to track changes made to registered account associated with the  Issuer
             */
            lastRegisteredEmail: string;
            /**
             * URI is the unique account identifier, which can also be used to retrieve account details from the CA
             */
            uri: string;
        }
        /**
         * ACME specific status options. This field should only be set if the Issuer is configured to use an ACME server to issue certificates.
         */
        interface ClusterIssuerStatusAcmePatch {
            /**
             * LastPrivateKeyHash is a hash of the private key associated with the latest registered ACME account, in order to track changes made to registered account associated with the Issuer
             */
            lastPrivateKeyHash: string;
            /**
             * LastRegisteredEmail is the email associated with the latest registered ACME account, in order to track changes made to registered account associated with the  Issuer
             */
            lastRegisteredEmail: string;
            /**
             * URI is the unique account identifier, which can also be used to retrieve account details from the CA
             */
            uri: string;
        }
        /**
         * IssuerCondition contains condition information for an Issuer.
         */
        interface ClusterIssuerStatusConditions {
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            lastTransitionTime: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            message: string;
            /**
             * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Issuer.
             */
            observedGeneration: number;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            reason: string;
            /**
             * Status of the condition, one of (`True`, `False`, `Unknown`).
             */
            status: string;
            /**
             * Type of the condition, known values are (`Ready`).
             */
            type: string;
        }
        /**
         * IssuerCondition contains condition information for an Issuer.
         */
        interface ClusterIssuerStatusConditionsPatch {
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            lastTransitionTime: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            message: string;
            /**
             * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Issuer.
             */
            observedGeneration: number;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            reason: string;
            /**
             * Status of the condition, one of (`True`, `False`, `Unknown`).
             */
            status: string;
            /**
             * Type of the condition, known values are (`Ready`).
             */
            type: string;
        }
        /**
         * Status of the ClusterIssuer. This is set and managed automatically.
         */
        interface ClusterIssuerStatusPatch {
            acme: outputs.cert_manager.v1.ClusterIssuerStatusAcmePatch;
            /**
             * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready`.
             */
            conditions: outputs.cert_manager.v1.ClusterIssuerStatusConditionsPatch[];
        }
        /**
         * An Issuer represents a certificate issuing authority which can be referenced as part of `issuerRef` fields. It is scoped to a single namespace and can therefore only be referenced by resources within the same namespace.
         */
        interface Issuer {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "cert-manager.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Issuer";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.cert_manager.v1.IssuerSpec;
            status: outputs.cert_manager.v1.IssuerStatus;
        }
        /**
         * Desired state of the Issuer resource.
         */
        interface IssuerSpec {
            acme: outputs.cert_manager.v1.IssuerSpecAcme;
            ca: outputs.cert_manager.v1.IssuerSpecCa;
            selfSigned: outputs.cert_manager.v1.IssuerSpecSelfSigned;
            vault: outputs.cert_manager.v1.IssuerSpecVault;
            venafi: outputs.cert_manager.v1.IssuerSpecVenafi;
        }
        /**
         * ACME configures this issuer to communicate with a RFC8555 (ACME) server to obtain signed x509 certificates.
         */
        interface IssuerSpecAcme {
            /**
             * Base64-encoded bundle of PEM CAs which can be used to validate the certificate chain presented by the ACME server. Mutually exclusive with SkipTLSVerify; prefer using CABundle to prevent various kinds of security vulnerabilities. If CABundle and SkipTLSVerify are unset, the system certificate bundle inside the container is used to validate the TLS connection.
             */
            caBundle: string;
            /**
             * Enables or disables generating a new ACME account key. If true, the Issuer resource will *not* request a new account but will expect the account key to be supplied via an existing secret. If false, the cert-manager system will generate a new ACME account key for the Issuer. Defaults to false.
             */
            disableAccountKeyGeneration: boolean;
            /**
             * Email is the email address to be associated with the ACME account. This field is optional, but it is strongly recommended to be set. It will be used to contact you in case of issues with your account or certificates, including expiry notification emails. This field may be updated after the account is initially registered.
             */
            email: string;
            /**
             * Enables requesting a Not After date on certificates that matches the duration of the certificate. This is not supported by all ACME servers like Let's Encrypt. If set to true when the ACME server does not support it it will create an error on the Order. Defaults to false.
             */
            enableDurationFeature: boolean;
            externalAccountBinding: outputs.cert_manager.v1.IssuerSpecAcmeExternalAccountBinding;
            /**
             * PreferredChain is the chain to use if the ACME server outputs multiple. PreferredChain is no guarantee that this one gets delivered by the ACME endpoint. For example, for Let's Encrypt's DST crosssign you would use: "DST Root CA X3" or "ISRG Root X1" for the newer Let's Encrypt root CA. This value picks the first certificate bundle in the ACME alternative chains that has a certificate with this value as its issuer's CN
             */
            preferredChain: string;
            privateKeySecretRef: outputs.cert_manager.v1.IssuerSpecAcmePrivateKeySecretRef;
            /**
             * Server is the URL used to access the ACME server's 'directory' endpoint. For example, for Let's Encrypt's staging endpoint, you would use: "https://acme-staging-v02.api.letsencrypt.org/directory". Only ACME v2 endpoints (i.e. RFC 8555) are supported.
             */
            server: string;
            /**
             * INSECURE: Enables or disables validation of the ACME server TLS certificate. If true, requests to the ACME server will not have the TLS certificate chain validated. Mutually exclusive with CABundle; prefer using CABundle to prevent various kinds of security vulnerabilities. Only enable this option in development environments. If CABundle and SkipTLSVerify are unset, the system certificate bundle inside the container is used to validate the TLS connection. Defaults to false.
             */
            skipTLSVerify: boolean;
            /**
             * Solvers is a list of challenge solvers that will be used to solve ACME challenges for the matching domains. Solver configurations must be provided in order to obtain certificates from an ACME server. For more information, see: https://cert-manager.io/docs/configuration/acme/
             */
            solvers: outputs.cert_manager.v1.IssuerSpecAcmeSolvers[];
        }
        /**
         * ExternalAccountBinding is a reference to a CA external account of the ACME server. If set, upon registration cert-manager will attempt to associate the given external account credentials with the registered ACME account.
         */
        interface IssuerSpecAcmeExternalAccountBinding {
            /**
             * Deprecated: keyAlgorithm field exists for historical compatibility reasons and should not be used. The algorithm is now hardcoded to HS256 in golang/x/crypto/acme.
             */
            keyAlgorithm: string;
            /**
             * keyID is the ID of the CA key that the External Account is bound to.
             */
            keyID: string;
            keySecretRef: outputs.cert_manager.v1.IssuerSpecAcmeExternalAccountBindingKeySecretRef;
        }
        /**
         * keySecretRef is a Secret Key Selector referencing a data item in a Kubernetes Secret which holds the symmetric MAC key of the External Account Binding. The `key` is the index string that is paired with the key data in the Secret and should not be confused with the key data itself, or indeed with the External Account Binding keyID above. The secret key stored in the Secret **must** be un-padded, base64 URL encoded data.
         */
        interface IssuerSpecAcmeExternalAccountBindingKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * keySecretRef is a Secret Key Selector referencing a data item in a Kubernetes Secret which holds the symmetric MAC key of the External Account Binding. The `key` is the index string that is paired with the key data in the Secret and should not be confused with the key data itself, or indeed with the External Account Binding keyID above. The secret key stored in the Secret **must** be un-padded, base64 URL encoded data.
         */
        interface IssuerSpecAcmeExternalAccountBindingKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * ExternalAccountBinding is a reference to a CA external account of the ACME server. If set, upon registration cert-manager will attempt to associate the given external account credentials with the registered ACME account.
         */
        interface IssuerSpecAcmeExternalAccountBindingPatch {
            /**
             * Deprecated: keyAlgorithm field exists for historical compatibility reasons and should not be used. The algorithm is now hardcoded to HS256 in golang/x/crypto/acme.
             */
            keyAlgorithm: string;
            /**
             * keyID is the ID of the CA key that the External Account is bound to.
             */
            keyID: string;
            keySecretRef: outputs.cert_manager.v1.IssuerSpecAcmeExternalAccountBindingKeySecretRefPatch;
        }
        /**
         * ACME configures this issuer to communicate with a RFC8555 (ACME) server to obtain signed x509 certificates.
         */
        interface IssuerSpecAcmePatch {
            /**
             * Base64-encoded bundle of PEM CAs which can be used to validate the certificate chain presented by the ACME server. Mutually exclusive with SkipTLSVerify; prefer using CABundle to prevent various kinds of security vulnerabilities. If CABundle and SkipTLSVerify are unset, the system certificate bundle inside the container is used to validate the TLS connection.
             */
            caBundle: string;
            /**
             * Enables or disables generating a new ACME account key. If true, the Issuer resource will *not* request a new account but will expect the account key to be supplied via an existing secret. If false, the cert-manager system will generate a new ACME account key for the Issuer. Defaults to false.
             */
            disableAccountKeyGeneration: boolean;
            /**
             * Email is the email address to be associated with the ACME account. This field is optional, but it is strongly recommended to be set. It will be used to contact you in case of issues with your account or certificates, including expiry notification emails. This field may be updated after the account is initially registered.
             */
            email: string;
            /**
             * Enables requesting a Not After date on certificates that matches the duration of the certificate. This is not supported by all ACME servers like Let's Encrypt. If set to true when the ACME server does not support it it will create an error on the Order. Defaults to false.
             */
            enableDurationFeature: boolean;
            externalAccountBinding: outputs.cert_manager.v1.IssuerSpecAcmeExternalAccountBindingPatch;
            /**
             * PreferredChain is the chain to use if the ACME server outputs multiple. PreferredChain is no guarantee that this one gets delivered by the ACME endpoint. For example, for Let's Encrypt's DST crosssign you would use: "DST Root CA X3" or "ISRG Root X1" for the newer Let's Encrypt root CA. This value picks the first certificate bundle in the ACME alternative chains that has a certificate with this value as its issuer's CN
             */
            preferredChain: string;
            privateKeySecretRef: outputs.cert_manager.v1.IssuerSpecAcmePrivateKeySecretRefPatch;
            /**
             * Server is the URL used to access the ACME server's 'directory' endpoint. For example, for Let's Encrypt's staging endpoint, you would use: "https://acme-staging-v02.api.letsencrypt.org/directory". Only ACME v2 endpoints (i.e. RFC 8555) are supported.
             */
            server: string;
            /**
             * INSECURE: Enables or disables validation of the ACME server TLS certificate. If true, requests to the ACME server will not have the TLS certificate chain validated. Mutually exclusive with CABundle; prefer using CABundle to prevent various kinds of security vulnerabilities. Only enable this option in development environments. If CABundle and SkipTLSVerify are unset, the system certificate bundle inside the container is used to validate the TLS connection. Defaults to false.
             */
            skipTLSVerify: boolean;
            /**
             * Solvers is a list of challenge solvers that will be used to solve ACME challenges for the matching domains. Solver configurations must be provided in order to obtain certificates from an ACME server. For more information, see: https://cert-manager.io/docs/configuration/acme/
             */
            solvers: outputs.cert_manager.v1.IssuerSpecAcmeSolversPatch[];
        }
        /**
         * PrivateKey is the name of a Kubernetes Secret resource that will be used to store the automatically generated ACME account private key. Optionally, a `key` may be specified to select a specific entry within the named Secret resource. If `key` is not specified, a default of `tls.key` will be used.
         */
        interface IssuerSpecAcmePrivateKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * PrivateKey is the name of a Kubernetes Secret resource that will be used to store the automatically generated ACME account private key. Optionally, a `key` may be specified to select a specific entry within the named Secret resource. If `key` is not specified, a default of `tls.key` will be used.
         */
        interface IssuerSpecAcmePrivateKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * An ACMEChallengeSolver describes how to solve ACME challenges for the issuer it is part of. A selector may be provided to use different solving strategies for different DNS names. Only one of HTTP01 or DNS01 must be provided.
         */
        interface IssuerSpecAcmeSolvers {
            dns01: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01;
            http01: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01;
            selector: outputs.cert_manager.v1.IssuerSpecAcmeSolversSelector;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
         */
        interface IssuerSpecAcmeSolversDns01 {
            acmeDNS: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AcmeDNS;
            akamai: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Akamai;
            azureDNS: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AzureDNS;
            cloudDNS: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudDNS;
            cloudflare: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Cloudflare;
            /**
             * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
             */
            cnameStrategy: string;
            digitalocean: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Digitalocean;
            rfc2136: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Rfc2136;
            route53: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Route53;
            webhook: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Webhook;
        }
        /**
         * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01AcmeDNS {
            accountSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AcmeDNSAccountSecretRef;
            host: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01AcmeDNSAccountSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01AcmeDNSAccountSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01AcmeDNSPatch {
            accountSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AcmeDNSAccountSecretRefPatch;
            host: string;
        }
        /**
         * Use the Akamai DNS zone management API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01Akamai {
            accessTokenSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AkamaiAccessTokenSecretRef;
            clientSecretSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AkamaiClientSecretSecretRef;
            clientTokenSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AkamaiClientTokenSecretRef;
            serviceConsumerDomain: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01AkamaiAccessTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01AkamaiAccessTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01AkamaiClientSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01AkamaiClientSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01AkamaiClientTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01AkamaiClientTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Akamai DNS zone management API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01AkamaiPatch {
            accessTokenSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AkamaiAccessTokenSecretRefPatch;
            clientSecretSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AkamaiClientSecretSecretRefPatch;
            clientTokenSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AkamaiClientTokenSecretRefPatch;
            serviceConsumerDomain: string;
        }
        /**
         * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01AzureDNS {
            /**
             * Auth: Azure Service Principal: The ClientID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientSecret and TenantID must also be set.
             */
            clientID: string;
            clientSecretSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AzureDNSClientSecretSecretRef;
            /**
             * name of the Azure environment (default AzurePublicCloud)
             */
            environment: string;
            /**
             * name of the DNS zone that should be used
             */
            hostedZoneName: string;
            managedIdentity: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AzureDNSManagedIdentity;
            /**
             * resource group the DNS zone is located in
             */
            resourceGroupName: string;
            /**
             * ID of the Azure subscription
             */
            subscriptionID: string;
            /**
             * Auth: Azure Service Principal: The TenantID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientID and ClientSecret must also be set.
             */
            tenantID: string;
        }
        /**
         * Auth: Azure Service Principal: A reference to a Secret containing the password associated with the Service Principal. If set, ClientID and TenantID must also be set.
         */
        interface IssuerSpecAcmeSolversDns01AzureDNSClientSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Auth: Azure Service Principal: A reference to a Secret containing the password associated with the Service Principal. If set, ClientID and TenantID must also be set.
         */
        interface IssuerSpecAcmeSolversDns01AzureDNSClientSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Auth: Azure Workload Identity or Azure Managed Service Identity: Settings to enable Azure Workload Identity or Azure Managed Service Identity If set, ClientID, ClientSecret and TenantID must not be set.
         */
        interface IssuerSpecAcmeSolversDns01AzureDNSManagedIdentity {
            /**
             * client ID of the managed identity, can not be used at the same time as resourceID
             */
            clientID: string;
            /**
             * resource ID of the managed identity, can not be used at the same time as clientID Cannot be used for Azure Managed Service Identity
             */
            resourceID: string;
        }
        /**
         * Auth: Azure Workload Identity or Azure Managed Service Identity: Settings to enable Azure Workload Identity or Azure Managed Service Identity If set, ClientID, ClientSecret and TenantID must not be set.
         */
        interface IssuerSpecAcmeSolversDns01AzureDNSManagedIdentityPatch {
            /**
             * client ID of the managed identity, can not be used at the same time as resourceID
             */
            clientID: string;
            /**
             * resource ID of the managed identity, can not be used at the same time as clientID Cannot be used for Azure Managed Service Identity
             */
            resourceID: string;
        }
        /**
         * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01AzureDNSPatch {
            /**
             * Auth: Azure Service Principal: The ClientID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientSecret and TenantID must also be set.
             */
            clientID: string;
            clientSecretSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AzureDNSClientSecretSecretRefPatch;
            /**
             * name of the Azure environment (default AzurePublicCloud)
             */
            environment: string;
            /**
             * name of the DNS zone that should be used
             */
            hostedZoneName: string;
            managedIdentity: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AzureDNSManagedIdentityPatch;
            /**
             * resource group the DNS zone is located in
             */
            resourceGroupName: string;
            /**
             * ID of the Azure subscription
             */
            subscriptionID: string;
            /**
             * Auth: Azure Service Principal: The TenantID of the Azure Service Principal used to authenticate with Azure DNS. If set, ClientID and ClientSecret must also be set.
             */
            tenantID: string;
        }
        /**
         * Use the Google Cloud DNS API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01CloudDNS {
            /**
             * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
             */
            hostedZoneName: string;
            project: string;
            serviceAccountSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudDNSServiceAccountSecretRef;
        }
        /**
         * Use the Google Cloud DNS API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01CloudDNSPatch {
            /**
             * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
             */
            hostedZoneName: string;
            project: string;
            serviceAccountSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudDNSServiceAccountSecretRefPatch;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01CloudDNSServiceAccountSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01CloudDNSServiceAccountSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Cloudflare API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01Cloudflare {
            apiKeySecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudflareApiKeySecretRef;
            apiTokenSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudflareApiTokenSecretRef;
            /**
             * Email of the account, only required when using API key based authentication.
             */
            email: string;
        }
        /**
         * API key to use to authenticate with Cloudflare. Note: using an API token to authenticate is now the recommended method as it allows greater control of permissions.
         */
        interface IssuerSpecAcmeSolversDns01CloudflareApiKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API key to use to authenticate with Cloudflare. Note: using an API token to authenticate is now the recommended method as it allows greater control of permissions.
         */
        interface IssuerSpecAcmeSolversDns01CloudflareApiKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API token used to authenticate with Cloudflare.
         */
        interface IssuerSpecAcmeSolversDns01CloudflareApiTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * API token used to authenticate with Cloudflare.
         */
        interface IssuerSpecAcmeSolversDns01CloudflareApiTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the Cloudflare API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01CloudflarePatch {
            apiKeySecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudflareApiKeySecretRefPatch;
            apiTokenSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudflareApiTokenSecretRefPatch;
            /**
             * Email of the account, only required when using API key based authentication.
             */
            email: string;
        }
        /**
         * Use the DigitalOcean DNS API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01Digitalocean {
            tokenSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01DigitaloceanTokenSecretRef;
        }
        /**
         * Use the DigitalOcean DNS API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01DigitaloceanPatch {
            tokenSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01DigitaloceanTokenSecretRefPatch;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01DigitaloceanTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
         */
        interface IssuerSpecAcmeSolversDns01DigitaloceanTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
         */
        interface IssuerSpecAcmeSolversDns01Patch {
            acmeDNS: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AcmeDNSPatch;
            akamai: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AkamaiPatch;
            azureDNS: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01AzureDNSPatch;
            cloudDNS: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudDNSPatch;
            cloudflare: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01CloudflarePatch;
            /**
             * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
             */
            cnameStrategy: string;
            digitalocean: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01DigitaloceanPatch;
            rfc2136: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Rfc2136Patch;
            route53: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Route53Patch;
            webhook: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01WebhookPatch;
        }
        /**
         * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/) to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01Rfc2136 {
            /**
             * The IP address or hostname of an authoritative DNS server supporting RFC2136 in the form host:port. If the host is an IPv6 address it must be enclosed in square brackets (e.g [2001:db8::1]) ; port is optional. This field is required.
             */
            nameserver: string;
            /**
             * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
             */
            tsigAlgorithm: string;
            /**
             * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
             */
            tsigKeyName: string;
            tsigSecretSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Rfc2136TsigSecretSecretRef;
        }
        /**
         * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/) to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01Rfc2136Patch {
            /**
             * The IP address or hostname of an authoritative DNS server supporting RFC2136 in the form host:port. If the host is an IPv6 address it must be enclosed in square brackets (e.g [2001:db8::1]) ; port is optional. This field is required.
             */
            nameserver: string;
            /**
             * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
             */
            tsigAlgorithm: string;
            /**
             * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
             */
            tsigKeyName: string;
            tsigSecretSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Rfc2136TsigSecretSecretRefPatch;
        }
        /**
         * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
         */
        interface IssuerSpecAcmeSolversDns01Rfc2136TsigSecretSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
         */
        interface IssuerSpecAcmeSolversDns01Rfc2136TsigSecretSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the AWS Route53 API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01Route53 {
            /**
             * The AccessKeyID is used for authentication. Cannot be set when SecretAccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
             */
            accessKeyID: string;
            accessKeyIDSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Route53AccessKeyIDSecretRef;
            /**
             * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
             */
            hostedZoneID: string;
            /**
             * Always set the region when using AccessKeyID and SecretAccessKey
             */
            region: string;
            /**
             * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
             */
            role: string;
            secretAccessKeySecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Route53SecretAccessKeySecretRef;
        }
        /**
         * The SecretAccessKey is used for authentication. If set, pull the AWS access key ID from a key within a Kubernetes Secret. Cannot be set when AccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface IssuerSpecAcmeSolversDns01Route53AccessKeyIDSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The SecretAccessKey is used for authentication. If set, pull the AWS access key ID from a key within a Kubernetes Secret. Cannot be set when AccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface IssuerSpecAcmeSolversDns01Route53AccessKeyIDSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Use the AWS Route53 API to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01Route53Patch {
            /**
             * The AccessKeyID is used for authentication. Cannot be set when SecretAccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
             */
            accessKeyID: string;
            accessKeyIDSecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Route53AccessKeyIDSecretRefPatch;
            /**
             * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
             */
            hostedZoneID: string;
            /**
             * Always set the region when using AccessKeyID and SecretAccessKey
             */
            region: string;
            /**
             * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
             */
            role: string;
            secretAccessKeySecretRef: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Route53SecretAccessKeySecretRefPatch;
        }
        /**
         * The SecretAccessKey is used for authentication. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface IssuerSpecAcmeSolversDns01Route53SecretAccessKeySecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The SecretAccessKey is used for authentication. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        interface IssuerSpecAcmeSolversDns01Route53SecretAccessKeySecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Configure an external webhook based DNS01 challenge solver to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01Webhook {
            /**
             * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
             */
            config: {
                [key: string]: any;
            };
            /**
             * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
             */
            groupName: string;
            /**
             * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
             */
            solverName: string;
        }
        /**
         * Configure an external webhook based DNS01 challenge solver to manage DNS01 challenge records.
         */
        interface IssuerSpecAcmeSolversDns01WebhookPatch {
            /**
             * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
             */
            config: {
                [key: string]: any;
            };
            /**
             * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
             */
            groupName: string;
            /**
             * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
             */
            solverName: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the HTTP01 challenge flow. It is not possible to obtain certificates for wildcard domain names (e.g. `*.example.com`) using the HTTP01 challenge mechanism.
         */
        interface IssuerSpecAcmeSolversHttp01 {
            gatewayHTTPRoute: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01GatewayHTTPRoute;
            ingress: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01Ingress;
        }
        /**
         * The Gateway API is a sig-network community API that models service networking in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will create HTTPRoutes with the specified labels in the same namespace as the challenge. This solver is experimental, and fields / behaviour may change in the future.
         */
        interface IssuerSpecAcmeSolversHttp01GatewayHTTPRoute {
            /**
             * Custom labels that will be applied to HTTPRoutes created by cert-manager while solving HTTP-01 challenges.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * When solving an HTTP-01 challenge, cert-manager creates an HTTPRoute. cert-manager needs to know which parentRefs should be used when creating the HTTPRoute. Usually, the parentRef references a Gateway. See: https://gateway-api.sigs.k8s.io/api-types/httproute/#attaching-to-gateways
             */
            parentRefs: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01GatewayHTTPRouteParentRefs[];
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered a parent of this resource (usually a route). There are two kinds of parent resources with "Core" support:
         *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
         *  This API may be extended in the future to support additional kinds of parent resources.
         *  The API object must be valid in the cluster; the Group and Kind must be registered in the cluster for this reference to be valid.
         */
        interface IssuerSpecAcmeSolversHttp01GatewayHTTPRouteParentRefs {
            /**
             * Group is the group of the referent. When unspecified, "gateway.networking.k8s.io" is inferred. To set the core API group (such as for a "Service" kind referent), Group must be explicitly set to "" (empty string).
             *  Support: Core
             */
            group: string;
            /**
             * Kind is kind of the referent.
             *  There are two kinds of parent resources with "Core" support:
             *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
             *  Support for other resources is Implementation-Specific.
             */
            kind: string;
            /**
             * Name is the name of the referent.
             *  Support: Core
             */
            name: string;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route.
             *  Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference.
             *  <gateway:experimental:description> ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service.
             *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route. </gateway:experimental:description>
             *  Support: Core
             */
            namespace: string;
            /**
             * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource.
             *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
             *  <gateway:experimental:description> When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values. </gateway:experimental:description>
             *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
             *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Extended
             *  <gateway:experimental>
             */
            port: number;
            /**
             * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
             *  * Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Note that attaching Routes to Services as Parents is part of experimental Mesh support and is not supported for any other purpose.
             *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
             *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Core
             */
            sectionName: string;
        }
        /**
         * ParentReference identifies an API object (usually a Gateway) that can be considered a parent of this resource (usually a route). There are two kinds of parent resources with "Core" support:
         *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
         *  This API may be extended in the future to support additional kinds of parent resources.
         *  The API object must be valid in the cluster; the Group and Kind must be registered in the cluster for this reference to be valid.
         */
        interface IssuerSpecAcmeSolversHttp01GatewayHTTPRouteParentRefsPatch {
            /**
             * Group is the group of the referent. When unspecified, "gateway.networking.k8s.io" is inferred. To set the core API group (such as for a "Service" kind referent), Group must be explicitly set to "" (empty string).
             *  Support: Core
             */
            group: string;
            /**
             * Kind is kind of the referent.
             *  There are two kinds of parent resources with "Core" support:
             *  * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, experimental, ClusterIP Services only)
             *  Support for other resources is Implementation-Specific.
             */
            kind: string;
            /**
             * Name is the name of the referent.
             *  Support: Core
             */
            name: string;
            /**
             * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route.
             *  Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference.
             *  <gateway:experimental:description> ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service.
             *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route. </gateway:experimental:description>
             *  Support: Core
             */
            namespace: string;
            /**
             * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource.
             *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
             *  <gateway:experimental:description> When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values. </gateway:experimental:description>
             *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
             *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Extended
             *  <gateway:experimental>
             */
            port: number;
            /**
             * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
             *  * Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Note that attaching Routes to Services as Parents is part of experimental Mesh support and is not supported for any other purpose.
             *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
             *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Core
             */
            sectionName: string;
        }
        /**
         * The Gateway API is a sig-network community API that models service networking in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will create HTTPRoutes with the specified labels in the same namespace as the challenge. This solver is experimental, and fields / behaviour may change in the future.
         */
        interface IssuerSpecAcmeSolversHttp01GatewayHTTPRoutePatch {
            /**
             * Custom labels that will be applied to HTTPRoutes created by cert-manager while solving HTTP-01 challenges.
             */
            labels: {
                [key: string]: string;
            };
            /**
             * When solving an HTTP-01 challenge, cert-manager creates an HTTPRoute. cert-manager needs to know which parentRefs should be used when creating the HTTPRoute. Usually, the parentRef references a Gateway. See: https://gateway-api.sigs.k8s.io/api-types/httproute/#attaching-to-gateways
             */
            parentRefs: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01GatewayHTTPRouteParentRefsPatch[];
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
         */
        interface IssuerSpecAcmeSolversHttp01Ingress {
            /**
             * This field configures the annotation `kubernetes.io/ingress.class` when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            class: string;
            /**
             * This field configures the field `ingressClassName` on the created Ingress resources used to solve ACME challenges that use this challenge solver. This is the recommended way of configuring the ingress class. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            ingressClassName: string;
            ingressTemplate: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressIngressTemplate;
            /**
             * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            name: string;
            podTemplate: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplate;
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
         */
        interface IssuerSpecAcmeSolversHttp01IngressIngressTemplate {
            metadata: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressIngressTemplateMetadata;
        }
        /**
         * ObjectMeta overrides for the ingress used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressIngressTemplateMetadata {
            /**
             * Annotations that should be added to the created ACME HTTP01 solver ingress.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver ingress.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * ObjectMeta overrides for the ingress used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressIngressTemplateMetadataPatch {
            /**
             * Annotations that should be added to the created ACME HTTP01 solver ingress.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver ingress.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
         */
        interface IssuerSpecAcmeSolversHttp01IngressIngressTemplatePatch {
            metadata: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressIngressTemplateMetadataPatch;
        }
        /**
         * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPatch {
            /**
             * This field configures the annotation `kubernetes.io/ingress.class` when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            class: string;
            /**
             * This field configures the field `ingressClassName` on the created Ingress resources used to solve ACME challenges that use this challenge solver. This is the recommended way of configuring the ingress class. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            ingressClassName: string;
            ingressTemplate: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressIngressTemplatePatch;
            /**
             * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources. Only one of `class`, `name` or `ingressClassName` may be specified.
             */
            name: string;
            podTemplate: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplatePatch;
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            serviceType: string;
        }
        /**
         * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplate {
            metadata: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateMetadata;
            spec: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpec;
        }
        /**
         * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateMetadata {
            /**
             * Annotations that should be added to the create ACME HTTP01 solver pods.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver pods.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateMetadataPatch {
            /**
             * Annotations that should be added to the create ACME HTTP01 solver pods.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Labels that should be added to the created ACME HTTP01 solver pods.
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplatePatch {
            metadata: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateMetadataPatch;
            spec: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecPatch;
        }
        /**
         * PodSpec defines overrides for the HTTP01 challenge solver pod. Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields. All other fields will be ignored.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpec {
            affinity: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinity;
            /**
             * If specified, the pod's imagePullSecrets
             */
            imagePullSecrets: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecImagePullSecrets[];
            /**
             * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
             */
            nodeSelector: {
                [key: string]: string;
            };
            /**
             * If specified, the pod's priorityClassName.
             */
            priorityClassName: string;
            /**
             * If specified, the pod's service account
             */
            serviceAccountName: string;
            /**
             * If specified, the pod's tolerations.
             */
            tolerations: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecTolerations[];
        }
        /**
         * If specified, the pod's scheduling constraints
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinity {
            nodeAffinity: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinity;
            podAffinity: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinity;
            podAntiAffinity: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinity;
        }
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        /**
         * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        /**
         * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        /**
         * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        /**
         * If specified, the pod's scheduling constraints
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPatch {
            nodeAffinity: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityNodeAffinityPatch;
            podAffinity: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPatch;
            podAntiAffinity: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPatch;
        }
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
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
         * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
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
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
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
         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            matchLabelKeys: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `LabelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
             */
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecImagePullSecrets {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            name: string;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecImagePullSecretsPatch {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            name: string;
        }
        /**
         * PodSpec defines overrides for the HTTP01 challenge solver pod. Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields. All other fields will be ignored.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecPatch {
            affinity: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecAffinityPatch;
            /**
             * If specified, the pod's imagePullSecrets
             */
            imagePullSecrets: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecImagePullSecretsPatch[];
            /**
             * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
             */
            nodeSelector: {
                [key: string]: string;
            };
            /**
             * If specified, the pod's priorityClassName.
             */
            priorityClassName: string;
            /**
             * If specified, the pod's service account
             */
            serviceAccountName: string;
            /**
             * If specified, the pod's tolerations.
             */
            tolerations: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecTolerationsPatch[];
        }
        /**
         * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecTolerations {
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            operator: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value: string;
        }
        /**
         * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
         */
        interface IssuerSpecAcmeSolversHttp01IngressPodTemplateSpecTolerationsPatch {
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            operator: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value: string;
        }
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the HTTP01 challenge flow. It is not possible to obtain certificates for wildcard domain names (e.g. `*.example.com`) using the HTTP01 challenge mechanism.
         */
        interface IssuerSpecAcmeSolversHttp01Patch {
            gatewayHTTPRoute: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01GatewayHTTPRoutePatch;
            ingress: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01IngressPatch;
        }
        /**
         * An ACMEChallengeSolver describes how to solve ACME challenges for the issuer it is part of. A selector may be provided to use different solving strategies for different DNS names. Only one of HTTP01 or DNS01 must be provided.
         */
        interface IssuerSpecAcmeSolversPatch {
            dns01: outputs.cert_manager.v1.IssuerSpecAcmeSolversDns01Patch;
            http01: outputs.cert_manager.v1.IssuerSpecAcmeSolversHttp01Patch;
            selector: outputs.cert_manager.v1.IssuerSpecAcmeSolversSelectorPatch;
        }
        /**
         * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver. If not specified, the solver will be treated as the 'default' solver with the lowest priority, i.e. if any other solver has a more specific match, it will be used instead.
         */
        interface IssuerSpecAcmeSolversSelector {
            /**
             * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsNames: string[];
            /**
             * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsZones: string[];
            /**
             * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver. If not specified, the solver will be treated as the 'default' solver with the lowest priority, i.e. if any other solver has a more specific match, it will be used instead.
         */
        interface IssuerSpecAcmeSolversSelectorPatch {
            /**
             * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsNames: string[];
            /**
             * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
             */
            dnsZones: string[];
            /**
             * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * CA configures this issuer to sign certificates using a signing CA keypair stored in a Secret resource. This is used to build internal PKIs that are managed by cert-manager.
         */
        interface IssuerSpecCa {
            /**
             * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set, certificates will be issued without distribution points set.
             */
            crlDistributionPoints: string[];
            /**
             * IssuingCertificateURLs is a list of URLs which this issuer should embed into certificates it creates. See https://www.rfc-editor.org/rfc/rfc5280#section-4.2.2.1 for more details. As an example, such a URL might be "http://ca.domain.com/ca.crt".
             */
            issuingCertificateURLs: string[];
            /**
             * The OCSP server list is an X.509 v3 extension that defines a list of URLs of OCSP responders. The OCSP responders can be queried for the revocation status of an issued certificate. If not set, the certificate will be issued with no OCSP servers set. For example, an OCSP server URL could be "http://ocsp.int-x3.letsencrypt.org".
             */
            ocspServers: string[];
            /**
             * SecretName is the name of the secret used to sign Certificates issued by this Issuer.
             */
            secretName: string;
        }
        /**
         * CA configures this issuer to sign certificates using a signing CA keypair stored in a Secret resource. This is used to build internal PKIs that are managed by cert-manager.
         */
        interface IssuerSpecCaPatch {
            /**
             * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set, certificates will be issued without distribution points set.
             */
            crlDistributionPoints: string[];
            /**
             * IssuingCertificateURLs is a list of URLs which this issuer should embed into certificates it creates. See https://www.rfc-editor.org/rfc/rfc5280#section-4.2.2.1 for more details. As an example, such a URL might be "http://ca.domain.com/ca.crt".
             */
            issuingCertificateURLs: string[];
            /**
             * The OCSP server list is an X.509 v3 extension that defines a list of URLs of OCSP responders. The OCSP responders can be queried for the revocation status of an issued certificate. If not set, the certificate will be issued with no OCSP servers set. For example, an OCSP server URL could be "http://ocsp.int-x3.letsencrypt.org".
             */
            ocspServers: string[];
            /**
             * SecretName is the name of the secret used to sign Certificates issued by this Issuer.
             */
            secretName: string;
        }
        /**
         * Desired state of the Issuer resource.
         */
        interface IssuerSpecPatch {
            acme: outputs.cert_manager.v1.IssuerSpecAcmePatch;
            ca: outputs.cert_manager.v1.IssuerSpecCaPatch;
            selfSigned: outputs.cert_manager.v1.IssuerSpecSelfSignedPatch;
            vault: outputs.cert_manager.v1.IssuerSpecVaultPatch;
            venafi: outputs.cert_manager.v1.IssuerSpecVenafiPatch;
        }
        /**
         * SelfSigned configures this issuer to 'self sign' certificates using the private key used to create the CertificateRequest object.
         */
        interface IssuerSpecSelfSigned {
            /**
             * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set certificate will be issued without CDP. Values are strings.
             */
            crlDistributionPoints: string[];
        }
        /**
         * SelfSigned configures this issuer to 'self sign' certificates using the private key used to create the CertificateRequest object.
         */
        interface IssuerSpecSelfSignedPatch {
            /**
             * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set certificate will be issued without CDP. Values are strings.
             */
            crlDistributionPoints: string[];
        }
        /**
         * Vault configures this issuer to sign certificates using a HashiCorp Vault PKI backend.
         */
        interface IssuerSpecVault {
            auth: outputs.cert_manager.v1.IssuerSpecVaultAuth;
            /**
             * Base64-encoded bundle of PEM CAs which will be used to validate the certificate chain presented by Vault. Only used if using HTTPS to connect to Vault and ignored for HTTP connections. Mutually exclusive with CABundleSecretRef. If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in the cert-manager controller container is used to validate the TLS connection.
             */
            caBundle: string;
            caBundleSecretRef: outputs.cert_manager.v1.IssuerSpecVaultCaBundleSecretRef;
            /**
             * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows Vault environments to support Secure Multi-tenancy. e.g: "ns1" More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
             */
            namespace: string;
            /**
             * Path is the mount path of the Vault PKI backend's `sign` endpoint, e.g: "my_pki_mount/sign/my-role-name".
             */
            path: string;
            /**
             * Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200".
             */
            server: string;
        }
        /**
         * Auth configures how cert-manager authenticates with the Vault server.
         */
        interface IssuerSpecVaultAuth {
            appRole: outputs.cert_manager.v1.IssuerSpecVaultAuthAppRole;
            kubernetes: outputs.cert_manager.v1.IssuerSpecVaultAuthKubernetes;
            tokenSecretRef: outputs.cert_manager.v1.IssuerSpecVaultAuthTokenSecretRef;
        }
        /**
         * AppRole authenticates with Vault using the App Role auth mechanism, with the role and secret stored in a Kubernetes Secret resource.
         */
        interface IssuerSpecVaultAuthAppRole {
            /**
             * Path where the App Role authentication backend is mounted in Vault, e.g: "approle"
             */
            path: string;
            /**
             * RoleID configured in the App Role authentication backend when setting up the authentication backend in Vault.
             */
            roleId: string;
            secretRef: outputs.cert_manager.v1.IssuerSpecVaultAuthAppRoleSecretRef;
        }
        /**
         * AppRole authenticates with Vault using the App Role auth mechanism, with the role and secret stored in a Kubernetes Secret resource.
         */
        interface IssuerSpecVaultAuthAppRolePatch {
            /**
             * Path where the App Role authentication backend is mounted in Vault, e.g: "approle"
             */
            path: string;
            /**
             * RoleID configured in the App Role authentication backend when setting up the authentication backend in Vault.
             */
            roleId: string;
            secretRef: outputs.cert_manager.v1.IssuerSpecVaultAuthAppRoleSecretRefPatch;
        }
        /**
         * Reference to a key in a Secret that contains the App Role secret used to authenticate with Vault. The `key` field must be specified and denotes which entry within the Secret resource is used as the app role secret.
         */
        interface IssuerSpecVaultAuthAppRoleSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Reference to a key in a Secret that contains the App Role secret used to authenticate with Vault. The `key` field must be specified and denotes which entry within the Secret resource is used as the app role secret.
         */
        interface IssuerSpecVaultAuthAppRoleSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Kubernetes authenticates with Vault by passing the ServiceAccount token stored in the named Secret resource to the Vault server.
         */
        interface IssuerSpecVaultAuthKubernetes {
            /**
             * The Vault mountPath here is the mount path to use when authenticating with Vault. For example, setting a value to `/v1/auth/foo`, will use the path `/v1/auth/foo/login` to authenticate with Vault. If unspecified, the default value "/v1/auth/kubernetes" will be used.
             */
            mountPath: string;
            /**
             * A required field containing the Vault Role to assume. A Role binds a Kubernetes ServiceAccount with a set of Vault policies.
             */
            role: string;
            secretRef: outputs.cert_manager.v1.IssuerSpecVaultAuthKubernetesSecretRef;
            serviceAccountRef: outputs.cert_manager.v1.IssuerSpecVaultAuthKubernetesServiceAccountRef;
        }
        /**
         * Kubernetes authenticates with Vault by passing the ServiceAccount token stored in the named Secret resource to the Vault server.
         */
        interface IssuerSpecVaultAuthKubernetesPatch {
            /**
             * The Vault mountPath here is the mount path to use when authenticating with Vault. For example, setting a value to `/v1/auth/foo`, will use the path `/v1/auth/foo/login` to authenticate with Vault. If unspecified, the default value "/v1/auth/kubernetes" will be used.
             */
            mountPath: string;
            /**
             * A required field containing the Vault Role to assume. A Role binds a Kubernetes ServiceAccount with a set of Vault policies.
             */
            role: string;
            secretRef: outputs.cert_manager.v1.IssuerSpecVaultAuthKubernetesSecretRefPatch;
            serviceAccountRef: outputs.cert_manager.v1.IssuerSpecVaultAuthKubernetesServiceAccountRefPatch;
        }
        /**
         * The required Secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Vault. Use of 'ambient credentials' is not supported.
         */
        interface IssuerSpecVaultAuthKubernetesSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * The required Secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Vault. Use of 'ambient credentials' is not supported.
         */
        interface IssuerSpecVaultAuthKubernetesSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * A reference to a service account that will be used to request a bound token (also known as "projected token"). Compared to using "secretRef", using this field means that you don't rely on statically bound tokens. To use this field, you must configure an RBAC rule to let cert-manager request a token.
         */
        interface IssuerSpecVaultAuthKubernetesServiceAccountRef {
            /**
             * Name of the ServiceAccount used to request a token.
             */
            name: string;
        }
        /**
         * A reference to a service account that will be used to request a bound token (also known as "projected token"). Compared to using "secretRef", using this field means that you don't rely on statically bound tokens. To use this field, you must configure an RBAC rule to let cert-manager request a token.
         */
        interface IssuerSpecVaultAuthKubernetesServiceAccountRefPatch {
            /**
             * Name of the ServiceAccount used to request a token.
             */
            name: string;
        }
        /**
         * Auth configures how cert-manager authenticates with the Vault server.
         */
        interface IssuerSpecVaultAuthPatch {
            appRole: outputs.cert_manager.v1.IssuerSpecVaultAuthAppRolePatch;
            kubernetes: outputs.cert_manager.v1.IssuerSpecVaultAuthKubernetesPatch;
            tokenSecretRef: outputs.cert_manager.v1.IssuerSpecVaultAuthTokenSecretRefPatch;
        }
        /**
         * TokenSecretRef authenticates with Vault by presenting a token.
         */
        interface IssuerSpecVaultAuthTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * TokenSecretRef authenticates with Vault by presenting a token.
         */
        interface IssuerSpecVaultAuthTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Reference to a Secret containing a bundle of PEM-encoded CAs to use when verifying the certificate chain presented by Vault when using HTTPS. Mutually exclusive with CABundle. If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in the cert-manager controller container is used to validate the TLS connection. If no key for the Secret is specified, cert-manager will default to 'ca.crt'.
         */
        interface IssuerSpecVaultCaBundleSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Reference to a Secret containing a bundle of PEM-encoded CAs to use when verifying the certificate chain presented by Vault when using HTTPS. Mutually exclusive with CABundle. If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in the cert-manager controller container is used to validate the TLS connection. If no key for the Secret is specified, cert-manager will default to 'ca.crt'.
         */
        interface IssuerSpecVaultCaBundleSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Vault configures this issuer to sign certificates using a HashiCorp Vault PKI backend.
         */
        interface IssuerSpecVaultPatch {
            auth: outputs.cert_manager.v1.IssuerSpecVaultAuthPatch;
            /**
             * Base64-encoded bundle of PEM CAs which will be used to validate the certificate chain presented by Vault. Only used if using HTTPS to connect to Vault and ignored for HTTP connections. Mutually exclusive with CABundleSecretRef. If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in the cert-manager controller container is used to validate the TLS connection.
             */
            caBundle: string;
            caBundleSecretRef: outputs.cert_manager.v1.IssuerSpecVaultCaBundleSecretRefPatch;
            /**
             * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows Vault environments to support Secure Multi-tenancy. e.g: "ns1" More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
             */
            namespace: string;
            /**
             * Path is the mount path of the Vault PKI backend's `sign` endpoint, e.g: "my_pki_mount/sign/my-role-name".
             */
            path: string;
            /**
             * Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200".
             */
            server: string;
        }
        /**
         * Venafi configures this issuer to sign certificates using a Venafi TPP or Venafi Cloud policy zone.
         */
        interface IssuerSpecVenafi {
            cloud: outputs.cert_manager.v1.IssuerSpecVenafiCloud;
            tpp: outputs.cert_manager.v1.IssuerSpecVenafiTpp;
            /**
             * Zone is the Venafi Policy Zone to use for this issuer. All requests made to the Venafi platform will be restricted by the named zone policy. This field is required.
             */
            zone: string;
        }
        /**
         * Cloud specifies the Venafi cloud configuration settings. Only one of TPP or Cloud may be specified.
         */
        interface IssuerSpecVenafiCloud {
            apiTokenSecretRef: outputs.cert_manager.v1.IssuerSpecVenafiCloudApiTokenSecretRef;
            /**
             * URL is the base URL for Venafi Cloud. Defaults to "https://api.venafi.cloud/v1".
             */
            url: string;
        }
        /**
         * APITokenSecretRef is a secret key selector for the Venafi Cloud API token.
         */
        interface IssuerSpecVenafiCloudApiTokenSecretRef {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * APITokenSecretRef is a secret key selector for the Venafi Cloud API token.
         */
        interface IssuerSpecVenafiCloudApiTokenSecretRefPatch {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            key: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * Cloud specifies the Venafi cloud configuration settings. Only one of TPP or Cloud may be specified.
         */
        interface IssuerSpecVenafiCloudPatch {
            apiTokenSecretRef: outputs.cert_manager.v1.IssuerSpecVenafiCloudApiTokenSecretRefPatch;
            /**
             * URL is the base URL for Venafi Cloud. Defaults to "https://api.venafi.cloud/v1".
             */
            url: string;
        }
        /**
         * Venafi configures this issuer to sign certificates using a Venafi TPP or Venafi Cloud policy zone.
         */
        interface IssuerSpecVenafiPatch {
            cloud: outputs.cert_manager.v1.IssuerSpecVenafiCloudPatch;
            tpp: outputs.cert_manager.v1.IssuerSpecVenafiTppPatch;
            /**
             * Zone is the Venafi Policy Zone to use for this issuer. All requests made to the Venafi platform will be restricted by the named zone policy. This field is required.
             */
            zone: string;
        }
        /**
         * TPP specifies Trust Protection Platform configuration settings. Only one of TPP or Cloud may be specified.
         */
        interface IssuerSpecVenafiTpp {
            /**
             * Base64-encoded bundle of PEM CAs which will be used to validate the certificate chain presented by the TPP server. Only used if using HTTPS; ignored for HTTP. If undefined, the certificate bundle in the cert-manager controller container is used to validate the chain.
             */
            caBundle: string;
            credentialsRef: outputs.cert_manager.v1.IssuerSpecVenafiTppCredentialsRef;
            /**
             * URL is the base URL for the vedsdk endpoint of the Venafi TPP instance, for example: "https://tpp.example.com/vedsdk".
             */
            url: string;
        }
        /**
         * CredentialsRef is a reference to a Secret containing the username and password for the TPP server. The secret must contain two keys, 'username' and 'password'.
         */
        interface IssuerSpecVenafiTppCredentialsRef {
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * CredentialsRef is a reference to a Secret containing the username and password for the TPP server. The secret must contain two keys, 'username' and 'password'.
         */
        interface IssuerSpecVenafiTppCredentialsRefPatch {
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        /**
         * TPP specifies Trust Protection Platform configuration settings. Only one of TPP or Cloud may be specified.
         */
        interface IssuerSpecVenafiTppPatch {
            /**
             * Base64-encoded bundle of PEM CAs which will be used to validate the certificate chain presented by the TPP server. Only used if using HTTPS; ignored for HTTP. If undefined, the certificate bundle in the cert-manager controller container is used to validate the chain.
             */
            caBundle: string;
            credentialsRef: outputs.cert_manager.v1.IssuerSpecVenafiTppCredentialsRefPatch;
            /**
             * URL is the base URL for the vedsdk endpoint of the Venafi TPP instance, for example: "https://tpp.example.com/vedsdk".
             */
            url: string;
        }
        /**
         * Status of the Issuer. This is set and managed automatically.
         */
        interface IssuerStatus {
            acme: outputs.cert_manager.v1.IssuerStatusAcme;
            /**
             * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready`.
             */
            conditions: outputs.cert_manager.v1.IssuerStatusConditions[];
        }
        /**
         * ACME specific status options. This field should only be set if the Issuer is configured to use an ACME server to issue certificates.
         */
        interface IssuerStatusAcme {
            /**
             * LastPrivateKeyHash is a hash of the private key associated with the latest registered ACME account, in order to track changes made to registered account associated with the Issuer
             */
            lastPrivateKeyHash: string;
            /**
             * LastRegisteredEmail is the email associated with the latest registered ACME account, in order to track changes made to registered account associated with the  Issuer
             */
            lastRegisteredEmail: string;
            /**
             * URI is the unique account identifier, which can also be used to retrieve account details from the CA
             */
            uri: string;
        }
        /**
         * ACME specific status options. This field should only be set if the Issuer is configured to use an ACME server to issue certificates.
         */
        interface IssuerStatusAcmePatch {
            /**
             * LastPrivateKeyHash is a hash of the private key associated with the latest registered ACME account, in order to track changes made to registered account associated with the Issuer
             */
            lastPrivateKeyHash: string;
            /**
             * LastRegisteredEmail is the email associated with the latest registered ACME account, in order to track changes made to registered account associated with the  Issuer
             */
            lastRegisteredEmail: string;
            /**
             * URI is the unique account identifier, which can also be used to retrieve account details from the CA
             */
            uri: string;
        }
        /**
         * IssuerCondition contains condition information for an Issuer.
         */
        interface IssuerStatusConditions {
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            lastTransitionTime: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            message: string;
            /**
             * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Issuer.
             */
            observedGeneration: number;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            reason: string;
            /**
             * Status of the condition, one of (`True`, `False`, `Unknown`).
             */
            status: string;
            /**
             * Type of the condition, known values are (`Ready`).
             */
            type: string;
        }
        /**
         * IssuerCondition contains condition information for an Issuer.
         */
        interface IssuerStatusConditionsPatch {
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            lastTransitionTime: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            message: string;
            /**
             * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Issuer.
             */
            observedGeneration: number;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            reason: string;
            /**
             * Status of the condition, one of (`True`, `False`, `Unknown`).
             */
            status: string;
            /**
             * Type of the condition, known values are (`Ready`).
             */
            type: string;
        }
        /**
         * Status of the Issuer. This is set and managed automatically.
         */
        interface IssuerStatusPatch {
            acme: outputs.cert_manager.v1.IssuerStatusAcmePatch;
            /**
             * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready`.
             */
            conditions: outputs.cert_manager.v1.IssuerStatusConditionsPatch[];
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
