function is_string(input) {
  return typeof input === 'string' || input instanceof String;
}
let input1 = prompt("Enter a value:");
console.log(is_string(input1));
