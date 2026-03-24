import * as pulumi from "@pulumi/pulumi";
import { core } from "@pulumi/kubernetes";
import { essentials } from "./phase.ts";

const namespaceCache = new Map<string, core.v1.Namespace>();

const systemNamespaces = new Set(["kube-system", "default", "kube-public", "kube-node-lease"]);

export interface NamespaceOpts {
    labels?: Record<string, string>;
    dependsOn?: pulumi.Resource[];
}

export function requireNamespace(name: string, opts?: NamespaceOpts): core.v1.Namespace {
    const cached = namespaceCache.get(name);
    if (cached) return cached;

    const ns = systemNamespaces.has(name)
        ? core.v1.Namespace.get(name, name)
        : new core.v1.Namespace(name, {
            metadata: { name, labels: opts?.labels },
        }, {
            parent: essentials,
            dependsOn: opts?.dependsOn,
        });

    namespaceCache.set(name, ns);
    return ns;
}
