"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generics
// Generic functions
function genericFunc(x) {
    return x;
}
const genArrowFunc = (x) => x;
// We can use gen type params only on instance side of class
class GenClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
// So we can make interfaces for arrays aswell?
const chocoCakes = [
    { expiryDate: new Date() }
];
const vanillaCakes = [
    { expiryDate: new Date() }
];
const a = [{ x: 7 }];
console.log(a[0].x);
