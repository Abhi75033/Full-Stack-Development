// callback using arrow ()=> function
let num = [1,2,3,4,5,6,7,8,9,10]
let add = num.reduce((acc,val)=>acc+val);
let avg = ()=>Math.floor(add/num.length);
let squrae =  num.map((item)=>item*item)
if(add%2==0)
console.log('even number');
else if(add%2 !=0)
console.log(avg());
 if(avg%2==0)
console.log('Even');
else
console.log(squrae);

console.log(add);
