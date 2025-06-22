function search_word(str, word) {
  let pattern = new RegExp(`\\b${word}\\b`, 'gi'); 
  let matches = str.match(pattern);
  let count = matches ? matches.length : 0;
  return `'${word}' was found ${count} ${count === 1 ? 'time' : 'times'}.`;
}
let sentence = prompt("Enter the sentence:");
let wordToFind = prompt("Enter the word to search:");
console.log(search_word(sentence, wordToFind));
