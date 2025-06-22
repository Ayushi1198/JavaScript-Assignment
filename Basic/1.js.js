const today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = days[today.getDay()];
let hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
let ampm;
if(hours>=12){
    ampm="PM";
}
else{
    ampm="AM";
}
hours = hours % 12;
if(hours==0)
{
    hours=12;
}
console.log("Today is : " + day + ".");
console.log("Current time is : " + hours + " " + ampm + " : " + minutes + " : " + seconds);

