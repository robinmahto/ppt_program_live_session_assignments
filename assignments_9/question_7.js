/*
Given a string S, the task is to write a program to print all permutations of a given string.

**Example 1:**

***Input:***

*S = “ABC”*

***Output:***

*“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

**Example 2:**

***Input:***

*S = “XY”*

***Output:***

*“XY”, “YX”*

 */

function permutations(string) {
    const result = [];
  
    // Base case:
    if (string.length === 1) {
      result.push(string);
      return result;
    }
  
    for (let i = 0; i < string.length; i++) {
      const firstChar = string[i];
      const remainingChars = string.slice(0, i) + string.slice(i + 1);
  
      const subPermutations = permutations(remainingChars);
  
      for (let j = 0; j < subPermutations.length; j++) {
        result.push(firstChar + subPermutations[j]);
      }
    }
  
    return result;
  }
  
  // Example 1:
  const S1 = "ABC";
  console.log(permutations(S1)); // ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']
  
  // Example 2:
  const S2 = "XY";
  console.log(permutations(S2)); // ['XY', 'YX']
  