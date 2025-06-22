let startYear = parseInt(prompt("Enter the start year:"));
let endYear = parseInt(prompt("Enter the end year:"));

console.log("Leap years between " + startYear + " and " + endYear + " are:");

for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year);
  }
}
