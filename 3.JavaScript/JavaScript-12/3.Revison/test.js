// //Problem Logent common prefix

// let longestCommmonPrefix = (strs) => {

//   let longestCommmonPrefix =''
//   for (let i = 0; i < strs[0].length; i++) {
//     let ch = strs[0][i]
//     // if ch or char is falsy or null or undefined so it will return the empty string
//     if(!ch)
//     return ''

//     if(strs.every(str=> str[i]===ch)){
// longestCommmonPrefix+=ch

//     }else{
//     break
//   }
//   return longestCommmonPrefix
// };
// }
// let strs =["cir","car"];
// console.log(longestCommmonPrefix(strs));

// ADD TWO NUMBERS

// let l1 = [9,9,9,9,9,9,9]
// let l2 = [9,9,9,9]

// let sum = 0
// for (let i = 0; i < l1.length; i++) {
//   for (let i = 0; i < l2.length; i++) {
//     const tset = l1[i]+l2[i]
//     sum+=tset
//     console.log(sum);
//   }

// }

let str = "Hello World";

let array = str.split(' ')
let n =array.length;
let i=1;
while(array[n-i].length == 0){
  i++
}

console.log(array[n-i].length)