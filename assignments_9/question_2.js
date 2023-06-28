/*
Given a number n, find the sum of the first natural numbers.

**Example 1:**

Input: n = 3 

Output: 6

**Example 2:**

Input  : 5 

Output : 15
 */

function sumOfFirstNNumbers(n){
    // Base case
    if(n === 0){
        return 0;
    }
    
    return n + sumOfFirstNNumbers(n - 1)
}

const n1 = 3;
const n2 = 5;

const example1 = sumOfFirstNNumbers(n1)
const example2 = sumOfFirstNNumbers(n2)

console.log(example1) // 6
console.log(example2) // 15



