function removeDuplicatesIgnoreCase(arr) {
  let lowerCaseSet = new Set();
  let result = [];

  for (let item of arr) {
    let lower = item.toLowerCase();
    if (!lowerCaseSet.has(lower)) {
      lowerCaseSet.add(lower);
      result.push(item);
    }
  }

  return result;
}

// Get input from the user
let input = prompt("Enter array items separated by commas:");
let inputArray = input.split(",").map(item => item.trim());

let uniqueArray = removeDuplicatesIgnoreCase(inputArray);

console.log("Original Array:", inputArray);
console.log("Without Duplicates (ignoring case):", uniqueArray);
