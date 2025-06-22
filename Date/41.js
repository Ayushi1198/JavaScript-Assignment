function add_years(date, years) {
  let newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}
let dt3 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
let yearsToAdd = parseInt(prompt("How many years to add?"));
console.log(add_years(dt3, yearsToAdd).toString());
