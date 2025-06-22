
// Helper function to flatten an array manually
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i])); // recursive call
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
function findUniqueElements(arr1, arr2) {
  let flat1 = flattenArray(arr1);
  let flat2 = flattenArray(arr2);
  let combined = flat1.concat(flat2);
  let unique = combined.filter(item =>
    !(flat1.includes(item) && flat2.includes(item))
  );
  let result = [...new Set(unique)];
  return result;
}
console.log(findUniqueElements([1, 2, 3], [100, 2, 1, 10]));
console.log(findUniqueElements([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(findUniqueElements([1, 2, 3], [100, 2, 1, 10]));
