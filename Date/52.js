function month_start_date(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).toDateString();
}
let input3 = new Date(prompt("Enter a date (YYYY-MM-DD):"));
console.log( month_start_date(input3));
