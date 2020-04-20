"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let something: number = null; // Can't do this as strict null check is true in config
function capIt(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
exports.capIt = capIt;
// Objects a re non-primitave therfore you can't assign primitive types to an object in TS
// Non prim [], {}, new Map(),
const myObj = [];
//Void
function log(str) {
    console.log(str);
}
//Array
let arrOne = ['z', 'x'];
let arrTwo = ['z', 'x'];
//Tuple, Array with fixed number of elements
let tuple = ['bru', 42];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color["Blue"] = "blue"; // we can also assign strings as a 'key'
})(Color || (Color = {}));
exports.enumTest = () => {
    console.log(Color.Red, Color.Blue, Color.Green);
    console.log(Color[3]); // Accessing the value of an enum
    // console.log(Color['blue']); //Does not work
};
let col = Color.Blue;
//Any, anything
// //Type Assertion
// const email = document.getElementById('email'); // Hover over to get it's return
// // Could be null
// if (email) {
//   email.addEventListener('change', e => {
//     const input = e.currentTarget as HTMLInputElement; //Chap 8 11:00
//     // Or
//     // const input = <HTMLInputElement>e.currentTarget // Not available in tsx files
//     console.log(input.value);
//   });
// }
