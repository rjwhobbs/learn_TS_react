import { chocolate } from "color-name";

// Generics
// Generic functions
function genericFunc<T>(x: T): T {
  return x;
}

const genArrowFunc = <T>(x: T): T => x;

//generic interface
interface GenInterface<T> {
  (a: T): T;
  x: T;
}

interface GenIntTwo<T>{
  <U>(a: U): U; // Gen types with call signature
  x: T;
}

// We can use gen type params only on instance side of class
class GenClass<P>{
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }
}

interface Expirable {
  expiryDate: Date;
}

// I think the difference between implements and extends is that with extend you actually 
// inherit where as with implements you just implement.
interface ChocCake extends Expirable {}

interface VanillaCake extends Expirable {}

// So we can make interfaces for arrays aswell?
const chocoCakes: ChocCake[] = [
  {expiryDate: new Date()}
];

const vanillaCakes: VanillaCake[] = [
  {expiryDate: new Date()}
];

// Making use of generic types to make our func typesafe
// Although it might not seem like it this makes the function flexible as long as the item has the expiarydate prop.

interface GetExpireItemsFunc {
  <Item extends Expirable>(items: Array<Item>): Array<Item>; 
}

// Here TS infers the implementation for us with the get func interface
const getExpiredItems: GetExpireItemsFunc = (items) => {
  const currentDate = new Date().getTime();
  console.log(currentDate);
  return items.filter(item => item.expiryDate.getDate() < currentDate);
}
// const getExpiredItems = <Item extends Expirable>(items: Array<Item>) => {
//   const currentDate = new Date().getTime();
//   console.log(currentDate);
//   return items.filter(item => item.expiryDate.getDate() < currentDate);
// }

console.log(vanillaCakes[0].expiryDate.getDate()); 
console.log(chocoCakes[0].expiryDate.getTime()); 
// This works because chocoCakes has the same shape as <Items extends Expirable>
console.log(getExpiredItems(chocoCakes));
// Being explict, this function must only take VanillaCake type/shape
console.log(getExpiredItems<VanillaCake>(vanillaCakes));

// A small test of the code above
interface TestOne {
  x: number;
}

interface TestTwo extends TestOne {}

const a: TestTwo[] = [{x: 7}];
console.log(a[0].x);

// Here we have an error, there is no implementation actually happening
//class TestThree implements TestOne {}

interface ShoppingCart<ItemId, Item> {
  items: Array<Item>;
  addItem(this: ShoppingCart<ItemId, Item>, item: Item): void; // TS can't infer 'this'
  getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined; 
  // ^ The find method in the literal below returns undefined if no match is found
  // Hence in our definition we had to specify that this method can either return a type
  // of item or undefined
}

interface Item {
  id: number;
  price: number;
}

const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemById(id) {
    return this.items.find(item => item.id === id);
  }
}