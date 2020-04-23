"use strict";
// Interfaces implicitly merge
let cart = {
    x: 99,
    calcDis(op) {
        if (op && op.discount) {
            return 77;
        }
        return 22;
    }
};
// Merging namespaces
var MyNS;
(function (MyNS) {
    MyNS.x = 42;
})(MyNS || (MyNS = {}));
(function (MyNS) {
    MyNS.y = 9000;
    MyNS.getY = () => MyNS.y;
})(MyNS || (MyNS = {}));
let thing = { z: 56 };
console.log(MyNS.getY(), thing.z);
// Merging namespaces with functions
function test() {
    return 9999;
}
(function (test) {
    test.something = 42;
})(test || (test = {}));
console.log(test(), test.something);
// Declaration merging with enums
var Veg;
(function (Veg) {
    Veg["Tomato"] = "tomato";
    Veg["Onion"] = "onion";
})(Veg || (Veg = {}));
//This is a static addition?
(function (Veg) {
    function makeSalad() {
        return Veg.Tomato + Veg.Onion;
    }
    Veg.makeSalad = makeSalad;
})(Veg || (Veg = {}));
console.log(Veg.makeSalad());
// Merging static members to classes
class Pet {
}
(function (Pet) {
    Pet.allPets = ['cat', 'dog', 'fish'];
})(Pet || (Pet = {}));
console.log(Pet.allPets);
