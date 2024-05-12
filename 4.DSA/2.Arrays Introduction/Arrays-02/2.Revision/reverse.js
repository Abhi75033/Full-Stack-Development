let arr = [55,24,42,65,93];
let n= arr.length;
let s = 0;
let e = n-1;

while(s<e){
    let tmep = arr[s];
    arr[s]=arr[e]
    arr[e]=tmep;

    s++;
    e--
}

console.log(arr)
