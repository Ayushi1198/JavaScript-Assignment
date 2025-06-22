
let input1 = prompt("Enter the first array (comma-separated):");
let input2 = prompt("Enter the second array (comma-separated):");
let array1 = input1.split(",").map(Number);
let array2 = input2.split(",").map(Number);
let maxLength = Math.max(array1.length, array2.length);
let result = [];
for (let i = 0; i < maxLength; i++) {
  let val1 = array1[i] || 0; 
  let val2 = array2[i] || 0;
  result.push(val1 + val2);
}
console.log("Sum of arrays by index: ", result);
