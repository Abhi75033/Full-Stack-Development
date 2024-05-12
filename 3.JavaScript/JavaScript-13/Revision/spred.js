let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]

// let arr3 = arr1.concat(arr2)
let arr3 =[...arr1,...arr2]
console.log(arr3);
//Add or updte 

arr3=[...arr3,10,11]
console.log(arr3);

let obj1={
    id:1,
    name:'Abhishek'
    
}

let obj2={
    email:'abhishek@gmail.com',
    country:'India'
}

let obj3={...obj1,...obj2}
console.log(obj3);

obj3={...obj3,country:'France',city:'Mahadev'}
console.log(obj3);