import { BabelDescriptor } from "../utils/decorators2"
import { addHiddenFinalProp } from "../utils/utils"
import { action } from "./action"

export type CancellablePromise<T> = Promise<T> & { cancel(): void }

// method decorator:
export function flow(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor
// non-decorator forms
export function flow<R>(generator: () => IterableIterator<any>): () => CancellablePromise<R>
export function flow<A1>(
    generator: (a1: A1) => IterableIterator<any>
): (a1: A1) => CancellablePromise<any> // Ideally we want to have R instead of Any, but cannot specify R without specifying A1 etc... 'any' as result is better then not specifying request args
export function flow<A1, A2, A3, A4, A5, A6, A7, A8>(
    generator: (
        a1: A1,
        a2: A2,
        a3: A3,
        a4: A4,
        a5: A5,
        a6: A6,
        a7: A7,
        a8: A8
    ) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => CancellablePromise<any>
export function flow<A1, A2, A3, A4, A5, A6, A7>(
    generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => CancellablePromise<any>
export function flow<A1, A2, A3, A4, A5, A6>(
    generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => CancellablePromise<any>
export function flow<A1, A2, A3, A4, A5>(
    generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => CancellablePromise<any>
export function flow<A1, A2, A3, A4>(
    generator: (a1: A1, a2: A2, a3: A3, a4: A4) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4) => CancellablePromise<any>
export function flow<A1, A2, A3>(
    generator: (a1: A1, a2: A2, a3: A3) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3) => CancellablePromise<any>
export function flow<A1, A2>(
    generator: (a1: A1, a2: A2) => IterableIterator<any>
): (a1: A1, a2: A2) => CancellablePromise<any>
export function flow<A1>(
    generator: (a1: A1) => IterableIterator<any>
): (a1: A1) => CancellablePromise<any>
// ... with name
export function flow<R>(
    name: string,
    generator: () => IterableIterator<any>
): () => CancellablePromise<R>
export function flow<A1>(
    name: string,
    generator: (a1: A1) => IterableIterator<any>
): (a1: A1) => CancellablePromise<any> // Ideally we want to have R instead of Any, but cannot specify R without specifying A1 etc... 'any' as result is better then not specifying request args
export function flow<A1, A2, A3, A4, A5, A6, A7, A8>(
    name: string,
    generator: (
        a1: A1,
        a2: A2,
        a3: A3,
        a4: A4,
        a5: A5,
        a6: A6,
        a7: A7,
        a8: A8
    ) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => CancellablePromise<any>
export function flow<A1, A2, A3, A4, A5, A6, A7>(
    name: string,
    generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => CancellablePromise<any>
export function flow<A1, A2, A3, A4, A5, A6>(
    name: string,
    generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => CancellablePromise<any>
export function flow<A1, A2, A3, A4, A5>(
    name: string,
    generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => CancellablePromise<any>
export function flow<A1, A2, A3, A4>(
    name: string,
    generator: (a1: A1, a2: A2, a3: A3, a4: A4) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3, a4: A4) => CancellablePromise<any>
export function flow<A1, A2, A3>(
    name: string,
    generator: (a1: A1, a2: A2, a3: A3) => IterableIterator<any>
): (a1: A1, a2: A2, a3: A3) => CancellablePromise<any>
export function flow<A1, A2>(
    name: string,
    generator: (a1: A1, a2: A2) => IterableIterator<any>
): (a1: A1, a2: A2) => CancellablePromise<any>
export function flow<A1>(
    name: string,
    generator: (a1: A1) => IterableIterator<any>
): (a1: A1) => CancellablePromise<any>
export function flow(arg1: any, arg2?: any): any {
    // decorator
    if (typeof arguments[1] === "string") return flowDecorator.apply(null, arguments)

    // direct invocation
    const generator = typeof arg1 === "string" ? arg2 : arg1
    const name = typeof arg1 === "string" ? arg1 : generator.name || "<unnamed async action>"
    return createFlowGenerator(name, generator)
}

let generatorId = 0

export function createFlowGenerator(name: string, generator: Function) {
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function() {
        const ctx = this
        const args = arguments
        const runId = ++generatorId
        const gen = action(`${name} - runid: ${runId} - init`, generator).apply(ctx, args)
        let stepId = 0
        let resolver: (value: any) => void
        let rejector: (error: any) => void

        function onFulfilled(res: any) {
            let ret
            try {
                ret = action(`${name} - runid: ${runId} - yield ${stepId++}`, gen.next).call(
                    gen,
                    res
                )
            } catch (e) {
                return rejector(e)
            }
            next(ret)
            return null
        }

        function onRejected(err: any) {
            let ret
            try {
                ret = action(`${name} - runid: ${runId} - yield ${stepId++}`, gen.throw).call(
                    gen,
                    err
                )
            } catch (e) {
                return rejector(e)
            }
            next(ret)
        }

        function next(ret: any) {
            if (ret.done) return resolver(ret.value)
            // TODO: support more type of values? See https://github.com/tj/co/blob/249bbdc72da24ae44076afd716349d2089b31c4c/index.js#L100
            if (!ret.value || typeof ret.value.then !== "function")
                return fail("Only promises can be yielded to asyncAction, got: " + ret)
            return ret.value.then(onFulfilled, onRejected)
        }

        const res = new Promise(function(resolve, reject) {
            resolver = resolve
            rejector = reject
            onFulfilled(undefined) // kick off the process
        }) as any
        res.cancel = function() {
            onRejected(new Error("FLOW_CANCELLED"))
        }
        return res
    }
}

function flowDecorator(target: any, propertyName: string, descriptor: BabelDescriptor) {
    return {
        configurable: true,
        enumerable: false,
        get() {
            addHiddenFinalProp(
                this,
                propertyName,
                flow(
                    propertyName,
                    descriptor.initializer ? descriptor.initializer.call(this) : descriptor.value
                )
            )
            return this[propertyName]
        },
        set(v: any) {
            addHiddenFinalProp(this, propertyName, flow(propertyName, v))
        }
    }
}
