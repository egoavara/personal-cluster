import { helm } from "@pulumi/kubernetes";
import { flux as fluxConfig } from "./config.ts";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { sopsAgeSecret } from "./sops-age.ts";

const namespace = ns.metadata.name;

// Flux 컨트롤러는 ztunnel과 호환되지 않음 (liveness probe 실패)
// pod 레벨에서 mesh를 opt-out하여 Weave GitOps만 mesh에 참여하게 함
const fluxMeshOptOut = { "istio.io/dataplane-mode": "none" };

export const flux = new helm.v3.Release("flux", {
    chart: "flux2",
    name: "flux",
    version: fluxConfig.version,
    namespace,
    repositoryOpts: { repo: fluxConfig.repository },
    createNamespace: false,
    values: {
        sourceController: {
            labels: fluxMeshOptOut,
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        kustomizeController: {
            labels: fluxMeshOptOut,
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
            extraEnv: [
                {
                    name: "SOPS_AGE_KEY_FILE",
                    value: "/sops/age.agekey",
                },
            ],
            extraVolumeMounts: [
                {
                    name: "sops-age",
                    mountPath: "/sops",
                    readOnly: true,
                },
            ],
            extraVolumes: [
                {
                    name: "sops-age",
                    secret: {
                        secretName: "sops-age",
                    },
                },
            ],
        },
        helmController: {
            labels: fluxMeshOptOut,
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        notificationController: {
            labels: fluxMeshOptOut,
            resources: {
                requests: { cpu: "25m", memory: "32Mi" },
                limits: { cpu: "200m", memory: "128Mi" },
            },
        },
        imageAutomationController: { create: false },
        imageReflectionController: { create: false },
    },
}, { parent: cicdPhase, dependsOn: [sopsAgeSecret] });
