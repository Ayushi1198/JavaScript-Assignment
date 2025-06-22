function diff_years(date1, date2) {
  let years = date2.getFullYear() - date1.getFullYear();
  if (
    date2.getMonth() < date1.getMonth() ||
    (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())
  ) {
    years--;
  }
  return Math.abs(years);
}
let dt3 = new Date(prompt("Enter first date (YYYY-MM-DD):"));
let dt4 = new Date(prompt("Enter second date (YYYY-MM-DD):"));
console.log(diff_years(dt3, dt4));
