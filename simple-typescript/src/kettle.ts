// We can only use interfaces to make public properties of the instance side of a class
interface Kettle {
  volume: number;
  new (volume: number): Kettle; // Here we discribe the constructor and ofcourse it's return type
}