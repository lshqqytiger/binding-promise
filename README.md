<a href="https://www.npmjs.com/package/binding-promise"><img src="https://img.shields.io/npm/v/binding-promise.svg?maxAge=3600" alt="npm badge" /></a>

# binding-promise

A native binding for Node.js `Promise` objects.

You can access `[[PromiseState]]` [internal slot](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-properties-of-promise-instances) synchronously using `binding-promise`.

# Examples

```ts
import { isPending } from "binding-promise";

const promise = new Promise((resolve) => /* do something and resolve() */);
isPending(promise); // Promise is not resolved or rejected if true.
```

```ts
import { isFulfilled, isRejected } from "binding-promise";

const promise = new Promise((resolve, reject) => /* do something and call resolve or reject */);
await promise;

isFulfilled(promise); // Promise is resolved if true.
isRejected(promise); // Promise is rejected if true.
```

```ts
import assert from "assert";
import { getState, PromiseState } from "binding-promise";

assert(getState(Promise.resolve(1)) === PromiseState.FULFILLED);
assert(
  getState(new Promise<void>((resolve) => setTimeout(() => resolve(), 1))) ===
    PromiseState.PENDING
);

try {
  getState(1);
} catch (e) {
  assert(e instanceof TypeError);
}
```

# Restrictions

- Works only in Node.js environments.

# License

MIT License

Copyright (c) 2024 Seunghoon Lee
