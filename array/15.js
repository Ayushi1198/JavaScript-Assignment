
function getOrdinal(n) {
  let suffix = ["th", "st", "nd", "rd"];
  let v = n % 100;
  return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}

let input = prompt("Enter colors separated by commas:");
let colors = input.split(",").map(c => c.trim());

for (let i = 0; i < colors.length; i++) {
  let order = getOrdinal(i + 1);
  console.log(order + " choice is " + colors[i] + ".");
}
