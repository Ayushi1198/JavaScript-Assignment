function lowercase_meridiem(date) {
  const hours = date.getHours();
  return hours >= 12 ? 'pm' : 'am';
}
let dt2 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM)"));
console.log(lowercase_meridiem(dt2));
