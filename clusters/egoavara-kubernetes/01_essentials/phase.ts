import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";
import { Phase } from "../utils/phase.ts";

const org = pulumi.getOrganization();
const stack = pulumi.getStack();
const bootstrapRef = new pulumi.StackReference(`${org}/ek-bootstrap/${stack}`);

export const k8sProvider = new k8s.Provider("k8s", {
    kubeconfig: bootstrapRef.getOutput("kubeconfig") as pulumi.Output<string>,
});

export const essentials = new Phase("essentials", {
    providers: [k8sProvider],
});
