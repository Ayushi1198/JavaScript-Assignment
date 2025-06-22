function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1; 
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
let input = prompt("Enter numbers:");
let arr = input.split(",").map(Number);
arr.sort((a, b) => a - b);
let target = parseInt(prompt("Enter the number you want to search:"));
let result = binarySearch(arr, target);
if (result !== -1) {
  console.log("Sorted array:", arr);
  console.log("Number found at index:", result);
} else {
  console.log("Sorted array:", arr);
  console.log("Number not found.");
}
