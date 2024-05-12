function Lineareserch(nums, target){
    let n= nums.length;
    for(let i =0; i<=n-1; i++){
        if(nums[i]==target){
            return i;
        }
    }
    return -1
}


let nums = [5,3,4,6,7,8];
let target = 8;
let search = Lineareserch(nums,target)

console.log(search);