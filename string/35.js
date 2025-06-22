function strip_html_tags(str) {
  return str.replace(/<[^>]*>/g, '');
}
let input5 = prompt("Enter a string with HTML/XML tags:");
console.log(strip_html_tags(input5));
