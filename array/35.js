function getRandomItem(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
let input = prompt("Enter array:");
let items = input.split(',').map(item => item.trim());
let randomItem = getRandomItem(items);
alert("Random item: " + randomItem);
