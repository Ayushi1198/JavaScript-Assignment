let inputDate = prompt("Enter a date:");
let minutesToAdd = parseInt(prompt("Enter number of minutes:"));

let date = new Date(inputDate);
function add_minutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}
let newDate = add_minutes(date, minutesToAdd);
console.log( newDate.toString());
