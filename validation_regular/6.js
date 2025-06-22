function countWords(str) {
  if (!str || typeof str !== "string") return 0;
  str = str.trim();
  str = str.replace(/\s+/g, " ");
  if (str === "") return 0;
  return str.split(" ").length;
}
let input6 = prompt("Enter a sentence:");
console.log("Word Count:", countWords(input6));
