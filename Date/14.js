function days_of_a_year(year) {
  return (new Date(year, 1, 29).getMonth() === 1) ? 366 : 365;
}

let yearInput = parseInt(prompt("Enter a year:"));
console.log(days_of_a_year(yearInput));
