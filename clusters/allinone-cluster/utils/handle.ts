import * as pulumi from "@pulumi/pulumi";
import assert from "assert";


export type Extract<T> = T extends pulumi.Output<infer U>
    ? U
    : T;
export type ForEachExtract<T extends any[]> = {
    [K in keyof T]: Extract<T[K]>;
}
export type JoinItemAndArray<T, A extends any[]> = [Extract<T>, ...ForEachExtract<A>];

export class Handle<T, O, U> {
    #val: pulumi.Output<T | undefined>;
    #handleOutput: ((val: T) => O);
    #handleUndefined: (() => U);


    constructor(output: {
        val: pulumi.Output<T | undefined>,
        handleOutput: ((val: T) => O),
        handleUndefined: (() => U)
    }) {
        this.#val = output.val;
        this.#handleOutput = output.handleOutput;
        this.#handleUndefined = output.handleUndefined;
    }

    join<A extends any[]>(...handles: A): Handle<JoinItemAndArray<T, A>, O, U> {
        return new Handle({
            val: pulumi.all([this.#val, ...handles]).apply(([v, ...vs]) => {
                return v !== undefined ? [v, ...vs] as any : undefined;
            }),
            handleOutput: (v) => this.#handleOutput(v[0]),
            handleUndefined: () => this.#handleUndefined()
        });
    }

    letIf<N>(f: (val: T) => N): pulumi.Output<N | undefined> {
        return this.#val.apply(v => v !== undefined ? f(v) : undefined);
    }

    mustIf<N>(f: (val: T) => N, message: string): pulumi.Output<N> {
        return this.#val.apply(v => {
            assert(v !== undefined, message);
            return f(v);
        });
    }

    ifExists<N>(f: (val: T) => N): Handle<T, N, U> {
        return new Handle({
            val: this.#val,
            handleOutput: f,
            handleUndefined: this.#handleUndefined
        });
    }
    ifNotExists<N>(f: () => N): Handle<T, O, N> {
        return new Handle({
            val: this.#val,
            handleOutput: this.#handleOutput,
            handleUndefined: f
        });
    }
    output(): pulumi.Output<O | U> {
        return this.#val.apply(v => v !== undefined ? this.#handleOutput(v) : this.#handleUndefined());
    }
}

export function handle<T>(val: boolean): Handle<null, null, undefined>;
export function handle<T>(val: pulumi.Output<T | undefined>): Handle<T, T, undefined>;
export function handle<T>(val: pulumi.Output<any> | boolean): Handle<any, any, undefined> {
    if (typeof val === "boolean") {
        return new Handle<null, null, undefined>({
            val: pulumi.output(val ? null : undefined),
            handleOutput: () => null,
            handleUndefined: () => undefined
        });
    }
    return new Handle<T, T, undefined>({
        val: val,
        handleOutput: v => v,
        handleUndefined: () => undefined
    });
}