import "./prerequisites.ts";
import "./cluster-init.ts";
import "./cilium-install.ts";
import "./post-init.ts";
import "./mikrotik-bgp.ts";
import "./mikrotik-portforward.ts";

// Stack output: kubeconfig string for downstream phases via StackReference
import { kubeconfig as kubeconfigCmd } from "./post-init.ts";
export const kubeconfig = kubeconfigCmd.stdout;
