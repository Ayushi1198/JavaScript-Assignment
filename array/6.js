

let input = prompt("Enter a number:");  
let result = "";

for (let i = 0; i < input.length; i++) {
  result += input[i];
  let current = parseInt(input[i]);
  let next = parseInt(input[i + 1]);

  if (!isNaN(current) && !isNaN(next)) {
    if (current % 2 === 0 && next % 2 === 0) {
      result += "-";
    }
  }
}
console.log("Output:", result);
