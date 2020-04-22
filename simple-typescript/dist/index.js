"use strict";
const aa = {
    a: 21
};
const bb = {
    b: 42
};
// Combining mutliple types
function x(obj) {
    return obj.a + obj.b;
}
const cc = {
    a: 1,
    b: 2
};
console.log(x(cc));
// Spreading an obj dd = {...cc}
let dd = cc;
dd.a = 99;
console.log(cc); // Sp object spread doesn't make a deep copy
// Function to combine objects
// So ts is able to make res the correct type shape thanks to generics but we can still input primitive types in to this function
function com(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const oA = { a: 1 };
const oB = { b: 2 };
const res = com('', oB); // So we need to avoid 'any' as much as we can, this seems to be the point of ts
console.log(res);
