/*
 Implement a Stack using two queues q1 and q2.

 Example : 1
 Input:
push(2)
push(3)
pop()
push(4)
pop()
Output:3 4
Explanation:
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the
        stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4

Example : 2

Input:
push(2)
pop()
pop()
push(3)
Output:2 -1

*/

// example : 1
class Stack1 {

   constructor(){
      this.stack = []
   }

   push(el){
     this.stack.push(el)
   }

   pop(){
      this.stack.pop();
   }

}

const result = new Stack1();

result.push(2) // the stack will be {2}
result.push(3) // the stack will be {2 3}
result.pop() // poped element will be 3 the stack will be {2}
result.push(4) // he stack will be {2 4}
result.pop() // poped element will be 4

console.log(result.stack) // output : [2]


// example 2

class Stack2 {

    constructor(){
        this.stack = []
    }

    push(el){
        this.stack.push(el)
    }

    pop(){
        if(this.stack.length === 0){
            return -1
        }
       return this.stack.pop();
    }

}

const result2 = new Stack2();
result2.push(2)
console.log(result2.pop()) // return 2
console.log(result2.pop()) // return -1
result2.push(4)

