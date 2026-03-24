import * as k8s from "@pulumi/kubernetes";
import * as path from "path";
import { fileURLToPath } from "url";
import { essentials } from "./phase.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const gatewayCrds = new k8s.yaml.ConfigFile("gateway-api-crds", {
    file: path.resolve(__dirname, "../statics/gateway-api_v1.5.1.yaml"),
}, { parent: essentials });
