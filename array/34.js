function nthLargest(arr, n) {
  arr.sort(function(a, b) {
    return b - a;
  });
  return arr[n - 1];
}
let input = prompt("Enter numbers separated by commas:");
let n = parseInt(prompt("Enter the number:"));
let numbers = input.split(',').map(Number);
let result = nthLargest(numbers, n);
alert("The " + n + "th largest number is: " + result);
