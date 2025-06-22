
let input = prompt("Enter elements separated by commas (e.g. 1,2,3,4):");
let arr = input.split(',').map(item => item.trim());
console.log("Original array:", arr);
arr.length = 0;
console.log(arr);
