// Conditional Types
// what is ts differing?

type SomeType = string; // if number MyCondType will be null
type MyCondType = SomeType extends string ? string : null;

function someFn<T>(val: T) {
  type A = T extends boolean ? 'Type A' : T extends string ? 'Type B' : 'Type C'; // Nesting ternary conditions with conditional types, ugly.
  const someOtherFn = function(someArg: T extends boolean ? 'Type A' : 'Type B') { // at this point ts doesn't know what T will be, right now it is a union
    const a: 'Type A' | 'Type B' = someArg;
    console.log("a =", a);
    return {};
  }
  return someOtherFn;
}

const result = someFn("x");
console.log(result);
result("Type B");
// result("xx"); // Error only takes 'Type B'

// Distributive property of a conditional type
