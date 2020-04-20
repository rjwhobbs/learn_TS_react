// let something: number = null; // Can't do this as strict null check is true in config
export function capIt(str: string | null) {
  if (str) {
    return str[0].toUpperCase() + str.substr(1);
  }
}

// Objects a re non-primitave therfore you can't assign primitive types to an object in TS
// Non prim [], {}, new Map(),

const myObj: object = [];

//Void
function log(str: string): void {
  console.log(str);
}

//Array
let arrOne: string[] = ['z', 'x'];
let arrTwo: Array<string> = ['z', 'x'];

//Tuple, Array with fixed number of elements
let tuple: [string, number] = ['bru', 42];

//Enum
enum Color {
  Red = 3, // Changing the sequence of a enum, it now starts from 3 not 0
  Green, // Numbers can also be set manually
  Blue = 'blue' // we can also assign strings as a 'key'
}
 
export const enumTest = () => {
  console.log(Color.Red, Color.Blue, Color.Green);
  console.log(Color[3]); // Accessing the value of an enum
  // console.log(Color['blue']); //Does not work
}
let col: Color = Color.Blue;

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