let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
let c = parseFloat(prompt("Enter third number:"));
let d = parseFloat(prompt("Enter fourth number:"));
let e = parseFloat(prompt("Enter fifth number:"));

let largest;

if (a >= b && a >= c && a >= d && a >= e) {
  largest = a;
} else if (b >= a && b >= c && b >= d && b >= e) {
  largest = b;
} else if (c >= a && c >= b && c >= d && c >= e) {
  largest = c;
} else if (d >= a && d >= b && d >= c && d >= e) {
  largest = d;
} else {
  largest = e;
}

alert("The largest number is: " + largest);
