"use strict";
// Unions with type gaurds
function func(arg) {
    if (typeof arg === 'string') {
        //code
    }
    else if (typeof arg == 'number') {
        //code
    }
}
function isDog(pet) {
    console.log('here');
    return pet.bark !== undefined; //Making an assertion on the object
}
function isDogTwo(pet) {
    return pet.bark !== undefined; //Making an assertion on the object
}
function callPet(pet) {
    pet.walk();
    if (isDogTwo(pet)) {
        console.log("Here");
        pet.bark();
    }
    else {
        pet.meow();
    }
}
let dog = {
    walk() {
        console.log('Walking');
    },
    bark() {
        console.log('Barking');
    }
};
let cat = {
    walk() {
        console.log('Walking');
    },
    meow() {
        console.log('Barking');
    }
};
console.log('XXXX' + isDog(dog));
console.log('XXXX' + isDog(cat));
console.log('XXXX' + isDogTwo(dog));
console.log('XXXX' + isDogTwo(cat));
// Type gaurd with classes
class Foo {
    constructor() {
        this.foo = 42;
    }
}
class Bar {
    constructor() {
        this.bar = 21;
    }
}
function doATHing(obj) {
    if (obj instanceof Bar) {
        obj.bar;
    }
    else {
        obj.foo;
    }
}
