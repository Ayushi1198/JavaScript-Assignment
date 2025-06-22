function repeat(str, n = 1) {
  return str.repeat(n);
}
let str1 = prompt("Enter a string to repeat:");
let n1 = prompt("How many times to repeat? (default is 1)");
console.log(repeat(str1, n1 ? parseInt(n1) : 1));
