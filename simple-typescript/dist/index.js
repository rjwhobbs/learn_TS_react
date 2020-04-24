"use strict";
// Conditional Types
// what is ts differing?
function someFn(val) {
    const someOtherFn = function (someArg) {
        const a = someArg;
        console.log("a =", a);
        return {};
    };
    return someOtherFn;
}
const result = someFn("x");
console.log(result);
result("Type B");
// result("xx"); // Error only takes 'Type B'
// Distributive property of a conditional type
