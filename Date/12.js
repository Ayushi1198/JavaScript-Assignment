let inputDates2 = prompt("Enter dates");

function min_date(dateArray) {
  let dates = dateArray.map(dateStr => new Date(dateStr.trim()));
  let min = new Date(Math.min(...dates));
  return min.toISOString().split('T')[0].replace(/-/g, '/');
}

let dateArray2 = inputDates2.split(',');
console.log("Minimum Date:", min_date(dateArray2));
