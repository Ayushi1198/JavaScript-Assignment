function num_string_range(start, end, step) {
  let result = [];
  step = parseInt(step);

  if (!isNaN(start) && !isNaN(end)) {
    start = Number(start);
    end = Number(end);
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    let startCode = start.charCodeAt(0);
    let endCode = end.charCodeAt(0);

    for (let i = startCode; i <= endCode; i += step) {
      result.push(String.fromCharCode(i));
    }
  }
  return result;
}
let start = prompt("Enter start (number or character):");
let end = prompt("Enter end (number or character):");
let step = prompt("Enter step (e.g., 1 or 2):");
let output = num_string_range(start, end, step);
alert("Result: " + output.join(", "));
