//Intersection types
interface IA {
  a: number;
}

interface IB {
  b: number;
}

const aa: IA = {
  a: 21
}

const bb: IB = {
  b: 42
}

// Combining mutliple types
function x(obj: IA & IB) {
  return obj.a + obj.b;
}

const cc: IA & IB = {
  a: 1,
  b: 2
}

console.log(x(cc));
// Spreading an obj dd = {...cc}
let dd = cc;
dd.a = 99;
console.log(cc); // Sp object spread doesn't make a deep copy

// Function to combine objects
function com(objA, objB) {
  return {...objA, ...objB};
}

const oA = {a: 1};
const oB = {b: 2};
const res = com(oA, oB); // So we need to avoid 'any' as much as we can, this seems to be the point of ts

console.log(res);