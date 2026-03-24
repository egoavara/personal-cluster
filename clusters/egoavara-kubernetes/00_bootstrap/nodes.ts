import * as command from "@pulumi/command";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { masterNodes, workerNodes, ssh, type NodeConfig } from "./config.ts";

const resolvedKeyPath = ssh.keyPath.startsWith("~")
    ? path.join(os.homedir(), ssh.keyPath.slice(1))
    : ssh.keyPath;

const privateKey = fs.readFileSync(resolvedKeyPath, "utf8");

export function connectionFor(node: NodeConfig): command.types.input.remote.ConnectionArgs {
    return {
        host: node.host,
        user: node.name,
        privateKey,
    };
}

// master 노드: 첫 번째가 init, 나머지가 control-plane join
export const initNode = masterNodes[0];
export const joinMasterNodes = masterNodes.slice(1);

// worker 노드: worker-only join
export const allNodes = [...masterNodes, ...workerNodes];
