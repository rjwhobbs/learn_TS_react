"use strict";
// Fucntions (Optional and default parms)
function sum(a, b, c = 42) {
    return a + (b || 0) + c; // Protecting if b was not given
}
const sumTwo = (a, b) => a + b;
function sumAll(...numbers) {
    return numbers.reduce((acc, cur) => {
        return acc + cur;
    }); // Not sure why the default value was here
}
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
