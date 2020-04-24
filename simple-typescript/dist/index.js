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
//anyValue.helloWorld(); // No error, but runtime error
// unknownValue.helloWorld(); // you'll get a TS error.
// 2. You cannot assign unknown to anything but itself or any, while you can assign any to anything:
/*
let anyValue: any = 1;
let unknownValue: unknown = 1;
 
let str: string;
 
str = anyValue; // No error.
str = unknownValue; // you'll get a TS error.
*/
//These constraints make sure that you verify the unknown value before working with it, which is important to reduce the possibility of a runtime error.
//Type assertion (you can't simply assert that a value can have any type you want)
// You can't assert a value to be of type which doesn't overlap with the actual type of the value:
/*
    let b = '1' as number; // Error, you can't say that a string is a number.
     
    interface User {
      name: string;
      email: string;
    }
     
    function saveUser(user: User) {}
     
    saveUser(<User>{ helloWorld: '' }); // Error, this object doesn't have the required properties of the User interface.
*/ 
