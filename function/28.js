function greet(name) {
  return "Hello, " + name + "!";
}
function processUserInput(callback) {
  let name = prompt("Enter your name:");
  let result = callback(name);
  console.log(result);
}
processUserInput(greet);
