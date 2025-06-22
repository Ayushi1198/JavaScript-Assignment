function move(arr, fromIndex, toIndex) {
  if (fromIndex < 0) {
    fromIndex = arr.length + fromIndex;
  }
  if (toIndex < 0) {
    toIndex = arr.length + toIndex;
  }
  const element = arr.splice(fromIndex, 1)[0];
  arr.splice(toIndex, 0, element);

  return arr;
}
let input = prompt("Enter array elements");
let from = parseInt(prompt("From which index to move"));
let to = parseInt(prompt("To which index"));
let arr = input.split(',').map(Number);
let result = move(arr, from, to);
alert("Modified Array: " + result);
