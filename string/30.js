function string_endsWith(str, suffix) {
  if (!suffix) return false;
  return str.endsWith(suffix);
}
let mainStr = prompt("Enter the main string:");
let suffixStr = prompt("Enter the suffix to check:");
console.log(string_endsWith(mainStr, suffixStr));
