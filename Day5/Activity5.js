//Higher ordr func takes a func and num and call the function that many times
function outp(func,num){
    for(let i=1;i<=num;i++){
        func(i);
    }
}
function times(t){
    console.log("This function is called ",t," times");
}
outp(times,3);

//Higher ordr func take 2 func and val and applies 1st func to val and its result to 2nd func
function appl(func1,func2,val){
    let sec=func1(val);
    console.log(`answer of 1st function ${sec}`);
    func2(sec);
}
function squ(n){
    return n*n;
}
function sqrt(n1){
    console.log(`answer of 2nd function ${n1**0.5}`);
}
appl(squ,sqrt,9)
