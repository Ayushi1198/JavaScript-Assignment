function containsElement(arr, element) {
  return arr.includes(element);
}
let inputArray = prompt("Enter array elements:");
let value = prompt("Enter the value to search:");
let arr = inputArray.split(',').map(Number);
let searchValue = Number(value);
if (containsElement(arr, searchValue)) {
  alert("Yes, the element exists in the array.");
} else {
  alert("No, the element is not in the array.");
}
