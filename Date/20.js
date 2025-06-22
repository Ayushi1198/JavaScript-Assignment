function short_Days(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
}
let dt1 = new Date(prompt("Enter date in format YYYY-MM-DD"));
console.log(short_Days(dt1));
