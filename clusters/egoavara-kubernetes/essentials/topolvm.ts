import { helm } from "@pulumi/kubernetes";
import { topoLvm as topoLvmConfig } from "../utils/config.ts";
import { requireNamespace } from "./namespaces.ts";
import { essentials } from "../phases.ts";
import { certManager } from "./cert-manager.ts";

const ns = requireNamespace("topolvm-system", {
    labels: { "istio.io/dataplane-mode": "none" },
});

export const topolvm = new helm.v3.Release("topolvm", {
    chart: "topolvm",
    name: "topolvm",
    version: topoLvmConfig.version,
    namespace: ns.metadata.name,
    repositoryOpts: { repo: "https://topolvm.github.io/topolvm" },
    createNamespace: false,
    values: {
        lvmd: {
            managed: true,
            deviceClasses: [
                { name: "local-nvme", "volume-group": "local-nvme", default: true, "spare-gb": 10 },
            ],
        },
        storageClasses: [],
    },
}, { parent: essentials, dependsOn: [certManager] });
