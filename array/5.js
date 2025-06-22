
let input = prompt("Enter colors separated by commas (e.g. Red,Green,White,Black):");
let myColor = input.split(",");
let joinedComma = myColor.join(",");
let joinedSpace = myColor.join(" ");
let joinedPlus = myColor.join("+");
console.log(joinedComma);  
console.log(joinedSpace);  
console.log(joinedPlus);   
