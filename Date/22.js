function ISO_numeric_date(date) {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}
let dt3 = new Date(prompt("Enter date in format YYYY-MM-DD"));
console.log(ISO_numeric_date(dt3));
