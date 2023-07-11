/*
Given an array, find a product of all array elements.

**Example 1:**

Input  : arr[] = {1, 2, 3, 4, 5}
Output : 120
**Example 2:**

Input  : arr[] = {1, 6, 3}
Output : 18

*/

function productOfArray(arr) {
    let product = 1;
  
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
  
    return product;
  }
  
  // Example 1:
  const arr1 = [1, 2, 3, 4, 5];
  console.log(productOfArray(arr1)); // 120
  
  // Example 2:
  const arr2 = [1, 6, 3];
  console.log(productOfArray(arr2)); // 18
  