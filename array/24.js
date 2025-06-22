function cleanArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val !== false && val !== 0 && val !== "" && val !== null && val !== undefined && !Number.isNaN(val)) {
      result.push(val);
    }
  }
  return result;
}
let input = prompt("Enter array values separated by commas (e.g., NaN, 0, 15, false, -22, '', undefined, 47, null):");
function parseArray(str) {
  return str.split(',').map(item => {
    item = item.trim();
    if (item === "false") return false;
    if (item === "null") return null;
    if (item === "undefined") return undefined;
    if (item === "NaN") return NaN;
    if (item === "''" || item === '""') return "";
    if (!isNaN(Number(item))) return Number(item);
    return item;
  });
}
let userArray = parseArray(input);
let cleaned = cleanArray(userArray);
console.log(cleaned);
