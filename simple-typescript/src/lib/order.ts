import { InterfaceOrder } from "./calcTotalAmount";

export class Order implements InterfaceOrder {
  calcTotal() {
    return 100;
  }
}