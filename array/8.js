let input = prompt("Enter array elements separated by commas (e.g., 3,'a','a',2,3):");
let arr = input.split(",").map(item => item.trim().replace(/^['"]|['"]$/g, ''));
let frequency = {};
let maxItem = null;
let maxCount = 0;
for (let item of arr) {
  frequency[item] = (frequency[item] || 0) + 1;

  if (frequency[item] > maxCount) {
    maxItem = item;
    maxCount = frequency[item];
  }
}
console.log(maxItem + " (" + maxCount + " times)");
