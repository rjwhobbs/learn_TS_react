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