"use strict";
// Conditional Types
// what is ts differing?
function someFn(val) {
    const someOtherFn = function (someArg) {
        console.log("someArg =", someArg);
        return {};
    };
    return someOtherFn;
}
const result = someFn("x");
console.log(result);
result("Type B");
// result("xx"); // Error only takes 'Type B'
