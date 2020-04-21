"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoppingCart_1 = require("./lib/shoppingCart");
const calcTotalAmount_1 = require("./lib/calcTotalAmount");
const cart = new shoppingCart_1.ShoppingCart(); // I can't see how the obj is returning anything here
console.log(calcTotalAmount_1.calcTotalAmount(cart));
