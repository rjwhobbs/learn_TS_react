// We can't merge modules but we can augment them.

// Merging interfaces
// Lets assume we can't edit this
//////////
interface Cart {
  calcDis(): number;
}
///////////

interface Cart {
  x: number;
}

interface Cart {
  calcDis(op: {discount: number}): number;   // Overloading the original
}

// Interfaces implicitly merge
let cart: Cart = {
  x: 99,
  calcDis(op?: {discount: number}) { // since it's overloaded we must make the arg optional
    if (op && op.discount) {
      return 77;
    }
    return 22;
  }
}

// Merging namespaces
namespace MyNS {
  export const x = 42;
  export interface IFOne {
    y: number;
  }
}

namespace MyNS {
  export const y = 9000;
  export const getY = () => y;
  export interface IFTwo {
    z: number;
  }
}

let thing: MyNS.IFTwo = {z: 56}

console.log(MyNS.getY(), thing.z);

