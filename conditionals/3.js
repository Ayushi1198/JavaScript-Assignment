let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let c = parseFloat(prompt("Enter the third number:"));
let result;

if (a >= b && a >= c) {
  if (b >= c) {
    result = a + ", " + b + ", " + c;
  } else {
    result = a + ", " + c + ", " + b;
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    result = b + ", " + a + ", " + c;
  } else {
    result = b + ", " + c + ", " + a;
  }
} else {
  if (a >= b) {
    result = c + ", " + a + ", " + b;
  } else {
    result = c + ", " + b + ", " + a;
  }
}

alert( result);
