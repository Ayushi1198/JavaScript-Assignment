
let input = prompt("Enter array elements (e.g., 1,2,[3,4],5):");
let items = input.split(',');
let arr = [];
for (let item of items) {
  item = item.trim()
  if (item.startsWith("[") && item.endsWith("]")) {
    let inner = item.slice(1, -1).split(',').map(x => Number(x.trim()));
    arr.push(inner);
  } else {
    arr.push(Number(item));
  }
}
let flattened = [];
for (let element of arr) {
  if (Array.isArray(element)) {
    flattened.push(...element);
  } else {
    flattened.push(element);
  }
}
console.log("Flattened array (one level):", flattened);
