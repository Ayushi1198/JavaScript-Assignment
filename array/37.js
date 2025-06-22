function array_filled(length, value) {
  return Array(length).fill(value);
}
let len = parseInt(prompt("Enter how many elements you want:"));
let val = prompt("Enter the string value to fill in the array:");
let result = array_filled(len, val);
alert("Filled Array: " + result);
