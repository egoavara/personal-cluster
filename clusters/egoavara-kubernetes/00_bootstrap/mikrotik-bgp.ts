import * as command from "@pulumi/command";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { mikrotik, masterNodes, workerNodes, ssh } from "./config.ts";
import { cilium } from "../utils/config.ts";
import { ciliumInstall } from "./cilium-install.ts";
import { bootstrap } from "./phase.ts";

const resolvedKeyPath = ssh.keyPath.startsWith("~")
    ? path.join(os.homedir(), ssh.keyPath.slice(1))
    : ssh.keyPath;

const privateKey = fs.readFileSync(resolvedKeyPath, "utf8");

const routerConnection: command.types.input.remote.ConnectionArgs = {
    host: mikrotik.host,
    user: mikrotik.user,
    privateKey,
};

const allNodes = [...masterNodes, ...workerNodes];

// MikroTik BGP 설정: 템플릿 + 각 노드별 피어링
// RouterOS CLI는 한 줄에 하나의 명령만 실행 가능하므로 세미콜론으로 연결
const bgpCommands = [
    // 기존 k8s BGP 설정 정리 (멱등성)
    '/routing/bgp/connection remove [find where template="k8s-peer"]',
    '/routing/bgp/template remove [find name="k8s-peer"]',
    // 템플릿 생성
    `/routing/bgp/template add name=k8s-peer as=${cilium.bgp.peerASN} router-id=${mikrotik.routerId}`,
    // 각 노드별 피어링
    ...allNodes.map(node =>
        `/routing/bgp/connection add name=${node.name} remote.address=${node.host} remote.as=${cilium.bgp.localASN} template=k8s-peer local.role=ebgp`
    ),
];

export const mikrotikBgp = new command.remote.Command("mikrotik-bgp", {
    connection: routerConnection,
    create: bgpCommands.join("; "),
    delete: [
        '/routing/bgp/connection remove [find where template="k8s-peer"]',
        '/routing/bgp/template remove [find name="k8s-peer"]',
    ].join("; "),
    triggers: [
        JSON.stringify(allNodes.map(n => n.host)),
        cilium.bgp.localASN.toString(),
        cilium.bgp.peerASN.toString(),
    ],
}, {
    parent: bootstrap,
    dependsOn: [ciliumInstall],
    ignoreChanges: ["create"],
});
