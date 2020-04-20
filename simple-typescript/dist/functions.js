"use strict";
// Fucntions (Optional and default parms)
function sum(a, b) {
    return a + (b || 0); // Protecting if b was not given
}
const sumTwo = (a, b) => a + b;
