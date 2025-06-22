function amountToCoins(amount, coins) {
  let result = [];

  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      result.push(coins[i]);
    }
  }
  return result;
}
let inputAmount = prompt("Enter the amount:");
let amount = parseInt(inputAmount);
let coinSet = [25, 10, 5, 2, 1];
  let coinsUsed = amountToCoins(amount, coinSet);
  console.log("Coins used: " + coinsUsed.join(", "));

