//function expression to find max and log the result in console
let max = function () {
    let a=45,b=70.6;
    if(a>=b){
        console.log(a);
    }
    else{
        console.log(b);
    }
}
max();

//function expression to concatenate 2 strings and return the result
let conc = function(){
    let x= "1st string ", y="2nd string";
    return x+y;
}
console.log(conc());
