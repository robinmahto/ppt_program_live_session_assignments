/*
 Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

**Example 1 :** 

Input: N = 5, P = 2

Output: 25

**Example 2 :**
Input: N = 2, P = 5

Output: 32
*/

function exponentiation(n, p){
  // base case
  if(p === 0){
    return 1;
  }

  return n * exponentiation(n, p -1)
}

const example1 = exponentiation(5, 2);
const example2 = exponentiation(2, 5);

console.log(example1) // 25
console.log(example2) // 32