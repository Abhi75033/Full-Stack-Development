// This is the alorithm used to sort an array

// ------------------------------ Bubble Sort ------------------------------------------------>

function Bubblesort() {
  let n = nums.length;
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j <= n - i; j++) {
      // swap
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j];

        nums[j] = nums[j - 1];

        nums[j - 1] = temp;
      }
    }
  }
  return nums;
}

let nums = [9, 5, 8, 3, 1, 4];
let sorted = Bubblesort(nums);
console.log(sorted);

// Readymade function
// console.log(shortedArray);
