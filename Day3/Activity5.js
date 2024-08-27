//Check if a year is leap year using mutiple conditions
let yr=2004;
if((yr%4==0) || (yr%100!=0) && (yr%400==0)){
    console.log("It is a leap year");
}
else{
    console.log("It is not a leap year");
}
