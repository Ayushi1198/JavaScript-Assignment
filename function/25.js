function Longest_Country_Name(countries) {
  let longest = "";

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longest.length) {
      longest = countries[i];
    }
}
  return longest;
}
let input = prompt("Enter country names separated by commas:");
let countryList = input.split(",").map(name => name.trim());
let longestCountry = Longest_Country_Name(countryList);
console.log("The longest country name is:", longestCountry);
