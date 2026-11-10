# Type aliases vs interface

### Introduction:
choosing the type aliase, interface for uses depends on needs, whether you need primitive or union or literals or union, or need merging and inheritance. Here I explained the core differences of type aliases vs interface.
## Type aliases:
- Type aliases is connected to literals, unions, tuples, primitives.
- Can define a primitive type alias like that: ```type ID = number```
- It's can handle union such as: ```type Role = "admin" | "member"```
- Can't extend directly.
- Type Alias need uses of intersection to extend.
- An example of type alias intersection is:

```ts
type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    model: string;
};

const car: Car = {
    brand: "Toyota",
    model: "Corolla"
}
```

- Type aliases strictly prohibit duplicate identifiers within the same scope.
- Type aliases doesn't support mergeing.

## Interface:
- Interface is generally connected to objects
- Interface don't support primitive type alias.
- Inteface cannot represent directly union or literal combination.
- Can extend interface directly using extends
- An example of interface inheritance:

```ts
interface Animal {
    species: string;
}
interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    species: "Felix Catus",
    breed: "Persian"
};
```

- Can merge same name interface

### Conclusion:
Both type aliases and interfaces are used to define types in TypeScript. Choosing between them depends on our needs. We can use type aliases for primitives, unions, tuples, literals, and intersections. On the other hand, we can use interfaces when working with objects, inheritance, and merging.