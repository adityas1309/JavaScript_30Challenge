//Print from 1-5 using do-while
let i=1;
do{
    console.log(i);
    i++
}while(i<=5);

//print factorial of a num using do-while
let fac=1,num=6,j=1;
do{
    fac*=j;
    j++;
}while(j<=num);
console.log(`The factorial of ${num} is ${fac}`);
