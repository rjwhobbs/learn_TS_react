"use strict";
// Fucntions (Optional and default parms)
function sum(a, b, c = 42) {
    return a + (b || 0) + c; // Protecting if b was not given
}
const sumTwo = (a, b) => a + b;
