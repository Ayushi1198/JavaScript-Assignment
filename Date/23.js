function english_ordinal_suffix(date) {
  const day = date.getDate();
  if (day > 3 && day < 21) return day + 'th'; 
  switch (day % 10) {
    case 1: return day + 'st';
    case 2: return day + 'nd';
    case 3: return day + 'rd';
    default: return day + 'th';
  }
}
let dt1 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
console.log(english_ordinal_suffix(dt1));  
