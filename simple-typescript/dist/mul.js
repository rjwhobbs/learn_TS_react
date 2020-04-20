"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mul(a, b) {
    return a * b;
}
exports.default = mul;
//Why no return type here? Cause mul() is doing the return?
function mulTwo(a) {
    return mul(a, 2);
}
exports.mulTwo = mulTwo;
