let nums = [0,0,1,1,1,2,2,3,3,4]


var removeDuplicates = function(nums) {
    let k=1;
    console.log(nums[k]);

     for(i=0;i<nums.length-1;i++){
         if(nums[i]!==nums[i+1]){
             nums[k]=nums[i+1];
             console.log(nums[i+1]);
             k++;
         }
     }
     console.log(nums);
     return  console.log(k)
    
    }
    removeDuplicates(nums)
// //     }
// let j =1
// let index;
// let n = nums.length
// for(let i = 0; i<n; i++){
//     if(nums[i]!==nums[i+1])
//     k++

// }

// console.log(j);