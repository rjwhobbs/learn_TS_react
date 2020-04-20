// With default
//import multiply,  {mulTwo} from './mul'; 
//Without default
//import {mul, mulTwo} from './mul'; 
//With namespace
// import * as math from './mul';
//Alias
import multiply, {mulTwo as mTwo} from './mul'; 
import { capIt } from './types';

console.log(capIt('this'));

const a = 21;
const b = 2;

// console.log(math.default(a, b)); //Getting default export from namespace
// console.log(math.mulTwo(b));
console.log(mTwo(91));