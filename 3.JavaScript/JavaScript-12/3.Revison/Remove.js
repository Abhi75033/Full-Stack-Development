let nums = [3,2,2,3]

var removeElement = function(nums, val) {
    let count = []
    for(let num of nums){
        if(num != val){
            count.push(num)
        }
    }
    //console.log(count);
    //console.log(nums);
    let numslength = count.length
    for(let i =0;i<nums.length;i++){
        
        nums[i] = count[i]
        console.log(count[i])
    }
console.log(numslength);
};
removeElement(nums, 3)