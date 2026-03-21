import * as pulumi from "@pulumi/pulumi";
import { core } from "@pulumi/kubernetes";

export interface SecretShellArgs {
    namespace: pulumi.Input<string>;
    /** key → description (코드 문서화 + annotation 기록) */
    keys: Record<string, string>;
    type?: string;
    opts?: pulumi.CustomResourceOptions;
}

/**
 * Secret 껍데기 생성 — data는 PLACEHOLDER로 채우고 ignoreChanges: ["data"]로 보호.
 * 사용자가 kubectl edit secret <name> -n <ns> 로 실제 데이터를 채운다.
 */
export function createSecretShell(name: string, args: SecretShellArgs): core.v1.Secret {
    const placeholderData: Record<string, string> = {};
    const keyDescriptions: Record<string, string> = {};

    for (const [key, desc] of Object.entries(args.keys)) {
        placeholderData[key] = Buffer.from("PLACEHOLDER").toString("base64");
        keyDescriptions[key] = desc;
    }

    return new core.v1.Secret(name, {
        metadata: {
            name,
            namespace: args.namespace,
            annotations: {
                "egoavara.net/secret-shell": "true",
                "egoavara.net/key-descriptions": JSON.stringify(keyDescriptions),
            },
        },
        type: args.type ?? "Opaque",
        data: placeholderData,
    }, {
        ...args.opts,
        ignoreChanges: ["data"],
    });
}
