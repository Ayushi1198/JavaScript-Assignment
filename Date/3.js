let month = parseInt(prompt("Enter the month:"));
let year = parseInt(prompt("Enter the year:"));
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(month, year));
