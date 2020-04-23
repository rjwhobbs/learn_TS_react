import { string, number } from "prop-types";

// Utility types
// Partial<T> makes all props of an interface optional

// So I'm getting conflicts from other ts files on interface 'A' hence 'AA'
interface AA {
  x: number;
  y: number;
}

const updateA = (id: number, a: Partial<AA>) => {
  if (a.x) {
    return a.x + id;
  }
  return 0;
}

console.log(updateA(1,{x: 23}));

// Required<T> makes optional props required

// Redonly<T> makes all required props of an interface readonly
// Record<K, T> Key value interface, typically <string, number>

const map: Record<string, AA> = {
  aa1: {
    x: 1,
    y: 2
  },
  aa2: {
    x: 3,
    y: 4
  }
}

// Pick<T, 'op' | 'op2 | etc> pick only the prop that you want
type test = Pick<AA, 'x'>;

//Omit<T, K> opposite of pick

//Exculde<T, U> applies to unions

type Nums = 1 | 2 | 3 | 4 | 5 | 6 ;
type Even = 2 | 4 | 6;
type Odd = Exclude<Nums, Even>;

//Extract<T, U> 

type prime = 1 | 2 | 3 | 5 | 7;
type pTest = Extract<Nums, prime>; // 7 won't get extracted

// NonNullable<T> only on union types however strict null checks must be true

interface BB {
  id: number;
  color?: 'red' | 'blue';
}

function thing(test: NonNullable<BB['color']>) { // some new js syntax
  console.log(typeof test);
}

// thing('cheese'); // gives error but works?
thing('red');
// thing(undefined); // With strict null check set to true this produces an error

// ReturnType<T> extracting the type of retrun from a function

function fn() {
  return {a: number, b: string}
}

type FnReturn = ReturnType<typeof fn>;

// InstanceType<T>, the type of the static side of a class 20:00 chap 20
// Mix in patterns?

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance; 

function Deletable<BassClass extends Constructable<{}>>(Base: BassClass) {
  return class extends Base {
      deleted: boolean = false; // false to silence warning
      delete() {};
  }
}

class Car {
  constructor(public name: string) {};
}

class User {
  constructor(public name: string) {};
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DUInstance = InstanceType<typeof DeletableUser>;
type DCInstance = InstanceType<typeof DeletableUser>;

//Errors cause vscode wants these props to be defined
class Profile { 
  user:  DUInstance = new DeletableUser('Mic');
  car: DCInstance = new DeletableCar('Train');
}

const profile = new Profile();

console.log(profile);

// ThisType<T>