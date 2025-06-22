
let userInput = prompt("Type 'date' to create a Date object:");
let input;
if (userInput.toLowerCase() === "date") {
  input = new Date();  
} else {
  input = userInput; 
}
function isDate(value) {
  return value instanceof Date;
}
if (isDate(input)) {
  console.log("This is a Date object.");
} else {
  console.log("This is NOT a Date object.");
}

