/*
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4
*/

function search(nums, target){
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
      let middle = Math.floor((start + end) / 2); 
       if(nums[middle] === target){
         return middle; // key found
       }else if(nums[middle] < target){
         start = middle + 1; // search to the right
       }else{
         end = middle - 1; // search to the left
       }
    }
    return -1; // key was not found
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = search(nums, target);
console.log(result); // output : 4