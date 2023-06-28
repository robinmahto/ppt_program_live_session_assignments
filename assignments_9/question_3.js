/*
Given a positive integer, N. Find the factorial of N. 

**Example 1:**

Input: N = 5 

Output: 120

**Example 2:**

Input: N = 4

Output: 24
*/

function factorial(n){
    // base case
    if(n === 0 || n === 1){
        return 1;
    }

    return n * factorial(n -1);
}


const n1 = 5;
const n2 = 4;

const example1 = factorial(n1)
const example2 = factorial(n2)

console.log(example1) // 120
console.log(example2) // 24