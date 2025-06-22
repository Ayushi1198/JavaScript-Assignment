let input = prompt("Enter a string:");
let swapped = "";

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  
  if (char === char.toUpperCase()) {
    swapped += char.toLowerCase();
  } else {
    swapped += char.toUpperCase();
  }
}

console.log("Swapped case: " + swapped);
