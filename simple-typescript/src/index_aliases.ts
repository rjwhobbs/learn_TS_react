//Type-Alias
type MyAlias = string | string[] | null;
type Alias = {a: number} & {b: number};
type potato<T> = T[];

type Cheese = {
  a: number;
  b: number;
}

// We use can use an alias to describe the shape of an object however it is advised to ratheuse interfaces for that
// and use aliases for complex types as in the above first 3