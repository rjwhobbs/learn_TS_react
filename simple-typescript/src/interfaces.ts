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