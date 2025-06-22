function isHTML(str) {
  if (typeof str !== 'string') return false;
  return str.includes('<') && str.includes('>') && str.indexOf('<') < str.indexOf('>');
}
let htmlString = prompt("Enter a string to check for HTML:");
console.log(isHTML(htmlString) ? "Contains HTML" : "Does not contain HTML");
