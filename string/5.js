function abbrev_name(name) {
  const parts = name.trim().split(" ");
  return parts.length > 1 ? parts[0] + " " + parts[1][0] + "." : parts[0];
}

// Example:
let input1 = prompt("Enter full name:");
console.log(abbrev_name(input1)); // e.g., "Robin S."
