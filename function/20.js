function generateId(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
}

let userLength = parseInt(prompt("Enter the length of the ID to generate:"));

if (isNaN(userLength) || userLength <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  let randomId = generateId(userLength);
  console.log("Generated ID:", randomId);
}
