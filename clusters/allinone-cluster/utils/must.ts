import * as pulumi from "@pulumi/pulumi";
import assert from "assert";

export function must<T extends any>(value: pulumi.Output<T | undefined>, message: string): pulumi.Output<T>
export function must<T extends any>(value: T | undefined, message: string): pulumi.Output<T>
export function must(value: any, message: string): pulumi.Output<any> {
    return pulumi.output(value).apply(v => {
        assert(v !== undefined, message);
        return v;
    });
}