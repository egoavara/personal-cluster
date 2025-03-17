import * as pulumi from "@pulumi/pulumi";
import assert from "assert";


export function must<T extends any>(value: pulumi.Output<T | undefined>, message: string): pulumi.Output<T> {
    return value.apply(v => {
        assert(v !== undefined, message);
        return v as T;
    });
}