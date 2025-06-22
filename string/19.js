function escape_HTML(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}
let htmlInput = prompt("Enter an HTML string to escape:");
console.log(escape_HTML(htmlInput));
