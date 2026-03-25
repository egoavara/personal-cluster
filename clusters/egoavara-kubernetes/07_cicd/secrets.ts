import * as random from "@pulumi/random";
import { cicdPhase } from "./phase.ts";

// Weave GitOps admin 비밀번호
export const weaveAdminPassword = new random.RandomPassword("weave-admin-password", {
    length: 32,
    special: false,
}, { parent: cicdPhase });
