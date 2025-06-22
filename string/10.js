function swapcase(str) {
  return str.split("").map(char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  ).join("");
}
let input6 = prompt("Enter a string with mixed case:");
console.log(swapcase(input6)); 
