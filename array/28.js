function longestCommonStart(arr) {
  if (arr.length === 0) return "";
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
let input = prompt("Enter words:");
let inputArray = input.split(",").map(item => item.trim());
let result = longestCommonStart(inputArray);
alert("Longest common starting substring: " + result);
