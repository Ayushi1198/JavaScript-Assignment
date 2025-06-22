function remove_array_element(arr, valueToRemove) {
  return arr.filter(function(item) {
    return item !== valueToRemove;
  });
}
let inputArray = prompt("Enter array elements separated by commas (e.g. 2,5,9,6):");
let value = prompt("Enter the value to remove:");
let arr = inputArray.split(',').map(Number);
let valueToRemove = Number(value);
let result = remove_array_element(arr, valueToRemove);
alert("Resulting array: " + result.join(", "));
