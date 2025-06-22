function factor(num){
    let fac=[];
    for(i=0;i<=num;i++){
        if(num%i===0){
            fac.push(i);
        }
    }
console.log(fac.join(","));
}
let input=prompt("enter the number");
let number = parseInt(input);
factor(number);