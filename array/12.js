
let input = prompt("Enter numbers separated by commas (e.g., 1,2,3,4):");
let numbers = input.split(",").map(Number);
let sum = 0;
let product = 1;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  product *= numbers[i];
}
console.log("Sum of array elements:", sum);
console.log("Product of array elements:", product);
