function getSubsets(arr, subsetLength) {
  let result = [];
  function helper(start, current) {
    if (current.length === subsetLength) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      helper(i + 1, current); 
      current.pop();           
    }
  }
  helper(0, []);
  return result;
}
let input = prompt("Enter array elements separated by commas (e.g., 1,2,3):");
let arr = input.split(",").map(Number);
let len = parseInt(prompt("Enter the subset length (e.g., 2):"));
if (len > arr.length || len <= 0) {
  console.log("Invalid subset length.");
} else {
  let subsets = getSubsets(arr, len);
  console.log("All subsets of length", len, "are:", subsets);
}
