function first(arr, n) {
  if (arr.length === 0 || n < 0) return []
  if (n === undefined) {
    return arr[0];
  }
  return arr.slice(0, n);
}
let arrayInput = prompt("Enter array elements separated by commas (e.g. 7, 9, 0, -2):");
let array = arrayInput.split(',').map(item => {
  let trimmed = item.trim();
  return isNaN(trimmed) ? trimmed : Number(trimmed);
});
let nInput = prompt("Enter how many first elements you want (leave blank to get only the first element):");
let n = nInput === "" ? undefined : parseInt(nInput);
let result = first(array, n);
console.log("Result:", result);
