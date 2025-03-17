// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { ElasticsearchArgs } from "./elasticsearch";
export type Elasticsearch = import("./elasticsearch").Elasticsearch;
export const Elasticsearch: typeof import("./elasticsearch").Elasticsearch = null as any;
utilities.lazyLoad(exports, ["Elasticsearch"], () => require("./elasticsearch"));

export { ElasticsearchListArgs } from "./elasticsearchList";
export type ElasticsearchList = import("./elasticsearchList").ElasticsearchList;
export const ElasticsearchList: typeof import("./elasticsearchList").ElasticsearchList = null as any;
utilities.lazyLoad(exports, ["ElasticsearchList"], () => require("./elasticsearchList"));

export { ElasticsearchPatchArgs } from "./elasticsearchPatch";
export type ElasticsearchPatch = import("./elasticsearchPatch").ElasticsearchPatch;
export const ElasticsearchPatch: typeof import("./elasticsearchPatch").ElasticsearchPatch = null as any;
utilities.lazyLoad(exports, ["ElasticsearchPatch"], () => require("./elasticsearchPatch"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:elasticsearch.k8s.elastic.co/v1beta1:Elasticsearch":
                return new Elasticsearch(name, <any>undefined, { urn })
            case "kubernetes:elasticsearch.k8s.elastic.co/v1beta1:ElasticsearchList":
                return new ElasticsearchList(name, <any>undefined, { urn })
            case "kubernetes:elasticsearch.k8s.elastic.co/v1beta1:ElasticsearchPatch":
                return new ElasticsearchPatch(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("eck", "elasticsearch.k8s.elastic.co/v1beta1", _module)
