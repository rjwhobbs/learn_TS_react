import {ShoppingCart} from './lib/shoppingCart';
import { calcTotalAmount } from "./lib/calcTotalAmount";
import { Order } from './lib/order';

const cart = new ShoppingCart(); // I can't see how the obj is returning anything here
const order = new Order();
console.log(calcTotalAmount(cart));
console.log(calcTotalAmount(order));