// Fucntions (Optional and default parms)

function sum(a: number, b?: number, c: number = 42): number {
  return a + (b || 0) + c; // Protecting if b was not given
}

// sum(); Error with out arg optioanl key word '?'

type MyFunc = (a: number, b: number) => number; // Creating out own function type

const sumTwo: MyFunc = (a, b) => a + b;

function sumAll(...numbers: number[]): number { // Using spread for multiple args
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  }); // Not sure why the default value was here
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;

function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}

