function findSecondMinMax(arr) {
  let numbers = [...new Set(arr.map(Number))];
  numbers.sort((a, b) => a - b);
  if (numbers.length < 2) {
    console.log("Not enough unique numbers to find second min and max.");
  } else {
    let secondLowest = numbers[1];
    let secondGreatest = numbers[numbers.length - 2];
    console.log("Second Lowest:", secondLowest);
    console.log("Second Greatest:", secondGreatest);
  }
}
let input = prompt("Enter numbers separated by commas (e.g., 1,2,3,4,5):");
let inputArray = input.split(",").map(item => item.trim());
findSecondMinMax(inputArray);
