//Intersection types 16.
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
// So ts is able to make res the correct type shape thanks to generics but we can still input primitive types in to this function
function com<ObjA, ObjB>(objA: ObjA, objB: ObjB) {
  return {...objA, ...objB};
}

const oA = {a: 1};
const oB = {b: 2};
const res = com('', oB); // So we need to avoid 'any' as much as we can, this seems to be the point of ts

console.log(res);