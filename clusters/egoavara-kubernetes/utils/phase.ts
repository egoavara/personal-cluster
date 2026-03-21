import * as pulumi from "@pulumi/pulumi";

/**
 * Phase — 리소스를 논리적 단계로 묶는 ComponentResource.
 *
 * 각 리소스는 Phase를 parent로 지정해야 함.
 * Phase 간 dependsOn으로 실행 순서를 보장하며,
 * parent의 dependsOn이 자식에게 자동 전파됨.
 *
 * 사용법:
 *   // phases.ts에서 Phase 생성
 *   export const bootstrap = new Phase("bootstrap");
 *   export const essentials = new Phase("essentials", { dependsOn: [bootstrap] });
 *
 *   // 각 리소스 파일에서 parent 지정
 *   import { bootstrap } from "../phases.ts";
 *   new Command("prereq", {...}, { parent: bootstrap });
 */
export class Phase extends pulumi.ComponentResource {
    constructor(
        name: string,
        opts?: pulumi.ComponentResourceOptions,
    ) {
        super("egoavara:cluster:Phase", name, {}, opts);
    }
}
