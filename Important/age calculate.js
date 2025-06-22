function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();
  let age1 = currentYear - birthYear;
  let age2 = age1 - 1;
  console.log(`You are either ${age2} or ${age1}`);
}


calculateAge(2000);
calculateAge(1998);
calculateAge(2010);
