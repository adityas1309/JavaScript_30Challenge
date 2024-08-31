//arrow function to calc sum and return the result
let sum = () => {
    let a=13,b=89
    return a+b;
}
console.log(sum());

//arrow function to check string contains a specific char and return boolean val
let fin = ()  => {
    let st="Aditya" ,cha='b';
    for(let i=0;i<=st.length; i++){
        if(st[i]==cha){
            return true;
        }
    }
    return false;
}
console.log(fin());
