import { core } from '@pulumi/kubernetes';

const containers: Record<string, { ns: core.v1.Namespace | undefined, fn: ((ns: core.v1.Namespace) => void)[] }> = {
    runtime: {
        ns: undefined,
        fn: [],
    },
    coresystem: {
        ns: undefined,
        fn: [],
    },
    telemetry: {
        ns: undefined,
        fn: [],
    },
    istiosystem: {
        ns: undefined,
        fn: [],
    },
    rookceph: {
        ns: undefined,
        fn: [],
    },
    kubesystem: {
        ns: undefined,
        fn: [],
    }
}

export type NamespaceEnum = "runtime" | "core-system" | "telemetry" | "istio-system" | "rook-ceph" | "kube-system";

export function requireNamespace(ns: NamespaceEnum): core.v1.Namespace {
    switch (ns) {
        case "runtime":
            if (containers.runtime.ns === undefined) {
                containers.runtime.ns = new core.v1.Namespace("runtime", {
                    metadata: {
                        name: "runtime",
                    },
                });
                containers.runtime.fn.forEach(fn => fn(containers.runtime.ns!));
            }
            return containers.runtime.ns;
        case "core-system":
            if (containers.coresystem.ns === undefined) {
                containers.coresystem.ns = new core.v1.Namespace("core-system", {
                    metadata: {
                        name: "core-system",
                    },
                });
                containers.coresystem.fn.forEach(fn => fn(containers.coresystem.ns!));
            }
            return containers.coresystem.ns;
        case "telemetry":
            if (containers.telemetry.ns === undefined) {
                containers.telemetry.ns = new core.v1.Namespace("telemetry", {
                    metadata: {
                        name: "telemetry",
                    },
                });
                containers.telemetry.fn.forEach(fn => fn(containers.telemetry.ns!));
            }
            return containers.telemetry.ns
        case "istio-system":
            if (containers.istiosystem.ns === undefined) {
                containers.istiosystem.ns = new core.v1.Namespace("istio-system", {
                    metadata: {
                        name: "istio-system",
                        labels: {
                            "istio-injection": "enabled",
                        },
                    },
                });
                containers.istiosystem.fn.forEach(fn => fn(containers.istiosystem.ns!));
            }
            return containers.istiosystem.ns;
        case "rook-ceph":
            if (containers.rookceph.ns === undefined) {
                containers.rookceph.ns = new core.v1.Namespace("rook-ceph", {
                    metadata: {
                        name: "rook-ceph",
                    },
                });
                containers.rookceph.fn.forEach(fn => fn(containers.rookceph.ns!));
            }
            return containers.rookceph.ns;
        case "kube-system":
            if (containers.rookceph.ns === undefined) {
                containers.rookceph.ns = core.v1.Namespace.get("kube-system", "kube-system");
                containers.rookceph.fn.forEach(fn => fn(containers.rookceph.ns!));
            }
            return containers.rookceph.ns;
    }
}
export function tryNamespace(ns: NamespaceEnum): core.v1.Namespace | undefined {
    switch (ns) {
        case "runtime":
            return containers.runtime.ns;
        case "core-system":
            return containers.coresystem.ns;
        case "telemetry":
            return containers.telemetry.ns;
        case "istio-system":
            return containers.istiosystem.ns;
        case "rook-ceph":
            return containers.rookceph.ns;
        case "kube-system":
            return containers.kubesystem.ns;
    }
}
export function onNamespaceLoaded(ns: NamespaceEnum, fn: (ns: core.v1.Namespace) => void) {
    switch (ns) {
        case "runtime":
            if (containers.runtime.ns !== undefined) {
                fn(containers.runtime.ns);
            }
            containers.runtime.fn.push(fn);
            break;
        case "core-system":
            if (containers.coresystem.ns !== undefined) {
                fn(containers.coresystem.ns);
            }
            containers.coresystem.fn.push(fn);
            break;
        case "telemetry":
            if (containers.telemetry.ns !== undefined) {
                fn(containers.telemetry.ns);
            }
            containers.telemetry.fn.push(fn);
            break;
        case "istio-system":
            if (containers.istiosystem.ns !== undefined) {
                fn(containers.istiosystem.ns);
            }
            containers.istiosystem.fn.push(fn);
            break;
        case "rook-ceph":
            if (containers.rookceph.ns !== undefined) {
                fn(containers.rookceph.ns);
            }
            containers.rookceph.fn.push(fn);
            break;
        case "kube-system":
            if (containers.kubesystem.ns !== undefined) {
                fn(containers.kubesystem.ns);
            }
            containers.kubesystem.fn.push(fn);
            break;
    }

}