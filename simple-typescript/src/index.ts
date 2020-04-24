let user = {
  name: 'John',
  email: 'john@example.com'
};

type User = typeof user;

/*
type User = {
  name: string;
  email: string;
}
*/

const add = function(a: number, b: number) {
return a + b;
};

type AddType = typeof add;

/*
type AddType = (a: number, b: number) => number
*/