"use strict";
// We can't merge modules but we can augment them.
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
