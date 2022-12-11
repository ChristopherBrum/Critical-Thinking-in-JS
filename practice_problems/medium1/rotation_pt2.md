# Rotation Part 2

```js
/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

Input: 2 numbers
- first number is the collection of numbers to be rotated
- second number is the number of digits to be rotated

Output: 1 string
- the returned value represents the given number collection with the specified number of elements rotated to the left
- we can expect the appropriate number argument always being passed in

Rules:
Explicit:
- rotate the last n digits in the collection of digits
- a rotation consists of shifting the last n number of digits to the left
  - we can think of this as having the last n digits of the collection being moved one place to the left except for the first of those n digits, which is moved to the end
- return the rotated number collection as a string

Implicit:
- a number and a number collection wil always be passed in to the function invocation
- the arguments will be whole numbers
- 

Questions:
- Can I expect to always have two numbers passed to this function invocation?
- How should I deal with non-number types passed to the function?
- Should the returned value be a number? Or a different type? 
  return a string
- does anything special happen if we pass 0 in as a number argument?
- will the arguments always be whole numbers?
- can the number argr be > the digit collection length?
  no

Example:
735291, 4

first digits --> 73
last 4 --> 5291
remove the last digit and at to the end
last 4 --> 2915

push the last four back together with the first digits
rotated --> 73 + 2915

return 732915

DS:
- coerce the digit collection into a string
- coerce the digit string into an array
- will work with this arrayt as we rotate 

Algo
- guard clause, return NaN if
  - either argument is not a number
  
- coerce the digit collection to a string

- guard clause, return NaN if
  - n is greater than collection length
  
- coerce the digit collection to an array (back)
- splice digits starting from digits length to the end (front)
- remove the first element in back
- push removed element to the back of 'back'
- combine front and back
- join and return

*/

function rotateRightmostDigits(digits, n) {
  if (typeof digits !== 'number' || typeof n !== 'number') return NaN;
  let digitsStr = String(digits);
  if (digitsStr.length < n) return NaN;
  
  let front = digitsStr.split('');
  let back = front.splice(digitsStr.length - n);
  back.push(back.shift());
  return front.concat(back).join('');
}

console.log(rotateRightmostDigits('735291', 1)); // NaN
console.log(rotateRightmostDigits(735291, '1')); // NaN
console.log(rotateRightmostDigits(735291));      // NaN
console.log(rotateRightmostDigits('735291'));    // NaN
console.log(rotateRightmostDigits());            // NaN

console.log(rotateRightmostDigits(735291, 10) ); // NaN
console.log(rotateRightmostDigits(735291, 100)); // NaN

console.log(rotateRightmostDigits(735291, 1) == 735291);
console.log(rotateRightmostDigits(735291, 2) == 735219);
console.log(rotateRightmostDigits(735291, 3) == 735912);
console.log(rotateRightmostDigits(735291, 4) == 732915);
console.log(rotateRightmostDigits(735291, 5) == 752913);
console.log(rotateRightmostDigits(735291, 6) == 352917);
```
