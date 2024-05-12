LineareSerch=()=>{
    let n = num.length;
    for(let i=0; i<n; i++){
        if(num[i]==target){
            return i;
        }
    }
return -1;
}


let num =[2,3,4,6,4,5];
let target= 3;
let liner = LineareSerch();
console.log(liner);