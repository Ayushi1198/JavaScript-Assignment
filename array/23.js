// Function to flatten an array (one level deep)
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i])); // Recursively flatten
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// Function to find difference
function difference(arr1, arr2) {
  arr1 = flatten(arr1);
  arr2 = flatten(arr2);

  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i]) && !result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
}
let input1 = prompt("Enter first array (e.g., 1,2,3,4):");
let input2 = prompt("Enter second array (e.g., 1,[2],[3,[[4]]],[5,6]):");

function parseArray(str) {
  return str
    .replace(/\[|\]/g, '')  
    .split(',')             
    .map(Number)            
    .filter(n => !isNaN(n)) 
}
let arr1 = parseArray(input1);
let arr2 = parseArray(input2);
console.log("Difference between arrays:", difference(arr1, arr2));
