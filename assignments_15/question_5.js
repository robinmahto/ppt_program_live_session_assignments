/*
You are given a string S, the task is to reverse the string using stack.

Example: 1
Input: S="GeeksforGeeks"
Output: skeeGrofskeeG
*/

function reverseString(S) {
    
    const stack = [];
    let reversedString = "";

    for (let i = 0; i < S.length; i++) {
      stack.push(S[i]);
    }
  
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  // Example 1:
  const S = "GeeksforGeeks";
  console.log(reverseString(S)); // Output: skeeGrofskeeG
  