function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

let base = parseInt(prompt("Enter the base number:"));
let exponent = parseInt(prompt("Enter the exponent (non-negative integer):"));

if (isNaN(base) || isNaN(exponent) || exponent < 0) {
  console.log("Please enter a valid base and a non-negative exponent.");
} else {
  let result = power(base, exponent);
  console.log(base + " raised to the power of " + exponent + " is: " + result);
}
