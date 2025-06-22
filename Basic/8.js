let random = Math.floor(Math.random() * 10) + 1;
let userInput = parseInt(prompt("Guess a number between 1 and 10:"));
if (userInput === random) {
  alert("Good Work!");
} else {
  alert("Not matched. The number was: " + random);
}