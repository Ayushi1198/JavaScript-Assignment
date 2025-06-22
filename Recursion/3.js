function range(x, y) {
  if (x + 1 >= y) {
    return [];
  } else {
    return [x + 1].concat(range(x + 1, y));
  }
}
let start = parseInt(prompt("Enter the starting number (x):"));
let end = parseInt(prompt("Enter the ending number (y):"));
if (isNaN(start) || isNaN(end) || start >= end) {
  console.log("Please enter two valid numbers where x < y.");
} else {
  let result = range(start, end);
  console.log("Integers in the range (" + start + ", " + end + ") are: " + result.join(", "));
}
