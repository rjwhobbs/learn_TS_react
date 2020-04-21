interface InterfaceOrder {
  calcTotal(): number;
}

// So just to refresh, we can make interfaces for what we know as js objects, see interfaces.
export function calcTotalAmount(order: InterfaceOrder) {
  let total = order.calcTotal();
}