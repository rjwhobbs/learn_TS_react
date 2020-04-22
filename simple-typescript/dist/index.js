"use strict";
let aa = {
    a: 21
};
let bb = {
    b: 42
};
// Combining mutliple types
function x(obj) {
    return obj.a + obj.b;
}
let cc = {
    a: 1,
    b: 2
};
console.log(x(cc));
