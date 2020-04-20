"use strict";
// Fucntions (Optional and default params)
function sum(a, b, c = 42) {
    return a + (b || 0) + c; // Protecting if b was not given
}
const sumTwo = (a, b) => a + b;
function sumAll(...numbers) {
    return numbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0); // Not sure why the default value was here, because we can add no args to this func, not sure why though.
}
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
