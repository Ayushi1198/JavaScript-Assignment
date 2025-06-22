let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let c = parseFloat(prompt("Enter the third number:"));

let product = a * b * c;

if (product > 0) {
  alert("The sign is +");
} else if (product < 0) {
  alert("The sign is -");
} else {
  alert("The product is 0 (sign is neither + nor -)");
}
