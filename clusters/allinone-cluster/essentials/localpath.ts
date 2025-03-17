import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";


export const localPathProvisioner = new k8s.yaml.ConfigFile("local-path-provisioner", {
    file: "statics/local-path-provisioner_v0.0.31.yaml",
});

export const localPathProvisionerStorageClass = pulumi.output("local-path");