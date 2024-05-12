const str = 'pppppps'

let n = str.length

for(let i =0; i<n; i++){
    let ch = str[i]
    if(str.indexOf(ch)==str.lastIndexOf(ch)){
        console.log(ch);
    }
}