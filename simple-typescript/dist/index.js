"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = require("prop-types");
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
function thing(test) {
    console.log(typeof test);
}
// thing('cheese'); // gives error but works?
thing('red');
// thing(undefined); // With strict null check set to true this produces an error
// ReturnType<T> extracting the type of retrun from a function
function fn() {
    return { a: prop_types_1.number, b: prop_types_1.string };
}
function Deletable(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.deleted = false; // false to silence warning
        }
        delete() { }
        ;
    };
}
class Car {
    constructor(name) {
        this.name = name;
    }
    ;
}
class User {
    constructor(name) {
        this.name = name;
    }
    ;
}
const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);
//Errors cause vscode wants these props to be defined
class Profile {
    constructor() {
        this.user = new DeletableUser('Mic');
        this.car = new DeletableCar('Train');
    }
}
const profile = new Profile();
console.log(profile);
// ThisType<T>
