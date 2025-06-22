for (let year = 2014; year <= 2050; year++) {
  let date = new Date(year, 0, 1); // January is month 0
  if (date.getDay() === 0) { // 0 means Sunday
    console.log("1st January is a Sunday in: " + year);
  }
}