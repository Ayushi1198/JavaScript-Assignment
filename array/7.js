let input = prompt("Enter numbers separated by commas:");  
let arr = input.split(",").map(Number);

arr.sort(function(a, b) {
  return a - b; 
});

console.log("Sorted array:", arr);
