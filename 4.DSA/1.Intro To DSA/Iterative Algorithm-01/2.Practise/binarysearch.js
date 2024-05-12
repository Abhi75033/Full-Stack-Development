binarySearch=()=>{
    let n = nums.length;
 
    let s= 0;
    let e= n-1;
    while(s<=e){
        let m = Math.floor((s+e)/2);
      
        if(nums[m]==target){
            return m
        }else if(target>nums[m]){
            s=m+1
        }else{
            e=m-1
        }
    }
    return -1;
}


let nums = [1,5,7,8,9]
let target=7;
let binay = binarySearch();
console.log(binay);