function days_passed(date) {
  let start = new Date(date.getFullYear(), 0, 1);
  let diff = date - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

let dateInput = new Date(prompt("Enter date (YYYY-MM-DD):"));
console.log(days_passed(dateInput));
