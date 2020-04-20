// let something: number = null; // Can't do this as strict null check is true in config
export function capIt(str: string | null) {
  if (str) {
    return str[0].toUpperCase() + str.substr(1);
  }
}