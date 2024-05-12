let str = 'racecar';
let n = str.length
let s =0;
let e = n-1;

while(s<e){
    if(str[s]!= str[e]){
        console.log(`It's not a palinddrome`)
        return
    }
    s++;
    e--;
}

console.log("It's a Palindrome");