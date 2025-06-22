function truncate_string(str, num) {
  return str.slice(0, num);
}
let input4 = prompt("Enter a string:");
let charsToKeep = parseInt(prompt("How many characters to keep?"));
console.log(truncate_string(input4, charsToKeep));
