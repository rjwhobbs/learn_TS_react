// Fucntions (Optional and default parms)

function sum(a: number, b: number): number {
  return a + b;
}

type MyFunc = (a: number, b: number) => number; // Creating out own function type

const sumTwo: MyFunc = (a, b) => a + b;