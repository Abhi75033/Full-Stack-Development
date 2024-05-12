let arr=[10,40,20,50];
let n = arr.length;
let max = arr[0]
let min = arr[0]



// This is for only finding max and min
for(let i=0; i<n; i++){
  if(max<arr[i]){
    max=arr[i]
  }
}
for(let i=0; i<n; i++){
  if(min>arr[i]){
    min=arr[i]
  }
}
console.log(min);

console.log(max)