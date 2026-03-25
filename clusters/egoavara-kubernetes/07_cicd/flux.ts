import { helm } from "@pulumi/kubernetes";
import { flux as fluxConfig } from "./config.ts";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { sopsAgeSecret } from "./sops-age.ts";

const namespace = ns.metadata.name;

export const flux = new helm.v3.Release("flux", {
    chart: "flux2",
    name: "flux",
    version: fluxConfig.version,
    namespace,
    repositoryOpts: { repo: fluxConfig.repository },
    createNamespace: false,
    values: {
        // Source controller: git repo 폴링
        sourceController: {
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        // Kustomize controller: manifest 적용 + SOPS 복호화
        kustomizeController: {
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
            // SOPS age 복호화 활성화
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
        // Helm controller: Helm release 관리
        helmController: {
            resources: {
                requests: { cpu: "50m", memory: "64Mi" },
                limits: { cpu: "500m", memory: "256Mi" },
            },
        },
        // Notification controller: 알림 (optional)
        notificationController: {
            resources: {
                requests: { cpu: "25m", memory: "32Mi" },
                limits: { cpu: "200m", memory: "128Mi" },
            },
        },
        // Image automation controllers: 비활성화 (불필요)
        imageAutomationController: { create: false },
        imageReflectionController: { create: false },
    },
}, { parent: cicdPhase, dependsOn: [sopsAgeSecret] });
