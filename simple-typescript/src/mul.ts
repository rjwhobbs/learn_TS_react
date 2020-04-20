export default function mul(a: number, b: number): number {
  return a * b;
}

//Why no return type here? Cause mul() is doing the return?
export function mulTwo(a: number) {
  return mul(a, 2);
}