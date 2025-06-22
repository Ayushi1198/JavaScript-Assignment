function count(mainStr, subStr, caseSensitive = true) {
  if (!caseSensitive) {
    mainStr = mainStr.toLowerCase();
    subStr = subStr.toLowerCase();
  }
  return mainStr.split(subStr).length - 1;
}
let mainInput = prompt("Enter main string:");
let subInput = prompt("Enter substring to count:");
let caseOption = prompt("Case sensitive? (yes/no):").toLowerCase() === 'yes';

console.log(count(mainInput, subInput, caseOption));
