function text_truncate(str, length = str.length, ending = "…") {
  return str.length > length ? str.slice(0, length - ending.length) + ending : str;
}
let input1 = prompt("Enter a string:");
let len1 = prompt("Enter max length (press Enter to use full length):");
let end1 = prompt("Enter ending characters (default is …):");

console.log(text_truncate(input1, len1 ? parseInt(len1) : undefined, end1 || "…"));
