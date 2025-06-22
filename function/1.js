function reverse(num){
    let rev=0;
    let rem;
    while(num>0){
        rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10)

    }
    return rev;

}
let input=prompt("Enter the number:");
let num=parseInt(input);
console.log(reverse(num));