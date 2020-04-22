//Intersection types
interface IA {
  a: number;
}

interface IB {
  b: number;
}

let aa: IA = {
  a: 21
}

let bb: IB = {
  b: 42
}

// Combining mutliple types
function x(obj: IA & IB) {
  return obj.a + obj.b;
}

let cc: IA & IB = {
  a: 1,
  b: 2
}

console.log(x(cc));