let array = [1,2,3,4,5,6,7,8,9,10]

const newArray= array.map((value,Index)=>{
    return Index + value*3
})

console.log(newArray);

array.forEach((value,Index)=>{
    console.log(`Index: ${Index}: value: ${value}`)
})

const filterArray= array.filter((value)=>{
 return value%2==0
})
console.log(`--------------------------------------------------------------------------`);
console.log(`Filterd:- ${filterArray}`);