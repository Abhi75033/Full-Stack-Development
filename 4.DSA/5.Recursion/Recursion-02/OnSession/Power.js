// let ans =1
// let x=3
// for(let i=1; i<5; i++){
//     ans = ans*x
// }

// console.log(ans);

function pow(x,n){
    //Base case
    if(n==0)
    return 1
//Recurence relation
return x*pow(x,n-1)
}
let x=5;
let n=2;
console.log(pow(x,n));