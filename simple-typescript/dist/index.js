"use strict";
let user = {
    name: 'John',
    email: 'john@example.com'
};
/*
type User = {
  name: string;
  email: string;
}
*/
const add = function (a, b) {
    return a + b;
};
/*
type AddType = (a: number, b: number) => number
*/
//You don't have to set the types explicitly all the time. TypeScript infers types where it's possible:
let XX = 1; // is equivalent to let XX: number = 1;
function log(message) { }
log(1); // is equivalent to log<number>(1)
