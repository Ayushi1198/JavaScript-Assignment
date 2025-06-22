function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
let num1 = parseInt(prompt("Enter the first positive number:"));
let num2 = parseInt(prompt("Enter the second positive number:"));
if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
  console.log("Please enter two positive numbers.");
} else {
  let result = gcd(num1, num2);
  console.log("The GCD of " + num1 + " and " + num2 + " is: " + result);
}
