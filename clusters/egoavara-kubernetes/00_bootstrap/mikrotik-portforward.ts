import * as command from "@pulumi/command";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { mikrotik, ssh } from "./config.ts";
import { ingress } from "../utils/config.ts";
import { mikrotikBgp } from "./mikrotik-bgp.ts";
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

const gatewayIp = ingress.gatewayIp;

// MikroTik NAT 포트포워딩 + hairpin NAT
// dst-address-type=local: 공유기 자신의 IP(공인 IP 포함)로 향하는 트래픽만 매칭
// → 외부 사이트(google.com 등)로의 443 트래픽은 매칭 안 됨
// → LAN/WAN 모두에서 접속 가능 (hairpin)
const portForwardCommands = [
    '/ip/firewall/nat remove [find comment~"k8s-ingress"]',
    // HTTP + HTTPS → Gateway (WAN + LAN hairpin)
    `/ip/firewall/nat add chain=dstnat action=dst-nat to-addresses=${gatewayIp} to-ports=80 protocol=tcp dst-port=80 dst-address-type=local comment="k8s-ingress"`,
    `/ip/firewall/nat add chain=dstnat action=dst-nat to-addresses=${gatewayIp} to-ports=443 protocol=tcp dst-port=443 dst-address-type=local comment="k8s-ingress"`,
    // Hairpin masquerade: LAN → Gateway 리턴 트래픽이 공유기를 경유하도록
    `/ip/firewall/nat add chain=srcnat action=masquerade protocol=tcp dst-address=${gatewayIp} dst-port=80,443 comment="k8s-ingress-hairpin"`,
];

export const mikrotikPortForward = new command.remote.Command("mikrotik-portforward", {
    connection: routerConnection,
    create: portForwardCommands.join("; "),
    delete: '/ip/firewall/nat remove [find comment~"k8s-ingress"]',
    triggers: [gatewayIp, "v2-dst-address-type-local-hairpin"],
}, {
    parent: bootstrap,
    dependsOn: [mikrotikBgp],
    ignoreChanges: ["create"],
});
