function string_chop(str, size) {
  if (!size) return [str];
  let chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}
let input2 = prompt("Enter a string to chop:");
let size2 = prompt("Enter chunk size (press Enter for whole string):");

console.log(string_chop(input2, size2 ? parseInt(size2) : undefined));
