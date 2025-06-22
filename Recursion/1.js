function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let input = prompt("Enter a number to find its factorial:");
let num = parseInt(input);
if (isNaN(num) || num < 0) {
  console.log("Please enter a non-negative integer.");
} else {
  let result = factorial(num);
  console.log("Factorial of " + num + " is: " + result);
}