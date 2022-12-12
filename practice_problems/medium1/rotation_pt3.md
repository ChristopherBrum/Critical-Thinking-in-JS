# Rotation Part 3

```js
/*
/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

---------------------------------------------------
Input: 1 number
- should be a number
- may be other types

Output: 1 number (fully rotated)
- if the argument passed in is not a number, return undefined

---------------------------------------------------
Rules:
Explicit:
- write a function that takes one number argument
- function should return a fully rotated version of the given number
  - fully rotated:
    - shift all numbers one space to the left, place first number at the end
  - next round, do the same bu starting from the next index, ignoring the     first index
  - continue this way for each index of the number

Implicit:
- return undefined if arg is not a number or is NaN
- a single digit will return itself
- leading zeros on rotated numbers will be dropped

---------------------------------------------------
Example:
given --> 

starting at index 0
move all digits to the left once space, move first digit to end
735291
7 35291
 ---->
35291 7
--> 352917

keep first digit in place
starting at index 1
move all digits to the left once space, move first digit to end
352917
3 5 2917
   --->
3 2917 5
--> 329175

keep first 2 digits in place
starting at index 2
move all digits to the left once space, move first digit to end
329175
32 9 175
    -->
32 175 9
--> 321759

etc.

---------------------------------------------------
Goal: Take a numner and fully rotate it 

---------------------------------------------------
Questions:
- Can we always expect a number to be passed in?
  no, return undefined if the arg is not a number
- 

---------------------------------------------------
DS:
- splitting the given number into a string and then into an array
- will working with these number values within an array

---------------------------------------------------
Algo:
- guard clause for invalid types
  - return undefined if:
    - argument is not a number OR is NaN
- coerce given number into a string, and then into an array of num chars (digits)
- loop through the digits array using index (0 up to digits.length - 1)
  - assign digits to 'front'
  - splice front from current index to the end (back)
  - shift the first element and push it to the end of back
  - join front and back, assigning value to digits
- join and return digits
*/

function maxRotation(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) return undefined;
  
  let digits = String(num).split('');
  
  for (let i = 0; i < digits.length; i += 1) {
    let front = digits.slice();
    let back = front.splice(i);
    back.push(back.shift());
    digits = front.concat(back);
  }
  return Number(digits.join(''));
}

console.log(maxRotation('735291'));        // undefined
console.log(maxRotation([735291]));        // undefined
console.log(maxRotation('NaN'));           // undefined
console.log(maxRotation());                // undefined

console.log(maxRotation(0));               // 0
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
```
