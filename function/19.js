function largerThan(arr, number) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      result.push(arr[i]);
    }
  }
  return result;
}
let input = prompt("Enter numbers:");
let array = input.split(",").map(Number);
let threshold = parseFloat(prompt("Enter the number to compare:"));
let output = largerThan(array, threshold);
console.log("Numbers greater than " + threshold + ":", output);
