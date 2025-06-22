let input = prompt("Enter values separated by commas:");
let arr = input.split(",").map(item => Number(item));
let filtered = arr.filter(function (item) {
  return item;
});

alert( filtered);
