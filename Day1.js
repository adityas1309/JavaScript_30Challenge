//TASK-1 >> Declare a variable using var
var v=10;
console.log(v);

//TASK-2 >> Declare a variable using let
let l="ADITYA";
console.log(l);

//TASK-3 >> Declare a variable using const
const c=false;
console.log(c);

//TASK-4 >> Different Data Types
let num=10;
let str="test-string";
let bool=true;
const arr = [13,9,2005];
let obj = {
    nam:"Priyanshu",
    age: 18
};
console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(arr));
console.log(typeof(obj));

//TASK-5 >> Reassign a variable using let
let te=2409;
console.log(te);
te=2022;
console.log(te);

//TASK-6 >> Try to reassign a variable using const
const ce=523;
console.log("initial val: " + ce);
//ce=2022; this will throw error of {TypeError: Assignment to constant variable.}

//Variable Types Console log
let vt1=100,vt2=false,vt3="kool";
console.log(typeof(vt1) + " type is " + vt1);
console.log(typeof(vt2) + " type is " + vt2);
console.log(typeof(vt3) + " type is " + vt3);

//Reassignment Demo
let ot=2409;
console.log("initial val: " + ot);
ot=2022;
console.log("reassigned val: " + ot);

const op=2409;
console.log("initial val: " + op);
//op=2022;  this will throw error of {TypeError: Assignment to constant variable.}
console.log("reassigned val: " + op);
