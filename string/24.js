function truncate(str, no_words) {
  return str.split(" ").slice(0, no_words).join(" ");
}
let input3 = prompt("Enter a full sentence:");
let wordCount = prompt("How many words to keep?");
console.log(truncate(input3, parseInt(wordCount)));
