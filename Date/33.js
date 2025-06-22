function hours_with_zeroes(date) {
  let hour = date.getHours() % 12;
  if (hour === 0) hour = 12;
  return hour < 10 ? '0' + hour : '' + hour;
}
let dt1 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(hours_with_zeroes(dt1));
