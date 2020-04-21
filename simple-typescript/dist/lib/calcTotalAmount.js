"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// So just to refresh, we can make interfaces for what we know as js objects, see interfaces.
function calcTotalAmount(order) {
    let total = order.calcTotal();
    const discount = total * 0.1; // In js we can say .1 , but this gives my eyes cancer
    total -= discount;
    const tax = total * 0.2;
    total += tax;
    return total;
}
exports.calcTotalAmount = calcTotalAmount;
