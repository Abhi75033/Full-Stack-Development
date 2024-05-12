function sumOf(num){
if(num==0)
return 0;


return num%10+sumOf(Math.floor(num/10))
}

const num = 50000000
console.log(sumOf(num));

