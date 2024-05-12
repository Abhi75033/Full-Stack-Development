let arr = [];
arr.push(10)
console.log(arr);
arr.push(20)
console.log(arr);
//push method push or add the elements from last index

arr.unshift(50)
console.log(arr);

console.log(arr.pop())
console.log(arr);
//pop method remove the elements from the last index
arr.push(60,70,80)
console.log(arr);
console.log(arr.shift());
console.log(arr);
//Shift method remove the elements from the first index

//splice method when we want to remove the element or insert the elemet or repalce the 
// elemet in between so the splice method is used


// inserted the 40,90,100 inbetwwen 
arr.splice(2,0,40,90,100)
console.log(arr);

//replaced the 200 from 60,40

arr.splice(1,2,200)
console.log(arr);

//now delete the element 

arr.splice(1,3,0)
console.log(arr);
console.log(arr.length)