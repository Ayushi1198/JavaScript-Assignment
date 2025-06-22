function week_no(date) {
  const target = new Date(date.valueOf());
  const dayNr = (date.getDay() + 6) % 7; 
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = new Date(target.getFullYear(), 0, 4);
  const diff = (target - firstThursday) / (7 * 24 * 60 * 60 * 1000);
  return 1 + Math.floor(diff);
}
let dt2 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
console.log(week_no(dt2));  
