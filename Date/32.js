function internet_time(date) {
  let utc = date.getUTCHours() * 3600 + date.getUTCMinutes() * 60 + date.getUTCSeconds();
  let bmtSeconds = (utc + 3600) % 86400;
  let beats = Math.floor(bmtSeconds / 86.4);
  return beats.toString().padStart(3, '0');
}
let dt4 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(internet_time(dt4));
