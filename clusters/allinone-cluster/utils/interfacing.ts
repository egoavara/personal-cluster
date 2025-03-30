import * as pulumi from "@pulumi/pulumi";

type InterfacingType = Exclude<{}, null | undefined> | undefined;

export class Interfacing<T> {
    #val: {
        data: pulumi.Output<InterfacingType>
        handle: ((val: Exclude<InterfacingType, undefined>) => T);
    }[];

    constructor() {
        this.#val = [];
    }

    orElse<Request extends InterfacingType>(val: pulumi.Output<Request>, handle: (data: Exclude<Request, undefined>) => pulumi.Input<T>): Interfacing<T> {
        this.#val.push({
            data: val as any,
            handle: handle as any,
        });
        return this;
    }
    end(): pulumi.Output<T | undefined> {
        let result: pulumi.Output<{} | undefined> = pulumi.output(undefined);
        for (const { data, handle } of this.#val) {
            result = result.apply(v => {
                if (v !== undefined) {
                    return v;
                }
                return data.apply(v => {
                    if (v === undefined) {
                        return v;
                    }
                    return handle(v);
                })
            })
        }
        return result as any
    }
}

export function interfacing<T>(): Interfacing<T> {
    return new Interfacing<T>();
}
// export function oneof<Request extends OneOfData, Response>(val: pulumi.Output<Request>, handle: (data: Exclude<Request, undefined>) => Response): OneOf<Response> {
//     const oneOf = new OneOf<Response>();
//     oneOf.orElse(val, handle);
//     return oneOf;
// }