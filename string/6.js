function protect_email(email) {
  const [user, domain] = email.split("@");
  const hidden = user.slice(0, user.indexOf("_") !== -1 ? user.indexOf("_") : 4);
  return hidden + "...@" + domain;
}
let input2 = prompt("Enter email address:");
console.log(protect_email(input2)); 
