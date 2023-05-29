/****
 * 
**Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]

 */

function findErrorNums(nums) {
    let xorResult = 0;
    let missingXOR = 0;
  
    // Step 2
    for (let i = 0; i < nums.length; i++) {
      xorResult ^= nums[i];
      missingXOR ^= (i + 1);
    }
  
    // Step 3
    let rightmostBit = xorResult & ~(xorResult - 1);
  
    let num1 = 0;
    let num2 = 0;
  
    // Step 5
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (num & rightmostBit) {
        num1 ^= num;
      } else {
        num2 ^= num;
      }
    }
  
    // Step 6
    for (let i = 1; i <= nums.length; i++) {
      let num = i;
      if (num & rightmostBit) {
        num1 ^= num;
      } else {
        num2 ^= num;
      }
    }
  
    // Step 7
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (num === num1) {
        return [num1, num2];
      } else if (num === num2) {
        return [num2, num1];
      }
    }
  }
  
  let nums = [1, 2, 2, 4];
  let result = findErrorNums(nums);
  console.log(result); // output : [2,3]
  