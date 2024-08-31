let arr= [2,5,10,15];
console.log("Original array:", arr);
function du(n){
    return n*2;
}
function chec(n1){
        return (n1%2==0);
}
function su(n1,n2){
    return n1+n2;
}
//use map to create a new array where each element is doubled
let arr1 = arr.map(du);
console.log("Doubled array:", arr1);

//use filter to create a new array with only even arrays
let arr2 = arr.filter(chec);
console.log("Even array:", arr2);

//use reduce to calculate the sum of all numbers in the array
let sume= arr.reduce(su);
console.log(sume);
