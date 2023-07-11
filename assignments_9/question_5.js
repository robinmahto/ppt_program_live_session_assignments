/*
Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45
*/

function findMax(arr){
    if(arr.length === 1){
        return arr[0];
    }else{
        const firstElement = arr[0];
        const remainingElements = arr.slice(1);
        const maxOfRemaining = findMax(remainingElements);
        return Math.max(firstElement, maxOfRemaining);
    }
}

const arr1 = [1, 4, 3, -5, -4, 8, 6];
const arr2 = [1, 4, 45, 6, 10, -8];

console.log(findMax(arr1)); // 8
console.log(findMax(arr2)); // 45