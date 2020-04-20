"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// With default
//import multiply,  {mulTwo} from './mul'; 
//Without default
//import {mul, mulTwo} from './mul'; 
//With namespace
// import * as math from './mul';
//Alias
const mul_1 = require("./mul");
const types_1 = require("./types");
console.log(types_1.capIt('this'));
const a = 21;
const b = 2;
// console.log(math.default(a, b)); //Getting default export from namespace
// console.log(math.mulTwo(b));
console.log(mul_1.mulTwo(91));
