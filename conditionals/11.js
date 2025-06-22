function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
let num1 = parseInt(prompt("Enter first positive number:"));
let num2 = parseInt(prompt("Enter second positive number:"));
if (num1 > 0 && num2 > 0) {
  let gcd = findGCD(num1, num2);
  console.log("The GCD of " + num1 + " and " + num2 + " is: " + gcd);
} else {
  console.log("Please enter only positive numbers.");
}
