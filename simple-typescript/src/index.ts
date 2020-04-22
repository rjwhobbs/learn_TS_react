// Unions with type gaurds
function func(arg: string | number | boolean) {
  if (typeof arg === 'string') {
    //code
  } else if (typeof arg == 'number') {
    //code
  }
}

//Type gaurd with interfaces
interface Cat {
  walk(): void;
  meow(): void;
}

interface Dog {
  walk(): void;
  bark(): void;
}

function isDog(pet: Dog | Cat): pet is Dog  {
  console.log('here');
  return (<Dog>pet).bark !== undefined //Making an assertion on the object
}

function isDogTwo(pet: Dog | Cat): pet is Dog  {
  return (pet as Dog).bark !== undefined //Making an assertion on the object
}

function callPet(pet: Dog | Cat) {
  pet.walk()
  if (isDogTwo(pet)) {
    console.log("Here");
    pet.bark();
  } else {
    pet.meow();
  }
}

let dog: Dog = {
  walk() {
    console.log('Walking');
  },
  bark() {
    console.log('Barking');
  }
};

let cat: Cat = {
  walk() {
    console.log('Walking');
  },
  meow() {
    console.log('Barking');
  }
};

console.log('XXXX' + isDog(dog));
console.log('XXXX' + isDog(cat));
console.log('XXXX' + isDogTwo(dog));
console.log('XXXX' + isDogTwo(cat));

// Type gaurd with classes
class Foo {
  foo: number = 42;
}

class Bar {
  bar: number = 21;
}

function doATHing(obj: Bar | Foo) {
  if (obj instanceof Bar) {
    obj.bar;
  } else {
    obj.foo;
  }
}