import { any } from "prop-types";

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

type StringOrNot<T> = T extends string ? string : never; // never used to filter union types
//Filtering union types
// type Exclude<T, U> = T extends U ? never : T; // Definition
type ResType = Exclude<'a' | 'b' | 'c', 'a' | 'b' > // conditional type are distributive, it checks each type of the union, 'c' see is the only one that meets the condition

// type MyTest<T> = T extends string | number ? T : never; // This is distributive not wrapped
// type MyTest<T> = (() => T) extends () => string | number ? T : never; // Wrapping with the a function, the result is never, non distributive, checked as is
type MyTest<T> = [string | number] extends [string | number] ? T : never; // Wrapping with tuple, the result is never, non distributive, checked as is
type MyRes = MyTest<string | number | boolean>;

// Infering with conditional types
type AAA<T> = T extends {a: infer AX; b: number } ? AX : any;
type BBB = AAA<{a: 'MA BRU'; b: 1}>; // type BBB = 'MA BRU'.
type CCC<T> = T extends {a: infer AX; b: infer BX } ? AX & BX: any;
type DDD = CCC<{a: {someAProp: 1}; b: {someBprop: 'b'}}>; // intersection, = 'MY BRU' and 1

const EEE: DDD = {
  someAProp: 1, // Can only be these values
  someBprop: 'b'
}

console.log(EEE);

// A Real example 20:00 chap 21
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyRetType = ReturnType<() => true> // infering the return