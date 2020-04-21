// We can only use interfaces to make public properties of the instance side of a class
interface Kettle {
  volume: number;
  //new (volume: number): Kettle; // Here we discribe the constructor and ofcourse it's return type. So the reason this won't work is because the constructure
}                               // is on the static side of the interface

// Making the constructor from an interface
interface KettleConstructor {
  new (volume: number): Kettle;
}

class TeaKettle implements Kettle {
  volume: number;
  constructor(x: number) {
    this.volume = x;
  }
}

class ElecKettle implements Kettle {
  volume: number;
  constructor(volume: number) {
    this.volume = volume;
  }
}

// A flexible way of creating objects, as long as the constructors match
function kettleFact(KettleClass: KettleConstructor) {
  const kettle = new KettleClass(21);
  // Code
  return kettle;
}

const teaKettle = kettleFact(TeaKettle);
console.log(teaKettle.volume);
