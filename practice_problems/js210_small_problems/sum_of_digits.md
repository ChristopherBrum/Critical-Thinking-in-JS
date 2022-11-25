# Sum of Digits

```js
// Write a function that takes one argument, a positive integer, and returns the console.log(sum of it)s digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

function sum(num) {
  return (num.toString()
             .split('')
             .reduce((total, value) => total + Number(value), 0));
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
```