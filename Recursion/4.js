function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}
let input = prompt("Enter numbers:");
let numbers = input.split(",").map(Number);
if (numbers.some(isNaN)) {
  console.log("Please enter only valid numbers.");
} else {
  let result = sumArray(numbers);
  console.log("The sum of the array is: " + result);
}
