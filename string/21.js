function repeat_string(str, count) {
  if (typeof str !== 'string' || typeof count !== 'number' || count < 0) {
    return "Error in string or count.";
  }
  return str.repeat(count);
}
let str1 = prompt("Enter a string to repeat:");
let count1 = prompt("Enter how many times to repeat:");
console.log(repeat_string(str1, count1 ? parseInt(count1) : undefined));
