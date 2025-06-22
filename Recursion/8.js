function binarySearch(arr, target, left, right) {
  if (left > right) {
    return -1; // Target not found
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}
let inputArr = prompt("Enter numbers separated by commas (e.g. 5,1,3,2,4):");
let arr = inputArr.split(',').map(Number);
arr.sort(function(a, b) {
  return a - b;
});
let target = parseInt(prompt("Enter the number to search for:"));
if (isNaN(target)) {
  console.log("Invalid number.");
} else {
  let index = binarySearch(arr, target, 0, arr.length - 1);

  console.log("Sorted Array: " + arr.join(", "));

  if (index !== -1) {
    console.log(target + " found at index " + index);
  } else {
    console.log(target + " not found in the array.");
  }
}


