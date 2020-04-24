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
// TypeScript includes the type called unknown. We can use this type to describe a value which we don't know. For example, a value returned from a network call:
const getSomeDataFromSomeAPICall = () => { }; // silence
let data = getSomeDataFromSomeAPICall();
if (typeof data === 'string') {
    // data is a string.
}
else if (Array.isArray(data)) {
    // data is an array.
}
else if (typeof data === 'object') {
    // data is an object.
}
// Now you'd ask: "Why don't use any in this case?". The differences are:
// 1. TS forces you to determine the type of the unknown value before you can work with it:
let anyValue = 1;
let unknownValue = 1;
function isCat(pet) {
    return pet.meow !== undefined;
}
function greet(pet) {
    if (isCat(pet)) {
        pet.meow();
    }
    else {
        pet.bark();
    }
}
