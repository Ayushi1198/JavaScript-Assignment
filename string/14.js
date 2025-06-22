function insert(mainStr, insertStr = '', position = 1) {
  return mainStr.slice(0, position) + insertStr + mainStr.slice(position);
}
let main = prompt("Enter the main string:");
let insertText = prompt("Enter the string to insert (leave empty for none):");
let pos = prompt("Enter position to insert at (default is 1):");
console.log(insert(main, insertText, pos ? parseInt(pos) : 1));
