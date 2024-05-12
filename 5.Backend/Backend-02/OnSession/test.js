let s = "cabaabac"

let L = 0
let R = s.length-1

while(L<R && s[L]===s[R] ){
    let char = s[L]
    while(L<=R && s[L]===char){
        L++
    }

    while(R>=L && s[R]===char){
        R--
    }
}

console.log(R-L+1);



