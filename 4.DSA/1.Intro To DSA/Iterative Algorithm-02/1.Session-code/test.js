let nums = [3,2,4]
let target =6

function add(){
    let n = nums.length
    for (let i=0; i<n; i++){
        if(nums[i]+nums[i+1]===target){
            result = [i, i + 1];
            console.log(result);
        }
    }
    return result;
    }
    


    console.log(add());
    

