function bubbleSortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // Swap if the next number is greater
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let input = prompt("Enter numbers separated by commas:");
let array = input.split(",").map(Number);
let sortedArray = bubbleSortDescending(array);
console.log("Sorted array (descending):", sortedArray);
