/*
 Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

function threeSumClosest(nums, target){
    nums.sort((a, b)=> a - b )
    let closestSum = Infinity;

    for (let i = 0; i < nums.length -2 ; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
           const currSum = nums[i] + nums[left] + nums[right];

           if(Math.abs(currSum - target) < Math.abs(closestSum - target)){
              closestSum = currSum;
           }

           if(currSum > target){
             right--;
           }else if(currSum < target){
             left++;
           }else{
             return target;
           }
        }
        
    }

    return closestSum;
}

let nums = [-1, 2, 1, -4];
let target = 1;
let result = threeSumClosest(nums, target);
console.log(result); // output : 2