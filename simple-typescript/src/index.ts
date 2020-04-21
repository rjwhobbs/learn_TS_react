import {ShoppingCart} from './lib/shoppingCart';
import { calcTotalAmount } from "./lib/calcTotalAmount";

const cart = new ShoppingCart(); // I can't see how the obj is returning anything here
console.log(calcTotalAmount(cart));