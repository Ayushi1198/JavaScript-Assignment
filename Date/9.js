let year = parseInt(prompt("Enter year:"));
let month = parseInt(prompt("Enter month (0 for Jan, 11 for Dec):"));
function lastday(year, month) {
  return new Date(year, month + 1, 0).getDate(); 
}
console.log(lastday(year, month));
