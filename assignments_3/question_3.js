/*
A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

**Example 1:**
Input: nums = [1,2,3]
Output: [1,3,2]
 */

function nextPermutation(nums) {
    const n = nums.length;
    
    // Step 1: Find the first pair where nums[i] < nums[i+1]
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    // Step 2: If no such pair found, reverse the entire array
    if (i === -1) {
        nums.reverse();
        return;
    }
    
    // Step 3: Find the smallest element greater than nums[i] in the subarray to the right of i
    let j = n - 1;
    while (j > i && nums[j] <= nums[i]) {
        j--;
    }
    
    // Step 4: Swap nums[i] with nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
    
    // Step 5: Reverse the subarray to the right of i
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

const nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);  // Output: [1, 3, 2]
