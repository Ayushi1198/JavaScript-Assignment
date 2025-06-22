function add_months(date, months) {
  let newDate = new Date(date);
  let d = newDate.getDate();
  newDate.setMonth(newDate.getMonth() + months);
  if (newDate.getDate() < d) {
    newDate.setDate(0);
  }
  return newDate;
}
let inputDate1 = new Date(prompt("Enter a date (YYYY-MM-DD):"));
let monthsToAdd = parseInt(prompt("How many months to add?"));
console.log(add_months(inputDate1, monthsToAdd).toString());
