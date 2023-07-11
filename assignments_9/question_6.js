/*
Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.

**Example 1:**

Input : a = 2 d = 1 N = 5
Output : 6
The 5th term of the series is : 6

**Example 2:**

Input : a = 5 d = 2 N = 10
Output : 23
The 10th term of the series is : 23
*/

function findNthTerm(a, d, N) {
    return a + (N - 1) * d;
}

//   Example 1:
const a1 = 2;
const d1 = 1;
const N1 = 5;
console.log(findNthTerm(a1, d1, N1)); // 6

//   Example 2:
const a2 = 5;
const d2 = 2;
const N2 = 10;
console.log(findNthTerm(a2, d2, N2)); // 23
