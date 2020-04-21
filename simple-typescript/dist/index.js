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
// Here TS infers the implementation for us with the get func interface
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    console.log(currentDate);
    return items.filter(item => item.expiryDate.getDate() < currentDate);
};
// const getExpiredItems = <Item extends Expirable>(items: Array<Item>) => {
//   const currentDate = new Date().getTime();
//   console.log(currentDate);
//   return items.filter(item => item.expiryDate.getDate() < currentDate);
// }
console.log(vanillaCakes[0].expiryDate.getDate());
console.log(chocoCakes[0].expiryDate.getTime());
// This works because chocoCakes has the same shape as <Items extends Expirable>
console.log(getExpiredItems(chocoCakes));
// Being explict, this function must only take VanillaCake type/shape
console.log(getExpiredItems(vanillaCakes));
const a = [{ x: 7 }];
console.log(a[0].x);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
};
