// Unions with type gaurds
function func(arg: string | number | boolean) {
  if (typeof arg === 'string') {
    //code
  } else if (typeof arg == 'number') {
    //code
  }
}