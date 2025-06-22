function diff_months(date1, date2) {
  let year1 = date1.getFullYear();
  let year2 = date2.getFullYear();
  let month1 = date1.getMonth();
  let month2 = date2.getMonth();

  let totalMonths = (year2 - year1) * 12 + (month2 - month1);
  if (date2.getDate() < date1.getDate()) {
    totalMonths -= 1;
  }
  return Math.abs(totalMonths);
}
let dt1 = new Date(prompt("Enter first date (YYYY-MM-DD):"));
let dt2 = new Date(prompt("Enter second date (YYYY-MM-DD):"));
console.log(diff_months(dt1, dt2)); 
