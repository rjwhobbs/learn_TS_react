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
// With extends objects we can make sure only objects are passed into our function
function com<ObjA extends object, ObjB extends object>(objA: ObjA, objB: ObjB): ObjA & ObjB { // This protects against the objs not being spread : return {...objA, objB}; So this protects the intesection operation?
  return {...objA, ...objB};
}

const oA = {a: 1};
const oB = {b: 2};
const res = com(oA, oB); // So we need to avoid 'any' as much as we can, this seems to be the point of ts

console.log(res);