function minutes_with_leading_zeros(date) {
  let min = date.getMinutes();
  return min < 10 ? '0' + min : '' + min;
}
let dt3 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(minutes_with_leading_zeros(dt3));
