function array_filled(length, value) {
  return Array(length).fill(value);
}

// Get user input
let len = parseInt(prompt("Enter element:"));
let val = prompt("Enter value of array:");

// Create the array
let result = array_filled(len, val);

// Show the result
alert( result);
