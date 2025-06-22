
let input = prompt("Enter numbers:");
let numbers = input.split(",").map(Number);
let target = parseInt(prompt("Enter the target number:"));
let result = [];
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] === target) {
      result = [i, j];
      break;
    }
  }
  if (result.length > 0) {
    break;
  }
}
if (result.length > 0) {
  alert("Indices: " + result[0] + ", " + result[1]);
} else {
  alert("No pair found.");
}
