let str = prompt("Enter a string to rotate:");
const originalStr = str;

let count = 0;

const intervalId = setInterval(() => {
  str = str.charAt(str.length - 1) + str.slice(0, str.length - 1);

  console.log(str);
  count++;

  if (str === originalStr || count > str.length) {
    clearInterval(intervalId);
  }
}, 500);