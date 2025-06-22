function array_range(start, length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(start + i);
  }
  return result;
}
let start = parseInt(prompt("Enter the starting number:"));
let length = parseInt(prompt("Enter the length of the array:"));
let result = array_range(start, length);
alert("Generated array: " + result);
