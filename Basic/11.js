var temp=prompt("Enter temprature: ");
var choice= prompt("Enter the choice: (celcius to fahernheit:1 , fahernheit to celcius:2)");
choice=parseInt(choice);
if(choice==1){
    var fah=(9/5) * temp + 32;
    console.log(temp+"*C is "+fah+"*C");
}
else if(choice==2){
    var cel=(5/9) * (temp - 32);
    console.log(temp+"*F is "+cel+"*C");
}
else{
    console.log("invalid choice try again")
}
