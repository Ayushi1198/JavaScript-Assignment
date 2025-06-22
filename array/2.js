
let input = prompt("Enter array elements:");
let originalArray = input.split(",").map(item => {
  let trimmed = item.trim();
  return isNaN(trimmed) ? trimmed : Number(trimmed); 
});
function array_Clone(arr) {
  return arr.slice();  
}
let clonedArray = array_Clone(originalArray);
console.log("Original Array:", originalArray);
console.log("Cloned Array:", clonedArray);
