function remove_first_occurrence(str, searchStr) {
  return str.replace(searchStr, '');
}
let mainStr = prompt("Enter the main string:");
let toRemove = prompt("Enter the substring to remove:");
console.log(remove_first_occurrence(mainStr, toRemove));

