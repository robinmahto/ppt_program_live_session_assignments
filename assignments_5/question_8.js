/*
  An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].
*/

function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const original = [];
    const set = new Set();
  
    for (const num of changed) {
      original.push(num / 2);
      set.add(num);
    }
  
    for (const num of changed) {
      if (!set.has(num) && !set.has(num / 2)) {
        return [];
      }
    }
  
    return original;
  }
  
  // Example 1:
  const changed = [1, 3, 4, 2, 6, 8];
  console.log(findOriginalArray(changed)); // Output: [1, 3, 4]
  