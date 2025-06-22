
let rows = prompt("Enter number of rows:");
let a = [];
for (let i = 0; i < rows; i++) {
  let rowInput = prompt("Enter numbers for row " + i + " (separated by commas):");
  let row = rowInput.split(",").map(Number);
  a.push(row);
}
for (let i = 0; i < a.length; i++) {
  console.log("row " + i);
  for (let j = 0; j < a[i].length; j++) {
    console.log(" " + a[i][j]);
  }
}
