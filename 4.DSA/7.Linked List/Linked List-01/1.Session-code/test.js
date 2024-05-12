let arr = [1,2,3,7,5]
let n = arr.length;
let s = 12
i=0
t=arr[i]
j=i+1
while(t!=s)
    if (i==n){
         return -1
         break}
    if (t>s)
         i+=1
         t=arr[i]
         j=i+1
    t+=arr[j]
    j+=1
console.log( [i+1,j])




