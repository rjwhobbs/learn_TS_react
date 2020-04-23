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