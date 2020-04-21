// These two modules don't know about each other, they are not tied to each other, they just share the same interface
import { InterfaceOrder } from "./calcTotalAmount";

export class ShoppingCart implements InterfaceOrder {
  calcTotal() {
    return 100;
  }
}