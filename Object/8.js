function startClock() {
  setInterval(() => {
    let now = new Date();
    let time = now.toLocaleTimeString();
    console.log(time);
  }, 1000);
}

startClock();
