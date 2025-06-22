
let a = parseFloat(prompt("Enter the first side of the triangle:"));
let b = parseFloat(prompt("Enter the second side of the triangle:"));
let c = parseFloat(prompt("Enter the third side of the triangle:"));
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("Area of the triangle is: " + area);
