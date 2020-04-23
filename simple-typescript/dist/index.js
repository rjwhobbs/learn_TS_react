"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateA = (id, a) => {
    if (a.x) {
        return a.x + id;
    }
    return 0;
};
console.log(updateA(1, { x: 23 }));
// Required<T> makes optional props required
// Redonly<T> makes all required props of an interface readonly
// Record<K, T> Key value interface, typically <string, number>
const map = {
    aa1: {
        x: 1,
        y: 2
    },
    aa2: {
        x: 3,
        y: 4
    }
};
// Pick<T, 'op' | 'op2> pick only the prop that you want
let test = { x: 1 };
//Omit<T, K> opposite of pick
