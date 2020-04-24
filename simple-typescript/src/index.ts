// Conditional Types
// what is ts differing?

type SomeType = string; // if number MyCondType will be null
type MyCondType = SomeType extends string ? string : null;

function someFn<T>(val: T) {
  const someOtherFn = function(someArg: T extends boolean ? 'Type A' : 'Type B') {
    console.log("someArg =", someArg);
    return {};
  }
  return someOtherFn;
}

const result = someFn("x");
console.log(result);
result("Type B");
// result("xx"); // Error only takes 'Type B'