function isValidURL(url) {
  try {
    let obj = new URL(url);
    return obj.protocol === "http:" || obj.protocol === "https:";
  } catch (e) {
    return false;
  }
}
let url = prompt("Enter a URL:");
console.log(isValidURL(url) ? "Valid URL" : "Invalid URL");
