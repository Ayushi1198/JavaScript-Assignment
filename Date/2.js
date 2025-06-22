let separate = prompt("Enter a separator (e.g., / or -):");
function currentday(sep) {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; 
  let yyyy = today.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return mm + sep + dd + sep + yyyy;
}
console.log(currentday(separate));
