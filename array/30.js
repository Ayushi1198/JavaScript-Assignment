function merge_array(arr1, arr2) {
  let merged = arr1.concat(arr2);        
  let unique = [...new Set(merged)];    
  return unique;
}
let input1 = prompt("Enter elements of first array :");
let input2 = prompt("Enter elements of second array:");
let array1 = input1.split(',').map(Number);
let array2 = input2.split(',').map(Number);
let result = merge_array(array1, array2);
alert(result.join(", "));
