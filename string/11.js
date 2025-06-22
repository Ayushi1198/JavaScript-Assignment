function camelize(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^\w/, c => c.toUpperCase());
}
let input1 = prompt("Enter a string to camelize:");
console.log(camelize(input1));


