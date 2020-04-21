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