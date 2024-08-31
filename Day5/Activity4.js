//function takes 2 param and returns prod 2nd has default val
function pro(x,y=3){
    return x*y;
}
console.log(pro(10)); //when 2nd val is not passed
console.log(pro(10,6)); //when 2nd val is passed

//Function takes persons name and age and return a greeting msg with age a default val
function gr(name,age=19){
    st= (`Hello ${name} with ${age} years old`);
    return st;
}
console.log(gr("Bharat",80)); //when 2nd val is passed
console.log(gr("Aditya")); //when 2nd val is not passed
