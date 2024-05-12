let array = [10,20,30,40,50]

const found = array.find((value)=>{
    return value==10
})
const found1 = array.find((value)=>{
    return value==0
})

console.log(found);
console.log(found1);