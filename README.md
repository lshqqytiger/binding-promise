# binding-promise

A native binding for Node.js `Promise` objects.

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
