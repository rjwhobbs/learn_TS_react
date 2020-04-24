"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const EEE = {
    someAProp: 1,
    someBprop: 'b'
};
console.log(EEE);
