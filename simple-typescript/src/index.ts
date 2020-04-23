import { string } from "prop-types";

// Utility types
// Partial<T> makes all props of an interface optional

// So I'm getting conflicts from other ts files on interface 'A' hence 'AA'
interface AA {
  x: number;
  y: number;
}

const updateA = (id: number, a: Partial<AA>) => {
  if (a.x) {
    return a.x + id;
  }
  return 0;
}

console.log(updateA(1,{x: 23}));

// Required<T> makes optional props required

// Redonly<T> makes all required props of an interface readonly
// Record<K, T> Key value interface, typically <string, number>

const map: Record<string, AA> = {
  aa1: {
    x: 1,
    y: 2
  },
  aa2: {
    x: 3,
    y: 4
  }
}

// Pick<T, 'op' | 'op2> pick only the prop that you want
let test: Pick<AA, 'x'> = {x: 1};

//Omit<T, K> opposite of pick