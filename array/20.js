
let input = prompt("Enter array values separated by commas:");
let arr = input.split(",").map(item => item.trim());
let counts = {};
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
  counts[item] = (counts[item] || 0) + 1;
  if (counts[item] === 2) {
    duplicates.push(item);
  }
}
if (duplicates.length > 0) {
  console.log("Duplicate values:", duplicates);
} else {
  console.log("No duplicate values found.");
}
