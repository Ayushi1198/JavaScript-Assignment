function power(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result=result*base;
  }
  console.log(base + " raised to the power of " + exponent + " is: " + result);
}
let b = parseFloat(prompt("Enter the base (b):"));
let n = parseInt(prompt("Enter the exponent (n):"));
if (isNaN(b) || isNaN(n)) {
  console.log("Please enter valid numbers.");
} else if (n < 0) {
  console.log("This loop-based version doesn't support negative exponents.");
} else {
  power(b, n);
}
