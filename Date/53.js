function month_end_date(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).toDateString();
}
let input4 = new Date(prompt("Enter a date (YYYY-MM-DD):"));
console.log( month_end_date(input4));
