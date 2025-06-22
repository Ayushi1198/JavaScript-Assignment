function add_weeks(date, weeks) {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + weeks * 7);
  return newDate;
}
let dt4 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
let weeksToAdd = parseInt(prompt("How many weeks to add?"));
console.log(add_weeks(dt4, weeksToAdd).toString());
