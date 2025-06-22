function case_insensitive_search(str, searchTerm) {
  return str.toLowerCase().includes(searchTerm.toLowerCase()) ? "Matched" : "Not Matched";
}
let mainStr = prompt("Enter main string:");
let searchStr = prompt("Enter word to search:");
console.log(case_insensitive_search(mainStr, searchStr));
