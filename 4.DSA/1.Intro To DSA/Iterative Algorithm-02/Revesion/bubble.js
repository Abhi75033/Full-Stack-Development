bubblesort=()=>{
    let n= num.length;
    for(let i=1; i<=n-1; i++){
        for(let j=1; j<=n-i; j++){
            if(num[j]<num[j-1]){
                let temp = num[j];
                num[j]=num[j-1]
                num[j-1] = temp
            }
        }
    }
    return num;
}

// binary search
binarysearch=()=>{
    let n= bubble.length;
    let s = 0;
    let e = n-1;
    while(s<=e){
        let m = Math.floor((s+e)/2)
  
        if(target==bubble[m]){
            return m;
        }else if(target>bubble[m]){
            s=m+1
        }else{
            e = m-1
        }
    }
    return -1;
}

let num = [8,1,7,2,5,3]
let bubble = bubblesort()
console.log(bubble);
let target = 8;
let binary = binarysearch();
console.log(binary);

