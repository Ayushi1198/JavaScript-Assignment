function identityMatrix(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }
    console.log(row.trim());
  }
}
let input = prompt("Enter the size of the identity matrix (n):");
let n = parseInt(input);
  identityMatrix(n);