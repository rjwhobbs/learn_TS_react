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
  return (<Dog>pet).bark() !== undefined //Making an assertion on the object
}

function callPet(pet: Dog | Cat) {
  pet.walk()
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}