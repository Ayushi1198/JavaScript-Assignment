function last(arr, n) {
  if (n === undefined) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-n);
  }
}
let input = prompt("Enter array elements (e.g. 7, 9, 0, -2):");
let arr = input.split(',').map(Number);
let n = prompt("How many last elements you want? Leave blank for just one:");
n = n === "" ? undefined : Number(n);
console.log(last(arr, n));
