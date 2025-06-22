function detectType(input) {
  if (input === null) {
    return "undefined";
  }
  if (input.toLowerCase() === "true" || input.toLowerCase() === "false") {
    return "boolean";
  }
  if (!isNaN(input) && input.trim() !== "") {
    return "number";
  }
  if (input === "[object Object]") {
    return "object";
  }
  return "string";
}
let userInput = prompt("Enter something:");
let type = detectType(userInput);
console.log( type);
