function week_end_date(date) {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() + (6 - day));
  return d.toDateString();
}
let input2 = new Date(prompt("Enter a date (YYYY-MM-DD):"));
console.log( week_end_date(input2));
