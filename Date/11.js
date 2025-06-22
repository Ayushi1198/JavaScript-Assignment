let inputDates = prompt("Enter dates");

function max_date(dateArray) {
  let dates = dateArray.map(dateStr => new Date(dateStr.trim()));
  let max = new Date(Math.max(...dates));
  return max.toISOString().split('T')[0].replace(/-/g, '/');
}

let dateArray = inputDates.split(',');
console.log("Maximum Date:", max_date(dateArray));
