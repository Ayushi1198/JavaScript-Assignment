function quarter_of_the_year(date) {
  return Math.floor((date.getMonth() + 3) / 3);
}

let userDate = new Date(prompt("Enter date (YYYY-MM-DD):"));
console.log(quarter_of_the_year(userDate));
