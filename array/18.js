function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; 
}
let inputArray = prompt("Enter sorted numbers:");
let arr = inputArray.split(",").map(Number);
let target = parseInt(prompt("Enter the number to search:"));
let result = binarySearch(arr, target);
if (result !== -1) {
  console.log("Found at index " + result);
} else {
  console.log("Number not found.");
}
