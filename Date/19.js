function day_of_the_month(date) {
  const day = date.getDate();
  return day < 10 ? '0' + day : '' + day;
}
let d = new Date(prompt("Enter date in format YYYY-MM-DD"));
console.log(day_of_the_month(d));
