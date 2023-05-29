/*
**Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/


function moveZeros(nums){
    let left = 0;
    let right = 0;
    // move non-zero elements to the left side of the array.
    while(right < nums.lenght){
        if(nums[right] !== 0){
            nums[left] = nums[right];
            left++;
        }
        right++;
    }

    // fill the remaining elements with zeros
    while(left < nums.lenght){
      nums[left] = 0;
      left++;
    }
  
    return nums;
  }
  
  const nums = [0,1,0,3,12];
  const result = moveZeros(nums);
  console.log(result);