
let input = prompt("Enter array elements separated by commas:");
let array = input.split(",").map(item => item.trim());
for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]]; 
}
console.log("Shuffled array:", array);
