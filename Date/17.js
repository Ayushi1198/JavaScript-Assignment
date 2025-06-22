function convertUnixTimestampToTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return hours + ":" + minutes + ":" + seconds;
}
let inputTimestamp = parseInt(prompt("Enter Unix timestamp (in seconds):"));
console.log(convertUnixTimestampToTime(inputTimestamp));
