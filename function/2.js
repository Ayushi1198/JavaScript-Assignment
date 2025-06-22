// function isPalindrome(str){
//    let str1 = str.split("").reverse().join("");
//    if(str==str1)
//    {
//     console.log(str+" it is a palindrome");

//    }
//    else{
//     console.log(str+" not a palindrome");
// }
// }

// let input=prompt("enter the user input:");
// isPalindrome(input);

function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
  let reversed = cleaned.split("").reverse().join("");
  if (cleaned === reversed) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
}
let input = prompt("Enter the input:");
isPalindrome(input);