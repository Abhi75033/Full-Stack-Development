function print(...num){
   console.log(num.reduce((acc,value)=>acc+value))
return num;
   }



print(1,2,3)
print(10,20,30,40,40)

