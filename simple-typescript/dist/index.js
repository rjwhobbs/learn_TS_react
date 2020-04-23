"use strict";
// Utility types
// Partial<T> makes all props of an interface optional
const updateA = (id, a) => {
    if (a.x) {
        return a.x + id;
    }
    return 0;
};
console.log(updateA(1, { x: 23 }));
