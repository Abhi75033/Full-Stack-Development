let sen = 'Abhishek'

let arr = sen.split('')

let revrse = arr.reverse()

console.log(revrse.join('').toLowerCase());
console.log('This is Reversed using methods like split reverse and join');

//This reversed strings is used 
let rev = ""
let n = sen.length;
for(let i = n-1; i>=0; i--){
rev += sen.charAt(i)
}

console.log(rev.toLowerCase());

console.log('This is happeing with our logic');
