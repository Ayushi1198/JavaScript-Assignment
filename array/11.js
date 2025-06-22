
let input = prompt("Enter numbers separated by commas (e.g., 1,2,3,4):");
let numbers = input.split(",").map(Number);

let sumOfSquares = 0;
for (let i = 0; i < numbers.length; i++) {
  sumOfSquares += numbers[i] * numbers[i];
}

console.log("Sum of squares:", sumOfSquares);
