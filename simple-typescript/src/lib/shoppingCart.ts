// These two modules don't know about each other, they are not tied to each other, they jus tshare the same interface
import { InterfaceOrder } from "./calcTotalAmount";

export class ShoppingCart implements InterfaceOrder {
  calcTotal() {
    return 100;
  }
}