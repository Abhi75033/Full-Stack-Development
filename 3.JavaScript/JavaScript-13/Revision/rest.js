// const Sum=(...num)=>{
//     let add = num.reduce((acc,val)=>{
//         return acc+val
//     })
//     return add
// }

// console.log(Sum(1,2,3,4,5,6,7));

let digits=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4]

//let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4];
let str = digits.join('');
let result = BigInt(str) + 1n;
let arr = String(result).split('').map(Number)
console.log(arr);




