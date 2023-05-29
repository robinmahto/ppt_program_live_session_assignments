/***
**Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true
 */

const containDuplicates = (nums)=>{
   let numSet = new Set();
   for (const num of nums) {
      if(numSet.has(num)){
        return true;
      }
      numSet.add(num);
   }
   return false;
}

const nums = [1,2,3,1];
const result = containDuplicates(nums);
console.log(result); // true