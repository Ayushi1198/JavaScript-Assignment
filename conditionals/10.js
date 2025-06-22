let n=prompt("enter the value of n:");
n=parseInt(n);
let i=1;
while(i<=n){
    let j=1;
    let row=""
    while(j<=i){
        row=row+"*";
        j++;
    }
    console.log(row);
    
    i++;
}