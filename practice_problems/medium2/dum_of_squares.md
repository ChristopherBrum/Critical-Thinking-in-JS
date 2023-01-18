# Sum of Squares

```js
/*
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

Input: 1 number
- will need to be a number type to perform calculations
- 

Output: 1 number
- 

Rules:
- write a function that takes a number as an argument
- function computes the difference between...
  - the square of the (sum of the first 'n' positive numbers)
  - the sum of the (squares of the forst 'n' positive integers)
  - 'n' represents the given number
- positive numbers starting from 1 upto the given number will be used for the above calculations
- the given number is included when performing calculation

Example:
given --> 3

the 'square' of the (sum of the first 'n' positive numbers) --> (1 + 2 + 3)**2
the 'sum' of the (squares of the forst 'n' positive integers) --> (1**2 + 2**2 + 3**2)

'square' - 'sum' --> (36 - 14) --> 22

Questions:
- can we assume the value passed in as an argument will always be a number?
  no, other types may be used
- if not, how should we handle other types being passed in?
  return 'invalid input'
- will the numbers always be whole numbers?
  no, round to the closest whole number
- Should I take NaN and Infinity values into account? How so?
  yes, return 'invalid input'
- is  0 an acceptable input?
  yes, return 0
- will negative numbers be something I need to handle?
  return 0

DS:
- iteration using the given number
- possibly collecting the numbers into an array for easier manipulation

Algo:
Invalid Input Handling:
- return 'invalid input' if...
  - arg is not a number
  - arg is NaN
  - arg is not finite
- return 0 if...
  - given value is 1 or less

- round the given numnber if it is not a whole number

- squareOfSum()
  - iterate from 1 up to the given number adding each number together
  - return the square of this sum

- sumOfSquare()
  - find the square of the numbers 1 up to the given number 
  - find the sum of each of those squares values

- return the result of squareOfSums - sumOfSquare

*/

function sumSquareDifference(num) {
  if (invalidType(num)) return 'invalid input';
  if (invalidNumber(num)) return 'invalid input';
  if (invalidValue(num)) return 0;

  num = Math.round(num);
  
  return squareOfSums(num) -  sumOfSquare(num);
}

function invalidType(num) {
  return typeof num !== 'number';
}

function invalidNumber(num) {
  return Number.isNaN(num) || !isFinite(num);
}

function invalidValue(num) {
  return num <= 1;
}

function squareOfSums(num) {
  let sum = 0;

  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }

  return sum**2;
}

function sumOfSquare(num) {
  let sum = 0;

  for (let i = 1; i <= num; i += 1) {
    sum += (i**2);
  }

  return sum;
}

console.log(sumSquareDifference());       // 'invalid input'
console.log(sumSquareDifference('abc'));  // 'invalid input'
console.log(sumSquareDifference(true));   // 'invalid input'
console.log(sumSquareDifference([]));     // 'invalid input'
console.log(sumSquareDifference({}));     // 'invalid input'
console.log(sumSquareDifference({}));     // 'invalid input'

console.log(sumSquareDifference(NaN));       // 'invalid input'
console.log(sumSquareDifference(Infinity));  // 'invalid input'
console.log(sumSquareDifference(-Infinity)); // 'invalid input'

console.log(sumSquareDifference(-3));     // 0
console.log(sumSquareDifference(-10));    // 0
console.log(sumSquareDifference(0));      // 0
console.log(sumSquareDifference(1));      // 0

console.log(sumSquareDifference(2.9));    // 22
console.log(sumSquareDifference(10.111)); // 2640

console.log(sumSquareDifference(3));      // 22
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(100));    // 25164150
```
