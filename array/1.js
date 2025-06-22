let input = prompt("Enter something:");

if (input[0] === "[" && input[input.length - 1] === "]") {
  console.log("The input looks like an array.");
} else {
  console.log("The input is NOT an array.");
}
