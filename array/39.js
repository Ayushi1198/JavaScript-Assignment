function filterArrayValues(arr) {
  return arr.filter(function(item) {
    return item !== false && item !== null && item !== 0 && item !== "";
  });
}
let input = prompt("Enter array elements:");
let arr = input.split(',').map(function(item) {
  if (item.trim() === "false") return false;
  if (item.trim() === "true") return true;
  if (item.trim() === "null") return null;
  if (item.trim() === "") return "";
  if (!isNaN(item)) return Number(item);
  return item.trim();
});
let result = filterArrayValues(arr);
alert( result);
