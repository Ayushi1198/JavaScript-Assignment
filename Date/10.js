let userDate = prompt("Enter a date:");
function yesterday(dateStr) {
  let date = new Date(dateStr);
  date.setDate(date.getDate() - 1);
  return date.toString();
}
console.log( yesterday(userDate));
