# Next Featured

```js
/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

-----------------------------------
Input: 1 number
- we will start searching for the next featured number here

Output: 1 number
- is the next featured number found after the given number
- if not featured number is found, issue error message

Rules:
Featured Number:
- is a mulitple of 7
- is an odd number
- each digit within it only appears once
- largest possible featured number is 9876543201

- write a function that takes one number
- return the next greater featured number, starting at the given number
- return error emssage if no featured number is found --> "There is no possible number that fulfills those requirements."


Questions:
- is zero an acceptable input?
  yes
- are negative numbers allowed? 
  no, return undefined
- do I need to handle non-number arguments? 
  yes
- if so, how should I handle them?
  return undefined
- will given numbers always be whole numbers?
  yes
- how should I handle NaN or Infinity being passed in?
  return undefined

DS:
- iterating through each number starting at one greater than given number
- coerce the given number into an array and split into characters

Algo:
Invlaid Input Handling:
- return undefined if...
  - the argument is not a number type
  - the given number is < 0
  - the given number is NaN
  - the given number is Infinity/-Infinity
    - return undefined

- if given number is >= 9876543201
  - log message to console

- iterate starting from 1 greater than the given number
  - if the current number...
    - is odd
    - is evenly divisible by 7
    - only contains unique digits (no repeating digits)
  - return current number
- otherwise log message
*/

function featured(number) {
  const MAX = 9876543201;

  if (invalidType(number) || invalidNumber(number)) return undefined;
  if (number >= 9876543201) {
    console.log("There is no possible number that fulfills those requirements.");
    return;
  }

  for (let i = number + 1; i <= MAX; i += 1) {
    if (oddMultipleOfSeven(i) && uniqueDigits(i)) {
      return i;
    }
  }
}

function invalidType(num) {
  return typeof num !== 'number';
}

function invalidNumber(num) {
  return (num < 0) || (Number.isNaN(num)) || (!isFinite(num));
}

function oddMultipleOfSeven(num) {
  return (num % 2 !== 0) && (num % 7 === 0);
}

function uniqueDigits(num) {
  let basket = [];
  let digits = String(num).split('');

  for (let i = 0; i < digits.length; i += 1) {
    if (basket.includes(digits[i])) return false;
    basket.push(digits[i]);
  }

  return true;
}

console.log(featured());             // undefined
console.log(featured('123'));        // undefined
console.log(featured([]));           // undefined

console.log(featured(-6));           // undefined
console.log(featured(NaN));          // undefined
console.log(featured(Infinity));     // undefined

console.log(featured(0));            // 7
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
```
