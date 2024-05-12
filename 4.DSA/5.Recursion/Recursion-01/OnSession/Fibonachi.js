function fibo(n){
    //Base case of fibonachi 
    if(n==1 || n==0)
    return n;

    // Recursive relation or Recursive call

return fibo(n-1)+fibo(n-2)

}


let n= 100;
console.log(fibo(n));