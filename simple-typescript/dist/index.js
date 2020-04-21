"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoppingCart_1 = require("./lib/shoppingCart");
const calcTotalAmount_1 = require("./lib/calcTotalAmount");
const order_1 = require("./lib/order");
const cart = new shoppingCart_1.ShoppingCart(); // I can't see how the obj is returning anything here
const order = new order_1.Order();
console.log(calcTotalAmount_1.calcTotalAmount(cart));
console.log(calcTotalAmount_1.calcTotalAmount(order));
