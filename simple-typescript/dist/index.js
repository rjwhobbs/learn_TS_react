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
    return pet.bark() !== undefined; //Making an assertion on the object
}
function callPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
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
