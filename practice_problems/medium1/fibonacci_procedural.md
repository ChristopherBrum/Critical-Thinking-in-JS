# Fibonacci Procedural

```js
/*
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

Note that JavaScript can accurately compute integers up to 16 digits long; this means that fibonacci(78) is the largest Fibonacci number that you can accurately compute with simple operations in JavaScript.

------------------------------------------------------

Input: 1 number
- the number argument signifies the number within the fibonacci sequence the function will calculate until
- will be a whole number
- will be positive

Output: 1 number
- the nth fibonacci value 

Rules:
- Find the nth fibonacci number
- fibonacci numbers are determined by added the last two numbers in the sequence together, always starting with 1 and 1.
- 

DS:
- ins and outs: numbers 
- collect the fibonacci numbers in an array

Algo:
- if arg is 0 return arg
- declare a fibNumbers to an array with 1 as the first element
- iterate from the number 1 upward (num)
- if fibNumbers length is < 2, push 1 to fibNumbers
- otherwise, add the last two elements of fibNumber and push to fibNumbers
- return num when it is equal to the argument
*/

function fibonacci(n) {
  if (n === 0) return 0;
  let fibNumbers = [1, 1];

  let count = 2;
  while (count < n) {
    let size = fibNumbers.length;
    let value = fibNumbers[size - 1] + fibNumbers[size - 2];
    fibNumbers.push(value);
    count += 1;
  }
  
  return fibNumbers[fibNumbers.length - 1];
}

console.log(fibonacci(0) === 0);
console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);
```
