function sentenceCase(str) {
  return str.toLowerCase().replace(/(^\w|\.\s*\w)/g, c => c.toUpperCase());
}
let input4 = prompt("Enter a sentence with lowercase words:");
console.log(sentenceCase(input4));

