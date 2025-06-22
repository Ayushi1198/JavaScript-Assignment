let input1 = prompt("Enter first array (e.g., 1,2,3):");
let input2 = prompt("Enter second array (e.g., 100,2,1,10):");

let arr1 = input1.split(',').map(Number);
let arr2 = input2.split(',').map(Number);

let union = [];
for (let i = 0; i < arr1.length; i++) {
  if (!union.includes(arr1[i])) {
    union.push(arr1[i]);
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (!union.includes(arr2[i])) {
    union.push(arr2[i]);
  }
}

console.log("Union of arrays:", union);
