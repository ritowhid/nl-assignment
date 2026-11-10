# TypeScript Type Hierarchy: Any, Unknown, and Never

### Introduction:
TypeScript's type hierarchy start from the top types (`any`, `unknown`) to the bottom type (`never`). Here, I explained how `any`, `unknown` and `never` work in that hierarchy.

- The types `any` and `unknown` act as flexible top types that will accept any data type.

- If we use the `any` type, we can reassign values and call properties like `.length` directly on the variable.

```ts
let helloWorld: any = "Hello World";
helloWorld = 123;
helloWorld.length;
```

- Type `unknown` don't allow direct access (e.g. `.length`) cause its don't know what's the type of that variable.

- `unknown` is preferred for safety because it prevents unsafe blind operations and it's check the type before use.

- The `never` type is bottom type. It uses when a function is never finishe the execution generally. For example:
```ts
const getError = (msg: string): never => {
  throw new Error(msg);
};
```

- `never` is a subtype of all types. Code like that `const x: null = getError("ABC");` is valid because execution will stop before assigning a value.

### Conclusion:
`any`, `unknown`, and `never` have different uses in TypeScript. We can use any for more flexibility, unknown when we need type checking before using a value, and never when a function never returns normally.