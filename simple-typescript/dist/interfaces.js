"use strict";
let a = {
    someProp: 1
};
let b = a;
let profile = {
    name: 'John',
    age: 99
};
// We can now add number props on the fly
const c = {};
c.i = 99;
c.j = 0;
c.str = "test"; // No more error thanks to union type
const sum = (a, b) => a + b;
sum.someProp = 42;
