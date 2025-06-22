function containsDate(str) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const words = str.split(/\s+/);
  for (let word of words) {
    if (word.includes('/') || word.includes('-')) {
      let parts = word.includes('/') ? word.split('/') : word.split('-');
      if (parts.length === 3) {
        let [day, month, year] = parts.map(Number);
        if (
          day >= 1 && day <= 31 &&
          month >= 1 && month <= 12 &&
          year >= 1000 && year <= 9999
        ) {
          return "Date found: " + word;
        }
      }
    }
    else if (!isNaN(parseInt(word)) && months.includes(words[1]) && !isNaN(parseInt(words[2]))) {
      return "Date found: " + words.slice(0, 3).join(' ');
    }
  }
  return "No date found in string.";
}
let input = prompt("Enter a string that might contain a date:");
console.log(containsDate(input));
