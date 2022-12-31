# Single Digit Product

```js /*
Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.

The input of the function is at least one number.

------------------------------------------------
Input: 1 or more numbers

Output: 1 number

Rules:
- take one or more numbers and add them together
- if the sum is more than. one digit in length
  - split the number into individual digits and multiply them together
  - continue to do so until the product is a single digit
- if there is only one arg and it is a single digit, return that arg

Example:

sumDigProd(16, 28) // ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(1, 2, 3, 4, 5, 6) // ➞ 2
1 + 2 + 3 + 4 + 5 + 6 = 21
2 * 1 = 2

Questions:
- If an argument is not a number, log 'invalid input'
- If any arg is negative, log 'invalid input'
- If any arg is NaN or non-finite, log 'invalid input'

DS:
- in: one or more numbers
- intermediate: 
  - collecting all arguments into an array for iteration
- out: 1 number

Algo:
- log 'invalid input' if...
  - any value passed in is non a Number
  - any value passed in is negative
  - any value passed in is NaN
  - any value passed in is not finite

- if only given one arg and it is a single digit, return that arg

- find the sum of all of the given digits (sum)
- if sum is a single digit, return single digit
- loop begins here
  - convert sum into a string
  - split into an array of digits
  - transform each digit into a number
  - find these numbers product
  - return the product if it consists of a single digit, otherwise repeat


Difference between Number.isFinite() and global isFinite()
In comparison to the global isFinite() function, this method doesn't first convert the parameter to a number. This means only values of the type number and are finite return true, and non-numbers always return false.
*/

function invalidInput(args) {
  if (args.some(arg => !Number.isFinite(arg) || arg < 0 )) {
    console.log('invalid input');
    return true; 
  }
  return false;
}

function singleDigit(digit) {
  return String(digit).length === 1;
}

function sumDigProd(...args) {
  if (invalidInput(args)) return;
  if (args.length === 1 && singleDigit(args[0])) return args[0];

  let sum = args.reduce((sum, digit) => sum + digit, 0);

  while (!singleDigit(sum)) {
    let nums = String(sum).split('').map(Number);
    sum = nums.reduce((product, num) => product * num, 1);
  }

  return sum;
}

console.log(sumDigProd('1', 28)); // logs 'invalid input'
console.log(sumDigProd(1, true)); // logs 'invalid input'
console.log(sumDigProd(1, 2, 3, NaN)); // logs 'invalid input'
console.log(sumDigProd(-1, 28)); // logs 'invalid input'
console.log(sumDigProd(1, Infinity)); // logs 'invalid input'
console.log(sumDigProd(1, -Infinity)); // logs 'invalid input'

console.log(sumDigProd(1, 2, 3)); // ➞ 6
console.log(sumDigProd(50, 51)); // ➞ 0
console.log(sumDigProd(16, 28)); // ➞ 6
console.log(sumDigProd(0)); // ➞ 0
console.log(sumDigProd(1, 2, 3, 4, 5, 6)); // ➞ 2
```
