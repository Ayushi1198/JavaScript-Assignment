function escape_html(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}
let input1 = prompt("Enter a string with special HTML characters:");
console.log(escape_html(input1));

