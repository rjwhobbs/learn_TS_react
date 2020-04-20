// Fucntions (Optional and default parms)

function sum(a: number, b?: number, c: number = 42): number {
  return a + (b || 0) + c; // Protecting if b was not given
}

// sum(); Error with out arg optioanl key word '?'

type MyFunc = (a: number, b: number) => number; // Creating out own function type

const sumTwo: MyFunc = (a, b) => a + b;