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
// Making use of generic types to make our func typesafe
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    console.log(currentDate);
    return items.filter(item => item.expiryDate.getDate() < currentDate);
};
console.log(vanillaCakes[0].expiryDate.getDate());
console.log(chocoCakes[0].expiryDate.getTime());
console.log(getExpiredItems(chocoCakes));
const a = [{ x: 7 }];
console.log(a[0].x);
// Here we have an error, there is no implementation actually happening
//class TestThree implements TestOne {}
