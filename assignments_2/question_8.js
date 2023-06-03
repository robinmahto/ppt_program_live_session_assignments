/*
  You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/

function minimumScore(nums, k) {
  let minScore = Infinity;
  let minNum = Math.min(...nums);
  let maxNum = Math.max(...nums);
  let initialScore = maxNum - minNum;
   minScore = initialScore;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    let potentialMin = num - k;
    let potentialMax = num + k;

    if (potentialMin >= minNum && potentialMin <= maxNum) {
      minScore = Math.min(minScore, potentialMax - minNum);
    }
    if (potentialMax >= minNum && potentialMax <= maxNum) {
      minScore = Math.min(minScore, maxNum - potentialMin);
    }
  }

  return minScore;
}

let nums = [1];
let k = 0;
let result = minimumScore(nums, k);
console.log(result); // output : 0
