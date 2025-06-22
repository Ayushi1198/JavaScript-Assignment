function week_start_date(date) {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  return d.toDateString();
}
let input1 = new Date(prompt("Enter a date (YYYY-MM-DD):"));
console.log( week_start_date(input1));
