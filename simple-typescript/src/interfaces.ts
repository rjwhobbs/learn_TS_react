interface A {
  someProp: number;
}

interface B {
  someProp: number;
  // somethingElse: number; // Cuases error when trying to make b = a 
}

let a: A = {
  someProp: 1
}

let b: B = a;

interface Profile {
  readonly name: string; // Prop can't be modified
  age?: number; // The '?' make s the property optional
}

let profile: Profile = {
  name: 'John',
  age: 99
}

// Index signature to add props on the fly
interface C {
  [key: string]: number | string; // using union type 
}

// We can now add number props on the fly
const c: C = {}
c.i = 99;
c.j = 0;
c.str = "test" // No more error thanks to union type

// Call Signature, function interface
interface Sum {
  (a: number, b: number): number; // The function args and return
  someProp: number;
}

const sum: Sum = (a, b) => a + b;
sum.someProp = 42;

// Extending interfaces
interface Parent {
  x: string;
}

interface ParentTwo {
  y: string;
}

interface Child extends Parent, ParentTwo {

}

let child: Child = {
  x: 'test',
  y: 'More test'
};